<template>
      <div class="House m-2 bg-light shadow">
        <!-- passing required param ':id' -->
        <!-- <router-link :to="{name: 'HouseDetails', params: {id: house.id}}"> -->
          <img :src="house" class="w-100" :alt="house">
          <div class="p-3">
              <div class="text-center">
                  <p><b>{{house}} - {{house}}</b></p>
              </div>
          </div>
        <!-- </router-link> -->
      </div>
</template>


<script>
export default {
  props: {
    // value captured from the parent data
    house: {
      type: Object,
      required: true
    }
  },
  setup(){
    return {}
  }}
</script>


<style lang="scss" scoped>

</style>