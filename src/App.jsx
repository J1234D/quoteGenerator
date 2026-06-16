import { useCallback, useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState({});

  const fetchquote = useCallback(() => {
    fetch(
      "https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom,time",
      {
        headers: { "X-Api-Key": import.meta.env.VITE_API_KEY },
      },
    )
      .then((d) => d.json())
      .then((d) => setQuote(d[0]))
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    fetchquote();
  }, [fetchquote]);
  return (
    <>

      <figure
        className="max-w-screen-md mx-auto text-center
      bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg
      "
      >
        <svg
          class="w-11 h-11 text-heading mb-4 mx-auto"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"
          />
        </svg>

        <blockquote>
          <p class="text-2xl italic font-semibold tracking-tight text-heading">
            "{quote["quote"]}"
          </p>
        </blockquote>

        <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <div class="flex items-center divide-x rtl:divide-x-reverse divide-default">
            <cite class="pe-3 font-medium text-heading">{quote["author"]}</cite>
          </div>
        </figcaption>
      </figure>

      <button onClick={fetchquote}>Generate New Quote</button>
      <footer className="mt-8 text-sm text-white">
      Made with ❤️ by Jishnu Dutta
      </footer>
    </>
  );
}

export default App;
