import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  {
    label: "Dissertation Writing",
    href: "https://www.myassignmentbuddies.com/dissertation-writing",
  },
  {
    label: "Online Research Paper",
    href: "https://www.myassignmentbuddies.com/online-research-paper",
  },
  {
    label: "University Assignment",
    href: "https://www.myassignmentbuddies.com/university-assignment",
  },
  {
    label: "Economics Assignment",
    href: "https://www.myassignmentbuddies.com/economics-assignment",
  },
  {
    label: "MBA Assignment",
    href: "https://www.myassignmentbuddies.com/mba-assignment",
  },
  {
    label: "PowerPoint Presentation Assignment",
    href: "https://www.myassignmentbuddies.com/powerpoint-presentation-assignment",
  },
  {
    label: "Business Communication Assignment",
    href: "https://www.myassignmentbuddies.com/business-communication-assignment",
  },
  {
    label: "SWOT Analysis Assignment",
    href: "https://www.myassignmentbuddies.com/swot-analysis-assignment",
  },
  {
    label: "Business Plan Assignment",
    href: "https://www.myassignmentbuddies.com/business-plan-assignment",
  },
  {
    label: "Cyber Security Assignment",
    href: "https://www.myassignmentbuddies.com/cyber-security-assignment",
  },
  {
    label: "SOP Help",
    href: "https://www.myassignmentbuddies.com/sop-help",
  },
  {
    label: "TAFE Assignment Help",
    href: "https://www.myassignmentbuddies.com/tafe-assignment-help",
  },
  {
    label: "Nursing Assignment",
    href: "https://www.myassignmentbuddies.com/nursing-assignment",
  },
  {
    label: "Health Assessment Assignment",
    href: "https://www.myassignmentbuddies.com/health-assessment-assignment",
  },
  {
    label: "Research Methodology Assignment",
    href: "https://www.myassignmentbuddies.com/research-methodology-assignment",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#ffef18]">
      <div className="mx-auto flex min-h-[104px] max-w-[1800px] items-center px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="https://www.myassignmentbuddies.com"
          className="shrink-0"
          aria-label="My Assignment Buddies"
        >
          <Image
            src="/images/mab-logo.jpg"
            alt="My Assignment Buddies"
            width={166}
            height={90}
            priority
            className="h-[90px] w-[166px] object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="ml-auto hidden items-center gap-8 lg:flex">
          <Link
            href="https://www.myassignmentbuddies.com"
            className="text-[19px] font-medium text-black transition-opacity hover:opacity-60"
          >
            Home
          </Link>

          {/* Services */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-[19px] font-medium text-black"
            >
              Services
              <span className="text-sm">▾</span>
            </button>

            <div className="invisible absolute right-0 top-full mt-3 w-[720px] rounded-lg bg-[#fff95b] p-6 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                {serviceLinks.map((service) => (
                  <a
                    key={service.label}
                    href={service.href}
                    className="text-sm leading-5 text-black hover:underline"
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a
            href="https://www.myassignmentbuddies.com/blog"
            className="text-[19px] font-medium text-black transition-opacity hover:opacity-60"
          >
            Blogs
          </a>

          <a
            href="https://www.myassignmentbuddies.com/offers"
            className="text-[19px] font-medium text-black transition-opacity hover:opacity-60"
          >
            Offers
          </a>

          <a
            href="https://www.myassignmentbuddies.com/contact"
            className="text-[19px] font-medium text-black transition-opacity hover:opacity-60"
          >
            Contact
          </a>

          <a
            href="https://www.myassignmentbuddies.com/policies"
            className="text-[19px] font-medium text-black transition-opacity hover:opacity-60"
          >
            Policies
          </a>

          <a
            href="https://www.myassignmentbuddies.com/get-a-quote"
            className="rounded-md bg-[#202020] px-6 py-3 text-[18px] font-bold text-white transition-transform hover:scale-[1.02]"
          >
            Get a Quote
          </a>

          <a
            href="https://www.myassignmentbuddies.com/account"
            aria-label="Login"
            className="flex items-center gap-2 text-[18px] font-medium text-black"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-lg text-[#ffef18]">
              ●
            </span>
            <span>Log in</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Open menu"
          className="ml-auto rounded-md border border-black/30 px-3 py-2 text-2xl lg:hidden"
        >
          ☰
        </button>
      </div>
    </header>
  );
}