const express = require('express');
const router = express.Router();

const capybarasController= require('../controllers/capybaras_controller');


router.get('/cerveza', capybarasController.cerveza);
///MOVIES
router.get('/nuevo',capybarasController.get_nuevo);
router.post('/nuevo',capybarasController.post_nuevo);
//SERIES
router.get('/nuevo2',capybarasController.get_nuevo2);
router.post('/nuevo2',capybarasController.post_nuevo2);
//ANIME
router.get('/nuevo3',capybarasController.get_nuevo3);
router.post('/nuevo3', capybarasController.post_nuevo3);

///HIHI
router.use('/',capybarasController.listar);

module.exports = router;