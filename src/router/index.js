import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Comics from '@/components/Comics/Comics'
import MLKComic from '@/components/Comics/MLKComic'
import RabbiComic from '@/components/Comics/RabbiComic'
import Art from '@/components/Art/Art'
import Paper from '@/components/Art/Paper'
import Torah from '@/components/Art/Torah'
import About from '@/components/About/About'
import Bio from '@/components/About/Bio'
import Contact from '@/components/About/Contact'


Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/comics',
      name: 'Comics',
      component: Comics,
      children: [{
          path: 'appalachian-rabbi-avatar-comic',
          name: 'Appalachian Rabbi Avatar',
          component: RabbiComic
        },
        {
          path: 'mlk-day-comic',
          name: 'MLK Day',
          component: MLKComic
        }
      ]
    },
    {
      path: '/art',
      name: 'Art',
      component: Art,
      children: [{
          path: 'cut-paper',
          name: 'Cut Paper',
          component: Paper
        },
        {
          path: 'torah-ark',
          name: 'Torah Ark Project',
          component: Torah
        }
      ]
    },
    {
      path: '/about',
      name: 'Bio + Contact',
      component: About,
      children: [{
          path: 'bio',
          name: 'About Jean',
          component: Bio
        },
        {
          path: 'contact',
          name: 'Contact',
          component: Contact
        }
      ]
    }
  ]
})