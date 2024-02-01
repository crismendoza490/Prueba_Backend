
const { json } = require("sequelize");
const { Usuario } = require("../../models/index");
const bcrypt = require ('bcrypt');
const { param } = require("../Animales.router");

async function getName() {
    let msj = {
        name: 'NewName'
    }
    return msj
}

const getUsuarios = async (req, res) => {
    try {
        const AllUsers = await Usuario.findAll();
        res.status(200).send(AllUsers);
        console.log(AllUsers);
    } catch (error) {
        res.status(400).send(Error(error));
    }
}

const createUsuario = async (req, res) => {

    try {
        const { PhoneNumber, Email, Password, UserType } = req.body;
        const newUser = await Usuario.create({
            PhoneNumber: PhoneNumber,
            Email: Email,
            Password: Password/*await bcrypt.hash(Password.toString(),1)*/,
            UserType: UserType
        })
        console.log(newUser);
        res.send('New user has been created!!');
    } catch (error) {
        res.status(400).send(Error(error));
    }

    
}

const getOne = async (req, res) => {
    const { id } = req.params;
    const user = await Usuario.findOne({where: {idUser: id}});

    if (user === null) {
        res.send("User not found");
    } else {
        res.status(200).send(user);
        console.log(user instanceof Usuario)
    }
}

const getByUser = async (req, res) => {
    const { UserType } = req.params;
    const users = await Usuario.findAll({where: {UserType: UserType}});
    res.status(200).send(users);
}

const UpdateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const {PhoneNumber,Email, Password, UserType} = req.body
        const user = await Usuario.findByPk(id);
        user.PhoneNumber = PhoneNumber;
        user.Email = Email;
        user.Password = Password;
        user.UserType = UserType;

        await user.save();
        res.send('User has been updated')
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    

}

const DeleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await Usuario.destroy({
            where:{
                idUser: id,
            },
        });
        res.status(204);        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

module.exports = { getUsuarios, createUsuario, getOne, UpdateUser , DeleteUser, getByUser}