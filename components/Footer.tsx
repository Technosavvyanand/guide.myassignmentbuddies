const footerServices = [
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
    href: "https://www.myassignmentbuddies.com/university-assignments",
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

export default function Footer() {
  return (
    <footer className="bg-[#fff45a] text-black">
      <div className="mx-auto max-w-[1300px] px-6 py-14">
        {/* Services */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-3">
          {footerServices.map((service) => (
            <div key={service.label}>
              <a
                href={service.href}
                className="text-[15px] hover:underline"
              >
                {service.label}
              </a>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-14 flex flex-col items-center text-center">
          <a
            href="mailto:help@myassignmentbuddies.com"
            className="text-[15px] hover:underline"
          >
            help@myassignmentbuddies.com
          </a>

          <a
            href="tel:+61386589092"
            className="mt-5 text-[15px] hover:underline"
          >
            +61 3 8658 9092
          </a>

          {/* DMCA */}
          <div className="mt-6 flex items-center gap-1">
            <span className="bg-white px-2 py-1 text-[11px] font-bold">
              DMCA
            </span>

            <span className="bg-[#333] px-2 py-1 text-[11px] font-bold text-white">
              PROTECTED
            </span>
          </div>

          {/* Social icons */}
          <div className="mt-3 flex gap-2">
            <a
              href="#"
              aria-label="WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded border border-black bg-white text-sm"
            >
              W
            </a>

            <a
              href="#"
              aria-label="Pinterest"
              className="flex h-8 w-8 items-center justify-center rounded border border-black bg-white text-sm"
            >
              P
            </a>

            <a
              href="#"
              aria-label="Social profile"
              className="flex h-8 w-8 items-center justify-center rounded border border-black bg-white text-sm"
            >
              S
            </a>
          </div>

          <p className="mt-5 text-[14px]">
            Copyright © 2024 Myassignmentbuddies.com. All rights reserved
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-14 max-w-[1200px] text-center">
          <p className="text-[13px] leading-6">
            Disclaimer: The model papers provided by MyAssignmentBuddies.com
            are meant to serve as examples for students and should not be
            submitted as is. These papers are intended solely for research and
            reference purposes.
          </p>

          <p className="mt-8 text-[13px]">
            This website and its contents are owned and managed by Ph Test
            Consultants.
          </p>
        </div>
      </div>
    </footer>
  );
}