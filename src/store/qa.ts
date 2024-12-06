import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Question, Answer } from '@/views/Qa/types';

export const useQaStore = defineStore('qa', () => {
  const questions = ref<Question[]>([]);
  const allQuestions = ref<Question[]>([]);
  const page = ref(1);
  const pageSize = 10;

  const fetchQuestions = async () => {
    allQuestions.value = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      title: `问题 ${i + 1}: 这是一个示例问题标题`,
      expanded: false,
      solved: false,
      answers: [],
    }));
    questions.value = allQuestions.value.slice(0, pageSize);
  };

  const loadMoreQuestions = async () => {
    const currentLength = questions.value.length;
    const moreQuestions = allQuestions.value.slice(currentLength, currentLength + pageSize);
    questions.value = questions.value.concat(moreQuestions);
    page.value += 1;
    return moreQuestions;
  };

  const fetchAnswers = async (questionId: number) => {
    const answers: Answer[] = [
      {
        id: 101,
        questionId,
        username: '当前用户',
        content: '这是当前用户的回答，待审核...',
        status: 'pending',
        createTime: new Date().toISOString(),
      },
      {
        id: 102,
        questionId,
        username: '当前用户',
        content: '这是当前用户的回答，已通过审核。',
        status: 'approved',
        createTime: new Date().toISOString(),
      },
      {
        id: 103,
        questionId,
        username: '当前用户',
        content: '这是当前用户的回答，未通过审核。',
        status: 'rejected',
        createTime: new Date().toISOString(),
      },
      {
        id: 104,
        questionId,
        username: '其他用户',
        content: '这是其他用户的回答。',
        status: 'approved',
        createTime: new Date().toISOString(),
      },
    ];

    const question = questions.value.find(q => q.id === questionId);
    if (question) {
      question.answers = answers;
    }
  };

  const initTestData = () => {
    fetchQuestions();
  };

  return {
    questions,
    fetchQuestions,
    loadMoreQuestions,
    fetchAnswers,
    initTestData,
  };
});
