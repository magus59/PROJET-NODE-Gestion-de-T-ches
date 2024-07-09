const { where } = require("sequelize");
const Collaboration = require("../Models/Collaboration");

class CollaborationService {
  async getAllCollaboration() {
    return await Collaboration.findAll();
  }

  async getCollaborationById(collaborationId) {
    return await Collaboration.findByPk(collaborationId);
  }

  async addCollaboration(collaboration) {
    return await Collaboration.create(collaboration);
  }

  async updateCollaboration(id, collaboration) {
    return await Collaboration.update(collaboration, {
      where: {
        taskId: id,
      },
    });
  }

  async deleteCollaboration(id) {
    return await Collaboration.destroy({
      where: {
        taskId: id,
      },
    });
  }
}

module.exports = new CollaborationService();
