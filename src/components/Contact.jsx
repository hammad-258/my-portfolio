const socials = [
  { label: "GitHub", href: "https://github.com/hammad-258" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hammad-aslam-khan-152988323/" },
  { label: "Instagram", href: "https://www.instagram.com/_hammad_258/" },
];

function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 pt-16">
      <h2 className="jetbrains-mono-regular text-[28px] font-semibold text-white mt-8 mb-3 uppercase tracking-wide">~CONTACT</h2>
      <p className="text-gray-200 jetbrains-mono-regular mb-5">
        Want to work together or just say hi? Reach out any time.
      </p>

      <div className="flex gap-4 mt-6 text-sm">
        {socials.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white underline underline-offset-2 transition-colors">
            {label}
          </a>
        ))}
      </div>
      <div className="pt-5 grid place-items-center">
        <p className="cedarville-cursive-regular md:text-[24px] text-yellow-100">made by me using react.js and tailwind css</p>
      </div>
    </section>
  );
}

export default Contact;