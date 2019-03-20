var mongoose =
    require('mongoose');
var phoneRecordSchema =
    require('./phonerecord.schema.server');
var phoneRecordModel = mongoose
    .model('TableModel', phoneRecordSchema);


module.exports = {
    getAllContacts:getAllContacts,
    getContactById:getContactById,
    getContactsByFirstName:getContactsByFirstName,
    getContactsByLastName:getContactsByLastName,
    getContactsByEmail:getContactsByEmail,
    getContactByPhone:getContactByPhone,
    deleteContact:deleteContact,
    updateContact:updateContact,
    addNewContact:addNewContact,
    deleteAllContact:deleteAllContact
};


function addNewContact(record) {
    return phoneRecordModel.create(record).catch(error => error);
}

function getAllContacts() {
    return phoneRecordModel.find().catch(error => error);
}

function getContactById(id) {
    return phoneRecordModel.find({_id:id}).catch(error => error);
}

function getContactsByFirstName(firstname) {
    return phoneRecordModel.find({firstname:firstname}).catch(error => error);
}

function getContactsByLastName(lastname) {
    return phoneRecordModel.find({lastname:lastname}).catch(error => error);
}

function getContactsByEmail(email) {
    return phoneRecordModel.find({email:email}).catch(error => error);
}

function getContactByPhone(phone) {
    return phoneRecordModel.find({phone:phone}).catch(error => error);
}


function updateContact(id,record) {
    console.log(record);
    return phoneRecordModel.updateOne({_id: id},
        {$set: record}).catch(error => error);
}

function deleteContact(id) {
    return phoneRecordModel.deleteOne({_id:id}).catch(error => error);
}

function deleteAllContact() {
    return phoneRecordModel.remove({}).catch(error => error);
}




