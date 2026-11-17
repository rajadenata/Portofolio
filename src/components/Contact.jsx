import { Mail, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./Icon";
import { contact } from "../data/content";

const channels = [
  {
    key: "email",
    label: "Email",
    Icon: Mail,
    placeholder: "rajadenataz42@gmail.com",
    href: (v) => `mailto:${v}`,
  },
  {
    key: "github",
    label: "GitHub",
    Icon: GithubIcon,
    placeholder: "github.com/rajadenata",
    href: (v) => v,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    Icon: LinkedinIcon,
    placeholder: "linkedin.com/in/Raja Denata",
    href: (v) => v,
  },
  {
    key: "instagram",
    label: "Instagram",
    Icon: InstagramIcon,
    placeholder: "@rajadenata_",
    href: (v) => v,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-pad"
    >
      <div className="text-center">
        <SectionHeading
          align="center"
          badge="Let's connect"
          id="contact-title"
          path="C:/Users/RajaDenata/Contact"
          white="Let's"
          grad="Collaborate."
        >
          Open to collaboration on research, programming projects, and
          technology ideas. Reach out through any of these channels.
        </SectionHeading>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
        {channels.map(({ key, label, Icon, placeholder, href }, i) => {
          const value = contact[key];
          const inner = (
            <>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-neon/20 to-turq/10 text-cyan-neon ring-1 ring-cyan-neon/30">
                <Icon width={22} height={22} size={22} />
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block font-heading text-base font-bold text-white">
                  {label}
                </span>
                <span
                  className={`block truncate font-mono text-xs ${value ? "text-muted" : "text-white/35 italic"}`}
                >
                  {value || placeholder}
                </span>
              </span>
              {value && (
                <ArrowUpRight
                  size={18}
                  className="text-cyan-neon"
                  aria-hidden="true"
                />
              )}
            </>
          );
          return (
            <Reveal key={key} delay={i * 0.07}>
              {value ? (
                <a
                  href={href(value)}
                  target={key === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="card flex items-center gap-4 p-5"
                >
                  {inner}
                </a>
              ) : (
                <div
                  className="card flex items-center gap-4 border-dashed p-5 opacity-80 hover:!translate-y-0"
                  aria-label={`${label}: placeholder, not set yet`}
                >
                  {inner}
                </div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
