const { VeterinarioAnimal } = require('../../models/index');

// const getTestVetA = async (req, res) => {
//     res.send('Vet for Animal!!')
// }


const getVetAnimals = async (req, res) => {
    try {
        const AllRegisters = await VeterinarioAnimal.findAll();
        res.status(200).send(AllRegisters);
        console.log(AllRegisters); 
    } catch (error) {
        res.status(400).send(Error(error));
    }
}

const createVetAnimals = async (req, res) => {
    try {
        const { Id_Vet, IdAnimal } = req.body;
        const reg = await VeterinarioAnimal.create({
            Id_Vet: Id_Vet,
            IdAnimal: IdAnimal,
        });
        console.log(reg);
        res.send('New vet for animal has been created!!');
    } catch (error) {
        res.status(400).send(Error(error)); 
    }
    
}

const updateVetAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const { Id_Vet, IdAnimal } = req.body;
        const vetAnimal = await VeterinarioAnimal.findByPk(id);
        vetAnimal.Id_Vet = Id_Vet;
        vetAnimal.IdAnimal = IdAnimal;

        await vetAnimal.save();
        res.send('Vet for Animal has been updated!!')
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = { getVetAnimals, createVetAnimals, updateVetAnimal};