<template>
<div class="row">
        <div class="col-3" style="background-color: rgb(208, 94, 164); ">
        <RouterLink to="stockquant" active-class="active">股票策略</RouterLink>
        </div>
        <div class="col-3" style="background-color: rgb(208, 94, 164);">
        <RouterLink to="/stock" active-class="active">当日成交</RouterLink>
        </div>
        <div class="col-3" style="background-color: rgb(208, 94, 164);">
            <RouterLink to="/home" active-class="active">历史回测</RouterLink>
        </div>
        <div class="col-3" style="background-color: rgb(208, 94, 164);">
            <RouterLink to="/home" active-class="active">更多。。</RouterLink>
        </div>  
    </div>
    <div class="container text-center">
    <div class="row">
        <div class="col connent">
        <RouterView></RouterView>
        </div>
        
        
    </div>
    </div>

</template>

<script setup lang="ts" name="stock">


</script>

<style>
.connent{
    margin-top:3em;
    background-color:#b9b0b0
}

</style>