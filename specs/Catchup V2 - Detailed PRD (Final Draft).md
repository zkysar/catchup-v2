# Catchup V2 — Detailed PRD (Final Draft)

**Product:** Catchup — AI-Powered Social Planning
**Authors:** Kaivalya Gandhi, Zach Kysar
**Last Updated:** March 2026
**Status:** Draft

---

## 1. TL;DR

Catchup is an AI-powered mobile-first social planning app that eliminates coordination friction for friend groups. An organizer creates a plan by describing it to an AI agent (via text, voice, or image), shares a unique link into their existing group chat, and invitees respond with their availability — no account required. The always-present AI agent aggregates availability, detects conflicts, suggests the best time and location, and manages reminders — all through a lightweight, cheery interface that feels like texting a helpful friend, not managing a project. The core differentiator is the AI agent (floating chat, voice, image, suggestion chips) that automates what would otherwise be manual back-and-forth coordination across fragmented messaging platforms. Designed for tech-savvy, socially active young and mid-career professionals, Catchup brings seamless, proactive, and delightful planning to the social — not business — domain.

---

## 2. Problem & Opportunity

### Hypothesis

We believe that socially active young professionals, college students, and community organizers fail to follow through on at least 60% of social plans because coordination is fragmented across group chats, polling tools, and manual back-and-forth — and that a dedicated AI-powered coordination layer that aggregates availability, venue decisions, and reminders into a single shared link will increase plan completion rates by 3x or more.

### Customer Pain

Plans die in group chats. A friend suggests brunch on Saturday. Three people reply "maybe." Someone shares a When2meet link that half the group ignores. Someone else suggests a restaurant but nobody confirms. Two days later the thread is buried under memes and the plan never happens.

This pattern repeats weekly for millions of socially active people who want to see their friends but find the coordination overhead exhausting. The pain is acute for organizers — the person who takes initiative and then bears the entire burden of herding the group — but it also affects invitees, who experience guilt and FOMO when plans fall through due to nobody's fault in particular.

The typical coordination failure looks like this:

1. Someone proposes an idea in a group chat ("We should get dinner soon!").
2. Availability polling begins informally and chaotically. Some people respond immediately, others forget, and the thread gets buried.
3. Calendar cross-referencing happens manually — people squint at overlapping commitments and try to mentally compute shared free windows.
4. Venue/activity negotiation starts — more back-and-forth, more opinion loops. The thread stalls again.
5. Confirmation and reminders fall through the cracks. Even when a plan is tentatively agreed on, there's no system of record. No one sends a formal confirmation. No one gets a reminder.
6. The plan dies. Not because people didn't want to hang out — but because the coordination cost was too high and no one owned the logistics.

### Competitive Landscape

No dedicated social planning layer exists today. Current alternatives are:

- **When2meet / Doodle** — Generic scheduling tools designed for professional contexts. Solve availability polling but have no coordination, reminder, or venue logic. Neither closes the loop from "idea" to "confirmed plan with reminders."
- **Partiful** — Event invitation platform gaining traction but designed for large-scale invitations, not the availability aggregation and AI-driven scheduling loop for casual 3–15 person plans.
- **Calendly / Reclaim** — Business scheduling tools. Fundamentally different problem, different stakeholders, different competitive landscape.
- **Group chats (iMessage, WhatsApp, Discord, Slack)** — The de facto coordination surface today. Plans go to die in these threads.

The white space is a lightweight, AI-native coordination tool that lives between the group chat and the calendar — abstracting the tedious multi-step negotiation into a single shareable link with intelligent defaults.

### Why Now?

Three forces make this the right moment:

1. **AI capabilities have matured** to the point where a lightweight agent can genuinely automate the tedious parts of social coordination — cross-referencing calendars, suggesting optimal times, recommending venues based on group context — without requiring complex setup or training.
2. **Calendar and identity APIs are widely accessible.** Google Calendar OAuth is trivial to implement, and email delivery infrastructure is commodity. The technical building blocks exist.
3. **Post-pandemic social re-engagement** has created a generation of people who are actively trying to rebuild and maintain their social lives but finding it harder than expected. The demand for low-friction social tools is high, and the supply is essentially zero.

### Evidence (Placeholder for User Research)

- *[Insert: Survey data on % of social plans that fail to reach completion among target demographics]*
- *[Insert: Qualitative interviews with organizers on coordination pain points]*
- Comparable product signals: Partiful has gained traction for event invitations but does not solve availability aggregation or AI-driven scheduling. When2meet solves availability polling but has no coordination, reminder, or venue logic. Neither product closes the loop from "idea" to "confirmed plan with reminders."

---

## 3. Goals

### User Goals

1. **Create and share a plan in under 60 seconds** — the AI-first plan creation flow extracts details from natural language and generates a shareable link immediately on submission.
2. **Invitees submit availability with zero friction** — no account creation, no app download, no calendar integration required. Just a name and time slots.
3. **AI eliminates manual availability cross-referencing** — the agent aggregates all responses and surfaces the best common time window automatically via suggestion chips.
4. **Organizers always know who has been notified and who hasn't** — the notification status view shows who will get email reminders and who needs a manual nudge, with a 1-click clipboard fallback message.
5. **Plans feel social and lightweight, not like project management** — the graph paper aesthetic, cheery tone, suggestion pills, and floating AI chat create an experience that feels like texting a helpful friend, not managing a Gantt chart.

### Business Goals (Aspirational — Q1 Post-Launch)

1. **5,000 completed plans in Q1 post-launch** — measured by plans reaching the Completed state (auto-archived after event end time).
2. **Virality coefficient >1.2 within 90 days** — measured by tracking new organizer accounts created from invitee link conversions.
3. **≥25% invitee-to-account conversion rate** — measured by the percentage of unique invitees who open a plan link and subsequently create a Catchup account.
4. **≥70% of created plans reach Confirmed state** — measured by plan state transitions from Draft/Pending → Confirmed.

### Non-Goals

- **Business or work scheduling** — Catchup is exclusively for social plans. No meeting room booking, no team availability, no calendar blocking for work contexts. Mixing work and social contexts would dilute the brand, confuse the AI's recommendation model, and invite feature requests that don't serve the core user.
- **Native contacts syncing (MVP)** — The contacts integration is lightweight in-app with optional Catchup v1 data import. Full native device contacts sync is deferred to Q2 after the viral loop is validated.
- **Per-plan calendar source controls** — Users who connect Google Calendar grant access across all plans. Granular per-plan calendar selection (e.g., "use only my personal calendar for this plan") is deferred to Q3 when multi-calendar users become a meaningful segment. Users do control sharing granularity (free/busy vs. event names) on a per-plan basis.
- **Native messaging integrations** — Catchup does not auto-send messages to WhatsApp, Slack, Discord, or iMessage. The organizer copies the link and pastes it manually. Platform dependency risk is high, and organizers sharing a link through their own channels feels more natural and trusted.
- **In-app real-time group messaging** — Catchup is not a chat app. The AI chat is for human-to-AI interaction only. Group coordination happens in the organizer's existing messaging platform.
- **SMS notifications (MVP)** — Email and in-app notifications are the primary channels for MVP. SMS is deferred to post-PMF as a future upgrade path, avoiding Twilio/gateway costs, phone number verification flows, and STOP keyword compliance overhead before product-market fit is validated.
- **Multi-language support** — English-only launch focused on US market. Multi-language planned for Q4 international expansion.

---

## 4. Personas

### Organizer (Authenticated User)

The organizer is the person who creates a plan and drives it to completion. They always have a Catchup account.

**Characteristics:**
- Has signed up and authenticated (email OTP or Google OAuth)
- Can create, edit, and manage plans
- Can designate invitees as "required" or "optional" during plan creation
- Controls plan settings (location suggestions enabled/disabled, anonymous edit permissions)
- Sees the full dashboard of all their plans and statuses
- Has access to the AI chat agent on plan pages
- May optionally connect a Google Calendar for conflict detection
- Receives email and in-app notifications for plan activity

**Motivations:**
- Wants to avoid being the "group chat logistics coordinator"
- Wants to quickly propose a time/place and get buy-in
- Needs visibility into who has responded, who hasn't, and who has conflicts

### Signed-Up Invitee (Authenticated User)

An invitee who has created a Catchup account, either before receiving an invite or during the invite flow.

**Characteristics:**
- Has a Catchup account with name and email (phone number optional, unused until SMS launches)
- May have a connected Google Calendar
- Can view plans they've been invited to on their own dashboard
- Their identity is verified (no impersonation risk)
- Can edit their own availability submissions at any time
- Can interact with the AI chat on the availability page for questions or conversational input

**Motivations:**
- Wants to respond quickly and not hold up the group
- Wants email reminders so they don't forget confirmed plans
- Wants to see what others have said (if organizer allows visibility)

### Anonymous Invitee (Unauthenticated User)

An invitee who accesses a plan via shared link without creating an account.

**Characteristics:**
- Has no Catchup account
- Identifies themselves only by entering a display name on the plan page
- Cannot receive email reminders (no email on file)
- Cannot connect a calendar (no account to store OAuth tokens)
- Their submission is tied to a browser session token + display name
- May or may not be allowed to edit their submission after initial entry (organizer-controlled setting)
- Can interact with the AI chat on the availability page for questions

**Motivations:**
- Wants zero friction; doesn't want to sign up for yet another app
- Wants to quickly say "I'm free Saturday afternoon" and move on
- May convert to a signed-up user if they find value

---

## 5. Detailed User Stories

### Organizer Stories

#### Plan Creation

- **US-O1:** As an organizer, I want to describe my plan idea via text or voice to the AI, so that plan details are auto-populated without manual form-filling.
- **US-O2:** As an organizer, I want to review and edit AI-extracted plan details (title, description, date range, location) before sharing, so that I can correct any misinterpretations.
- **US-O3:** As an organizer, I want to send an image (e.g., a screenshot of a venue, a flyer) to the AI during plan creation, so that it can extract relevant details.
- **US-O4:** As an organizer, I want to set whether invitees can suggest locations or if the location is fixed, so that I control the planning scope.
- **US-O5:** As an organizer, I want to set whether anonymous (non-account) invitees can edit their submissions after initial entry, so that I can prevent impersonation/abuse.
- **US-O6:** As an organizer, I want a shareable link generated immediately after plan creation, so that I can paste it into my group chat within seconds.
- **US-O7:** As an organizer, I want to designate invitees as "required" or "optional" during plan creation, so that the AI knows which conflicts are deal-breakers vs. nice-to-haves.

#### Availability & Conflict Management

- **US-O8:** As an organizer, I want to see all invitee availability responses in a consolidated view (grid/matrix), so that I can quickly identify overlapping free times.
- **US-O9:** As an organizer, I want the AI to highlight the best time slots that maximize attendance, so that I don't have to manually cross-reference.
- **US-O10:** As an organizer, I want to see when a connected invitee has a calendar conflict with a proposed time, so that I can adjust or decide to proceed without them.
- **US-O11:** As an organizer, I want the AI to proactively suggest alternative times when conflicts are detected, presented as actionable chips I can accept or dismiss.
- **US-O12:** As an organizer, I want the plan to automatically enter a "Conflict" state when a required invitee is unavailable at the proposed time, with AI-generated alternative time slots, so that I'm immediately prompted to resolve it.
- **US-O13:** As an organizer, I want to finalize a plan time even if not all invitees have responded, so that planning doesn't stall indefinitely.

#### Notifications & Follow-Up

- **US-O14:** As an organizer, I want to see which invitees have email notifications enabled and which don't, so that I know who I need to manually follow up with.
- **US-O15:** As an organizer, I want a 1-click "copy reminder message" button for invitees without accounts, so that I can paste a follow-up into external chats.
- **US-O16:** As an organizer, I want to re-share the plan link at any point, so that late additions to the group chat can still participate.
- **US-O17:** As an organizer, I want a summary card on my home page that highlights plans needing attention (missing responses, unresolved conflicts), so that I have a clear to-do list.

#### Plan Confirmation & Completion

- **US-O18:** As an organizer, I want to confirm a plan with a selected time and location, triggering confirmation notifications to all opted-in invitees.
- **US-O19:** As an organizer, I want confirmed plans to auto-archive after the event date passes, so that my dashboard stays clean.
- **US-O20:** As an organizer, I want a post-event nudge to confirm which invitees actually attended, so that attendance data is tracked and the AI can learn from real outcomes.

#### Home Screen

- **US-O21:** As an organizer with no active plans, I want AI-generated suggestion pills on my home screen (e.g., "Plan brunch with your crew?", "Organize a game night?"), so that I'm inspired to create my first plan immediately.

### Signed-Up Invitee Stories

- **US-SI1:** As a signed-up invitee, I want to click a plan link and immediately see the plan details and an availability form, without any additional login wall (if I'm already logged in on that device).
- **US-SI2:** As a signed-up invitee, I want to connect my Google Calendar to auto-populate my availability for the proposed date range, so that I don't have to type it out.
- **US-SI3:** As a signed-up invitee, I want to choose whether to share only free/busy data or also event names with the organizer, so that I control my privacy.
- **US-SI4:** As a signed-up invitee, I want to manually enter my availability if I choose not to connect a calendar.
- **US-SI5:** As a signed-up invitee, I want to suggest a location (if the organizer has enabled it), so that I can contribute venue ideas.
- **US-SI6:** As a signed-up invitee, I want to edit my submitted availability at any time before the plan is confirmed, in case my schedule changes.
- **US-SI7:** As a signed-up invitee, I want to receive email reminders for confirmed plans, so that I don't forget.
- **US-SI8:** As a signed-up invitee, I want to see plans I've been invited to on my own dashboard, so that I have a single place to track upcoming social plans.
- **US-SI9:** As a signed-up invitee, I want to opt in or out of email notifications per plan or globally, so that I control my notification preferences.
- **US-SI10:** As a signed-up invitee, I want to ask the AI chat questions on the availability page (e.g., "What time works best so far?" or "Where is this happening?"), so that I can make an informed decision.

### Anonymous Invitee Stories

- **US-AI1:** As an anonymous invitee, I want to open a plan link and submit my availability with only my name (no sign-up required), so that participating is zero-friction.
- **US-AI2:** As an anonymous invitee, I want to manually enter my available times using a simple time-slot picker or free-text input, since I can't connect a calendar without an account.
- **US-AI3:** As an anonymous invitee, I want to suggest a location (if the organizer has enabled it), even without an account.
- **US-AI4:** As an anonymous invitee, I want to see a clear nudge to create an account, so that I can get email reminders if I choose to.
- **US-AI5:** As an anonymous invitee, I want to be able to return to the plan page and see my previous submission, so that I know what I entered. (Relies on browser session token; if session is lost, submission is read-only unless organizer allows anonymous edits.)
- **US-AI6:** As an anonymous invitee who converts to a signed-up user, I want my previous anonymous submission to be linked to my new account, so that I don't have to re-enter anything.
- **US-AI7:** As an anonymous invitee, I want to ask the AI chat questions about the plan on the availability page, so that I can get context without needing an account.

---

## 6. Flow Variants

### Flow 1: Plan Creation

#### Happy Path
1. Organizer taps "Create a Plan" from home page (or taps a cold-start suggestion pill like "Plan brunch with your crew?" which pre-fills relevant context).
2. AI chat opens with a prompt: "What are you planning?"
3. Organizer describes the plan via text or voice (e.g., "Brunch this Saturday or Sunday around noon, somewhere in the Mission").
4. AI extracts and displays structured fields as an editable card: **Title** ("Brunch"), **Date Range** (Sat-Sun), **Time Window** (11am-1pm), **Area** ("Mission District"). Low-confidence extractions are visually marked (e.g., dotted underline).
5. Organizer reviews, optionally edits fields, and confirms.
6. AI asks follow-up questions one at a time if key info is missing (e.g., "Should invitees be able to suggest venues?"). Organizer can skip any question.
7. Organizer optionally designates known invitees as "required" or "optional" (can also skip — invitees self-identify via the link).
8. Plan is created in **Draft** state. Shareable link is generated.
9. Organizer copies link and shares externally. Plan moves to **Pending** (Collecting Availability).

#### Variant: Form-Based Creation (Fallback)
- If the AI agent is unavailable or the organizer prefers manual entry, a structured form is available with fields for: Title, Description, Duration (fixed/flexible), Time Block (morning/afternoon/evening), Date or Scheduling Window, Location (optional), People (required/optional designation), Crowdsource Location toggle, and Trust Toggle (anonymous edit permissions).
- Form validation: Title is the only required field. All other fields have sensible defaults or are optional.

#### Variant: Image-Based Creation
- At step 3, organizer sends a photo of a flyer or venue.
- AI uses OCR/vision to extract event name, date, time, location from the image.
- Organizer reviews extracted fields and corrects as needed.

#### Variant: Minimal Input Creation
- Organizer says "Let's do something this weekend."
- AI can only extract a vague date range. It creates a plan with Title: "Weekend Plans", Date Range: Sat-Sun, and leaves time/location blank.
- AI prompts: "Any preferences on time of day or area?" but organizer can skip and let invitees fill in.

#### Variant: Organizer Edits After Sharing
- After the link is shared and some invitees have responded, the organizer changes the date range via AI chat or manual edit.
- All existing availability submissions are flagged as "may be outdated" since the date range changed.
- Invitees who have email notifications enabled receive an email: "The plan details have been updated. Please review."
- Anonymous invitees are not notified (no contact info); the organizer sees a prompt to re-share the link.

#### Edge Cases
- **Voice transcription error:** AI misinterprets "brunch" as "lunch." Organizer sees extracted fields and corrects before confirming. AI should present low-confidence extractions with a visual indicator (e.g., dotted underline) to draw attention.
- **Empty plan:** Organizer submits with no useful input (e.g., just "hey"). AI responds conversationally and prompts for more detail. Plan is not created until at least a title or description is established.
- **Duplicate plan:** Organizer accidentally creates two plans for the same event. No system-level deduplication; organizer manages this manually. The home page makes it easy to see and delete duplicates.

---

### Flow 2: Link Sharing & Invitee Access

#### Happy Path
1. Organizer copies the plan link (e.g., `catchup.app/plan/abc123`).
2. Pastes it into a group chat (iMessage, WhatsApp, Discord, Slack, etc.).
3. Invitee taps link, lands on the plan's availability page.
4. Plan page shows: plan title, description, date range, organizer name, social proof indicator ("X people have responded"), and a form to submit availability.
5. The floating AI chat is visible at the bottom for invitee questions.

#### Variant: Signed-Up Invitee (Already Logged In)
- Invitee is recognized by their existing session.
- Their name is pre-filled. They see a "Connect Calendar" option if not already connected.
- They submit availability and it's immediately associated with their verified account.
- The plan appears on their dashboard under "Invited Plans."

#### Variant: Signed-Up Invitee (Not Logged In)
- Invitee taps link, sees the plan page with a banner: "Log in to connect your calendar and get reminders."
- They can choose to log in (redirected back to plan page after auth) or proceed anonymously.
- If they proceed anonymously, they are treated as an anonymous invitee for this submission. If they later log in, the system does NOT auto-merge (to prevent hijacking); they can re-submit under their account identity.

#### Variant: Anonymous Invitee
- Invitee taps link, sees the plan page.
- Prompted to enter their display name.
- Submits availability via manual time entry (no calendar connect option shown).
- Sees a nudge: "Want reminders? Create a free account."
- A session token is stored in their browser, tying them to this submission.

#### Variant: Re-Sharing / Late Joiners
- Organizer re-shares the link days later when a new friend joins the group chat.
- New invitee accesses the same plan page and submits availability.
- Their response is added alongside existing responses. No disruption to prior submissions.

#### Edge Cases
- **Link accessed after plan is confirmed:** Page shows read-only confirmation details (time, location, attendees) instead of the availability form. A banner says "This plan has been confirmed." Late visitors can still see the details but cannot submit availability.
- **Link accessed after plan is archived:** Page shows a summary of the past event. "This plan has already happened."
- **Link shared publicly / spam risk:** If an unusually large number of anonymous submissions arrive, the organizer sees a warning: "You've received an unusually high number of responses. Consider enabling account-only submissions." Organizer can toggle a setting to require authentication for new submissions (existing anonymous submissions are preserved).
- **Browser with cookies disabled:** Session token cannot be stored. Anonymous invitee can still submit, but cannot return to edit (behaves as a one-shot submission). The UI should not promise editability in this case.

---

### Flow 3: Availability Detection & Submission

#### Happy Path (Calendar Connect)
1. Signed-up invitee clicks "Connect Calendar" on the plan page.
2. Google OAuth flow completes (if not already connected in account settings).
3. System reads the invitee's calendar for the plan's date range.
4. A per-plan consent prompt is shown: "Share your availability with [Organizer Name] for this plan?" The prompt includes a sharing granularity toggle with two options:
   - **Free/Busy only** (default): Only free/busy time blocks are shared with the organizer. Event names, descriptions, and attendee lists are never exposed.
   - **Share event names**: Free/busy time blocks are shared along with event titles (e.g., "Work meeting", "Dentist appointment"). This helps the organizer understand the nature of conflicts and prioritize accordingly. Descriptions, attendee lists, and other metadata are still never exposed.
   The default is always "Free/Busy only." The invitee can change this setting at any time before the plan is confirmed by returning to the plan page and updating their consent preference.
5. Based on the invitee's sharing preference, the system fetches calendar data for the plan's date range. The invitee always sees their own full event names on their screen to help them decide. What the organizer sees depends on the invitee's choice:
   - If "Free/Busy only": organizer sees only "busy" blocks with no labels.
   - If "Share event names": organizer sees "busy" blocks labeled with event titles (e.g., "Busy: Work meeting"). The AI can also reference event names when explaining conflicts to the organizer (e.g., "Alex has a work meeting until 2:30pm — would 3pm work instead?").
   In both modes, fellow invitees never see each other's calendar data — only the organizer sees the aggregated availability grid.
6. Invitee reviews auto-detected availability, optionally adjusts, and submits. Calendar data is discarded server-side after availability is computed.

#### Happy Path (Manual Entry)
1. Invitee (anonymous or signed-up without calendar) sees a time-slot grid for the plan's date range.
2. They tap/click to mark time blocks as "available" or "unavailable."
3. Alternatively, they can type free-text: "Free Saturday after 2pm, all day Sunday."
4. AI parses free-text into structured time blocks, displayed for confirmation.
5. Invitee confirms and submits.

#### Variant: Free-Text Availability via AI
- Invitee types or speaks: "I can do Saturday morning or Sunday evening."
- AI parses this as: Saturday 9am-12pm, Sunday 5pm-9pm (using reasonable defaults).
- Parsed blocks are shown visually on the grid for the invitee to confirm or adjust.
- If ambiguous (e.g., "morning" could be 8am-12pm or 9am-12pm), AI uses a generous interpretation and lets the invitee narrow it down.

#### Variant: Invitee Asks AI Questions
- Invitee uses the floating AI chat on the availability page to ask questions: "What time works best so far?", "Where is this happening?", "How many people have responded?"
- AI responds with factual, up-to-date information based on the current plan state. It does not reveal individual invitee names or their specific availability to other invitees — only aggregate information (e.g., "5 people have responded. Saturday afternoon is the most popular so far.").

#### Variant: Partial Availability
- Invitee is only available for part of the proposed window.
- They submit what they can. The system does not force full-range coverage.
- Organizer sees partial availability clearly marked.

#### Variant: "None of These Work"
- Invitee has no availability in the proposed date range.
- They can submit a "none of these work" response with an optional note (e.g., "I could do next weekend instead").
- This response is surfaced to the organizer with the note. AI may incorporate it into alternative suggestions.

#### Edge Cases
- **Calendar shows all-day "OOO" event:** System treats this as unavailable for the entire day unless the user manually overrides. The calendar owner sees event names on their own screen to help them decide; the organizer sees a "busy" block (or a labeled block if the invitee opted into "Share event names"). By default, all-day events (OOO, vacation, travel) are treated as hard blocks that cannot be skipped. The system infers skip-ability: multi-day OOO/vacation events are always hard blocks; single-day all-day events (e.g., "Laundry day") are treated as soft blocks that the user can override. When in doubt, default to hard block — it's better to ask the user than to assume they can skip something.
- **Calendar has tentative events:** Tentative events are shown as "possibly busy" with a visual distinction from confirmed busy blocks. User can override.
- **Calendar disconnect mid-flow:** If OAuth token expires or is revoked during the session, the system gracefully falls back to manual entry with a message: "Calendar connection lost. You can enter availability manually."
- **Calendar connected with no events in scheduling window:** System treats the invitee as fully available across all time slots. No error state.
- **Invitee submits then wants to change:** Signed-up invitees can always edit. Anonymous invitees can edit only if (a) the organizer has allowed anonymous edits AND (b) they still have their browser session token.
- **Date range has no times specified:** If the organizer only specified dates (e.g., "this weekend") without times, the availability grid shows full-day blocks. Invitees can be more specific if they want.
- **Invitee changes sharing granularity after submission:** If an invitee switches from "Share event names" to "Free/Busy only" (or vice versa) before the plan is confirmed, the organizer's view updates accordingly on their next page load. Previously visible event names are removed from the organizer's view if the invitee downgrades to free/busy. The AI also stops referencing those event names in its suggestions.
- **Sensitive event names:** If an invitee chooses "Share event names," they are responsible for what is visible. The consent prompt includes a note: "The organizer will see your event titles (e.g., 'Dentist', 'Team standup'). You can switch back to Free/Busy only at any time."

---

### Flow 4: Conflict Resolution

#### Scenario: Simple Overlap Exists
1. Five invitees submit availability.
2. AI identifies that Saturday 2pm-5pm works for 4 out of 5 people.
3. AI presents a suggestion chip: "Saturday 2-5pm works for Alex, Priya, Jamie, and Sophie. Confirm this time?"
4. Organizer accepts or asks AI for alternatives.

#### Scenario: No Perfect Overlap
1. Six invitees submit. No single time works for everyone.
2. AI ranks options by attendance count:
   - "Saturday 3-6pm: 4 of 6 available (missing: Jamie, Alex)"
   - "Sunday 11am-2pm: 5 of 6 available (missing: Priya)"
   - "Sunday 4-7pm: 3 of 6 available"
3. AI suggests the best option with a chip: "Sunday 11am-2pm works for the most people (5/6). Priya can't make it."
4. Organizer can accept, or ask: "Can we find a time that includes Priya?"
5. AI checks Priya's availability and responds: "Priya is free Sunday 4-7pm, but only 3 others can make it then. The best option including Priya is Saturday 1-3pm (4/6)."

#### Scenario: Calendar Conflict Detected
1. Organizer proposes Saturday 2pm for brunch.
2. Signed-up invitee Alex has connected their calendar, which shows a conflict 1:30-2:30pm Saturday.
   - If Alex chose "Free/Busy only": the organizer and AI see only that Alex is busy 1:30-2:30pm. AI surfaces: "Alex is busy Saturday 2-2:30pm. Would 3pm work instead?"
   - If Alex chose "Share event names": the organizer and AI see the event title. AI can surface richer context: "Alex has a work meeting until 2:30pm Saturday. Would 3pm work instead?"
3. Organizer can accept the suggestion, override (proceed anyway), or ask Alex directly via the plan chat.

#### Scenario: Required Invitee Conflict (Triggers Conflict State)
1. Organizer has designated Jamie as a "required" invitee during plan creation.
2. Jamie submits availability showing they are unavailable at the proposed/confirmed time.
3. The plan automatically enters the **Conflict** state. The plan card on the home screen shows a red/orange Conflict badge.
4. AI surfaces a resolution chip: "Fix conflict — 3 options available."
5. Organizer taps the chip. AI presents 3 alternative time slots, each showing per-person availability breakdowns with visual indicators for required vs. optional invitees.
6. Organizer selects an alternative. Plan returns to **Confirmed** state. Updated notifications are sent to opted-in invitees.

#### Scenario: Organizer Changes Date After Responses
1. Organizer shifts the date range from "this weekend" to "next weekend" via AI chat.
2. All existing availability submissions are marked as "outdated" (the dates they responded to no longer match).
3. Organizer sees a prompt: "Date range changed. Invitees' previous availability may no longer apply. Notify invitees?"
4. Opted-in invitees receive an email: "[Plan Name] dates have changed. Tap to update your availability: [link]."
5. Anonymous invitees are not notified. Organizer is prompted to re-share the link.

#### Edge Cases
- **Only one invitee has responded:** AI doesn't suggest a "best time" with only one response. Instead: "Waiting for more responses before suggesting a time. 1 of [N] invitees have responded."
- **All invitees say "none work":** AI surfaces this to the organizer: "No invitees are available in the current date range. Would you like to expand the dates?" Suggests a new range based on invitee notes.
- **Invitee updates availability after organizer has seen suggestions:** AI refreshes suggestions automatically. If the organizer has already accepted a suggestion, they are notified: "Jamie updated their availability. Saturday 2-5pm still works for 4/5 people."
- **Tie between two equally good time slots:** AI presents both options as chips and lets the organizer choose. Does not auto-select.
- **Zero availability responses at confirmation:** If the organizer attempts to confirm before any invitees have responded, the system displays a warning ("No one has responded yet — are you sure?") but does not block confirmation. This supports the use case where the organizer has already coordinated externally.
- **Conflict state with sparse data:** If few invitees have connected calendars, conflict detection is limited to submitted availability only. AI degrades gracefully — it notes the limitation and suggests the organizer ask specific people directly.

---

### Flow 5: Location Handling

#### Variant: Fixed Location (Organizer-Set)
1. Organizer specifies a location during plan creation (e.g., "Dolores Park").
2. Location is displayed as fixed on the plan page. Invitees see it but cannot change it.
3. No location suggestion UI is shown.

#### Variant: Location Suggestions Enabled
1. Organizer enables "Let invitees suggest locations" during plan creation.
2. Invitees see a "Suggest a place" field on the availability page.
3. Suggestions appear as a list visible to all plan participants.
4. Invitees can upvote suggestions (simple +1, no downvotes).
5. After ≥3 location suggestions, AI collates and surfaces a ranked shortlist to the organizer based on suggestion frequency, proximity context, and event type.
6. Organizer sees suggestions ranked by votes and can select the final location when confirming.

#### Variant: No Location Yet
1. Organizer creates a plan without specifying a location.
2. AI may prompt: "Want to let invitees suggest locations, or will you choose later?"
3. If organizer defers, location is shown as "TBD" on the plan page.
4. Organizer can add a location at any time before or during confirmation.

#### Variant: AI Location Suggestion
- When the location field is blank or crowdsource is enabled, the AI may suggest venues based on group context: attendees' known neighborhoods (if available), past meeting locations (from completed plans), and event type. This is a secondary recommendation layer — it only surfaces when contextually relevant and never simultaneously with time suggestions.

#### Edge Cases
- **Inappropriate location suggestion:** Organizer can delete individual location suggestions. No automated moderation for MVP (low-trust social context is managed by the organizer knowing their invitees).
- **Too many suggestions:** If more than 10 location suggestions are submitted, they are paginated or collapsed with the top-voted visible. This prevents UI clutter.
- **Location suggestion after plan confirmed:** Location suggestions are disabled after confirmation. The confirmed location is shown as final.

---

### Flow 6: Anonymous Submission & Edit Controls

#### Default Behavior
- Anonymous invitees submit availability with a display name and browser session token.
- Session token is stored as a cookie. If the invitee returns on the same browser, their previous submission is shown and editable.
- By default, anonymous edits are allowed (organizer can disable this).

#### Organizer Disables Anonymous Edits
1. Organizer toggles "Lock anonymous submissions after entry" in plan settings.
2. Anonymous invitees can submit once. Returning to the page shows their submission as read-only.
3. This prevents someone else from opening the same link and editing another person's response by guessing/reusing their name.

#### Impersonation Concern
- Two anonymous invitees enter the same display name (e.g., "Alex").
- System appends a disambiguation number to the second entry in the organizer's view: "Alex" and "Alex (2)".
- Each submission is tied to a different session token, so they remain separate.
- Organizer can see both and delete if one appears fraudulent.

#### Anonymous-to-Authenticated Conversion
1. Anonymous invitee submits availability, then decides to create an account.
2. During sign-up, the system detects the session token and prompts: "We found a submission from this browser. Link it to your new account?"
3. If confirmed, the anonymous submission is upgraded: display name is replaced with the account name, and the invitee gains edit rights, email notification eligibility, and dashboard visibility.
4. If declined (or if the submission was from someone else using the same device), the anonymous submission remains as-is and the new user starts fresh on this plan.

#### Edge Cases
- **Invitee clears cookies / uses different device:** Session token is lost. They cannot edit their previous submission (unless organizer allows anonymous edits, in which case they'd need to re-enter the same name — risky for impersonation). The safest path is to create an account.
- **Organizer toggles edit lock after submissions exist:** Existing anonymous submissions are retroactively locked. Invitees who return see read-only mode.
- **Malicious bulk submissions:** If many anonymous submissions arrive rapidly from the same IP, rate limiting applies (server-side). Organizer is warned and can purge suspicious entries.

---

### Flow 7: Notification & Reminder Pipeline

#### Email Opt-In Flow
1. During account creation, user provides an email address (required) and optionally a phone number (stored for future SMS support).
2. Email is verified via OTP code during signup.
3. User is opted into email notifications by default (can be toggled off in account settings).
4. Per-plan opt-out is available: on any plan page, the invitee can toggle "Mute notifications for this plan."

#### Notification Types

| Trigger | Recipients | Channel | Content |
|---|---|---|---|
| Plan created | Organizer only | In-app | "Your plan [Title] is ready. Share the link!" |
| Availability submitted | Organizer | In-app (real-time) | "[Name] submitted their availability" (batched for large plans) |
| Plan details changed | Opted-in invitees | Email | "[Plan] details updated. Review: [link]" |
| Plan confirmed | Opted-in invitees | Email + in-app | "[Plan] is confirmed for [date/time] at [location]" |
| Reminder (24h before) | Opted-in invitees | Email + in-app | "Reminder: [Plan] is tomorrow at [time]. [location]" |
| Reminder (2h before) | Opted-in invitees | Email + in-app | "[Plan] starts in 2 hours at [location]" |
| Plan cancelled | Opted-in invitees | Email + in-app | "[Plan] has been cancelled by the organizer." |
| Plan archived | None | System auto | No notification; plan moves to history |
| Post-event attendance | Organizer | In-app | "How was [Plan]? Confirm who attended." |

#### Notification Batching for Large Plans

For plans with many participants (threshold: 10+ invitees), real-time per-response notifications to the organizer become spammy. Instead:
- **RSVP digest batching:** Individual "X submitted availability" notifications are grouped into periodic digests rather than firing individually. Batching interval: every 15 minutes while responses are actively coming in, or every hour during quiet periods.
- **Digest format:** "3 new responses for [Plan]: Jamie, Marcus, and Sophie submitted availability. 8 of 15 invitees have responded."
- **Threshold behavior:** Plans with fewer than 10 invitees use real-time individual notifications (current behavior). Plans with 10+ use batched digests. The organizer can toggle between real-time and batched in plan settings if they prefer one over the other.
- **Confirmation and reminder emails are never batched** — these are always sent individually and immediately to each opted-in invitee.

#### Fallback for Non-Account Invitees
- Organizer's plan page shows a "Notification Status" column:
  - Green checkmark: Account with email, will receive reminders.
  - Gray icon: No account. "Copy message" button available.
- "Copy message" generates a pre-written text: "Hey! [Plan] is confirmed for [date] at [location]. Don't forget!"
- Organizer pastes this into their external chat to notify non-account invitees manually.
- If zero invitees have accounts, a banner appears: "None of your invitees have accounts for email reminders. Copy a message to send manually." with a bulk clipboard CTA.

#### Edge Cases
- **Email delivery failure:** If the email service reports a delivery failure, the invitee's status updates to "Email failed." Organizer is informed and sees the "copy message" fallback.
- **User opts out of email after plan is confirmed:** No further emails sent. Their status updates to reflect this. Organizer sees the change on the plan page.
- **Email address change:** User updates email in account settings. Future emails go to the new address.

---

### Flow 8: Plan Lifecycle & State Machine

```
  [Draft]
    |
    | (Organizer shares link)
    v
  [Pending / Collecting Availability]
    |
    |---(Required invitee unavailable)---> [Conflict]
    |                                         |
    |                                         | (Organizer resolves)
    |                                         v
    | (Organizer confirms time/location)
    v
  [Confirmed]
    |
    |---(Organizer cancels)---> [Cancelled]
    |
    | (Event date passes)
    v
  [Completed/Archived]
```

#### State: Draft
- Plan has been created but not yet shared.
- Only the organizer can see it.
- Organizer can edit all fields freely.
- No invitee-facing page exists yet (link is generated but landing shows "This plan isn't ready yet" if someone somehow accesses it).
- Plan card CTA: "Continue Editing."

#### State: Pending (Collecting Availability)
- Plan link is active. Invitees can access and submit.
- Organizer can still edit plan details (with "outdated" flagging on existing submissions if dates change).
- AI suggestions become active as responses come in.
- Plan can be moved back to Draft if the organizer wants to retract it (existing submissions are preserved but page shows "Plan paused by organizer").
- Plan card CTAs: "View Details", "Copy Availability Link."
- Social proof indicator on the availability page: "X people have responded."

#### State: Conflict
- Triggered automatically when a **required** invitee's submitted availability does not overlap with the proposed or confirmed time.
- The plan card on the home screen shows a red/orange Conflict badge.
- AI surfaces a resolution chip: "Fix conflict — 3 options available." Each option shows per-person availability breakdowns with visual indicators for required vs. optional invitees.
- Plan card CTA: "Fix — 1/2/3 options."
- Organizer selects an alternative time slot. Plan returns to Confirmed.
- If no required invitees are designated, the Conflict state is never triggered — conflicts are handled as suggestions only.

#### State: Confirmed
- Time and location are locked.
- Availability form is disabled. Plan page shows confirmation details.
- Email confirmations and reminders are scheduled.
- Organizer can still cancel (moves to Cancelled terminal state with notifications sent).
- New visitors to the link see the confirmed plan details (read-only).
- Plan card CTA: "View Details" (green badge).

#### State: Completed/Archived
- Automatically triggered when the confirmed event datetime passes (2 hours after event end time).
- Plan moves to the "History" section of the organizer's and invitees' dashboards.
- Page remains accessible via link (read-only summary).
- No notifications sent for the transition itself.
- Organizer receives a post-event nudge to confirm actual attendance.
- Plan card: Visually muted with subtle checkmark.

#### State: Cancelled (Terminal)
- Organizer explicitly cancels a confirmed or pending plan.
- Opted-in invitees receive: "[Plan] has been cancelled by the organizer."
- Plan page shows "This plan has been cancelled."
- Plan moves to history with a "Cancelled" badge (grey, muted).

#### Edge Cases
- **Organizer deletes a plan:** All data is permanently removed. Link returns 404. Invitees who had it on their dashboard see it disappear. This is irreversible; confirmation dialog required.
- **Organizer abandons a plan (never confirms):** Plans in Pending state for more than 14 days without organizer activity get a nudge: "Your plan [Title] is still waiting. Confirm, update, or archive it?"
- **Multiple plans by same organizer for same group:** Each plan is independent. No cross-plan logic. Organizer manages via their dashboard.
- **Plan cancelled with existing responses:** Plan transitions to Cancelled state. Cancellation email is sent to all opted-in invitees. The plan card is visually muted and moved to archive.

---

### Flow 9: AI Chat Agent Interaction Model

The AI chat agent is the primary interface for organizers and a secondary help surface for invitees. It is contextual to the current plan. This section defines how the agent behaves across plan states, what types of responses it produces, and how it handles errors and ambiguity.

#### Agent Availability & Scope

- The AI chat agent appears as a floating panel on all plan pages — for **both organizers and invitees**. It is the hero UI element — always visible, always accessible, never buried in a menu.
- **Organizer scope:** Full access. The agent can extract plan details, suggest times, surface conflicts, recommend locations, and take actions (confirm plan, send reminders).
- **Invitee scope:** Read-only / informational. The agent can answer questions about the plan ("What time works best so far?", "Where is this happening?", "How many people have responded?") and help with conversational availability input ("I'm free Saturday morning or Sunday evening"). It cannot modify plan settings, see other invitees' individual data, or take organizer-level actions.
- The agent is contextual: it has access to the current plan's state, settings, invitee responses, and (where consent has been granted) calendar data. It does not have cross-plan context or memory between sessions.
- The agent accepts three input modes: **text** (typed), **voice** (hold-to-record), and **image** (upload from camera roll or capture). All three modes feed into the same processing pipeline.

#### Auto-Minimize Behavior
- The chat window auto-minimizes to a pill/icon when the user scrolls the page. It auto-hides entirely when the user scrolls within a container (e.g., a list of time slots). Tapping the pill expands the chat back to full size. This ensures the AI is always one tap away but never obstructs content.

#### Contextual Opening Prompts

The agent's initial message adapts to the plan's current state:

- **Draft (no details yet):** "What are you planning? Tell me about it, or send a photo of a flyer or invite."
- **Draft (details partially filled):** "Looks like you've started a plan for [Title]. Anything you want to change before sharing?"
- **Pending (few responses):** "[N] of your invitees have responded so far. I'll suggest the best times once more responses come in."
- **Pending (enough responses for suggestions):** "[N] invitees have responded. Saturday 3-6pm works for the most people. Want me to show you the options?"
- **Conflict:** "[Required invitee] can't make the proposed time. I have 3 alternatives — want to see them?"
- **Confirmed:** "[Plan] is confirmed for [date/time] at [location]. Reminders are scheduled. Need to make any changes?"
- **Completed/Archived:** "This plan has already happened. Want to create a new plan?"
- **Invitee landing (availability page):** "Hi! You can submit your availability below, or ask me anything about this plan."

#### Response Types

The agent produces several distinct response formats, often combining them in a single reply:

**1. Plan Extraction Response**
Used during plan creation when the agent parses organizer input into structured fields.
- Displays extracted fields as an editable card: Title, Date Range, Time Window, Location/Area.
- Low-confidence extractions are visually marked (e.g., dotted underline or "Did you mean...?" inline) to draw the organizer's attention.
- Example: Organizer says "Brunch this Saturday or Sunday around noon, somewhere in the Mission." Agent responds with a card showing Title: "Brunch", Dates: Sat-Sun, Time: 11am-1pm, Area: "Mission District" — with Time marked as inferred.

**2. Clarification Prompt**
Used when input is ambiguous or missing key information.
- The agent asks **one targeted question at a time**, never a list of multiple questions. This keeps the interaction conversational and avoids overwhelming the user.
- Example: Organizer says "Let's hang out this weekend." Agent responds: "Sounds fun! Any preference on time of day — morning, afternoon, or evening?" (It does not simultaneously ask about location, guest count, and activity type.)
- If the organizer skips the question (e.g., "Just share it"), the agent proceeds with what it has and leaves missing fields as TBD.

**3. Suggestion Chip**
Used when the agent has enough data to recommend an action.
- Displayed as an actionable pill/button below the chat message (not inline text). Each chip represents a concrete action the organizer can take with a single tap.
- Chips have two affordances: **Accept** (primary action) and **Dismiss** (secondary, removes the chip without acting).
- Examples:
  - "Saturday 2-5pm works for 4/5 — Confirm?" [Accept] [Dismiss]
  - "Muir Woods is the top-voted trail — Set as location?" [Accept] [Dismiss]
  - "3 invitees haven't responded. Send a nudge?" [Accept] [Dismiss]
- The agent presents at most **3 suggestion chips** at a time to avoid decision overload. If more options exist, it shows the top 3 and offers "Show more options" as a text link.
- **AI Suggestion Priority Order:** The AI surfaces suggestions in a strict hierarchy: (1) **Time** — always first and most prominent, (2) **Location** — only when relevant, (3) **Activity ideas** — only on cold start or when plan description is vague. These are never surfaced simultaneously.

**4. Status Report**
Used when there isn't enough data for a suggestion, or when the organizer asks for an update.
- Factual, concise, and action-oriented. Does not speculate or make suggestions prematurely.
- Example (early stage): "2 of 6 invitees have responded so far. Waiting for more responses before suggesting a time."
- Example (stalled): "No new responses in 3 days. 4 of 8 invitees haven't replied. Want to re-share the link or send a nudge?"
- **Graceful degradation:** When data is sparse (fewer than 3 availability responses), the AI does not surface low-confidence suggestions. Instead, it displays a friendly message prompting the organizer to share the link more widely.

**5. Conflict Alert**
Used when a scheduling conflict is detected from calendar data or from conflicting availability submissions.
- Proactively surfaces the conflict with context and an alternative suggestion.
- Respects the invitee's sharing granularity preference: if "Free/Busy only," the alert says "Alex is busy 2-2:30pm." If "Share event names," it says "Alex has a work meeting until 2:30pm."
- Always accompanied by a suggestion chip with an alternative time.
- For required invitees, the alert triggers the Conflict state and presents 3 alternatives with per-person breakdowns.
- Example: "Heads up — Alex is busy Saturday 2-2:30pm. Saturday at 3pm works for everyone. Move to 3pm?" [Accept] [Keep 2pm anyway]

**6. Ranked Options List**
Used when no single time is perfect and the organizer needs to choose between trade-offs.
- Options are ranked by attendance count (most attendees first).
- Each option shows: time slot, number of attendees, and who is missing. Required vs. optional invitees are visually distinguished.
- The top option has a suggestion chip. Others are selectable as alternatives.

**7. Conversational Fallback**
Used when the user's input doesn't map to a plan action.
- The agent responds conversationally, acknowledges the message, and gently redirects toward a plan-related action.
- Example: Organizer says "ugh scheduling is the worst." Agent responds: "I hear you — that's exactly what I'm here to help with! Want to tweak the dates, or should I suggest the best time from the responses so far?"
- The agent never ignores off-topic input or responds with a generic error. It always finds a path back to the plan.

**8. Invitee Information Response**
Used when an invitee asks questions on the availability page.
- Provides factual, aggregate information about the plan without revealing individual invitee data.
- Example: Invitee asks "What time works best?" → "Based on 5 responses so far, Saturday afternoon is the most popular. But submit your own availability and the organizer will find the best time for everyone!"
- If the invitee asks something the agent can't answer (e.g., private plan details), it responds: "That's something the organizer controls — you could ask them directly in your group chat!"

#### Voice & Image Input Handling

**Voice Input:**
1. User taps the microphone icon (hold-to-record; tap to expand chat if minimized).
2. Speech-to-text transcribes the input in real-time with visual waveform feedback.
3. The transcription is displayed as editable text before the agent processes it. User can correct before sending.
4. If transcription confidence is low for specific words, those words are highlighted with alternatives: "Did you say 'brunch' or 'lunch'?"
5. If transcription fails entirely (e.g., too much background noise), the agent shows: "I couldn't catch that — mind trying again, or you can type it instead?"

**Image Input:**
1. User taps the image icon and selects or captures a photo.
2. The agent processes the image using OCR/vision to extract text and structured data (event name, date, time, location, venue details).
3. Extracted information is presented as an editable plan extraction card, same as text/voice input.
4. If the image yields useful partial data (e.g., a venue name but no date), the agent populates what it can and asks a clarification prompt for the rest.
5. If the image yields nothing useful (e.g., blurry photo, unrelated content), the agent responds: "I couldn't extract event details from that image. Can you describe what you're planning, or try a clearer photo?"
6. Supported image scenarios: event flyers, venue screenshots, menu photos with event details, text message screenshots with plan discussions, social media event posts.

#### Agent Personality & Tone

- **Friendly and concise.** The agent's tone matches Catchup's cheery brand. Responses are warm but never wordy. One or two sentences per message is ideal; longer responses are reserved for ranked options lists.
- **Action-oriented.** Every agent response should either (a) present extracted data, (b) ask one clarifying question, (c) offer an actionable suggestion, or (d) report plan status. The agent avoids generic commentary, filler phrases, or restating what the user already said.
- **Non-blocking.** The agent never prevents the organizer from proceeding. If the organizer wants to skip a question, leave a field blank, or confirm a plan with limited data, the agent accommodates without friction or repeated warnings.
- **Decisive but deferential.** The agent presents its best recommendation with confidence ("Saturday 3pm works best for the group") but always leaves the final decision to the organizer. It never auto-confirms a plan or takes irreversible action without explicit organizer approval.

#### Error & Degradation States

- **AI service temporarily unavailable:** The plan page falls back to a fully manual mode. The AI chat panel shows: "AI assistant is temporarily unavailable. You can fill in the details manually using the form below." All plan creation, editing, and confirmation flows remain functional without the AI — the form-based path is always available as a fallback.
- **AI response latency:** A loading indicator is shown with a contextual message (e.g., "Finding the best times..." or "Processing your image..."). If latency is unusually high, the agent shows: "This is taking longer than usual. You can continue filling in details manually while I work on it."
- **Parsing failure (structured output):** If the AI cannot extract structured fields from the input, it does not silently fail or produce empty fields. Instead, it responds conversationally: "I couldn't quite parse that into plan details. Could you tell me the date and time you're thinking?"
- **Rate limiting:** If the user sends many rapid messages, the agent processes them sequentially without dropping messages. No user-facing rate limit errors are shown.

---

## 7. Functional Requirements

### Plan Creation & State Machine (Priority: P0)

- **Create Plan (AI-First):** Organizer initiates a new plan by describing it to the AI via voice, text, or image. Plan details (title, description, timing, location, etc.) are extracted automatically. Manual form-based editing is available as a fallback but the AI-driven flow is the primary path.
- **Create Plan (Form Fallback):** Structured form with fields for Title (required), Description, Duration (fixed/flexible), Time Block (morning/afternoon/evening), Date or Scheduling Window, Location (optional), People (required vs. optional designation), Crowdsource Location toggle, and Trust Toggle (anonymous edit permissions). All fields except Title have sensible defaults or are optional.
- **Shareable Invite Link:** On plan creation, the system generates a unique, cryptographically random invite link (not guessable, not sequential). The organizer sees a prominent "Copy Invite Link" button and pastes it into their external group chat.
- **Plan States (6 States):** Draft → Pending → Confirmed → Conflict → Cancelled → Completed. Each state has specific visual badges and contextual CTAs on home screen plan cards.
- **Plan Settings:** Organizer can configure: location suggestions (on/off), anonymous edit lock (on/off), required/optional invitee designation, and visibility of other invitees' responses (on/off, future consideration).
- **State-Specific Plan Cards:** Home screen displays plan cards with color-coded state badges (Draft: grey, Pending: blue, Confirmed: green, Conflict: red/orange, Cancelled: grey muted, Completed: muted with checkmark) and contextual CTAs matching each state.
- **Cold-Start Home Screen:** When no plans exist, the home screen displays AI-generated suggestion pills (e.g., "Plan brunch with your crew?", "Organize a game night?") to inspire first-time plan creation and eliminate the empty-state problem. A warm, illustrated empty state with encouraging copy replaces blank screens.
- **Organizer Trust Toggle:** Controls whether non-account invitees can return to the availability page and re-edit their responses. Trust-based setting: if ON, re-editing is allowed; if OFF, responses are locked on submission.
- **Auto-Archival:** Plans automatically move to Completed state 2 hours after the event end time. Completed plans are visually muted on the home screen and moved to an archive/history view. At archival, the organizer receives a nudge to confirm which invitees actually attended.

### AI Chat & Suggestions (Priority: P0)

- **AI Chat Agent:** Floating AI chat available on all plan pages for both organizers and invitees. Accepts text, voice, and image input. See Flow 9 for detailed conversational design, response types, voice/image handling, tone guidelines, and error/degradation states.
- **Proactive Suggestions:** AI surfaces time, venue, and next step suggestions as actionable "chips" or "pills" at appropriate moments. At most 3 chips are shown simultaneously to avoid decision overload. Suggestion priority: Time → Location → Activity ideas (never surfaced simultaneously).
- **Calendar Conflicts:** Surface scheduling conflicts detected from connected calendars and suggest alternative times. Conflict details respect the invitee's sharing granularity preference.
- **Required Invitee Conflicts:** When a required invitee is unavailable at the proposed time, the plan automatically enters the Conflict state. AI surfaces 3 alternative time slots with per-person breakdowns showing required vs. optional invitee availability.
- **Response Conflicts:** Identify mismatches across invitee-submitted availability and suggest times that maximize attendance.
- **Smart Defaults:** When parsing ambiguous input (e.g., "morning"), AI uses generous but reasonable defaults and presents them for confirmation. Low-confidence extractions are visually distinguished.
- **Suggestion Thresholds:** AI waits for at least 2 availability responses before suggesting optimal times. With only 1 response, it reports status only. With fewer than 3 responses, it prompts the organizer to share the link more widely rather than offering low-confidence suggestions.
- **Graceful Degradation:** If the AI service is unavailable, the plan page falls back to a fully manual form-based flow. All core functionality works without the AI.

### Invitee Interaction (Priority: P0)

- **Availability Page:** Invitees can respond with availability (calendar connect or manual entry), display their full name, and (optionally) suggest or vote on locations if enabled. Social proof indicator: "X people have responded" (updates in real-time or near-real-time).
- **Manual Entry Options:** Time-slot grid for tapping (slot granularity matches the organizer's duration setting), or free-text input parsed by AI.
- **Non-Account Flows:** Allow submissions without requiring account creation; only minimal info (display name) required. Session token tracks the anonymous user.
- **"None Work" Option:** Invitees can indicate that no proposed times work, with an optional free-text note for alternatives.
- **Account Creation Nudge:** After submitting availability, invitees see a prominent but non-blocking CTA: "Create an account to get email reminders about this plan." This is the primary invitee-to-organizer conversion point.
- **Submission Editing:** Signed-up invitees can always edit. Anonymous invitees can edit based on organizer trust toggle and session token validity.
- **Deduplication Handling:** When two non-account invitees submit with the same name, the system generates a disambiguation number visible only to the organizer (e.g., "Alex" and "Alex (2)"). The invitee experience is unaffected.
- **Invitee AI Chat:** Floating AI chat is available on the availability page for invitee questions. Invitee scope is read-only/informational — no plan modification capabilities.

### Notification System (Priority: P1)

- **Email Notifications:** Plan confirmations, reminders (24h and 2h before event), plan changes, and cancellations are sent via email to opted-in invitees. Email is the primary notification channel for MVP.
- **In-App Notifications:** Real-time notifications for organizers (new availability submissions, plan state changes). In-app notifications supplement email for account-holding invitees.
- **Fallback:** Manual "copy message" button for non-account invitees, generating a pre-written notification for the organizer to paste externally. Bulk clipboard CTA when zero invitees have accounts.
- **Opt-Out:** Account-holding invitees can opt out of email notifications via account settings or per-plan toggle. Opt-out is immediate.
- **Notification Batching:** For plans with 10+ invitees, per-response notifications to the organizer are batched into periodic digests (every 15 minutes during active periods, hourly otherwise). Confirmation and reminder emails are never batched.

### Plan Review & Confirmation (Priority: P1)

- **Organizer Controls:** Organizer can see all responses, select timing/location, and confirm plan based on who is available — no requirement that all respond.
- **Notification Status:** Display which invitees will receive email reminders on the plan page, with a 1-click "copy message" button for manual followup. A summary card on the home page surfaces plans needing attention.
- **Location Inputs:** Organizer may allow location suggestions from invitees (with upvoting) and review before finalizing. AI collates suggestions after ≥3 responses and surfaces a ranked shortlist.
- **Cancellation:** Organizer can cancel a confirmed or pending plan, triggering notifications to opted-in invitees.
- **Post-Event Attendance:** After plan completion, organizer receives a nudge to confirm which invitees actually attended. This data feeds into attendance tracking metrics.

### Calendar & Contact Integration (Priority: P1)

- **Calendar Sync (Optional):** Invitee/organizer can optionally connect Google Calendar to check availability, but not required for any flow to proceed. Calendar data is never cached server-side; it is fetched on-demand for the plan's date range and discarded after availability is computed. Each time calendar data would be shared with a plan, the user is shown a per-plan consent prompt, even if their calendar is already connected.
- **Calendar Sharing Granularity:** During the per-plan consent prompt, invitees choose between two sharing modes: (a) **Free/Busy only** (default) — only free/busy time blocks are shared with the organizer; (b) **Share event names** — free/busy blocks are shared along with event titles. In both modes, event descriptions, attendee lists, and other metadata are never exposed. The AI chat agent respects the invitee's sharing preference.
- **Contacts Integration:** Lightweight in-app contact management with optional integration to Catchup v1 (desktop-focused web app) for enhanced contact data. Native device contacts syncing is not in MVP scope.

### Security & Privacy (Priority: P0)

- **Trust Controls:** Organizer can specify if non-account invitees can revisit and edit their submission (to prevent abuse).
- **Anonymous Deduplication:** Anonymous submissions are tied to session tokens + display names. Duplicate names are disambiguated for the organizer.
- **Rate Limiting:** Server-side rate limiting on anonymous submissions to prevent spam/abuse.
- **Calendar Data Privacy:** Calendar data is fetched on-demand and never cached server-side. By default, only free/busy blocks are shared. If the invitee explicitly opts into "Share event names," event titles are also visible to the organizer and the AI, but descriptions, attendee lists, and other metadata are never exposed regardless of sharing mode. Invitees cannot see each other's availability data; only the organizer sees the aggregated grid.
- **Data Isolation (Zero Tolerance):** All integration data (calendar, contacts) is strictly scoped to the authenticated user_id. No query, API response, or UI surface ever exposes one user's integration data to another user. This is a non-negotiable security requirement.
- **Data Privacy:** All data collection explicit; no data sharing with third parties; privacy by design.
- **Plan Deletion:** Organizer can permanently delete a plan and all associated data.

### Auth (Priority: P0)

- **Email OTP (Primary):** Users can sign up and log in via email with a one-time passcode sent to their inbox. No password required.
- **Google OAuth (Secondary):** One-tap Google OAuth flow as an alternative sign-up/login method.
- **Account Fields:** Name (required), email (required), phone number (optional — stored for future SMS support, unused in MVP).
- **Apple / Microsoft OAuth:** Stretch goal deferred to Q2.

### Plan Archival (Priority: P1)

- **Auto-Archival:** Completed plans are automatically moved to history 2 hours after event end time; no manual archiving required.
- **Stale Plan Nudge:** Plans in Pending state for 14+ days without activity trigger a nudge to the organizer.

---

## 8. Persona-Based Scenario Walkthroughs

### Scenario A: Alex (Organizer) Plans a Game Night

**Context:** Alex wants to host a board game night this weekend. He has 6 friends he wants to invite, spread across two group chats.

1. Alex opens Catchup, taps "Create a Plan."
2. Types into AI chat: "Board game night at my place, either Friday or Saturday evening."
3. AI extracts: Title: "Board Game Night", Location: "Alex's place" (fixed), Dates: Friday-Saturday, Time: 6pm-11pm.
4. Alex reviews, changes time to 7pm-midnight, confirms. Location suggestions: OFF (it's at his place).
5. Anonymous edits: ON (he trusts his friends, and some may not have accounts).
6. Link is generated. Alex copies it and pastes into Group Chat A (iMessage) and Group Chat B (Discord).
7. **Priya** (signed-up, calendar connected) taps the link. Her calendar shows she's free Friday after 8pm and all Saturday. She submits.
8. **Jamie** (anonymous) taps the link, enters name "Jamie", marks Saturday 7pm-midnight as available. Sees "Want reminders? Create an account" — skips it.
9. **Sophie** (signed-up, no calendar) taps the link, manually enters: "Free both nights."
10. **Marcus** (anonymous) taps the link, enters "Marcus", selects "None of these work" with note: "Out of town this weekend, have fun though!"
11. **Two more friends** submit availability for Saturday.
12. Alex checks the plan page. AI shows: "Saturday 7pm-midnight works for 5 of 6 respondents. Marcus can't make it." Chip: "Confirm Saturday 7pm?"
13. Alex taps the chip to confirm. Plan moves to Confirmed.
14. Priya and Sophie (email-opted-in) receive confirmation emails. Jamie and Marcus don't (no account). Alex sees their gray icons and taps "Copy message" to paste into the group chats.
15. Saturday rolls around. Priya and Sophie get a 24h and 2h reminder email. The game night happens. Plan auto-archives 2 hours after event end.

### Scenario B: Priya (Organizer) Coordinates a Hiking Trip

**Context:** Priya leads an outdoor activities group of ~15 people. She wants to organize a weekend hike and let the group decide the trail.

1. Priya taps "Create a Plan." Speaks into voice input: "Weekend group hike, probably Saturday or Sunday morning. Let people suggest trails."
2. AI extracts: Title: "Group Hike", Dates: Saturday-Sunday, Time: 7am-12pm, Location: TBD. Location suggestions: ON.
3. Priya confirms. Sets anonymous edits to OFF (large group, wants to prevent mischief). Marks 3 people as "required" attendees.
4. Shares link in the hiking club's WhatsApp group.
5. Responses trickle in over 2 days. 10 people respond.
   - 3 connect calendars (signed-up users), 7 enter manually (mix of anonymous and signed-up).
   - 4 suggest trails: "Mission Peak", "Muir Woods", "Lands End", "Mt. Tam."
   - "Muir Woods" gets 5 upvotes, "Lands End" gets 3.
6. AI suggests: "Sunday 8am-12pm works for 9 of 10 respondents. Muir Woods is the most popular trail."
7. One invitee (anonymous, "Chris") tries to return and change their availability but can't — anonymous edits are locked. Chris sees: "Your submission is locked. Create an account to manage your responses, or contact the organizer."
8. Priya confirms Sunday 8am at Muir Woods. Opted-in members get email. For the rest, Priya copies the message and posts it in WhatsApp.
9. Friday evening, 24h reminder goes out via email. Sunday morning, 2h reminder.
10. After the hike, plan auto-archives. Priya gets a nudge to confirm attendance.

### Scenario C: Jamie (Anonymous Invitee) Gets Converted

**Context:** Jamie receives a Catchup link from a friend for a dinner plan. Jamie has never used Catchup.

1. Jamie taps the link in iMessage. Lands on the plan page: "Friday Night Dinner" — collecting availability for Friday-Saturday, location TBD (suggestions enabled).
2. Sees a clean form: "Enter your name", time-slot grid, "Suggest a place" field, and a social proof indicator: "4 friends have already responded."
3. Types name: "Jamie K." Taps Friday 7-10pm as available. Suggests "Burma Superstar."
4. Submits. Sees confirmation: "Got it, Jamie K.! The organizer will confirm details soon."
5. Sees nudge: "Want a reminder when this plan is confirmed? Create a free account."
6. Jamie thinks this is useful and taps "Sign up." Creates account with email (OTP verification) and name.
7. System detects session token: "We found your submission for 'Friday Night Dinner.' Link it to your account?" Jamie confirms.
8. Jamie's submission is now tied to their account. They can edit it anytime, see the plan on their dashboard, and will receive email reminders.
9. The plan is confirmed for Friday 8pm at Burma Superstar. Jamie gets an email: "Friday Night Dinner is confirmed! Friday 8pm at Burma Superstar."
10. Jamie's dashboard now shows the plan. Thursday evening, a 24h email reminder arrives.

### Scenario D: Handling a Contentious Plan

**Context:** Sophie (organizer) is planning a birthday dinner. She's invited 8 friends but schedules are tight. She marks 2 friends (her closest) as "required."

1. Sophie creates: "My Birthday Dinner! Trying for next Saturday at 7pm. Open to other times if needed."
2. AI extracts: Title: "Sophie's Birthday Dinner", Date: Saturday, Time: 7pm, Location: TBD (suggestions on).
3. She shares the link. Responses come in:
   - 3 people are free Saturday 7pm.
   - 2 people can only do Saturday after 8:30pm (they have a prior commitment until 8).
   - 2 people can only do Friday evening.
   - 1 person says "none work" (traveling).
4. One of the "required" friends can only do Saturday after 8:30pm. Plan enters **Conflict** state. AI alerts: "Required invitee Alex can't make Saturday 7pm. 3 alternatives available."
5. Sophie taps the conflict chip. AI shows:
   - "Saturday 8:30pm: 5 of 8 (includes both required friends)"
   - "Saturday 7pm: 3 of 8 (missing 1 required)"
   - "Friday 7pm: 2 of 8 (missing 1 required)"
6. Sophie picks Saturday 8:30pm. Plan returns to Confirmed. She picks a restaurant from the suggestions (Che Fico, 4 upvotes).
7. Notifications go out. Sophie uses "copy message" for invitees without accounts.

---

## 9. User Experience

### Design Principles

1. **Magic front and center.** The AI agent is not buried in a settings menu. It is the first thing users notice and the last thing they forget. The floating chat, suggestion chips, and proactive recommendations are the product.
2. **Delight + minimal intrusion.** The AI chat auto-minimizes on scroll, auto-hides in scrollable containers, and elegantly expands on tap. It is always accessible but never in the way. Suggestion pills appear above the bottom nav only when contextually relevant.
3. **Zero-friction invitee experience.** Anyone with a link can participate. No app download, no account creation, no calendar connection required. Just a name and available times. Everything else is optional and presented as a gentle nudge, not a gate.
4. **Organizer empowerment, not automation anxiety.** The AI suggests; the organizer decides. Location, time, and attendee list are always under the organizer's control. Crowdsourcing and AI recommendations are tools, not mandates.
5. **Mobile-first, always.** Every flow is designed for thumb-friendly, single-hand mobile use. Desktop responsiveness is secondary.

### Entry Point & First-Time User Experience

- **Primary discovery channel is viral:** Most new users first encounter Catchup by receiving a shared plan link in an existing group chat. They tap the link and land on the Availability Page — no app download, no account required.
- **Secondary discovery channels:** Word of mouth, web search, social media. These users land on the Catchup landing page.
- **Landing page** features cheery, lightweight, graph-paper aesthetic with 3-4 concise value propositions, social proof section (testimonials/usage stats), and two primary CTAs: "Create a Plan" (routes to auth) and "Log In."
- **First-time home screen (cold start):** No plans exist yet. A warm, illustrated empty state (not a blank page) with messaging like "No plans yet — let's fix that." AI-generated suggestion pills above the bottom nav: "Plan brunch with your crew?", "Organize a game night?", "Get the group together this weekend?" A prominent "Create a Plan" button and the floating AI chat, visible and ready.
- Minimal onboarding required for invitees; they access a unique plan link and can participate immediately. Account creation is presented as optional but valuable (calendar, email reminders, dashboard).

### Core Experience

**Step 1:** Organizer lands on Catchup, selects "Create a Plan" or taps a suggestion pill.
- AI-first creation: user is nudged to describe their event idea via voice or text to the AI chat. Plan details are extracted and populated automatically. Manual form is available as fallback.
- Organizer configures plan settings: location suggestions (on/off), anonymous edit lock, required/optional invitee designation.
- Upon submission, plan link is generated instantly.

**Step 2:** Organizer shares generated link in their preferred group chat/channel.
- No requirement for invitees to install or sign up.
- Organizer sees plan status on the home page and can preview what invitees will see from the plan page.

**Step 3:** Invitees access plan availability page.
- Social proof: "X people have responded" displayed prominently.
- Prompt to submit name, indicate available times (manual entry or calendar connect), and (if enabled) suggest or vote on locations.
- Submissions accepted with or without calendar connection. Option to sign up for email reminders presented as a nudge.
- "None of these work" option available with free-text note.
- AI chat available for questions.

**Step 4:** As invitees reply, organizer sees real-time responses on the plan page.
- Floating AI chat agent visible at all times — can answer questions, surface timeline and location recommendations, highlight conflicts.
- Suggestion "pills" below the AI chat quickly recommend actions, e.g., "Choose best time," "Send reminders," "Suggest alternate venue."
- AI waits for sufficient responses before making suggestions.

**Step 5:** Organizer reviews responses and finalizes plan.
- Organizer decides whether to proceed with a subset of available invitees (no requirement to wait for all to reply).
- If a required invitee has a conflict, the plan enters Conflict state with AI-generated alternatives.
- For missing responses without accounts, organizer sees visual indicator and 1-click "copy message" button for manual reminders.

**Step 6:** Confirmation email is generated and sent to all opted-in invitees.
- Plan status is updated to Confirmed. Invitees who created accounts can return to plan page for details and see automatic reminders.

**Step 7:** Plan auto-archives as "Completed" 2 hours after the event end time.
- Organizer receives a post-event nudge to confirm attendance.
- Organizer and invitees can access plan history, but no need to manually archive.

### Screen & Component Architecture

**Landing Page:**
- Value propositions (3-4 scannable blocks), social proof / testimonials, CTAs: "Create a Plan" (primary), "Log In" (secondary). Auth: Email OTP (primary) + Google OAuth.

**Home Page:**
- Top nav: Settings hamburger (left), Profile icon (right).
- Plan cards: title, date/time summary, status badge, state-specific CTAs.
- Cold start state: suggestion pills and illustrated empty state.
- Suggestion pills: above bottom nav, 1-click contextual ideas.
- Bottom nav: AI Chat input box (left, collapsible), Voice input icon (right).

**Plan Page (Organizer View):**
- Metadata: Title, Description, Duration, Time Block, Date, Scheduling Window, People (required/optional with notification status indicators), Location, Status badge.
- Availability responses: aggregated in a visual grid or timeline view.
- AI suggestion area: inline recommendations.
- Notification dashboard: per-invitee email status with copy-to-clipboard fallback.
- Crowdsource toggle: enable/disable location suggestions.

**Availability Page (Invitee-Facing, Accessed via Shared Link):**
- Plan context: event title, description, organizer name, date/time window.
- Social proof: "X people have already responded."
- Availability input: manual time selection or "Connect Google Calendar" CTA.
- Name input: plain text display name (required for non-account users).
- Location suggestion input: shown only if organizer enabled crowdsourcing.
- Account creation nudge: CTA to sign up for email reminders.
- AI Chat + Voice Input: available for invitee questions and conversational availability input.

**People Page:**
- Lightweight contact list with name, email, optional phone, group memberships.
- Optional integration with Catchup v1 for enhanced contact data.
- Add / Search functionality for managing contacts.

**Settings Page:**
- Connect Calendar CTA (Google Calendar OAuth flow).
- Connect Contacts CTA (Catchup v1 integration or "Coming Soon" for native sync).
- Notification preferences: email opt-in/opt-out.
- Account management: profile info, logout, delete account.

### UI/UX Highlights

- **Graph paper aesthetic:** Light grid background across all screens, warm neutral base colors (off-white, soft beige), cheery accent colors (warm coral, soft teal, golden yellow) for interactive elements and state badges.
- **Floating AI chat is the hero:** Most prominent, persistent UI element. Bottom of every screen, above the bottom nav, styled to draw attention without obstructing content.
- **Suggestion chips as primary action surface:** Rounded, tactile, tappable cards with gentle shadows and cheery colors. Animate in smoothly when new suggestions are available and pulse subtly to draw attention.
- **Voice input:** Microphone icon on the right side of the AI chat bar. Hold to start/stop recording (with visual waveform feedback). Tap the icon when the chat is minimized to expand the chat and start recording simultaneously.
- **Auto-minimize behavior:** AI chat shrinks to a small pill/icon on page scroll. Expands back to full chat on tap. Hides entirely on container scroll.
- **Plan card state badges:** Color-coded and icon-paired for instant recognition: Draft (grey), Pending (blue), Confirmed (green), Conflict (red/orange), Cancelled (grey muted), Completed (muted with checkmark).
- **Mobile-first, thumb-friendly:** All interactive elements sized for single-hand, thumb-reach operation. Minimum touch target: 44×44px.
- **Responsive desktop:** Two-column layout on wider screens (plan details left, AI chat right), but mobile is the design-first platform.
- **Progressive fallback:** Email, then in-app, then manual "copy to clipboard" for invites/reminders.
- **State transitions** (Draft, Pending, Confirmed, Conflict, Completed, Cancelled) clearly marked.
- **No confusing onboarding flows** — invitees have one-step entry, organizers never feel "blocked."
- **Accessibility:** All icons/buttons have text labels, color contrast at least WCAG AA, voice input supported throughout for accessibility. Empty states use warm illustrations and encouraging copy, never blank screens.

---

## 10. Narrative

Sophie is a product designer with a packed schedule and a friend group spread across multiple cities. Every time they want to gather for a weekend brunch, the coordination process in the group chat drags on for days — half the group misses messages, suggested times overlap with undisclosed commitments, and location debates derail progress. Sophie tries to wrangle everyone with calendar polls, but responses trickle in, and by the time consensus forms, enthusiasm fades.

With Catchup, Sophie taps a suggestion pill — "Plan brunch with your crew?" — and speaks her idea into the AI chat. The app extracts the details: Saturday brunch, Saturday-Sunday 10am-2pm, crowdsource location on. She shares the Catchup link in the group chat, and friends respond instantly — some connect their Google Calendars, others simply type out their names and times. Two friends suggest neighborhoods. A social proof indicator shows "5 of 6 have responded."

A suggestion chip appears on Sophie's home screen: "Saturday 11am works for 5/6 — confirm?" She taps it. The AI shows the breakdown — Mia has yoga until noon on Saturday, but Sunday 11am works for everyone. Sophie confirms Sunday. Email reminders go out to the three friends with accounts. For the other two, Sophie sees their gray icons, taps "Copy message," and pastes the pre-written text into WhatsApp in under 10 seconds.

Sunday morning, everyone gets a reminder. Brunch happens. The plan quietly auto-archives, and Sophie gets a nudge to confirm who attended. She no longer dreads group plan logistics — she simply lets Catchup do the heavy lifting, making social connection frictionless and fun.

---

## 11. Success Metrics

### North Star Metric

- **Metric:** # of Plans Completed (plans that reached "Completed" state with ≥1 confirmed attendee)
- **Current baseline:** 0 (net-new product)
- **Aspirational target:** 5,000 in Q1 post-launch
- **Measurement:** Server-side event triggered when a plan's state transitions to "Completed" (auto-triggered 2 hours after event end time).

### Input Metrics (Funnel)

| # | Input Metric | Definition | Why It Matters |
|---|---|---|---|
| 1 | # of Plans Created | An organizer initiates a new plan (enters Draft state). | Top of funnel. No plans created = nothing downstream. |
| 2 | # of Availability Responses per Plan | Invitees respond with their availability on a given plan. | Measures invitee engagement and link-sharing effectiveness. |
| 3 | # of Plans Reaching "Confirmed" State | Organizer locks in the plan — time, place, and attendee list are set. | Conversion metric. Measures whether the product successfully collapses the coordination loop. |
| 4 | # of People Attended | Attendees who confirmed and were present (tracked via organizer post-event nudge). | Measures real-world impact. A confirmed plan with zero attendees is a failure. |

### MVP Validation Signals (What We're Watching First)

- Are plans actually reaching "confirmed" status, or do they stall out?
- How long does it take an organizer to go from "create" to "share link"? (Target: <60 seconds)
- Do invitees who receive a link actually submit availability? (Target: >50% response rate)
- Are organizers coming back to create a second plan? (Target: >30% repeat usage)
- What % of anonymous invitees convert to signed-up users? (Track, no target for MVP)

### Aspirational Growth Targets (Q1 Post-Launch)

| Metric | Target | Measurement |
|---|---|---|
| Plans Completed | 5,000 in Q1 | Count of plans reaching Completed state |
| Avg. People Attended per Plan | ≥4 | Post-event attendance confirmation by organizer |
| Invitee-to-Account Conversion Rate | ≥25% | Unique invitees who create an account ÷ total unique link opens |
| Plans Reaching Confirmed State | ≥70% | plan_state_changed events (to: Confirmed) ÷ total plans created |
| Virality Coefficient | >1.2 within 90 days | New organizer accounts attributed via referral_plan_id ÷ total organizers in cohort |
| Organizer 4-Week Retention | Baseline TBD | % of organizers who create a second plan within 28 days |
| Time from Plan Creation to Share | Median <60 seconds | Timestamp delta: plan_created → plan_link_copied |

### Guardrail Metrics

- **Email Delivery Failure Rate:** Monitor actively. If failure rate exceeds 5%, investigate email provider configuration. Surface clipboard fallback as primary notification method while debugging.
- **AI Chat Availability:** Monitor actively. If availability drops significantly, disable proactive suggestion chips and AI suggestions. Fall back to fully manual plan creation and confirmation flows. Core plan creation/sharing/response functionality must never be affected.
- **Cross-User Data Exposure:** Zero tolerance. Any incident where User A can see User B's calendar data, contact data, or integration credentials triggers immediate rollback of the affected feature, a full security audit, and user notification within 24 hours.

### Tracking Plan

| Event | Captures | Purpose |
|---|---|---|
| plan_created | plan_id, has_location, crowdsource_enabled, duration_type (fixed/flexible), input_method (ai/form) | Plan creation funnel |
| plan_link_copied | plan_id | Sharing behavior |
| availability_page_viewed | plan_id, has_account (boolean) | Link engagement |
| availability_submitted | plan_id, input_method (manual/calendar/free_text), has_location_suggestion (boolean) | Invitee conversion |
| account_created_from_availability_page | plan_id, referral_plan_id | Viral loop tracking |
| plan_state_changed | plan_id, from_state, to_state, trigger (system/organizer/AI) | State machine analytics |
| ai_chip_tapped | plan_id, chip_type (time/location/conflict/activity) | AI engagement |
| ai_chat_input | plan_id, input_type (text/voice/image), user_type (organizer/invitee) | AI usage patterns |
| email_sent / email_delivered / email_failed | plan_id, invitee_has_account | Notification pipeline health |
| clipboard_copy_used | plan_id | Manual nudge frequency |
| plan_completed | plan_id, confirmed_attendee_count | North star tracking |
| attendance_confirmed | plan_id, actual_attendee_count | Real-world impact |

---

## 12. Impact Sizing Model

### Calculation

1. **Beta organizers (Weeks 1-4):** 500 organizers — sourced from waitlist signups, personal network seeding, and target community outreach (tech Slack groups, university clubs, social meetup organizers).
2. **Plans created per organizer per month:** 3 — assumption based on social frequency data (average young professional has 2-4 social outings/month).
3. **Beta duration contributing to Q1:** 2 months — launch timeline (beta Weeks 1-4, public launch Month 2, Q1 ends ~Month 3).
4. **Plans created in beta period:** 500 organizers × 3 plans/month × 2 months = **3,000 plans**.
5. **Confirmed rate:** 70% of created plans reach "Confirmed" — assumption; When2meet shows ~65-75% of polls with ≥3 responses result in a chosen time.
6. **Completion rate of confirmed plans:** 75% — plans with a confirmed time and reminders sent have higher follow-through than unconfirmed plans.
7. **Completed plans in beta:** 3,000 × 70% × 75% = **~1,575 completed plans**.
8. **Viral expansion (Month 2-3):** Viral coefficient of 1.3 means each organizer generates 1.3 new organizers from invitees who convert. With 500 beta organizers seeding public launch: Month 2: ~1,150 total organizers. Month 3: ~2,645 total organizers. Additional plans from viral organizers model to **~5,000 cumulative completed plans by end of Q1**.

### Revenue / Bottom-Line Impact

- Pre-revenue product. No monetization in v1. Impact is measured in user growth, viral loop establishment, and proof of product-market fit.

### Confidence Level

- **Low-Medium** — no historical baseline exists. All assumptions are directional estimates informed by comparable social coordination products. Key assumptions that could change the estimate: viral coefficient could be lower if invitees don't convert to organizers (biggest risk); plans-per-organizer could be higher if community organizers with recurring events adopt early; completion rate is highly sensitive to reminder effectiveness.

---

## 13. Technical Considerations

### Technical Needs

- **Frontend:** Mobile-first responsive web application. Graph paper design system with component library for plan cards, suggestion chips, floating chat, and availability grid. The specific framework should be recommended by the AI coding tool based on the requirements in this PRD.
- **Backend:** Event-driven plan state machine with all state transitions logged for analytics. RESTful API layer for plan CRUD, availability submission, and notification management. Real-time updates for plan pages (organizer sees new availability responses as they arrive).
- **AI/LLM Integration:** Chat responses (conversational agent for organizer and invitee questions), time suggestion logic (aggregation algorithm over submitted availability), conflict detection (rule-based check against required invitee availability), location suggestion collation (ranking of crowdsourced inputs), voice transcription (speech-to-text), and image parsing (vision/OCR).
- **Invite Link Generation:** Cryptographically random tokens (e.g., UUID v4 or equivalent), not sequential or guessable. Each plan has exactly one invite link.
- **Notification Pipeline:** Async email sending via a transactional email service (e.g., Resend, SendGrid, Postmark). In-app notifications for real-time updates.
- **Anonymous Submission Flow:** Availability submission endpoint does not require authentication. Submissions are associated with the plan via invite token and identified by display name + session token.

### Auth

- **Email OTP:** Primary auth method. User enters email, receives a one-time passcode, enters it to authenticate. No password required.
- **Google OAuth 2.0:** Secondary auth method. One-tap signup/login.
- **Google Calendar API:** Optional read-only integration. OAuth scope: `calendar.freebusy` for free/busy-only sharing, or `calendar.readonly` when the invitee opts into "Share event names." Never write access. Per-plan consent with sharing granularity selection required. No server-side caching of calendar data.

### Integration Points

| Integration | Purpose | Scope | Notes |
|---|---|---|---|
| Transactional Email Service (Resend, SendGrid, or Postmark) | Email OTP, plan notifications, reminders | Free/low-cost tier sufficient for MVP | Evaluate based on free tier limits and deliverability |
| Google OAuth 2.0 | Organizer signup/login | Authentication | Secondary to email OTP |
| Google Calendar API | Availability auto-fill | Read-only free/busy or readonly scope | Calendar data fetched at submission time only; per-plan consent required |
| AI/LLM Provider | Chat, suggestions, conflict resolution | API integration | Decision needed: cost vs. latency vs. data privacy tradeoffs |
| Speech-to-Text API | Voice input transcription | Real-time transcription | Accuracy target: ≥90% for common plan-related vocabulary |
| Vision/OCR API | Image input parsing | On-demand processing | Graceful error handling when image is unparseable |
| Mixpanel | Product analytics | Event tracking | Instrumented per the Tracking Plan |

### Data Storage & Privacy

- **Plan data** stored server-side: plan metadata, state, invite link token, all availability responses, location suggestions, and state transition history.
- **Invitee responses** for non-account users stored with plan_id and anonymous disambiguation token. No PII beyond display name is retained for non-account users.
- **Calendar data** is fetched at submission time only. Only free/busy time windows (or event titles if opted in) are used — never descriptions, attendees, or other metadata. Calendar OAuth tokens are encrypted at rest and scoped to the authenticated user.
- **Strict data isolation:** All database queries are scoped to the authenticated user_id. No API endpoint or UI surface ever returns integration data belonging to another user.
- **Compliance:** GDPR and CCPA compliant. Explicit opt-in for email notifications. Right to deletion honored within 30 days. Data minimization principle: only collect and store what is necessary for product functionality.
- **Retention policy:** Plan data retained for 12 months post-completion, then deleted or anonymized. Account-holder data retained while account is active; deleted within 30 days of account deletion request.

### Scalability & Performance

- **Design for early traction, not hypothetical load.** The architecture should comfortably support a few hundred concurrent users. Over-engineering for scale before PMF is explicitly out of scope.
- **Simplicity over performance optimization.** Use managed services, keep the stack simple, and optimize for developer speed and deployment simplicity. If traction materializes, scale reactively.
- **Real-time updates:** Simple polling or server-sent events (SSE) is sufficient for MVP. No WebSocket infrastructure required upfront.
- **Notification pipeline:** Async email sending is good practice but no delivery webhook monitoring infrastructure or auto-pause automation required for MVP. Manual intervention if issues arise.

### Potential Challenges

- **AI suggestion quality with sparse data:** With fewer than 3 responses, the AI cannot confidently suggest a time. The system must degrade gracefully — displaying a friendly "share the link more widely" message rather than a low-confidence suggestion.
- **Duplicate name handling:** Two non-account invitees with the same name submitting to the same plan. Disambiguation approach visible to organizer only.
- **Voice and image input accuracy:** Speech-to-text and vision/OCR models are not 100% accurate. Errors must surface gracefully with an easy correction flow. Users should never feel punished for using voice or image input.
- **Link abuse:** Public, no-auth availability links are vulnerable to spam. Mitigation: rate limiting on submissions, optional CAPTCHA after suspicious patterns, and organizer trust toggle.
- **Google Calendar OAuth verification:** Google requires a review process (2-4 weeks) for apps requesting Calendar API access. This must be initiated immediately to avoid blocking calendar features.
- **Calendar OAuth token expiration:** Tokens expire or are revoked. Graceful fallback to manual entry with a clear message.
- **Anonymous identity conflicts:** Duplicate display names handled via disambiguation tokens.

---

## 14. Risk Assessment

| Risk | Impact | Severity | Mitigation |
|---|---|---|---|
| AI suggestions not useful or accurate enough for users to trust | Organizers stop using suggestion chips, revert to manual coordination | High | Graceful degradation — manual fallbacks always available. AI suggestions only surface when confidence threshold is met. User testing in beta to tune prompt engineering. |
| Invitee response rates lower than expected (plans stall in Pending) | Plans stall, organizers churn | Medium | A/B test availability page CTA copy and layout. Add "nudge" feature for organizers to re-share link. Social proof on availability page ("5 friends already responded"). |
| Email deliverability issues (emails land in spam) | Reminders don't reach invitees, plans fall through | Medium | Evaluate email provider for deliverability reputation. Use dedicated sending domain with proper SPF/DKIM/DMARC. Clipboard fallback always surfaced alongside email. |
| Link abuse (spam, unauthorized access) | Bad actors flood plans with fake responses | Low | Rate limiting on link responses. Optional CAPTCHA if abuse detected. Organizer trust toggle limits re-edit exposure. |
| Google Calendar OAuth scope changes or rate limits | Calendar auto-fill breaks for users | Low | Calendar connect is optional, not required. Manual availability input always works. Monitor Google API dashboard for deprecation notices. |
| Viral coefficient lower than projected | Growth stalls, Q1 targets not met | Medium | Focus on invitee-to-account conversion UX. Test nudge timing and copy. Ensure the first invitee experience is delightful enough to drive organic conversion. |
| Cross-user data exposure | Privacy breach, user trust destroyed | Critical | Zero tolerance. Strict data isolation enforced at query layer, API layer, and validated in QA. Any incident triggers immediate rollback and security audit. |

---

## 15. Launch Plan

### Experiment Design

Catchup is a net-new product — there is no existing baseline or incumbent feature to A/B test against. The launch strategy is designed around a closed beta cohort whose behavior establishes the baseline for all subsequent optimization.

- **Success Criteria:**
  - # of plans reaching "Confirmed" state improves by 20% week-over-week within the beta period.
  - ≥25% of all invitees (people who open a plan link) create a Catchup account within the first month.
  - ≥40% of created plans reach "Completed" status.
- **Eligibility:** All users who sign up during the closed beta via waitlist. Target cohort size: 200-500 organizers.
- **Test Group:** Full Catchup experience — AI agent with text/voice/image input, suggestion chips, email reminders, crowdsourced location input, all plan states.
- **Control Group:** Not applicable for v1 launch. The beta cohort's Week 1 behavior serves as the internal baseline. A/B testing will be introduced in Month 2 once baseline behavior is established.
- **Duration:** 4-week closed beta → open public launch.

### Rollout Plan

**Phase 1 — Closed Beta, Cohort A (Weeks 1-2)**
- **Audience:** ~100 organizers, invite-only (sourced from waitlist, personal networks, target communities).
- **What's live:** Core MVP (Milestone 1) — plan creation, link sharing, availability collection, organizer dashboard, AI chat (text only), basic plan state machine, email notifications.
- **Monitoring:** Plan creation rate, link share rate, invitee response rate per plan, AI chat usage, drop-off points in the availability submission flow, account creation rate from availability page CTA.
- **Action triggers:** If plan creation rate is below 2 plans/organizer/week, investigate onboarding friction and cold-start experience. If invitee response rate is below 50%, investigate availability page UX and link distribution patterns.

**Phase 2 — Expanded Beta, Cohort B (Weeks 3-4)**
- **Audience:** Expand to ~500 organizers (mix of waitlist and referrals from Cohort A).
- **What's live:** Milestones 1 + 2 — full AI agent (voice, image, text), suggestion chips with conflict detection, full email notification pipeline, notification status dashboard, copy-to-clipboard fallback.
- **Monitoring:** All Phase 1 metrics plus: email delivery success rate, copy-to-clipboard usage, conflict detection accuracy, voice and image input usage and error rates, crowdsource location toggle adoption.
- **Action triggers:** If email delivery failure rate exceeds 5%, investigate email provider. If AI conflict suggestions are accepted less than 30% of the time, review suggestion logic.

**Phase 3 — Public Launch (Month 2)**
- **Audience:** Open to all. Marketing push begins — Product Hunt launch, social media campaigns targeting the core demographic, referral incentives.
- **What's live:** Full product (all milestones) plus growth loops (auto-archival, invitee-to-account conversion prompts, post-event NPS nudge).
- **Monitoring:** All prior metrics plus: virality coefficient, plan completion rate, invitee-to-account conversion rate, cohort retention (1-week, 4-week, 12-week), NPS scores and qualitative feedback themes.

### Rollback Criteria

| Condition | Action | Decision Authority |
|---|---|---|
| Plan completion rate drops below 30% | Investigate AI suggestion quality, onboarding friction, and invitee response UX. Conduct emergency user interviews. | PM + Engineering Lead |
| Email delivery failure rate exceeds 5% | Investigate email provider configuration. Surface clipboard fallback as primary notification method. | Engineering Lead |
| AI chat availability drops significantly | Disable proactive suggestion chips. Fall back to manual organizer input for all fields. Maintain text chat in degraded mode if possible. | Engineering Lead |
| Invitee-to-account conversion rate falls below 10% after 2 weeks | Redesign availability page CTA placement and copy. Test more prominent nudge patterns. | PM + Design |
| Negative NPS trend (score drops below 0 for two consecutive weeks) | Pause marketing spend. Prioritize top 3 qualitative complaints for immediate product fixes. | PM |

### Post-Launch Success Review

At the end of Q1 post-launch, the team will conduct a formal review against the output goal (5,000 completed plans) and all input metrics. The review will assess: whether the viral loop is self-sustaining, which AI features are most/least used, whether the non-account invitee experience is a growth strength or conversion weakness, data privacy audit confirming zero cross-user data exposure incidents, and roadmap prioritization for Q2.

---

## 16. Milestones & Sequencing

### Project Estimate

- **MVP:** Medium (4 weeks to public-ready MVP)
- **Target:** Launch core product by end of Month 1; AI suggestion expansion and notification polish by Month 2-3.

### Team Size & Composition

| Role | Owner | Scope | Time Commitment |
|---|---|---|---|
| PM / Product / QA | Kaivalya Gandhi | Product decisions, QA, user testing, analytics setup | Full-time |
| Full-Stack Engineer | TBD | Backend (state machine, API, email pipeline, auth), infra | Full-time |
| Frontend Engineer | TBD | Mobile-first web app, AI chat UI, availability page, plan cards | Full-time |
| Designer | TBD | Graph paper design system, component library, UX flows | Part-time / fractional |
| AI/ML Consultant | TBD (stretch) | LLM integration, voice/image input, suggestion logic tuning | Part-time, Milestone 2 only |

### Suggested Phases

#### Milestone 1 — Core MVP (Weeks 1-2)

**Deliverables by role:**
- **Frontend Engineer:** Plan creation flow (AI chat with text input + form fallback), home screen with plan cards (all 6 states + CTAs), cold-start empty state with suggestion pills, availability response page (manual time slot selection + Google Calendar OAuth auto-fill), shareable invite link copy flow, social proof indicator on availability page.
- **Full-Stack Engineer:** Plan state machine backend (Draft → Pending → Confirmed → Conflict → Cancelled → Completed), invite link generation (cryptographic tokens), availability submission API (no-auth endpoint), email OTP auth + Google OAuth signup/login, basic email notification scaffolding (transactional email provider setup).
- **Designer:** Graph paper design system (color palette, typography, grid, component specs), plan card designs for all 6 states, availability page layout, AI chat shell.
- **PM:** Google OAuth verification process initiated (critical path — 2-4 weeks). Email provider selected. Analytics tracking plan finalized and instrumented for core events (plan_created, plan_link_copied, availability_submitted). Mixpanel setup.

**Dependencies:** Google OAuth credentials provisioned. Email provider selected. Design system baselined.

#### Milestone 2 — Full AI Agent + Conflict Handling (Week 3)

**Deliverables by role:**
- **Frontend Engineer:** Floating AI chat window with text, voice (hold-to-record), and image input. Auto-minimize/auto-hide behavior on scroll. Suggestion chips above bottom nav (contextual to screen and plan state). Conflict resolution UI (3 alternatives with per-person breakdown, required vs. optional visual indicators). Invitee AI chat on availability page.
- **Full-Stack Engineer + AI Consultant:** LLM integration for chat responses. Time suggestion algorithm (aggregated availability → best window → suggestion chip). Conflict detection logic (required invitee unavailable → Conflict state → 3 alternatives generated). Location suggestion collation (crowdsource ranking after ≥3 responses). Voice transcription pipeline (speech-to-text API). Image parsing pipeline (vision/OCR API). Calendar sharing granularity toggle (free/busy vs. event names). Graceful degradation for sparse data (<3 responses).
- **Designer:** Suggestion chip visual design and animation specs. Voice input waveform feedback. AI chat expanded/minimized/hidden state transitions. Conflict state UI.
- **PM:** LLM provider selected (cost/latency/privacy evaluation). Speech-to-text and vision API access confirmed. User testing of AI suggestion flow with 5-10 beta organizers.

**Dependencies:** LLM provider contract. Speech-to-text API access. Vision API access. Google Calendar OAuth verification complete (or workaround for beta).

#### Milestone 3 — Notification & Reminder Polish (Week 4)

**Deliverables by role:**
- **Full-Stack Engineer:** Full email pipeline (confirmation, 24h reminder, 2h reminder, plan changes, cancellation). Notification status tracking on plan page. 1-click clipboard fallback message generation. Invitee email opt-in (at account creation) and opt-out (via account settings). Auto-archival trigger (2 hours post event end). Post-event attendance confirmation nudge to organizer. Notification batching for large plans (10+ invitees).
- **Frontend Engineer:** Notification dashboard UI (per-invitee status rows with icons). Bottom sheet for clipboard fallback message. Bulk copy-message CTA banner (when zero invitees have accounts). Auto-archival visual transition (Completed state, muted card, archive view).
- **PM:** End-to-end QA of all notification flows. Edge case testing: email failure, zero-account-invitee plans, plan cancellation with existing responses.

**Dependencies:** Email provider fully integrated.

#### Milestone 4 — Growth & Feedback Loops (Week 4+, Ongoing)

**Deliverables by role:**
- **Full-Stack Engineer:** Invitee-to-account conversion prompt (post-availability-submission and post-plan-completion). Referral_plan_id attribution on new account creation. Plan history/archive view. Catchup v1 contact integration (optional import).
- **Frontend Engineer:** Post-submission account creation nudge UI refinement. Post-plan NPS or satisfaction nudge. Archive/history screen. People page with lightweight contact management.
- **PM:** Virality tracking dashboard (referral_plan_id → new organizer → their first plan). A/B test infrastructure setup for Month 2 experiments (nudge copy, nudge timing, chip placement). Baseline metrics established. First cohort analysis.

**Dependencies:** Full analytics tracking plan implemented and validated. All core flows stable from Milestones 1-3.

---

## 17. Future Roadmap

### Planned Follow-ups

- **SMS Notifications (Q2):** Add SMS as an optional notification channel alongside email, if engagement data shows users want it. Requires: SMS gateway vendor selection (Twilio or equivalent), phone number verification flow, STOP keyword compliance, delivery monitoring.
- **Native Contacts Integration (Q2):** Import and sync contacts from phone or Google. Enables richer AI personalization and easier plan creation.
- **Apple / Microsoft OAuth (Q2):** Broadens signup/login options beyond email OTP and Google.
- **Per-Plan Calendar Source Controls (Q3):** Allow users to select which connected calendars apply to a specific plan (e.g., "use only my personal calendar"). Relevant when multi-calendar users become a meaningful segment.
- **Recurring Plan Templates (Q3):** Organizer creates a template for repeating events (e.g., "Monthly Hiking Club"). One-click re-use with pre-filled metadata and invitee list. Especially valuable for community organizers.
- **Group / Community Profiles (Q3):** Persistent group entities with shared history, venue preferences, and member lists. Enables richer AI context over time.
- **In-App Plan Feed or Social Layer (Q4):** A feed of upcoming/past plans across groups, enabling serendipitous social discovery. Only if network effects justify it.
- **Multi-Language Support (Q4):** Internationalization for non-English markets.

### Build-Now Architectural Implications

Even though these features are deferred, certain architectural decisions should be made now to avoid costly migrations later:

- **AI context model:** Architect the AI's data model to accept and store group-level preference data from day one — neighborhoods, past venues, event types, time-of-day preferences — even if sparsely populated in v1. This ensures location and activity suggestions improve organically as usage grows.
- **Location logic:** Do not hard-code any location ranking or suggestion logic. Design for a pluggable recommendation layer that can be swapped or enhanced (e.g., integrating Google Places API, Yelp, or a custom ML model) without touching the core plan flow.
- **People/Contacts page:** Scaffold the navigation entry point and basic page layout in v1, but only wire up lightweight in-app management and Catchup v1 integration. This allows full native contacts activation in Q2 without a UI redesign.
- **String externalization:** Even though multi-language is Q4, avoid hard-coding user-facing strings in component code. Use a string constants file or i18n-ready pattern from the start.
- **Notification channel abstraction:** Build the notification system with a channel abstraction layer (email, in-app, and a placeholder for SMS). This ensures SMS can be added in Q2 without rearchitecting the notification pipeline.

---

## 18. Open Questions

| # | Question | Owner | Context |
|---|---|---|---|
| 1 | Should plan links expire after a set period, or remain active indefinitely? | Product + Engineering | Security vs. UX tradeoff — expired links reduce abuse risk but may frustrate late responders. Options: (a) never expire, (b) expire 24h after event end, (c) expire when cancelled. |
| 2 | What is the exact reminder cadence? Should it be organizer-configurable or fixed? | Product + Design | Current spec: 24h + 2h before event (fixed). Alternative: let organizer choose. Impacts notification volume and user perception. |
| 3 | How should the AI handle conflicting inputs from voice vs. text in the same session? | AI / Engineering | Edge case: user says "Saturday" but types "Sunday." Needs explicit handling to avoid confusion. |
| 4 | What data from past plans should be retained to improve AI suggestions, and for how long? | Legal / Privacy | Directly impacts AI suggestion quality (venues, times, attendee patterns) and GDPR/privacy compliance. |
| 5 | How is deduplication handled when a signed-up invitee also submitted anonymously on the same plan? | Engineering | Especially relevant when a signed-up user previously submitted anonymously (not via the conversion flow). |
| 6 | Should the availability page show a scheduling window (date range) or specific dates with time slots? Does this depend on organizer input? | Design | Impacts calendar sync parsing complexity and invitee UX. |
| 7 | What is the link expiration or access policy for cancelled plans? | Product | Should the link still be accessible (read-only "cancelled" state) or return 404? |

---

## 19. Implementation Workflow

This PRD is designed as the primary input artifact for AI-assisted development. The following section describes the intended toolchain, workflow, and conventions for translating this document into working software.

### 19.1 Workflow Overview

The implementation pipeline has four stages:

1. **Design Exploration:** Magic Patterns for inspiration and pattern references → Figma Make / Google Stitch for screen-level mockups and interactive prototypes.
2. **Spec & Task Breakdown:** This PRD + design mocks are the dual-input artifacts. Notion serves as the working doc layer for specs, notes, and design decisions. Linear is the task management surface where user stories and milestones are broken into trackable work items.
3. **AI-Assisted Development:** Kiro and Cursor both consume the PRD and design mocks as context. Developers load relevant sections and mockups when prompting the AI coding agent for code generation.
4. **QA & Validation:** Success metrics and guardrail metrics from this PRD define acceptance criteria. Mixpanel is instrumented using the Tracking Plan's event names and capture fields. Google Cloud hosts the infrastructure.

### 19.2 PRD as AI Agent Input: Structural Conventions

This PRD is structured to be directly consumable by AI coding tools. Key conventions:

- **User story IDs** (US-O1, US-SI2, etc.) serve as stable anchors. When prompting the AI coding agent, developers reference these IDs to scope the work (e.g., "Implement US-O12: notification status view with green/gray icons per invitee").
- **Flow variant numbers** (Flow 1-9) are self-contained spec units. Each flow can be loaded as context for a development session without requiring the full document.
- **State machine definitions** (Section 6, Flow 8) are the source of truth for backend logic. The 6 states, their transitions, and edge cases map directly to backend implementation.
- **Notification types table** (Section 6, Flow 7) is the spec for the email notification pipeline — each row is a notification to implement.
- **Edge cases** throughout the document are test case seeds. Each edge case maps to at least one test scenario that should be verified.
- **Tracking Plan** (Section 11) provides the exact event names and capture fields for Mixpanel instrumentation — developers should implement these event names verbatim.
- **Screen & Component Architecture** (Section 9) maps each page to its components and interactions — this is the frontend implementation guide.

### 19.3 Design Workflow

1. **Exploration:** Use Magic Patterns to pull inspiration for the graph-paper aesthetic, plan card layouts, availability grid patterns, floating chat UI, suggestion chip styles, and state badge treatments.
2. **Mockup Production:** Use Figma Make / Google Stitch to produce screen-level mockups for each page defined in the Screen & Component Architecture (Section 9): Landing Page, Home Page (with cold-start state), Plan Page (organizer view), Availability Page (invitee view), People Page, Settings Page.
3. **Design Handoff:** Design output is stored in a shared Figma project and linked from Notion. AI coding agents reference these mocks alongside the PRD when generating frontend code.
4. **State Coverage:** Each plan state (Draft, Pending, Confirmed, Conflict, Cancelled, Completed) requires a distinct plan card mockup with the correct badge and CTAs.

### 19.4 AI-Assisted Development Workflow

- **Stack Selection:** This PRD is deliberately stack-agnostic. The AI coding agent should recommend a tech stack based on the requirements (mobile-first responsive web, real-time updates, AI/LLM integration, email pipeline, OAuth, anonymous submissions). The team evaluates the recommendation against Google Cloud infrastructure constraints.
- **Context Loading:** Developers load the PRD (or relevant sections) + design mocks as context when prompting the AI agent. The recommended pattern is to scope prompts to a single flow variant or functional requirement at a time, not the entire document.
- **Code Review:** AI-generated code is reviewed by the team before merge. The PRD's edge cases section is the checklist for review — every edge case should be handled or explicitly deferred with a tracking item.
- **Iteration:** When the PRD changes (new decisions, resolved open questions), the updated PRD is reloaded as context. The PRD is version-controlled alongside the codebase.
- **Tool Flexibility:** Both Kiro and Cursor are supported — different team members may use either. The PRD's structure (section headers, story IDs, state definitions) is tool-agnostic.

### 19.5 Per-Milestone Tool Mapping

| Milestone | Design Tools | Dev Tools | PM/Docs | Analytics |
|---|---|---|---|---|
| M1 — Core MVP | Magic Patterns → Figma Make / Google Stitch (all core screens) | Kiro / Cursor (plan creation, state machine, availability page, auth, link generation) | Linear (task tracking), Notion (specs, design decisions) | Mixpanel setup (core events: plan_created, availability_submitted, plan_state_changed) |
| M2 — AI Agent + Conflict | Figma Make (AI chat UI, suggestion chips, conflict resolution UI, voice/image input) | Kiro / Cursor (LLM integration, conflict detection, voice/image pipelines, invitee AI chat) | Linear, Notion | Mixpanel (ai_chip_tapped, ai_chat_input events) |
| M3 — Notifications | Figma Make (notification dashboard, clipboard fallback UI) | Kiro / Cursor (email pipeline, notification batching, opt-in/out logic) | Linear, Notion | Mixpanel (email_sent, email_delivered, email_failed, clipboard_copy_used) |
| M4 — Growth | Figma Make (conversion nudge variants, archive view, NPS prompt) | Kiro / Cursor (auto-archival, conversion tracking, attendance nudge, Catchup v1 integration) | Linear, Notion | Mixpanel (account_created_from_availability_page, plan_completed, full funnel dashboards) |

### 19.6 Infrastructure & Deployment

- **Google Cloud** as the hosting platform. Specific services to be recommended by the AI coding agent based on the chosen stack (e.g., Cloud Run for services, managed database, Cloud Pub/Sub if async processing is needed).
- **Optimize for simplicity and developer speed**, not scale readiness. Use managed services where possible to minimize ops overhead.
- **CI/CD pipeline** setup is part of M1 deliverables. The AI coding agent should recommend a pipeline appropriate to the chosen stack and Google Cloud deployment target.
- **Environment strategy:** Development, staging, and production environments. Staging mirrors production for pre-release QA.

### 19.7 MVP Cost Drivers

Understanding where money goes during the beta phase (100–500 organizers, ~1,000–3,000 invitees) is critical for keeping burn lean while validating PMF. The table below estimates monthly costs at beta scale, followed by mitigation strategies for the biggest variable cost.

#### Cost Estimates at Beta Scale (~500 organizers, ~1,500 plans/month)

| Category | Service | Free Tier | Estimated Beta Cost | Notes |
|---|---|---|---|---|
| **Hosting & Infra** | Google Cloud (Cloud Run, managed DB, storage) | $0 for light usage via free tier credits | $20–50/month | Scales with traffic; beta volumes are minimal. New GCP accounts get $300 credit. |
| **Transactional Email** | Resend, SendGrid, or Postmark | Resend: 3K emails/month free. SendGrid: 100/day free. | $0–20/month | At peak beta (~27K emails/month: 1,500 plans × 6 invitees × 3 emails), may exceed free tier. Resend Pro is $20/month for 50K. |
| **AI/LLM API** | LLM provider (see breakdown below) | Varies by provider | **$50–200/month** | **Primary variable cost driver.** Depends on model choice, call volume, and invitee chat activity. |
| **Voice Transcription** | Whisper API / Google STT | Limited free tier | $5–20/month | ~$0.006/min (Whisper). Depends on voice input adoption rate. At 10% of plan creations using voice, ~150 calls × avg 30s = ~75 min = ~$0.45. Low unless voice adoption is high. |
| **Image/OCR** | Vision API (Google Vision, GPT-4o vision) | Google Vision: 1K units/month free | $5–15/month | Only triggered when organizers send images during plan creation. Expected to be a small % of plans. |
| **Analytics** | Mixpanel | 20M events/month free | $0 | Free tier is more than sufficient for beta. |
| **Domain** | Registrar | — | ~$1/month ($12/year) | Negligible. |
| **Project Management** | Linear | Free for small teams | $0 | Paid tier ($8/user/month) only if needed. |
| **Design Tools** | Figma, Magic Patterns | Free tiers available | $0–15/month | Likely already covered by existing team subscriptions. |
| **Auth** | Email OTP + Google OAuth | Email OTP cost is included in transactional email. Google OAuth is free. | $0 | No SMS OTP = no per-verification cost. |
| **SMS** | Not applicable (deferred) | — | **$0** | Deferred to post-PMF. This decision saves ~$100–300/month at beta scale. |
| | | | **Total: ~$80–320/month** | |

#### LLM API Cost Breakdown (The Primary Variable Cost)

The AI agent makes LLM calls at multiple touchpoints. The strategy is to **start with the cheapest viable model** (e.g., GPT-4o-mini, Claude Haiku) and upgrade only if suggestion quality is insufficient during beta testing.

| Touchpoint | Calls per Plan Lifecycle | Model Tier | Estimated Cost per Plan |
|---|---|---|---|
| Plan creation (NL → structured field extraction) | 1–3 calls | Cheap (GPT-4o-mini / Haiku) | $0.001–0.005 |
| Follow-up clarification prompts | 0–2 calls | Cheap | $0.001–0.003 |
| Availability parsing (free-text → time blocks) | 0–3 calls (per invitee using free-text) | Cheap | $0.001–0.005 |
| Time suggestion generation | 1–3 calls (triggered when responses accumulate) | Cheap | $0.001–0.005 |
| Conflict detection + alternative generation | 0–2 calls (only when conflicts exist) | Cheap | $0.002–0.008 |
| Location suggestion collation | 0–1 calls (only when ≥3 suggestions) | Cheap | $0.001–0.003 |
| Organizer chat (ad-hoc questions) | 0–5 calls per plan | Cheap | $0.002–0.010 |
| Invitee chat (questions on availability page) | 0–2 calls per invitee (most won't use) | Cheap | $0.001–0.005 |
| **Total per plan (estimated)** | **3–20 calls** | | **$0.01–0.05** |

At 1,500 plans/month during beta: **$15–75/month** for LLM calls with a cheap model. At the high end with heavier chat usage and some calls requiring a stronger model: **$100–200/month**.

#### Cost Mitigation Strategies

**LLM costs (biggest lever):**
- **Start cheap, upgrade selectively.** Use GPT-4o-mini or Claude Haiku for all touchpoints initially. Monitor suggestion acceptance rates during beta — if organizers consistently dismiss AI suggestions, the model may need upgrading for specific touchpoints (e.g., time suggestion generation) while keeping the cheap model for simpler tasks (e.g., free-text parsing).
- **Cache and reuse.** Time suggestion generation can be cached per plan — don't regenerate on every page load, only when new availability is submitted. Same for location collation.
- **Limit invitee chat scope.** Invitee chat responses are informational and formulaic (aggregate stats, plan details). These can be handled with structured lookups + lightweight model calls or even template-based responses without an LLM call for common questions.
- **Batch where possible.** Instead of one LLM call per free-text availability input, batch multiple inputs and parse them in a single call if they arrive in a short window.
- **Set a monthly budget alert.** Configure billing alerts at $100 and $200/month for LLM API costs. If the $200 threshold is hit, audit which touchpoints are driving volume and optimize or throttle.

**Email costs:**
- Free tier should cover Phase 1 (100 organizers). Move to a paid tier ($20/month) for Phase 2 (500 organizers). This is predictable and low.

**Infrastructure costs:**
- Google Cloud free tier credits ($300 for new accounts) will likely cover the entire beta period. Monitor usage and set billing alerts at $50/month.

**Costs that are $0 because of our decisions:**
- SMS gateway (Twilio): $0 — deferred to post-PMF
- Phone number verification: $0 — using email OTP
- Phone number rental: $0 — not needed
- Mixpanel: $0 — free tier is sufficient
- Google OAuth: $0 — always free
- Linear: $0 — free tier sufficient for small team

#### Cost Scaling Trigger

If Catchup reaches PMF and scales beyond beta, the primary costs that will increase are: LLM API calls (scales linearly with plans and chat activity), email volume (scales with invitees), and infrastructure (scales with traffic). The LLM cost strategy should be revisited when monthly plan volume exceeds 5,000 plans — at that point, evaluate whether self-hosted models, prompt optimization, or tiered model routing (cheap model for simple tasks, expensive model for complex suggestions) is warranted.
