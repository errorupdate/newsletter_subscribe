import React from "react";

// SVG for a more realistic butterfly (wings, body, antennae)
const ButterflySVG = ({ color = "#fbbf24", style = {}, size = 56 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left wing */}
    <path d="M32 32 Q10 10 8 32 Q10 54 32 32" fill={color} opacity="0.85" />
    {/* Right wing */}
    <path d="M32 32 Q54 10 56 32 Q54 54 32 32" fill={color} opacity="0.85" />
    {/* Wing details */}
    <ellipse cx="18" cy="24" rx="5" ry="10" fill="#fff" opacity=".25" />
    <ellipse cx="46" cy="24" rx="5" ry="10" fill="#fff" opacity=".25" />
    {/* Body */}
    <rect x="29" y="28" width="6" height="18" rx="3" fill="#22223b" />
    {/* Head */}
    <ellipse cx="32" cy="26" rx="4" ry="4" fill="#22223b" />
    {/* Antennae */}
    <path
      d="M32 26 Q28 18 24 22"
      stroke="#22223b"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M32 26 Q36 18 40 22"
      stroke="#22223b"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

const butterflyColors = [
  "#fbbf24",
  "#7c3aed",
  "#f87171",
  "#34d399",
  "#60a5fa",
  "#f472b6",
  "#facc15",
  "#a78bfa",
];

function getRandomParams() {
  const duration = 2.2 + Math.random() * 1.5;
  const delay = Math.random() * 0.7;
  const x = Math.random() * 80 + 5;
  const y = Math.random() * 60 + 10;
  const rotate = Math.random() * 60 - 30;
  const size = 44 + Math.random() * 24;
  return { duration, delay, x, y, rotate, size };
}

const Butterfly = ({ idx }) => {
  const color = butterflyColors[idx % butterflyColors.length];
  const { duration, delay, x, y, rotate, size } = getRandomParams();
  const style = {
    position: "absolute",
    left: `${x}%`,
    top: `${y}%`,
    zIndex: 2000,
    pointerEvents: "none",
    animation: `fly-butterfly-${idx} ${duration}s ${delay}s linear forwards`,
    transform: `rotate(${rotate}deg)`,
  };
  return (
    <>
      <ButterflySVG color={color} style={style} size={size} />
      <style>{`
        @keyframes fly-butterfly-${idx} {
          0% { opacity: 0; transform: translateY(0) scale(0.7) rotate(${rotate}deg); }
          10% { opacity: 1; }
          60% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-80vh) scale(1.1) rotate(${
            rotate + 360
          }deg); }
        }
      `}</style>
    </>
  );
};

const ButterflyAnimation = ({ show }) => {
  if (!show) return null;
  // 15 butterflies for a lively effect
  return (
    <>
      {[...Array(15)].map((_, i) => (
        <Butterfly key={i} idx={i} />
      ))}
    </>
  );
};

export default ButterflyAnimation;
