<template>
  <nav aria-label="Page navigation example">
        <div class="inline-flex items-center-space-x-px">
            <router-link :to="{name : msg.route, params: {id : activePage - 1}}" class="py-2 text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 rounded m-1 text-center" style="min-width: 60px" v-bind:class="{'text-gray-700 bg-gray-100' : prevButton(activePage)}" :disabled="prevButton(activePage)" tag="button">Prev</router-link>
            <div v-for="value,index in pageNumbers" :key="index" class="inline-flex items-center-space-x-px">
                <router-link :to="{name : msg.route, params: {id : value, activePagination : index}}" class="py-2 text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 rounded m-1 text-center" style="min-width: 45px" v-bind:class="{' bg-sky-500 text-white' : checkActive(value)}">{{value}}</router-link>
            </div>
            <router-link :to="{name : msg.route, params: {id : activePage + 1}}" class="py-2 text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 rounded m-1 text-center" style="min-width: 60px" v-bind:class="{'text-gray-700 bg-gray-100' : nextButton(activePage)}" :disabled="nextButton(activePage)" tag="button">Next</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name : 'Pagination',
    props: {
        msg : Object
    },
    data() {
        return {
            isActive: false,
            totalPages : 0,
            pageNumbers: [],
            activePage : 0,
        }
    },
    created() {
        this.totalPages = this.msg.items.data.totalPages
        this.activePage = this.msg.items.data.page
        this.pageNumbers = this.givePageNumbers(this.msg.items.data.page, this.msg.items.data.totalPages)
        console.log(this.msg)
    },
    methods: {
        checkActive: function(i = 1) {
            const id = this.activePage != undefined ? this.activePage : 1
            if(id === i){
                return true
            }
            return false
        },
        givePageNumbers(pageNumber, limit){
            const limitPage = limit > 9 ? 9 : limit
            let start = 1;
            if(pageNumber >= 5){
                start = pageNumber - 4
                if(pageNumber >= limit-4){
                    start = limit-8
                }
            }
            const newArr = [...Array(limitPage)].map((value, index) => index + start)
            return newArr
        },
        prevButton(page){
            return page <= 1 ? true : false
        },
        nextButton(page){
            return page >= this.totalPages ? true : false 
        }
    }
}
</script>

<style>

</style>