<template>
    <div class="m-5">
        <div class="grid divide-y">
            <p class=" font-medium p-3">Authors</p>
            <div class="py-2">
                <Authors :msg="{'items' : items}" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Authors from '@/components/Authors.vue'

export default {
    name : 'AuthorsView',
    data() {
        return {
            items : null,
            error : false,
            errorMessage : null,
            loading : false
        }
    },
    components: {
        Authors
    },
    async created() {
        await axios
            .get('https://api.quotable.io/authors?sortBy=name&order=asc')
            .then(resp => {
                this.items = resp
                console.log(resp)
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