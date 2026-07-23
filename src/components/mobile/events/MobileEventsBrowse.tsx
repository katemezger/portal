import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { MobileScreen } from "@/components/mobile/ui/MobileScreen";
import { BottomNav } from "@/components/mobile/ui/BottomNav";
import { eventFilterTags, browseEvents } from "@/lib/data";

export function MobileEventsBrowse() {
  return (
    <MobileScreen>
      <div className="flex flex-col gap-[8px]">
        <h1 className="font-mobile-display text-[22px] font-bold text-ink">
          Pick Your Next Sidequest
        </h1>
        <p className="font-mobile-body text-[13px] text-ink-muted">
          Join us to learn, build, and connect with the AIS community
        </p>
      </div>

      {/* Filter pills */}
      <div className="-mx-[20px] flex gap-[8px] overflow-x-auto px-[20px] pb-[2px]">
        <span className="shrink-0 rounded-full bg-brand px-[14px] py-[6px] font-mobile-body text-[12px] font-bold text-white">
          All Events
        </span>
        {eventFilterTags.map((t) => (
          <span key={t.label} className="shrink-0">
            <Tag label={t.label} bg={t.bg} color={t.color} />
          </span>
        ))}
      </div>

      {/* Event grid */}
      <div className="grid grid-cols-2 gap-[12px]">
        {browseEvents.map((event) => (
          <div
            key={event.title}
            className="flex flex-col rounded-[14px] border border-border-soft bg-white p-[14px]"
          >
            <div className="flex h-[80px] items-center justify-center rounded-[10px] bg-photo">
              <span className="font-mono text-[9px] tracking-[1px] text-photo-text">
                PHOTO
              </span>
            </div>
            <h3 className="mt-[8px] font-mobile-display text-[13px] font-bold leading-[16px] text-ink">
              {event.title}
            </h3>
            <p className="mt-[4px] font-mono text-[9.5px] leading-[13px] text-ink-faint">
              {event.meta}
            </p>
            <p className="mt-[4px] font-mobile-body text-[11px] leading-[15px] text-ink-muted">
              {event.description}
            </p>
            <div className="mt-[8px] flex flex-wrap gap-[4px]">
              {event.tags.map((t) => (
                <Tag key={t.label} label={t.label} bg={t.bg} color={t.color} />
              ))}
            </div>
            <Button variant="primary" size="sm" block className="mt-[10px]">
              RSVP
            </Button>
          </div>
        ))}
      </div>

      <BottomNav />
    </MobileScreen>
  );
}
