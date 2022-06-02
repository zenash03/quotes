<template>
    <div class="m-5">
        <div class="grid divide-y">
            <p class=" font-medium p-3">Tags</p>
            <section v-if="error">
                <p>Message : {{ errorMessage.message }}</p>
            </section>
            <section v-else>
                <div v-if="loading" class="py-2">
                    <p>Loading...</p>
                </div>
                <div v-else class="py-2">
                    <Tags :msg="{items : tags}" />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Tags from '@/components/Tags.vue'

export default {
    name : 'TagsView',
    data() {
        return {
            items : null,
            tags : null,
            error : false,
            errorMessage: null,
            loading : true
        }
    },
    async created() {
        await axios
        .get('https://api.quotable.io/tags')
        .then(resp => {
            const data = resp.data
            const newTagsArr = data.map((value) => {
                return value.name
            })
            // console.log(resp)
            // console.log(newTagsArr)
            this.tags = newTagsArr
            this.items = resp
        })
        .catch(err => {
            this.error = true, this.errorMessage = err
        })
        .finally(() => this.loading = false)
    },
    components: {
        Tags
    }
}
</script>

<style>

</style>