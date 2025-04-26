import image from "../assets/home_img.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col lg:flex-row relative">
      {/* IMAGE */}
      <div className="w-full h-[60vh] lg:w-[60%] lg:h-screen lg:relative fixed top-[7vh] left-0 z-0 lg:z-10">
        <img
          src={image}
          alt="Johanna & Kevin"
          className="w-full h-full object-cover object-[55%_center]"
        />
      </div>

      {/* TEXT */}
      <div className="w-full lg:w-[40%] mt-[62vh] lg:mt-0 bg-white rounded-t-[2.5rem] z-10 relative p-8 lg:px-20 flex flex-col items-center text-center space-y-4 lg:rounded-none lg:min-h-screen lg:justify-center">
        <h1 className="text-3xl sm:text-2xl text-[#de7987]" style={{ fontFamily: "'Great Vibes'" }}>
          Johanna & Kevin
        </h1>
        <p className="text-gray-500">Varmt välkomna till vårt bröllop den 30 augusti 2025! 🌸</p>
        <p className="text-gray-500">Vigseln äger rum i Själevads kyrka kl 15. Därefter bjuder vi in till middag och fest på Själevads hembygdsgård 🥂</p>
        <p className="text-gray-500">OSA senast den 30 juni. Anmäl varje person i sällskapet separat. </p>
        <p className="text-gray-500">Tal och spex under kvällen uppskattas mycket! Anmäl görs till våra toastmasters Vanja och Ida på <a href="mailto:johannaochkevin4ever@gmail.com" className="!underline !text-blue-600">johannaochkevin4ever@gmail.com</a></p>
        <div className="flex gap-4 pt-2">
          <button
            onClick={() => navigate("/osa")}
          >
            OSA
          </button>
          <button
            onClick={() => navigate("/faq")}
          >
            Frågor & Svar
          </button>
        </div>
      </div>
    </section>
  );
}
