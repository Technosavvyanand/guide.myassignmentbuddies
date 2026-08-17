export default function WhatsAppButton() {
  const whatsappNumber = "61386589092";
  const whatsappMessage =
    "Hello My Assignment Buddies, I would like to discuss my academic or technical requirements.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      aria-label="Contact My Assignment Buddies on WhatsApp"
      className="
        fixed
        left-5
        top-[72%]
        z-[100]
        -translate-y-1/2
        flex
        items-center
        justify-center
        rounded-full
        bg-white
        p-2
        shadow-[0_4px_18px_rgba(0,0,0,0.18)]
        transition-transform
        duration-200
        hover:scale-105
        active:scale-95
        sm:left-6
        sm:p-2
        md:left-7
      "
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]">
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.21c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.59-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
          <path d="M16.01 3.2c-7.07 0-12.82 5.75-12.82 12.82 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.53-1.71a12.78 12.78 0 0 0 6.28 1.65h.01c7.07 0 12.82-5.75 12.82-12.82S23.08 3.2 16.01 3.2zm0 23.45h-.01a10.62 10.62 0 0 1-5.41-1.48l-.39-.23-3.87 1.01 1.03-3.77-.25-.39a10.62 10.62 0 1 1 8.9 4.86z" />
        </svg>
      </span>
    </a>
  );
}