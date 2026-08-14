import Link from "next/link";
import GuideCategoryCard from "../components/GuideCategoryCard";

const guideCategories = [
  {
    number: "01",
    title: "DBA Thesis & Dissertation",
    description:
      "Guides covering DBA research, thesis structure, methodology, literature reviews, research questions and academic writing.",
    href: "/dba-thesis-dissertation",
  },
  {
    number: "02",
    title: "MBA Thesis & Dissertation",
    description:
      "Practical resources for MBA research, dissertation planning, methodology, literature reviews, analysis and academic writing.",
    href: "/mba-thesis-dissertation",
  },
  {
    number: "03",
    title: "IT & Technical Assignments",
    description:
      "Guidance for programming, databases, cybersecurity, software engineering, networking, AI, data science and other technical subjects.",
    href: "/it-technical-assignments",
  },
  {
    number: "04",
    title: "Law Assignments",
    description:
      "Resources covering legal research, case analysis, IRAC, legal essays, problem questions, referencing and law dissertations.",
    href: "/law-assignments",
  },
  {
    number: "05",
    title: "Technical Projects & Artefacts",
    description:
      "Guides for technical projects, final-year projects, documentation, system design, UML, testing, reports and project artefacts.",
    href: "/technical-projects-artefacts",
  },
  {
    number: "06",
    title: "Research Paper Writing",
    description:
      "Step-by-step resources covering research topics, research questions, methodology, literature reviews, data analysis and academic publishing.",
    href: "/research-paper-writing",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#fff45a]">
        <div className="mx-auto max-w-[1250px] px-6 pb-20 pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/55">
              My Assignment Buddies Guides
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Practical guides for academic, research and technical work.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-black/70 lg:text-xl">
              Explore structured resources designed to help students and
              researchers understand complex academic tasks, plan their work
              and produce better research and technical documentation.
            </p>

<div className="mt-9">
  <a
    href="#guide-categories"
    className="inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
  >
    Explore the Guides
  </a>
</div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center lg:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
            Knowledge Hub
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Find the guidance you need
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-black/65">
            Our guides are organised into focused subject and research areas
            so you can move from a broad question to practical, detailed
            guidance without getting lost in unrelated content.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section
        id="guide-categories"
        className="bg-[#f7f7f7] px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              Explore
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Guide Clusters
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Start with the area most relevant to your academic or technical
              work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {guideCategories.map((category) => (
              <GuideCategoryCard
                key={category.number}
                number={category.number}
                title={category.title}
                description={category.description}
                href={category.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px] rounded-2xl bg-[#ffef18] px-7 py-12 text-center lg:px-16 lg:py-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need help with your academic work?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70">
            The Guides platform is here to help you understand your work. If
            you need professional academic or technical assistance, explore
            the services offered by My Assignment Buddies.
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