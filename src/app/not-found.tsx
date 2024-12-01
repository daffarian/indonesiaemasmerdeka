import Link from "next/link"

export default function NotFound(){
  return(
    <div className="flex flex-col gap-10 justify-center items-center h-svh container">
      <img src="/images/ilustration/not-found.jpg" className="max-w-96"></img>
      <h1 className="text-base">Maaf, halaman tidak ditemukan</h1>
      <Link href={'/'} className="bg-primary px-3 py-2 text-white rounded-xl font-semibold">Kembali ke beranda</Link>
    </div>
  )
}