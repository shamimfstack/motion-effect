import { LinearGradient } from "react-text-gradients";

export default function Hero() {
  return (
    <section className="py-20 flex">
      <div className="p-8 w-3/12">
        <div className="w-3/4">
          <h2 className="text-2xl pb-4 font-semibold">
            <span>
              <LinearGradient gradient={["to right", "#F87516 ,#5E11FF"]}>
                Transform <br />
                {/* </LinearGradient>
            </span>{" "}
            <span className="pb-3">
              <LinearGradient gradient={["to right", "#F87516 ,#5E11FF"]}> */}
                Your Website
              </LinearGradient>
            </span>{" "}
          </h2>
          <p className="text-[#E8DFFA] text-2xl font-semibold">
            With Motion
            <br /> Art Effect
          </p>
        </div>
      </div>
      <div className="p-3 w-7/12">
        <div className="w-4/5">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold md:leading-normal mr-4 mb-4">
            <span className="text-[#EEE5FF]">
              Attract Your Visitors Attention With Colorful <br />
            </span>
            <LinearGradient gradient={["to right", "#F87516 ,#5E11FF"]}>
              Motion Art Effect
            </LinearGradient>
          </h1>
          <p className="text-[#E8DFFA] text-xl leading-relaxed">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </p>
        </div>
      </div>
      <div className="2/12"></div>
    </section>
  );
}
