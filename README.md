# Flight Scout
Personal flight-search app for RNO, SMF, SFO and OAK. Built with React / Vinext; server-side SerpApi integration for Google Flights data.

## Features
- Multi-origin selection; editable Europe, South America, Asia destination shortlists, or 1–8 custom IATA airport codes.
- Round-trip/one-way dates, adult and child counts, cabin class, maximum stops slider.
- Live price and duration sorting, budget and duration filters, outbound selection and return comparison.
- Flight details, local airport times, layovers, combined duration after return selection.
- Device-local saved searches. No fictional flight prices or demo inventory.
- No-key Google Flights natural-language search links. Google may reinterpret the query: confirm all fields and filters after opening.

## Live data
Obtain a key at https://serpapi.com/google-flights-api and enter it in Live search settings. The key is held in React memory, sent in an HTTPS POST to the same-origin backend, used server-side and never persisted by the app. Alternatively set server secret SERPAPI_KEY. Never commit keys.
The API requires authenticated Sites access and a same-origin request. Preserve this private deployment boundary. Adapt authentication before hosting outside Sites. SerpApi quotas/costs apply. Region presets are airport shortlists, not exhaustive continent searches. One initial search combines the selected origins and destinations; selecting a return makes another provider call. Fares are provider-displayed values for the requested party; verify final traveler breakdown. Initial round-trip prices are starting fares. Outbound duration is explicitly labeled; combined duration appears after selecting outbound and loading returns. Saved searches contain settings, not live fare snapshots.

## Development
Use Node >=22.13, install dependencies, then npm run dev. npm run build prepares the Worker deployment. The Sites build integration must remain for Sites hosting. Server rendering and the API require a server/Worker host; GitHub Pages alone cannot execute the live search backend.

## GitHub
Source: https://github.com/alehil81/flight-scout

Live app: https://aman-flight-scout.richcreek.chatgpt.site

This private repository contains the app source. Hosting remains on ChatGPT Sites. GitHub pushes do not automatically redeploy the live app. Ask ChatGPT to apply and publish changes, or configure a compatible server/Worker deployment. Never commit API keys.

## Verification limits
No live provider key was supplied during initial creation. Provider billing/auth and real round-trip responses require an end-to-end check with a valid key. Automated checks exercise query validation, stop mapping and itinerary normalization with fixtures.
