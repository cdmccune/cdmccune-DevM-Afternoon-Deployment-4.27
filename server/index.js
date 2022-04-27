const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4005

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})

const showImage = () => {
    let images = ["https://drive.google.com/uc?export=view&id=Rey_Kd5ZaQNVsa_EdPfZlUkF5OyBYDP2",
    "https://drive.google.com/uc?export=view&id=1z-ddVrRhiAwmqW1jvL56nacD5URdOA4S",
    "https://drive.google.com/uc?export=view&id=1FI6JxxwhalwqP3Qm4rlQucERAtgxJUjr",
    "https://drive.google.com/uc?export=view&id=1UFHnXwjk33sShh-fzAp9tTJUY2Zod2BI",
    "https://drive.google.com/uc?export=view&id=1NpuvRUWjvWTvHg3vhcU4VqjWhuHdQRgk"]
    const image = document.createElement("img")
    image.src = images[Math.floor(Math.random()*5)]
    document.querySelector(".pic").appendChild(image)
}

document.getElementById("pic").addEventListener('click', showImage)


