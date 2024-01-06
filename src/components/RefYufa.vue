<template>
    <div class="person">
        <h3>name: {{ name }}</h3>
        <button @click="changename">修改姓名</button>

        <h3>age: {{ age }}</h3>
        <button @click="changeage">修改年龄</button>
    </div>
</template>



<script lang="ts" setup>
import { ref } from 'vue'

let name = ref('xiejunliang')
let age = ref(25)


function changename() {
    name.value = "xieanqi"
    console.log(name)
}

function changeage() {
    age.value += 1
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