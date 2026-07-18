import Link from "next/link";
import { MobileScreen } from "@/components/mobile/ui/MobileScreen";
import { Card } from "@/components/mobile/ui/Card";
import { Button } from "@/components/mobile/ui/Button";
import { Pill, type PillColor } from "@/components/mobile/ui/Pill";
import { BottomNav } from "@/components/mobile/ui/BottomNav";

const filters = ["All Events", "food", "social", "workshop", "drink", "networking"];

const events: {
  id: string;
  title: string;
  meta: string;
  description: string;
  tags: PillColor[];
}[] = [
  {
    id: "fall-kickoff",
    title: "Fall Kickoff",
    meta: "ECSW 2.412 · 08/27/26 · 7:00 PM",
    description: "Learn about & join AIS",
    tags: ["food", "social"],
  },
  {
    id: "intro-to-pytorch",
    title: "Intro to PyTorch",
    meta: "ECSW 1.355 · 09/03/26 · 6:00 PM",
    description: "Hands-on ML workshop",
    tags: ["workshop", "learn"],
  },
  {
    id: "sponsor-mixer",
    title: "Sponsor Mixer",
    meta: "TBD · 09/10/26 · 7:00 PM",
    description: "Network with industry",
    tags: ["networking", "industry"],
  },
  {
    id: "aim-social",
    title: "AIM Social",
    meta: "ECSW 1.315 · 09/17/26 · 6:00 PM",
    description: "Meet your AIM cohort",
    tags: ["food", "social"],
  },
];

export function MobileEventsBrowse() {
  return (
    <MobileScreen withBottomNavPadding>
      <div className="px-6 pt-10">
        <h1 className="font-garet text-2xl font-extrabold text-primary">
          Pick Your Next Sidequest
        </h1>
        <p className="mt-2 font-garet text-sm text-ink/60">
          Join us to learn, build, and connect with the AIS community
        </p>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {filters.map((filter, i) => (
            <span
              key={filter}
              className={`inline-flex shrink-0 items-center rounded-full px-3 py-1.5 font-garet text-xs font-bold ${
                i === 0
                  ? "bg-soft-purple text-primary"
                  : "bg-black/5 text-ink/50"
              }`}
            >
              {filter}
            </span>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {events.map((event) => (
            <Link key={event.id} href={`/events/${event.id}`}>
              <Card className="border border-black/5">
                <div className="h-16 w-full rounded-xl bg-ink/10" />
                <p className="mt-2 font-garet text-sm font-extrabold text-ink">
                  {event.title}
                </p>
                <p className="font-garet text-[10px] text-ink/40">
                  {event.meta}
                </p>
                <p className="mt-1 font-garet text-[11px] text-ink/50">
                  {event.description}
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-1.5">
                  <div className="flex flex-wrap gap-1">
                    {event.tags.map((tag) => (
                      <Pill key={tag} color={tag}>
                        {tag}
                      </Pill>
                    ))}
                  </div>
                  <Button className="text-[11px]">RSVP</Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />
    </MobileScreen>
  );
}
