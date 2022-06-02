<template>
  <div class="py-2 grid grid-cols-2 gap-7">
      <div v-for="item in msg.items.data.results" :key="item.id">
            <Author :msg="{'item' : item}" />
      </div>
  </div>
</template>

<script>
import Author from '@/components/Author.vue'

export default {
    name : 'Authors',
    components : {
        Author
    },
    props : {
        msg : Object
    }
}
</script>

<style>

</style>