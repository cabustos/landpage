export const MyCard = ({ url, titulo, descripcion, url_preview, url_github }) => {
  return (
    <div className="ml-10 mr-10 bg-white px-20 py-10 rounded-2xl shadow-2xl">
      <img src={url} className="rounded-2xl mx-auto mb-4 shadow-2xl h-48 w-96 " />
      <h1 className="font-bold text-lm mb-2">{titulo}</h1>
      <h1 className="mb-6">{descripcion}</h1>
      <div className=" py-1 content-center">
      <a href={url_preview} target="_blank" className="bg-blue-500 mt-2   text-white px-1 py-2 rounded-full">
        Vista Previa
      </a>
      </div>
      <div className="m-15 py-5 content-center">
      <a href={url_github} target="_blank" className="bg-blue-500 mt-15 text-center text-white px-6 py-2 rounded-full">
        GitHub
      </a>
      </div>
    </div>
  );
};
