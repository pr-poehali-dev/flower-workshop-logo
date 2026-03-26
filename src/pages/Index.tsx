import { useEffect, useState } from "react";

export default function Index() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8">
      <div
        className="flex flex-col items-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div
          className="w-16 border-t border-black mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1.2s ease 0.3s",
          }}
        />

        <h1
          className="font-cormorant text-center text-black"
          style={{
            fontSize: "clamp(1.6rem, 5vw, 3.2rem)",
            fontWeight: 300,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            lineHeight: 1.15,
          }}
        >
          Цветочная
          <br />
          Мастерская
        </h1>

        <div
          className="flex items-center gap-4 mt-8 mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1.2s ease 0.6s",
          }}
        >
          <div className="w-8 border-t border-gray-300" />
          <span
            className="font-montserrat text-gray-400 tracking-[0.3em] uppercase"
            style={{ fontSize: "clamp(0.55rem, 1.5vw, 0.68rem)", fontWeight: 400 }}
          >
            Доставка в Отрадном
          </span>
          <div className="w-8 border-t border-gray-300" />
        </div>

        <div
          className="w-16 border-t border-black"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1.2s ease 0.9s",
          }}
        />
      </div>
    </div>
  );
}
