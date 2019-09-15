<template>
  <div class="home">
    <HelloWorld msg="Vue.js App compiled and running under Asp Core MVC server app."/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
