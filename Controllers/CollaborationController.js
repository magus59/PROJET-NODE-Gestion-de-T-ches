const CollaborationService = require('../Services/CollaborationService');

class CollaborationController {

    async getAllCollaboration(request, result){
        try {
            const collaboration = await CollaborationService.getAllCollaboration();
            result.json(collaboration);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des Collaboration"})
        }
    }

    async getCollaborationById(request, result){
        try {
            const collaboration = await CollaborationService.getCollaborationById(request.params.id);
            result.json(collaboration);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération du Collaboration"})
        }
    }

    async addCollaboration(request, result){
        try {
            const collaboration = await CollaborationService.addCollaboration(request.body);
            result.json(collaboration);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'ajout du Collaboration"})
        }
    }

    async deleteCollaboration(request, result){
        try {
            const collaboration = await CollaborationService.deleteCollaboration(request.params.id);
            result.json(collaboration);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la suppression de la Collaboration"})
        }
    }

}

module.exports = new CollaborationController();