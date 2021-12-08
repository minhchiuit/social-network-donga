import { Router } from 'express'
import { requireLoggedIn, requireLoggedOut } from '../middlewares/auth'

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

router.get('/search', requireLoggedIn, (req, res) => {
  res.render('search', {
    errors: req.flash('errors'),
    success: req.flash('success'),
    pageTitle: 'Search',
    userLoggedIn: req.user,
  })
})

router.get('/message', requireLoggedIn, (req, res) => {
  res.render('message/message', {
    errors: req.flash('errors'),
    success: req.flash('success'),
    pageTitle: 'Message',
    userLoggedIn: req.user,
  })
})
router.get('/profile', requireLoggedIn, (req, res) => {
  res.render('profile', {
    errors: req.flash('errors'),
    success: req.flash('success'),
    pageTitle: 'Profile',
    userLoggedIn: req.user,
  })
})

router.get('/', requireLoggedIn, (req, res) => {
  res.render('home', {
    errors: req.flash('errors'),
    success: req.flash('success'),
    pageTitle: 'Home',
    userLoggedIn: req.user,
    userLoggedInJs: JSON.stringify({
      id: req.user.id,
      fullName: req.user.fullName,
    }),
  })
})

export default router