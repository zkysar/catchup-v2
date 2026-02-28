# Catchup AI Social Planning PRD

## TL;DR

Coordinating social plans among friends is tedious and often fails due to scheduling friction, scattered communication, and lack of reminders. Catchup uses AI to simplify social gathering coordination, integrating text, voice, and image input with lightweight plan management and SMS reminders. Designed for tech-savvy, socially active young and mid-career professionals, Catchup brings seamless, proactive, and delightful planning to the social, not business, domain.

---

## Goals

### Business Goals

- Achieve 10,000 monthly active users within the first 6 months of launch.
- Facilitate at least 5,000 successfully completed social plans within the first quarter post-launch.
- Ensure 75% of all created plans transition to a confirmed state (plan finalized and not abandoned).
- Maintain a user retention rate of at least 30% at three months post sign-up.
- Gather NPS feedback from at least 25% of organizers post-event.

### User Goals

- Reduce time and effort required to agree on a social gathering date and place.
- Allow users to initiate and share a new plan with friends in under 60 seconds.
- Provide AI-driven suggestions and conflict resolution to avoid endless group chat loops.
- Ensure all invitees, even those without accounts, can easily contribute availability and receive reminders.
- Deliver a frictionless, lightweight experience that's cheery and easy to use on mobile and desktop.

### Non-Goals

- In-app contact management, directory, or native contacts syncing (for MVP).
- Any features designed for corporate, work, or business-related scheduling.
- Advanced granular data source controls (e.g., per-plan calendar/contact selection).
- Deep integrations with social media or messaging platforms for auto-invites (organizer shares link externally).

---

## User Stories

### Personas

#### Busy Professional (e.g., Alex, 32, Software Engineer)

- As a busy professional, I want to quickly find a common time for my group to meet up, so that it doesn't require endless back-and-forth.
- As a busy professional, I want to share a plan invite link into my group chat, so that my friends can easily submit availability without having to sign up.
- As a busy professional, I want AI suggestions for times and venues, so that I don't have to research or think about logistics.
- As a busy professional, I want to get SMS reminders for events, so that I don't forget plans I committed to.

#### Community Organizer (e.g., Priya, 28, Activity Club Leader)

- As a community organizer, I want to create a plan and collect responses even if people don't have Google accounts, so that anyone in my group can participate.
- As a community organizer, I want to see which invitees have received SMS reminders and resend to those who haven't, so that everyone is in the loop.
- As a community organizer, I want invitees to suggest locations, so that we can crowdsource venue ideas when needed.

#### College Student (e.g., Jamie, 20, Student Activities Rep)

- As a college student, I want to use voice or images to describe an event idea, so that I can plan hangouts on the go with minimal typing.
- As a college student, I want to join plans via a link without creating an account, but also be nudged to sign up for reminders.
- As a college student, I want to see AI-suggested "next steps" in planning, so that making group plans is fast and fun.

---

## Functional Requirements

### Plan Creation & Sharing (Priority: Critical)

- **Create Plan:** Organizer can initiate new plan with title, description, and (optionally) voice, text, or image input.
- **Share Link:** Organizer receives a plan-specific, shareable link to circulate in any external group chat or channel (WhatsApp, Discord, Slack, etc.).
- **Plan States:** Plans have clear statuses: Draft → Collecting Availability → Confirmed → Completed/Archived.

### AI Chat & Suggestions (Priority: Critical)

- **AI Chat Agent:** Floating AI chat available on all plan pages, accepts text, voice, and image input.
- **Proactive Suggestions:** AI surfaces time, venue, and next step suggestions in the form of "chips" or "pills" at appropriate moments (especially when conflicts arise).
- **Conflict Resolution:** Automatically detect availability/location conflicts and suggest actionable fixes on the plan summary screen.

### Invitee Interaction (Priority: Critical)

- **Availability Page:** Invitees can respond with availability (calendar connect or manual entry), display full name, and (optionally) suggest or vote on locations if enabled.
- **Non-Account Flows:** Allow submissions without requiring account creation; only minimal info (full name) required.
- **SMS Reminder Signup:** Clear CTA for invitees to create an account and provide phone number for SMS reminders and updates.

### Notification System (Priority: High)

- **SMS Notifications:** Plans and reminders are sent via SMS where invitees have opted in; fallback to manual "copy link/message" for non-SMS users.
- **Organizer Dashboard:** Display which invitees have received reminders and simple 1-click "copy message" button for manual followup.

### Plan Review & Confirmation (Priority: High)

- **Organizer Controls:** Organizer can see all responses, select timing/location, and confirm plan based on who is available—no requirement that all respond.
- **Location Inputs:** Organizer may allow location suggestions from invitees and review before finalizing.

### Calendar & Contact Integration (Priority: Medium)

- **Calendar Sync (Optional):** Invitee/organizer can (optionally) connect Google Calendar to share and check availability, but not required for MVP flow to proceed.
- **Contacts Integration:** Not included in MVP (no in-app contacts list or syncing).

### Security & Privacy (Priority: High)

- **Trust Controls:** Organizer can specify if non-account invitees can revisit and edit their submission (to prevent abuse).
- **Data Privacy:** All data collection explicit; no data sharing with third parties; privacy by design.

### Plan Archival (Priority: High)

- **Auto-Archival:** Completed plans are automatically moved to history; no manual archiving required.

---

## User Experience

### Entry Point & First-Time User Experience

- Users discover Catchup through direct link sharing, social media, or web search.
- Landing page features cheery, lightweight, graph-paper aesthetic.
- Clear CTA to "Create a Plan." Optionally, demo/tutorial bubbles highlight how simple sharing works.
- First-time creators prompted to name their plan, describe it, and can use text, voice, or upload images to describe the event.
- Minimal onboarding required for invitees; they access a unique plan link and can participate without creating an account (unless they want SMS reminders).

### Core Experience

**Step 1:** Organizer lands on Catchup, selects "Create a Plan."
- Clean form—fields for event name, brief description, and option to use voice or image input (handled with real-time transcription/OCR where needed).
- Option to specify if invitees can suggest locations.
- Upon submission, plan link is generated instantly.

**Step 2:** Organizer shares generated link in their preferred group chat/channel.
- No requirement for invitees to install or sign up.
- Organizer lands on dashboard showing plan status and a preview of what invitees will see.

**Step 3:** Invitees access plan availability page.
- Prompt to submit name, indicate available times (manual entry or calendar connect), and (if enabled) suggest or vote on locations.
- Submissions accepted with or without Google account/calendar. Option to create account and receive SMS reminders presented as a nudge.

**Step 4:** As invitees reply, organizer sees real-time responses on their dashboard.
- Floating AI chat agent visible at all times for organizer—can answer questions, surface timeline and location recommendations, highlight conflicts.
- Suggestion "pills" below the AI chat quickly recommend actions, e.g., "Choose best time," "Send reminders," "Suggest alternate venue."

**Step 5:** Organizer reviews responses and finalizes plan.
- Organizer decides whether to proceed with a subset of available invitees (no requirement to wait for all to reply).
- For missing responses without SMS enabled, organizer sees visual indicator and 1-click "copy message" button for manual reminders.

**Step 6:** Confirmation summary is generated and sent via SMS (if opted-in) to all confirmed attendees.
- Plan status is updated to Confirmed. Invitees who created accounts can return to plan page for details and see automatic reminders.

**Step 7:** Plan auto-archives as "Completed" past the event date.
- Organizer and invitees can access plan history, but no need to manually archive.

### Advanced Features & Edge Cases

- Power-users can describe plans via voice/image—AI transcribes/processes input for accessibility.
- Edge case: Invitees without accounts, but same name, lead to potential confusion—host can limit edits to trusted users only.
- Organizer can re-share plan link at any time; submissions are deduplicated by unique link + invitee name (with optional secondary token for SMS users).
- If event logistics (time/location) are in conflict, AI proactively surfaces easy-accept suggestions and draws attention to bottlenecks.
- Hosts can crowdsource location ideas or lock single-location selection.
- All flows must be mobile-first with minimal taps/gestures.

### UI/UX Highlights

- Graph paper, lightweight, cheery visual style.
- Floating AI chat always visible, never blocks primary actions.
- High-contrast large touch targets for mobile.
- Progressive fallback: SMS, then manual "copy to clipboard" for invites/reminders.
- State transitions (drafting, collecting, confirmed, completed) clearly marked.
- No confusing onboarding flows—invitees have one-step entry, organizers never feel "blocked."
- Accessibility: All icons/buttons have text labels, color contrast at least AA, voice input supported throughout for accessibility.

---

## Narrative

Sophie is a product designer with a packed schedule and a friend group spread across multiple cities. Every time they want to gather for a weekend brunch, the coordination process in the group chat drags on for days—half the group misses messages, suggested times overlap with undisclosed commitments, and location debates derail progress. Sophie tries to wrangle everyone with calendar polls, but responses trickle in, and by the time consensus forms, enthusiasm fades.

With Catchup, Sophie creates a plan in seconds, speaking her brunch idea into the AI chat and letting the app transcribe her vision. She shares the Catchup link in the group chat, and friends respond instantly—some connect their Google Calendars, others simply type out their names and times. The AI assistant flags an overlap conflict and proposes an alternative that works for the majority while suggesting a popular cafe nearby based on received feedback. For friends who haven't signed up, Sophie sees who will get SMS reminders and uses the one-click message copy to nudge everyone else.

Within a day, the plan is nailed down. Catchup sends confirmations to all attendees, and as the event rolls around, SMS reminders go out, ensuring no one forgets. After brunch, the plan quietly moves to Sophie's archived history, ready for her next delightful, AI-powered get-together. Sophie no longer dreads group plan logistics—she simply lets Catchup do the heavy lifting, making social connection frictionless and fun.

---

## Success Metrics

### User Adoption
- Track monthly active users (MAU); target 10,000 MAU within six months.

### Engagement
- Percentage of plans created that reach "confirmed" state; goal of 75% plan completion.

### Conversion
- % of invitees who sign up after joining via link for SMS reminders; aim for >30%.

### Plan Creation Speed
- Median time-to-plan (from "create" to "share link"); goal is <60 seconds.

### Business Retention
- User retention rate at 1, 3, and 6 months; goal is 30% at three months.

### Technical Uptime
- Service uptime >99.5%.

### Error Rate
- Cannot exceed 0.5% user-facing errors during core plan creation and submission flows.

### User-Centric Metrics

- MAU and DAU (monthly/daily active users)
- % of plans reaching "confirmed" and "completed" states
- Average steps/time to create and share a plan
- User-reported satisfaction/NPS post-event
- Number of SMS reminders delivered vs. planned

### Business Metrics

- Plan conversion rate (draft to confirmed)
- Invitee-to-user conversion rate (% of invitees creating accounts)
- Cohort retention rates at 1, 3, and 6 months
- Virality coefficient (average new users per organizer)

### Technical Metrics

- API response times < 500ms
- 99.5% system uptime
- SMS delivery success vs. failure rates
- AI chat model availability and fallback rate

### Tracking Plan

- Number of plans created
- Unique invitee links generated
- Availability responses submitted (manual vs. via calendar)
- SMS reminder sign-ups and deliveries
- Plan status transitions (draft/collecting/confirmed/completed/archived)
- AI chat engagement events (suggestion chip/clicks, voice/image usage)
- Copy-to-clipboard reminders used

---

## Technical Considerations

### Technical Needs

- **APIs:** Central event/plan API, AI chat/voice/image handling endpoints, SMS notification service.
- **Front-End:** Mobile-first responsive web UI; graph paper and lightweight theme; real-time updates for plan state and invitee responses.
- **Back-End:** Event state machine (draft/collecting/confirmed/completed), user authentication (minimal/optional for invitees), plan/response storage.
- **AI/LLM:** AI assistant for chat, conflict detection, transcription (voice/image).
- **Notification Pipeline:** SMS notification service with opt-in/opt-out logic and tracking.

### Integration Points

- Google Calendar integration (optional, OAuth as fallback for permissions)
- SMS gateway (e.g., Twilio or equivalent)
- Basic image and voice input processing (speech-to-text, OCR)
- No contacts or messaging app integration (MVP: sharing handled via link)

### Data Storage & Privacy

- Minimal, explicit data collection: Plan data, invitee names, optional calendar/auth info, SMS numbers.
- Invitee submissions stored with unique tokens; organizer dashboard maps names to responses.
- Opt-in for any personally identifiable info (e.g., SMS or calendar connect).
- All non-essential data anonymized after plan completion/archival.
- Compliance: GDPR and relevant privacy standards (privacy by design).

### Scalability & Performance

- Designed for rapid spikes during social hours/weekends (estimate support for 100,000 MAU initially).
- Event and notification processing must support bursty traffic without delay.
- Fast, real-time updates for organizer dashboards and AI agent.

### Potential Challenges

- Abuse prevention for non-account submissions (host controls for edit resubmission)
- SMS deliverability and opt-out compliance.
- Parsing diverse, unstructured user input (voice/image) accurately.
- Maintaining lightweight experience without onboarding friction.
- Ensuring AI suggestions remain relevant, not generic.

---

## Milestones & Sequencing

### Project Estimate

- **MVP:** Medium (2–4 weeks)
- **Target:** Launch core product by end of Month 1; SMS notification iteration and AI suggestion expansion by Month 2–3.

### Team Size & Composition

Lean/Small Team (3–4 total people):

- 1 Product manager (also covers QA)
- 1 Full-stack engineer
- 1 Front-end/mobile-focused developer
- 1 UX/UI designer (part-time, can be moonlighting/fractional)
- Stretch: 1 AI/ML consultant part-time (if needed for voice/image input)

### Suggested Phases

#### 1. Core MVP Build (2 weeks)

- **Deliverables:** Event plan creation flow, shareable plan links, invitee response handling, organizer dashboard, minimal AI chat (text input only), SMS notification integration (basic).
- **Responsible:** Product/engineering, design (fractional for UI prep).
- **Dependencies:** SMS gateway service, calendar integration setup.

#### 2. Enrich AI Surface Area (1 week)

- **Deliverables:** Voice and image input for chat, expanded suggestion chips, proactive conflict handling.
- **Responsible:** Engineers, part-time AI consultant for model integration.
- **Dependencies:** Speech/vision API access, robust parsing.

#### 3. Notification & Reminder Polish (1 week)

- **Deliverables:** Complete SMS pipeline, host interface for reminder status/copy-to-clipboard, invitee opt-in/opt-out logic.
- **Responsible:** Full-stack, design for icons/UI feedback.
- **Dependencies:** SMS testing, edge case flows.

#### 4. Growth & Feedback Loops (Ongoing, Week 4 onward)

- **Deliverables:** Plan auto-archival, SMS/invitee conversion tracking, user feedback and basic NPS post-event.
- **Responsible:** Product/engineering.
- **Dependencies:** None, parallelizable.

---

This phased, lean approach ensures that Catchup offers a delightful, lightweight, and AI-powered social planning experience tailored for tech-savvy professionals and young adults, optimizing for viral growth while minimizing onboarding friction and operational complexity.
