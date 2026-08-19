export type InsightSection = {
  heading: string;
  paragraphs: string[];
};

export type Insight = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  readTime: string;
  intro: string;
  sections: InsightSection[];
};

export const insights: Insight[] = [
  {
    slug: "the-next-fitness-platform-should-be-owned-not-rented",
    title: "The next fitness platform should be owned, not rented",
    description: "Why enterprise gym operators need control of the code, data, infrastructure, and roadmap behind their member experience.",
    category: "Platform ownership",
    published: "2026-08-19",
    readTime: "6 min read",
    intro: "The most important technology question for a large fitness operator is no longer which vendor has the longest feature list. It is who controls the operating layer beneath the member experience.",
    sections: [
      {
        heading: "The rented-roadmap problem",
        paragraphs: [
          "A fragmented SaaS stack can solve isolated problems quickly. Over time, however, each point solution introduces another data boundary, contract, workflow handoff, and roadmap dependency. The operator can configure the edges but rarely controls the system itself.",
          "That tradeoff becomes more consequential as AI agents begin acting across sales, service, marketing, and operations. Agents need shared context, governed tools, and reliable workflows. A dozen disconnected systems cannot become one operating brain merely by adding chat interfaces.",
        ],
      },
      {
        heading: "Ownership is an operating advantage",
        paragraphs: [
          "Owning the platform does not mean rebuilding every specialist service. It means owning the repository, data model, orchestration layer, integration boundaries, and roadmap—while connecting payments, communications, systems of record, and other services where they remain useful.",
          "The result is strategic optionality. The operator can change an experience, add an agent, replace a vendor, or create a new workflow without waiting for the priorities of a software company serving a different market.",
        ],
      },
      {
        heading: "A practical path between build and buy",
        paragraphs: [
          "Starting from a reference architecture changes the economics of ownership. Proven domains, deployment patterns, agent workflows, and operating standards become a starting point rather than a multi-year blank-sheet program.",
          "The goal is not custom software for its own sake. The goal is to own the parts that create differentiation and preserve clean boundaries around the services that do not.",
        ],
      },
    ],
  },
  {
    slug: "ai-agents-need-a-context-layer",
    title: "AI agents are only as good as the context layer beneath them",
    description: "Agent quality depends less on the interface and more on identity, consent, history, tools, policies, and operational truth.",
    category: "AI-native operations",
    published: "2026-08-19",
    readTime: "5 min read",
    intro: "A compelling agent demo can be built in an afternoon. A trustworthy operating agent requires something harder: a reliable context layer beneath every interaction.",
    sections: [
      {
        heading: "Conversation is not context",
        paragraphs: [
          "A model can sound natural while knowing almost nothing about the member, the club, or the work that must happen next. Useful context includes identity, consent, club scope, prior interactions, active opportunities, appointments, service history, and the policies that govern action.",
          "Without that foundation, each channel becomes another isolated conversation. The member repeats information, staff lose visibility, and the agent can only offer generic answers.",
        ],
      },
      {
        heading: "Agents need governed tools",
        paragraphs: [
          "Operating agents should not improvise business outcomes. They should call bounded tools that read real availability, create or update the correct record, respect permission and consent rules, and leave a visible audit trail.",
          "Deterministic workflows remain essential. They decide when an agent should act, when a human should take over, what happens after a failure, and how the same operating policy applies across voice, SMS, email, and web.",
        ],
      },
      {
        heading: "Build the layer that outlasts the interface",
        paragraphs: [
          "Models and interfaces will keep changing. Identity, operational history, domain rules, and integration contracts are the durable assets. Operators who own that layer can adopt better models and experiences without rebuilding the business each time.",
        ],
      },
    ],
  },
  {
    slug: "interfaces-evolve-data-endures",
    title: "Interfaces evolve. Data endures.",
    description: "The durable foundation for AI-native fitness operations is not a dashboard—it is governed, portable operational context.",
    category: "Architecture and engineering",
    published: "2026-08-19",
    readTime: "4 min read",
    intro: "Every technology cycle brings a new interface. The strategic mistake is to confuse the interface with the system that creates the value.",
    sections: [
      {
        heading: "The interface is becoming fluid",
        paragraphs: [
          "Staff may work through dashboards today and ask an agent tomorrow. Members may start on a website, continue by SMS, speak to a voice agent, and finish with a club employee. The surface changes, but the underlying business event is the same.",
          "When data and domain logic are trapped inside each interface, the organization cannot create continuity. Each new experience becomes another integration project.",
        ],
      },
      {
        heading: "Design around operational truth",
        paragraphs: [
          "A durable architecture separates experiences from the shared services that define members, clubs, leads, agreements, communications, and workflows. Every interface—including an agent—uses the same business rules and writes back to the same operational history.",
          "This is what makes an architecture agent-ready. The advantage is not that it has an AI feature. The advantage is that an agent can safely participate in the real operation.",
        ],
      },
      {
        heading: "Own what must endure",
        paragraphs: [
          "Operators should retain control of the data, context, policies, and integration contracts that outlast any vendor or model. That foundation creates the freedom to change everything above it.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
