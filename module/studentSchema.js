const mongo = require("mongoose");
const validator = require("validator");

const studentSchema = mongo.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: [true, "Email is already presenet"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Enter a valid Email ID");
            }
        }
    },
    password:{
        type: String,
        required: true,
    },
    student:{
        type: Boolean,
        required: true
    }
});

const Student = mongo.model("Student", studentSchema);
module.exports = Student;