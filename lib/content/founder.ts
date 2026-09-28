export interface FounderProfile {
  name: string
  role: string
  photoSrc: string
  photoAlt: string
  bio: string[]
  highlights: { period: string; detail: string }[]
  expertise: string[]
  linkedInUrl: string
}

// TODO: replace with real data from Elizabeth (name, photo, LinkedIn, verified bio)
export const founder: FounderProfile = {
  name: "Elizabeth ",
  role: "Founder & Principal Consultant",
  photoSrc: "/founder/placeholder.svg",
  photoAlt: "Portrait placeholder for Evolvate founder",
  bio: [
    "Evolvate is led by a consultant with hands-on experience in business development, financial management, and project delivery across Sweden and international markets.",
    "Current work includes project controls on mega projects in Sweden, alongside advisory support for leaders navigating strategy, performance, and complex programmes.",
  ],
  highlights: [
    {
      period: "Present",
      detail:
        "Project controls and financial management on mega projects in Sweden.",
    },
    {
      period: "Cross-industry",
      detail:
        "Experience in aerospace, construction, and other technology-driven environments.",
    },
    {
      period: "Focus",
      detail:
        "Business strategy, project controls, project management, market research, and advisory.",
    },
  ],
  expertise: [
    "Project controls & programme performance",
    "Financial management & planning",
    "Project management & delivery",
    "Business development & market research",
  ],
  linkedInUrl: "https://www.linkedin.com/in/placeholder-profile",
}
