import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Technical Project Guides | Software Projects, System Design & Documentation",
  description:
    "Practical guides for technical projects, final-year projects, system design, UML, software testing, technical documentation, project reports and project artefacts.",
};

export default function TechnicalProjectsArtefactsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#fff45a]">
        <div className="mx-auto max-w-[1250px] px-6 pb-20 pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/55">
              TECHNICAL PROJECT GUIDES
            </p>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Practical guides for technical projects, system design and
              project documentation.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8 lg:text-xl">
              Explore structured guidance for planning, designing,
              implementing, testing and documenting software and technical
              projects, from final-year projects to complex technical
              artefacts.
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
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              TECHNICAL KNOWLEDGE HUB
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Understanding technical projects beyond the code
            </h2>

            <p className="mt-6 text-base leading-8 text-black/65 sm:text-lg">
              A technical project involves much more than writing code. A
              strong project requires clear requirements, appropriate system
              design, sound architecture, implementation, testing and
              documentation.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              These guides are designed to help students and researchers
              understand the different stages of technical project development
              and produce clear, structured and defensible project work.
            </p>
          </div>
        </div>
      </section>

      {/* Guide areas */}
      <section
        id="technical-guides"
        className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              EXPLORE
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Technical Project Topics
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Start with the part of your technical project where you need the
              most guidance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Final-Year Projects",
                description:
                  "Guidance for planning, developing and documenting software and computing final-year projects.",
              },
              {
                title: "Requirements Analysis",
                description:
                  "Understand how to identify project requirements, define system scope and translate needs into technical specifications.",
              },
              {
                title: "System Design",
                description:
                  "Learn how to approach system architecture, component design, database structures and technical design decisions.",
              },
              {
                title: "UML & Modelling",
                description:
                  "Explore UML diagrams and modelling techniques used to communicate the structure and behaviour of software systems.",
              },
              {
                title: "Software Testing",
                description:
                  "Understand testing strategies, test cases, validation, verification and how to document technical testing activities.",
              },
              {
                title: "Technical Documentation",
                description:
                  "Guidance on project reports, technical documentation, implementation details, evaluation and project artefacts.",
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

                <p className="mt-6 text-sm font-bold text-black">
                  Detailed guide coming soon →
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project lifecycle */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="rounded-2xl bg-[#ffef18] px-7 py-12 lg:px-16 lg:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/55">
              PROJECT DEVELOPMENT
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              From project idea to technical artefact
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 sm:text-lg">
              A well-developed technical project connects its objectives,
              requirements, design, implementation, testing and evaluation.
              Future guides will explore each stage in greater depth, helping
              you understand how the different project components fit
              together.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need help with your academic or technical work?
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