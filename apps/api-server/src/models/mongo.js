'use strict';

/** Class representing a generic mongo model. */
class Model {

  /**
   * Model Constructor
   * @param {string} schema - mongo schema
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   * Retrieves one or more records
   * @param {string} _id - optional mongo record id
   * @returns {*}
   */
  get(_id) {
    let queryObject = _id ? {_id} : {};
    return this.schema.find(queryObject);
  }

  /**
   * Create a new record
   * @param {object} record - matches the format of the schema
   * @returns {*}
   */
  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  /**
   * Replaces a record in the database
   * @param {string} _id - Mongo Record ID
   * @param {object} record - The record data to replace. ID is a required field
   * @returns {*}
   */
  put(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, {new:true});
  }

  /**
   * Deletes a recod in the model
   * @param {string} _id - Mongo Record ID
   * @returns {*}
   */
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = Model;
