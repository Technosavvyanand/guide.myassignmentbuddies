import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Research Approach Guide | Deductive, Inductive & Abductive Research Approaches",
  description:
    "A practical guide to research approaches covering deductive, inductive and abductive reasoning, theory development, hypotheses and choosing an appropriate research approach.",
};

const researchApproaches = [
  {
    title: "Deductive Approach",
    description:
      "Understand how researchers begin with existing theory or propositions and use empirical evidence to test hypotheses or expectations.",
  },
  {
    title: "Inductive Approach",
    description:
      "Explore how researchers begin with observations or evidence and develop patterns, concepts or theoretical explanations from the data.",
  },
  {
    title: "Abductive Approach",
    description:
      "Learn how researchers move between existing explanations and empirical observations to develop the most plausible interpretation of a research problem.",
  },
];

export default function ResearchApproachGuidePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#fff45a]">
        <div className="mx-auto max-w-[1250px] px-6 pb-20 pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/55">
              RESEARCH METHODOLOGY
            </p>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Research Approach Guide: Deductive, Inductive & Abductive
              Approaches.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8 lg:text-xl">
              Understand how research approaches connect theory, evidence and
              explanation, and learn how deductive, inductive and abductive
              approaches can be used in academic research.
            </p>

            <div className="mt-9">
              <a
                href="#research-approaches"
                className="inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Explore Research Approaches
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
              What is a research approach?
            </h2>

            <p className="mt-6 text-base leading-8 text-black/65 sm:text-lg">
              A research approach describes the way a researcher moves between
              ideas, theory, evidence and explanation when investigating a
              research problem. It helps establish how knowledge will be
              developed or tested during a study.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              The choice of research approach should be consistent with the
              research problem, questions, objectives and wider methodological
              design. A researcher may begin with an existing theoretical
              explanation and test it against evidence, or begin with empirical
              observations and develop concepts or explanations from them.
            </p>
          </div>
        </div>
      </section>

      {/* Theory and evidence */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              THEORY & EVIDENCE
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              How research approaches connect theory and data
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Research approaches can be understood partly by examining the
              direction in which researchers move between theoretical ideas
              and empirical evidence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-black/45">
                THEORY → DATA
              </p>

              <h3 className="mt-3 text-xl font-bold">Deduction</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Existing theory or propositions are used to develop
                expectations that can then be examined using empirical
                evidence.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-black/45">
                DATA → THEORY
              </p>

              <h3 className="mt-3 text-xl font-bold">Induction</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Researchers examine observations or evidence to identify
                patterns and develop concepts or theoretical explanations.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-black/45">
                THEORY ↔ DATA
              </p>

              <h3 className="mt-3 text-xl font-bold">Abduction</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Researchers move between existing explanations and empirical
                observations to develop the most plausible explanation for
                what they observe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main approaches */}
      <section
        id="research-approaches"
        className="bg-white px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              EXPLORE
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Major Research Approaches
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Explore the three major approaches commonly discussed when
              designing and explaining academic research.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {researchApproaches.map((approach) => (
              <div
                key={approach.title}
                className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-black">
                  {approach.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-black/65">
                  {approach.description}
                </p>

                <p className="mt-6 text-sm font-bold text-black">
                  Detailed guide coming soon →
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deductive vs inductive */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              COMPARING APPROACHES
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Deductive and inductive research
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Deductive and inductive approaches represent different ways of
              connecting theory and evidence. Deductive research commonly
              begins with an existing theoretical position and examines whether
              empirical evidence is consistent with propositions derived from
              it. Inductive research instead begins with observations and uses
              patterns in the evidence to develop concepts or explanations.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              The distinction should not be treated as a simple choice between
              numbers and words. Quantitative and qualitative methods can be
              used within broader research designs that involve different
              approaches to theory and evidence.
            </p>
          </div>
        </div>
      </section>

      {/* Choosing approach */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="rounded-2xl bg-[#ffef18] px-7 py-12 lg:px-16 lg:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/55">
              METHODOLOGICAL DECISION
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              How do you choose a research approach?
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 sm:text-lg">
              The appropriate research approach depends on the nature of the
              research problem, the questions being investigated and the
              knowledge the study aims to develop. Researchers should consider
              whether the study is primarily testing existing theoretical
              expectations, developing explanations from empirical evidence or
              moving between theory and evidence to investigate an uncertain or
              complex problem.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 sm:text-lg">
              The selected approach should also fit logically with the research
              philosophy, research design, data collection methods and analysis
              techniques used in the study.
            </p>
          </div>
        </div>
      </section>

      {/* Research design connection */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              CONNECTING THE RESEARCH DESIGN
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From research philosophy to research methods
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              A research approach does not operate independently. A strong
              research design connects the philosophical assumptions of the
              study with the way theory is approached, the research design,
              methods of data collection and techniques used to analyse the
              evidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
              {[
                "Research Philosophy",
                "Research Approach",
                "Research Design",
                "Research Methods",
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

      {/* Related guides */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                RELATED GUIDE
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                Research Philosophy Guide
              </h2>

              <p className="mt-4 text-base leading-7 text-black/65">
                Explore ontology, epistemology, positivism, interpretivism,
                pragmatism and critical realism and understand how
                philosophical assumptions influence research design.
              </p>

              <Link
                href="/research-philosophy-guide"
                className="mt-6 inline-block text-sm font-bold text-black hover:underline"
              >
                Research Philosophy Guide →
              </Link>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                RELATED HUB
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                Research Methodology Guide
              </h2>

              <p className="mt-4 text-base leading-7 text-black/65">
                Return to the wider methodology hub covering research
                philosophy, approaches, qualitative and quantitative methods,
                data collection and analysis.
              </p>

              <Link
                href="/research-methodology-guide"
                className="mt-6 inline-block text-sm font-bold text-black hover:underline"
              >
                Research Methodology Guide →
              </Link>
            </div>
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