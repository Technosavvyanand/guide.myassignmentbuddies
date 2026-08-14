import Link from "next/link";

type GuideCategoryCardProps = {
  number: string;
  title: string;
  description: string;
  href: string;
};

export default function GuideCategoryCard({
  number,
  title,
  description,
  href,
}: GuideCategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-5">
        <span className="text-sm font-semibold tracking-[0.18em] text-black/45">
          {number}
        </span>

        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ffef18] text-lg font-semibold transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>

      <h2 className="mt-7 text-2xl font-bold tracking-tight text-black">
        {title}
      </h2>

      <p className="mt-4 text-[15px] leading-7 text-black/65">
        {description}
      </p>

      <div className="mt-6 text-sm font-semibold text-black">
        Explore guides
        <span className="ml-2 transition-all group-hover:ml-3">→</span>
      </div>
    </Link>
  );
}