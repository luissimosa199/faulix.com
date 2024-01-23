"use server";
import { AgencyContactFormModel } from "@/lib/AgencyContactFormModel";
import dbConnect from "@/lib/dbConnect";
import sendgrid from "@sendgrid/mail";

interface ContactData {
  [key: string]: FormDataEntryValue;
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactInfo(formData: FormData) {
  const formDataObject: ContactData = Array.from(formData.entries()).reduce(
    (obj, [key, value]) => {
      obj[key] = value;
      return obj;
    },
    {} as ContactData
  );

  const htmlContent = `<!DOCTYPE html>
  <html>
    <body >
    <h1>Nuevo Contacto DOXA AGENCIA</h1>
      <p>Nombre: ${formDataObject.name}</p>
  
      <p>Email: ${formDataObject.email}</p>
  
      <p>Asunto: ${formDataObject.subject}</p>
  
      <h2>Mensaje</h2>
      <p>${formDataObject.message}</p>
  
    </body>
  </html>`;

  const options = {
    from: "javier.doxadoctor@gmail.com",
    to: "marceloj@gmail.com",
    subject: `Nuevo contacto para DOXA AGENCIA ${formDataObject.name}`,
    html: htmlContent,
  };

  sendgrid.setApiKey(process.env.SEND_GRID_API_KEY as string);

  await sendgrid.send(options);

  await dbConnect();
  const newContact = new AgencyContactFormModel(formDataObject);
  const savedContact = await newContact.save();
  const response = savedContact.toObject();

  return response;
}
