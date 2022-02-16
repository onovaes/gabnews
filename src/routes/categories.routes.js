const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories.controller');

router.get("/admin/categories", categoriesController.get);
  
/* POST programming language 
router.post('/', categoriesController.create);
router.put('/:id', categoriesController.update);
 DELETE programming language 
router.delete('/:id', categoriesController.remove);
*/

module.exports = router;