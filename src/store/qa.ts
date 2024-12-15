import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Question, Answer } from '@/views/Qa/types';

export const useQaStore = defineStore('qa', () => {
  const questions = ref<Question[]>([]);
  const allQuestions = ref<Question[]>([]);
  const page = ref(1);
  const pageSize = 10;

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/QA/getQuestionsByPage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + yourToken, // 替换为实际的令牌
        },
        body: JSON.stringify({
          page: 1,
          size: pageSize,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        questions.value = data.data;
      } else {
        throw new Error('获取问题列表失败');
      }
    } catch (error) {
      message.error('获取问题列表失败，请重试');
    }
  };

  const loadMoreQuestions = async () => {
    try {
      const response = await fetch('/QA/getQuestionsByPage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + yourToken, // 替换为实际的令牌
        },
        body: JSON.stringify({
          page: page.value + 1,
          size: pageSize,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.data.length > 0) {
          questions.value = questions.value.concat(data.data);
          page.value += 1;
        } else {
          noMoreQuestions.value = true;
        }
      } else {
        throw new Error('加载更多问题失败');
      }
    } catch (error) {
      message.error('加载更多问题失败，请重试');
    }
  };

  const fetchAnswers = async (questionId: number) => {
    try {
      const response = await fetch('/QA/getAnswersByQuestionId', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + yourToken, // 替换为实际的令牌
        },
        body: JSON.stringify({
          questionId,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const question = questions.value.find(q => q.id === questionId);
        if (question) {
          question.answers = data.data;
        }
      } else {
        throw new Error('获取答案列表失败');
      }
    } catch (error) {
      message.error('获取答案列表失败，请重试');
    }
  };

  const initTestData = () => {
    fetchQuestions();
  };

  const submitAnswer = async () => {
    if (!currentQuestion.value || !newAnswer.value.trim()) {
      message.warning('请输入回答内容');
      return;
    }

    try {
      const response = await fetch('/QA/answerQuestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + yourToken, // 替换为实际的令牌
        },
        body: JSON.stringify({
          questionId: currentQuestion.value.id,
          answerStr: newAnswer.value,
        }),
      });

      if (response.ok) {
        message.success('回答提交成功');
        answerDialogVisible.value = false;
        await expandQuestion(currentQuestion.value);
      } else {
        throw new Error('提交失败');
      }
    } catch (error) {
      message.error('提交失败，请重试');
    }
  };

  const approveAnswer = async (answer) => {
    try {
      const response = await fetch('/QA/checkAnswer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + yourToken, // 替换为实际的令牌
        },
        body: JSON.stringify({
          answerId: answer.id,
          valid: 1, // 1表示通过
        }),
      });

      if (response.ok) {
        answer.status = 'approved';
        message.success('答案已通过审核');
      } else {
        throw new Error('审核失败');
      }
    } catch (error) {
      message.error('审核失败，请重试');
    }
  };

  const rejectAnswer = async (answer) => {
    try {
      const response = await fetch('/QA/checkAnswer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + yourToken, // 替换为实际的令牌
        },
        body: JSON.stringify({
          answerId: answer.id,
          valid: 0, // 0表示不通过
        }),
      });

      if (response.ok) {
        answer.status = 'rejected';
        message.success('答案已被拒绝');
      } else {
        throw new Error('审核失败');
      }
    } catch (error) {
      message.error('审核失败，请重试');
    }
  };

  return {
    questions,
    fetchQuestions,
    loadMoreQuestions,
    fetchAnswers,
    initTestData,
    submitAnswer,
    approveAnswer,
    rejectAnswer,
  };
});
