const router = require('express').Router();

const MaterialService = require('../services/materialService.js');

// IMPLEMENT CRUD FOR WEAPON
router.get('/:id', async (req, res) => {
  try {
    const material = await MaterialService().getMaterial(req.params.id);
    res.status(200).json(material);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;
