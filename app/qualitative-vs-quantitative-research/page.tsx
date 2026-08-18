import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Qualitative vs Quantitative Research | Differences, Methods & Examples",
  description:
    "Compare qualitative and quantitative research methods, including data types, sampling, data collection, analysis, strengths, limitations and when to use each approach.",
};

const comparisonAreas = [
  {
    title: "Type of Data",
    qualitative:
      "Primarily non-numerical data such as interviews, observations, documents, experiences and open-ended responses.",
    quantitative:
      "Primarily numerical data that can be measured, structured and analysed statistically.",
  },
  {
    title: "Research Focus",
    qualitative:
      "Often focuses on meanings, experiences, perceptions, processes and how people understand a situation.",
    quantitative:
      "Often focuses on measurement, relationships, differences, patterns and testing predefined expectations.",
  },
  {
    title: "Common Methods",
    qualitative:
      "Interviews, focus groups, observations, case studies and document analysis.",
    quantitative:
      "Surveys, experiments, structured observations and analysis of numerical datasets.",
  },
  {
    title: "Analysis",
    qualitative:
      "May involve coding, categorisation, thematic analysis and interpretation of patterns within the data.",
    quantitative:
      "May involve descriptive statistics, inferential statistics, correlation, regression and other statistical techniques.",
  },
];

export default function QualitativeVsQuantitativeResearchPage() {
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
              Qualitative vs Quantitative Research: Methods, Differences &
              Examples.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8 lg:text-xl">
              Understand the differences between qualitative and quantitative
              research, how each approach collects and analyses evidence and
              how researchers decide which approach is appropriate for a study.
            </p>

            <div className="mt-9">
              <a
                href="#comparison"
                className="inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Compare the Approaches
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
              RESEARCH METHODS
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What is the difference between qualitative and quantitative
              research?
            </h2>

            <p className="mt-6 text-base leading-8 text-black/65 sm:text-lg">
              Qualitative and quantitative research represent different ways
              of investigating research problems and working with evidence.
              Qualitative research commonly focuses on meanings, experiences,
              perceptions and processes, while quantitative research commonly
              focuses on measurement, numerical data and relationships between
              variables.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              The distinction is useful when designing a study, but the choice
              should ultimately be guided by the research problem and
              questions. The most appropriate method is the one that allows the
              researcher to answer those questions effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Core comparison */}
      <section
        id="comparison"
        className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              SIDE-BY-SIDE COMPARISON
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Qualitative vs quantitative research
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              The following comparison highlights common differences between
              the two approaches.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            <div className="grid grid-cols-1 border-b border-black/10 md:grid-cols-3">
              <div className="hidden bg-[#ffef18] p-6 font-bold md:block">
                Research Dimension
              </div>

              <div className="bg-[#ffef18] p-6 font-bold">
                Qualitative Research
              </div>

              <div className="bg-[#ffef18] p-6 font-bold">
                Quantitative Research
              </div>
            </div>

            {comparisonAreas.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-1 border-b border-black/10 last:border-b-0 md:grid-cols-3"
              >
                <div className="bg-[#fafafa] p-6 font-bold">
                  {item.title}
                </div>

                <div className="p-6 text-base leading-7 text-black/65">
                  {item.qualitative}
                </div>

                <div className="p-6 text-base leading-7 text-black/65">
                  {item.quantitative}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualitative */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                QUALITATIVE
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Understanding experiences and meaning
              </h2>

              <p className="mt-5 text-base leading-8 text-black/65">
                Qualitative research is commonly used when researchers want to
                understand how people experience, interpret or make sense of a
                particular phenomenon. It can provide detailed contextual
                information that may be difficult to capture through numerical
                measurement alone.
              </p>

              <h3 className="mt-7 text-lg font-bold">
                Common qualitative methods
              </h3>

              <ul className="mt-4 space-y-3 text-base leading-7 text-black/65">
                <li>• Semi-structured or in-depth interviews</li>
                <li>• Focus groups</li>
                <li>• Observation</li>
                <li>• Case studies</li>
                <li>• Document and textual analysis</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                QUANTITATIVE
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Measuring variables and relationships
              </h2>

              <p className="mt-5 text-base leading-8 text-black/65">
                Quantitative research is commonly used when a study requires
                measurement, numerical comparison or statistical analysis. It
                can help researchers examine patterns and relationships within
                structured datasets.
              </p>

              <h3 className="mt-7 text-lg font-bold">
                Common quantitative methods
              </h3>

              <ul className="mt-4 space-y-3 text-base leading-7 text-black/65">
                <li>• Structured surveys</li>
                <li>• Experiments</li>
                <li>• Structured observations</li>
                <li>• Secondary numerical datasets</li>
                <li>• Statistical analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths and limitations */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              RESEARCH DESIGN
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Strengths and limitations
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">Qualitative research</h3>

              <div className="mt-6">
                <h4 className="font-bold">Potential strengths</h4>

                <ul className="mt-3 space-y-2 text-base leading-7 text-black/65">
                  <li>• Can provide rich contextual information</li>
                  <li>• Can explore complex experiences and meanings</li>
                  <li>• Can support detailed investigation of processes</li>
                  <li>• Can allow participants to explain perspectives in depth</li>
                </ul>
              </div>

              <div className="mt-7">
                <h4 className="font-bold">Potential limitations</h4>

                <ul className="mt-3 space-y-2 text-base leading-7 text-black/65">
                  <li>• Analysis can be time-intensive</li>
                  <li>• Interpretation requires careful methodological justification</li>
                  <li>• Findings may depend strongly on research context</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">Quantitative research</h3>

              <div className="mt-6">
                <h4 className="font-bold">Potential strengths</h4>

                <ul className="mt-3 space-y-2 text-base leading-7 text-black/65">
                  <li>• Supports structured measurement</li>
                  <li>• Can facilitate statistical comparison</li>
                  <li>• Can examine relationships between variables</li>
                  <li>• Can work effectively with large structured datasets</li>
                </ul>
              </div>

              <div className="mt-7">
                <h4 className="font-bold">Potential limitations</h4>

                <ul className="mt-3 space-y-2 text-base leading-7 text-black/65">
                  <li>• May provide less contextual detail</li>
                  <li>• Results depend on appropriate measurement and study design</li>
                  <li>• Statistical findings require careful interpretation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing method */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="rounded-2xl bg-[#ffef18] px-7 py-12 lg:px-16 lg:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/55">
              METHODOLOGICAL DECISION
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              How do you choose between qualitative and quantitative research?
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 sm:text-lg">
              Start with the research problem and questions rather than with a
              preferred method. If the study requires detailed understanding of
              experiences, meanings or processes, qualitative methods may be
              appropriate. If the study requires measurement, numerical
              comparison or statistical examination of relationships,
              quantitative methods may be appropriate.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 sm:text-lg">
              Some research questions benefit from combining different forms
              of evidence. In such cases, researchers may consider a mixed
              methods design that integrates qualitative and quantitative
              components.
            </p>
          </div>
        </div>
      </section>

      {/* Mixed methods */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              BEYOND THE BINARY
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What about mixed methods research?
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Mixed methods research combines qualitative and quantitative
              components within a broader research design. This can allow a
              researcher to investigate different aspects of a research problem
              using complementary forms of evidence.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              A mixed methods study should not simply collect two types of data.
              The qualitative and quantitative components should have a clear
              relationship to the research questions and the overall design of
              the study.
            </p>
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                RELATED HUB
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                Research Methodology Guide
              </h2>

              <p className="mt-4 text-base leading-7 text-black/65">
                Explore research philosophy, research approaches, methodology,
                data collection and data analysis.
              </p>

              <Link
                href="/research-methodology-guide"
                className="mt-6 inline-block text-sm font-bold text-black hover:underline"
              >
                Research Methodology Guide →
              </Link>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                RELATED GUIDE
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                Research Approach Guide
              </h2>

              <p className="mt-4 text-base leading-7 text-black/65">
                Learn how deductive, inductive and abductive approaches connect
                theory, evidence and explanation.
              </p>

              <Link
                href="/research-approach-guide"
                className="mt-6 inline-block text-sm font-bold text-black hover:underline"
              >
                Research Approach Guide →
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