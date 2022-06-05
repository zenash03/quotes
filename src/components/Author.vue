<template>
    <div>
        <router-link :to="{name : 'singleAuthor', params : {'authorSlug' : msg.item.slug}}" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" v-bind:src="'https://images.quotable.dev/profile/200/' + msg.item.slug + '.jpg'" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ msg.item.name }}</h5>
                <p class="mb-3 font-normal text-gray-400">{{ limitStr(msg.item.bio, 150) }}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name : 'Author',
    props : {
        msg : Object
    },
    methods: {
        limitStr(str = '', limit = '100') {
            return str.substring(0, limit) + '....'
        }
    }
}
</script>

<style>

</style>