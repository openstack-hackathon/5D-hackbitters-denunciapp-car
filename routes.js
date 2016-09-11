const Router = require('express').Router;
const router = new Router();

const user  = require('./model/user/user-router');
const plate  = require('./model/plate/plate-router');
const complaint  = require('./model/complaint/complaint-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to denunciapp API!' });
});

router.use('/user', user);
router.use('/plate', plate);
router.use('/complaint', complaint);


module.exports = router;
