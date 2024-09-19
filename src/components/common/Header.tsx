import Author from "./Author";
import MobileNav from "./MobileNav";
export default function Header({ className }: { className?: string }) {
  return (
    <header className={`${className} container w-full justify-between items-center flex flex-row py-4`}>
      <Author className="w-12" />
      <MobileNav/>
    </header>
  );
}
