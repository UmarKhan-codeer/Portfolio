import HeroImg from "@/assets/images/hero.jpg";
import ScrapifyLogo from "@/assets/images/scrapifylogo.png"; 

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer. Innovator. AI Explorer.
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
                Hello! I'm <strong className="text-white font-semibold">Umer Javed</strong>, a passionate Full-Stack Developer and AI Enthusiast from Pakistan. With a foundation in Software Engineering and experience building intelligent, real-world applications, I specialize in creating scalable web platforms and seamless user experiences.
              </p>

              <p className="text-white">
                I enjoy solving complex problems, automating workflows, and exploring how AI can empower users through intuitive interfaces. My goal is to work on meaningful projects that challenge me technically while delivering real-world value.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner dedicated to merging the power of AI with modern web technologies. Through projects like LiveCrawler, I'm exploring the future of intelligent web automation and building tools that help developers and researchers extract value from the web.
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
