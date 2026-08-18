import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Research Problem Guide | How to Identify, Define & Write a Research Problem",
  description:
    "A practical guide to research problems covering research gaps, problem statements, identifying research problems and connecting problems with research questions and objectives.",
};

const problemAreas = [
  {
    title: "Identifying a Research Problem",
    description:
      "Learn how to recognise an issue, unanswered question, inconsistency or gap that can provide the foundation for academic research.",
  },
  {
    title: "Research Gaps",
    description:
      "Understand how gaps in existing literature, theory, evidence, methods or context can help establish the need for a new study.",
  },
  {
    title: "Problem Statement",
    description:
      "Learn how to clearly describe the problem being investigated, its context and why further research is necessary.",
  },
  {
    title: "Research Problem vs Topic",
    description:
      "Understand the difference between a broad research topic and the specific problem that a research project seeks to investigate.",
  },
];

export default function ResearchProblemGuidePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#fff45a]">
        <div className="mx-auto max-w-[1250px] px-6 pb-20 pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/55">
              RESEARCH QUESTIONS & DESIGN
            </p>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Research Problem Guide: How to Identify, Define & Write a
              Research Problem.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8 lg:text-xl">
              Learn how to identify a research problem, recognise research
              gaps, develop a clear problem statement and connect the problem
              with research questions, objectives and methodology.
            </p>

            <div className="mt-9">
              <a
                href="#research-problem"
                className="inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Explore the Guide
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
              RESEARCH FOUNDATIONS
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What is a research problem?
            </h2>

            <p className="mt-6 text-base leading-8 text-black/65 sm:text-lg">
              A research problem is an issue, unanswered question, gap in
              knowledge or situation that requires systematic investigation. It
              provides the intellectual foundation for a research project and
              helps establish what the study is trying to understand, explain
              or investigate.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              A strong research problem is more specific than a broad subject
              area. It should provide enough context to explain what is not
              adequately understood and why investigating the issue is
              worthwhile.
            </p>
          </div>
        </div>
      </section>

      {/* Topic vs problem */}
      <section
        id="research-problem"
        className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              STARTING POINT
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Research topic vs research problem
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              One of the first challenges in research planning is moving from
              a broad area of interest to a specific problem that can actually
              be investigated.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                BROAD AREA
              </p>

              <h3 className="mt-4 text-2xl font-bold">Research Topic</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                A research topic identifies the broad subject or area that a
                researcher is interested in investigating.
              </p>

              <p className="mt-5 text-base leading-7 text-black/65">
                For example, a topic might focus on employee adoption of
                artificial intelligence in organisations.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                SPECIFIC ISSUE
              </p>

              <h3 className="mt-4 text-2xl font-bold">Research Problem</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                A research problem identifies the specific issue, uncertainty
                or gap within that broader area that requires investigation.
              </p>

              <p className="mt-5 text-base leading-7 text-black/65">
                The problem might concern limited understanding of why
                employees resist particular AI systems or whether organisational
                factors influence adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research gaps */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              RESEARCH GAP
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Where do research problems come from?
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Research problems can emerge from different forms of uncertainty
              or limitations in existing knowledge.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {problemAreas.map((item) => (
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

      {/* Types of gaps */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              UNDERSTANDING THE GAP
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Common types of research gaps
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              A research gap does not necessarily mean that nobody has ever
              studied a particular subject. A gap may exist because existing
              research has produced conflicting findings, focused on a
              different population or context, used particular methods, or
              failed to address an important aspect of a broader problem.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Knowledge Gap",
                description:
                  "An area where existing knowledge is limited or incomplete.",
              },
              {
                title: "Contextual Gap",
                description:
                  "An issue that has been studied elsewhere but remains insufficiently understood in a particular population, organisation, country or setting.",
              },
              {
                title: "Methodological Gap",
                description:
                  "A limitation or opportunity arising from the methods used in previous research.",
              },
              {
                title: "Empirical Gap",
                description:
                  "A lack of sufficient evidence or observations concerning a particular issue.",
              },
              {
                title: "Theoretical Gap",
                description:
                  "A situation where existing theories do not fully explain a phenomenon or where competing theoretical explanations require further investigation.",
              },
              {
                title: "Contradictory Findings",
                description:
                  "A situation where previous studies have produced inconsistent or conflicting results.",
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem statement */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="rounded-2xl bg-[#ffef18] px-7 py-12 lg:px-16 lg:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/55">
              PROBLEM STATEMENT
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              Turning a research problem into a clear problem statement
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 sm:text-lg">
              A problem statement explains the issue being investigated and
              establishes why the research is necessary. It normally provides
              enough background to establish the context, identifies what is
              not adequately understood and explains the significance of
              addressing the problem.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 sm:text-lg">
              A useful problem statement should lead naturally towards the
              research questions and objectives rather than introducing a
              completely separate issue.
            </p>
          </div>
        </div>
      </section>

      {/* Connecting the research design */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              RESEARCH LOGIC
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Connecting the research problem to the rest of the study
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              A well-defined research problem provides the foundation for the
              next stages of research design. The research questions should
              address the problem, the objectives should translate those
              questions into achievable outcomes and the methodology should
              provide an appropriate way to investigate them.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold">
              {[
                "Research Topic",
                "Research Problem",
                "Research Questions",
                "Research Objectives",
                "Research Methodology",
                "Findings",
              ].map((step, index, steps) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-full border border-black/15 bg-white px-4 py-2">
                    {step}
                  </span>

                  {index < steps.length - 1 && (
                    <span className="text-black/40">→</span>
                  )}
                </div>
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
                NEXT STEP
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                Research Questions Guide
              </h2>

              <p className="mt-4 text-base leading-7 text-black/65">
                Learn how to develop focused research questions and understand
                how they connect the research problem, objectives and
                methodology.
              </p>

              <Link
                href="/research-questions-guide"
                className="mt-6 inline-block text-sm font-bold text-black hover:underline"
              >
                Research Questions Guide →
              </Link>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                RELATED HUB
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                Research Paper Writing Guide
              </h2>

              <p className="mt-4 text-base leading-7 text-black/65">
                Explore the wider research process, including research topics,
                questions, methodology, literature reviews, data analysis and
                research paper structure.
              </p>

              <Link
                href="/research-paper-writing"
                className="mt-6 inline-block text-sm font-bold text-black hover:underline"
              >
                Research Paper Writing Guide →
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