import dbJson from './db.json';

exports.setupMongoose = (mongoose) => {
  mongoose.models = {};
  mongoose.connect(dbJson.db.test.url);
  mongoose.connection.on('error', () => {});
}
