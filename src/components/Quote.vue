<template>
    <div class="bg-white rounded-lg border border-gray-200 shadow-sm p-5 mb-5">
        <router-link :to="{name : 'quotes', params: {'id' : msg._id, 'authorSlug' : msg.authorSlug}}">
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ msg.content }}</p>
            <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900">{{ msg.author }}</h5>
        </router-link>
    </div>
</template>
<script>
export default {
    name : 'Quote',
    props: {
        msg : Object
    },
    data(){
        return {
        }
    }
}
</script>