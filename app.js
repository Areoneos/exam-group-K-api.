const express = require('express');
const app = express();

const examGroupRoute = require('./routes/examGroup');

app.use('/api', examGroupRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const router = express.Router();

// Hardcoded list of exams
const exams = [
    { id: 1, name: "Intprog Exam", date: "2025-06-10" },
    { id: 2, name: "Semi-Final Exam", date: "2025-06-15" }
];

// GET /exams
router.get('/exams', (req, res) => {
    res.json(exams);
});

module.exports = router;
