// Services/UtilisateurService.js
const Utilisateur = require('../Models/Utilisateur'); // Assurez-vous que le chemin est correct

class UtilisateurService {
  async getAllUtilisateur() {
    try {
      return await Utilisateur.findAll();
    } catch (error) {
      throw error;
    }
  }

  async getUtilisateurById(id) {
    try {
      return await Utilisateur.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  async addUtilisateur(data) {
    try {
      return await Utilisateur.create(data);
    } catch (error) {
      throw error;
    }
  }

  async updateUtilisateur(id, data) {
    try {
      const utilisateur = await Utilisateur.findByPk(id);
      if (utilisateur) {
        return await utilisateur.update(data);
      }
      throw new Error('Utilisateur not found');
    } catch (error) {
      throw error;
    }
  }

  async deleteUtilisateur(id) {
    try {
      const utilisateur = await Utilisateur.findByPk(id);
      if (utilisateur) {
        return await utilisateur.destroy();
      }
      throw new Error('Utilisateur not found');
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UtilisateurService();
