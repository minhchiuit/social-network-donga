import { Router } from 'express'
import { requireLoggedIn, requireLoggedOut } from '../middlewares/auth'
import { postService, userService } from '../services'

const router = new Router()

router.get('/auth/login', requireLoggedOut, (req, res) => {
  res.render('auth/login', {
    errors: req.flash('errors'),
    success: req.flash('success'),
  })
})

router.get('/auth/register', requireLoggedOut, (req, res) => {
  res.render('auth/register', {
    errors: req.flash('errors'),
    success: req.flash('success'),
  })
})

router.get('/auth/forgot_password', requireLoggedOut, (req, res) => {
  res.render('auth/forgot_password', {
    errors: req.flash('errors'),
    success: req.flash('success'),
  })
})

router.get('/auth/reset_password/:token', requireLoggedOut, (req, res) => {
  res.render('auth/reset_password', {
    errors: req.flash('errors'),
    success: req.flash('success'),
  })
})

router.get('/message', requireLoggedIn, (req, res) => {
  res.render('message/message', {
    errors: req.flash('errors'),
    success: req.flash('success'),
    pageTitle: 'Message',
    userLoggedIn: req.user,
    selectedPage: 'message',
  })
})
router.get('/admin', async (req, res) => {
  const users = await userService.queryUsers({})
  const posts = await postService.queryPosts(
    {},
    { populate: 'postedBy,retweetData' }
  )
  const managers = await userService.queryUsers({ role: 'admin' }, {})
  res.render('admin/admin-layout', {
    users,
    posts,
    managers,
  })
})
router.get('/', requireLoggedIn, (req, res) => {
  res.render('home', {
    errors: req.flash('errors'),
    success: req.flash('success'),
    pageTitle: 'Home',
    selectedPage: 'home',
    userLoggedIn: req.user,
    userLoggedInJs: JSON.stringify(req.user),
  })
})

export default router
