module.exports = function (app) {

    let phoneRecordModel =
        require('../model/phonerecord/phonerecord.model.server');

    app.post('/api/contact', addNewContact);
    app.get('/api/contact', getAllContacts);
    app.get('/api/contact/id/:id', getContactById);
    app.get('/api/contact/firstname/:firstName', getContactsByFirstName);
    app.get('/api/contact/lastname/:lastName', getContactsByLastName);
    app.get('/api/contact/email/:email', getContactsByEmail);
    app.get('/api/contact/phone/:phone', getContactByPhone);
    app.delete('/api/contact/:id', deleteContact);
    app.delete('/api/contact', deleteAllContact);
    app.put('/api/contact/:id', updateContact);


    function addNewContact(req,res){
        let record =  req.body;
        phoneRecordModel.addNewContact(record).then(record => {
            if(record)
                res.status(200).json(record);
            else
                res.status(501).send(null);
        })
    }

    function getAllContacts(req,res){

        phoneRecordModel.getAllContacts().then(records => {
            if(records)
                res.status(200).json(records);
            else
                res.status(501).send(null);
        })
    }

    function getContactById(req,res){
        let id = req.params['id'];
        phoneRecordModel.getContactById(id).then(records => {
            if(records)
                res.status(200).json(records);
            else
                res.status(501).send(null);
        })
    }

    function getContactsByFirstName(req,res){
        let firstName = req.params['firstName'];
        phoneRecordModel.getContactsByFirstName(firstName).then(records => {
            if(records)
                res.status(200).json(records);
            else
                res.status(501).send(null);
        })
    }

    function getContactsByLastName(req,res){
        let lastName = req.params['lastName'];
        phoneRecordModel.getContactsByLastName(lastName).then(records => {
            if(records)
                res.status(200).json(records);
            else
                res.status(501).send(null);
        })
    }

    function getContactsByEmail(req,res){
        let email = req.params['email'];
        phoneRecordModel.getContactsByEmail(email).then(records => {
            if(records)
                res.status(200).json(records);
            else
                res.status(501).send(null);
        })
    }

    function getContactByPhone(req,res){
        let phone = req.params['phone'];
        phoneRecordModel.getContactByPhone(phone).then(records => {
            if(records)
                res.status(200).json(records);
            else
                res.status(501).send(null);
        })
    }

    function deleteContact(req,res){
        let id = req.params['id'];
        phoneRecordModel.deleteContact(id).then(status => {
            res.send(status);
        });
    }

    function deleteAllContact(req,res){
        phoneRecordModel.deleteAllContact().then(status => {
            res.send(status);
        });
    }

    function updateContact(req,res){
        let id = req.params['id'];
        let record =  req.body;
        phoneRecordModel.updateContact(id,record).then(status => {
            res.send(status);
        });
    }


};
