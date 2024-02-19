// 创建路由器并暴露出去

// 第一步：引入createRouter
import {createRouter,  createWebHashHistory} from 'vue-router'

import Person from '@/components/Person.vue'
import Stock from '@/views/Stock.vue'
import reactive from '@/components/reactive.vue'
import StockQuant from '@/views/StockQuant.vue'

//第二部：创建路由
const router = createRouter({
    history:createWebHashHistory(), // 路由器的工作模式
    routes:[
        {
            name:'home',
            path:'/home',
            component:Person
    },
    {   name:'stock',
        path:'/stock',
        component:Stock,
        children:[
            {
            name:'stockquant',
            path:'/stockquant',
            component:StockQuant,
            }
        ]
},
{
    name:'reactive',
    path:'/reactive',
    component:reactive
}
    ]}
)

export default router