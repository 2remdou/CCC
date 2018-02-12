const { createError } = require('apollo-errors');

module.exports = createError('ErrorCCC',{
    message: 'Une erreur est survenue'
});

