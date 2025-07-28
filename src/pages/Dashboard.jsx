import { useState, useEffect } from "react";
import api from "../api/axiosInstance";
import QuotaBar from "../components/QuotaBar";
import SummaryForm from "../components/SummaryForm";
import SummaryResult from "../components/SummaryResult";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quota, setQuota] = useState({ used: 0, limit: 20 });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuota = async () => {
      try {
        const res = await api.get("/auth/me");
        setQuota({ used: res.data.daily_usage_count, limit: 20 });
      } catch (err) {
        console.error("Failed to fetch quota:", err);
        navigate("/login");
      }
    };

    fetchQuota();
  }, [navigate]);

  const handleSummarize = async (text, tone, length) => {
    setSummary(null);
    setError("");
    setLoading(true);

    if (text.length < 200) {
      setError("Text must be at least 200 characters.");
      setLoading(false);
      return;
    }

    try {
      const res = await api.post("/summarize", { text, tone, length });
      setSummary({ ...res.data, original: text });
      setQuota((prev) => ({ ...prev, used: prev.used + 1 }));
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="min-h-screen bg-[#F8FAFC] p-6 max-w-3xl mx-auto">
        <QuotaBar used={quota.used} limit={quota.limit} />
        <SummaryForm onSubmit={handleSummarize} loading={loading} />
        {error && (
          <p className="mt-4 px-4 py-2 text-red-700 bg-red-100 border border-red-200 rounded-lg">
            {error}
          </p>
        )}
        {summary && <SummaryResult summary={summary} />}
      </div>
  );
}
