# PostHog post-wizard report

The wizard completed a Next.js App Router PostHog integration using `instrumentation-client.ts` for client initialization, a reverse-proxy rewrite in `next.config.ts`, local environment variable wiring in `.env.local`, a reusable server client in `lib/posthog-server.ts`, and targeted product analytics instrumentation across the main visitor journey and client-side rendering error path. Verification completed successfully with a scoped ESLint run and a production `next build`.

| Event name | Description | File |
| --- | --- | --- |
| `explore_events_clicked` | Captured when a visitor clicks the primary explore events call to action. | `components/ExploreBtn.tsx` |
| `event_card_clicked` | Captured when a visitor opens a featured event card from the listing. | `components/EventCard.tsx` |
| `create_event_cta_clicked` | Captured when a visitor clicks the create event navigation call to action. | `components/Navbar.tsx` |
| `light_rays_render_error` | Captured when the animated background hits a client-side rendering or cleanup error. | `components/LightRays.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) dashboard](https://us.posthog.com/project/512974/dashboard/1850712)
- [Explore CTA clicks (wizard)](https://us.posthog.com/project/512974/insights/qislrehA)
- [Featured event card clicks (wizard)](https://us.posthog.com/project/512974/insights/pe4Mk0Js)
- [Create event CTA clicks (wizard)](https://us.posthog.com/project/512974/insights/Hr7gAIbm)
- [Light rays render errors (wizard)](https://us.posthog.com/project/512974/insights/lSBWXYbS)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add the exact PostHog env var names you added to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
