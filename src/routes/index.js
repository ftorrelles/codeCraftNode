const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/sendEmail");

// colocar las rutas aquí
router.get("/", (req, res) => {
    res.send("Welcome to express");
});

router.post("/emails/contact", async (req, res) => {
    const { name, email, phone, comment } = req.body;
    await sendEmail({
        to: "torrellesf93@gmail.com",
        subject: "Mensaje de pagina web",
        html: ` 
				<h1>Hola Biupoll, alguien escribio en tu pagina web</h1>
                <br>
                <br>
                <p><span>Nombre: </span>${name}</p>
                <p><span>Correo: </span>${email}</p>
                <p><span>Telefono: </span>${phone}</p>
                <br>
                <p><span>Comentario: </span>${comment}</p>
				
            `,
    });
    return res.json("Email sent succesfully");
});

module.exports = router;
