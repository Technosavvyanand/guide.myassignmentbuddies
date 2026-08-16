import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MBA Thesis & Dissertation Guide | My Assignment Buddies",
  description:
    "A practical guide to MBA thesis and dissertation research, covering topic selection, research questions, literature reviews, methodology, data analysis, structure and academic writing.",
  keywords: [
    "MBA thesis",
    "MBA dissertation",
    "MBA thesis topics",
    "MBA dissertation topics",
    "MBA research methodology",
    "MBA research questions",
    "MBA literature review",
    "MBA dissertation structure",
  ],
};

export default function MBAThesisDissertationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#fff45a]">
        <div className="mx-auto max-w-[1250px] px-6 pb-20 pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/55">
              MBA Thesis & Dissertation Guides
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Practical guides for MBA thesis and dissertation research.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-black/70 lg:text-xl">
              Understand how to plan, structure and develop an MBA thesis or
              dissertation, from choosing a research topic and formulating
              research questions to reviewing the literature, selecting a
              methodology, analysing data and presenting your findings.
            </p>

            <div className="mt-9">
              <a
                href="#mba-research-guides"
                className="inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Explore MBA Guides
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              MBA Research
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Understanding the MBA thesis and dissertation process
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65">
              An MBA thesis or dissertation usually requires more than simply
              writing about a business topic. Students need to identify a
              meaningful research problem, develop appropriate research
              questions, engage with existing academic literature, select a
              suitable research methodology and present evidence-based
              conclusions.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65">
              The research process can become difficult when these stages are
              treated separately. A strong dissertation connects the research
              topic, questions, literature, methodology, analysis and
              conclusions into one coherent study.
            </p>
          </div>
        </div>
      </section>

      {/* Guide clusters */}
      <section
        id="mba-research-guides"
        className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              Explore
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              MBA Thesis & Dissertation Research Areas
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Start with the stage of your MBA research that you need to
              understand. More detailed topic-specific guides can be added as
              this knowledge hub grows.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                number: "01",
                title: "MBA Thesis & Dissertation Topics",
                description:
                  "Learn how to identify focused, relevant and researchable business and management topics for an MBA thesis or dissertation.",
              },
              {
                number: "02",
                title: "MBA Research Questions",
                description:
                  "Understand how research questions guide the scope, objectives, methodology and overall direction of an MBA study.",
              },
              {
                number: "03",
                title: "MBA Research Methodology",
                description:
                  "Explore quantitative, qualitative and mixed-method approaches and how to select a methodology that fits the research problem.",
              },
              {
                number: "04",
                title: "MBA Literature Review",
                description:
                  "Understand how to search, evaluate, organise and critically analyse academic literature relevant to a business research problem.",
              },
              {
                number: "05",
                title: "MBA Dissertation Structure",
                description:
                  "Learn how the major chapters of an MBA dissertation fit together, from the introduction and literature review to findings and conclusions.",
              },
              {
                number: "06",
                title: "MBA Data Analysis",
                description:
                  "Understand how research data can be analysed, interpreted and presented to support evidence-based findings and conclusions.",
              },
            ].map((guide) => (
              <article
                key={guide.number}
                className="rounded-xl border border-black/10 bg-white p-7 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold tracking-[0.18em] text-black/45">
                    {guide.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffef18] text-xl">
                    →
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold tracking-tight">
                  {guide.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-black/65">
                  {guide.description}
                </p>

                <p className="mt-6 text-sm font-bold text-black/75">
                  Detailed guide coming next →
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              Research Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A practical MBA dissertation roadmap
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65">
              Although university requirements vary, an MBA research project
              commonly develops through a sequence of connected stages.
              Understanding how these stages relate to one another can make the
              research process much easier to manage.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Choose and narrow the research topic",
                text: "Start with a broad business or management area and progressively narrow it into a specific researchable problem.",
              },
              {
                number: "02",
                title: "Develop the research problem and questions",
                text: "Define what the study is investigating and formulate research questions and objectives that can realistically be addressed.",
              },
              {
                number: "03",
                title: "Review existing research",
                text: "Examine relevant academic literature to understand existing knowledge, debates, theories and potential research gaps.",
              },
              {
                number: "04",
                title: "Select the methodology",
                text: "Choose an appropriate research design, data collection approach and analytical method based on the research questions.",
              },
              {
                number: "05",
                title: "Collect and analyse evidence",
                text: "Gather relevant primary or secondary data and apply appropriate techniques to analyse and interpret the evidence.",
              },
              {
                number: "06",
                title: "Develop conclusions and recommendations",
                text: "Connect the findings back to the research questions and explain their implications, limitations and potential recommendations.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-xl border border-black/10 p-7"
              >
                <span className="text-sm font-bold tracking-[0.18em] text-black/45">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 text-base leading-7 text-black/65">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Common challenges */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              Common Challenges
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Where MBA dissertation research often becomes difficult
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65">
              Many research problems are not caused by writing alone. They
              often begin earlier, when the topic is too broad, the research
              question is unclear or the methodology does not match the
              objectives of the study.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Choosing a topic that is interesting but too broad to research effectively.",
              "Turning a general business problem into clear research questions and objectives.",
              "Finding and critically evaluating relevant academic literature.",
              "Selecting a research methodology that fits the research questions.",
              "Managing and interpreting qualitative or quantitative data.",
              "Connecting findings, conclusions and recommendations to the original research objectives.",
            ].map((challenge) => (
              <div
                key={challenge}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <p className="text-base leading-7 text-black/70">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              MBA thesis and dissertation questions
            </h2>
          </div>

          <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
            <details className="py-6">
              <summary className="cursor-pointer text-lg font-bold">
                What is an MBA thesis or dissertation?
              </summary>

              <p className="mt-4 text-base leading-7 text-black/65">
                An MBA thesis or dissertation is an extended research project
                in which a student investigates a defined business,
                management or organisational problem using an appropriate
                academic research process.
              </p>
            </details>

            <details className="py-6">
              <summary className="cursor-pointer text-lg font-bold">
                How do I choose an MBA dissertation topic?
              </summary>

              <p className="mt-4 text-base leading-7 text-black/65">
                A useful starting point is to identify a business or management
                area that interests you and then narrow it to a specific,
                researchable problem for which relevant academic literature and
                evidence can be found.
              </p>
            </details>

            <details className="py-6">
              <summary className="cursor-pointer text-lg font-bold">
                What methodology should an MBA dissertation use?
              </summary>

              <p className="mt-4 text-base leading-7 text-black/65">
                There is no single methodology that is appropriate for every
                MBA dissertation. The research questions, objectives, type of
                evidence required and nature of the research problem should
                guide the methodological choice.
              </p>
            </details>

            <details className="py-6">
              <summary className="cursor-pointer text-lg font-bold">
                What are the main sections of an MBA dissertation?
              </summary>

              <p className="mt-4 text-base leading-7 text-black/65">
                Requirements vary between universities, but many dissertations
                include an introduction, literature review, methodology,
                findings or analysis, discussion, conclusion and references,
                along with other sections required by the institution.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#fff45a] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/50">
            Keep Exploring
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Build your MBA research knowledge step by step.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70">
            Explore the individual research areas as the Guide platform
            develops, from MBA thesis topics and research questions to
            methodology, literature reviews and data analysis.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
          >
            Back to All Guides
          </Link>
        </div>
      </section>
    </main>
  );
}