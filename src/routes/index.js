const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/sendEmail");

// colocar las rutas aquí
router.get("/", (req, res) => {
    res.send("Welcome to express");
});
// Ruta para el formulario de contacto
router.post("/emails/contact", async (req, res) => {
    const { name, email, phone, comment } = req.body;
    await sendEmail({
        to: "escodecraft@gmail.com",
        subject: "Mensaje de pagina web",
        html: ` 
				<h1>Hola codeCraft, alguien escribio en el formulario de la pagina web</h1>
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
// Ruta para el formulario de consultorías
router.post("/emails/consulting", async (req, res) => {
    // Obtener los datos del formulario de consultorías
    const { name, email, phone, date } = req.body;

    // Envío de correo electrónico
    await sendEmail({
        to: "escodecraft@gmail.com",
        subject: "Solicitud de consultoría",
        html: `
                <h1>Hola CodeCraft, alguien solicitó una consultoría en la página web</h1>
                <br>
                <br>
                <p><span>Nombre: </span>${name}</p>
                <p><span>Correo: </span>${email}</p>
                <p><span>Teléfono: </span>${phone}</p>
                <p><span>Fecha solicitada para videoconferencia: </span>${date}</p>
            `,
    });

    return res.json("Email sent successfully");
});

module.exports = router;
