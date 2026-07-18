import { MobileOnboarding } from "@/components/mobile/onboarding/MobileOnboarding";

export default function LoginPage() {
  return (
    <>
      <div className="md:hidden">
        <MobileOnboarding />
      </div>
      <div className="hidden md:block">{/* desktop login page */}</div>
    </>
  );
}
