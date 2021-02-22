const router = require('express').Router();
let Astronaut = require('../models/astronaut.model');

router.route('/').get((req, res) => {
    Astronaut.find()
        .then(astronaut => res.json(astronaut))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const birth = req.body.birth;
    const superpower = req.body.superpower;

    const newAstronaut = new Astronaut({firstName, lastName, birth, superpower});

    newAstronaut.save()
        .then(() => res.json('Astronaut added...'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Astronaut.findByIdAndDelete(req.params.id)
        .then(() => res.json('Astronaut deleted...'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;