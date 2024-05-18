import siteLogo from "../assets/MotionArtEffect-logo.png";

export default function Navbar() {
  return (
    <div className="pt-6">
      <nav className="flex justify-between max-w-7xl mx-auto">
        <div>
          <a href="/" className="">
            <img src={siteLogo} alt="site logo" />
          </a>
        </div>
        <div>
          <button className="bg-white px-12 py-3 rounded-md border-2 border-white  hover:text-white hover:bg-transparent">
            Purchase Now
          </button>
        </div>
      </nav>
    </div>
  );
}
