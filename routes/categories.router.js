const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/',(req,res) => {
  const {size} = req.query;
  const limit = size || 10;
  const categories = [];
  for(let i = 0; i < limit; i++){
    categories.push({
      category:faker.commerce.productAdjective()
    })
  }
  res.json(categories);
});

router.get('/:id', (req,res) => {
  const {id} = req.params;
  res.json({
    id,
    category:faker.commerce.productAdjective()
  })
})

module.exports = router;