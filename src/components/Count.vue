<template>
    <div class="count">
        <h2>当前求和为：{{ countStore.sum }}</h2>
        <h2>我的学校是：{{ countStore.school }}</h2>
        <h2>我的学校的地址是：{{ countStore.address }}</h2>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="sub">减</button>
    </div>
</template>
<script lang='ts' setup name="Count">
import { ref } from 'vue'
import { useCountStore } from '@/store/count'
const countStore = useCountStore()
console.log(countStore)

let num = ref(1)

function add() {
    // 第一种修改数据的方法
    countStore.sum += num.value
    countStore.school = '清华大学'
}

function sub() {
    // 第二种修改数据的方式,当有很多数据要进行修改的时候推荐用这种方法进行，因为她是进行一次批量修改
    countStore.$patch({
        sum: countStore.sum -= num.value,
        school: 'beijingdaxue'
    })
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