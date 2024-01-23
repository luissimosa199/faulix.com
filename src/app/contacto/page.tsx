import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <main>
      <section className="relative">
        <div className="relative overflow-hidden w-full h-96">
          <Image
            className="absolute object-cover grayscale"
            fill
            alt=""
            src="/images/hero.jpg"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute w-full px-2 py-4 bg-gray-600 opacity-75 bottom-24">
          <h1 className="text-5xl font-semibold text-white opacity-100">
            ¿Cómo podemos <span className="text-orange-500">ayudarlo?</span>
          </h1>
        </div>
      </section>
      <section className="my-4">
        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
