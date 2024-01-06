<template>
    <div class="person">
        <h1>中国</h1>
        <h2>北京</h2>
        <h3 ref="title2">尚硅谷</h3>
        <button @click="showlog">点我</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref } from 'vue'

//创建一个
let title2 = ref()

function showlog() {
    console.log(title2.value)
}

</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>
