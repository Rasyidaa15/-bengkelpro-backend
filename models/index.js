const sequelize = require('../config/db');
const User = require('./User');
const Category = require('./Category');
const Supplier = require('./Supplier');
const Product = require('./Product');
const Service = require('./Service');
const Order = require('./Order');
const OrderItem = require('./OrderItem');

User.hasMany(Order, { foreignKey: 'UserId' });
Order.belongsTo(User, { foreignKey: 'UserId' });

Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

Supplier.hasMany(Product, { foreignKey: 'supplierId' });
Product.belongsTo(Supplier, { foreignKey: 'supplierId' });

Service.hasMany(OrderItem, { foreignKey: 'ServiceId' });
OrderItem.belongsTo(Service, { foreignKey: 'ServiceId' });

Order.hasMany(OrderItem, { foreignKey: 'OrderId' });
OrderItem.belongsTo(Order, { foreignKey: 'OrderId' });

Product.hasMany(OrderItem, { foreignKey: 'ProductId' });
OrderItem.belongsTo(Product, { foreignKey: 'ProductId' });

module.exports = {
  sequelize,
  User,
  Category,
  Supplier,
  Product,
  Service,
  Order,
  OrderItem,
};