import ResumeSection from "./resume";
import Modal from "./modal";

const Utility = () => {
  return (
    <div className="flex justify-center lg:w-1/2 mb-10">
      <div className="w-full">
        <h2 class="text-2xl font-bold mb-10">Licenze e certificanzioni</h2>
        <Modal />
        <ResumeSection />
        <hr className="mt-5" />
      </div>
    </div>
  );
};

export default Utility;
