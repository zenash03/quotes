<template>
  <nav aria-label="Page navigation example">
        <ul class="inline-flex items-center-space-x-px" v-for="index in 5" :key="index">
            <li>
                <router-link :to="{name : 'home.page', params: {id : index, activePagination : index}}" class="py-2 px-3 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 rounded m-1" v-bind:class="{' bg-sky-500' : checkActive(index), 'text-white' : checkActive(index)}">{{index}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name : 'Pagination',
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        checkActive: function(i) {
            if(this.$route.params.activePagination === i){
                return true
            }
            return false
        }
    }
}
</script>

<style>

</style>