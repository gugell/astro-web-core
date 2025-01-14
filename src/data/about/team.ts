import FelixPhoto from "@/assets/images/felix_large.png";
import IliaPhoto from "@/assets/images/ilia_large.png";
import type { ImageAttrs } from "@/types";

export interface TeamMemberLink {
  icon: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  email: string;
  image: ImageAttrs;
  linkedin: string;
  twitter: string;
  links: TeamMemberLink[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ilia Gutu",
    role: "Mobile enthusiast, Automation lover",
    description:
      "Ilia is passionate about mobile development, automation, and mentoring the next generation of developers.",
    email: "ilia.gutu@gmail.com",
    image: {
      // src: "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      src: IliaPhoto,
      alt: "Ilia Gutu",
    },
    linkedin: "https://linkedin.com/in/iliagutu",
    twitter: "https://twitter.com/iliagutu",
    links: [
      { icon: "tabler:brand-x", href: "https://x.com/ilia_gutu" },
      {
        icon: "tabler:brand-linkedin",
        href: "https://www.linkedin.com/in/iliagutu/",
      },
      { icon: "tabler:mail", href: "mailto:ilia.gutu@gmail.com" },
    ],
  },
  {
    name: "Felix Olszewski",
    role: "Full Stack + Mobile Developer, UX/UI Enthusiast. Builder of GeoChamp",
    description:
      "Jane brings expertise in UI/UX design and focuses on creating engaging user experiences.",
    email: "olszewski.felix@gmail.com",
    image: {
      src: FelixPhoto,
      alt: "Felix Olszewski",
    },
    linkedin: "https://www.linkedin.com/in/felix-olszewski-a714481b9",
    twitter: "https://x.com/felixolszewski7",
    links: [
      { icon: "tabler:brand-x", href: "https://x.com/felixolszewski7" },
      {
        icon: "tabler:brand-linkedin",
        href: "https://www.linkedin.com/in/felix-olszewski-a714481b9",
      },
      { icon: "tabler:mail", href: "mailto:olszewski.felix@gmail.com" },
    ],
  },
  {
    name: "Rockstar",
    role: "Maybe you? Talk to us",
    description:
      "Jane brings expertise in UI/UX design and focuses on creating engaging user experiences.",
    email: "jane@mobileheads.at",
    image: {
      src: "https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      alt: "Clark Bourne",
    },
    linkedin: "https://linkedin.com/in/janedoe",
    twitter: "https://twitter.com/janedoe",
    links: [],
  },
];
