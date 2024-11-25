import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Question, SubmitAnswerParams, AuditAnswerParams } from '@/views/Qa/types';

export const useQaStore = defineStore('qa', () => {
  const questions = ref<Question[]>([]);
  const allQuestions = ref<Question[]>([]); // 存储所有问题
  const page = ref(1);
  const pageSize = 10;

  const fetchQuestions = async () => {
    // 模拟从数据库获取问题列表
    allQuestions.value = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      title: `问题 ${i + 1}: 这是一个示例问题标题`,
      expanded: false,
      answers: [],
    }));
    questions.value = allQuestions.value.slice(0, pageSize); // 初始加载10个问题
  };

  const loadMoreQuestions = async () => {
    const currentLength = questions.value.length;
    const moreQuestions = allQuestions.value.slice(currentLength, currentLength + pageSize);
    questions.value = questions.value.concat(moreQuestions);
    page.value += 1;
    return moreQuestions;
  };

  const fetchAnswers = async (questionId: number) => {
    // 模拟获取回答列表
    const answers = [
      {
        id: 101,
        username: '用户A',
        content: 'Composition API 主要通过 setup 函数来使用，可以更好地组织代码逻辑...',
        status: 'pending',
        createTime: new Date().toISOString(),
      },
      {
        id: 102,
        username: '用户B',
        content: '建议先了解 ref、reactive 等基础概念，然后逐步学习更高级的特性...',
        status: 'approved',
        createTime: new Date().toISOString(),
      },
      {
        id: 103,
        username: '用户C',
        content: 'TypeScript 可以帮助我们在 Vue 中更好地进行类型检查和代码提示...',
        status: 'approved',
        createTime: new Date().toISOString(),
      },
      {
        id: 104,
        username: '用户D',
        content: 'Vue Router 是 Vue.js 的官方路由管理器，提供了多种路由配置方式...',
        status: 'pending',
        createTime: new Date().toISOString(),
      },
    ];

    const question = questions.value.find(q => q.id === questionId);
    if (question) {
      question.answers = answers.filter(answer => answer.id % questionId === 0); // 简单的过滤逻辑
    }
  };

  const submitAnswer = async (params: SubmitAnswerParams) => {
    // 模拟提交回答
    console.log('提交回答:', params);
  };

  const auditAnswer = async (params: AuditAnswerParams) => {
    // 模拟审核回答
    console.log('审核回答:', params);
  };

  const initTestData = () => {
    fetchQuestions();
  };

  return {
    questions,
    fetchQuestions,
    loadMoreQuestions,
    fetchAnswers,
    submitAnswer,
    auditAnswer,
    initTestData,
  };
});
