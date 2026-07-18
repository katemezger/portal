export function MobileScreen({
  children,
  withBottomNavPadding = false,
}: {
  children: React.ReactNode;
  withBottomNavPadding?: boolean;
}) {
  return (
    <div className="min-h-screen bg-cream font-garet text-ink">
      <div
        className={`mx-auto min-h-screen max-w-[430px] overflow-hidden bg-cream ${
          withBottomNavPadding ? "pb-20" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
