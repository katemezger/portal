import { MobileScreen } from "@/components/mobile/ui/MobileScreen";
import { Card } from "@/components/mobile/ui/Card";
import { Button } from "@/components/mobile/ui/Button";
import { Pill } from "@/components/mobile/ui/Pill";
import { BottomNav } from "@/components/mobile/ui/BottomNav";

const steps = [
  {
    number: "1",
    title: "Pick a Program",
    body: "Find the path that matches your level and interests.",
  },
  {
    number: "2",
    title: "Submit Application",
    body: "Fill out our quick enrollment forms and share your passion.",
  },
  {
    number: "3",
    title: "Join the Hub",
    body: "Get onboarded and start meeting your fellow AIS members.",
  },
];

const programs = [
  {
    title: "AI Academy",
    description:
      "Master the fundamentals of machine learning through our guided 10-week curriculum.",
    tags: ["Beginner", "10 weeks"],
    cta: "primary" as const,
  },
  {
    title: "AI Mentorship",
    description:
      "Get paired with industry professionals or senior students to accelerate your career in AI.",
    tags: ["Career", "Team based"],
    badge: "High demand",
    cta: "accent" as const,
  },
  {
    title: "Officer",
    description:
      "Join the AIS Development Team and contribute to tech, operations, marketing, or Innovation Lab.",
    tags: ["Advanced", "Project based"],
    cta: "primary" as const,
  },
];

const openApplications = [
  {
    title: "AIM Mentor Application · Fall 2026",
    description: "Mentor students in building an AI/ML project",
    meta: "closes June 25, 2026 · 11:59 PM CT",
    primaryLabel: "Apply",
    primaryVariant: "primary" as const,
  },
  {
    title: "AIS Tech Team Officer · 2026-2027",
    description: "Design & develop AIS technical infrastructure",
    meta: "closes June 1, 2026 · 11:59 PM CT",
    primaryLabel: "Apply",
    primaryVariant: "primary" as const,
  },
  {
    title: "AI Academy Application · 2026-2027",
    description: "AI workshops to help you build your 1st AI project",
    meta: "opens May 25, 2026",
    primaryLabel: "Remind Me",
    primaryVariant: "accent" as const,
  },
];

export function MobileApply() {
  return (
    <MobileScreen withBottomNavPadding>
      <div className="px-6 pt-10">
        <h1 className="font-garet text-2xl font-extrabold text-ink">
          Choose Your <span className="text-primary">AIS Path</span>
        </h1>
        <p className="mt-2 font-garet text-sm text-ink/60">
          Welcome to the enrollment hub. Whether you&apos;re here to learn,
          lead, or build, there&apos;s a place waiting for you.
        </p>
        <div className="mt-4 h-px w-full bg-accent" />

        <h2 className="mt-5 font-garet text-lg font-extrabold text-ink">
          How to Begin
        </h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`relative overflow-hidden rounded-2xl border border-primary/30 bg-white p-3 ${
                step.number === "3" ? "col-span-2" : ""
              }`}
            >
              <p className="font-garet text-[10px] font-bold tracking-wide text-primary">
                STEP {step.number}
              </p>
              <p className="mt-1 font-garet text-sm font-extrabold text-ink">
                {step.title}
              </p>
              <p className="mt-1 font-garet text-xs text-ink/50">
                {step.body}
              </p>
              <span className="pointer-events-none absolute -bottom-3 -right-1 font-garet text-5xl font-black text-primary/10">
                {step.number}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-4">
          {programs.map((program) => (
            <Card key={program.title} className="border border-black/5">
              <div className="flex items-start justify-between">
                <div className="h-8 w-8 rounded-lg bg-soft-purple" />
                {program.badge && (
                  <span className="inline-flex items-center rounded-full bg-accent/30 px-2.5 py-1 font-garet text-xs font-bold text-accent-dark">
                    {program.badge}
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-garet text-lg font-extrabold text-ink">
                {program.title}
              </h3>
              <p className="mt-1 font-garet text-xs text-ink/50">
                {program.description}
              </p>
              <div className="mt-3 flex gap-2">
                {program.tags.map((tag) => (
                  <Pill key={tag} color="closed">
                    {tag}
                  </Pill>
                ))}
              </div>
              <Button variant={program.cta} className="mt-4 w-full">
                Apply Now <span aria-hidden>→</span>
              </Button>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-6 overflow-hidden bg-primary py-2">
        <p className="whitespace-nowrap font-garet text-xs font-bold tracking-widest text-white">
          JOIN THE MOVEMENT · AIS UTD · BUILD THE FUTURE · AIS UTD · JOIN THE
          MOVEMENT · AIS UTD
        </p>
      </div>

      <div className="px-6 pt-6">
        <h2 className="font-garet text-lg font-extrabold text-ink">
          Open Applications Right Now
        </h2>
        <div className="mt-3 flex flex-col gap-3">
          {openApplications.map((app) => (
            <Card key={app.title} className="border border-black/5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-garet text-sm font-extrabold text-ink">
                    {app.title}
                  </p>
                  <p className="mt-1 font-garet text-xs text-ink/50">
                    {app.description}
                  </p>
                </div>
                <Button variant="secondary" className="shrink-0 text-xs">
                  Learn more
                </Button>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <p className="font-garet text-[11px] text-ink/40">
                  {app.meta}
                </p>
                <Button variant={app.primaryVariant} className="text-xs">
                  {app.primaryLabel}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav />
    </MobileScreen>
  );
}
