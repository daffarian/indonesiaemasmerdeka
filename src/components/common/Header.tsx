import Author from "./Author";
import MobileNav from "./MobileNav";
export default function Header({ className }: { className?: string }) {
  return (
    <header className={`${className} container w-full justify-between items-center flex flex-row py-2`}>
      <Author className="w-16" />
      <MobileNav/>
    </header>
  );
}
