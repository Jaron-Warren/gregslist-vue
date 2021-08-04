<template>
  <div class="job-Form">
    <form class="d-flex" @submit.prevent="createJob">
      <div class="form-group">
        <label for="company">Company</label>
        <input
          type="text"
          name="company"
          v-model="state.newJob.company"
          class="form-control"
          placeholder="company..."
          maxlength="240"
        />
      </div>
      <div class="form-group">
        <label for="hours">Hours</label>
        <input
          type="text"
          name="hours"
          v-model="state.newJob.hours"
          class="form-control"
          placeholder="hours..."
          maxlength="240"
        />
      </div>
      <div class="form-group">
        <label for="jobTitle">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          v-model="state.newJob.jobTitle"
          class="form-control"
          placeholder="jobTitle..."
          maxlength="240"
        />
      </div>
      <div class="form-group">
        <label for="rate">Rate</label>
        <input
          type="text"
          name="rate"
          v-model="state.newJob.rate"
          class="form-control"
          placeholder="rate..."
          maxlength="240"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          v-model="state.newJob.description"
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
      newJob: {}
    })
    return {
      state,
      async createJob(){
        try {
          jobsService.createJob(state.newJob)
          // NOTE clears the form
          state.newJob = {}
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