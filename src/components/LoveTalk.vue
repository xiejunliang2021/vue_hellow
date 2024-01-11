<template>
    <div class="lovetalk">
        <h2>土味情话集锦</h2>
        <button>获取土味情话</button>
        <ul v-for="item in loveTalkStore.talkList" :key="item.id">
            <li>{{ item.title }}</li>

        </ul>

    </div>
</template>
<script lang='ts' setup name="LoveTalk">
import { reactive } from 'vue'
import { nanoid } from 'nanoid'
import { useLoveTalkStore } from '@/store/lovetalk';

const loveTalkStore = useLoveTalkStore()

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