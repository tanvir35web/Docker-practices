const express = require('express')
const cors = require('cors');

const app = express();
const PORT = 3001;

const userList = [
    {
        id: 1,
        name: 'John Doe',
        age: 30
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 28
    },
    {
        id: 3,
        name: 'Michael Johnson',
        age: 35
    },
    {
        id: 4,
        name: 'Sarah Williams',
        age: 27
    },
    {
        id: 5,
        name: 'David Brown',
        age: 32
    }
];

app.use(cors({
    origin: '*'
}));

app.get('/api/users', (req, res) => {
    res.json({ massage: "Data fetch succesfully", data: userList });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
