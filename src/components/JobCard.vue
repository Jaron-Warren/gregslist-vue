<template>
      <div class="job m-2 bg-light shadow">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qXXbSty-U554F7hLcnsOhwHaDt%26pid%3DApi&f=1" class="w-100" alt="job">
          <div class="p-3">
              <div class="text-center">
                  <p><b>{{job.jobTitle}} - {{job.company}}</b></p>
                  <br>
                  <p>Hours: {{job.hours}} - Rate: {{job.rate}}</p>
                  <p>{{job.description}}</p>
              </div>
          </div>
      </div>
</template>

<script>
export default {
  props: {
    // value captured from the parent data
    job: {
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