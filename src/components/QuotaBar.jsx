export default function QuotaBar({ used, limit }) {
  const percent = Math.min(100, Math.round((used / limit) * 100));

  return (
    <div className="mb-6">
      <p className="text-sm text-gray-600 font-medium mb-1">
        {used} of {limit} summaries used today
      </p>
      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            percent >= 90 ? 'bg-red-500' : percent >= 70 ? 'bg-yellow-500' : 'bg-blue-600'
          }`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}