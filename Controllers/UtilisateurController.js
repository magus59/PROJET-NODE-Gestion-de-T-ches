const UtilisateurService = require("../Services/UtilisateurService");

class UtilisateurController {
  async getAllUtilisateur(request, result) {
    try {
      const utilisateur = await UtilisateurService.getAllUtilisateur();
      result.json(utilisateur);
    } catch (error) {
      result.status(500);
      result.json({
        error: "Une erreur est survenue lors de la récupération des Utilisateur",
      });
    }
  }

  async getUtilisateurById(request, result) {
    try {
      const utilisateur = await UtilisateurService.getUtilisateurById(request.params.id);
      result.json(utilisateur);
    } catch (error) {
      result.status(500);
      result.json({
        error: "Une erreur est survenue lors de la récupération de l Utilisateur",
      });
    }
  }

  async addUtilisateur(request, result) {
    try {
      const utilisateur = await UtilisateurService.addUtilisateur(request.body);
      result.json(utilisateur);
    } catch (error) {
      result.status(500);
      result.json({
        error: "Une erreur est survenue lors de l'ajout de l Utilisateur",
      });
    }
  }

  async updateUtilisateur(request, result) {
    try {
      const utilisateur = await UtilisateurService.updateUtilisateur(
        request.params.id,
        request.body
      );
      result.json(utilisateur);
    } catch (error) {
      result.status(500);
      result.json({
        error: "Une erreur est survenue lors de la modification de l Utilisateur",
      });
    }
  }

  async deleteUtilisateur(request, result) {
    try {
      const utilisateur = await UtilisateurService.deleteUtilisateur(request.params.id);
      result.json(utilisateur);
    } catch (error) {
      result.status(500);
      result.json({
        error: "Une erreur est survenue lors de la suppression de l Utilisateur",
      });
    }
  }
}

module.exports = new UtilisateurController();
