import pageImg from "../assets/motionarteffect-img10.png";
import sectionImg from "../assets/motionarteffect-img11.png";

export default function Preview() {
  return (
    <section className="py-24 max-w-7xl mx-auto">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-[#E8DFFA] text-4xl font-semibold leading-normal text-center mb-5">
          Apply On Any Section Or Enable For Whole Page
        </h3>
      </div>
      <div className="flex justify-around gap-4">
        <div className="border-2 border-[#332C42] border-b-0 p-10 rounded-2xl bg-[#0E0720]">
          <div className="">
            <h3 className="text-[#EEE5FF] text-2xl font-bold mb-4">
              Apply On Section
            </h3>
            <p className="text-[#7E7690] text-lg leading-normal">
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.
            </p>
          </div>
          <div className="mt-8">
            <img src={sectionImg} alt="section image" />
          </div>
        </div>
        <div className="border-2 border-[#332C42] border-b-0 p-10 rounded-2xl bg-[#0E0720] mt-20">
          <div className="">
            <h3 className="text-[#EEE5FF] text-2xl font-bold mb-4">Apply On Page</h3>
            <p className="text-[#7E7690] text-lg leading-normal">
              Take your website to new heights with Motion Art for Elementor.
              Embrace the power of motion and animation.
            </p>
          </div>
          <div className="mt-8">
            <img src={pageImg} alt="section image" />
          </div>
        </div>
      </div>
    </section>
  );
}
