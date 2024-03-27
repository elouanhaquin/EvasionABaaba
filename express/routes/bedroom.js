const express = require('express');
const router = express.Router();
const bedroomController = require('../controllers/bedroom');



router.post('/bedroom/create', bedroomController.create);
router.post('/bedroom/update', bedroomController.update);
router.delete('/bedroom/delete', bedroomController.delete);
router.get('/bedroom', bedroomController.get);
router.get('/bedrooms', bedroomController.getAll);


module.exports = router;