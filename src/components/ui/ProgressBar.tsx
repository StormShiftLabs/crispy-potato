import React from 'react';
const ProgressBar = ({
  value,
  max = 100,
  color = 'emerald'
}) => {
  const percentage = Math.min(100, Math.max(0, value / max * 100));
  const colorClasses = {
    blue: 'bg-blue-500',
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    purple: 'bg-purple-500',
    coral: 'bg-orange-500'
  };
  return <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
      <div className={`h-2.5 rounded-full ${colorClasses[color]}`} style={{
      width: `${percentage}%`
    }} />
    </div>;
};
export default ProgressBar;