import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Research Paper Writing Guides | Topics, Questions, Methodology & Literature Reviews",
  description:
    "Practical research paper writing guides covering research topics, research questions, objectives, methodology, literature reviews, data analysis and academic publishing.",
};

const researchTopics = [
  {
    title: "Research Topics",
    description:
      "Learn how to identify, evaluate and narrow a research topic into a focused and manageable area of investigation.",
    href: null,
  },
  {
    title: "Research Problems",
    description:
      "Understand how to identify a research gap or problem and develop a clear foundation for an academic study.",
    href: "/research-problem-guide",
  },
  {
    title: "Research Questions",
    description:
      "Learn how to formulate focused research questions that align with the research problem, objectives and methodology.",
    href: "/research-questions-guide",
  },
  {
    title: "Research Objectives",
    description:
      "Understand how research aims and objectives translate a research problem into specific and achievable outcomes.",
    href: null,
  },
  {
    title: "Research Methodology",
    description:
      "Explore qualitative, quantitative and mixed-method approaches and understand how researchers select appropriate methods.",
    href: "/research-methodology-guide",
  },
  {
    title: "Research Philosophy",
    description:
      "Understand major research philosophies and how assumptions about knowledge and reality influence research design and methodology.",
    href: "/research-philosophy-guide",
  },
  {
    title: "Research Approach",
    description:
      "Explore deductive, inductive and abductive approaches and understand how researchers connect theory, evidence and investigation.",
    href: "/research-approach-guide",
  },
  {
    title: "Qualitative vs Quantitative Research",
    description:
      "Compare qualitative and quantitative research approaches, including their purposes, data types, methods and appropriate applications.",
    href: "/qualitative-vs-quantitative-research",
  },
  {
    title: "Literature Reviews",
    description:
      "Learn how to find, evaluate, organise and critically synthesise academic literature relevant to a research question.",
    href: null,
  },
  {
    title: "Data Collection",
    description:
      "Explore common approaches to collecting primary and secondary research data, including surveys, interviews and datasets.",
    href: null,
  },
  {
    title: "Data Analysis",
    description:
      "Understand how collected evidence can be processed, analysed and interpreted to answer research questions.",
    href: null,
  },
  {
    title: "Research Paper Structure",
    description:
      "Learn how research papers are commonly organised, from the introduction and literature review through methodology, findings and conclusion.",
    href: null,
  },
];

export default function ResearchPaperWritingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#fff45a]">
        <div className="mx-auto max-w-[1250px] px-6 pb-20 pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/55">
              RESEARCH PAPER WRITING GUIDES
            </p>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Practical guides for research papers, methodology and academic
              research.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8 lg:text-xl">
              Learn how to develop research topics and questions, structure a
              research paper, review academic literature, select an appropriate
              methodology, analyse evidence and present meaningful findings.
            </p>

            <div className="mt-9">
              <a
                href="#research-guides"
                className="inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Explore Research Guides
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
              RESEARCH KNOWLEDGE HUB
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Understanding the research process step by step
            </h2>

            <p className="mt-6 text-base leading-8 text-black/65 sm:text-lg">
              Developing a strong research paper involves much more than
              writing the final document. Researchers need to define a clear
              research problem, develop focused questions and objectives,
              examine existing literature and select methods that are
              appropriate for the research.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              These guides are designed to explain the major stages of the
              research process and help students and researchers understand how
              each part of a research project connects to the next.
            </p>
          </div>
        </div>
      </section>

      {/* Research journey */}
      <section
        id="research-guides"
        className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              EXPLORE
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Research Paper Topics
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Explore the different stages of planning, conducting and
              presenting academic research.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {researchTopics.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-4 text-base leading-7 text-black/65">
                  {item.description}
                </p>

                {item.href ? (
                  <Link
                    href={item.href}
                    className="mt-6 inline-block text-sm font-bold text-black hover:underline"
                  >
                    Read the {item.title} Guide →
                  </Link>
                ) : (
                  <p className="mt-6 text-sm font-bold text-black">
                    Detailed guide coming soon →
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research process */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="rounded-2xl bg-[#ffef18] px-7 py-12 lg:px-16 lg:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/55">
              THE RESEARCH JOURNEY
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              From research idea to evidence-based conclusion
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 sm:text-lg">
              Strong research connects each stage of the investigation. A
              focused topic leads to a clear research problem, which informs
              the research questions and objectives. These then guide the
              methodology, literature review, data collection and analysis
              before the findings are interpreted and presented.
            </p>
          </div>
        </div>
      </section>

      {/* Academic writing */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              ACADEMIC WRITING
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Presenting research clearly and critically
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Research findings need to be presented in a way that clearly
              connects the evidence to the research questions and objectives.
              Academic writing should communicate the reasoning behind the
              research while demonstrating appropriate use of evidence,
              sources and critical analysis.
            </p>
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