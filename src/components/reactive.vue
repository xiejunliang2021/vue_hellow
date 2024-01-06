<template>
    <div class="car">
        <h2>
            我有一台汽车，品牌是{{ car.name }},价格是{{ car.price }}
            <br>
            <button @click="changename">修改品牌</button>
            <button @click="changeprices">修改价格</button>
            <br>
        </h2>
        <h2>
            游戏列表：
            <ul>
                <li v-for="item in games" :key="item.id">{{ item.name }}</li>
            </ul>
        </h2>
    </div>
</template>
<script lang='ts' setup name="reactive">
import { reactive } from "vue";
let car = reactive(
    {
        name: 'benchi',
        price: 199800,

    }
)

let games = reactive(
    [
        { id: 'qwe01', name: '王者荣耀' },
        { id: 'qwe02', name: '元神' },
        { id: 'qwe03', name: '三国志' },


    ]
)

function changename() {
    car.name = '奥迪'
}

function changeprices() {
    car.price = 586888
}

</script>
<style>
.car {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>