import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SignUpButton from "./SignUpButton";
import LoginButton from "./LoginButton";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="p-3 flex items-center justify-between gap-4 bg-transparent">
      {/* Left: Logo + Search */}
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 flex items-center justify-center">
          <Logo />
        </div>
        <SearchBar />
      </div>

      {/* Center: Tabs */}
      <Navigation />

      {/* Right: Auth Buttons */}
      <div className="flex items-center gap-3">
        <SignUpButton />
        <LoginButton />
      </div>
    </header>
  );
}
