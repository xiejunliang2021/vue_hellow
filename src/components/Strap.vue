<template>
    <h2 style="text-align: center;">欢迎来到我的博客</h2>
 

    <div class="container text-center">
    <div class="row">
        <div class="col-3" style="background-color: aquamarine; ">
        <RouterLink to="/home" active-class="active">花本无心</RouterLink>
        </div>
        <div class="col-3" style="background-color: aquamarine;">
        <RouterLink to="/stock" active-class="active">股票量化</RouterLink>
        </div>
        <div class="col-3" style="background-color: aquamarine;">
            <RouterLink to="reactive" active-class="active">chatgpt</RouterLink>
        </div>
        <div class="col-3" style="background-color: aquamarine;">
            <RouterLink to="/home" active-class="active">nginx</RouterLink>
        </div>  
    </div>

    </div>
    <div class="container text-center" style="margin-top: 2em;">
    <div class="row">
        <div class="col conent">
        <RouterView></RouterView>
        </div>
        
        
    </div>
    </div>
  
</template>

<script lang="ts" setup >
import {RouterLink,RouterView} from 'vue-router' 
</script>

<style>
div.col-3{
    box-shadow: 0 0 10px;
     border-radius: 10px;
     height: 3em;
}
.conent{
    
    background-color: #ed8c8c;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    height: 700px;
    margin-top: 5px;

}
</style>