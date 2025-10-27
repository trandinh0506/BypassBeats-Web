import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer w-10 h-10 rounded-full overflow-hidden"
      onClick={() => navigate("/")}
    >
      <img src="/logo.svg" alt="Lyra" className="w-full h-full object-cover" />
    </div>
  );
}
