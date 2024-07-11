const { where } = require("sequelize");
const Utilisateur = require("../Models/Utilisateur");

class UtilisateurService {
  async getAllUtilisateur() {
    return await Utilisateur.findAll();
  }

  async getUtilisateurById(utilisateurId) {
    return await Utilisateur.findByPk(utilisateurId);
  }

  async addUtilisateur(utilisateur) {
    return await utilisateur.create(utilisateur);
  }

  async updateUtilisateur(id, utilisateur){
    return await Utilisateur.update(utilisateur, {
      where : {
        id : id
      }
    });
  }

  async deleteUtilisateur(id) {
    return await Utilisateur.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new UtilisateurService();
