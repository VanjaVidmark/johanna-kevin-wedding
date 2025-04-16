import image from "../assets/home_img.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col lg:flex-row relative">
      {/* IMAGE */}
      <div className="w-full h-[60vh] lg:w-[60%] lg:h-screen lg:relative fixed top-0 left-0 z-0 lg:z-10">
        <img
          src={image}
          alt="Johanna & Kevin"
          className="w-full h-full object-cover object-[55%_center]"
        />
      </div>

      {/* TEXT */}
      <div className="w-full lg:w-[40%] mt-[55vh] lg:mt-0 bg-white rounded-t-[2.5rem] z-10 relative p-8 flex flex-col items-center text-center space-y-4 shadow-md lg:rounded-none lg:min-h-screen lg:justify-center">
        <h1 className="text-3xl sm:text-3xl font-semibold text-[#5C8DB5] font-cormorant">
          Johanna & Kevin
        </h1>
        <p className="text-gray-600">30 Augusti, 2025</p>
        <p className="text-gray-500">Själevads kyrka, etc, etc, ercx</p>
        <p className="text-sm text-gray-500 max-w-md">
          Du är välkommen på bröllop osv! Tänker att all viktig info kan komma om man bara scrollar ner här!
        </p>
        <p className="text-sm text-gray-500 max-w-md">vad mer?</p>
        <p className="text-sm text-gray-500 max-w-md">tralalalala</p>
        <div className="flex gap-4">
          <button
            className="border px-4 py-2 rounded hover:bg-gray-100 transition"
            onClick={() => navigate("/osa")}
          >
            OSA
          </button>
          <button
            className="border px-4 py-2 rounded hover:bg-gray-100 transition"
            onClick={() => navigate("/faq")}
          >
            Frågor & Svar
          </button>
        </div>
      </div>
    </section>
  );
}
