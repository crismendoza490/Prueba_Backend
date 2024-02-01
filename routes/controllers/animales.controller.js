const { Animales } = require("../../models/index");

const getTest2 = async (req, res) => {
    res.send('Hello World!!')
}

const getAnimal = async (req, res) => {
    try {
        const AllAnimals = await Animales.findAll();
        res.status(200).send(AllAnimals);
        console.log(AllAnimals);
    } catch (error) {
        res.status(400).send(error);
    } 
}

const createAnimal = async (req, res) => {
    try {
        const { AnimalName } = req.body;
        const NewAnimal = await Animales.create({
            AnimalName: AnimalName,
        })
        console.log(NewAnimal)
        res.send('New animal has been created!!')
    } catch (error) {
        res.status(400).send(error);
    }
}

const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const animal = await Animales.findOne({where: {idAnimal:  id}});
        if (animal === null) {
            res.send('Animal not found');
        } else {
            res.status(200).send(animal);
        }
    } catch (error) {
        res.status(200).send(error);
    }
}

const updateAnimal = async (req, res) => {
    try {
        const { AnimalName } = req.body;
        const { id } = req.params;
        const animal = await Animales.findByPk(id);
        animal.AnimalName = AnimalName;

        await animal.save();
        res.send('Animal has been updated!!')
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = { getTest2, getAnimal, createAnimal, getOne, updateAnimal}