import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

export default function ContactPage() {
  const links = [
    { name: "Email", url: "mailto:hamish@welte.au", icon: <FaEnvelope /> },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/hamishwelte",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      url: "https://github.com/hamwel",
      icon: <FaGithub />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/hamishwelte",
      icon: <FaInstagram />,
    },
  ];

  const meteors = [
    { top: "-10%", left: "10%", delay: "0s", duration: "4s" },
    { top: "-10%", left: "40%", delay: "1.5s", duration: "5s" },
    { top: "-10%", left: "70%", delay: "0.5s", duration: "3.5s" },
    { top: "20%", left: "-10%", delay: "2.2s", duration: "4.2s" },
    { top: "50%", left: "-10%", delay: "1s", duration: "5.5s" },
    { top: "80%", left: "-10%", delay: "3s", duration: "4.8s" },
  ];

  return (
    // Background using Nordic Palette (Nord Night Dark Blue: #2e3440)
    <div className="relative min-h-screen w-full bg-[#2e3440] flex items-center justify-start px-6 pl-[10%] py-16 font-sans overflow-hidden">
      {/* --- METEOR BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {meteors.map((m, idx) => (
          <div
            key={idx}
            className="absolute flex items-center justify-end w-[250px] h-[2px] animate-meteor"
            style={{
              top: m.top,
              left: m.left,
              animationDelay: m.delay,
              animationDuration: m.duration,
            }}
          >
            <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(136,192,208,0.4)] to-[#88c0d0]" />
            <div
              className="absolute right-0 h-[3px] w-[3px] rounded-full bg-[#e5e9f0]"
              style={{ boxShadow: "0 0 12px 3px rgba(136, 192, 208, 0.8)" }}
            />
          </div>
        ))}
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-[500px] text-left">
        {/* Frosty Arctic Blue Heading (#e5e9f0 / #88c0d0) */}
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-[#e5e9f0]">
          Hi, I'm <span className="text-[#88c0d0]">Hamish</span>.
        </h1>

        {/* Soft Nord Gray Description (#d8dee9) */}
        <p className="text-lg leading-relaxed mb-12 text-[#d8dee9] opacity-80">
          I do cool things sometimes!
        </p>

        {/* --- LINKS --- */}
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              // Dark Nord gray card background (#3b4252) with vibrant frost text elements
              className="flex items-center justify-start gap-5 p-5 rounded-xl border border-[#4c566a] bg-[#3b4252] text-[#e5e9f0]
                transition-all duration-300 transform hover:-translate-x-1 hover:bg-[#434c5e] hover:border-[#88c0d0] group"
            >
              <span className="text-2xl flex text-[#81a1c1] group-hover:text-[#88c0d0] transition-colors duration-300">
                {link.icon}
              </span>
              <span className="font-semibold text-lg">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
