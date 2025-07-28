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
      <h1 className="text-2xl font-bold text-[#1E293B] mb-4">Summary History</h1>

      {loading && <p className="text-[#64748B]">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && history.length === 0 && (
        <p className="text-[#64748B]">No past summaries found.</p>
      )}

      <div className="space-y-4">
        {history.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-lg bg-[#F8FAFC] shadow-md"
          >
            <p className="text-sm text-[#64748B] mb-1">
              {new Date(item.createdAt).toLocaleString()}
            </p>
            <p className="mb-2">
              <span className="font-medium">Original:</span> {item.original_text}
            </p>
            <p className="mb-2">
              <span className="font-medium">Summary:</span> {item.summary_text}
            </p>
            <div className="text-sm text-[#64748B] mt-2">
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
