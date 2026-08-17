import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT & Technical Assignments Guide | My Assignment Buddies",
  description:
    "Practical guides for IT and technical assignments covering programming, databases, cybersecurity, software engineering, networking, AI, data science and technical documentation.",
  keywords: [
    "IT assignments",
    "technical assignments",
    "computer science assignments",
    "programming assignments",
    "database assignments",
    "cybersecurity assignments",
    "software engineering assignments",
    "networking assignments",
    "AI assignments",
    "data science assignments",
  ],
};

const technicalAreas = [
  {
    number: "01",
    title: "Programming Assignments",
    description:
      "Guidance for programming problems, algorithms, data structures, object-oriented programming, debugging and technical implementation.",
  },
  {
    number: "02",
    title: "Database Assignments",
    description:
      "Resources covering database design, SQL, relational models, normalization, transactions, queries and database management systems.",
  },
  {
    number: "03",
    title: "Cybersecurity Assignments",
    description:
      "Guides covering cybersecurity concepts, network security, threats, vulnerabilities, security controls and security analysis.",
  },
  {
    number: "04",
    title: "Software Engineering",
    description:
      "Practical guidance for software development life cycles, requirements engineering, system design, testing, UML and documentation.",
  },
  {
    number: "05",
    title: "Networking Assignments",
    description:
      "Understand computer networking concepts including protocols, architectures, addressing, routing, network security and troubleshooting.",
  },
  {
    number: "06",
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Guides covering AI and machine learning concepts, algorithms, datasets, model evaluation, implementation and technical reporting.",
  },
  {
    number: "07",
    title: "Data Science Assignments",
    description:
      "Resources covering data preparation, exploratory analysis, statistics, visualisation, machine learning and interpretation of results.",
  },
  {
    number: "08",
    title: "Web & Application Development",
    description:
      "Guidance for web development, application architecture, frontend and backend technologies, APIs, databases and deployment.",
  },
  {
    number: "09",
    title: "Technical Reports & Documentation",
    description:
      "Learn how to structure technical reports, explain implementations, document systems and communicate technical findings clearly.",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Understand the requirements",
    text: "Identify exactly what the assignment asks you to develop, analyse, implement, test or explain before beginning the technical work.",
  },
  {
    number: "02",
    title: "Break the problem into components",
    text: "Divide a complex technical task into smaller requirements, concepts, modules, datasets, algorithms or development stages.",
  },
  {
    number: "03",
    title: "Select appropriate tools and methods",
    text: "Choose suitable programming languages, frameworks, software, algorithms, databases or analytical techniques based on the assignment requirements.",
  },
  {
    number: "04",
    title: "Implement and test",
    text: "Develop the solution systematically, test the implementation and identify problems before preparing the final submission.",
  },
  {
    number: "05",
    title: "Analyse and interpret results",
    text: "Explain what the implementation, experiment, model or analysis demonstrates rather than simply presenting technical output.",
  },
  {
    number: "06",
    title: "Document the technical work",
    text: "Present the methodology, implementation, results, limitations and conclusions in a clear technical report or academic format.",
  },
];

export default function ITTechnicalAssignmentsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#fff45a]">
        <div className="mx-auto max-w-[1250px] px-6 pb-20 pt-20 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/55">
              IT & Technical Assignment Guides
            </p>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Practical guides for IT, computer science and technical
              assignments.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8 lg:text-xl">
              Explore structured guidance for programming, databases,
              cybersecurity, software engineering, networking, artificial
              intelligence, data science, web development and technical
              documentation.
            </p>

            <div className="mt-9">
              <a
                href="#technical-guides"
                className="inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Explore Technical Guides
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
              Technical Knowledge Hub
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Understanding technical assignments beyond the code
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65">
              IT and computer science assignments can involve much more than
              writing code. Depending on the subject, students may need to
              understand algorithms, database design, system architecture,
              cybersecurity principles, research methodology, testing,
              analysis and technical documentation.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65">
              A strong technical assignment connects the requirements,
              underlying concepts, implementation, testing and explanation.
              Understanding that connection makes it easier to approach
              programming projects, analytical tasks and technical reports in a
              structured way.
            </p>
          </div>
        </div>
      </section>

      {/* Technical areas */}
      <section
        id="technical-guides"
        className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              Explore
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              IT & Technical Assignment Areas
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Start with the technical subject that matches your assignment.
              More detailed topic, concept and problem-specific guides can be
              developed within each area.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {technicalAreas.map((area) => (
              <article
                key={area.number}
                className="rounded-xl border border-black/10 bg-white p-7 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold tracking-[0.18em] text-black/45">
                    {area.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffef18] text-xl">
                    →
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold tracking-tight">
                  {area.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-black/65">
                  {area.description}
                </p>

                <p className="mt-6 text-sm font-bold text-black/75">
                  Detailed guide coming next →
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Assignment workflow */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              Technical Workflow
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A practical approach to technical assignments
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65">
              Technical assignments become easier to manage when the work is
              approached as a sequence of connected stages rather than one
              large task.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {workflowSteps.map((step) => (
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
              Where technical assignments often become difficult
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65">
              Technical problems can become difficult when students focus only
              on the final output and overlook the requirements, underlying
              concepts, testing and explanation.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Understanding a complex assignment brief and identifying exactly what needs to be delivered.",
              "Breaking a large programming or technical problem into smaller, manageable components.",
              "Choosing appropriate algorithms, technologies, tools or development approaches.",
              "Debugging code and understanding why an implementation does not produce the expected result.",
              "Explaining technical decisions rather than simply presenting code or screenshots.",
              "Connecting technical results with analysis, evaluation, limitations and conclusions.",
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
              IT and technical assignment questions
            </h2>
          </div>

          <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
            <details className="py-6">
              <summary className="cursor-pointer text-lg font-bold">
                What are IT and technical assignments?
              </summary>

              <p className="mt-4 text-base leading-7 text-black/65">
                IT and technical assignments are academic tasks involving areas
                such as programming, databases, networking, cybersecurity,
                software engineering, artificial intelligence, data science and
                related technical subjects.
              </p>
            </details>

            <details className="py-6">
              <summary className="cursor-pointer text-lg font-bold">
                How should I approach a programming assignment?
              </summary>

              <p className="mt-4 text-base leading-7 text-black/65">
                Begin by understanding the requirements and expected output.
                Break the problem into smaller components, design the solution,
                implement it incrementally and test each part before completing
                the final documentation.
              </p>
            </details>

            <details className="py-6">
              <summary className="cursor-pointer text-lg font-bold">
                What should a technical assignment report include?
              </summary>

              <p className="mt-4 text-base leading-7 text-black/65">
                Requirements vary by module and institution, but technical
                reports commonly explain the problem, approach or methodology,
                implementation, testing, results, analysis, limitations and
                conclusions.
              </p>
            </details>

            <details className="py-6">
              <summary className="cursor-pointer text-lg font-bold">
                Which technical subjects can these guides cover?
              </summary>

              <p className="mt-4 text-base leading-7 text-black/65">
                The technical cluster can cover programming, databases,
                cybersecurity, software engineering, networking, artificial
                intelligence, machine learning, data science, web development
                and technical documentation, with more focused guides added
                over time.
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
            Build your technical knowledge step by step.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70">
            Explore focused guides as the platform grows, from programming and
            database concepts to cybersecurity, AI, data science and technical
            project documentation.
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