let express=require('express'); //inyección de express
let router=express.Router();    //router

router.get('/person', (req, res)=>{
    res.send('has solicitado el listado de personas')
});

module.exports=router;