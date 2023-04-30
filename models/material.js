const db = require('../config/dbConfig.js');
const table = 'materials';

class Material {
  constructor(payload) {
    this.id = payload.id;
    this.name = payload.name;
    this.base_power = payload.base_power;
    this.qty = payload.qty;
    this.deleted_at = payload.deleted_at;
  }

  static async find(id) {
    const material = await db(table).where('id', id).first();
    if (!material) return null;
    return new Material(material);
  }

  // TO BE IMPLEMENTED
  update() {}
}

module.exports = Material;
