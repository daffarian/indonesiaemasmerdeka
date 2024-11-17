import Link from "next/link";

export default function CtaButton({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children: string;
}) {
  return (
    <Link
      className={`${className} bg-primary text-center rounded-lg text-white font-semibold px-5 py-3`}
      href={href}
    >
      {children}
    </Link>
  );
}
