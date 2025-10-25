import LanguageSwitcher from "./LanguageSwitcher";
import LoginButton from "./LoginButton";
import SearchBar from "./SearchBar";
import SignUpButton from "./SignUpButton";

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
      <div>
        <SignUpButton />
      </div>
      <div>
        <LoginButton />
      </div>
      <div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
