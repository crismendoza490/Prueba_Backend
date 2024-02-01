const auth = require('basic-auth');
const cred = require('../server/Database/credentials.json')

module.exports = basicAuth = (data) => {
    return (req, res, next) => {
        if(data){
            req.user = auth(req)
            console.log("Entro al middleware ", req.user)
            next();
        }else{
            return res.status(403).json({message:"no Tienes permisos"})
        }
        
    }
}