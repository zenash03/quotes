<template>
  <div>
    <router-link :to="{name:'tagQuotes', params : {tagName : msg.item}}" type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">{{msg.item}}</router-link>    
  </div>
</template>

<script>

export default {
    name : 'Tag',
    props : {
        msg : Object
    }
}
</script>

<style>

</style>