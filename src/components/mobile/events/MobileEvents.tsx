import Link from "next/link";
import { MobileScreen } from "@/components/mobile/ui/MobileScreen";
import { Card } from "@/components/mobile/ui/Card";
import { Button } from "@/components/mobile/ui/Button";
import { Pill } from "@/components/mobile/ui/Pill";
import { BottomNav } from "@/components/mobile/ui/BottomNav";

const featuredEvent = {
  title: "AIS Kickoff Social",
  badge: "Featured · Monday",
  description:
    "Join us for pizza, games, and the big reveal for the semester. Don't miss out.",
  tags: ["food", "social", "learn"] as const,
};

const smallEvents = [
  {
    title: "Python for ML Deep Dive",
    meta: "OCT 14 · 4:00 PM",
    description: "A hands-on session exploring PyTorch and data visualization.",
    tags: ["learn"] as const,
    cta: "Claim Spot",
  },
  {
    title: "Coffee & Code",
    meta: "EVERY WED · 10AM",
    description: "Casual networking at the Student Union.",
    tags: [] as const,
    cta: null,
  },
];

const pastAdventures = [
  { label: "ML Mixer", stat: null },
  { label: "AI Startup Panel", stat: null },
  { label: "500+", stat: "STUDENTS ATTENDED" },
  { label: "Hackai 2025", stat: null },
];

export function MobileEvents() {
  return (
    <MobileScreen withBottomNavPadding>
      <div className="px-6 pt-10">
        <h1 className="font-garet text-2xl font-extrabold text-primary">
          What&apos;s Happening
        </h1>
        <p className="mt-2 font-garet text-sm text-ink/60">
          Your portal to the most energetic tech community at UTD. Dive into
          workshops, socials, and hackathons designed for the bold.
        </p>

        <div className="mt-4 flex gap-2">
          <span className="inline-flex items-center rounded-full bg-accent/40 px-3 py-1.5 font-garet text-xs font-bold text-accent-dark">
            Upcoming (3)
          </span>
          <span className="inline-flex items-center rounded-full bg-black/5 px-3 py-1.5 font-garet text-xs font-bold text-ink/50">
            Past Adventures
          </span>
        </div>

        <Card className="mt-4 border border-primary/20 bg-soft-purple/30">
          <div className="flex items-center justify-between">
            <h3 className="font-garet text-lg font-extrabold text-ink">
              {featuredEvent.title}
            </h3>
            <span className="rounded-full bg-accent px-2.5 py-1 font-garet text-[11px] font-bold text-ink">
              {featuredEvent.badge}
            </span>
          </div>
          <p className="mt-1 font-garet text-xs text-ink/50">
            {featuredEvent.description}
          </p>
          <div className="mt-3 flex items-center justify-between gap-3">
            <div className="h-20 flex-1 rounded-xl bg-ink/10" />
            <div className="flex flex-col items-end gap-2">
              <div className="flex gap-1.5">
                {featuredEvent.tags.map((tag) => (
                  <Pill key={tag} color={tag}>
                    {tag}
                  </Pill>
                ))}
              </div>
              <Button className="text-xs">RSVP Now</Button>
            </div>
          </div>
        </Card>

        <div className="mt-3 flex gap-3">
          {smallEvents.map((event) => (
            <Card key={event.title} className="flex-1 border border-black/5">
              <div className="h-16 w-full rounded-xl bg-ink/10" />
              <p className="mt-2 font-garet text-[10px] font-bold text-ink/40">
                {event.meta}
              </p>
              <p className="font-garet text-sm font-extrabold text-ink">
                {event.title}
              </p>
              <p className="mt-1 font-garet text-[11px] text-ink/50">
                {event.description}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                {event.tags.map((tag) => (
                  <Pill key={tag} color={tag}>
                    {tag}
                  </Pill>
                ))}
                {event.cta && (
                  <Button variant="accent" className="text-[11px]">
                    {event.cta}
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <Link href="/events/browse" className="mt-4 block">
          <Button variant="accent" className="w-full">
            Browse Events <span aria-hidden>→</span>
          </Button>
        </Link>
      </div>

      <div className="mt-6 overflow-hidden bg-primary py-2">
        <p className="whitespace-nowrap font-garet text-xs font-bold tracking-widest text-white">
          JOIN THE MOVEMENT · AIS UTD · BUILD THE FUTURE · AIS UTD
        </p>
      </div>

      <div className="px-6 pt-6">
        <h2 className="font-garet text-lg font-extrabold text-ink">
          Past Adventures
        </h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {pastAdventures.map((item) => (
            <div
              key={item.label}
              className={`flex h-24 flex-col items-center justify-center rounded-xl text-center ${
                item.stat ? "bg-accent/30" : "bg-ink/10"
              }`}
            >
              <p className="font-garet text-lg font-extrabold text-ink">
                {item.label}
              </p>
              {item.stat && (
                <p className="font-garet text-[10px] font-bold text-ink/60">
                  {item.stat}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-3 text-center">
          <a href="#" className="font-garet text-sm font-bold text-primary">
            View Full Gallery →
          </a>
        </div>
      </div>

      <BottomNav />
    </MobileScreen>
  );
}
