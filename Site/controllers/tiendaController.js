const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))

module.exports = {
    //http://localhost:3000/tienda
    tienda:function(req,res){
        res.render('tienda', { 
            title: 'Tienda | Buenas tintas',
            css: 'tienda.css'
        })
    },
    //http://localhost:3000/tienda/carrito
    carrito:function(req,res){
        res.render('carrito', { 
            title: 'Carrito | Buenas tintas',
            css: 'carrito.css',
        })
    }
}