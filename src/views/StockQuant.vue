<template>
  <el-table style="width: 100%;" :data="paginateData">
      <el-table-column prop="id" label="用户ID" width="180" />
      <el-table-column prop="trade_date" label="策略日期" width="180" />
      <el-table-column prop="name" label="股票名称" />
      <el-table-column prop="ts_code" label="股票代码" />
      <el-table-column prop="buy_01" label="第一买点" />
      <el-table-column prop="buy_02" label="第二买点" />
      <el-table-column prop="stop_loss" label="止损点" />
      <el-table-column prop="stop_win" label="止盈点" />
  </el-table>
  <el-pagination
      @size-change = "handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page = "currentPage"
      :page-sizes="[10,15,20]"
      :page-size = "pageSize"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="data.length">
  </el-pagination>  
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, computed, onMounted } from 'vue'

// 响应式数据源
const data = ref([])
// 当前页码
const currentPage = ref(1)
// 每页显示数量
const pageSize = ref(10)

// 获取数据
// axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASEURL

const fetchData = async ()=>{
  try{
      const respone = await axios.get('http://168.138.11.4:8000/api/stocks/');
      // 假设响应数据是一个数组
      data.value = respone.data;  
  }
  catch(error){
      console.error(error);
  }
};

// 在组建挂载后立即获取数据
onMounted(fetchData);

// 计算当前页数据
const paginateData = computed(()=>{
  const start = (currentPage.value -1) * pageSize.value;
  const end = start + pageSize.value;
  return data.value.slice(start, end);
});

// 处理每页显示数量变化
const handleSizeChange = (newSize:any) =>{
pageSize.value = newSize;
};

// 处理当前页的变化
const handleCurrentChange = (newPage:any) => {
currentPage.value = newPage;

};
  
  </script>
  
  <style>
      
  </style>