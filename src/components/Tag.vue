<template>
  <div>
    <router-link :to="{name:'tagQuotes', params : {tagName : msg.item}}" type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">{{ toCapitalize(msg.item) }}</router-link>    
  </div>
</template>

<script>

export default {
    name : 'Tag',
    props : {
        msg : Object
    },
    methods: {
      toCapitalize(str) {
        const newArr = str.split('-')
        const newStr = newArr.map((value) => {
          return value.charAt(0).toUpperCase() + value.slice(1)
        }).join(" ")
        return newStr
      }
    }
}
</script>

<style>

</style>