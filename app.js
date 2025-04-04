const express = require('express');
const app = express();

const examGroupRoute = require('./routes/examGroup');

app.use('/api', examGroupRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));