"use client";

import { useState } from "react";
import { MobileScreen } from "@/components/mobile/ui/MobileScreen";
import { Card } from "@/components/mobile/ui/Card";
import { Button } from "@/components/mobile/ui/Button";
import { TextField } from "@/components/mobile/ui/TextField";

type Mode = "signup" | "login";

export function MobileOnboarding() {
  const [mode, setMode] = useState<Mode>("signup");

  return (
    <MobileScreen>
      <div className="bg-cream px-6 pt-10 pb-10">
        <AisLogo />
        <h1 className="mt-6 text-[28px] font-extrabold leading-[1.15] text-ink">
          Step into the world of{" "}
          <span className="text-primary">artificial intelligence</span>
        </h1>
      </div>

      <div className="relative z-10 -mt-4 px-6">
        <Card className="p-5 shadow-xl">
          <div className="flex rounded-full bg-input p-1">
            <button
              type="button"
              onClick={() => setMode("signup")}
              className={`flex-1 rounded-full py-2 font-garet text-sm font-bold transition-colors ${
                mode === "signup" ? "bg-white shadow-sm" : "text-ink/40"
              }`}
            >
              Sign up
            </button>
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`flex-1 rounded-full py-2 font-garet text-sm font-bold transition-colors ${
                mode === "login" ? "bg-white shadow-sm" : "text-ink/40"
              }`}
            >
              Log in
            </button>
          </div>

          <h2 className="mt-5 text-xl font-extrabold text-ink">
            {mode === "signup" ? "Create your account" : "Welcome back"}
          </h2>

          <form className="mt-4 flex flex-col gap-4">
            <TextField
              id="utd-email"
              label="UTD Email"
              type="email"
              placeholder="netid@utdallas.edu"
              autoComplete="email"
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              placeholder="••••••••"
              autoComplete={
                mode === "signup" ? "new-password" : "current-password"
              }
            />

            <Button type="submit" className="mt-2 w-full">
              View Dashboard <span aria-hidden>↗</span>
            </Button>

            <p className="text-center font-garet text-xs text-ink/40">
              {mode === "signup"
                ? "we'll send a link to validate your email"
                : "forgot your password?"}
            </p>
          </form>
        </Card>
      </div>

      <div className="-mt-4 bg-primary px-6 pt-16 pb-20">
        <div className="flex justify-center">
          <Button variant="accent">
            Join Discord <span aria-hidden>↗</span>
          </Button>
        </div>
      </div>
    </MobileScreen>
  );
}

function AisLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-black text-white">
        AI
      </div>
      <div className="leading-[1.1] font-placard uppercase">
        <div className="text-[13px] font-extrabold tracking-wide text-ink">
          Artificial
        </div>
        <div className="text-[13px] font-extrabold tracking-wide text-primary">
          Intelligence
        </div>
        <div className="text-[13px] font-extrabold tracking-wide text-accent-dark">
          Society
        </div>
      </div>
    </div>
  );
}
