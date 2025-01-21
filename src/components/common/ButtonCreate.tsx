import Link from "next/link";
export default function ButtonCreate({
  className,
  href,
}: {
  className?: string;
  href: string;
}) {
  return <Link href={href} className={`${className} w-28 text-white flex px-2 py-1 bg-primary rounded-lg justify-center items-center gap-2`}><span className="text-4xl">+</span>Tambah</Link>
}
