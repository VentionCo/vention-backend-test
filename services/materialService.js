const { find } = require('../models/material');

const MaterialService = () => {
  const getMaterial = async (id) => {
    return find(id);
  };

  return {
    getMaterial
  };
};

module.exports = MaterialService;
