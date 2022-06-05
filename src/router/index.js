import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleQuoteView from '@/views/SingleQuote.vue'
import TagQuotesView from '@/views/TagQuotesView.vue'
import TagsView from '@/views/TagsView.vue'
import AuthorsView from '@/views/AuthorsView.vue'
import SingleAuthorView from '@/views/SingleAuthorView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/page/',
    name: 'home.page.alt',
    component: HomeView
  },
  {
    path: '/page/:id',
    name: 'home.page',
    component: HomeView
  },
  {
    path: '/quote/:authorSlug/:id',
    name: 'singleQuote',
    component: SingleQuoteView
  },
  {
    path : '/tags',
    name : 'tags',
    component : TagsView
  },
  {
    path : '/tags/:tagName',
    name: 'tagQuotes',
    component: TagQuotesView
  },
  {
    path: '/tags/:tagName/:id',
    name : 'tagQuotes.page',
    component : TagQuotesView
  },
  {
    path : '/authors',
    name : 'authors',
    component : AuthorsView
  },
  {
    path : '/authors/:id',
    name : 'authors.page',
    component : AuthorsView
  },
  {
    path : '/author/:authorSlug',
    name : 'singleAuthor',
    component : SingleAuthorView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
