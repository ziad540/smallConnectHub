import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('Assignment6', 'root', '12128741', {
    dialect: 'mysql',
    host: 'localhost',
});
export default sequelize;