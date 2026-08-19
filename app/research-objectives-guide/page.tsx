import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Research Objectives Guide | How to Write Effective Research Objectives",
  description:
    "A practical guide to research objectives explaining how to write clear, specific and achievable objectives, connect them with research questions and avoid common mistakes.",
};

const objectiveTypes = [
  {
    title: "General Objective",
    description:
      "The general objective states the overall purpose of the research. It gives the study a clear direction without describing every individual task.",
  },
  {
    title: "Specific Objectives",
    description:
      "Specific objectives break the overall research aim into smaller, focused outcomes that can be investigated and addressed during the study.",
  },
  {
    title: "Exploratory Objectives",
    description:
      "Exploratory objectives are useful when a study seeks to understand a relatively unfamiliar issue, experience, phenomenon or research area.",
  },
  {
    title: "Descriptive Objectives",
    description:
      "Descriptive objectives focus on documenting or describing characteristics, patterns, behaviours, conditions or relationships within a research context.",
  },
  {
    title: "Comparative Objectives",
    description:
      "Comparative objectives examine differences between two or more groups, situations, approaches, populations or other relevant categories.",
  },
  {
    title: "Explanatory Objectives",
    description:
      "Explanatory objectives focus on understanding relationships, causes or factors that may help explain why a particular phenomenon occurs.",
  },
];

const objectiveSteps = [
  {
    number: "01",
    title: "Start with the research problem",
    description:
      "Research objectives should respond directly to the problem the study is designed to investigate. A clearly defined problem provides the foundation for deciding what the research needs to accomplish.",
  },
  {
    number: "02",
    title: "Define the overall purpose",
    description:
      "Identify what the study ultimately intends to investigate, understand, evaluate, compare, explain or determine. This becomes the foundation for the general objective.",
  },
  {
    number: "03",
    title: "Break the purpose into specific outcomes",
    description:
      "Divide the overall purpose into several focused objectives. Each objective should address an identifiable part of the research problem.",
  },
  {
    number: "04",
    title: "Use clear action verbs",
    description:
      "Use precise verbs such as examine, analyse, evaluate, identify, investigate, compare, assess, determine or explore instead of vague expressions such as understand or learn.",
  },
  {
    number: "05",
    title: "Check alignment",
    description:
      "Make sure the objectives correspond with the research questions and can realistically be addressed using the proposed methodology and available resources.",
  },
];

const mistakes = [
  {
    title: "Objectives are too broad",
    description:
      "An objective that attempts to investigate an entire industry, population or social issue may be impossible to address within the scope of one research project.",
  },
  {
    title: "Objectives are too vague",
    description:
      "Words such as understand, learn or study may not clearly communicate what the researcher will actually investigate or accomplish.",
  },
  {
    title: "Too many objectives",
    description:
      "A long list of objectives can make a study difficult to manage and may indicate that the research problem has not been sufficiently focused.",
  },
  {
    title: "Objectives do not match the questions",
    description:
      "Every major research question should have a clear relationship with the objectives. Misalignment can create problems when designing the methodology and analysing findings.",
  },
  {
    title: "Objectives cannot be investigated",
    description:
      "Objectives should be realistic given the available time, participants, data, resources, access and research methods.",
  },
];

export default function ResearchObjectivesGuidePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#fff45a]">
        <div className="mx-auto max-w-[1250px] px-6 pb-20 pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/55">
              RESEARCH OBJECTIVES GUIDE
            </p>

            <h1 className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              How to write clear and effective research objectives
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8 lg:text-xl">
              Research objectives translate the purpose of a research study
              into clear outcomes that can be investigated. Learn how to
              develop focused objectives, connect them with research questions
              and design a realistic research project.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#writing-objectives"
                className="inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Learn How to Write Objectives
              </a>

              <Link
                href="/research-questions-guide"
                className="inline-block rounded-md border-2 border-black px-7 py-3.5 text-base font-bold text-black transition-transform hover:scale-[1.02]"
              >
                Research Questions Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-16 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              RESEARCH FOUNDATIONS
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What are research objectives?
            </h2>

            <p className="mt-6 text-base leading-8 text-black/65 sm:text-lg">
              Research objectives describe what a study intends to accomplish.
              They translate a broad research purpose into clear and focused
              outcomes that guide the investigation.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Well-written objectives help researchers determine what evidence
              needs to be collected, which methods may be appropriate and how
              the findings will eventually be used to answer the research
              questions.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              In a well-designed research project, the problem, questions,
              objectives, methodology and analysis should work together rather
              than functioning as separate parts of the study.
            </p>
          </div>
        </div>
      </section>

      {/* Relationship */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              RESEARCH ALIGNMENT
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              How research objectives connect with the rest of the study
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Research objectives should not be written in isolation. They
              form part of a logical chain that connects the research problem
              to the methods used to investigate it.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-5">
            {[
              {
                title: "Research Problem",
                text: "What needs to be investigated?",
              },
              {
                title: "Research Questions",
                text: "What does the study need to answer?",
              },
              {
                title: "Research Objectives",
                text: "What does the study aim to accomplish?",
              },
              {
                title: "Methodology",
                text: "How will the investigation be conducted?",
              },
              {
                title: "Findings",
                text: "What does the evidence reveal?",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/40">
                  STEP {index + 1}
                </p>

                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-black/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              TYPES OF OBJECTIVES
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Common types of research objectives
            </h2>

            <p className="mt-5 text-base leading-7 text-black/65 sm:text-lg">
              The objectives used in a study depend on its research problem,
              questions, design and intended outcomes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {objectiveTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-7"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-4 text-base leading-7 text-black/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing process */}
      <section
        id="writing-objectives"
        className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              STEP-BY-STEP
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              How to write research objectives
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Writing effective objectives becomes easier when the research
              problem and questions have already been clearly defined.
            </p>
          </div>

          <div className="space-y-5">
            {objectiveSteps.map((item) => (
              <div
                key={item.number}
                className="grid gap-5 rounded-2xl border border-black/10 bg-white p-6 sm:grid-cols-[90px_1fr] sm:p-8"
              >
                <div>
                  <span className="text-3xl font-black text-black/20">
                    {item.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 text-base leading-7 text-black/65">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="rounded-2xl bg-[#ffef18] px-7 py-12 lg:px-16 lg:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/55">
              PRACTICAL EXAMPLE
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From a research problem to specific objectives
            </h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-xl bg-white/70 p-6">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-black/50">
                  Research Problem
                </p>

                <p className="mt-3 text-base leading-7 text-black/70">
                  A study may investigate how the increasing use of remote
                  working affects employee productivity and job satisfaction
                  within a particular organisation.
                </p>
              </div>

              <div className="rounded-xl bg-white/70 p-6">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-black/50">
                  General Objective
                </p>

                <p className="mt-3 text-base leading-7 text-black/70">
                  To examine the relationship between remote working and
                  employee productivity and job satisfaction within the
                  selected organisation.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-white/70 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-black/50">
                Possible Specific Objectives
              </p>

              <ul className="mt-4 space-y-3 text-base leading-7 text-black/70">
                <li>
                  • To examine the relationship between remote working
                  arrangements and employee productivity.
                </li>

                <li>
                  • To assess the effect of remote working on employee job
                  satisfaction.
                </li>

                <li>
                  • To identify factors that influence employee experiences of
                  remote working.
                </li>

                <li>
                  • To compare employee perceptions of remote and office-based
                  working arrangements.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SMART */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              QUALITY CHECK
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What makes a good research objective?
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Strong objectives should be sufficiently specific to guide the
              research while remaining realistic within the scope of the
              project.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Specific", "Clearly states what will be investigated."],
              ["Measurable", "Can be assessed through appropriate evidence."],
              ["Achievable", "Can realistically be completed."],
              ["Relevant", "Directly addresses the research problem."],
              ["Time-aware", "Fits within the available research period."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >
                <h3 className="text-lg font-bold">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-black/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mistakes */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              COMMON PROBLEMS
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Common mistakes when writing research objectives
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-7"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-4 text-base leading-7 text-black/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-[#fff45a] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/55">
              CONTINUE YOUR RESEARCH JOURNEY
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore the next stages of research design
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70">
              Research objectives connect the research problem and questions
              with the methodology used to conduct the investigation.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/research-problem-guide"
                className="rounded-md border-2 border-black px-6 py-3 font-bold hover:bg-black hover:text-white"
              >
                Research Problem
              </Link>

              <Link
                href="/research-questions-guide"
                className="rounded-md border-2 border-black px-6 py-3 font-bold hover:bg-black hover:text-white"
              >
                Research Questions
              </Link>

              <Link
                href="/research-methodology-guide"
                className="rounded-md bg-[#202020] px-6 py-3 font-bold text-white hover:scale-[1.02]"
              >
                Research Methodology →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need help with your academic or research work?
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