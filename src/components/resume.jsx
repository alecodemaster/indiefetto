import Alessia from "../Alessia_Gaudioso.pdf";

const ResumeSection = () => {
  const openModal = () => {
    // codice per aprire il modale con le immagini
  };

  return (
    <div className="flex flex-wrap justify-center">
      <div className="pt-4">
        <a
          href={Alessia}
          download
          className="bg-primarypink text-gray-50 py-2 px-4 rounded-lg block text-center shadow-md shadow-zinc-900 hover:bg-zinc-700"
        >
          <i className="fi fi-ss-file-download"></i> Scarica il CV
        </a>
      </div>
    </div>
  );
};

export default ResumeSection;
