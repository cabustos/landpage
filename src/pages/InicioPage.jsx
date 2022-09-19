import React from "react";
export const About = () => {
  return (
    <section id="about">
      <div className="container subcolor mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-black">
           Hola, Mi nombre es Cesar Bustos
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="leading-relaxed">
          Soy desarrollador, trabajemos juntos
          </p>
          
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
