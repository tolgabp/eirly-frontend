export default function SummaryResult({ summary }) {
  return (
    <div className="mt-6 p-5 border border-gray-200 rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
      <h2 className="text-lg font-semibold mb-3 text-[#1E293B]">Summary Result</h2>
      <p className="mb-3 text-[#1E293B] whitespace-pre-line">
        <span className="font-bold">Original:</span> {summary.original}
      </p>
      <p className="mb-3 text-[#1E293B] whitespace-pre-line">
        <span className="font-bold">Summary:</span> {summary.summary}
      </p>
      <div className="text-sm text-[#64748B] mt-2">
        <p>Original Words: {summary.original_word_count}</p>
        <p>Summary Words: {summary.summary_word_count}</p>
      </div>
    </div>
  );
}
