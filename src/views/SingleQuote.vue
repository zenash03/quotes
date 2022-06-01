<template>
    <div class="m-5">
        <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2">
                <BackButton />
            </div>
            <div class="">
                <div class="bg-white rounded-lg border border-gray-200 shadow-sm p-5 mb-5">
                    <p class="mb-3 font-medium text-gray-900 text-2xl">{{ items.content }}</p>
                    <h5 class="mb-2 text-base font-bold tracking-tight text-sky-500">{{ items.author }}</h5>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-3">
                <div class="grid grid-cols-1 divide-y gap-3">
                    <p class="font-medium text-gray-700">Tags</p>
                    <div class="py-2">
                        <Tags :msg="{'items' : items.tags}" />
                    </div>
                </div>
                <div class="grid grid-cols-1 divide-y gap-3">
                    <p class="font-medium text-gray-700">Info</p>
                    <div class="py-2 grid grid-cols-2">
                        <p class="py-1 text-gray-700">Date Added : <span class="text-sky-500">{{ parseDate(items.dateAdded) }}</span></p>
                        <p class="py-1 text-gray-700">Date Modified : <span class="text-sky-500">{{ parseDate(items.dateModified) }}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Quote from '@/components/Quote.vue'
import moment from 'moment'
import Tags from '@/components/Tags.vue'
import BackButton from '@/components/BackButton.vue'

export default {
    name: 'SingleQuote',
    data() {
        return {
            id: null,
            items : null
        }
    },
    methods: {
        makeUpStr(str) {
            const strArr = str.split('-')
            const newStr = strArr.map((value) => {
                return value.charAt(0).toUpperCase() + value.slice(1)
            }).join(' ')
            return newStr
        },
        parseDate(date) {
            return moment(date).format('MMMM D, YYYY')
        },
    },
    beforeMount() {
        this.id = this.$route.params.id
    },
    mounted() {
        axios
            .get(`https://api.quotable.io/quotes/${this.id}`)
            .then(resp => this.items = resp.data)
    },
    components: {
        Quote,
        Tags,
        BackButton
    }
}
</script>

<style>

</style>