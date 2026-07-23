import { Badge } from "@/components/ui/badge";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { MobileScreen } from "@/components/mobile/ui/MobileScreen";
import { BottomNav } from "@/components/mobile/ui/BottomNav";
import { applySteps, programs, openApps } from "@/lib/data";

export function MobileApply() {
  return (
    <MobileScreen>
      <div className="flex flex-col gap-[8px]">
        <h1 className="font-mobile-display text-[24px] font-bold leading-[30px] text-ink">
          Choose Your <span className="text-brand">AIS Path</span>
        </h1>
        <p className="font-mobile-body text-[14px] text-ink">
          Welcome to the enrollment hub. Whether you&apos;re here to learn,
          lead, or build, there&apos;s a place waiting for you.
        </p>
      </div>

      {/* How to Begin */}
      <div className="flex flex-col gap-[12px]">
        <h2 className="font-mobile-display text-[17px] font-bold text-ink">
          How to Begin
        </h2>
        {applySteps.map((step) => (
          <div
            key={step.step}
            className="relative flex flex-col gap-[4px] overflow-hidden rounded-[16px] border border-brand bg-white px-[18px] py-[16px]"
          >
            <p className="font-mono text-[11px] text-brand">{step.step}</p>
            <h3 className="font-mobile-display text-[16px] font-bold text-ink">
              {step.title}
            </h3>
            <p className="max-w-[230px] font-mobile-body text-[13px] text-ink-muted">
              {step.description}
            </p>
            <span
              aria-hidden
              className="pointer-events-none absolute right-[10px] top-[38px] select-none font-mobile-display text-[56px] font-extrabold leading-none text-brand-soft"
            >
              {step.number}
            </span>
          </div>
        ))}
      </div>

      {/* Programs */}
      <div className="flex flex-col gap-[12px]">
        {programs.map((program) => (
          <div
            key={program.title}
            className="flex flex-col gap-[12px] rounded-[16px] border bg-white p-[18px]"
            style={{ borderColor: program.borderColor }}
          >
            <div className="flex items-center justify-between">
              <span
                className="flex size-[40px] items-center justify-center rounded-[10px] text-[18px]"
                style={{ backgroundColor: program.iconBg, color: program.iconColor }}
              >
                {program.icon}
              </span>
              {program.badge && (
                <Badge label={program.badge} bg="#fbe3cb" color="#7a4416" />
              )}
            </div>
            <h3 className="font-mobile-display text-[17px] font-bold text-ink">
              {program.title}
            </h3>
            <p className="font-mobile-body text-[13px] text-ink-muted">
              {program.description}
            </p>
            <div className="flex flex-wrap gap-[6px]">
              {program.tags.map((label) => (
                <Tag
                  key={label}
                  label={label}
                  bg="#efece3"
                  color="#6a685f"
                  border="#e2ded2"
                />
              ))}
            </div>
            <Button variant={program.cta} size="md" pill block>
              Apply Now →
            </Button>
          </div>
        ))}
      </div>

      {/* Slogan banner (bleeds past the screen padding) */}
      <div className="-mx-[20px] rotate-[-0.8deg] scale-[1.03] bg-brand py-[14px]">
        <p className="text-center font-mobile-display text-[15px] tracking-[1px] text-white">
          JOIN THE MOVEMENT · AIS UTD · BUILD THE FUTURE
        </p>
      </div>

      {/* Open applications */}
      <div className="flex flex-col gap-[12px]">
        <h2 className="font-mobile-display text-[17px] font-bold text-ink">
          Open Applications Right Now
        </h2>
        {openApps.map((app) => (
          <div
            key={app.title}
            className="flex flex-col gap-[12px] rounded-[14px] border bg-white p-[16px]"
            style={{ borderColor: app.borderColor, opacity: app.dim ? 0.94 : 1 }}
          >
            <div>
              <h3 className="font-mobile-display text-[15px] font-bold text-ink">
                {app.title}
              </h3>
              <p className="mt-[4px] font-mobile-body text-[13px] text-ink-muted">
                {app.description}
              </p>
              <p className="mt-[4px] font-mono text-[11px] text-ink-faint">
                {app.meta}
              </p>
            </div>
            <div className="flex gap-[8px]">
              {app.actions.map((action) => (
                <Button
                  key={action.label}
                  variant={action.variant}
                  size="sm"
                  pill={action.pill}
                  className="flex-1"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </MobileScreen>
  );
}
