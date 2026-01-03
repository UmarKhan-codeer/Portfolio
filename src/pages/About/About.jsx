import HeroImg from "@/assets/images/hero.png";
import ScrapifyLogo from "@/assets/images/scrapifylogo.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Frontend Engineer. Builder. Problem Solver.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Umer Javed profile"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I&apos;m{" "}
                <strong className="text-white font-semibold">Umer Javed</strong>
                , a Software Engineering graduate and frontend-focused developer
                from Pakistan. I specialize in building modern, scalable, and
                performance-driven web applications using React, Next.js, and
                clean UI engineering practices.
              </p>

              <p className="text-white">
                I enjoy translating complex requirements into intuitive user
                experiences, fixing real production issues, and shipping
                features that actually get used. Alongside frontend engineering,
                I have a strong interest in security-conscious development and
                integrating AI capabilities into web applications where they
                provide real value.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I&apos;m a continuous learner who believes great products
                    are built at the intersection of clean design, solid
                    engineering, and long-term thinking. Through projects like
                    Scrapify, I&apos;m exploring intelligent automation, data
                    extraction, and how developers can build smarter tools on
                    top of the modern web.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Umer Javed, Creator of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={ScrapifyLogo}
                        alt="{Scrapify Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">Scrapify</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
