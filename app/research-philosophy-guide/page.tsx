import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Research Philosophy Guide | Positivism, Interpretivism, Pragmatism & Critical Realism",
  description:
    "A practical guide to research philosophy covering ontology, epistemology, positivism, interpretivism, pragmatism, critical realism and how to choose a research philosophy.",
};

const philosophyAreas = [
  {
    title: "Ontology",
    description:
      "Explore assumptions about reality and what can be considered real within a research study.",
  },
  {
    title: "Epistemology",
    description:
      "Understand assumptions about knowledge, how knowledge can be acquired and what can be accepted as valid evidence.",
  },
  {
    title: "Positivism",
    description:
      "Learn about a research philosophy commonly associated with observable evidence, measurement and structured empirical investigation.",
  },
  {
    title: "Interpretivism",
    description:
      "Explore an approach focused on understanding meanings, experiences and how people interpret their social or organisational environment.",
  },
  {
    title: "Pragmatism",
    description:
      "Understand how research questions and practical outcomes can influence methodological choices and the use of different forms of evidence.",
  },
  {
    title: "Critical Realism",
    description:
      "Explore the distinction between observable events and the underlying mechanisms or structures that may contribute to them.",
  },
];

export default function ResearchPhilosophyGuidePage() {
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
              Research Philosophy Guide: Positivism, Interpretivism,
              Pragmatism & Critical Realism.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8 lg:text-xl">
              Understand what research philosophy means, how philosophical
              assumptions influence research design and how major research
              philosophies can shape methodological decisions.
            </p>

            <div className="mt-9">
              <a
                href="#philosophy-guides"
                className="inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Explore Research Philosophy
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
              What is research philosophy?
            </h2>

            <p className="mt-6 text-base leading-8 text-black/65 sm:text-lg">
              Research philosophy refers to the assumptions and perspectives
              that influence how a researcher understands reality, knowledge
              and the process of producing evidence. These assumptions can
              influence the way a research problem is approached and how data
              is collected and interpreted.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Research philosophy is therefore connected to the broader
              methodology of a study. Understanding the philosophical
              foundations of research can help explain why particular
              approaches and methods are appropriate for a particular research
              question.
            </p>
          </div>
        </div>
      </section>

      {/* Ontology and epistemology */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              FOUNDATIONS
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Ontology and epistemology
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Two important concepts in understanding research philosophy are
              ontology and epistemology.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold">Ontology</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Ontology concerns assumptions about reality and what exists.
                Researchers may hold different views about whether reality is
                objective and independent of people or whether it is shaped by
                human interpretation and social context.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold">Epistemology</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Epistemology concerns knowledge and how researchers understand
                what can be known. It considers questions about how knowledge
                is produced, justified and evaluated as evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophies */}
      <section
        id="philosophy-guides"
        className="bg-white px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              EXPLORE
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Major Research Philosophies
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Explore some of the research philosophies commonly discussed in
              academic research methodology.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {philosophyAreas.map((item) => (
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

      {/* Choosing philosophy */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="rounded-2xl bg-[#ffef18] px-7 py-12 lg:px-16 lg:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/55">
              METHODOLOGICAL DECISION
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              How do you choose a research philosophy?
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 sm:text-lg">
              A research philosophy should be considered in relation to the
              research problem, questions, objectives and the type of knowledge
              the study is seeking to develop. The choice should support a
              coherent research design rather than being selected simply
              because a particular philosophy is commonly used in a discipline.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 sm:text-lg">
              Researchers should be able to explain the reasoning behind their
              philosophical position and show how it connects with their
              research approach, methods and analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology relationship */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              CONNECTING THE RESEARCH DESIGN
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From philosophy to research methods
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Research philosophy is one part of a wider methodological
              decision-making process. A coherent research design connects
              philosophical assumptions with the research approach, methods,
              data collection and analysis.
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
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                RELATED GUIDE
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                Research Methodology Guide
              </h2>

              <p className="mt-4 text-base leading-7 text-black/65">
                Explore the wider research methodology process, including
                research approaches, qualitative and quantitative methods,
                sampling, data collection and data analysis.
              </p>

              <Link
                href="/research-methodology-guide"
                className="mt-6 inline-block text-sm font-bold text-black hover:underline"
              >
                Research Methodology Guide →
              </Link>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                RELATED GUIDE
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                Research Questions Guide
              </h2>

              <p className="mt-4 text-base leading-7 text-black/65">
                Understand how research questions are developed and how they
                connect the research problem, objectives and methodological
                decisions.
              </p>

              <Link
                href="/research-questions-guide"
                className="mt-6 inline-block text-sm font-bold text-black hover:underline"
              >
                Research Questions Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
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