import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Research Methodology Guide | Qualitative, Quantitative & Mixed Methods",
  description:
    "A practical research methodology guide covering research philosophy, approaches, qualitative and quantitative methods, mixed-methods research, data collection and analysis.",
};

const methodologyAreas = [
  {
    title: "Research Philosophy",
    description:
      "Understand major research philosophies and how assumptions about knowledge and reality influence the way research is designed.",
  },
  {
    title: "Research Approaches",
    description:
      "Explore deductive, inductive and abductive approaches and understand how researchers move between theory, evidence and conclusions.",
  },
  {
    title: "Qualitative Research",
    description:
      "Learn how qualitative research explores experiences, perceptions, meanings and social phenomena using non-numerical evidence.",
  },
  {
    title: "Quantitative Research",
    description:
      "Understand how quantitative research uses numerical data, measurement and statistical analysis to investigate research questions.",
  },
  {
    title: "Mixed-Methods Research",
    description:
      "Explore how qualitative and quantitative approaches can be combined to provide complementary perspectives within one research study.",
  },
  {
    title: "Research Methods",
    description:
      "Compare common methods such as surveys, interviews, case studies, experiments, observations and secondary data analysis.",
  },
  {
    title: "Sampling",
    description:
      "Understand how researchers select participants, cases or datasets and how sampling decisions affect the scope of a study.",
  },
  {
    title: "Data Collection",
    description:
      "Explore approaches for collecting primary and secondary data and understand how collection methods should align with research objectives.",
  },
  {
    title: "Data Analysis",
    description:
      "Learn how qualitative and quantitative data can be organised, analysed and interpreted to answer research questions.",
  },
];

export default function ResearchMethodologyGuidePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#fff45a]">
        <div className="mx-auto max-w-[1250px] px-6 pb-20 pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/55">
              RESEARCH METHODOLOGY GUIDE
            </p>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Research Methodology Guide: Methods, Approaches and How to
              Choose.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8 lg:text-xl">
              Understand how research methodology works, from choosing a
              research philosophy and approach to selecting methods for data
              collection and analysis.
            </p>

            <div className="mt-9">
              <a
                href="#methodology-guides"
                className="inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Explore Methodology Guides
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
              RESEARCH DESIGN
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What is research methodology?
            </h2>

            <p className="mt-6 text-base leading-8 text-black/65 sm:text-lg">
              Research methodology describes the overall reasoning and
              framework behind a research study. It explains how a researcher
              approaches a research problem, why particular methods are
              appropriate and how evidence will be collected and analysed.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Methodology is therefore broader than a list of research
              methods. A well-designed methodology connects the research
              problem, questions, objectives, theoretical assumptions, data
              collection and analysis into a coherent research design.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology areas */}
      <section
        id="methodology-guides"
        className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              EXPLORE
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Research Methodology Topics
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Explore the major decisions involved in designing and conducting
              academic research.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {methodologyAreas.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-black">
                  {item.title}
                </h3>

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

      {/* Methodology vs methods */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="rounded-2xl bg-[#ffef18] px-7 py-12 lg:px-16 lg:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/55">
              AN IMPORTANT DISTINCTION
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              Research methodology vs research methods
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 sm:text-lg">
              Research methods are the specific techniques used to collect or
              analyse evidence, such as interviews, surveys or statistical
              analysis. Research methodology explains the broader reasoning
              behind the research design and why those methods are appropriate
              for the study.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 sm:text-lg">
              Keeping this distinction clear can help researchers write a more
              coherent methodology chapter and justify their methodological
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Research process */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              RESEARCH DESIGN PROCESS
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              How methodology connects to the wider research project
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Methodology should not be developed in isolation. The research
              problem influences the research questions, the questions inform
              the objectives, and these decisions help determine the most
              appropriate research approach, methods, data and analysis.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
              {[
                "Research Problem",
                "Research Questions",
                "Research Objectives",
                "Methodology",
                "Data Collection",
                "Data Analysis",
              ].map((step) => (
                <span
                  key={step}
                  className="rounded-full border border-black/15 bg-white px-4 py-2"
                >
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related guide */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="rounded-2xl border border-black/10 p-8 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              RELATED RESEARCH GUIDE
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Start with your research questions
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-black/65 sm:text-lg">
              Research questions play an important role in determining the
              direction of a study and can help guide methodological decisions.
              Explore our research questions guide to understand how strong
              research questions are developed.
            </p>

            <Link
              href="/research-questions-guide"
              className="mt-7 inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
            >
              Research Questions Guide
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need help with your research?
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