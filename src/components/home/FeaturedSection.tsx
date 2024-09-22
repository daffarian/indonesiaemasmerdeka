import TargetIcon from "../icons/TergetIcon";

export default function FeaturedSection({ className }: { className?: string }) {
  return (
    <section className={`${className} py-10 bg-amber-50`}>
      <h2 className="text-center">
        Mari Kolaborasi <span className="text-primary">Bersama</span>
      </h2>
      <div className="container mt-10 flex flex-col gap-5">
        <div className="p-5 border-2 border-[#f2a3a0] h-52 rounded-3xl bg-white">
          <TargetIcon className="text-primary h-10 w-10" />
          <h3 className="mt-3">Tepat Sasaran</h3>
          <p className="text-zinc-600 mt-3">
            Program yang dijalankan tepat sasaran dan berdampak hingga ke
            lapisan sosial masyarakat.
          </p>
        </div>
        <div className="p-5 border-2 border-[#f2a3a0] h-52 rounded-3xl bg-white">
          <TargetIcon className="text-primary h-10 w-10" />
          <h3 className="mt-3">Terpublikasi</h3>
          <p className="text-zinc-600 mt-3">
          Publikasi yang luas, secara online maupun offline.
          </p>
        </div>
        <div className="p-5 border-2 border-[#f2a3a0] h-52 rounded-3xl bg-white">
          <TargetIcon className="text-primary h-10 w-10" />
          <h3 className="mt-3">Termonitor</h3>
          <p className="text-zinc-600 mt-3">
          Program termonitor dengan baik, dapat melihat dampaknya secara jangka pendek dan jangka panjang.
          </p>
        </div>
      </div>
    </section>
  );
}
