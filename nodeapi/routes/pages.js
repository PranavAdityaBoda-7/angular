var express = require('express')
var router = express.Router();

var Page = require('../models/page');

//get pages
router.get('/',function(req,res){
    Page.find({},function(err,pages){
        if(err)console.log(err);
        res.json(pages);
    });
});

router.get('/:slug',function(req,res){
    var slug = req.params.slug;
    Page.findOne({ slug:slug },function(err,page){
        if(err)console.log(err);
        res.json(page);
    });
});


module.exports=router;
