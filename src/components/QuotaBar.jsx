export default function QuotaBar({ used, limit }) {
  const percent = Math.min(100, Math.round((used / limit) * 100));

  return (
    <div className="mb-6">
      <p className="text-sm text-[#64748B] font-medium mb-1">
        {used} of {limit} summaries used today
      </p>
      <div className="w-full h-3 bg-[#F8FAFC] rounded-full overflow-hidden shadow-inner">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            percent >= 90 ? 'bg-red-500' : percent >= 70 ? 'bg-yellow-500' : 'bg-[#4F46E5]'
          }`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}