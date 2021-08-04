<template>
  <div class="house-Form">
    <form class="d-flex" @submit.prevent="createJob">
      
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          v-model="state.newHouse.description"
          class="form-control"
          placeholder="Description..."
          maxlength="240"
        />
      </div>
      <div class="d-flex align-items-center">
        <button type="submit" class="btn btn-outline-success">Add</button>
      </div>
    </form>
  </div>
</template>


<script>
import { reactive } from '@vue/reactivity'
import { jobsService } from '../services/JobsService'
export default {
  setup() {
    const state = reactive({
      newHouse: {}
    })
    return {
      state,
      async createJob(){
        try {
          jobsService.createJob(state.newJob)
          // NOTE clears the form
          state.newHouse = {}
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>