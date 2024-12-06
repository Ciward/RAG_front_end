<template>
  <div class="qa-container">
    <div class="qa-list">
      <div v-for="question in questions" :key="question.id" class="qa-item">
        <div class="question-header">
          <h3>{{ question.title }}</h3>
          <div class="button-group">
            <a-button size="small" @click="expandQuestion(question)">
              {{ question.expanded ? '收起' : '展开' }}
            </a-button>
            <a-button type="primary" size="small" @click="showAnswerDialog(question)">
              回答
            </a-button>
          </div>
        </div>

        <div v-if="question.expanded" class="answers-container">
          <div v-for="answer in question.answers" :key="answer.id" class="answer-card">
            <div class="answer-header">
              <span class="username">{{ answer.username }}</span>
              <span class="time">{{ formatDate(answer.createTime) }}</span>
            </div>
            <div class="answer-content">{{ answer.content }}</div>
            <div v-if="isAdmin" class="admin-actions">
              <a-button
                :type="answer.status === 'approved' ? 'primary' : 'default'"
                size="small"
                @click="handleAudit(answer, question.id)"
              >
                {{ answer.status === 'approved' ? '已通过' : '待审核' }}
              </a-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a-modal
      v-model:visible="answerDialogVisible"
      title="回答问题"
      @ok="submitAnswer"
      @cancel="answerDialogVisible = false"
    >
      <div class="original-question">
        <h4>原问题：</h4>
        <p>{{ currentQuestion?.title }}</p>
      </div>
      <a-form>
        <a-form-item>
          <a-textarea v-model:value="newAnswer" :rows="4" placeholder="请输入您的回答..." />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { message } from 'ant-design-vue';
import type { Question, Answer } from './types';
import { useQaStore } from '@/store/qa';
import { storeToRefs } from 'pinia';
import moment from 'moment';

const qaStore = useQaStore();
const { questions } = storeToRefs(qaStore);
const answerDialogVisible = ref(false);
const currentQuestion = ref<Question | null>(null);
const newAnswer = ref('');
const isAdmin = ref(false); // 这里需要从用户状态获取

onMounted(async () => {
  await qaStore.fetchQuestions();
});

const expandQuestion = async (question: Question) => {
  if (!question.expanded) {
    await qaStore.fetchAnswers(question.id);
  }
  question.expanded = !question.expanded;
};

const showAnswerDialog = (question: Question) => {
  currentQuestion.value = question;
  answerDialogVisible.value = true;
  newAnswer.value = '';
};

const submitAnswer = async () => {
  if (!currentQuestion.value || !newAnswer.value.trim()) {
    message.warning('请输入回答内容');
    return;
  }

  try {
    await qaStore.submitAnswer({
      questionId: currentQuestion.value.id,
      content: newAnswer.value,
    });
    message.success('回答提交成功');
    answerDialogVisible.value = false;
    await expandQuestion(currentQuestion.value);
  } catch (error) {
    message.error('提交失败，请重试');
  }
};

const handleAudit = async (answer: Answer, questionId: number) => {
  try {
    await qaStore.auditAnswer({
      answerId: answer.id,
      questionId,
      status: answer.status === 'approved' ? 'pending' : 'approved',
    });
    message.success('审核状态更新成功');
  } catch (error) {
    message.error('操作失败，请重试');
  }
};

const formatDate = (date: string) => {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
};
</script>

<style lang="scss" scoped>
.qa-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.qa-item {
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  margin-bottom: 16px;
  padding: 16px;
  background: #fff;
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
  }
}

.button-group {
  display: flex;
  gap: 8px;
}

.answers-container {
  margin-top: 16px;
}

.answer-card {
  background: #fafafa;
  border-radius: 4px;
  padding: 12px;
  margin-top: 8px;
}

.answer-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

.answer-content {
  line-height: 1.6;
}

.admin-actions {
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

.original-question {
  margin-bottom: 20px;
  padding: 12px;
  background: #fafafa;
  border-radius: 4px;

  h4 {
    margin: 0 0 8px;
  }

  p {
    margin: 0;
  }
}
</style>
