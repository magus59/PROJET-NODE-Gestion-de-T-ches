const { where } = require("sequelize");
const Commentaire = require("../Models/Commentaire");

class CommentaireService {
  async getAllCommentaire() {
    return await Commentaire.findAll();
  }

  async getCommentaireById(commentaireId) {
    return await Commentaire.findByPk(commentaireId);
  }

  async addCommentaire(commentaire) {
    return await Commentaire.create(commentaire);
  }

  async updateCommentaire(id, commentaire){
    return await Commentaire.update(commentaire, {
      where : {
        id : id
      }
    });
  }

  async deleteCommentaire(id) {
    return await Commentaire.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new CommentaireService();
