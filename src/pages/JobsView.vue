<template>
  <div class="JobsView container-fluid">
    <div class="row">
      <div class="col">
        <JobForm />
      </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="j in jobs" :key="j.id">
        <!-- Data passed through prop ':car' to chilj -->
        <JobCard :job="j"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import {jobsService } from '../services/JobsService'
import JobCard from '../components/JobCard.vue'
import JobForm from '../components/JobForm.vue'


export default {
  name: 'JobsView',
  setup(){
    // state

    // mounted
    onMounted(async ()=>{
      try {
        await jobsService.getJobs()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      // state,
      // computeds
      jobs: computed(() => AppState.jobs)
      // methods
    }
  },
  components: {
    JobCard,
    JobForm
  }
}
</script>
