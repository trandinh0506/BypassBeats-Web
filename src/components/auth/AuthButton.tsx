import type React from "react";

export default function AuthButton({
  children,
  type = "button",
  onClick,
}: {
  children: React.ReactNode;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="cursor-pointer w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}
