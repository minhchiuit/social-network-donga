import { Router } from 'express'
import authRoutes from './auth.route'
import userRoutes from './user.route'
import uploadRoutes from './upload.route'
import pageRoutes from './page.route'
import postRoutes from './post.route'

const router = new Router()

const defaultRoutes = [
  {
    path: '/posts',
    route: postRoutes,
  },
  {
    path: '/upload',
    route: uploadRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/',
    route: pageRoutes,
  },
]

defaultRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router