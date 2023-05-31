import { useState } from "react";

function Modal() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Invia il modulo
    document.getElementById("myForm").submit();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => setShowModal(true)}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Invia
      </button>
      {showModal ? (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-50 z-10"></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <p className="mb-4">Confermare l'invio del modulo?</p>
              <div className="flex justify-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
                >
                  Annulla
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Conferma
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Modal;
