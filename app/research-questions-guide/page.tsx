import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Research Questions Guide | How to Develop Strong Research Questions",
  description:
    "A practical guide to developing research questions, including qualitative, quantitative and mixed-method questions, research aims, objectives and common mistakes.",
};

const questionTypes = [
  {
    title: "Exploratory Questions",
    description:
      "Questions designed to investigate a topic, experience or phenomenon where the researcher seeks deeper understanding.",
  },
  {
    title: "Descriptive Questions",
    description:
      "Questions focused on describing characteristics, behaviours, patterns or conditions within a particular population or context.",
  },
  {
    title: "Explanatory Questions",
    description:
      "Questions that investigate relationships, influences or possible explanations for a particular phenomenon.",
  },
  {
    title: "Qualitative Questions",
    description:
      "Open-ended questions that explore experiences, perceptions, meanings, motivations and social or organisational phenomena.",
  },
  {
    title: "Quantitative Questions",
    description:
      "Questions designed around measurable variables, relationships, differences, frequencies or statistical associations.",
  },
  {
    title: "Mixed-Methods Questions",
    description:
      "Questions that bring together qualitative and quantitative perspectives within a broader research design.",
  },
];

export default function ResearchQuestionsGuidePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#fff45a]">
        <div className="mx-auto max-w-[1250px] px-6 pb-20 pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/55">
              RESEARCH QUESTIONS GUIDE
            </p>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Research Questions Guide: How to Develop Strong Research
              Questions.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8 lg:text-xl">
              Learn how to turn a broad research topic or problem into focused,
              answerable research questions that align with your research aim,
              objectives and methodology.
            </p>

            <div className="mt-9">
              <a
                href="#questions-guides"
                className="inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Explore Research Questions
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
              RESEARCH PLANNING
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What is a research question?
            </h2>

            <p className="mt-6 text-base leading-8 text-black/65 sm:text-lg">
              A research question is a focused question that defines what a
              study is seeking to investigate or understand. It provides
              direction for the research and helps determine what evidence
              needs to be collected and analysed.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              A strong research question should be sufficiently focused to be
              investigated within the available time and resources while still
              being meaningful in relation to the research problem and wider
              academic context.
            </p>
          </div>
        </div>
      </section>

      {/* Questions and objectives */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-7">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-black/45">
                01
              </p>

              <h2 className="mt-4 text-2xl font-bold">Research Problem</h2>

              <p className="mt-4 text-base leading-7 text-black/65">
                Defines the issue, gap or problem that provides the reason for
                conducting the research.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-7">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-black/45">
                02
              </p>

              <h2 className="mt-4 text-2xl font-bold">Research Questions</h2>

              <p className="mt-4 text-base leading-7 text-black/65">
                Translate the research problem into focused questions that the
                study will investigate.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-7">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-black/45">
                03
              </p>

              <h2 className="mt-4 text-2xl font-bold">Research Objectives</h2>

              <p className="mt-4 text-base leading-7 text-black/65">
                Express what the research intends to achieve through specific
                and achievable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Question types */}
      <section
        id="questions-guides"
        className="bg-white px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              EXPLORE
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Types of Research Questions
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Different research designs require different kinds of questions.
              The wording and structure should reflect what the study is
              trying to investigate.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {questionTypes.map((item) => (
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

      {/* Strong question characteristics */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              BUILDING BETTER QUESTIONS
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What makes a strong research question?
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              A useful research question should have a clear connection to the
              research problem and should be possible to investigate using
              appropriate evidence. It should also be focused enough to avoid
              producing an overly broad or unmanageable study.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Clear and understandable",
                "Focused and specific",
                "Researchable",
                "Relevant to the research problem",
                "Aligned with research objectives",
                "Appropriate for the chosen methodology",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-black/10 bg-white px-5 py-4 text-base font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology relationship */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="rounded-2xl bg-[#ffef18] px-7 py-12 lg:px-16 lg:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/55">
              RELATED RESEARCH DESIGN
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              Research questions and methodology should work together
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 sm:text-lg">
              The questions a researcher asks influence the type of evidence
              required and therefore the methodological choices made during the
              study. A well-designed research project maintains a clear
              connection between its questions, objectives, methodology, data
              collection and analysis.
            </p>

            <Link
              href="/research-methodology-guide"
              className="mt-7 inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
            >
              Research Methodology Guide
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need help developing your research?
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