import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Questions() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  return (
    <section className="w-full flex flex-col items-center px-6 py-[10vh] space-y-5">
      
      {/* Question 1 */}
      <article className="w-full max-w-2xl bg-gray-100 rounded-xl shadow overflow-hidden">
        <header>
          <button
            onClick={() => setOpen1(!open1)}
            className="!bg-white flex items-center justify-between w-full text-left"
          >
            <h2 className="font-medium text-gray-900 flex-1 py-1">
              Vart håller bröllopet & festen till?
            </h2>
            <span className="text-gray-500 ml-4 flex-shrink-0">
              {open1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>
        </header>
        {open1 && (
          <div className="px-5 py-3 bg-gray-100 text-gray-700 space-y-2">
            <p> Själevads kyrka ligger på Hampnäsvägen 27 i Själevad ⛪ </p>
            <p> Hembygdsgården hittar ni på Hörnäsvägen 49, på andra sidan av Själevadsfjärden.</p>
          </div>
        )}
      </article>

      {/* Question 2 */}
      <article className="w-full max-w-2xl bg-gray-100 rounded-xl shadow overflow-hidden">
        <header>
          <button
            onClick={() => setOpen2(!open2)}
            className=" !bg-white flex items-center justify-between w-full p-4 text-left"
          >
            <h2 className="font-medium text-gray-900 flex-1 py-1">
              Får mina barn följa med?
            </h2>
            <span className="text-gray-400 ml-4 flex-shrink-0">
              {open2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>
        </header>
        {open2 && (
          <div className="px-5 py-3 bg-gray-100 text-gray-700">
            <p>
              Barn är varmt välkomna att vara med under vigseln och den efterföljande brudskålen.
              Under middagen och resten av kvällen är det barnfritt som gäller.
            </p>
          </div>
        )}
      </article>

      {/* Question 3 */}
      <article className="w-full max-w-2xl bg-gray-100 rounded-xl shadow overflow-hidden">
        <header>
          <button
            onClick={() => setOpen3(!open3)}
            className="!bg-white flex items-center justify-between w-full p-4 text-left"
          >
            <h2 className="font-medium text-gray-900 flex-1 py-1">
              Vilken klädsel gäller?
            </h2>
            <span className="text-gray-400 ml-4 flex-shrink-0">
              {open3 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>
        </header>
        {open3 && (
          <div className="px-5 py-3 bg-gray-100 text-gray-700">
            <p>
              Klädkoden är kavaj.
            </p>
          </div>
        )}
      </article>

      {/* Question 4 */}
      <article className="w-full max-w-2xl bg-gray-100 rounded-xl shadow overflow-hidden">
        <header>
          <button
            onClick={() => setOpen4(!open4)}
            className="!bg-white flex items-center justify-between w-full p-4 text-left"
          >
            <h2 className="font-medium text-gray-900 flex-1 py-1">
              Hur ska jag tänka gällande present till brudparet?
            </h2>
            <span className="text-gray-400 ml-4 flex-shrink-0">
              {open4 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>
        </header>
        {open4 && (
          <div className="px-5 py-3 bg-gray-100 text-gray-700 space-y-2">
            <p>Att ni vill komma och fira med oss är allt vi önskar. Om ni ändå vill ni uppmärksamma vår dag med en gåva skulle vi uppskatta ett bidrag till vår bröllopsresa. </p>
            <p>Bidrag till resan kan swishas till vår toastmaster Vanja på nummer <a href="tel:+46722133920" className="!underline !text-blue-700">072-2133920</a>. </p>
          </div>
        )}
      </article>

      <article className="w-full max-w-2xl bg-gray-100 rounded-xl shadow overflow-hidden">
        <header>
          <button
            onClick={() => setOpen5(!open5)}
            className="!bg-white flex items-center justify-between w-full p-4 text-left"
          >
            <h2 className="font-medium text-gray-900 flex-1 py-1">
            Får jag ta med mig någon till bröllopet?
            </h2>
            <span className="text-gray-400 ml-4 flex-shrink-0">
              {open5 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>
        </header>
        {open5 && (
          <div className="px-5 py-3 bg-gray-100 text-gray-700">
            <p>Självklart är respektive välkommen.</p>
          </div>
        )}
      </article>

    </section>
  );
}
