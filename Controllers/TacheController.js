const TacheService = require("../Services/TacheService");

class TacheController {
  async getAllTache(request, result) {
    try {
      const tache = await TacheService.getAllTache();
      result.json(tache);
    } catch (error) {
      result.status(500);
      result.json({
        error: "Une erreur est survenue lors de la récupération des Tache",
      });
    }
  }

  async getTacheById(request, result) {
    try {
      const tache = await TacheService.getTacheById(request.params.id);
      result.json(tache);
    } catch (error) {
      result.status(500);
      result.json({
        error: "Une erreur est survenue lors de la récupération du Tache",
      });
    }
  }

  async addTache(request, result) {
    try {
      const tache = await TacheService.addTache(request.body);
      result.json(tache);
    } catch (error) {
      result.status(500);
      result.json({
        error: "Une erreur est survenue lors de l'ajout du Tache",
      });
    }
  }

  async updateTache(request, result) {
    try {
      const tache = await TacheService.updateTache(
        request.params.id,
        request.body
      );
      result.json(tache);
    } catch (error) {
      result.status(500);
      result.json({
        error: "Une erreur est survenue lors de la modification de la Tache",
      });
    }
  }

  async deleteTache(request, result) {
    try {
      const tache = await TacheService.deleteTache(request.params.id);
      result.json(tache);
    } catch (error) {
      result.status(500);
      result.json({
        error: "Une erreur est survenue lors de la suppression de la Tache",
      });
    }
  }
}

module.exports = new TacheController();
