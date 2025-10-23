import SearchBar from "./search_bar";

export default function Header() {
  return (
    <header className="p-2 flex items-center gap-3">
      <div className="w-16 h-16 items-center">
        <div className="w-9 h-9 rounded-full overflow-hidden">
          <img
            src="/logo.svg"
            alt="Lyra"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
    </header>
  );
}
