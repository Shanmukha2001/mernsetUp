const mongo = require("mongoose");

const questionSchema = mongo.Schema({
    "department": String,
    "year_sem": String,
    "Subject": String,
    "TypeOfExam": String,
    "fromTime": String,
    "toTime": String,
    "date": String,
    "email": String,
    "Questions": [
        {
            Question: String,
            Answer: String
        }
    ],
    "Mcqs": [
        {
            Question: String,
            Option1: String,
            Option2: String,
            Option3: String,
            Option4: String,
            validOption: String
        }
    ]
});

const Question = mongo.model("Question", questionSchema);
module.exports = Question;