import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

// array com os models....
const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    // percorrer um array de models passando a conexao
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
