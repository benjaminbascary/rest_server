const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'GET to /api'
  });
})

router.put('/', (req, res) => {
  res.json({
    message: 'PUT to /api'
  });
})

router.patch('/', (req, res) => {
  res.json({
    message: 'PATCH to /api'
  });
})

router.post('/', (req, res) => {
  res.json({
    message: 'POST to /api'
  });
})

router.delete('/', (req, res) => {
  res.json({
    message: 'DELETE to /api'
  });
})

module.exports = router;
