import CtaButton from "./Button/CtaButton";

export default function DonationCTA({ className }: { className?: string }) {
  return (
    <section
      className={`${className} bg-secondary py-10 mt-10 lg:py-20 lg:mt-20`}
    >
      <div className="container">
        <div className="flex flex-col items-center bg-white p-5 rounded-3xl">
          <h2>Siap berkolaboari dengan kami ?</h2>
          <CtaButton href="/hubungi-kami" className="w-40 mt-5">Hubungi kami</CtaButton>
        </div>
      </div>
    </section>
  );
}
