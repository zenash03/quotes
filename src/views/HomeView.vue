<template>
  <div class="m-5">
    <section v-if="error">
      <p>Message : {{ errorMessage.message }}</p>
    </section>
    <section v-else>
      <div v-if="loading">
        <p>Loading...</p>
      </div>
      <div v-else>
        <div class="grid grid-cols-3 gap-5">
          <Quotes :msg="{items : items, row : 1, pageNumber : page, type : 'quotes'}" />
          <Quotes :msg="{items : items, row : 2, pageNumber : page, type : 'quotes'}" />
          <Quotes :msg="{items : items, row : 3, pageNumber : page, type : 'quotes'}" />
        </div>
        <div class="grid justify-center py-5">
          <Pagination :msg="{pageNumber : page, route : 'home.page'}" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
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
      items : null,
      page : null,
      error : false,
      errorMessage : null,
      loading : true
    }
  },
  async created() {
    let pageNumber = this.$route.params.id != undefined ? this.$route.params.id : 1
    this.page = pageNumber
    // let url , parameter
    // if(this.msg.type == 'quotes'){
    //     url = 'https://api.quotable.io/quotes?page='
    //     parameter = this.msg.pageNumber
    // }
    // if(this.msg.type == 'tags'){
    //     url = 'https://api.quotable.io/quotes?tags='
    //     parameter = this.msg.tagName
    // }
    await axios
      .get(`https://api.quotable.io/quotes?page=1`)
      .then(resp => {
        this.items = resp
      })
      .catch(err => {
        this.error = true, this.errorMessage = err
      })
      .finally(() => this.loading = false)
  },
}
</script>
