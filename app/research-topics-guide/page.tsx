import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Research Topics Guide | How to Choose, Narrow & Finalise a Research Topic",
  description:
    "Learn how to choose, evaluate and finalise a research topic. Explore practical guidance on research interests, literature gaps, feasibility, scope, research questions and dissertation topic selection.",
};

const relatedGuides = [
  {
    title: "Research Problems Guide",
    description:
      "Understand how a broad area of interest can be developed into a focused research problem and meaningful research gap.",
    href: "/research-problem-guide",
  },
  {
    title: "Research Questions Guide",
    description:
      "Learn how to turn a research topic and problem into focused research questions that guide the study.",
    href: "/research-questions-guide",
  },
  {
    title: "Research Methodology Guide",
    description:
      "Explore how qualitative, quantitative and mixed-method approaches influence research planning and topic selection.",
    href: "/research-methodology-guide",
  },
  {
    title: "Research Approach Guide",
    description:
      "Understand how different research approaches can shape the way a research topic is investigated.",
    href: "/research-approach-guide",
  },
];

export default function ResearchTopicsGuidePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#fff45a]">
        <div className="mx-auto max-w-[1250px] px-6 pb-20 pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/55">
              RESEARCH TOPICS GUIDE
            </p>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
              How to choose, develop and finalise a strong research topic.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8 lg:text-xl">
              Choosing a research topic is one of the most important decisions
              in an academic research project. A strong topic should be
              interesting, focused, feasible and capable of supporting a
              meaningful investigation.
            </p>

            <div className="mt-9">
              <a
                href="#research-topic-guide"
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
              A research topic is the starting point of the research journey
            </h2>

            <p className="mt-6 text-base leading-8 text-black/65 sm:text-lg">
              A research topic provides the initial direction for an academic
              investigation. It identifies the broad subject or phenomenon that
              a researcher wants to understand, analyse or investigate.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              However, a broad topic is rarely enough for a dissertation,
              thesis or research paper. The topic normally needs to be explored,
              narrowed and refined before it can become a clear research
              problem, research question and set of objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow Image */}
      <section
        id="research-topic-guide"
        className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              STEP-BY-STEP WORKFLOW
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From a broad idea to a final research topic
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65 sm:text-lg">
              Selecting a research topic is usually a process rather than a
              single decision. Researchers can move from a broad area of
              interest through preliminary research, feasibility assessment,
              research questions and proposal development before finalising the
              topic.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            <Image
              src="/images/research_topic.png"
              alt="Six-step workflow for selecting and finalising a dissertation research topic"
              width={1536}
              height={1024}
              className="h-auto w-full"
              priority
            />
          </div>

          <p className="mt-4 text-center text-sm text-black/50">
            A practical workflow for selecting and finalising a dissertation
            research topic.
          </p>
        </div>
      </section>

      {/* Step 1 */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              STEP 1
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Start with broad areas of interest
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              The first stage is to identify areas that genuinely interest you.
              Your starting point may come from coursework, previous academic
              work, professional experience, current debates, personal
              curiosity or a subject that you would like to understand in
              greater depth.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              At this stage, the goal is not necessarily to create the final
              dissertation title. Instead, identify several possible areas and
              consider which ones have enough academic substance to investigate.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                "Subjects you enjoyed during your coursework",
                "Problems encountered in professional practice",
                "Current academic or industry debates",
                "Questions raised by previous research",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-black/10 bg-[#f7f7f7] p-5"
                >
                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              STEP 2
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Conduct a preliminary literature review
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Once you have identified potential areas, examine the existing
              academic literature. This preliminary review helps you understand
              what has already been studied and where uncertainty, disagreement
              or gaps may exist.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              The purpose at this stage is not to complete the literature review
              for your final paper. Instead, it helps you determine whether your
              initial idea has enough academic material and whether there is a
              useful direction for further investigation.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">
                Questions to ask during the preliminary review
              </h3>

              <ul className="mt-5 space-y-3 text-base leading-7 text-black/65">
                <li>• What has already been studied?</li>
                <li>• Which theories or concepts are commonly used?</li>
                <li>• Are researchers reaching different conclusions?</li>
                <li>• What limitations have previous studies identified?</li>
                <li>• Is there a clear area that could benefit from further research?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              STEP 3
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Assess feasibility, scope and resources
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              An interesting topic is not automatically a practical research
              topic. Before finalising an idea, researchers need to consider
              whether the project can realistically be completed within the
              available time, resources and academic requirements.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Time",
                  description:
                    "Can the research realistically be completed within the available academic timeframe?",
                },
                {
                  title: "Data",
                  description:
                    "Will you be able to obtain the information, participants or datasets required?",
                },
                {
                  title: "Access",
                  description:
                    "Do you have practical access to the organisations, people, literature or resources involved?",
                },
                {
                  title: "Scope",
                  description:
                    "Is the topic focused enough to investigate properly without becoming unmanageable?",
                },
              ].map((item) => (
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
        </div>
      </section>

      {/* Step 4 */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              STEP 4
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Refine the topic into research questions
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              A strong research topic should eventually lead to questions that
              can actually be investigated. Refining the topic therefore
              involves moving from a broad subject toward a specific issue,
              population, context, relationship or phenomenon.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              The research questions provide a more precise expression of what
              the study is attempting to understand or answer.
            </p>

            <Link
              href="/research-questions-guide"
              className="mt-7 inline-block text-sm font-bold text-black hover:underline"
            >
              Read the Research Questions Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Step 5 */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              STEP 5
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Develop and present a research proposal
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Once the topic has been refined, the next stage is to develop the
              research proposal. Depending on the institution and programme,
              this may explain the research problem, questions, objectives,
              literature background, methodology and significance of the study.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Feedback from an academic supervisor or department can help
              identify weaknesses in the proposed scope and provide an
              opportunity to refine the project before formal approval.
            </p>

            <div className="mt-8 rounded-2xl bg-[#ffef18] p-7">
              <h3 className="text-xl font-bold">
                A strong proposal should make the research direction clear
              </h3>

              <p className="mt-4 text-base leading-7 text-black/70">
                The topic, research problem, questions, objectives and proposed
                methodology should work together rather than appearing as
                unrelated sections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 6 */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              STEP 6
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Secure final approval
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              The final stage is to incorporate feedback and obtain the required
              academic approval. Depending on the programme, this may involve
              approval from a supervisor, department, research committee or
              another academic authority.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Once the topic and proposal have been approved, the researcher can
              formally begin the dissertation, thesis or research project.
            </p>
          </div>
        </div>
      </section>

      {/* What makes a good topic */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              EVALUATION
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              What makes a strong research topic?
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65 sm:text-lg">
              Before committing to a topic, evaluate it against several
              practical and academic considerations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Clear",
                description:
                  "The topic should communicate the main subject of investigation without unnecessary ambiguity.",
              },
              {
                title: "Focused",
                description:
                  "A manageable topic is usually better than an extremely broad topic that cannot be investigated in sufficient depth.",
              },
              {
                title: "Researchable",
                description:
                  "There should be enough academic literature, evidence or data to support a meaningful investigation.",
              },
              {
                title: "Feasible",
                description:
                  "The project should be realistic given the available time, resources, access and academic requirements.",
              },
              {
                title: "Relevant",
                description:
                  "The research should address a meaningful academic, professional, theoretical or practical issue.",
              },
              {
                title: "Capable of producing questions",
                description:
                  "The topic should provide a foundation from which focused research questions and objectives can be developed.",
              },
            ].map((item) => (
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

      {/* Common mistakes */}
      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              COMMON MISTAKES
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Problems to avoid when selecting a topic
            </h2>

            <div className="mt-8 space-y-4">
              {[
                "Choosing a topic that is so broad that it cannot be investigated in sufficient depth.",
                "Selecting a topic simply because it sounds interesting without checking the available literature or evidence.",
                "Choosing a subject where access to participants, data or other essential resources is unrealistic.",
                "Ignoring the academic requirements or scope of the dissertation or research programme.",
                "Finalising a topic before considering whether meaningful research questions can be developed.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-black/10 bg-white p-5"
                >
                  <p className="text-base leading-7 text-black/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              CONTINUE YOUR RESEARCH JOURNEY
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Related research guides
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Once you have selected a research topic, these guides can help
              you develop the next stages of your research project.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-2xl border border-black/10 bg-[#f7f7f7] p-7 transition-transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold group-hover:underline">
                  {guide.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-black/65">
                  {guide.description}
                </p>

                <p className="mt-6 text-sm font-bold text-black">
                  Explore guide →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-[1100px] rounded-2xl bg-[#ffef18] px-7 py-12 text-center lg:px-16 lg:py-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need help developing your research project?
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