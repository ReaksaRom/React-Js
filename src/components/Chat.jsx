import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Loading from "./loading";

export default function ChatClient() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [displayedResponse, setDisplayedResponse] = useState("");
  const [index, setIndex] = useState(0);
  const responseRef = useRef(null);

  const handleSend = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setError(null);
    setResponse("");
    setDisplayedResponse("");
    setIndex(0);
    
    try {
      const res = await axios.post("http://localhost:8080/api/response", {
        question,
      });
      setResponse(res.data);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Failed to fetch response");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (response && index < response.length) {
      const timeout = setTimeout(() => {
        setDisplayedResponse((prev) => prev + response[index]);
        setIndex((prev) => prev + 1);
        responseRef.current?.scrollTo({ top: responseRef.current.scrollHeight, behavior: "smooth" });
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [response, index]);

  const handleCopy = () => {
    navigator.clipboard.writeText(displayedResponse);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Chat Client</h2>
      <input
        type="text"
        placeholder="Enter your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="mb-2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSend}
        disabled={loading}
        className="w-full  px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? <Loading /> : "Send"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {displayedResponse && (
        <div className="mt-4 p-2 bg-gray-100 rounded relative max-h-40 overflow-y-auto" ref={responseRef}>
          <strong>Response:</strong>
          <pre className="whitespace-pre-wrap break-words">{displayedResponse}</pre>
          <button
            onClick={handleCopy}
            className="mt-2 px-3 py-1 bg-gray-300 rounded text-sm hover:bg-gray-400"
          >
            Copy
          </button>
        </div>
      )}
      <p className="text-center mt-4 font-thin" > @copy deepseek</p>
      <p className="text-center text-gray-600 font-thin"> by Rom Reaksa</p>
    </div>
  );
}
