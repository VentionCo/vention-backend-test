const db = require('../config/dbConfig.js');
const table = 'materials';

class Material {
  constructor(payload) {
    this.id = payload.id;
    this.power_level = payload.power_level;
    this.qty = payload.qty;
    this.deleted_at = payload.deleted_at;
  }

  static async find(id) {
    try {
      let material = await db(table).where('id', id).first();
      return new Material(material);
    } catch (e) {
      throw new Error('Weapon not found');
    }
  }

  // TO BE IMPLEMENTED
  update() {}

  // TO BE IMPLEMENTED
  delete() {}
}

module.exports = Material;
