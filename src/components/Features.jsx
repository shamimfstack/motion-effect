import { FaArrowRightLong } from "react-icons/fa6";
import image5 from "../assets/motionarteffect-img5.png";

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto py-24">
      <div className="flex justify-between">
        <div className="w-3/5">
          <h2 className="text-[#E8DFFA] text-4xl font-semibold leading-normal mb-4">
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
          </h2>
          <p className="text-[#AFAABF] text-lg leading-normal mt-2">
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse your website with visually stunning
            motion art elements.
          </p>
          <div className="mt-8">
            <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" className="bg-gradient-to-r from-[#5E11FF] inline-flex items-center to-[#F87517] text-white px-8 py-5 text-xl rounded-2xl">
              Purchase From Envato <span><FaArrowRightLong className="ml-4 my-auto" /></span>
            </a>
          </div>
        </div>
        <div className="w-2/5">
            <div className="p-3 flex justify-end">
                <img src={image5} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
}
