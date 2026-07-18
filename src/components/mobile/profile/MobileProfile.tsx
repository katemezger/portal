"use client";

import { useState } from "react";
import { MobileScreen } from "@/components/mobile/ui/MobileScreen";
import { Card } from "@/components/mobile/ui/Card";
import { Button } from "@/components/mobile/ui/Button";
import { TextField } from "@/components/mobile/ui/TextField";
import { BottomNav } from "@/components/mobile/ui/BottomNav";

export function MobileProfile() {
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <MobileScreen withBottomNavPadding>
      <div className="px-6 pt-10">
        <h1 className="sr-only">Mobile Profile</h1>

        <div className="flex gap-3">
          <Card className="flex flex-1 flex-col items-center justify-center border border-black/5 text-center">
            <div className="h-16 w-16 rounded-full bg-ink/10" />
            <p className="mt-2 font-garet text-sm font-extrabold text-primary">
              Name Lastname
            </p>
            <span className="mt-1 inline-flex items-center rounded-full bg-accent/40 px-2.5 py-1 font-garet text-[10px] font-bold text-accent-dark">
              Major · Year
            </span>
          </Card>
          <Card className="flex-1 border border-black/5">
            <p className="font-garet text-xs font-extrabold text-primary">
              Links
            </p>
            <div className="mt-2 flex flex-col gap-2">
              <div>
                <p className="font-garet text-[11px] font-bold text-ink">
                  LinkedIn
                </p>
                <div className="mt-1 h-6 rounded-md bg-input" />
              </div>
              <div>
                <p className="font-garet text-[11px] font-bold text-ink">
                  Github
                </p>
                <div className="mt-1 h-6 rounded-md bg-input" />
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-4 border border-black/5">
          <h2 className="font-garet text-sm font-extrabold text-primary">
            Personal Info
          </h2>
          <div className="mt-3 flex flex-col gap-3">
            <TextField id="full-name" label="Full Name" placeholder="" />
            <TextField id="email" label="Email" type="email" placeholder="" />
            <TextField id="utd-id" label="UTD ID" placeholder="" />
            <TextField id="major" label="Major" placeholder="" />
            <TextField
              id="academic-year"
              label="Academic Year"
              placeholder=""
            />
          </div>
        </Card>

        <Card className="mt-4 border border-black/5">
          <h2 className="font-garet text-sm font-extrabold text-primary">
            Resume Upload
          </h2>
          <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-dashed border-ink/20 p-3">
            <div>
              <p className="font-garet text-xs font-bold text-ink">
                Upload New Resume
              </p>
              <p className="font-garet text-[11px] text-ink/40">
                PDF, DOCX, up to 5MB.
              </p>
            </div>
            <Button className="shrink-0 text-xs">Select File</Button>
          </div>
        </Card>

        <Card className="mt-4 border border-black/5">
          <h2 className="font-garet text-sm font-extrabold text-primary">
            Security
          </h2>
          <div className="mt-3 flex items-center justify-between rounded-xl bg-accent/20 p-3">
            <div>
              <p className="font-garet text-xs font-bold text-ink">
                Change Password
              </p>
              <p className="font-garet text-[11px] text-ink/50">
                Update your account password
              </p>
            </div>
            <Button variant="accent" className="shrink-0 text-xs">
              Reset Password
            </Button>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-xl bg-accent/20 p-3">
            <div>
              <p className="font-garet text-xs font-bold text-ink">
                Email Notifications
              </p>
              <p className="font-garet text-[11px] text-ink/50">
                Receive updates from AIS about events and new roles
              </p>
            </div>
            <button
              type="button"
              onClick={() => setEmailNotifications((v) => !v)}
              aria-pressed={emailNotifications}
              className={`h-6 w-11 shrink-0 rounded-full p-0.5 transition-colors ${
                emailNotifications ? "bg-primary" : "bg-ink/20"
              }`}
            >
              <span
                className={`block h-5 w-5 rounded-full bg-white transition-transform ${
                  emailNotifications ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </Card>

        <div className="mt-4 flex gap-3">
          <Button variant="accent" className="flex-1">
            Cancel
          </Button>
          <Button className="flex-1">Apply Changes</Button>
        </div>
      </div>

      <BottomNav />
    </MobileScreen>
  );
}
