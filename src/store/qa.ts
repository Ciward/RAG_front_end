import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Question, Answer } from '@/views/Qa/types';
import { postRequest } from '@/utils/api.js';
import { ElMessage } from 'element-plus';
export const useQaStore = defineStore('qa', () => {
  const questions = ref<Question[]>([]);
  const allQuestions = ref<Question[]>([]);
  const page = ref(1);
  const pageSize = 10;

  const fetchQuestions = async () => {
    await postRequest('/QA/getQuestionsByPage', {
      page: page.value,
      size: pageSize,
    }).then(response => {
      questions.value = response.obj;
    }).catch(error => {
      ElMessage.error('获取问题列表失败，请重试');
    });
  };

  const loadMoreQuestions = async () => {
    page.value++;
    await postRequest('/QA/getQuestionsByPage', {
      page: page.value,
      size: pageSize,
    }).then(response => {
      questions.value.push(...response.obj);
    }).catch(error => {
      ElMessage.error('获取问题列表失败，请重试');
    });
  };

  const fetchAnswers = async (questionId: number) => {
    await postRequest('/QA/getAnswersByQuestionId', {
      questionId: questionId,
    }).then(response => {
      const question = questions.value.find(q => q.id === questionId);
      if (question) {
        question.answers = response.obj;
        }
      }).catch(error => {
        ElMessage.error('获取答案列表失败，请重试');
      });
  };


  const submitAnswer = async (questionId: number, answerStr: string) => {
    if (!questionId || !answerStr.trim()) {
      ElMessage.warning('请输入回答内容');
      return;
    }
    await postRequest('/QA/answerQuestion', {
      questionId,
      answerStr,
    }).then(response => {
      if (response.msg) {
          ElMessage.success('回答提交成功');
          //await expandQuestion(questionId);
        } else {
          throw new Error('提交失败');
        }
      }).catch(error => {
        ElMessage.error('提交失败，请重试');
      });
  };

  const approveAnswer = async (answer) => {
    await postRequest('/QA/checkAnswer', {
      answerId: answer.id,
      valid: 1, // 1表示通过
    }).then(response => {
      if (response.msg) {
          answer.status = 'approved';
          ElMessage.success('答案已通过审核');
        } else {
          throw new Error('审核失败');
        }
      }).catch(error => {
        ElMessage.error('审核失败，请重试');
      });
  };


  const rejectAnswer = async (answer) => {
    await postRequest('/QA/checkAnswer', {
      answerId: answer.id,
      valid: 0, // 0表示不通过
    }).then(response => {
      if (response.msg) {
        answer.status = 'rejected';
        ElMessage.success('答案已被拒绝');
      } else {
        throw new Error('审核失败');
      }
    }).catch(error => {
      ElMessage.error('审核失败，请重试');
    });
  };

  return {
    questions,
    fetchQuestions,
    loadMoreQuestions,
    fetchAnswers,
    submitAnswer,
    approveAnswer,
    rejectAnswer,
  };
});
