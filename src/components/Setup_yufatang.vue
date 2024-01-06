<template>
    <div class="person">
        <h3>你爱我吗？</h3>
        <h3>{{ msg }}</h3>

    </div>
</template>


<script lang="ts" setup >
let msg = "我爱你！"

</script>

<style scoped>
.person {
    background-color: rgb(27, 173, 153);
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style> 