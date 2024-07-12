const Collaboration = require("../Models/Collaboration");

class CollaborationService {
  async getAllCollaboration() {
    return await Collaboration.findAll({
      attributes: ['taskId', 'userId']
    });
  }

  async getCollaborationById(taskId, userId) {
    return await Collaboration.findOne({
      where: {
        taskId: taskId,
        userId: userId
      }
    });
  }

  async addCollaboration(collaboration) {
    return await Collaboration.create(collaboration);
  }

  async deleteCollaboration(taskId, userId) {
    return await Collaboration.destroy({
      where: {
        taskId: taskId,
        userId: userId
      }
    });
  }
}

module.exports = new CollaborationService();
