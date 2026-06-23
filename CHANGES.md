## 2026-06-23 04:38 (UTC) - Simplify showcase pane and externalize CTAs

**Changes:**
- Replaced the crowded public showcase pane with a compact scrollable Virtual Office pane.
- Added top-right collapse and left-side expand controls.
- Removed visible wireframe activity fields, plan IDs, and the Wireframe Factory dock.
- Reduced the pane to status, active agent, relevant services/resources, and new-tab CTAs.
- Key file modified: `src/features/office/screens/OfficeScreen.tsx`.
- Verification: `npm run typecheck`, focused ESLint on `OfficeScreen.tsx` with warnings only, `npm run build`, PM2 restart, and public curl checks.

## 2026-06-23 04:22 (UTC) - Add Studio customer tools and agent work overlays

**Changes:**
- Added a collapsible Customer Tools drawer for booking, calendar fallback, Google Meet, and AI voice handoff actions.
- Added Website Context cards that open Growth Plan, Industry Space, Services, and Blog.
- Added visible plan ID, wireframe run ID, artifact, and handoff fields to the active agent overlay.
- Added per-agent plan and artifact metadata for future multi-wireframe run display.
- Key file modified: `src/features/office/screens/OfficeScreen.tsx`.
- Verification: `npm run typecheck`, focused ESLint on `OfficeScreen.tsx` with warnings only, `npm run build`, PM2 restart, and public curl checks.

## 2026-06-23 04:09 (UTC) - Add quick win Cloud Studio usability improvements

**Changes:**
- Reworked the public showcase panel into a compact Cloud Studio shell.
- Added a collapsible agent roster, selected agent focus card, full studio link, and start brief action.
- Added a bottom Wireframe Factory output dock for quick workflow visibility.
- Key file modified: `src/features/office/screens/OfficeScreen.tsx`.
- Verification: `npm run typecheck`, focused ESLint on `OfficeScreen.tsx` with warnings only, `npm run build`, PM2 restart, and public curl checks.

## 2026-06-23 03:17 (UTC) - Tighten showcase labels and add wireframe handoff motion

**Changes:**
- Reduced the 3D agent nameplates to agent names only.
- Added showcase handoff routes and animated paper plan packets between wireframe agents.
- Updated the shared render agent types for showcase handoff metadata.
- Restored and saved MacDaddy PM2 processes after the host came back with an empty process list.
- Key files modified: `src/features/retro-office/RetroOffice3D.tsx`, `src/features/retro-office/objects/agents.tsx`, `src/features/retro-office/objects/types.ts`, `src/features/retro-office/core/types.ts`.
- Verification: `npm run typecheck`, focused ESLint on edited helper files, `npm run build`, PM2 status, and public curl checks. Full `RetroOffice3D.tsx` ESLint still reports preexisting unused constant and React Compiler issues.

## 2026-06-22 22:44 (UTC) - Simulate continuous wireframe work in showcase mode

**Changes:**
- Added a nine agent wireframe workflow simulation for the public Veldon Lab council view.
- Routed showcase mode through simulated running AgentState records so the existing 3D office renders all agents as active.
- Suppressed gateway loading and reconnect overlays in showcase mode while keeping live runtime behavior unchanged.
- Cleaned stale duplicate Next build artifact directories that were slowing production builds.
- Verification: `npm run typecheck`, edited file ESLint with zero errors, `npm run build`, PM2 restart, and public curl checks.
