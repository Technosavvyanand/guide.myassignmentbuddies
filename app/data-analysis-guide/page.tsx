import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Data Analysis in Research | Methods, Process, Interpretation & Reporting",
  description:
    "Learn how to analyse research data using appropriate qualitative and quantitative methods, interpret findings and connect analysis to research questions and objectives.",
};

export default function DataAnalysisGuidePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#fff45a]">
        <div className="mx-auto max-w-[1250px] px-6 pb-20 pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/55">
              DATA ANALYSIS GUIDE
            </p>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
              How to analyse, interpret and present research data.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8 lg:text-xl">
              Learn how researchers turn collected data into meaningful
              evidence, select appropriate analytical methods, interpret
              findings and connect the results back to research questions and
              objectives.
            </p>

            <div className="mt-9">
              <a
                href="#data-analysis"
                className="inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Explore Data Analysis
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
              UNDERSTANDING DATA ANALYSIS
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Turning research data into meaningful evidence
            </h2>

            <p className="mt-6 text-base leading-8 text-black/65 sm:text-lg">
              Data analysis is the process of examining, organising and
              interpreting information collected during a research project.
              The purpose is not simply to produce tables, charts or themes,
              but to identify patterns and evidence that help answer the
              research questions.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              The appropriate approach depends on the research design and the
              type of data collected. Quantitative studies commonly work with
              numerical data and statistical techniques, while qualitative
              studies often examine words, experiences, meanings and themes.
              Mixed-method research may combine both approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Main guide */}
      <section
        id="data-analysis"
        className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              THE ANALYSIS PROCESS
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A structured approach to analysing research data
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Good analysis follows a logical process. Researchers first
              prepare and organise their data before applying analytical
              techniques that are appropriate for their research questions,
              objectives and methodology.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-black/40">
                STEP 01
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Prepare the data
              </h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Begin by organising the information collected during the
                research. Depending on the study, this may involve checking
                survey responses, transcribing interviews, organising
                documents, coding variables or removing unusable entries.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-black/40">
                STEP 02
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Check data quality
              </h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Researchers need to consider missing values, inconsistent
                responses, duplicate observations, errors and other issues
                that could affect the analysis. The checks used should be
                appropriate to the type of data and research design.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-black/40">
                STEP 03
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Select the analytical method
              </h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                The analytical technique should follow from the research
                questions, objectives, methodology and type of evidence
                collected. The method should not be selected simply because it
                is familiar or easy to use.
              </p>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-black/40">
                STEP 04
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Analyse the evidence
              </h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Apply the selected procedures systematically. Quantitative
                research may involve descriptive or inferential statistics,
                while qualitative research may involve coding, categorisation
                and thematic analysis.
              </p>
            </div>

            {/* Step 5 */}
            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-black/40">
                STEP 05
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Interpret the findings
              </h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Analysis produces evidence, but researchers must explain what
                that evidence means in relation to the research questions and
                objectives. Interpretation should remain grounded in the
                results rather than going beyond what the data supports.
              </p>
            </div>

            {/* Step 6 */}
            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-black/40">
                STEP 06
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Report the results
              </h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Present the findings clearly using appropriate tables, charts,
                statistical results, themes, quotations or other forms of
                evidence. The presentation should make it clear how the
                findings answer the research questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quantitative and qualitative */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              CHOOSING AN APPROACH
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Quantitative, qualitative and mixed-method analysis
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Different types of research data require different analytical
              approaches. The research methodology should provide the
              foundation for deciding how the evidence will be examined.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Quantitative */}
            <div className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-7">
              <h3 className="text-xl font-bold">
                Quantitative Analysis
              </h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Quantitative analysis works with numerical data. Researchers
                may use descriptive statistics to summarise the dataset and,
                where appropriate, inferential techniques to examine
                relationships, differences or other patterns.
              </p>

              <p className="mt-4 text-base leading-7 text-black/65">
                Common outputs can include frequencies, percentages, means,
                measures of variation, tables, charts and statistical test
                results.
              </p>
            </div>

            {/* Qualitative */}
            <div className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-7">
              <h3 className="text-xl font-bold">
                Qualitative Analysis
              </h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Qualitative analysis examines non-numerical information such as
                interview transcripts, observations, documents and open-ended
                responses.
              </p>

              <p className="mt-4 text-base leading-7 text-black/65">
                Researchers may code the data, identify recurring patterns,
                develop categories and construct themes that help explain
                participants' experiences, perspectives or meanings.
              </p>
            </div>

            {/* Mixed method */}
            <div className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-7">
              <h3 className="text-xl font-bold">
                Mixed-Method Analysis
              </h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Mixed-method research combines quantitative and qualitative
                evidence within the same research project.
              </p>

              <p className="mt-4 text-base leading-7 text-black/65">
                Analysis may therefore involve separate quantitative and
                qualitative procedures followed by an appropriate process for
                bringing the findings together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research questions connection */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              ALIGNMENT
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Analysis should answer the research questions
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              A strong research project maintains alignment between its
              research problem, questions, objectives, methodology, data and
              analysis. The analytical process should therefore be capable of
              producing evidence that addresses the questions the study set out
              to investigate.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              This means researchers should avoid collecting large amounts of
              information without a clear analytical purpose. Each major
              variable, question, interview theme or dataset should have a
              meaningful relationship with the objectives of the study.
            </p>
          </div>
        </div>
      </section>

      {/* Interpreting findings */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1250px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                INTERPRETATION
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Analysis is more than describing the results
              </h2>

              <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
                Reporting that a particular result occurred is only one part of
                research analysis. Researchers also need to consider what the
                result indicates in the context of the research question,
                theoretical framework and existing evidence.
              </p>

              <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
                Interpretation should be careful and evidence-based. Findings
                should not be presented as proving more than the research
                design and data can reasonably support.
              </p>
            </div>

            <div className="rounded-2xl bg-[#ffef18] p-8 lg:p-10">
              <h3 className="text-2xl font-bold">
                Questions to ask when interpreting findings
              </h3>

              <ul className="mt-6 space-y-4 text-base leading-7 text-black/70">
                <li>
                  • What patterns or relationships are visible in the data?
                </li>
                <li>
                  • How do the findings relate to each research question?
                </li>
                <li>
                  • What do the findings suggest in relation to the research
                  objectives?
                </li>
                <li>
                  • Are the findings consistent with previous research?
                </li>
                <li>
                  • Are there alternative explanations that should be
                  considered?
                </li>
                <li>
                  • What limitations affect how the findings should be
                  interpreted?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              COMMON PROBLEMS
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Common mistakes in research data analysis
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-black/10 bg-white p-6">
              <h3 className="text-lg font-bold">
                Choosing a method without considering the research question
              </h3>

              <p className="mt-3 text-base leading-7 text-black/65">
                An analytical technique should be justified by the research
                design, question and type of data rather than selected simply
                because it is available.
              </p>
            </div>

            <div className="rounded-xl border border-black/10 bg-white p-6">
              <h3 className="text-lg font-bold">
                Treating description as interpretation
              </h3>

              <p className="mt-3 text-base leading-7 text-black/65">
                Listing numbers, percentages or themes does not by itself
                explain what the findings mean for the research problem.
              </p>
            </div>

            <div className="rounded-xl border border-black/10 bg-white p-6">
              <h3 className="text-lg font-bold">
                Ignoring data quality
              </h3>

              <p className="mt-3 text-base leading-7 text-black/65">
                Missing, inconsistent or unreliable data can affect the
                credibility of the findings and should be considered during
                analysis.
              </p>
            </div>

            <div className="rounded-xl border border-black/10 bg-white p-6">
              <h3 className="text-lg font-bold">
                Making claims beyond the evidence
              </h3>

              <p className="mt-3 text-base leading-7 text-black/65">
                Conclusions should remain proportionate to the data,
                methodology, sample and limitations of the research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research workflow */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="rounded-2xl bg-[#ffef18] px-7 py-12 lg:px-16 lg:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/55">
              THE BIG PICTURE
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              From collected data to research findings
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-black/70 sm:text-lg">
              Data analysis sits between data collection and the final
              interpretation of research findings. A well-designed project
              connects these stages: the research questions guide the data
              collection, the methodology informs the analysis, and the
              analysis produces evidence that supports the findings and
              conclusions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-bold sm:text-base">
              <span className="rounded-md bg-white px-4 py-3">
                Research Questions
              </span>

              <span>→</span>

              <span className="rounded-md bg-white px-4 py-3">
                Data Collection
              </span>

              <span>→</span>

              <span className="rounded-md bg-white px-4 py-3">
                Data Analysis
              </span>

              <span>→</span>

              <span className="rounded-md bg-white px-4 py-3">
                Findings
              </span>

              <span>→</span>

              <span className="rounded-md bg-white px-4 py-3">
                Conclusion
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              CONTINUE LEARNING
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore the wider research process
            </h2>

            <p className="mt-5 text-base leading-7 text-black/65">
              Data analysis works as part of a wider research process. Explore
              the related guides to understand how research questions,
              objectives, methodology and data collection connect with
              analysis.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Link
              href="/research-questions-guide"
              className="rounded-2xl border border-black/10 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-bold">
                Research Questions →
              </h3>

              <p className="mt-3 text-base leading-7 text-black/65">
                Learn how focused research questions establish what a study
                needs to investigate.
              </p>
            </Link>

            <Link
              href="/research-objectives-guide"
              className="rounded-2xl border border-black/10 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-bold">
                Research Objectives →
              </h3>

              <p className="mt-3 text-base leading-7 text-black/65">
                Understand how research objectives translate the research
                problem into specific outcomes.
              </p>
            </Link>

            <Link
              href="/research-methodology-guide"
              className="rounded-2xl border border-black/10 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-bold">
                Research Methodology →
              </h3>

              <p className="mt-3 text-base leading-7 text-black/65">
                Explore how researchers select appropriate approaches and
                methods for a study.
              </p>
            </Link>

            <Link
              href="/data-collection-guide"
              className="rounded-2xl border border-black/10 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-bold">
                Data Collection →
              </h3>

              <p className="mt-3 text-base leading-7 text-black/65">
                Understand how primary and secondary research data can be
                collected systematically.
              </p>
            </Link>
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