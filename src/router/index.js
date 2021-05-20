import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/User/Login'
import User from '@/views/User/User'
import Info from '@/views/User/Info'
import Students from '@/views/User/Students';

import Home from '@/views/Home/Home'; 
import Instruction from '@/views/Home/Instruction'; 
import Miniprogram from '@/views/Home/Miniprogram';
import Main from '@/views/Home/Main';

import Erro from '@/components/Erro';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: Home,
      children:[
        {
          path: '/',
          name: 'Main',
          component: Main
        },
        {
          path: '/instruction',
          name: 'Instruction',
          component: Instruction
        },
        {
          path: '/miniprogram',
          name: 'Miniprogram',
          component: Miniprogram
        },
      ]
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [ 
        {
          path: '/user/info', 
          name: 'Info',
          component: Info
        },
        {
          path: '/user/stu', 
          name: 'Students',
          component: Students
        }
      ]
    },
    {
      path: '*',
      name: 'Erro',
      component: Erro
    }
  ]
})
