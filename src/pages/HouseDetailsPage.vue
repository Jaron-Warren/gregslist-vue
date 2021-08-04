<template>
  <div class="house-details-page">
    <h1>Welcome to the House details</h1>
    {{house}} - {{house}}
    <br>
    {{house}}

    <button class="btn btn-danger" @click="destroy">Delete</button>
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { houseService } from '../services/HouseService'
import {useRoute, useRouter} from 'vue-router'

export default {
  setup(){
    // const route = useRoute()
    const router = useRouter()
    onMounted(async()=>{
      try {
        // await houseService.gethouseById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      house: computed(()=> AppState.activehouse),
      async destroy(){
        try {
          // await houseService.destroy(route.params.id)
          //  navigate user back to home
          router.push({name: 'HousesView'})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }}
</script>


<style lang="scss" scoped>

</style>