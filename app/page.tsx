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

  return (
    <div className="min-h-[80vh] flex items-center justify-start px-6 pl-[10%] py-16 font-sans">
      <div className="w-100 max-w-[500px] text-left">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white">
          Hi, I'm Hamish.
        </h1>

        <p className="text-lg leading-relaxed mb-14 text-gray-600 dark:text-gray-400">
          I sometimes do cool things :D
        </p>

        <div className="flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="flex items-center justify-start gap-5 p-5 rounded-xl border transition-all duration-200
                bg-white border-gray-200 text-gray-900 hover:bg-gray-50
                dark:bg-[#1e1e1e] dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-800"
            >
              <span className="text-2xl flex text-gray-700 dark:text-gray-300">
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
