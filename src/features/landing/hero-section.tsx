import logo from "./logo.webp";
import { WaitlistForm } from "./waitlist-form";

export function HeroSection() {
  return (
    <section className="container mx-auto flex flex-col items-center px-5 py-28">
      <img alt="Heroico" className="mt-16" height={64} src={logo} width={64} />

      <h2 className="mt-10 text-center font-medium tablet:text-5xl text-3xl tracking-tight">
        The world-class
        <br />
        design ideas
      </h2>

      <p className="mt-10 laptop:w-4/12 tablet:w-8/12 text-center">
        Discover hundreds of landing pages created by leading companies for your
        design inspiration
      </p>

      <div className="mt-10 flex laptop:w-4/12 tablet:w-8/12 w-full">
        <WaitlistForm />
      </div>
    </section>
  );
}
