# Catchup AI Social Planning PRD

## TL;DR

Coordinating social plans among friends is tedious and often fails due to scheduling friction, scattered communication, and lack of reminders. Catchup uses AI to simplify social gathering coordination, integrating text, voice, and image input with lightweight plan management and SMS reminders. Designed for tech-savvy, socially active young and mid-career professionals, Catchup brings seamless, proactive, and delightful planning to the social, not business, domain.

---

## Goals

### User Goals

- Reduce time and effort required to coordinate social gatherings.
- Allow users to initiate and share a new plan with friends in under 60 seconds.
- Provide AI-driven suggestions and conflict resolution to avoid endless group chat loops.
- Ensure all invitees, even those without accounts, can easily contribute availability and receive reminders.
- Deliver a frictionless, lightweight experience that's cheery and easy to use on mobile and desktop.

### Non-Goals

- Native contacts syncing (for MVP).
- Full-featured contact directory or contact management beyond lightweight in-app contacts.
- Any features designed for corporate, work, or business-related scheduling.
- Per-event data source controls (users set calendar and access level once in account settings, not separately for each event).
- Deep integrations with social media or messaging platforms for auto-invites (organizer shares link externally).

---

## User Stories

### Personas

#### Busy Professional (e.g., Alex, 32, Software Engineer)

- As a busy professional, I want to quickly find a common time for my group to meet up, so that it doesn't require endless back-and-forth.
- As a busy professional, I want to share a plan invite link into my group chat, so that my friends can easily submit availability.
- As a busy professional, I want AI suggestions for times and venues, so that I don't have to research or think about logistics.
- As a busy professional, I want to get SMS reminders for events, so that I don't forget plans I committed to.

#### Community Organizer (e.g., Priya, 28, Activity Club Leader)

- As a community organizer, I want to create a plan and collect responses from anyone in my group, regardless of what tools they use.
- As a community organizer, I want to see which invitees haven't opted into SMS notifications, so I can manually reach out to them since the app has no other way to contact them.
- As a community organizer, I want invitees to suggest locations, so that we can crowdsource venue ideas when needed.

#### College Student (e.g., Jamie, 20, Student Activities Rep)

- As a college student, I want to use voice or images to describe an event idea, so that I can plan hangouts on the go with minimal typing.
- As a college student, I want to join plans via a link with minimal friction.
- As a college student, I want to see AI-suggested "next steps" in planning, so that making group plans is fast and fun.

---

## Functional Requirements

### Plan Creation & Sharing (Priority: Critical)

- **Create Plan:** Organizer initiates a new plan by describing it to the AI via voice or text. Plan details (title, description, timing, etc.) are extracted automatically. Manual editing is available but the AI-driven flow is the primary path.
- **Share Link:** Organizer receives a plan-specific, shareable link to circulate in any external group chat or channel (WhatsApp, Discord, Slack, etc.).
- **Plan States:** Plans have clear statuses: Draft → Collecting Availability → Confirmed → Completed/Archived.

### AI Chat & Suggestions (Priority: Critical)

- **AI Chat Agent:** Floating AI chat available on all plan pages, accepts text, voice, and image input.
- **Proactive Suggestions:** AI surfaces time, venue, and next step suggestions in the form of "chips" or "pills" at appropriate moments (especially when conflicts arise).
- **Calendar Conflicts:** Surface scheduling conflicts detected from connected calendars (e.g., an invitee has a conflicting event) and suggest alternative times.
- **Response Conflicts:** Identify mismatches across invitee-submitted availability and suggest times that maximize attendance.

### Invitee Interaction (Priority: Critical)

- **Availability Page:** Invitees can respond with availability (calendar connect or manual entry), display full name, and (optionally) suggest or vote on locations if enabled.
- **Non-Account Flows:** Allow submissions without requiring account creation; only minimal info (full name) required.
- **SMS Reminder Signup:** Clear CTA for invitees to create an account and provide phone number for SMS reminders and updates.

### Notification System (Priority: High)

- **SMS Notifications:** Plans and reminders are sent via SMS where invitees have opted in; fallback to manual "copy link/message" for non-SMS users.

### Plan Review & Confirmation (Priority: High)

- **Organizer Controls:** Organizer can see all responses, select timing/location, and confirm plan based on who is available—no requirement that all respond.
- **Reminder Status:** Display which invitees have received reminders on the plan page itself, with a 1-click "copy message" button for manual followup. A summary card on the home page surfaces plans needing attention.
- **Location Inputs:** Organizer may allow location suggestions from invitees and review before finalizing.

### Calendar & Contact Integration (Priority: Medium)

- **Calendar Sync (Optional):** Invitee/organizer can (optionally) connect Google Calendar to share and check availability, but not required for MVP flow to proceed. Users can choose between free/busy access (read-only) or full calendar read access via a visible toggle.
- **Contacts Integration:** Lightweight in-app contact management included in MVP. Native contacts syncing is not in scope.

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
- First-time creators are nudged to describe their event idea to the AI via voice or text. Plan details are populated automatically from the conversation.
- Minimal onboarding required for invitees; they access a unique plan link and can participate immediately.

### Core Experience

**Step 1:** Organizer lands on Catchup, selects "Create a Plan."
- AI-first creation: user is nudged to describe their event idea via voice or text to the AI chat. Plan details (title, description, timing, etc.) are extracted and populated automatically as the conversation progresses. Manual editing of fields is available but not the primary flow.
- Upon submission, plan link is generated instantly.

**Step 2:** Organizer shares generated link in their preferred group chat/channel.
- No requirement for invitees to install or sign up.
- Organizer sees plan status on the home page and can preview what invitees will see from the plan page.

**Step 3:** Invitees access plan availability page.
- Prompt to submit name, indicate available times (manual entry or calendar connect), and (if enabled) suggest or vote on locations.
- Submissions accepted with or without calendar connection. Option to sign up for SMS reminders presented as a nudge.

**Step 4:** As invitees reply, organizer sees real-time responses on the plan page.
- Floating AI chat agent visible at all times for organizer—can answer questions, surface timeline and location recommendations, highlight conflicts.
- Suggestion "pills" below the AI chat quickly recommend actions, e.g., "Choose best time," "Send reminders," "Suggest alternate venue."

**Step 5:** Organizer reviews responses and finalizes plan.
- Organizer decides whether to proceed with a subset of available invitees (no requirement to wait for all to reply).
- For missing responses without SMS enabled, organizer sees visual indicator and 1-click "copy message" button for manual reminders.

**Step 6:** Confirmation summary is generated and sent via SMS (if opted-in) to all confirmed attendees.
- Plan status is updated to Confirmed. Invitees who created accounts can return to plan page for details and see automatic reminders.

**Step 7:** Plan auto-archives as "Completed" past the event date.
- Organizer and invitees can access plan history, but no need to manually archive.

### Edge Cases

- Voice and image input supported throughout plan creation—AI transcribes and processes input automatically.
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

For the MVP, success is about validating the core concept rather than hitting growth targets. Key signals to watch:

### Validation Signals
- Are plans actually reaching "confirmed" status, or do they stall out?
- How long does it take an organizer to go from "create" to "share link"?
- Do invitees who receive a link actually submit availability?
- Are organizers coming back to create a second plan?

### Lightweight Tracking
- Number of plans created and their status transitions
- Availability responses submitted (manual vs. calendar)
- SMS reminder sign-ups and delivery rates
- AI chat usage (suggestion chip clicks, voice/image input)

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
- Lightweight in-app contacts; no native contacts syncing or messaging app integration (sharing handled via link)

### Data Storage & Privacy

- Minimal, explicit data collection: Plan data, invitee names, optional calendar/auth info, SMS numbers.
- Invitee submissions stored with unique tokens; plan page maps names to responses for the organizer.
- Opt-in for any personally identifiable info (e.g., SMS or calendar connect).
- All non-essential data anonymized after plan completion/archival.
- Compliance: GDPR and relevant privacy standards (privacy by design).

### Scalability & Performance

- Designed for rapid spikes during social hours/weekends (estimate support for 100,000 MAU initially).
- Event and notification processing must support bursty traffic without delay.
- Fast, real-time updates for plan pages and AI agent.

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

- **Deliverables:** Event plan creation flow, shareable plan links, invitee response handling, home page with plan cards, plan detail page, AI chat with text/voice/image input, SMS notification integration (basic).
- **Responsible:** Product/engineering, design (fractional for UI prep).
- **Dependencies:** SMS gateway service, calendar integration setup.

#### 2. Expand AI Suggestions & Conflict Handling (1 week)

- **Deliverables:** Expanded suggestion chips, proactive conflict handling, calendar conflict detection.
- **Responsible:** Engineers.
- **Dependencies:** Calendar integration, robust parsing.

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
