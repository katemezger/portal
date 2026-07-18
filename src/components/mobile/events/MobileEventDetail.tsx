import Link from "next/link";
import { MobileScreen } from "@/components/mobile/ui/MobileScreen";
import { Button } from "@/components/mobile/ui/Button";
import { Pill } from "@/components/mobile/ui/Pill";
import { BottomNav } from "@/components/mobile/ui/BottomNav";

const event = {
  title: "Fall Kickoff",
  description:
    "Learn about AIS and get insider notes on how to apply to our initiatives like AIM, Innovation Labs and AI Academy.",
  date: "Aug 27, 2026 · 7:00 PM",
  location: "ECSW 1.315",
  tags: ["social", "food", "learn"] as const,
  checkedIn: true,
};

export function MobileEventDetail({ eventId }: { eventId: string }) {
  return (
    <MobileScreen withBottomNavPadding>
      <div className="px-6 pt-10">
        <Link
          href="/events/browse"
          className="font-garet text-sm font-bold text-primary"
        >
          ← All Events
        </Link>

        <h1 className="mt-3 font-garet text-2xl font-extrabold text-ink">
          {event.title}
        </h1>
        <p className="mt-2 font-garet text-sm text-ink/60">
          {event.description}
        </p>
        <p className="mt-2 font-garet text-xs text-ink/50">
          {event.date} · {event.location}
        </p>
        <div className="mt-3 flex gap-2">
          {event.tags.map((tag) => (
            <Pill key={tag} color={tag}>
              {tag}
            </Pill>
          ))}
        </div>

        <div className="mt-4 h-56 w-full rounded-2xl bg-ink/10" />

        {event.checkedIn && (
          <div className="mt-4 rounded-2xl bg-emerald-100 p-4">
            <p className="font-garet text-sm font-extrabold text-emerald-800">
              Checked In!!
            </p>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl border-2 border-ink bg-white">
                <div className="grid grid-cols-4 gap-0.5 p-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-2 ${
                        (i * 7) % 3 === 0 ? "bg-ink" : "bg-transparent"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <Button variant="accent" className="w-full text-xs">
                  Cancel RSVP
                </Button>
                <Button className="w-full text-xs">Add to Calendar</Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </MobileScreen>
  );
}
