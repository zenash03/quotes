<template>
    <div class="m-5">
      <div class="flex content-center items-center gap-3 pb-5">
        <BackButton />
        <p class="font-medium p-0">Tags : <span class=" font-normal">{{ tag }}</span></p>
      </div>
    <div class="grid grid-cols-3 gap-5">
      <Quotes :msg="{row: 1, tagName : tag, type : 'tags'}" />
      <Quotes :msg="{row: 2, tagName : tag, type : 'tags'}" />
      <Quotes :msg="{row: 3, tagName : tag, type : 'tags'}" />
    </div>
    <div class="grid justify-center py-5">
      <Pagination />
    </div>
  </div>
</template>

<script>
import Quotes from '@/components/Quotes.vue'
import BackButton from '@/components/BackButton.vue'

export default {
    name: 'TagQuotesView',
    data() {
      return {
        tag: null
      }
    },
    created() {
      let tagName = this.$route.params.tagName != undefined ? this.$route.params.tagName : ''
      this.tag = tagName
    },
    components: {
      Quotes,
      BackButton
    },
}
</script>

<style>

</style>