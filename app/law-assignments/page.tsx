import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Law Assignment Guides | Legal Research, IRAC & Case Analysis",
  description:
    "Practical law assignment guides covering legal research, case analysis, IRAC, legal essays, problem questions, referencing and law dissertations.",
};

export default function LawAssignmentsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#fff45a]">
        <div className="mx-auto max-w-[1250px] px-6 pb-20 pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/55">
              LAW ASSIGNMENT GUIDES
            </p>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Practical guides for law assignments, legal research and
              academic writing.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8 lg:text-xl">
              Understand how to approach legal assignments, analyse cases,
              structure legal arguments, apply the IRAC method, conduct legal
              research and develop clear, well-supported academic work.
            </p>

            <div className="mt-9">
              <a
                href="#law-guides"
                className="inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Explore Law Guides
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-16 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              LEGAL ACADEMIC WORK
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Understanding law assignments beyond the question
            </h2>

            <p className="mt-6 text-base leading-8 text-black/65 sm:text-lg">
              Law assignments often require more than describing legal rules.
              Students may need to identify relevant issues, research
              legislation and authorities, analyse cases, construct legal
              arguments and apply those principles to specific facts.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              These guides are designed to break down the different stages of
              legal academic work into practical, understandable steps.
            </p>
          </div>
        </div>
      </section>

      {/* Guide areas */}
      <section
        id="law-guides"
        className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              EXPLORE
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Law Assignment Topics
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Start with the part of your legal assignment where you need the
              most guidance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Legal Research",
                description:
                  "Learn how to identify legal sources, research authorities and build evidence for academic legal arguments.",
              },
              {
                title: "Case Analysis",
                description:
                  "Understand how to examine judicial decisions, identify relevant principles and critically analyse cases.",
              },
              {
                title: "IRAC Method",
                description:
                  "Learn how Issue, Rule, Application and Conclusion can be used to structure clear legal analysis.",
              },
              {
                title: "Legal Essays",
                description:
                  "Guidance on developing arguments, organising legal essays, using authorities and presenting critical analysis.",
              },
              {
                title: "Problem Questions",
                description:
                  "Understand how to identify legal issues and apply relevant rules and authorities to factual scenarios.",
              },
              {
                title: "Law Dissertations",
                description:
                  "Explore the process of developing a legal research topic, methodology, literature review and dissertation structure.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-4 text-base leading-7 text-black/65">
                  {item.description}
                </p>

                <p className="mt-6 text-sm font-bold text-black">
                  Detailed guide coming soon →
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="rounded-2xl bg-[#ffef18] px-7 py-12 lg:px-16 lg:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/55">
              BUILD STRONGER LEGAL ARGUMENTS
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              From legal issue to reasoned conclusion
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 sm:text-lg">
              Strong legal academic work connects the question, relevant
              authorities, legal principles, factual application and final
              conclusion. Our future guides will break down each part of that
              process.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need help with your academic work?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70">
            Explore My Assignment Buddies for professional academic and
            technical assistance.
          </p>

          <Link
            href="https://www.myassignmentbuddies.com"
            className="mt-8 inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
          >
            Explore Our Services
          </Link>
        </div>
      </section>
    </div>
  );
}