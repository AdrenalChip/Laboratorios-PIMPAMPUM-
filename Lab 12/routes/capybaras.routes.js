const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth.js');

const capybarasController= require('../controllers/capybaras_controller');


router.get('/cerveza',isAuth, capybarasController.cerveza);
///MOVIES
router.get('/nuevo',isAuth,capybarasController.get_nuevo);
router.post('/nuevo',capybarasController.post_nuevo);
//SERIES
router.get('/nuevo2',isAuth,capybarasController.get_nuevo2);
router.post('/nuevo2',capybarasController.post_nuevo2);
//ANIME
router.get('/nuevo3',isAuth,capybarasController.get_nuevo3);
router.post('/nuevo3', capybarasController.post_nuevo3);

///HIHI
//router.get('/:capybaras_id',capybarasController.filtrar);
router.use('/',isAuth,capybarasController.listar);

module.exports = router;