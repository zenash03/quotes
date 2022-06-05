<template>
    <div class="m-5">
        <div class="grid divide-y">
            <p class=" font-medium p-3">Authors</p>
            <section v-if="error">
                <p>Message : {{ errorMessage.message }}</p>
            </section>
            <section v-else>
                <div v-if="loading" class="py-2 px-5">
                    <p>Loading...</p>
                </div>
                <div v-else class="py-2">
                    <Authors :msg="{'items' : items}" />
                    <div class="grid justify-center py-5">
                        <Pagination :msg="{route : 'authors.page', items : items}" />
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Authors from '@/components/Authors.vue'
import Pagination from '@/components/Pagination.vue'


export default {
    name : 'AuthorsView',
    data() {
        return {
            items : null,
            page : null,
            error : false,
            errorMessage : null,
            loading : true,
            url : 'https://api.quotable.io/authors?sortBy=name&order=asc&page='
        }
    },
    components: {
        Authors,
        Pagination
    },
    async created() {
        let pageNumber = this.$route.params.id != undefined ? this.$route.params.id : 1
        this.page = pageNumber
        await axios
            .get(`${this.url}${pageNumber}`)
            .then(resp => {
                this.items = resp
                // console.log(resp)
            })
            .catch(err => {
                this.error = true, this.errorMessage = err
            })
            .finally(() => this.loading = false)
    }
}
</script>

<style>

</style>