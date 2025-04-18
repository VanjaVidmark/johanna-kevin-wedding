import { Player } from "@lottiefiles/react-lottie-player";
import errorAnimation from "../assets/error.json";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();
    
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center px-4 py-12 mt-5 items-center">
        <div className="max-w-lg w-full mx-auto p-6 bg-white rounded-lg shadow space-y-5 items-center text-center">
            <Player 
            autoplay 
            loop={false} 
            keepLastFrame 
            src={errorAnimation} 
            style={{ height: "140px", width: "140px" }} />

            <h2 className="text-2xl font-bold mt-4 text-[#de7987]">Något gick fel!</h2>
            <p className="mt-2 text-gray-600">
                Kontakta <a href="mailto:vidmarkvanja@gmail.com" className="underline text-blue-600">vidmarkvanja@gmail.com</a> eller{" "}
                <a href="tel:+46722133920" className="underline text-blue-600">072-2133920</a>
            </p>
            <div className="flex justify-center items-center">
                <button
                    className="border px-4 py-2 rounded hover:bg-gray-100 transition"
                    onClick={() => navigate("/osa")}
                >
                    Försök igen
                </button>
            </div>
        </div>
    </div>
  );
}

