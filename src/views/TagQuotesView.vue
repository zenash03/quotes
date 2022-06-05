<template>
    <div class="m-5">
      <div class="flex content-center items-center gap-3 pb-5">
        <BackButton />
        <p class="font-medium p-0">Tags : <span class=" font-normal">{{ toCapitalize(tag) }}</span></p>
      </div>
      <section v-if="error">
        <p>Message : {{ errorMessage.message  }}</p>
      </section>
      <section v-else>
        <div v-if="loading" class="px-5">
          <p>Loading..</p>
        </div>
        <div v-else>
          <div class="grid grid-cols-3 gap-5">
            <Quotes :msg="{items : items, row : 1}" />
            <Quotes :msg="{items : items, row : 2}" />
            <Quotes :msg="{items : items, row : 3}" />
          </div>
          <div class="grid justify-center py-5" v-if="items.data.totalPages > 1">
            <Pagination :msg="{route : 'tagQuotes.page', items : items }" />
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import axios from 'axios';
import Quotes from '@/components/Quotes.vue'
import BackButton from '@/components/BackButton.vue'
import Pagination from '@/components/Pagination.vue';

export default {
    name: 'TagQuotesView',
    data() {
      return {
        tag: null,
        items: null,
        page : null,
        error : false,
        errorMessage : null,
        loading: true,
        url : 'https://api.quotable.io/quotes?tags='
      }
    },
    async created() {
      let tagName = this.$route.params.tagName != undefined ? this.$route.params.tagName : ''
      let PageNumber = this.$route.params.id != undefined ? `&page=${this.$route.params.id}` : ''
      this.tag = tagName
      await axios
        .get(`${this.url}${tagName}${PageNumber}`)
        .then(resp => {
          this.items = resp
        })
        .catch(err => {
          this.error = true, this.errorMessage = err
        })
        .finally(() => this.loading = false)
    },
    components: {
      Quotes,
      BackButton,
        Pagination
    },
    methods: {
      toCapitalize(str) {
        const newArr = str.split('-')
        const newStr = newArr.map((value) => {
          return value.charAt(0).toUpperCase() + value.slice(1)
        }).join(" ")
        return newStr
      }
    }
}
</script>

<style>

</style>