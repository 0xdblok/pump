import React from "react";
import Image from "next/image";
import pump from "../asset/pump.jpg";
export default function Hero() {
  return (
    <section>
      <div className="dark:bg-violet-600">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">
            FUNKFUN
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
            A collection of 10,000 unique Funky NFTs on the Ethereum blockchain.
          </p>
          <div className="flex flex-wrap justify-center">
            <a
              href=""
              className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900">
              BUY NOW
            </a>
          </div>
        </div>
      </div>
      <Image
        src={pump}
        alt=""
        width
        className=" mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40"
      />
    </section>
  );
}
