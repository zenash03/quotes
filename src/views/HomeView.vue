<template>
  <div class="m-5">
    <div class="grid grid-cols-3 gap-5">
      <Quotes :msg="{row : 1, pageNumber : page, type : 'quotes'}" />
      <Quotes :msg="{row : 2, pageNumber : page, type : 'quotes'}" />
      <Quotes :msg="{row : 3, pageNumber : page, type : 'quotes'}" />
    </div>
    <div class="grid justify-center py-5">
      <Pagination />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Quotes from '@/components/Quotes.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Quotes,
    Pagination
  },
  data() {
    return {
      page : null
    }
  },
  created() {
    let pageNumber = this.$route.params.id != undefined ? this.$route.params.id : 1
    this.page = pageNumber
  }
}
</script>
