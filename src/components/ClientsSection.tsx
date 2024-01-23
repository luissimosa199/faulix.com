"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import Slider from "react-slick";
import Image from "next/image";

const ClientsSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      id="clientes"
      className="bg-gray-200 p-4 sm:px-48"
    >
      <SectionTitle className="text-center">
        Contribuimos significativamente al avance y prosperidad de los negocios
        de las siguientes firmas
      </SectionTitle>
      <div className="px-4">
        {/* <Slider {...settings}>
          <>
            <div className="flex flex-wrap my-4">
              <div className="w-1/2 h-32">
                <Image
                  className="mx-auto"
                  src="/images/clients/ypf.png"
                  alt="ypg logo"
                  width={200}
                  height={100}
                />
              </div>
              <div className="w-1/2 h-32">
                <Image
                  className="mx-auto"
                  src="/images/clients/victorpodesta.png"
                  alt="victor podesta logo"
                  width={200}
                  height={100}
                />
              </div>
              <div className="w-1/2 h-32">
                <Image
                  className="mx-auto"
                  src="/images/clients/beconnected.png"
                  alt="beconnected logo"
                  width={200}
                  height={100}
                />
              </div>
              <div className="w-1/2 h-32">
                <Image
                  className="mx-auto"
                  src="/images/clients/betfriend.png"
                  alt="betfriend logo"
                  width={200}
                  height={100}
                />
              </div>
            </div>
          </>
          <>
            <div className="flex flex-wrap my-4">
              <div className="w-1/2 h-32">
                <Image
                  className="mx-auto"
                  src="/images/clients/asistenteai.png"
                  alt="asistenteai logo"
                  width={200}
                  height={100}
                />
              </div>
              <div className="w-1/2 h-32">
                <Image
                  className="mx-auto"
                  src="/images/clients/religa.png"
                  alt="religa logo"
                  width={200}
                  height={100}
                />
              </div>
              <div className="w-1/2 h-32">
                <Image
                  className="mx-auto"
                  src="/images/clients/openai.png"
                  alt="openai logo"
                  width={200}
                  height={100}
                />
              </div>
              <div className="w-1/2 h-32">
                <Image
                  className="mx-auto"
                  src="/images/clients/mercadopago.png"
                  alt="mercadopago logo"
                  width={200}
                  height={100}
                />
              </div>
            </div>
          </>
          <>
            <div className="flex flex-wrap my-4">
              <div className="w-1/2 h-32">
                <Image
                  className="mx-auto"
                  src="/images/clients/hectorjulian.png"
                  alt="hectorjulian logo"
                  width={200}
                  height={100}
                />
              </div>
              <div className="w-1/2 h-32">
                <Image
                  className="mx-auto"
                  src="/images/clients/chatgpt.png"
                  alt="chatgtp logo"
                  width={200}
                  height={100}
                />
              </div>
              <div className="w-1/2 h-32">
                <Image
                  className="mx-auto"
                  src="/images/clients/carlosgardenal.png"
                  alt="carlosgardenal logo"
                  width={200}
                  height={100}
                />
              </div>
              <div className="w-1/2 h-32">
                <Image
                  className="mx-auto"
                  src="/images/clients/bosques.png"
                  alt="bosques logo"
                  width={200}
                  height={100}
                />
              </div>
            </div>
          </>
        </Slider> */}
      </div>
    </section>
  );
};

export default ClientsSection;
