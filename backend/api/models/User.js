/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {
    attributes: {
        username: {
            type: 'string',
            unique: true
        },
        email: {
            type: 'email',
            unique: true
        },
        admin: {
            type: 'boolean',
            defaultsTo: false
        },
        // Passport configurations
        passports: {
            collection: 'Passport',
            via: 'user'
        }
    },

    register: function(data, next) {
        sails.models.user.create(data).exec(function(err, createdUser){
            if (err) return next(err);
            if (data.username && !data.identifier)
                data.identifier = data.username;
            sails.models.passport.create(data).exec(function(err, createdPassport){
                if (err) return next(err);
                createdUser.passports.add(createdPassport.id);
                createdUser.save(function(err, response){
                    next(err, response);
                });
            });
        });
    }
};
