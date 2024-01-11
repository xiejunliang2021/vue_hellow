<template>
    <div class="lovetalk">
        <h2>土味情话集锦</h2>
        <button>获取土味情话</button>
        <ul v-for="item in talkList" :key="item.id">
            <li>{{ item.title }}</li>

        </ul>

    </div>
</template>
<script lang='ts' setup name="LoveTalk">
import { reactive } from 'vue'
import { nanoid } from 'nanoid'
let talkList = reactive([
    {
        id: nanoid(),
        title: '草莓，蓝莓，半月梅，今天你想我了没？'
    },
    {
        id: nanoid(),
        title: '不要抱怨，抱我'
    },
    {
        id: nanoid(),
        title: '“我觉得你这个人不适合谈恋爱” “为什么?” “适合结婚。'
    },
])
</script>
<style>
.lovetalk {
    background-color: #ac2bb1;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    background-color: aqua;
}

li {
    background-color: #2092be;
}
</style>