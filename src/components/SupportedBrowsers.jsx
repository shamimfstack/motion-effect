import browsersImage from "../assets/motionarteffect-img8.png";

export default function SupportedBrwoser() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="border-2 border-[#332C42] border-b-0 p-10 rounded-2xl bg-[#0E0720]">
        <div className="text-center">
          <h2 className="text-[#EEE5FF] text-3xl font-semibold mb-6">
            Supported by All Popular Browsers
          </h2>
          <p className="text-[#9E97AF] text-lg w-[468px] leading-normal mx-auto">
            Rest assured, Motion Art is designed to be compatible with all major
            web browsers.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
            <img src={browsersImage} alt="browsers image" />
        </div>
      </div>
    </section>
  );
}
