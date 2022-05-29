<template>
    <div>
        <div v-for="item, index in items.data.results" :key="item.id" class="">
            <div v-if="index >= indexStart && index <= indexEnd">
                <Quote :msg="item"/>
            </div>
        </div>  
    </div>
</template>

<script>
import Quote from '@/components/Quote.vue'
import axios from 'axios' 

export default {
    name : 'Quotes', 
    props: {
        msg: Object
    },
    methods : {
    },
    components: {
        Quote
    },
    data() {
        return {
            items : null,
            indexStart : null,
            indexEnd : null,
        }
    },
    beforeMount() {
        if(this.msg.row == 1){
            this.indexStart = 0
            this.indexEnd = 6
        }
        if(this.msg.row == 2){
            this.indexStart = 6
            this.indexEnd = 12
        }
        if(this.msg.row == 3){
            this.indexStart = 13
            this.indexEnd = 20
        }
    },
    mounted() {
        axios
            .get(`https://api.quotable.io/quotes?page=${this.msg.pageNumber}`)
            .then(resp => this.items = resp)
    },
}
</script>