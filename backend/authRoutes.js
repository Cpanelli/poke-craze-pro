const express = require("express");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const router = express.Router();
const pool = require("./database/connection");
const nodemailer = require("nodemailer");

// email verification generator
const generateVerificationCode = () => {
  return Math.random().toString(36).substring(2, 15);
};

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.Email_USER,
    pass: process.env.Email_PASS,
  },
});

// registration endpoint
router.post(
  "/register",
  [
    check("firstName", "First name is required").notEmpty(),
    check("lastName", "Last name is required").notEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    // registration code
  }
);

// login endpoint
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    // check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // retrieve user from the database
      pool.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        async (error, results, fields) => {
          if (error) {
            console.error("Error retrieving user:", error);
            return res
              .status(500)
              .json({ error: "An unexpected error occurred" });
          }

          // check if user exists
          if (results.length === 0) {
            return res.status(401).json({ error: "Invalid credentials" });
          }

          // compare passwords
          const user = results[0];
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
          }

          // generate JWT token
          const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" } // expires in 1 hour
          );

          res.json({ token });
        }
      );
    } catch (error) {
      console.error("Error authenticating user:", error);
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
);

module.exports = router;
