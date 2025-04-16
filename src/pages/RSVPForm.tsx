import React, { useState } from "react";

type RSVPFormData = {
  name: string;
  email: string;
  attending: "ja" | "nej";
  allergies?: string;
};

const RSVPForm: React.FC = () => {
  const [form, setForm] = useState<RSVPFormData>({
    name: "",
    email: "",
    attending: "ja",
    allergies: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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
      setStatus(text === "Success" ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow space-y-5">
      <h2 className="text-2xl font-bold text-center">OSA</h2>

      <div>
        <label className="block font-medium mb-1">Namn *</label>
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
        <label className="block font-medium mb-1">Email *</label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
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
            Yes
          </label>
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="attending"
              value="nej"
              checked={form.attending === "nej"}
              onChange={() => handleRadioChange("nej")}
            />
            No
          </label>
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1">Allergier eller matpreferenser</label>
        <input
          name="allergies"
          value={form.allergies}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Nått annat? plusetta? plats för överigt meddelande?</label>
      </div>

      <button
        type="submit"
        className="w-full bg-pink-600 rounded transition"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Skickar..." : "Skicka"}
      </button>

      {status === "success" && <p className="text-green-600 text-center mt-2">Tack för att du OSAt</p>}
      {status === "error" && <p className="text-red-600 text-center mt-2">Nått gick fel, försök igen</p>}
    </form>
  );
};

export default RSVPForm;
