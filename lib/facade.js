class Facade {
  constructor(Schema) {
    this.Schema = Schema;
  }

  create(input) {
    const schema = new this.Schema(input);
    return schema.save();
  }

  update(conditions, update) {
    return this.Schema
    .update(conditions, update, { new: true })
    .exec();
  }

  find(query) {
    return this.Schema
    .find(query)
    .exec();
  }

  findOne(query, sortfield = '') {
    return this.Schema
    .findOne(query)
    .sort(sortfield)
    .exec();
  }

  findById(id) {
    return this.Schema
    .findById(id)
    .exec();
  }

  remove(id) {
    return this.Schema
    .findByIdAndRemove(id)
    .exec();
  }
}

module.exports = Facade;
