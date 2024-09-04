'use server'
import {Resend} from 'resend';
import {z} from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMessage = async (prevState: {message: string}, formData: FormData) => {
    const scheme = z.object({
        name: z.string().min(1),
        company: z.string().min(1),
        email: z.string().email(),
        message: z.string().min(1),
    })

    const parse = scheme.safeParse({
        name: formData.get('name'),
        company: formData.get('company'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    if(!parse.success){
        return{
            message: 'Failed to send message',
        };
    }

    const {name, company, email, message} = parse.data;

    try{
        await resend.emails.send({
            from: `${company} <onboarding@resend.dev>`,
            to: 'toxirovsherzod707@gmail.com',
            subject: `New message from ${name}`,
            html: `<p>${email}:<br/><br/>${message} </p>`,
        })

        return {
            message: 'Message sent successfully'
        }
    }
    catch(e){
        return {
            message: 'Something went wrong',
        }
    }


}