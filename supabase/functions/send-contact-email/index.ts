import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, message }: ContactEmailRequest = await req.json();

    console.log("Recebendo dados do formulário:", { name, phone, email, message });

    // Enviar email para você (notificação de novo contato)
    const notificationResponse = await resend.emails.send({
      from: "Contato Luxtia <onboarding@resend.dev>",
      to: ["contato@luxtia.com.br"], // Substitua pelo seu email
      subject: `Novo contato de ${name}`,
      html: `
        <h2>Novo contato recebido</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    // Enviar email de confirmação para o cliente
    const confirmationResponse = await resend.emails.send({
      from: "Luxtia <onboarding@resend.dev>",
      to: [email],
      subject: "Recebemos sua mensagem!",
      html: `
        <h2>Obrigado por entrar em contato, ${name}!</h2>
        <p>Recebemos sua mensagem e retornaremos o mais breve possível.</p>
        <p>Nossa equipe analisará sua solicitação e entrará em contato através dos dados fornecidos.</p>
        <br>
        <p>Atenciosamente,<br>Equipe Luxtia</p>
      `,
    });

    console.log("Emails enviados com sucesso:", { 
      notification: notificationResponse, 
      confirmation: confirmationResponse 
    });

    return new Response(JSON.stringify({ 
      success: true,
      message: "Emails enviados com sucesso" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Erro ao enviar emails:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);