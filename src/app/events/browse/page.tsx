import { MobileEventsBrowse } from "@/components/mobile/events/MobileEventsBrowse";

export default function EventsBrowsePage() {
  return (
    <>
      <div className="md:hidden">
        <MobileEventsBrowse />
      </div>
      <div className="hidden md:block">{/* desktop events browse page */}</div>
    </>
  );
}
