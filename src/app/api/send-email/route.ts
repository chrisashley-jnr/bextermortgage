import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, data } = body;

        // Validate environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing email credentials');
            return NextResponse.json(
                { error: 'Server configuration error: Missing email credentials' },
                { status: 500 }
            );
        }

        const port = Number(process.env.EMAIL_PORT) || 587;
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'mail.bextermortgage.com',
            port: port,
            secure: port === 465, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Format the email content based on the form type
        let subject = '';
        let htmlContent = '';

        if (type === 'contact') {
            subject = `Support Request`;
            htmlContent = `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `;
        } else if (type === 'application') {
            subject = `New Applicant - ${data.firstName} ${data.lastName}`;
            htmlContent = `
        <h2>New Mortgage Application</h2>
        <h3>Personal Details</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        
        <h3>Mortgage Requirements</h3>
        <p><strong>Type:</strong> ${data.mortgageType}</p>
        <p><strong>Estimated Value:</strong> $${data.propertyValue}</p>
        <p><strong>Desired Amount:</strong> $${data.mortgageAmount}</p>
        
        <h3>Financial Info</h3>
        <p><strong>Employment Status:</strong> ${data.employmentStatus}</p>
        <p><strong>Annual Income:</strong> $${data.annualIncome}</p>
      `;
        }

        // Send the email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'chrisashley1061@gmail.com', // Testing email
            subject: subject,
            html: htmlContent,
            replyTo: data.email, // Allow replying directly to the user
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
