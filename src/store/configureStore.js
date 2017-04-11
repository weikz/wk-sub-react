if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
    
} else {
    module.exports = require('./configureStore.dev');
}