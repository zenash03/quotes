<template>
    <div class="m-5">
        <div class="grid divide-y">
            <p class=" font-medium p-3">Tags</p>
            <div class="py-2">
                <Tags :msg="{items : tags}" />
            </div>
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
        }
    },
    mounted() {
        axios
        .get('https://quotable.io/tags')
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
    },
    components: {
        Tags
    }
}
</script>

<style>

</style>