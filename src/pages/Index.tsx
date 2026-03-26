import { useEffect, useState } from "react";

function buildLogo(dark: boolean) {
  const canvas = document.createElement("canvas");
  const scale = 3;
  canvas.width = 250 * scale;
  canvas.height = 50 * scale;
  const ctx = canvas.getContext("2d")!;

  ctx.scale(scale, scale);

  const bg = dark ? "#000000" : "#ffffff";
  const fg = dark ? "#ffffff" : "#000000";
  const sub = dark ? "#888888" : "#999999";

  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 250, 50);

  ctx.strokeStyle = fg;
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(10, 6);
  ctx.lineTo(240, 6);
  ctx.stroke();

  ctx.fillStyle = fg;
  ctx.font = "300 15px 'Cormorant', Georgia, serif";
  ctx.textAlign = "center";
  ctx.fillText("ЦВЕТОЧНАЯ МАСТЕРСКАЯ", 125, 28);

  ctx.fillStyle = sub;
  ctx.font = "300 6px 'Montserrat', sans-serif";
  ctx.fillText("ДОСТАВКА В ОТРАДНОМ", 125, 40);

  ctx.strokeStyle = fg;
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(10, 46);
  ctx.lineTo(240, 46);
  ctx.stroke();

  const link = document.createElement("a");
  link.download = dark ? "logo-dark.png" : "logo.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

export default function Index() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 gap-12">
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

      <div
        className="flex gap-4"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 1.2s ease 1.2s",
        }}
      >
        <button
          onClick={() => buildLogo(false)}
          className="font-montserrat text-black border border-black px-6 py-3 tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-colors duration-300"
          style={{ fontSize: "0.6rem", fontWeight: 400 }}
        >
          Светлый PNG
        </button>
        <button
          onClick={() => buildLogo(true)}
          className="font-montserrat bg-black text-white border border-black px-6 py-3 tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-colors duration-300"
          style={{ fontSize: "0.6rem", fontWeight: 400 }}
        >
          Тёмный PNG
        </button>
      </div>
    </div>
  );
}