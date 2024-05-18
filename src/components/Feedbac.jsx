import image1 from "../assets/motionarteffect-img2.png";
import image2 from "../assets/motionarteffect-img1.png";
import image3 from "../assets/motionarteffect-img3.png";
import image4 from "../assets/motionarteffect-img4.png";

export default function Feedback() {
    return (
        <section className="max-w-7xl mx-auto p-4">
            <h3 className="text-[#E8DFFA] text-3xl text-center mb-5">Trusted by thousands of users around the world</h3>
            <section className="pt-16">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div>
                            <img className="w-28" src={image1} alt="card image" />
                        </div>
                        <div className="ml-4">
                            <p className="mb-4 text-xl">
                                <img className="w-42" src={image4} alt="rating image" />
                            </p>
                            <p className="text-xl text-[#9994A7]"><strong>4.5</strong> Score, 9 Reviews</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <img className="w-28" src={image2} alt="card image" />
                        </div>
                        <div className="ml-4">
                            <p className="mb-4 text-xl">
                                <img className="w-42" src={image4} alt="rating image" />
                            </p>
                            <p className="text-xl text-[#9994A7]"><strong>4.5</strong> Score, 9 Reviews</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <img className="w-28" src={image3} alt="card image" />
                        </div>
                        <div className="ml-4">
                            <p className="mb-4 text-xl">
                                <img className="w-42" src={image4} alt="rating image" />
                            </p>
                            <p className="text-xl text-[#9994A7]"><strong>4.5</strong> Score, 9 Reviews</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        );
}