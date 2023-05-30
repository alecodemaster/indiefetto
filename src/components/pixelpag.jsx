import PixelStory from "./pixel";
import PixelBox from "./pixelimg";

function Pixels() {
    return (
      <>
      <div className="m-5 md:m-10 shadow-lg shadow-zinc-900 border-2 border-gray-600">
        <PixelStory />
        <PixelBox />
        </div>
      </>
    );
  }
  
  export default Pixels;