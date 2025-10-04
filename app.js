import express from "express";

const PORT = 3000;

const app = express()

// middlewares

// // middleware to parse JSON bodies
app.use(express.json())

// USERS API
const users = [
    {
        id: 1,
        name: "Bilal",
        age: 21,
        email: "bilal@gmail.com",
        password: "123456789",
        image_url: "https://profile.jpg",
        phone: "03208211222",
        city: "Karachi",
        postalCode: "72550"
    }
];

app.post("/users", (req, res) => {
    const { name, age, email, password, image_url, phone, city, postalCode } = req.body;

    // if email not found
    if (!email) {
        return res.status(400).json({ status: 400, message: "Email is required" })
    }

    if (!password) {
        return res.status(400).json({ status: 400, message: "Password is required" })
    }

    const newUser = {
        id: users.length + 1,
        name: name ?? "username",
        age: age ?? 17,
        email, password,
        image_url: image_url ?? "",
        phone: phone ?? "",
        city: city ?? "Karachi",
        postalCode: postalCode,
    }

    users.push(newUser)
    return res.status(201).json({
        statue: 201,
        message: "User create successfully"
    });
})

app.get("/users", (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "Users Fetched",
        total_users: users.length,
        users
    })
})

app.delete("/users/:id", (req, res) => {
    const { id } = req.params

    console.log(id)

    // find user with the given id
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    // if user not found
    if (userIndex === -1) return res.status(404).json({ status: 404, message: "User not Found" })

    // delete user
    users.splice(userIndex, 1)
    // console.log(users)

    return res.status(200).json({
        status: 200,
        message: `user is deleted with id = ${id}`
    })
})


app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, email, password, image_url, phone, city, postalCode } = req.body;

    // find user 
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if (userIndex === -1) return res.status(404).json({
        status: 404,
        message: "user Not Found"
    })

    // if user Found
    const newUser = {
        name: name ?? users[userIndex].name,
        age: age ?? users[userIndex].age,
        email: email ?? users[userIndex].email,
        password: password ?? users[userIndex].password,
        image_url: image_url ?? users[userIndex].image_url,
        phone: phone ?? users[userIndex].phone,
        city: city ?? users[userIndex].city,
        postalCode: postalCode ?? users[userIndex].postalCode,
    }

    users[userIndex] = newUser

    return res.status(200).json({
        status: 200,
        message: "User Updated",
        newUser: newUser,
    })

})

app.get("/test", (req, res) => {
    return res.status(200).json({ status: 200, message: "Server is running Ok" })
})

app.listen(PORT, () => {
    console.log(`Server is running on http:localhost:${PORT}`)
})