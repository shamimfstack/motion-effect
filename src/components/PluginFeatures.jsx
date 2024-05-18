import image7 from "../assets/motionarteffect-img9.png";
import image8 from "../assets/motionarteffect-img6.png";
import image9 from "../assets/motionarteffect-img7.png";

export default function PluginFeatures() {
  return (
    <section className="py-24 max-w-7xl mx-auto">
      <div>
        <h2 className="text-[#EEE5FF] text-4xl leading-normal w-[700px] mx-auto text-center font-semibold mb-6">
          An All-Round Plugin With Powerful Features
        </h2>
        <p className="text-lg w-[630px] mx-auto text-center text-[#AFAABF] leading-normal mt-2">
          Whether you're a seasoned web designer or just starting out, Motion
          Art for Elementor seamlessly integrates with the Elementor platform,
          providing you with a seamless and intuitive experience.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-8">
        <div className="border-2 border-[#332C42] border-b-0 rounded-2xl bg-[#19122A] m-2 p-8 items-start space-y-4">
          <img className="" src={image7} alt="feature image" />
          <div className="space-y-3">
            <h3 className="text-[#EEE5FF] text-xl font-semibold">
              Light Weight
            </h3>
            <p className="text-[#AFAABF] text-lg leading-normal">
              Motion Art for Elementor is designed to be lightweight.
            </p>
          </div>
        </div>
        <div className="border-2 border-[#332C42] border-b-0 rounded-2xl bg-[#19122A] m-2 p-8 items-start space-y-4">
          <img src={image8} alt="feature image" />
          <div className="space-y-3">
            <h3 className="text-[#EEE5FF] text-xl font-semibold">
            100% Responsive
            </h3>
            <p className="text-[#AFAABF] text-lg leading-normal">
            Create a consistent visual experience across all devices.
            </p>
          </div>
        </div>
        <div className="border-2 border-[#332C42] border-b-0 rounded-2xl bg-[#19122A] m-2 p-8 items-start space-y-4">
          <img src={image9} alt="feature image" />
          <div className="space-y-3">
            <h3 className="text-[#EEE5FF] text-xl font-semibold">
            User Friendly Interface
            </h3>
            <p className="text-[#AFAABF] text-lg leading-normal">
            Ensure a smooth experience for both applicants and administrators.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
