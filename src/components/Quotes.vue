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
    mounted() {
        let url , parameter
        if(this.msg.type == 'quotes'){
            url = 'https://api.quotable.io/quotes?page='
            parameter = this.msg.pageNumber
        }
        if(this.msg.type == 'tags'){
            url = 'https://api.quotable.io/quotes?tags='
            parameter = this.msg.tagName
        }
        axios
            .get(`${url}${parameter}`)
            .then(resp => {
                this.items = resp
                const count = resp.data.count
                const split = Math.floor(count/3)
                if(this.msg.row == 1){
                    this.indexStart = 0
                    this.indexEnd = split
                }
                if(this.msg.row == 2){
                    this.indexStart = split+1
                    this.indexEnd = split*2+1
                }
                if(this.msg.row == 3){
                    this.indexStart = split*2+2
                    this.indexEnd = count
                }
            })
            
    },
}
</script>