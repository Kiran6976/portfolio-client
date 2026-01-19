import { useEffect, useState } from "react";

export default function SkillCircle({ percent, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start <= percent) setCount(start);
      else clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [percent]);

  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (count / 100) * circumference;

  return (
    <div className="skill-circle">
      <svg width="140" height="140">
        <circle
          cx="70"
          cy="70"
          r={radius}
          className="skill-bg"
        />
        <circle
          cx="70"
          cy="70"
          r={radius}
          className="skill-progress"
          style={{ strokeDashoffset: offset }}
        />
      </svg>

      <div className="skill-text">{count}%</div>
      <p>{label}</p>
    </div>
  );
}
