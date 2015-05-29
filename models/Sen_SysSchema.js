"use strict";
// in your server file - e.g. app.js
// The model definition is done in /path/to/models/project.js
// As you might notice, the DataTypes are the very same as explained above
module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Sen_SysSchema", {
    Id: {type : DataTypes.STRING, primaryKey : true, unique : true},
    SentenceSchema: DataTypes.STRING,
    LogicRelation: DataTypes.STRING,
    KeyWords: DataTypes.STRING,
    SchemaExp: DataTypes.STRING,
    RelData: DataTypes.STRING
  },{
    // don't add the timestamp attributes (updatedAt, createdAt)

    timestamps: false,
    freezeTableName: true
  });
};
