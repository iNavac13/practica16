let express=require('express'); //inyección de express
let app=express();    //app es nuestro server
let personsRoute=require('./routes/person');    //ruta de persons en carpeta router

app.set('view engine', 'ejs');
app.use(personsRoute);
app.use('/assets', express.static(__dirname+'/public'));

//puerto al que va a escuchar el server
let PORT=process.env.PORT||3000;

app.listen(PORT, ()=>{
    console.log('escuchando al puerto 3000');
});