const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('edusite learning Course API Running');
})

app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course_details = courses.find(course => course.course_id === id);
    if (course_details == null) {
        res.send({ "error": "No Data" });
    }
    else {
        res.send(course_details);
    }
})
app.listen(port, () => {
    console.log(`edusite API Running In PORT : ${port}`);
})