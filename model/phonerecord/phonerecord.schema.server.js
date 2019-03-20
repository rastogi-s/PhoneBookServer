var mongoose = require('mongoose');
var phoneRecordSchema = mongoose.Schema({
    firstname: {type:String },
    lastname:{type:String},
    phone:{type:Number,unique : true, required : true, dropDups: true},
    email:{type:String}
}, {collection: 'phone_record'});

module.exports = phoneRecordSchema;
