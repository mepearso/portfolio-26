interface SubtleGradientProps {
  children: React.ReactNode;
}

export default function SubtleGradient({ children }: SubtleGradientProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--beige)] via-[var(--tea-green)] to-[var(--pearl)]"></div>

      {/* Subtle Animated Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(-45deg, var(--beige), var(--tea-green), var(--pearl), var(--fawn))",
          backgroundSize: "400% 400%",
          animation: "gradientShift 20s ease infinite",
        }}
      ></div>

      {/* Additional Subtle Layer */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(45deg, var(--tea-green), var(--pearl), var(--beige), var(--fawn))",
          backgroundSize: "300% 300%",
          animation: "gradientShift 25s ease infinite reverse",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
