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
          <Quotes :msg="{items : items, row : 1}" />
          <Quotes :msg="{items : items, row : 2}" />
          <Quotes :msg="{items : items, row : 3}" />
        </div>
        <div class="grid justify-center py-5">
          <Pagination :msg="{route : 'home.page', items : items}" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Quotes from '@/components/Quotes.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'HomeView',
  components: {
    Quotes,
    Pagination
  },
  data() {
    return {
      items : null,
      page : null,
      error : false,
      errorMessage : null,
      loading : true,
      url : 'https://api.quotable.io/quotes?page='
    }
  },
  async created() {
    let pageNumber = this.$route.params.id != undefined ? this.$route.params.id : 1
    this.page = pageNumber
    await axios
      .get(`${this.url}${pageNumber}`)
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
