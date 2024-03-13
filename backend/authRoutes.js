const express = require('express');
const bcrypt = require('bcrypt');
const {check, validationResult} = require('express-validator');
const router = express.Router();
const pool = require('./database/connection');

router.post(
    '/register',
    [
        check('firstName', 'First name is required').notEmpty(),
        check('lastName', 'Last name is required').notEmpty,
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({min: 6}),
    ],
    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        const {firstName, lastName, email, password} = req.body;

        try {

            const hashedPassword = await bcrypt.hash(password, 10);

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {console.error('Error registering user:', error);
    res.status(500).json({ error: 'An unexpected error occurred'});
}
    }
);

module.exports = router;