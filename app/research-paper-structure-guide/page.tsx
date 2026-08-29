import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Research Paper Structure Guide | Sections, Format & Organisation",
  description:
    "Learn how to structure a research paper from title and abstract through introduction, literature review, methodology, findings, discussion, conclusion and references.",
};

const relatedGuides = [
  {
    title: "Research Topics",
    description:
      "Learn how to identify, evaluate and narrow a research topic into a focused and manageable area of investigation.",
    href: "/research-topics-guide",
  },
  {
    title: "Research Problems",
    description:
      "Understand how to identify a research gap or problem and establish a clear foundation for an academic study.",
    href: "/research-problem-guide",
  },
  {
    title: "Research Questions",
    description:
      "Learn how to formulate focused questions that guide the research and align with its problem and objectives.",
    href: "/research-questions-guide",
  },
  {
    title: "Research Objectives",
    description:
      "Understand how research aims and objectives translate a research problem into specific and achievable outcomes.",
    href: "/research-objectives-guide",
  },
  {
    title: "Research Methodology",
    description:
      "Explore qualitative, quantitative and mixed-method approaches and understand how researchers select appropriate methods.",
    href: "/research-methodology-guide",
  },
  {
    title: "Literature Reviews",
    description:
      "Learn how to find, evaluate, organise and critically synthesise academic literature relevant to a research question.",
    href: "/literature-review-guide",
  },
  {
    title: "Data Collection",
    description:
      "Explore common approaches to collecting primary and secondary research data, including surveys, interviews and datasets.",
    href: "/data-collection-guide",
  },
  {
    title: "Data Analysis",
    description:
      "Understand how collected evidence can be processed, analysed and interpreted to answer research questions.",
    href: "/data-analysis-guide",
  },
];

const paperSections = [
  {
    number: "01",
    title: "Title Page",
    description:
      "The title page identifies the research paper and normally provides essential information such as the title, author, institution, course and submission details where required.",
  },
  {
    number: "02",
    title: "Abstract",
    description:
      "The abstract provides a concise overview of the research, including the research problem, purpose, methodology, key findings and main conclusion.",
  },
  {
    number: "03",
    title: "Introduction",
    description:
      "The introduction establishes the context of the study, explains why the topic matters and introduces the research problem, questions, objectives and overall purpose.",
  },
  {
    number: "04",
    title: "Literature Review",
    description:
      "The literature review examines relevant academic research, theories and evidence to establish what is already known and identify gaps or unresolved issues.",
  },
  {
    number: "05",
    title: "Methodology",
    description:
      "The methodology explains how the research was designed and conducted, including the research approach, participants or data sources, methods of data collection and analytical procedures.",
  },
  {
    number: "06",
    title: "Results or Findings",
    description:
      "This section presents the evidence produced by the research. Depending on the study, findings may include statistical results, themes, observations, tables, figures or other forms of analysed evidence.",
  },
  {
    number: "07",
    title: "Discussion",
    description:
      "The discussion interprets the findings and explains what they mean in relation to the research questions, objectives, existing literature and broader research context.",
  },
  {
    number: "08",
    title: "Conclusion",
    description:
      "The conclusion brings the research together by summarising the main findings, addressing the research questions and explaining the overall contribution or implications of the study.",
  },
  {
    number: "09",
    title: "References",
    description:
      "The references section lists the academic and other sources cited in the paper using the required referencing style and format.",
  },
  {
    number: "10",
    title: "Appendices",
    description:
      "Appendices contain supporting material that is useful for understanding or verifying the research but would interrupt the main flow of the paper if included in the body.",
  },
];

export default function ResearchPaperStructureGuide() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#fff45a]">
        <div className="mx-auto max-w-[1250px] px-6 pb-20 pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/55">
              RESEARCH PAPER STRUCTURE GUIDE
            </p>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
              How to structure a research paper from beginning to end.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8 lg:text-xl">
              Learn how the major sections of a research paper fit together,
              what each section should accomplish and how to create a logical
              progression from the research problem to the final conclusion.
            </p>

            <div className="mt-9">
              <a
                href="#paper-structure"
                className="inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Explore the Structure
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
              UNDERSTANDING RESEARCH PAPERS
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A research paper is a connected argument
            </h2>

            <p className="mt-6 text-base leading-8 text-black/65 sm:text-lg">
              A research paper is not simply a collection of separate
              sections. Each part should contribute to the same overall
              investigation. The introduction establishes what the research is
              about, the literature review explains what is already known, the
              methodology describes how the investigation was conducted and
              the findings present the evidence produced by the study.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              The discussion then interprets that evidence, while the conclusion
              brings the research together. A strong structure therefore makes
              it possible for the reader to follow the research from its
              original problem through to its evidence-based conclusion.
            </p>
          </div>
        </div>
      </section>

      {/* Main structure */}
      <section
        id="paper-structure"
        className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              THE STANDARD STRUCTURE
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The major sections of a research paper
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Although requirements vary between disciplines, institutions and
              research designs, most academic research papers contain several
              core sections.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {paperSections.map((section) => (
              <article
                key={section.number}
                className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="text-sm font-bold tracking-[0.18em] text-black/40">
                    {section.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold">{section.title}</h3>

                <p className="mt-4 text-base leading-7 text-black/65">
                  {section.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Logical flow */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="rounded-2xl bg-[#ffef18] px-7 py-12 lg:px-16 lg:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/55">
              THE LOGICAL FLOW
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              Every section should answer a different part of the research
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-black/70 sm:text-lg">
              <p>
                <strong>Introduction:</strong> What is the study about, why is
                it important and what does it seek to investigate?
              </p>

              <p>
                <strong>Literature Review:</strong> What is already known about
                the subject and what gaps or issues remain?
              </p>

              <p>
                <strong>Methodology:</strong> How was the research designed and
                how was the evidence collected and analysed?
              </p>

              <p>
                <strong>Findings:</strong> What evidence did the research
                produce?
              </p>

              <p>
                <strong>Discussion:</strong> What do those findings mean in
                relation to the research questions and existing knowledge?
              </p>

              <p>
                <strong>Conclusion:</strong> What can ultimately be concluded
                from the research?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alignment */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              RESEARCH ALIGNMENT
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Keep the research problem, questions, objectives and findings
              connected
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              One of the most important principles of research-paper structure
              is alignment. The research problem establishes the issue being
              investigated. Research questions turn that issue into questions
              that can be investigated, while research objectives define what
              the study intends to accomplish.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              The methodology should provide an appropriate way to investigate
              those questions and objectives. The findings should then provide
              evidence that addresses them, with the discussion interpreting
              that evidence and the conclusion bringing the answers together.
            </p>

            <div className="mt-8 rounded-xl border border-black/10 bg-white p-6">
              <p className="text-base font-bold">
                Research problem → Questions → Objectives → Methodology →
                Data → Findings → Discussion → Conclusion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              COMMON PROBLEMS
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Structural mistakes that can weaken a research paper
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold">
                  Treating each section as independent
                </h3>

                <p className="mt-3 text-base leading-7 text-black/65">
                  The sections should work together as parts of one research
                  argument rather than appearing as disconnected pieces of
                  writing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Introducing evidence without explaining it
                </h3>

                <p className="mt-3 text-base leading-7 text-black/65">
                  Findings need to be interpreted in the discussion and related
                  back to the research questions, objectives and existing
                  literature.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Repeating the same material across sections
                </h3>

                <p className="mt-3 text-base leading-7 text-black/65">
                  Some overlap is natural, but each section should have a clear
                  purpose rather than repeating the same information throughout
                  the paper.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Ignoring institutional requirements
                </h3>

                <p className="mt-3 text-base leading-7 text-black/65">
                  Different universities, journals and disciplines may require
                  different structures, headings, word limits and formatting
                  conventions. The relevant academic guidelines should always
                  take priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm lg:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              STRUCTURE CHECKLIST
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Before submitting your research paper
            </h2>

            <ul className="mt-7 space-y-4 text-base leading-7 text-black/70 sm:text-lg">
              <li>✓ The paper follows the required academic structure.</li>
              <li>
                ✓ The introduction clearly establishes the research problem.
              </li>
              <li>
                ✓ Research questions and objectives are clearly presented and
                aligned.
              </li>
              <li>
                ✓ The literature review supports the research and establishes
                its context.
              </li>
              <li>
                ✓ The methodology clearly explains how the research was
                conducted.
              </li>
              <li>
                ✓ Findings are presented clearly and are supported by the
                collected evidence.
              </li>
              <li>
                ✓ The discussion interprets the findings rather than simply
                repeating them.
              </li>
              <li>
                ✓ The conclusion addresses the research questions and overall
                purpose of the study.
              </li>
              <li>
                ✓ All cited sources are included in the reference list using
                the required referencing style.
              </li>
              <li>
                ✓ Appendices and supporting materials are clearly labelled and
                appropriately referenced.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              CONTINUE LEARNING
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore the research process
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Explore the related guides to understand each stage of developing
              and conducting academic research in more detail.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedGuides.map((guide) => (
              <div
                key={guide.title}
                className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold">{guide.title}</h3>

                <p className="mt-4 text-base leading-7 text-black/65">
                  {guide.description}
                </p>

                <Link
                  href={guide.href}
                  className="mt-6 inline-block text-sm font-bold text-black hover:underline"
                >
                  Read the {guide.title} Guide →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-[1100px] rounded-2xl bg-[#ffef18] px-7 py-12 text-center lg:px-16 lg:py-16">
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