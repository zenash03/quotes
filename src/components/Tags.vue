<template>
  <div class="flex flex-wrap py-2">
      <div v-for="item in msg.items" :key="item.id">
        <Tag :msg="{item : item}" />
      </div>
  </div>
</template>

<script>
import Tag from '@/components/Tag.vue'
export default {
    name: 'Tags',
    props : {
        msg : Object
    },
    components: {
        Tag
    },
}
</script>

<style>

</style>