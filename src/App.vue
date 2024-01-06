
<template>
  <reactive />
  <RefYufa />
  <Person />
  <Setup_yufatang />
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import Setup_yufatang from './components/Setup_yufatang.vue'
import RefYufa from './components/RefYufa.vue'
import reactive from './components/reactive.vue'
</script>

<style scoped>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
