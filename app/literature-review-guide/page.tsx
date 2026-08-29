import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Literature Review Guide | How to Find, Evaluate & Synthesise Research",
  description:
    "Learn how to conduct a literature review, find and evaluate academic sources, organise research, identify gaps, synthesise evidence and connect literature to your research questions.",
};

const reviewApproaches = [
  {
    title: "Thematic",
    description:
      "Organise the literature around recurring themes, concepts or issues identified across different studies.",
  },
  {
    title: "Chronological",
    description:
      "Trace how ideas, theories or research findings have developed over time.",
  },
  {
    title: "Methodological",
    description:
      "Compare studies according to the research methods, approaches or forms of evidence they use.",
  },
  {
    title: "Theoretical",
    description:
      "Examine how different theories or conceptual perspectives have been used to understand the research problem.",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Define the research focus",
    description:
      "Start with a clear research topic, problem, question or set of objectives so that the literature search has a defined direction.",
  },
  {
    number: "02",
    title: "Search for relevant literature",
    description:
      "Develop useful keywords and search combinations and identify academic sources that are directly relevant to the research focus.",
  },
  {
    number: "03",
    title: "Screen and evaluate sources",
    description:
      "Assess the relevance, credibility, quality and methodological strengths and limitations of the sources you find.",
  },
  {
    number: "04",
    title: "Organise the evidence",
    description:
      "Group related studies, concepts, theories and findings into a logical structure rather than treating every source separately.",
  },
  {
    number: "05",
    title: "Compare and synthesise",
    description:
      "Identify agreements, disagreements, patterns, contradictions and developments across the literature.",
  },
  {
    number: "06",
    title: "Identify the research gap",
    description:
      "Use the evidence you have reviewed to establish what remains unclear, under-researched or unresolved.",
  },
];

export default function LiteratureReviewGuidePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#fff45a]">
        <div className="mx-auto max-w-[1250px] px-6 pb-20 pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/55">
              LITERATURE REVIEW GUIDE
            </p>

            <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
              How to conduct a strong literature review for academic research.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8 lg:text-xl">
              Learn how to find relevant academic literature, evaluate
              research critically, organise sources, synthesise evidence and
              identify the research gaps that shape a strong academic study.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#literature-review"
                className="inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Explore the Guide
              </a>

              <Link
                href="/research-paper-writing"
                className="inline-block rounded-md border-2 border-black px-7 py-3 text-base font-bold text-black transition-transform hover:scale-[1.02]"
              >
                Research Paper Writing Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="literature-review" className="bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-16 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              UNDERSTANDING THE LITERATURE REVIEW
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What is a literature review?
            </h2>

            <p className="mt-6 text-base leading-8 text-black/65 sm:text-lg">
              A literature review is a structured examination of existing
              academic research related to a particular topic, problem or
              research question. It involves finding relevant sources,
              evaluating what they contribute and examining how their ideas,
              methods and findings relate to one another.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              A strong literature review does more than list or summarise
              individual articles. It develops an understanding of the existing
              body of knowledge and shows where studies agree, disagree,
              complement one another or leave important questions unanswered.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              WHY IT MATTERS
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Why is a literature review important?
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Reviewing previous research provides the academic foundation on
              which a new study can be developed.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Establish existing knowledge",
                description:
                  "A literature review helps establish what researchers already know about the topic and which ideas or findings have received substantial attention.",
              },
              {
                title: "Provide research context",
                description:
                  "Previous studies place the research problem in a wider academic and theoretical context and help explain why the study matters.",
              },
              {
                title: "Identify research gaps",
                description:
                  "Careful comparison of existing research can reveal unanswered questions, limitations, inconsistencies and areas requiring further investigation.",
              },
              {
                title: "Support research decisions",
                description:
                  "The literature can inform the development of research questions, objectives, theoretical perspectives and methodological choices.",
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

      {/* Finding sources */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              LITERATURE SEARCH
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Finding relevant academic literature
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              An effective literature review begins with a focused search.
              Before searching, identify the main concepts contained in the
              research topic or question and develop keywords and related
              terms that can be used to locate relevant studies.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Start with key concepts",
                description:
                  "Break the research question or topic into its main concepts and identify alternative terms, phrases and related ideas.",
              },
              {
                title: "Use academic sources",
                description:
                  "Look for scholarly journal articles, academic books, conference papers, theses and other credible research sources appropriate to the subject.",
              },
              {
                title: "Refine the search",
                description:
                  "Use combinations of keywords and progressively narrow the search according to relevance, publication period, subject area and research focus.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-[#f7f7f7] p-7"
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

      {/* Evaluating sources */}
      <section className="bg-[#202020] px-6 py-16 text-white lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/50">
              CRITICAL EVALUATION
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Do not treat every source as equally useful
            </h2>

            <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
              Finding a large number of papers is not the same as conducting a
              strong literature review. Sources should be examined critically
              to determine how useful and trustworthy they are for the
              research.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Relevance",
                description:
                  "Does the source directly contribute to the research topic, question, problem or theoretical discussion?",
              },
              {
                title: "Credibility",
                description:
                  "Is the source academically credible, and is the research supported by appropriate evidence and scholarly reasoning?",
              },
              {
                title: "Methodology",
                description:
                  "Are the methods used by the researchers appropriate for the claims and questions being investigated?",
              },
              {
                title: "Limitations",
                description:
                  "What limitations, assumptions or weaknesses might affect how the findings should be interpreted?",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/15 p-6"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-base leading-7 text-white/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organising */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              ORGANISING THE LITERATURE
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              How should a literature review be organised?
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              There is no single structure that works for every research
              project. The organisation should make relationships between
              studies and ideas clear to the reader.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {reviewApproaches.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-6"
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

      {/* Summary vs synthesis */}
      <section className="bg-[#fff45a] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/55">
                A COMMON CHALLENGE
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Summary is not the same as synthesis
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-black/70 sm:text-lg">
                Summarising explains what an individual study says. Synthesis
                goes further by bringing multiple sources together and
                examining their relationships.
              </p>

              <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">
                A synthesised literature review can compare findings, identify
                patterns, explain disagreements and show how different studies
                contribute to the broader research discussion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research gaps */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              RESEARCH GAPS
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Using the literature to identify what is missing
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              One of the most important functions of a literature review is to
              establish what remains insufficiently understood. A research gap
              can emerge when existing studies leave a question unanswered,
              produce conflicting findings, overlook a particular context or
              population, or have methodological and conceptual limitations.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              The purpose is not to claim that nobody has ever studied the
              topic. Instead, the review should demonstrate a meaningful area
              where additional research can contribute to existing knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Connecting research */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="rounded-2xl bg-white p-7 shadow-sm lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              CONNECTING THE RESEARCH
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From literature to research questions and methodology
            </h2>

            <p className="mt-5 max-w-4xl text-base leading-8 text-black/65 sm:text-lg">
              A literature review should connect naturally with the rest of
              the research project. The literature helps establish the
              research context and gap, while the research problem and
              questions define what the study needs to investigate. The
              methodology then determines how the required evidence will be
              collected and analysed.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold">
              <Link
                href="/research-topics-guide"
                className="rounded-full border border-black/15 px-4 py-2 hover:underline"
              >
                Research Topics →
              </Link>

              <Link
                href="/research-problem-guide"
                className="rounded-full border border-black/15 px-4 py-2 hover:underline"
              >
                Research Problems →
              </Link>

              <Link
                href="/research-questions-guide"
                className="rounded-full border border-black/15 px-4 py-2 hover:underline"
              >
                Research Questions →
              </Link>

              <Link
                href="/research-objectives-guide"
                className="rounded-full border border-black/15 px-4 py-2 hover:underline"
              >
                Research Objectives →
              </Link>

              <Link
                href="/research-methodology-guide"
                className="rounded-full border border-black/15 px-4 py-2 hover:underline"
              >
                Research Methodology →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              PRACTICAL WORKFLOW
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A practical literature review workflow
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              The process can be approached as a sequence of connected
              research tasks rather than as a simple exercise in collecting
              references.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {workflowSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-7"
              >
                <span className="text-sm font-bold tracking-[0.15em] text-black/40">
                  {step.number}
                </span>

                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>

                <p className="mt-4 text-base leading-7 text-black/65">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              AVOID THESE PROBLEMS
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Common literature review mistakes
            </h2>
          </div>

          <div className="mt-10 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
            {[
              {
                title: "Listing sources without connecting them",
                description:
                  "A sequence of summaries does not demonstrate how the studies relate to one another.",
              },
              {
                title: "Using sources simply because they are available",
                description:
                  "The number of references matters less than their relevance, credibility and contribution to the research.",
              },
              {
                title: "Describing findings without critical evaluation",
                description:
                  "A strong review considers the strengths, limitations, methods and implications of existing research.",
              },
              {
                title: "Making unsupported claims about a research gap",
                description:
                  "A gap should emerge from the literature reviewed rather than being asserted without sufficient evidence.",
              },
              {
                title: "Losing connection with the research question",
                description:
                  "The literature review should remain focused on the knowledge needed to understand and answer the research question.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="grid gap-3 p-6 md:grid-cols-[260px_1fr] md:gap-8"
              >
                <h3 className="font-bold">{item.title}</h3>

                <p className="text-base leading-7 text-black/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              FREQUENT QUESTIONS
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Literature review FAQs
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {[
              {
                question: "How many sources should a literature review contain?",
                answer:
                  "There is no universal number. The appropriate number depends on the research topic, academic level, discipline, scope of the study and amount of relevant literature available.",
              },
              {
                question: "Should a literature review only include recent sources?",
                answer:
                  "Not necessarily. Recent research can demonstrate the current state of knowledge, while older influential studies may be important for established theories, concepts and foundational research.",
              },
              {
                question: "Can a literature review be organised by author?",
                answer:
                  "It can be, but organising the review around themes, concepts, theories, methods or developments will often make relationships between studies clearer than simply discussing one author after another.",
              },
              {
                question: "What is the difference between a literature review and an annotated bibliography?",
                answer:
                  "An annotated bibliography generally presents individual sources with descriptions or evaluations. A literature review brings relevant sources together to develop a connected analysis of the existing body of research.",
              },
            ].map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-black/10 p-6"
              >
                <h3 className="text-lg font-bold">{item.question}</h3>

                <p className="mt-3 text-base leading-7 text-black/65">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#fff45a] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/55">
            CONTINUE YOUR RESEARCH JOURNEY
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Explore the complete research paper writing guide
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
            Continue exploring research topics, problems, questions,
            objectives and methodology through the Research Paper Writing
            knowledge hub.
          </p>

          <Link
            href="/research-paper-writing"
            className="mt-8 inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
          >
            Explore Research Paper Writing →
          </Link>
        </div>
      </section>
    </div>
  );
}