"use strict";

function quote(str) {
  return `[${str}]`;
}

module.exports = { ...require('./mixins/pagination-not-supported'),
  name: 'mssql',
  quote
};