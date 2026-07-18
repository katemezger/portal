import { MobileScreen } from "@/components/mobile/ui/MobileScreen";
import { Card } from "@/components/mobile/ui/Card";
import { Button } from "@/components/mobile/ui/Button";
import { Pill } from "@/components/mobile/ui/Pill";
import { BottomNav } from "@/components/mobile/ui/BottomNav";

const upNextEvent = {
  title: "Fall Kickoff",
  etaLabel: "UP NEXT · IN 3 DAYS",
  date: "Aug 27, 2026 · 7:00 PM",
  location: "ECSW 1.315",
  tags: ["social", "food", "learn"] as const,
};

const rsvps = [
  { day: "27", title: "Fall Kickoff", detail: "7:00 PM · ECSW 1.315" },
  { day: "03", title: "Intro to PyTorch", detail: "6:00 PM · ECSW 1.355" },
];

const applications = [
  { title: "AIM Mentor · Fall 2026", status: "Active" as const, progress: 70 },
  { title: "AIS Tech Officer", status: "Draft" as const, progress: 20 },
];

const recommended = [
  { title: "Intro to PyTorch", tags: ["workshop", "learn"] as const },
  { title: "Sponsor Mixer", tags: ["industry"] as const },
];

const achievements = [
  { value: "★", label: "RANK · Novice", tone: "accent" as const },
  { value: "3", label: "F26 EVENTS", tone: "soft" as const },
  { value: "4", label: "LIFETIME EVENTS", tone: "soft" as const },
];

const announcements = [
  {
    title: "Officer apps close June 1",
    body: "Last call to apply for the 2026-27 team.",
  },
  {
    title: "Kickoff moved to ECSW 1.315",
    body: "New room, same time — see you there.",
  },
];

export function MobileDashboard() {
  return (
    <MobileScreen withBottomNavPadding>
      <div className="px-6 pt-10">
        <h1 className="font-garet text-2xl font-extrabold text-primary">
          Welcome back, Member! :)
        </h1>
        <div className="mt-3">
          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1.5 font-garet text-xs font-bold text-ink">
            2 NEW ANNOUNCEMENTS!
          </span>
        </div>

        <Card className="mt-4">
          <div className="flex items-start justify-between">
            <p className="font-garet text-xs font-bold tracking-wide text-ink/40">
              {upNextEvent.etaLabel}
            </p>
            <div className="h-10 w-10 rounded-md border border-ink/15" />
          </div>
          <div className="mt-2 flex gap-3">
            <div className="h-16 w-16 shrink-0 rounded-xl bg-ink/10" />
            <div>
              <h3 className="font-garet text-lg font-extrabold text-ink">
                {upNextEvent.title}
              </h3>
              <p className="font-garet text-xs text-ink/50">
                {upNextEvent.date}
              </p>
              <p className="font-garet text-xs text-ink/50">
                {upNextEvent.location}
              </p>
            </div>
          </div>
          <Button className="mt-3 w-full">Add to Calendar</Button>
          <div className="mt-3 flex gap-2">
            {upNextEvent.tags.map((tag) => (
              <Pill key={tag} color={tag}>
                {tag}
              </Pill>
            ))}
          </div>
        </Card>

        <div className="mt-4 flex gap-3">
          <Card className="flex-[1.3]">
            <h3 className="font-garet text-sm font-extrabold text-ink">
              Your RSVPs
            </h3>
            <div className="mt-3 flex flex-col gap-3">
              {rsvps.map((rsvp) => (
                <div key={rsvp.title} className="flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-soft-purple font-garet text-xs font-bold text-primary">
                    {rsvp.day}
                  </div>
                  <div>
                    <p className="font-garet text-xs font-bold text-ink">
                      {rsvp.title}
                    </p>
                    <p className="font-garet text-[11px] text-ink/50">
                      {rsvp.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex flex-1 flex-col justify-between rounded-2xl bg-primary p-4 text-white">
            <p className="font-garet text-sm font-bold">
              Nothing on your calendar this week?
            </p>
            <Button variant="accent" className="mt-3 w-full text-xs">
              Browse Events
            </Button>
          </div>
        </div>

        <Card className="mt-4">
          <div className="flex items-center justify-between">
            <h3 className="font-garet text-sm font-extrabold text-ink">
              Your Applications
            </h3>
            <a href="#" className="font-garet text-xs font-bold text-primary">
              View all
            </a>
          </div>
          <div className="mt-3 flex flex-col gap-4">
            {applications.map((app) => (
              <div key={app.title}>
                <div className="flex items-center justify-between">
                  <p className="font-garet text-xs font-bold text-ink">
                    {app.title}
                  </p>
                  <span
                    className={`rounded-full px-2.5 py-1 font-garet text-[11px] font-bold ${
                      app.status === "Active"
                        ? "bg-blue-200 text-blue-800"
                        : "bg-black/10 text-ink/50"
                    }`}
                  >
                    {app.status}
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-input">
                  <div
                    className="h-1.5 rounded-full bg-primary"
                    style={{ width: `${app.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="mt-4">
          <div className="flex items-center justify-between">
            <h3 className="font-garet text-sm font-extrabold text-ink">
              Recommended for you
            </h3>
            <a href="#" className="font-garet text-xs font-bold text-primary">
              Refresh
            </a>
          </div>
          <div className="mt-3 flex flex-col gap-3">
            {recommended.map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-ink/10" />
                <div className="flex-1">
                  <p className="font-garet text-xs font-bold text-ink">
                    {item.title}
                  </p>
                  <div className="mt-1 flex gap-1.5">
                    {item.tags.map((tag) => (
                      <Pill key={tag} color={tag}>
                        {tag}
                      </Pill>
                    ))}
                  </div>
                </div>
                <Button className="text-xs">RSVP</Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="mt-4">
          <h3 className="font-garet text-sm font-extrabold text-ink">
            Your Achievements
          </h3>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {achievements.map((item) => (
              <div
                key={item.label}
                className={`rounded-xl p-3 text-center ${
                  item.tone === "accent" ? "bg-accent/40" : "bg-soft-purple"
                }`}
              >
                <p className="font-garet text-xl font-extrabold text-ink">
                  {item.value}
                </p>
                <p className="mt-1 font-garet text-[10px] font-bold text-ink/60">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-4 rounded-2xl bg-accent/25 p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-garet text-sm font-extrabold text-ink">
              Announcements
            </h3>
            <span className="font-garet text-xs font-bold text-accent-dark">
              2 new
            </span>
          </div>
          <div className="mt-3 flex flex-col divide-y divide-ink/10">
            {announcements.map((item) => (
              <div key={item.title} className="py-2 first:pt-0 last:pb-0">
                <p className="font-garet text-xs font-bold text-ink">
                  {item.title}
                </p>
                <p className="font-garet text-[11px] text-ink/60">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </MobileScreen>
  );
}
