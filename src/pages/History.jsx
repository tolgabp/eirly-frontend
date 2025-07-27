import { useEffect, useState } from "react";
import api from "../api/axiosInstance";

export default function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await api.get("/summarize/history");
        setHistory(res.data.data || []);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch history.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Summary History</h1>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && history.length === 0 && (
        <p className="text-gray-600">No past summaries found.</p>
      )}

      <div className="space-y-4">
        {history.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded bg-gray-50 shadow-sm"
          >
            <p className="text-sm text-gray-500 mb-1">
              {new Date(item.createdAt).toLocaleString()}
            </p>
            <p className="mb-2">
              <span className="font-medium">Original:</span>{" "}
              {item.original_text}
            </p>
            <p className="mb-2">
              <span className="font-medium">Summary:</span> {item.summary_text}
            </p>
            <div className="text-sm text-gray-600 mt-2">
              <p>Tone: {item.tone || "—"}</p>
              <p>Length: {item.length || "—"}</p>
              <p>
                Words: {item.original_word_count} → {item.summary_word_count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
