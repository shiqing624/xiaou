import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      // redirect: '/home/home',
      // component:Home
    },
    {
      path: '/home',
      component: ()=>import('@/pages/Home/Home'),
      children: [
        {
          path:'/home',
          redirect:'index'
        },
        {
          path: 'index',
          component: () => import('@/pages/Home/Index')
        },
        {
          path: 'cart',
          name: "Cart",
          component: ()=>import('@/pages/Home/Cart/Cart'),
          children: [
            {
              path: 'orderInf',
              name: "OrderInf",
              component: () => import('@/pages/Home/Cart/Order_inf')
            },
          ]
        },
        {
          path: 'my',
          name: "My",
          component: ()=>import('@/pages/Home/My')
        },
      ]
    },
    
    {
      path: '/classify',
      name: "Classify",
      component: ()=>import('@/pages/Classify/Classify')
    },
    {
      path: '/detail',
      name: "Detail",
      component: ()=>import('@/pages/Detail/Detail')
    },
    {
      path: '/login',
      name: "Login",
      component: ()=>import('@/pages/Login/Login')
    },
    {
      path: '/register',
      name: "Register",
      component: ()=>import('@/pages/Register/Register')
    },
  ]
})
