<template>
    <div class="m-5">
        <div class="grid divide-y">
            <div class="grid grid-cols-2 gap-4 py-2 pb-3">
                <div class="col-span-2">
                    <BackButton />
                </div>
            </div>
            <section v-if="error">
                <p>Message : {{ errorMessage.message }}</p>
            </section>
            <section v-else>
                <div v-if="loading">
                    <p>Loading...</p>
                </div>
                <div v-else class="grid grid-cols-6 gap-4 py-3">
                    <div class=" col-span-2">
                        <img class="object-cover w-full h-96 rounded-lg md:h-auto" v-bind:src="'https://images.quotable.dev/profile/400/' + items.slug + '.jpg'" />
                    </div>
                    <div class="col-span-3 m-4">
                        <h2 class="text-2xl font-bold text-gray-700">{{ items.name }}</h2>
                        <h4 class="my-1 text-lg">{{ items.description }}</h4>
                        <div class="grid grid-cols-1 divide-y gap-3 mt-5">
                            <p class="font-medium text-gray-700">Info</p>
                            <div class="py-2 grid grid-cols-1 gap-4">
                                <p>{{ items.bio }}</p>
                                <p class="font-medium">Total Quote : {{ items.quoteCount }}</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 divide-y gap-3 mt-5">
                            <p class="font-medium text-gray-700">Source</p>
                            <div class="py-2 grid grid-cols-1 gap-4">
                                <a v-bind:href="items.link" target="_blank" class=" text-sky-500">Wikipedia</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

import BackButton from '@/components/BackButton.vue'
export default {
    name : 'SingleAuthorView',
    components : {
        BackButton
    },
    data() {
        return {
            items : null,
            error : false,
            errorMessage : null,
            loading : true,
            url : 'https://api.quotable.io/authors?slug='
        }
    },
    async created() {
        let authorSlug = this.$route.params.authorSlug
        axios
            .get(`${this.url}${authorSlug}`)
            .then(resp => {
                this.items = resp.data.results[0]
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