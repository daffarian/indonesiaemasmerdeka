import CtaButton from "./Button/CtaButton";

export default function DonationCTA({ className }: { className?: string }) {
  return (
    <section className={`${className} bg-secondary py-10 lg:py-20`}>
      <div className="container">
        <div className="flex flex-col items-center bg-white p-5 lg:p-10 rounded-3xl md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start">
            <h2>Siap berkolaboari dengan kami ?</h2>
            <CtaButton href="/hubungi-kami" className="w-40 mt-5 inline-flex justify-center text-center">
              Hubungi kami
            </CtaButton>
          </div>
          <img
            src="/images/ilustration/contact-us.svg"
            alt="contact-us"
            className="w-2/3 md:w-1/2"
          />
        </div>
      </div>
    </section>
  );
}
