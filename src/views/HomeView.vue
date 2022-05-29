<template>
  <div class="mt-5">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="p-5 grid grid-cols-3 gap-5">
      <Quotes :msg="{row: 1, pageNumber : page}" />
      <Quotes :msg="{row: 2, pageNumber : page}" />
      <Quotes :msg="{row: 3, pageNumber : page}" />
    </div>
    <div class="grid justify-center mb-5">
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
    let pageNumber = this.$route.params.id
    this.page = pageNumber
  }
}
</script>
