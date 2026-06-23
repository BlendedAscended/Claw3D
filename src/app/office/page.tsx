import { Suspense } from "react";
import { RunningAvatarLoader } from "@/features/agents/components/RunningAvatarLoader";
import { AgentStoreProvider } from "@/features/agents/state/store";
import { OfficeScreen } from "@/features/office/screens/OfficeScreen";

const ENABLED_RE = /^(1|true|yes|on)$/i;

const readDebugFlag = (value: string | undefined): boolean => {
  const normalized = (value ?? "").trim();
  if (!normalized) return true;
  return ENABLED_RE.test(normalized);
};

const readEnabledFlag = (value: string | undefined): boolean =>
  ENABLED_RE.test((value ?? "").trim());

function OfficeLoadingFallback() {
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-background"
      aria-label="Loading office"
      role="status"
    >
      <div className="flex flex-col items-center gap-3">
        <RunningAvatarLoader
          size={28}
          trackWidth={76}
          label="Loading..."
          labelClassName="text-muted-foreground"
        />
      </div>
    </div>
  );
}

export default function OfficePage() {
  const showOpenClawConsole = readDebugFlag(process.env.DEBUG);
  const showcaseMode = readEnabledFlag(
    process.env.NEXT_PUBLIC_CLAW3D_SHOWCASE_MODE || process.env.CLAW3D_SHOWCASE_MODE,
  );

  return (
    <AgentStoreProvider>
      <Suspense fallback={<OfficeLoadingFallback />}>
        <div
          className="h-full w-full"
          data-claw3d-showcase={showcaseMode ? "true" : undefined}
        >
          <OfficeScreen
            showOpenClawConsole={showOpenClawConsole}
            showcaseMode={showcaseMode}
          />
        </div>
      </Suspense>
    </AgentStoreProvider>
  );
}
