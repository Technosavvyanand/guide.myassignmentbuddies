import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Introducing ProjectAssignments.com: Advanced Technical & Research Consultancy | MyAssignmentBuddies",
  description:
    "MyAssignmentBuddies introduces ProjectAssignments.com—our dedicated technical consultancy platform for advanced Cybersecurity, IT Engineering, DBA research, and MBA strategic advisory.",
};

const projectAssignmentsUrl = "https://projectassignments.com";

export default function ProjectAssignmentsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#fff45a]">
        <div className="mx-auto max-w-[1150px] px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/55">
            A Specialized Sister Platform
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Introducing ProjectAssignments.com: Our Specialized Technical &
            Research Advisory Arm
          </h1>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-black/70 lg:text-xl">
            A dedicated consultancy-first platform for advanced technical
            projects, cybersecurity, IT engineering, data science, DBA
            research and MBA strategic advisory.
          </p>

          <a
            href={projectAssignmentsUrl}
            className="mt-9 inline-block rounded-md bg-[#202020] px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02]"
          >
            Explore ProjectAssignments.com
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1050px] px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-lg leading-8 text-black/70 lg:text-xl">
            Over the past three years, MyAssignmentBuddies has helped thousands
            of students and professionals navigate academic coursework, refine
            technical writing, and master complex subjects. As technical
            disciplines evolve, academic and professional projects demand
            deeper technical precision, real-world execution standards, and
            specialized mentorship.
          </p>

          <p className="mt-7 text-lg leading-8 text-black/70 lg:text-xl">
            To meet these advanced technical needs, we are proud to introduce
            our specialized sister platform:{" "}
            <a
              href={projectAssignmentsUrl}
              className="font-semibold underline underline-offset-4"
            >
              ProjectAssignments.com
            </a>
            .
          </p>

          <p className="mt-7 text-lg leading-8 text-black/70 lg:text-xl">
            While MyAssignmentBuddies remains your trusted home for
            comprehensive academic coursework and general subject assistance,{" "}
            <a
              href={projectAssignmentsUrl}
              className="font-semibold underline underline-offset-4"
            >
              ProjectAssignments.com
            </a>{" "}
            is engineered exclusively as a high-level, consultancy-first
            platform dedicated to technical engineering, empirical data
            science, and doctoral-level research.
          </p>
        </div>
      </section>

      {/* Why we launched it */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1150px] px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
            The Purpose
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Why We Launched ProjectAssignments.com
          </h2>

          <p className="mt-5 max-w-4xl text-base leading-8 text-black/65 lg:text-lg">
            Modern technical fields—from offensive cybersecurity to
            distributed cloud architectures and quantitative data mining—
            require hands-on mentorship, code-level execution, and compliance
            with industry standards such as NIST, OWASP and IEEE.
          </p>

          <p className="mt-5 max-w-4xl text-base leading-8 text-black/65 lg:text-lg">
            ProjectAssignments.com was built to provide a focused,
            specialized environment tailored to these requirements.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-black/40">
                01
              </p>

              <h3 className="mt-4 text-xl font-bold">
                Consultancy-First Approach
              </h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Moving beyond general academic support to provide architectural
                guidance, code reviews and technical project consultation.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-black/40">
                02
              </p>

              <h3 className="mt-4 text-xl font-bold">
                Industry-Standard Methodologies
              </h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Helping technical projects align with real-world execution
                frameworks, from penetration testing labs to statistical
                modelling in WEKA and Python.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-black/40">
                03
              </p>

              <h3 className="mt-4 text-xl font-bold">
                Specialized Domain Experts
              </h3>

              <p className="mt-4 text-base leading-7 text-black/65">
                Access to experienced advisors specializing in software
                engineering, cybersecurity auditing, data science and doctoral
                research.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Core pillars */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1150px] px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
            Areas of Specialization
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Core Pillars of Specialization at ProjectAssignments.com
          </h2>

          <p className="mt-5 max-w-4xl text-base leading-8 text-black/65 lg:text-lg">
            The platform focuses on four specialized pillars designed to
            support US, European and Gulf (GCC) academic and professional
            standards.
          </p>

          <div className="mt-10 space-y-6">
            <article className="rounded-2xl border border-black/10 p-7 lg:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-black/40">
                01
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Cybersecurity & Vulnerability Assessment Advisory
              </h3>

              <p className="mt-4 text-base leading-8 text-black/65">
                Whether building virtual testing environments in Kali Linux or
                conducting web application audits under OWASP benchmarks,
                advisors can assist with step-by-step vulnerability analysis,
                CVSS severity scoring and technical reporting.
              </p>

              <a
                href={projectAssignmentsUrl}
                className="mt-5 inline-block font-bold underline underline-offset-4"
              >
                Explore Cybersecurity Technical Advisory →
              </a>
            </article>

            <article className="rounded-2xl border border-black/10 p-7 lg:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-black/40">
                02
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                IT, Software Engineering & Cloud Systems
              </h3>

              <p className="mt-4 text-base leading-8 text-black/65">
                From full-stack web development and Next.js pipeline
                configuration to cloud deployment on Cloudflare and database
                optimization, ProjectAssignments.com provides hands-on
                technical guidance for complex IT projects.
              </p>

              <a
                href={projectAssignmentsUrl}
                className="mt-5 inline-block font-bold underline underline-offset-4"
              >
                Explore Software Engineering & IT Projects →
              </a>
            </article>

            <article className="rounded-2xl border border-black/10 p-7 lg:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-black/40">
                03
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                DBA & Doctoral Research Methodology
              </h3>

              <p className="mt-4 text-base leading-8 text-black/65">
                Doctoral dissertations require rigorous empirical validation,
                data processing pipelines using tools such as WEKA, R and
                Python, and clear methodology write-ups. ProjectAssignments.com
                connects researchers with specialized advisors for advanced
                research mentorship.
              </p>

              <a
                href={projectAssignmentsUrl}
                className="mt-5 inline-block font-bold underline underline-offset-4"
              >
                Explore DBA & Doctoral Research Mentorship →
              </a>
            </article>

            <article className="rounded-2xl border border-black/10 p-7 lg:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-black/40">
                04
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                MBA & Strategic Corporate Research
              </h3>

              <p className="mt-4 text-base leading-8 text-black/65">
                For postgraduate students and professionals developing
                corporate growth strategies, market feasibility models or
                quantitative business analytics, ProjectAssignments.com offers
                dedicated strategic research advisory.
              </p>

              <a
                href={projectAssignmentsUrl}
                className="mt-5 inline-block font-bold underline underline-offset-4"
              >
                Explore Strategic Research Advisory →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Integrity */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1050px] px-6 py-16 text-center lg:px-10 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
            Our Approach
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Academic Integrity & Ethical Advisory
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-black/65 lg:text-lg">
            Both MyAssignmentBuddies and{" "}
            <a
              href={projectAssignmentsUrl}
              className="font-semibold underline underline-offset-4"
            >
              ProjectAssignments.com
            </a>{" "}
            share a commitment to academic integrity. ProjectAssignments.com
            operates strictly as a{" "}
            <strong>Technical Advisory & Project Mentorship Service</strong>.
            The mission is to help users understand their codebase, master
            complex algorithms and deliver defendable, industry-standard
            technical work.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1150px] px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
            Choose the Right Platform
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Which Platform Fits Your Needs?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-[#fff45a] p-8 lg:p-10">
              <h3 className="text-2xl font-bold">MyAssignmentBuddies</h3>

              <p className="mt-4 text-base leading-8 text-black/70">
                Ideal for general academic coursework, essay support, writing
                reviews and foundational subject guidance across various
                disciplines.
              </p>

              <Link
                href="/"
                className="mt-6 inline-block font-bold underline underline-offset-4"
              >
                Explore MyAssignmentBuddies Guides →
              </Link>
            </article>

            <article className="rounded-2xl border border-black/10 p-8 lg:p-10">
              <h3 className="text-2xl font-bold">ProjectAssignments.com</h3>

              <p className="mt-4 text-base leading-8 text-black/70">
                Built specifically for technical projects requiring code
                execution, cybersecurity lab setups, advanced data mining or
                doctoral dissertation research.
              </p>

              <a
                href={projectAssignmentsUrl}
                className="mt-6 inline-block font-bold underline underline-offset-4"
              >
                Visit ProjectAssignments.com →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#fff45a] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[950px] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Explore the Specialized Technical Hub
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-black/70 lg:text-lg">
            Visit ProjectAssignments.com to explore its specialized technical
            and research advisory services, or connect with the team directly
            to discuss your project requirements.
          </p>

          <a
            href={projectAssignmentsUrl}
            className="mt-8 inline-block rounded-md bg-[#202020] px-8 py-4 text-base font-bold text-white transition-transform hover:scale-[1.02]"
          >
            Visit ProjectAssignments.com
          </a>
        </div>
      </section>
    </main>
  );
}