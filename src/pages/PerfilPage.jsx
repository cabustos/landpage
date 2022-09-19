import React from "react";
export const PerfilPage = () => {
  return (
    <section id="perfil">
      <div className="container bluenavbar mx-auto flex px-10 md:flex-row flex-col items-center bg-sky-800">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">
           Desarrollador MERN
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="leading-relaxed text-white">
          Trabajemos juntos el frontend y el backend con React, Javascript, Mongo y Expressjs
          </p>
          
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./mern.png"
          />
        </div>
      </div>
    </section>
  );
}
