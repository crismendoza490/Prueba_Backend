const { Paciente } =  require('../../models/index');
const { Usuario } =  require('../../models/index');
const Get = async (req, res) => {
    await res.send(`Hello, i'm Goku`);
}

const getPacientes = async (req, res) => {
    try {
        const AllPatients = await Paciente.findAll();
        res.status(200).send(AllPatients);
        console.log(AllPatients); 
    } catch (error) {
        res.status(400).send(Error(error))
    }
}

const createPaciente = async (req, res) => {
    try {
        const { OwnerName, TypeAnimal, IdUser } = req.body;
        const newPaciente = await Paciente.create({
            OwnerName: OwnerName,
            TypeAnimal: TypeAnimal,
            IdUser: IdUser
        })
        console.log(newPaciente);
        res.send('Patient has been created!!');
    } catch (error) {
        res.status(400).send(Error(error))
    }

}

const getOne = async (req,res) => {
    try {
        const { id } = req.params;
        const paciente = await Paciente.findOne({where:{idPaciente: id}});
        if (paciente === null) {
            res.send("Patient not found");
        } else {
            res.send(paciente); 
        }
    } catch (error) {
        res.status(200).send(error);
    }
}

const UpdatePaciente = async (req, res) => {
    try {
        const { id } = req.params;
        const { OwnerName, TypeAnimal, IdUser } = req.body;
        const paciente = await Paciente.findByPk(id);
        paciente.OwnerName = OwnerName;
        paciente.TypeAnimal = TypeAnimal;
        paciente.IdUser = IdUser;

        await paciente.save();

        res.send('Patient has been updated!!!');
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const DeletePaciente = async (req, res) => {
    try {
        const { id } = req.params;
        await Paciente.destroy({
            where:{
                idPaciente: id,
            }
        })
        res.send('Patient has been deleted!!')
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {getPacientes, createPaciente, getOne, UpdatePaciente, DeletePaciente, Get}