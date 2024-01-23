"use client";
import React, { useRef } from "react";
import { useFormStatus } from "react-dom";
import { sendContactInfo } from "@/utils/sendContactInfo";

const ContactForm = () => {
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <div
      id="contact"
      className="section relative pb-20 bg-white dark:bg-gray-800"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap flex-row -mx-4 justify-center">
          <div className="max-w-ful px-4 w-full lg:w-8/12">
            <div
              className="bg-gray-100 border-b border-gray-100 w-full p-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              <header className="text-center mx-auto mb-12 lg:px-20">
                <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
                  Contacto
                </h2>

                <p className="text-gray-600 leading-relaxed font-light text-xl mx-auto pb-2">
                  No dudes en comunicarte para saber más
                </p>
              </header>

              <form
                ref={formRef}
                action={async (formData) => {
                  const response = await sendContactInfo(formData);
                  if (response) {
                    formRef.current?.reset();
                  }
                }}
              >
                <div className="flex flex-wrap flex-row -mx-4">
                  <div className="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                    <label
                      className="inline-block mb-2"
                      htmlFor="name"
                    >
                      Nombre
                    </label>

                    <input
                      type="text"
                      name="name"
                      className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                      id="name"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                    <label
                      className="inline-block mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                      name="email"
                      id="email"
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    className="inline-block mb-2"
                    htmlFor="subject"
                  >
                    Asunto
                  </label>

                  <input
                    type="text"
                    className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                    name="subject"
                    id="subject"
                  />
                  <div className="validate"></div>
                </div>
                <div className="mb-6">
                  <label
                    className="inline-block mb-2"
                    htmlFor="messages"
                  >
                    Mensaje
                  </label>
                  <textarea
                    className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                    name="message"
                    rows={10}
                    id="messages"
                  ></textarea>
                  <div className="validate"></div>
                </div>
                <div className="text-center mb-6">
                  <button
                    className="py-2.5 px-10 inline-block text-center leading-normal text-orange-500 bg-gray-50 font-semibold border shadow-md border-orange-500 rounded-md"
                    type="submit"
                  >
                    {pending ? "Enviando..." : "Enviar"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
