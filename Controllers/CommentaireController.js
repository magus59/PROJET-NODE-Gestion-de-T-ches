const CommentaireService = require('../Services/CommentaireService');

class CommentaireController {

    async getAllCommentaire(request, result){
        try {
            const commentaire = await CommentaireService.getAllCommentaire();
            result.json(commentaire);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des Commentaire"})
        }
    }

    async getCommentaireById(request, result){
        try {
            const commentaire = await CommentaireService.getCommentaireById(request.params.id);
            result.json(commentaire);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération du Commentaire"})
        }
    }

    async addCommentaire(request, result){
        try {
            const commentaire = await CommentaireService.addCommentaire(request.body);
            result.json(commentaire);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'ajout du Commentaire"})
        }
    }

    async updateCommentaire(request, result){
        try {
            const commentaire = await CommentaireService.updateCommentaire(request.params.id, request.body);
            result.json(commentaire);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification de la Commentaire"})
        }
    }

    async deleteCommentaire(request, result){
        try {
            const commentaire = await CommentaireService.deleteCommentaire(request.params.id);
            result.json(commentaire);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la suppression de la Commentaire"})
        }
    }

}

module.exports = new CommentaireController();