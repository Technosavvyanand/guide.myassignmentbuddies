import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Data Collection in Research | Primary & Secondary Data, Methods & Sampling",
  description:
    "Learn how to collect research data effectively using primary and secondary data, surveys, interviews, observations, datasets and appropriate sampling methods.",
};

const collectionMethods = [
  {
    title: "Surveys and Questionnaires",
    description:
      "Surveys and questionnaires are commonly used to collect structured responses from a larger number of participants. They can be useful when researchers need comparable responses that can be analysed systematically.",
  },
  {
    title: "Interviews",
    description:
      "Interviews allow researchers to explore participants' experiences, opinions and perspectives in greater depth. They may be structured, semi-structured or unstructured depending on the research design.",
  },
  {
    title: "Observation",
    description:
      "Observation involves systematically recording behaviours, activities or events as they occur. It can be particularly useful when the research concerns practices, interactions or real-world behaviour.",
  },
  {
    title: "Focus Groups",
    description:
      "Focus groups bring several participants together to discuss a defined topic. The interaction between participants can provide insights into shared experiences, differing perspectives and the reasons behind particular views.",
  },
  {
    title: "Experiments",
    description:
      "Experiments involve deliberately controlling or manipulating variables to examine relationships or effects. They are commonly associated with quantitative research and controlled research designs.",
  },
  {
    title: "Existing Datasets and Documents",
    description:
      "Researchers may use existing datasets, reports, organisational records, government statistics, academic databases or other documentary sources when appropriate to the research question.",
  },
];

const dataStages = [
  {
    number: "01",
    title: "Define the data requirement",
    description:
      "Start with the research questions and objectives. Determine exactly what information or evidence is required to answer them.",
  },
  {
    number: "02",
    title: "Choose the data source",
    description:
      "Decide whether primary data, secondary data or a combination of both is most appropriate for the research.",
  },
  {
    number: "03",
    title: "Select participants or sources",
    description:
      "Define the population, sampling approach and inclusion or exclusion criteria where participants or specific sources are involved.",
  },
  {
    number: "04",
    title: "Design the collection instrument",
    description:
      "Prepare the questionnaire, interview guide, observation framework, extraction form or other instrument needed to collect the evidence consistently.",
  },
  {
    number: "05",
    title: "Collect and record the data",
    description:
      "Carry out the data-collection process systematically while maintaining appropriate records and protecting participant information.",
  },
  {
    number: "06",
    title: "Prepare the collected data",
    description:
      "Check, organise and document the collected material so that it can be analysed using the selected research methodology.",
  },
];

export default function DataCollectionGuidePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#fff45a]">
        <div className="mx-auto max-w-[1250px] px-6 pb-20 pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/55">
              DATA COLLECTION GUIDE
            </p>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
              How to collect research data effectively
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8 lg:text-xl">
              Understand how researchers identify the data they need, choose
              appropriate sources and methods, select participants, design
              collection instruments and prepare evidence for analysis.
            </p>

            <div className="mt-9">
              <a
                href="#data-collection"
                className="inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Explore Data Collection
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
              What is data collection in research?
            </h2>

            <p className="mt-6 text-base leading-8 text-black/65 sm:text-lg">
              Data collection is the systematic process of gathering the
              information and evidence required to address a research problem,
              answer research questions and achieve the objectives of a study.
              The data collected may take many forms, including numerical
              measurements, survey responses, interview transcripts,
              observations, documents or existing datasets.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Effective data collection begins before researchers start
              gathering information. The research questions and methodology
              should determine what evidence is required and how that evidence
              should be obtained. Collecting large amounts of information is
              not necessarily useful if it does not contribute to answering the
              research questions.
            </p>
          </div>
        </div>
      </section>

      {/* Connection to research design */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              START WITH THE RESEARCH
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Data collection should follow the research questions
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              A strong data-collection plan works backwards from the questions
              the study needs to answer. Researchers should first understand
              what their study is trying to discover and then determine what
              evidence would allow those questions to be answered.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">Research Questions</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Identify what the study needs to find out and what information
                is necessary to answer each question.
              </p>

              <Link
                href="/research-questions-guide"
                className="mt-6 inline-block text-sm font-bold text-black hover:underline"
              >
                Read the Research Questions Guide →
              </Link>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">Research Objectives</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Use the research objectives to clarify the specific outcomes
                the data collection should help achieve.
              </p>

              <Link
                href="/research-objectives-guide"
                className="mt-6 inline-block text-sm font-bold text-black hover:underline"
              >
                Read the Research Objectives Guide →
              </Link>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">Research Methodology</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                The methodology provides the broader research design within
                which the data will be collected and analysed.
              </p>

              <Link
                href="/research-methodology-guide"
                className="mt-6 inline-block text-sm font-bold text-black hover:underline"
              >
                Read the Research Methodology Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Primary and secondary data */}
      <section id="data-collection" className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              DATA SOURCES
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Primary and secondary research data
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              One of the first decisions in data collection is determining
              whether the research will require new information collected
              directly by the researcher, existing information produced by
              other sources, or a combination of both.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                PRIMARY DATA
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Data collected directly for the study
              </h3>

              <p className="mt-5 text-base leading-8 text-black/65">
                Primary data is collected directly by the researcher for the
                purposes of the particular study. Examples include responses
                collected through questionnaires, interviews, experiments or
                observations.
              </p>

              <ul className="mt-6 space-y-3 text-base leading-7 text-black/70">
                <li>• Surveys and questionnaires</li>
                <li>• Interviews</li>
                <li>• Observations</li>
                <li>• Experiments and measurements</li>
                <li>• Focus groups</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                SECONDARY DATA
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Evidence that already exists
              </h3>

              <p className="mt-5 text-base leading-8 text-black/65">
                Secondary data refers to information that has already been
                collected or produced by another researcher, organisation,
                institution or public body and is subsequently used for a
                research purpose.
              </p>

              <ul className="mt-6 space-y-3 text-base leading-7 text-black/70">
                <li>• Government statistics</li>
                <li>• Existing research datasets</li>
                <li>• Organisational records</li>
                <li>• Reports and official documents</li>
                <li>• Publicly available databases</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              COLLECTION METHODS
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Common methods of collecting research data
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Different research questions require different forms of evidence.
              The appropriate collection method should therefore be selected
              according to the research design, the type of information needed
              and the characteristics of the study population or data source.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {collectionMethods.map((method) => (
              <div
                key={method.title}
                className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold">{method.title}</h3>

                <p className="mt-4 text-base leading-7 text-black/65">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sampling */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              SAMPLING
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Deciding who or what to collect data from
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              When a study cannot collect information from an entire
              population, researchers may select a sample. Sampling involves
              defining the population of interest and choosing a systematic
              approach for selecting the participants, cases or sources that
              will contribute to the research.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              The sampling strategy should be appropriate to the research
              methodology and clearly explained. Researchers should also
              consider sample size, eligibility criteria, accessibility and
              potential sources of sampling bias.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-7">
              <h3 className="text-xl font-bold">Probability sampling</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Probability approaches give members of the defined population
                a known basis for selection. They are commonly associated with
                quantitative studies where researchers want to make
                generalisations from a sample to a wider population.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-7">
              <h3 className="text-xl font-bold">Non-probability sampling</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Non-probability approaches do not rely on random selection.
                They may be appropriate where researchers need particular
                participants, specialised knowledge or access to a specific
                group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instruments */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              RESEARCH INSTRUMENTS
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Designing tools for consistent data collection
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              A research instrument is the tool or framework used to collect
              data. Depending on the research design, this might be a
              questionnaire, interview schedule, observation checklist,
              measurement instrument or structured data-extraction form.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Instruments should be designed around the research questions and
              objectives. Questions or measures should be clear, relevant and
              appropriate for the participants and the type of evidence the
              study requires.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-[#ffef18] px-7 py-10 lg:px-12">
            <h3 className="text-2xl font-bold">
              Pilot testing can improve the collection process
            </h3>

            <p className="mt-4 max-w-4xl text-base leading-8 text-black/70 sm:text-lg">
              Where appropriate, researchers can test a questionnaire,
              interview guide or other collection instrument before the main
              study. A pilot can reveal unclear questions, technical problems,
              missing response options or practical difficulties in the
              collection process.
            </p>
          </div>
        </div>
      </section>

      {/* Ethics */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              RESEARCH ETHICS
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Collecting data responsibly
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Data collection involving human participants requires careful
              consideration of ethical responsibilities. Researchers should
              understand the requirements of their institution and study before
              collecting participant data.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 p-7">
              <h3 className="text-xl font-bold">
                Informed participation
              </h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Participants should receive appropriate information about the
                study and understand what participation involves before
                providing consent.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 p-7">
              <h3 className="text-xl font-bold">
                Privacy and confidentiality
              </h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Researchers should handle participant information responsibly
                and follow applicable institutional and legal requirements for
                privacy, confidentiality and data protection.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 p-7">
              <h3 className="text-xl font-bold">
                Voluntary participation
              </h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Participation should be voluntary, and researchers should be
                attentive to situations where participants could experience
                inappropriate pressure or coercion.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 p-7">
              <h3 className="text-xl font-bold">
                Secure data handling
              </h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Collected research data should be stored, accessed and retained
                in accordance with the requirements of the research project and
                relevant institutional policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data quality */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              DATA QUALITY
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Collecting useful and trustworthy evidence
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Good data collection is not simply about obtaining a large
              quantity of information. Researchers need to consider whether
              the evidence is relevant to the research questions and whether
              the collection process produces sufficiently consistent and
              credible information.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">Validity</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Consider whether the collection method and instrument actually
                capture the information the study intends to investigate.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">Reliability</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Consider whether the collection process is sufficiently
                consistent to produce dependable evidence.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">Bias</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Identify factors in the sample, instrument or collection
                process that could systematically influence the evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              PRACTICAL WORKFLOW
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A simple data-collection workflow
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Although the exact process varies between studies, the following
              sequence provides a useful framework for planning and documenting
              data collection.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {dataStages.map((stage) => (
              <div
                key={stage.number}
                className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-7"
              >
                <p className="text-sm font-bold tracking-[0.18em] text-black/40">
                  {stage.number}
                </p>

                <h3 className="mt-3 text-xl font-bold">{stage.title}</h3>

                <p className="mt-4 text-base leading-7 text-black/65">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection to analysis */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="rounded-2xl bg-[#ffef18] px-7 py-12 lg:px-16 lg:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/55">
              WHAT COMES NEXT?
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              Collected data must eventually answer the research questions
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-black/70 sm:text-lg">
              Data collection is only one stage of the research process. Once
              the evidence has been collected and prepared, researchers need
              to analyse and interpret it in a way that addresses the research
              questions and objectives.
            </p>

            <div className="mt-8">
              <Link
                href="/data-analysis-guide"
                className="inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Explore the Data Analysis Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research journey links */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              CONTINUE THE RESEARCH JOURNEY
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore the other research guides
            </h2>

            <p className="mt-5 text-base leading-7 text-black/65">
              Data collection sits within a larger research process. Explore
              the other guides to understand how the stages connect.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/research-topics-guide"
              className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-7 transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-bold">Research Topics</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Start by developing a focused and manageable research topic.
              </p>

              <span className="mt-6 inline-block text-sm font-bold">
                Read the Guide →
              </span>
            </Link>

            <Link
              href="/literature-review-guide"
              className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-7 transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-bold">Literature Reviews</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Understand how existing research informs the study and its
                research questions.
              </p>

              <span className="mt-6 inline-block text-sm font-bold">
                Read the Guide →
              </span>
            </Link>

            <Link
              href="/research-methodology-guide"
              className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-7 transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-bold">Research Methodology</h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Explore how research design influences the methods used to
                collect and analyse evidence.
              </p>

              <span className="mt-6 inline-block text-sm font-bold">
                Read the Guide →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
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