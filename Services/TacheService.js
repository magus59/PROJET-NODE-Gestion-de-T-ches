const { where } = require("sequelize");
const Tache = require("../Models/Tache");

class TacheService {
  async getAllTache() {
    return await Tache.findAll();
  }

  async getTacheById(tacheId) {
    return await Tache.findByPk(tacheId);
  }

  async addTache(tache) {
    return await Tache.create(tache);
  }

  async updateTache(id, tache){
    return await Tache.update(tache, {
      where : {
        id : id
      }
    });
  }

  async deleteTache(id) {
    return await Tache.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new TacheService();
