<template>
    <div>
        <div v-for="item, index in msg.items.data.results" :key="item._id" class="">
            <div v-if="index >= indexStart && index <= indexEnd">
                <Quote :msg="{item : item}"/>
            </div>
        </div>  
    </div>
</template>

<script>
import Quote from '@/components/Quote.vue'

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
            indexStart : null,
            indexEnd : null,
        }
    },
    watch: {

    },
    mounted() {
        const count = this.msg.items.data.count
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
    }
}
</script>