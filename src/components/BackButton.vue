<template>
      <button @click="goBack()" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5">Back</button>
</template>

<script>
export default {
    methods : {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>