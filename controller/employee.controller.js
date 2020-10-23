const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

const Employee =  mongoose.model('empModel');

router.get('/',(req,res)=>{
    res.render('index', {title: 'CRUD APPLICATION'});
});

router.post('/',(req,res)=>{
    // creating function
    insertRecords(req,res);
});
// inserting record into the database
function insertRecords(req,res){
    var empObj = new Employee({
        fullname:  req.body.fName,
        email:  req.body.email,
        mobile:  req.body.number,
        city:  req.body.city,
    });

    empObj.save((err,doc)=>{
       if(err) throw err;
       res.redirect('list');
    })
}
// reading record into the database
router.get('/list',(req,res)=>{
    Employee.find((err,doc) => {
        if(err) throw err;
        res.render('list',{list:doc});
    })
})

// update record into the existing database record
router.get('/edit/:id',(req,res)=>{
    var id = req.params.id;
    Employee.findById(id,(err,doc) => {
        if(err) throw err;
        res.render("edit", {title: "Update Form", record: doc});
    })
})

router.post('/update',(req,res)=>{
    var update = Employee.findByIdAndUpdate(req.body.id,{
        fullname:  req.body.fName,
        email:  req.body.email,
        mobile:  req.body.number,
        city:  req.body.city,
    });

    update.exec((err,doc)=>{
        if(err) throw err;
        res.redirect("list");
    })
});









// deleting records into the database records
router.get('/delete/:id',(req,res)=>{
    var id = req.params.id;
    Employee.findByIdAndRemove(id,(err,doc) => {
        if(err) throw err;
            res.redirect('/list');
    })
})

module.exports = router;