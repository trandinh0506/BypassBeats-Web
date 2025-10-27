import LanguageSwitcher from "./LanguageSwitcher";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SignUpButton from "./SignUpButton";

export default function Header() {
  return (
    <header className="p-2 flex items-center gap-3">
      <div className="w-16 h-16 flex items-center justify-center">
        <Logo />
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
