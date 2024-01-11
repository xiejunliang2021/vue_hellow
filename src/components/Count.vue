<template>
    <div class="count">
        <h2>当前求和为：{{ sum }}</h2>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="sub">减</button>
    </div>
</template>
<script lang='ts' setup name="count">
import { ref } from 'vue';
let sum = ref(1)
let num = ref(1)

function add() {
    sum.value += num.value
}

function sub() {
    sum.value -= num.value
}



</script>

<style>
.count {
    background-color: #c75252;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

select,
button {
    margin: 0 5px;
    height: 20px;
}
</style>