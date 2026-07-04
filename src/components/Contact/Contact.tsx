import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage('Email service is not configured yet.');
      console.log(serviceId)
      console.log(templateId)
      console.log(publicKey)
      return;
    }

    try {
      setIsSending(true);
      setStatusMessage('');

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      formRef.current.reset();
      setStatusMessage('Message sent successfully.');
    } catch {
      setStatusMessage('The message could not be sent. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center mb-4">Contacto</h2>

      <div className="row justify-content-center">
        <div className="col-md-8">
          
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="row">
         
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="user_name"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">Correo</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="user_email"
                  placeholder="nombre@correo.com"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={4}
                placeholder="Escribe tu mensaje..."
                required
              ></textarea>
            </div>

           
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-4" disabled={isSending}>
                {isSending ? 'Enviando...' : 'Enviar'}
              </button>
            </div>

            {statusMessage && (
              <p className="text-center mt-3 mb-0">{statusMessage}</p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};
