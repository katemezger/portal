import { MobileEventDetail } from "@/components/mobile/events/MobileEventDetail";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <div className="md:hidden">
        <MobileEventDetail eventId={id} />
      </div>
      <div className="hidden md:block">{/* desktop event detail page */}</div>
    </>
  );
}
