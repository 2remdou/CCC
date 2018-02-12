const customError = require('./customError');

module.exports = {
    db: (error) => {
        console.log(error);
        let message = null;
        switch (error.code) {
            case '23505':
                re = /(\w+)\s(\w+)/;
                message = error.detail.replace(/(\w+)=(\w+)/,'$1');
                console.log(message);
                break;
            default:
                break;
        }
        throw new customError({message});
    }
}
