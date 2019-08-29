<template>
  <div class="home">
    <CreateUser/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateUser from '@/components/CreateUser.vue'

export default {
  name: 'home',
  components: {
    CreateUser
  }
}
</script>
