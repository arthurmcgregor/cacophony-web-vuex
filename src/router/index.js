import Vue from 'vue'
import Router from 'vue-router'

import AudioBaitView from '../views/AudioBaitView.vue'
import AudioView from '../views/AudioView.vue'
import DevicesView from '../views/DevicesView'
import ErrorView from '../views/ErrorView.vue'
import GroupsView from '../views/GroupsView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RecordingsView from '../views/RecordingsView.vue'
import RegisterView from '../views/RegisterView.vue'

Vue.use(Router)

export function createRouter() {
	const router =  new Router({
		mode:'history',
		fallback:false,
		scrollBehavior:() => ({y:0}),
		routes:[
			{path:'/audiobait',component:AudioBaitView, meta: {requiresAuth: true}},
			{path:'/audio',component:AudioView, meta: {requiresAuth: true}},
			{path:'/devices',component:DevicesView, meta: {requiresAuth: true}},
			{path:'/error',component:ErrorView, meta: {requiresAuth: true}},
			{path:'/groups',component:GroupsView, meta: {requiresAuth: true}},
			{path:'/', name: 'home', component:HomeView, meta: {requiresAuth: true}},
			{path:'/login', name: 'login', component:LoginView},
			{path:'/recordings',component:RecordingsView, meta: {requiresAuth: true}},
			{path:'/register',component:RegisterView}
		]
	})

	router.beforeEach((to, from, next) => {
		const isLoggedIn = !!localStorage.getItem('JWT');

		if (isLoggedIn) {
			if(to.name === 'login' || to.name === 'register') {
				return next({ name: 'home'})
			}else {
				return next()
			}
		} else if(to.matched.some(record => record.meta.requiresAuth)) {
			return next({
				path: '/login',
				params: { nextUrl: to.fullPath }
			})
		}
		next()
	})

	return router;
}
