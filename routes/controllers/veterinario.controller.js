const { Veterinario } = require('../../models/index');

const Get = async (req, res) => {
    await res.send('Hello my little pets!!')
}

module.exports = { Get }

const getVet = async (req, res) => {
    try {
        const AllVets = await Veterinario.findAll();
        res.status(200).send(AllVets);
        console.log(AllVets);
    } catch (error) {
        res.status(400).send(error);
    }
}

const createVet = async (req, res) => {
    try {
        const { VetName, Address, Id_User} = req.body;
        const newVet = await Veterinario.create({
            VetName: VetName,
            Address: Address,
            Id_User: Id_User
        })
        res.send('Vet has been created!!')
    } catch (error) {
        res.status(400).send(error);
    }
}

const getOne = async (req,res) => {
    try {
        const { id } = req.params;
        const vet = await Veterinario.findOne({where: {idVet: id}});
        if (vet === null) {
            res.send('Vet not found');
        } else {
            res.send(vet);
        }
    } catch (error) {
        res.status(200).send(error);
    }
}

const UpdateVet = async (req, res) => {
    try {
        const { id } = req.params;
        const { VetName, Address, Id_User } = req.body;
        const vet = await Veterinario.findByPk(id);
        vet.VetName = VetName;
        vet.Address = Address;
        vet.Id_User = Id_User;

        await vet.save();

        res.send('Vet has been updated!!');
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const DeleteVet = async (req, res) => {
    try {
        const { id } = req.params;
        await vet.destroy({
            where:{
                idVet: id,
            }
        })
        res.send('Vet has been deleted!!');
    } catch (error) {
        res.status(500).json({mesage: error.mesage});
    }
}

module.exports = { getVet, createVet, UpdateVet, DeleteVet, getOne }