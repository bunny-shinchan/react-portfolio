# Setting Up EmailJS for the Portfolio Contact Form

This guide explains how to integrate **EmailJS** with the portfolio contact form so that messages submitted by users are sent directly to your email without needing a backend server.

The project uses:

* React
* Vite
* EmailJS

---

# 1. Install EmailJS

Install the EmailJS browser SDK in the project.

```bash
npm install @emailjs/browser
```

This package allows the frontend application to send emails directly through EmailJS.

---

# 2. Create an EmailJS Account

1. Go to the EmailJS dashboard
   [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Sign up or log in.
3. After logging in, you will configure three things:

* Email Service
* Email Template
* Public API Key

---

# 3. Create an Email Service

1. Navigate to  **Email Services** .
2. Click  **Add New Service** .
3. Choose  **Gmail** .
4. Connect your Gmail account.

EmailJS will request permission to  **send emails on your behalf** .

After the service is created you will get a:

```
Service ID
```

Example:

```
service_019f2vp
```

---

# 4. Create an Email Template

Go to **Email Templates** and click  **Create New Template** .

Configure the template as follows.

## Subject

```
New message from {{from_name}}
```

## Email Content

```
You received a new message from your portfolio website.

Name:
{{from_name}}

Email:
{{from_email}}

Message:
{{message}}
```

## To Email

```
your-email@gmail.com
```

## From Name

```
Portfolio Contact Form
```

## Reply To

```
{{from_email}}
```

This allows you to directly reply to the sender.

After saving the template you will receive a:

```
Template ID
```

Example:

```
template_6njn2qc
```

---

# 5. Get the Public Key

Go to:

```
Account → API Keys
```

Copy the  **Public Key** .

Example:

```
public_xxxxxxxxxxxxxx
```

This key is safe to use in frontend applications.

---

# 6. Configure Environment Variables

Create a `.env` file in the **root of the project** (same level as `package.json`).

Example structure:

```
portfolio/
  src/
  public/
  .env
  package.json
```

Add the EmailJS variables.

```
VITE_EMAIL_SERVICE_ID=service_019f2vp
VITE_EMAIL_TEMPLATE_ID=template_6njn2qc
VITE_EMAIL_PUBLIC_KEY=public_xxxxxxxxxxxxx
```

Important notes for Vite:

* Variables must start with `VITE_`
* Do not add spaces
* Do not use quotes

---

# 7. Add `.env` to `.gitignore`

Ensure your `.gitignore` contains:

```
.env
```

This prevents sensitive configuration values from being pushed to GitHub.

---

# 8. Connect EmailJS in the React Contact Form

Import EmailJS in the contact component.

```javascript
import emailjs from "@emailjs/browser";
```

Update the form submit handler.

```javascript
const handleSubmit = (event) => {
  event.preventDefault();

  if (!name.trim() || !email.trim() || !message.trim()) return;

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message
  };

  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    )
    .then(() => {
      setStep(4); // success state
    })
    .catch((error) => {
      console.error("Email failed:", error);
    });
};
```

---

# 9. Restart the Development Server

Vite only loads environment variables when the server starts.

Restart the dev server after creating or modifying `.env`.

```
npm run dev
```

---

# 10. Test the Contact Form

1. Open the portfolio locally.
2. Fill out the contact form.
3. Submit the message.

You should receive an email similar to:

```
Subject: New message from John Doe

Name:
John Doe

Email:
john@example.com

Message:
I would like to discuss a role.
```

---

# 11. Configure Environment Variables for Deployment

When deploying to platforms like  **Vercel** , add the same variables in the project settings.

Environment Variables:

```
VITE_EMAIL_SERVICE_ID
VITE_EMAIL_TEMPLATE_ID
VITE_EMAIL_PUBLIC_KEY
```

After deployment the contact form will continue working in production.

---

# Summary

EmailJS allows a React frontend to send emails without a backend server by connecting a contact form directly to an email service.

Setup steps:

1. Install EmailJS
2. Create Email Service
3. Create Email Template
4. Copy Public Key
5. Store credentials in `.env`
6. Connect EmailJS in the contact form
7. Restart Vite
8. Test the contact form

Your portfolio now has a fully functional contact form capable of sending emails directly to your inbox.
