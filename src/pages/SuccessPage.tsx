import { Player } from "@lottiefiles/react-lottie-player";
import successAnimation from "../assets/success.json";
import { useNavigate } from "react-router-dom";

export default function SuccessPage() {
    const navigate = useNavigate();

    
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center px-4 py-12 mt-5 items-center">
        <div className="max-w-lg w-full mx-auto p-6 bg-white rounded-lg shadow space-y-5 items-center text-center">
            <Player 
            autoplay 
            loop={false} 
            keepLastFrame 
            src={successAnimation} 
            style={{ height: "140px", width: "140px" }} />

            <h2 className="text-xl text-gray-500">Din anmälan är skickad!</h2>
            <div className="flex justify-center items-center gap-4">
                <button
                    onClick={() => navigate("/osa")}
                >
                    OSA en till
                </button>
                <button
                    onClick={() => navigate("/faq")}
                >
                    Frågor & Svar
                </button>
            </div>
        </div>
    </div>
  );
}
