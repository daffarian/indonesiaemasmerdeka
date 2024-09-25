import Author from "./Author";
import MobileNav from "./MobileNav";
export default function Header({ className }: { className?: string }) {
  return (
    <header className={`${className} container fixed top-0 bg-white drop-shadow-2xl z-20 w-full justify-between items-center flex flex-row py-4`}>
      <Author className="w-12" />
      <MobileNav/>
    </header>
  );
}
