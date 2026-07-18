import { MobileApply } from "@/components/mobile/apply/MobileApply";

export default function ApplicationsPage() {
  return (
    <>
      <div className="md:hidden">
        <MobileApply />
      </div>
      <div className="hidden md:block">{/* desktop applications page */}</div>
    </>
  );
}
