import { MobileEvents } from "@/components/mobile/events/MobileEvents";

export default function EventsPage() {
  return (
    <>
      <div className="md:hidden">
        <MobileEvents />
      </div>
      <div className="hidden md:block">{/* desktop events page */}</div>
    </>
  );
}
