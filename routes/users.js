var express = require('express');
var router = express.Router();
var swig  = require('swig');
var models  = require('../models');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  models.Sen_SysSchema.findAll({
    where: {
      LogicRelation: { $like: '%否定' }
    },
    limit: 10
  }).then(function(schemaList) {
    var renderedHtml = swig.renderFile('./views/users.html', {
      pagename: 'awesome people',
      schemas: schemaList
    });
    res.end(renderedHtml);
  })

});

module.exports = router;
