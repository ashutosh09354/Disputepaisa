import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section className="section-shell pb-8 pt-3 md:pt-0">
      <div className="final-cta">
        <div className="relative z-10">
          <div className="text-xs font-bold uppercase tracking-[.18em] text-emerald-200">YOUR BANKING RIGHTS MATTER</div>
          <h2 className="mt-3 max-w-2xl xl:max-w-3xl text-3xl font-extrabold leading-tight tracking-[-.03em] text-white md:text-[42px] xl:text-[48px]">
            Have a banking problem?<br />Start with your query.
          </h2>
          <div className="mt-7 flex flex-col gap-3 md:flex-row md:flex-wrap">
            <Button variant="white" href="#query" className="h-12 w-full rounded-xl md:h-auto md:w-auto md:rounded-lg">Raise a Query</Button>
            <Button variant="whiteOutline" href="#track" className="h-12 w-full rounded-xl md:h-auto md:w-auto md:rounded-lg">Track Existing Query</Button>
          </div>
        </div>
        <div className="cta-orb cta-orb-1" />
        <div className="cta-orb cta-orb-2" />
        <div className="cta-grid" />
      </div>
    </section>
  );
}
