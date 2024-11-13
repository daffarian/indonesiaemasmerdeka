export default function SdgsSection() {
  return (
    <section className="bg-secondary rounded-t-[2rem] md:rounded-t-[8rem] py-10">
      <div className="container">
        <h2 className="text-center">
          Kontribusi terhadap <span className="text-accent">SDGs</span>
        </h2>
        <div className="flex flex-row gap-5 mt-10 flex-wrap justify-center">
          <img
            className="w-16 lg:w-28 rounded-lg"
            src="/images/sdgs-logo/sdgs-1.png"
            alt="sdgs-1"
          />
          <img
            className="w-16 lg:w-28 rounded-lg"
            src="/images/sdgs-logo/sdgs-2.png"
            alt="sdgs-2"
          />
          <img
            className="w-16 lg:w-28 rounded-lg"
            src="/images/sdgs-logo/sdgs-3.png"
            alt="sdgs-3"
          />
          <img
            className="w-16 lg:w-28 rounded-lg"
            src="/images/sdgs-logo/sdgs-5.png"
            alt="sdgs-5"
          />
        </div>
      </div>
    </section>
  );
}
