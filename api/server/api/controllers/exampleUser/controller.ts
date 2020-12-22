import db from '../../../models';

export class ExampleUsersController {
  read() {
    return db.ExampleUser.findAll({
      attributes: ['id', 'firstName', 'lastName'],
    });
  }

  create({ firstName, lastName }) {
    return db.ExampleUser.create({ firstName, lastName }).then(this.read);
  }

  update(id, { firstName, lastName }) {
    return db.ExampleUser.update(
      { firstName, lastName },
      { where: { id } }
    ).then(this.read);
  }

  delete(id) {
    return db.ExampleUser.destroy({
      where: { id },
    }).then(this.read);
  }
}

export default new ExampleUsersController();
