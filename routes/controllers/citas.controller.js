const { Citas } = require('../../models/index');

// const getTets = async (req, res) => {
//     res.send('This is an appointment!!');
// }

const getCitas = async (req, res) => {
    try {
        const AllAppointments = await Citas.findAll();
        res.status(200).send(AllAppointments);
        console.log(AllAppointments);
    } catch (error) {
        res.status(400).send(error);
    }
}

const createAppointment = async (req, res) => {
    try {
        const { IdVet, IdPaciente, AppoitmentDate, status } = req.body;
        const newAppointment = await Citas.create({
            IdVet: IdVet,
            IdPaciente: IdPaciente,
            AppoitmentDate: AppoitmentDate,
            status: status
        })

        console.log(newAppointment);
        res.send('New Appointment created');

    } catch (error) {
        res.status(400).send(error);
    }
}

const getOne = async (req, res) => {
    const { id } = req.params;
    const appointment = await Citas.findOne({ where: { idCita: id } });
    
    if (appointment === null) {
        res.send('Appointment not found!!');
    } else {
        res.status(200).send(appointment);
    }
}

const UpdateAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const { IdVet, IdPaciente, AppoitmentDate, status } = req.body;
        const cita = await Citas.findByPk(id);
        cita.IdVet = IdVet;
        cita.IdPaciente = IdPaciente;
        cita.AppoitmentDate = AppoitmentDate;
        cita.status = status;

        await cita.save();
        res.send('Appointment has been updated');

    } catch (error) {
        res.status(500).json({mesaage: error.mesaage});  
        console.log(error);
    }
}

const DeleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;
         await Citas.destroy({
            where:{
                idCita: id,
            }
         })
    } catch (error) {
        res.status(500).json({message: error.mesaage});
    }
}


async function AgendarCitas(req, res){
    const {id} = req.params;
    const { status } = req.body;
    const UpdateStatus = Citas.findByPk(id)
    UpdateStatus.status = status;

    if (status === 'rechazada') {
        res.send('The appointment has been rejected, please schedule it again \n')
    } else {
       res.sen('The appointment has been accepted and confirmed')
    }
}
 
module.exports = { getCitas, createAppointment, UpdateAppointment, DeleteAppointment, getOne }