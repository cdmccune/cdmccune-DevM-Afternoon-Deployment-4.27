
const showImage = () => {
    let images = ["https://drive.google.com/uc?export=view&id=Rey_Kd5ZaQNVsa_EdPfZlUkF5OyBYDP2",
    "https://drive.google.com/uc?export=view&id=1z-ddVrRhiAwmqW1jvL56nacD5URdOA4S",
    "https://drive.google.com/uc?export=view&id=1FI6JxxwhalwqP3Qm4rlQucERAtgxJUjr",
    "https://drive.google.com/uc?export=view&id=1UFHnXwjk33sShh-fzAp9tTJUY2Zod2BI",
    "https://drive.google.com/uc?export=view&id=1NpuvRUWjvWTvHg3vhcU4VqjWhuHdQRgk"]
    const image = document.createElement("img")
    image.src = images[2]
    document.querySelector(".pic").appendChild(image)

}

document.getElementById("picture").addEventListener('click', showImage)

 