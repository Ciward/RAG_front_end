<template>
  <Teleport to="body">
    <a-modal
      v-model:open="chatSourceVisible"
      centered
      :title="common.dataSource"
      wrap-class-name="chat-source-modal"
      :footer="null"
    >
      <div class="chat-source">
        <PdfView v-if="sourceType === 'pdf' && sourceUrl" :source-url="sourceUrl" />
        <DocxView v-if="sourceType === 'docx' && sourceUrl" :source-url="sourceUrl" />
        <ExcelView v-if="sourceType === 'xlsx' && sourceUrl" :source-url="sourceUrl" />
        <a-image
          v-if="imageArr.includes(sourceType) && sourceUrl"
          :src="sourceUrl"
          :preview-mask="true"
        />
        <div v-if="sourceType === 'txt'" class="txt scrollable-content">
          {{ textContent }}
        </div>
        <HighLightMarkDown v-if="sourceType === 'md'" class="txt scrollable-content" :content="textContent" />
      </div>
    </a-modal>
  </Teleport>
</template>

<script lang="ts" setup>
import { useChatSource } from '@/store/useChatSource';
import { getLanguage } from '@/language/index';

const common = getLanguage().common;

const { chatSourceVisible, sourceUrl, sourceType, textContent } = storeToRefs(useChatSource());

let imageArr = ['jpg', 'png', 'jpeg'];
</script>

<style lang="scss" scoped>
.chat-source {
  .scrollable-content {
    max-height: 800px;
    overflow-y: auto;
    white-space: pre-wrap;
  }
}
</style>
