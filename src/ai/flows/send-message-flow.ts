'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendMessage - A function that simulates sending an email with the form data.
 * - MessageInputSchema - The input type for the sendMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const MessageInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  message: z.string().describe('The message content.'),
});

export type MessageInput = z.infer<typeof MessageInputSchema>;

// This is a wrapper function that can be called from the client.
export async function sendMessage(input: MessageInput): Promise<{ success: boolean }> {
  return sendMessageFlow(input);
}

const sendMessageFlow = ai.defineFlow(
  {
    name: 'sendMessageFlow',
    inputSchema: MessageInputSchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (input) => {
    console.log('New message received:');
    console.log(`From: ${input.name} <${input.email}>`);
    console.log(`To: priyamc1324@gmail.com`);
    console.log('Message:');
    console.log(input.message);

    // In a real application, you would add an email sending service here.
    // For example, using a service like Resend, SendGrid, or Nodemailer.
    //
    // Example with a hypothetical email service:
    //
    // await email.send({
    //   from: 'Portfolio Contact Form <noreply@yourdomain.com>',
    //   to: 'priyamc1324@gmail.com',
    //   reply_to: input.email,
    //   subject: `New message from ${input.name}`,
    //   text: input.message,
    // });

    // For this prototype, we'll just log to the console and return success.
    return { success: true };
  }
);
