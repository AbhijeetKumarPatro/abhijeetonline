'use server';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // In production, integrate with email service like Resend, SendGrid, etc.
  console.log('Contact form submission:', { name, email, message });

  // Simulate processing
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true };
}