const mongo = require("mongoose");

const answerSchema = mongo.Schema({
    "questionId": String,
    "email": String,
    "Subject": String,
    "TypeOfExam": String,
    "Questions": [
        {
            studentAnswer: String
        }
    ],
    "Mcqs": [
        {
            studentAnswer: String
        }
    ]
});

const Answer = mongo.model("Answer", answerSchema);
module.exports = Answer;