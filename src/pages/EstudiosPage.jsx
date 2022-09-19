import React from "react";
export const EstudiosPage = () => {
  return (
    <section id="perfil">
      <div className="px-10 py-20">
      <div className="grid grid-cols-2 gap-2">
      <div className="">
      <div className="px-20 py-10 rounded-2xl shadow-2xl bg-zinc-400" >  
      <h1 className="font-bold text-center">Estudios</h1>
        <div className="px-5 py-10 rounded-2xl shadow-2xl bg-gray-400">
          <div><span className="font-bold">Titulo:</span>  Tecnologo en Analisis y Desarrollo de Sistemas </div>
          <div><span className="font-bold">Periodo:</span> 2019-2021</div>
          <div><span className="font-bold">Institución:</span> SENA</div>
        </div>
        </div>  
      </div>  
      <div className="">
      <div className="px-5 py-10 rounded-2xl shadow-2xl bg-zinc-400">
        <h1 className="font-bold text-center">Experiencia</h1>
        <div className="px-5 py-5 rounded-2xl shadow-2xl bg-gray-400">
        <div><span className="font-bold">Empresa:</span>  Analistas y Corredores de Seguros AYG </div>
        <div><span className="font-bold">Cargo:</span> Desarrollador</div>
        <div><span className="font-bold">Periodo:</span> 2019 - Actual</div>
        </div>
        <div className="mt-2 px-5 py-5 rounded-2xl shadow-2xl bg-gray-400">
        <div><span className="font-bold">Empresa:</span>  HSEQ SISAS </div>
        <div><span className="font-bold">Cargo:</span> Desarrollador</div>
        <div><span className="font-bold">Periodo:</span> 2014 - 2018</div>
        </div>
        </div>  
      </div>  
      
        
      </div>
      </div>
    </section>
  );
}