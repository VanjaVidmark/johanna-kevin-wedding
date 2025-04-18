import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import sendingAnimation from "../assets/sending.json";


type RSVPFormData = {
  name: string;
  attending: "ja" | "nej";
  info?: string,
  song?: string;
};

const RSVPForm: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<RSVPFormData>({
    name: "",
    attending: "ja",
    info: "",
    song: "",
  });

  const [status, setStatus] = useState<"idle" | "sending">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: "ja" | "nej") => {
    setForm((prev) => ({ ...prev, attending: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxxXRyyJ7VA_Pnmp4U6GUGiznnBH9aZBXsdjF2ctsIYzn13UiDHKlENcX3ZpCxVoFS1Ew/exec", {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "text/plain;charset=utf-8" },
      });

      const text = await response.text();
      if (text === "Success") {
        navigate("/osa/success");
      } else {
        navigate("/osa/error");
      }
    } catch (err) {
      console.error("Failed to parse response", err);
      navigate("/osa/error");
    }
  };

  return (
    <div className="w-screen flex justify-center px-4 py-12 mt-5 lg:items-center">
      <form 
        onSubmit={handleSubmit} 
        className="max-w-lg w-full mx-auto p-6 bg-white rounded-lg shadow space-y-5">
        <h2 className="text-2xl text-[#de7987] font-bold text-center">OSA</h2>
        <p className="text-gray-600">Fyll i formuläret för att OSA. Svara senast XXX.</p>
        <p className="text-gray-600">Samtpliga personer i sällskapet behöver OSA</p>

        <div>
          <label className="block font-medium mb-1">För- och efternamn *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Kan du komma? *</label>
          <div className="flex justify-center gap-6 mt-1">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="attending"
                value="ja"
                checked={form.attending === "ja"}
                onChange={() => handleRadioChange("ja")}
              />
              Ja
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="attending"
                value="nej"
                checked={form.attending === "nej"}
                onChange={() => handleRadioChange("nej")}
              />
              Nej
            </label>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Övrig information: </label>
          <textarea
            name="info"
            value={form.info}
            onChange={handleChange}
            placeholder="Ange allergier och/eller annan viktig information tll brudparet"
            rows={4}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Önskelåt? hur ska man formulera frågan?</label>
          <input
            name="song"
            value={form.song}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/2 rounded"
            disabled={status === "sending"}
          >
            Skicka
          </button>
        </div>

        {status === "sending" && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
              <Player autoplay loop src={sendingAnimation} style={{ height: "100px", width: "100px" }} />
              <p className="text-gray-700">Skickar...</p>
            </div>
          </div>
        )}
      </form>
    </div>
    
  );
};

export default RSVPForm;
