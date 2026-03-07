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

## Personas

### Organizer (Authenticated User)

The organizer is the person who creates a plan and drives it to completion. They always have a Catchup account.

**Characteristics:**
- Has signed up and authenticated (email or social login)
- Can create, edit, and manage plans
- Controls plan settings (location suggestions enabled/disabled, anonymous edit permissions)
- Sees the full dashboard of all their plans and statuses
- Has access to the AI chat agent on plan pages
- May optionally connect a Google Calendar for conflict detection
- May optionally provide a phone number for SMS reminders about their own plans

**Motivations:**
- Wants to avoid being the "group chat logistics coordinator"
- Wants to quickly propose a time/place and get buy-in
- Needs visibility into who has responded, who hasn't, and who has conflicts

### Signed-Up Invitee (Authenticated User)

An invitee who has created a Catchup account, either before receiving an invite or during the invite flow.

**Characteristics:**
- Has a Catchup account with at least a name and email
- May have a phone number on file for SMS reminders
- May have a connected Google Calendar
- Can view plans they've been invited to on their own dashboard
- Their identity is verified (no impersonation risk)
- Can edit their own availability submissions at any time

**Motivations:**
- Wants to respond quickly and not hold up the group
- Wants reminders so they don't forget confirmed plans
- Wants to see what others have said (if organizer allows visibility)

### Anonymous Invitee (Unauthenticated User)

An invitee who accesses a plan via shared link without creating an account.

**Characteristics:**
- Has no Catchup account
- Identifies themselves only by entering a display name on the plan page
- Cannot receive SMS reminders (no phone number on file)
- Cannot connect a calendar (no account to store OAuth tokens)
- Their submission is tied to a browser session token + display name
- May or may not be allowed to edit their submission after initial entry (organizer-controlled setting)

**Motivations:**
- Wants zero friction; doesn't want to sign up for yet another app
- Wants to quickly say "I'm free Saturday afternoon" and move on
- May convert to a signed-up user if they find value

---

## Detailed User Stories

### Organizer Stories

#### Plan Creation

- **US-O1:** As an organizer, I want to describe my plan idea via text or voice to the AI, so that plan details are auto-populated without manual form-filling.
- **US-O2:** As an organizer, I want to review and edit AI-extracted plan details (title, description, date range, location) before sharing, so that I can correct any misinterpretations.
- **US-O3:** As an organizer, I want to send an image (e.g., a screenshot of a venue, a flyer) to the AI during plan creation, so that it can extract relevant details.
- **US-O4:** As an organizer, I want to set whether invitees can suggest locations or if the location is fixed, so that I control the planning scope.
- **US-O5:** As an organizer, I want to set whether anonymous (non-account) invitees can edit their submissions after initial entry, so that I can prevent impersonation/abuse.
- **US-O6:** As an organizer, I want a shareable link generated immediately after plan creation, so that I can paste it into my group chat within seconds.

#### Availability & Conflict Management

- **US-O7:** As an organizer, I want to see all invitee availability responses in a consolidated view (grid/matrix), so that I can quickly identify overlapping free times.
- **US-O8:** As an organizer, I want the AI to highlight the best time slots that maximize attendance, so that I don't have to manually cross-reference.
- **US-O9:** As an organizer, I want to see when a connected invitee has a calendar conflict with a proposed time, so that I can adjust or decide to proceed without them.
- **US-O10:** As an organizer, I want the AI to proactively suggest alternative times when conflicts are detected, presented as actionable chips I can accept or dismiss.
- **US-O11:** As an organizer, I want to finalize a plan time even if not all invitees have responded, so that planning doesn't stall indefinitely.

#### Notifications & Follow-Up

- **US-O12:** As an organizer, I want to see which invitees have SMS reminders enabled and which don't, so that I know who I need to manually follow up with.
- **US-O13:** As an organizer, I want a 1-click "copy reminder message" button for invitees without SMS, so that I can paste a follow-up into external chats.
- **US-O14:** As an organizer, I want to re-share the plan link at any point, so that late additions to the group chat can still participate.
- **US-O15:** As an organizer, I want a summary card on my home page that highlights plans needing attention (missing responses, unresolved conflicts), so that I have a clear to-do list.

#### Plan Confirmation & Completion

- **US-O16:** As an organizer, I want to confirm a plan with a selected time and location, triggering confirmation notifications to all opted-in invitees.
- **US-O17:** As an organizer, I want confirmed plans to auto-archive after the event date passes, so that my dashboard stays clean.

### Signed-Up Invitee Stories

- **US-SI1:** As a signed-up invitee, I want to click a plan link and immediately see the plan details and an availability form, without any additional login wall (if I'm already logged in on that device).
- **US-SI2:** As a signed-up invitee, I want to connect my Google Calendar to auto-populate my availability for the proposed date range, so that I don't have to type it out.
- **US-SI3:** As a signed-up invitee, I want to manually enter my availability if I choose not to connect a calendar.
- **US-SI4:** As a signed-up invitee, I want to suggest a location (if the organizer has enabled it), so that I can contribute venue ideas.
- **US-SI5:** As a signed-up invitee, I want to edit my submitted availability at any time before the plan is confirmed, in case my schedule changes.
- **US-SI6:** As a signed-up invitee, I want to receive SMS reminders for confirmed plans (if I've opted in with my phone number), so that I don't forget.
- **US-SI7:** As a signed-up invitee, I want to see plans I've been invited to on my own dashboard, so that I have a single place to track upcoming social plans.
- **US-SI8:** As a signed-up invitee, I want to opt in or out of SMS notifications per plan or globally, so that I control my notification preferences.

### Anonymous Invitee Stories

- **US-AI1:** As an anonymous invitee, I want to open a plan link and submit my availability with only my name (no sign-up required), so that participating is zero-friction.
- **US-AI2:** As an anonymous invitee, I want to manually enter my available times using a simple time-slot picker or free-text input, since I can't connect a calendar without an account.
- **US-AI3:** As an anonymous invitee, I want to suggest a location (if the organizer has enabled it), even without an account.
- **US-AI4:** As an anonymous invitee, I want to see a clear nudge to create an account and add my phone number, so that I can get SMS reminders if I choose to.
- **US-AI5:** As an anonymous invitee, I want to be able to return to the plan page and see my previous submission, so that I know what I entered. (Relies on browser session token; if session is lost, submission is read-only unless organizer allows anonymous edits.)
- **US-AI6:** As an anonymous invitee who converts to a signed-up user, I want my previous anonymous submission to be linked to my new account, so that I don't have to re-enter anything.

---

## Flow Variants

### Flow 1: Plan Creation

#### Happy Path
1. Organizer taps "Create a Plan" from home page.
2. AI chat opens with a prompt: "What are you planning?"
3. Organizer describes the plan via text or voice (e.g., "Brunch this Saturday or Sunday around noon, somewhere in the Mission").
4. AI extracts and displays structured fields: **Title** ("Brunch"), **Date Range** (Sat-Sun), **Time Window** (11am-1pm), **Area** ("Mission District").
5. Organizer reviews, optionally edits fields, and confirms.
6. AI asks follow-up if key info is missing (e.g., "Should invitees be able to suggest venues?").
7. Plan is created in **Draft** state. Shareable link is generated.
8. Organizer copies link and shares externally. Plan moves to **Collecting Availability**.

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
- Invitees who have SMS enabled receive a notification: "The plan details have been updated. Please review."
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
4. Plan page shows: plan title, description, date range, and a form to submit availability.

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
4. Free/busy blocks or full event details are displayed (depending on the user's access-level setting in their account).
5. Invitee reviews auto-detected availability, optionally adjusts, and submits.

#### Happy Path (Manual Entry)
1. Invitee (anonymous or signed-up without calendar) sees a time-slot grid for the plan's date range.
2. They tap/click to mark time blocks as "available" or "unavailable."
3. Alternatively, they can type free-text: "Free Saturday after 2pm, all day Sunday."
4. AI parses free-text into structured time blocks, displayed for confirmation.
5. Invitee confirms and submits.

#### Variant: Free-Text Availability via AI
- Invitee types: "I can do Saturday morning or Sunday evening."
- AI parses this as: Saturday 9am-12pm, Sunday 5pm-9pm (using reasonable defaults).
- Parsed blocks are shown visually on the grid for the invitee to confirm or adjust.
- If ambiguous (e.g., "morning" could be 8am-12pm or 9am-12pm), AI uses a generous interpretation and lets the invitee narrow it down.

#### Variant: Partial Availability
- Invitee is only available for part of the proposed window.
- They submit what they can. The system does not force full-range coverage.
- Organizer sees partial availability clearly marked.

#### Variant: "None of These Work"
- Invitee has no availability in the proposed date range.
- They can submit a "none of these work" response with an optional note (e.g., "I could do next weekend instead").
- This response is surfaced to the organizer with the note. AI may incorporate it into alternative suggestions.

#### Edge Cases
- **Calendar shows all-day "OOO" event:** System treats this as unavailable for the entire day unless the user manually overrides. Free/busy mode shows blocked; full-access mode shows the event title so the user can decide.
- **Calendar has tentative events:** Tentative events are shown as "possibly busy" with a visual distinction from confirmed busy blocks. User can override.
- **Calendar disconnect mid-flow:** If OAuth token expires or is revoked during the session, the system gracefully falls back to manual entry with a message: "Calendar connection lost. You can enter availability manually."
- **Invitee submits then wants to change:** Signed-up invitees can always edit. Anonymous invitees can edit only if (a) the organizer has allowed anonymous edits AND (b) they still have their browser session token.
- **Date range has no times specified:** If the organizer only specified dates (e.g., "this weekend") without times, the availability grid shows full-day blocks. Invitees can be more specific if they want.

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
2. Signed-up invitee Alex has connected their calendar, which shows a dentist appointment 1:30-2:30pm Saturday.
3. AI surfaces this: "Alex has a conflict Saturday 2-2:30pm. Would 3pm work instead?"
4. Organizer can accept the suggestion, override (proceed anyway), or ask Alex directly via the plan chat.

#### Scenario: Organizer Changes Date After Responses
1. Organizer shifts the date range from "this weekend" to "next weekend" via AI chat.
2. All existing availability submissions are marked as "outdated" (the dates they responded to no longer match).
3. Organizer sees a prompt: "Date range changed. Invitees' previous availability may no longer apply. Notify invitees?"
4. Opted-in invitees receive an SMS: "[Plan Name] dates have changed. Tap to update your availability: [link]."
5. Anonymous invitees are not notified. Organizer is prompted to re-share the link.

#### Edge Cases
- **Only one invitee has responded:** AI doesn't suggest a "best time" with only one response. Instead: "Waiting for more responses before suggesting a time. 1 of [N] invitees have responded."
- **All invitees say "none work":** AI surfaces this to the organizer: "No invitees are available in the current date range. Would you like to expand the dates?" Suggests a new range based on invitee notes.
- **Invitee updates availability after organizer has seen suggestions:** AI refreshes suggestions automatically. If the organizer has already accepted a suggestion, they are notified: "Jamie updated their availability. Saturday 2-5pm still works for 4/5 people."
- **Tie between two equally good time slots:** AI presents both options as chips and lets the organizer choose. Does not auto-select.

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
5. Organizer sees suggestions ranked by votes and can select the final location when confirming.

#### Variant: No Location Yet
1. Organizer creates a plan without specifying a location.
2. AI may prompt: "Want to let invitees suggest locations, or will you choose later?"
3. If organizer defers, location is shown as "TBD" on the plan page.
4. Organizer can add a location at any time before or during confirmation.

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
3. If confirmed, the anonymous submission is upgraded: display name is replaced with the account name, and the invitee gains edit rights, SMS eligibility, and dashboard visibility.
4. If declined (or if the submission was from someone else using the same device), the anonymous submission remains as-is and the new user starts fresh on this plan.

#### Edge Cases
- **Invitee clears cookies / uses different device:** Session token is lost. They cannot edit their previous submission (unless organizer allows anonymous edits, in which case they'd need to re-enter the same name — risky for impersonation). The safest path is to create an account.
- **Organizer toggles edit lock after submissions exist:** Existing anonymous submissions are retroactively locked. Invitees who return see read-only mode.
- **Malicious bulk submissions:** If many anonymous submissions arrive rapidly from the same IP, rate limiting applies (server-side). Organizer is warned and can purge suspicious entries.

---

### Flow 7: Notification & Reminder Pipeline

#### SMS Opt-In Flow
1. During account creation or from account settings, user provides a phone number.
2. Phone number is verified via a one-time code.
3. User opts into SMS notifications globally (can be toggled off later).
4. Per-plan opt-out is available: on any plan page, the invitee can toggle "Mute notifications for this plan."

#### Notification Types

| Trigger | Recipients | Channel | Content |
|---|---|---|---|
| Plan created | Organizer only | In-app | "Your plan [Title] is ready. Share the link!" |
| Availability submitted | Organizer | In-app (real-time) | "[Name] submitted their availability" |
| Plan details changed | Opted-in invitees | SMS | "[Plan] details updated. Review: [link]" |
| Plan confirmed | Opted-in invitees | SMS + in-app | "[Plan] is confirmed for [date/time] at [location]" |
| Reminder (24h before) | Opted-in invitees | SMS | "Reminder: [Plan] is tomorrow at [time]. [location]" |
| Reminder (2h before) | Opted-in invitees | SMS | "[Plan] starts in 2 hours at [location]" |
| Plan archived | None | System auto | No notification; plan moves to history |

#### Fallback for Non-SMS Invitees
- Organizer's plan page shows a "Notification Status" column:
  - Green checkmark: SMS enabled, will receive reminders.
  - Gray icon: No SMS. "Copy message" button available.
- "Copy message" generates a pre-written text: "Hey! [Plan] is confirmed for [date] at [location]. Don't forget!"
- Organizer pastes this into their external chat to notify non-SMS invitees manually.

#### Edge Cases
- **SMS delivery failure:** If Twilio reports a delivery failure, the invitee's status updates to "SMS failed." Organizer is informed and sees the "copy message" fallback.
- **User opts out of SMS after plan is confirmed:** No further SMS sent. Their status updates to reflect this. Organizer sees the change on the plan page.
- **Phone number change:** User updates phone number in account settings. Future SMS goes to the new number. No re-verification of old number needed.
- **Invitee receives SMS for a plan they don't recognize:** SMS includes "Reply STOP to unsubscribe from Catchup." Standard SMS opt-out compliance.

---

### Flow 8: Plan Lifecycle & State Machine

```
  [Draft]
    |
    | (Organizer shares link)
    v
  [Collecting Availability]
    |
    | (Organizer confirms time/location)
    v
  [Confirmed]
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

#### State: Collecting Availability
- Plan link is active. Invitees can access and submit.
- Organizer can still edit plan details (with "outdated" flagging on existing submissions if dates change).
- AI suggestions become active as responses come in.
- Plan can be moved back to Draft if the organizer wants to retract it (existing submissions are preserved but page shows "Plan paused by organizer").

#### State: Confirmed
- Time and location are locked.
- Availability form is disabled. Plan page shows confirmation details.
- SMS confirmations and reminders are scheduled.
- Organizer can still cancel (moves to a "Cancelled" terminal state with notifications sent).
- New visitors to the link see the confirmed plan details (read-only).

#### State: Completed/Archived
- Automatically triggered when the confirmed event datetime passes.
- Plan moves to the "History" section of the organizer's and invitees' dashboards.
- Page remains accessible via link (read-only summary).
- No notifications sent.

#### State: Cancelled (Terminal)
- Organizer explicitly cancels a confirmed plan.
- Opted-in invitees receive: "[Plan] has been cancelled by the organizer."
- Plan page shows "This plan has been cancelled."
- Plan moves to history with a "Cancelled" badge.

#### Edge Cases
- **Organizer deletes a plan:** All data is permanently removed. Link returns 404. Invitees who had it on their dashboard see it disappear. This is irreversible; confirmation dialog required.
- **Organizer abandons a plan (never confirms):** Plans in "Collecting Availability" for more than 14 days without organizer activity get a nudge: "Your plan [Title] is still waiting. Confirm, update, or archive it?"
- **Multiple plans by same organizer for same group:** Each plan is independent. No cross-plan logic. Organizer manages via their dashboard.

---

## Functional Requirements

### Plan Creation & Sharing (Priority: Critical)

- **Create Plan:** Organizer initiates a new plan by describing it to the AI via voice or text. Plan details (title, description, timing, etc.) are extracted automatically. Manual editing is available but the AI-driven flow is the primary path.
- **Share Link:** Organizer receives a plan-specific, shareable link to circulate in any external group chat or channel (WhatsApp, Discord, Slack, etc.).
- **Plan States:** Plans have clear statuses: Draft -> Collecting Availability -> Confirmed -> Completed/Archived. Additionally: Cancelled (terminal state).
- **Plan Settings:** Organizer can configure: location suggestions (on/off), anonymous edit lock (on/off), and visibility of other invitees' responses (on/off, future consideration).

### AI Chat & Suggestions (Priority: Critical)

- **AI Chat Agent:** Floating AI chat available on all plan pages for the organizer. Accepts text, voice, and image input.
- **Proactive Suggestions:** AI surfaces time, venue, and next step suggestions as actionable "chips" or "pills" at appropriate moments (especially when conflicts arise or when enough responses are collected).
- **Calendar Conflicts:** Surface scheduling conflicts detected from connected calendars (e.g., an invitee has a conflicting event) and suggest alternative times.
- **Response Conflicts:** Identify mismatches across invitee-submitted availability and suggest times that maximize attendance.
- **Smart Defaults:** When parsing ambiguous input (e.g., "morning"), AI uses generous but reasonable defaults and presents them for confirmation.
- **Suggestion Thresholds:** AI waits for at least 2 availability responses before suggesting optimal times. With only 1 response, it reports status only.

### Invitee Interaction (Priority: Critical)

- **Availability Page:** Invitees can respond with availability (calendar connect or manual entry), display their full name, and (optionally) suggest or vote on locations if enabled.
- **Manual Entry Options:** Time-slot grid for tapping, or free-text input parsed by AI.
- **Non-Account Flows:** Allow submissions without requiring account creation; only minimal info (display name) required. Session token tracks the anonymous user.
- **"None Work" Option:** Invitees can indicate that no proposed times work, with an optional free-text note for alternatives.
- **SMS Reminder Signup:** Clear CTA for invitees to create an account and provide phone number for SMS reminders and updates.
- **Submission Editing:** Signed-up invitees can always edit. Anonymous invitees can edit based on organizer settings and session token validity.

### Notification System (Priority: High)

- **SMS Notifications:** Plans and reminders are sent via SMS where invitees have opted in. Includes confirmation, 24h reminder, and 2h reminder.
- **Fallback:** Manual "copy message" button for non-SMS invitees, generating a pre-written notification for the organizer to paste externally.
- **Opt-Out Compliance:** Standard SMS opt-out (STOP keyword) supported.
- **Delivery Tracking:** SMS delivery status tracked and surfaced to organizer (delivered, failed).

### Plan Review & Confirmation (Priority: High)

- **Organizer Controls:** Organizer can see all responses, select timing/location, and confirm plan based on who is available -- no requirement that all respond.
- **Reminder Status:** Display which invitees have received reminders on the plan page itself, with a 1-click "copy message" button for manual followup. A summary card on the home page surfaces plans needing attention.
- **Location Inputs:** Organizer may allow location suggestions from invitees (with upvoting) and review before finalizing.
- **Cancellation:** Organizer can cancel a confirmed plan, triggering notifications to opted-in invitees.

### Calendar & Contact Integration (Priority: Medium)

- **Calendar Sync (Optional):** Invitee/organizer can (optionally) connect Google Calendar to share and check availability, but not required for MVP flow to proceed. Users choose between free/busy access (read-only) or full calendar read access via a visible toggle in account settings (set once, applies to all plans).
- **Contacts Integration:** Lightweight in-app contact management included in MVP. Native contacts syncing is not in scope.

### Security & Privacy (Priority: High)

- **Trust Controls:** Organizer can specify if non-account invitees can revisit and edit their submission (to prevent abuse).
- **Anonymous Deduplication:** Anonymous submissions are tied to session tokens + display names. Duplicate names are disambiguated for the organizer.
- **Rate Limiting:** Server-side rate limiting on anonymous submissions to prevent spam/abuse.
- **Data Privacy:** All data collection explicit; no data sharing with third parties; privacy by design.
- **Plan Deletion:** Organizer can permanently delete a plan and all associated data.

### Plan Archival (Priority: High)

- **Auto-Archival:** Completed plans are automatically moved to history; no manual archiving required.
- **Stale Plan Nudge:** Plans in "Collecting Availability" for 14+ days without activity trigger a nudge to the organizer.

---

## Persona-Based Scenario Walkthroughs

### Scenario A: Alex (Organizer) Plans a Game Night

**Context:** Alex wants to host a board game night this weekend. He has 6 friends he wants to invite, spread across two group chats.

1. Alex opens Catchup, taps "Create a Plan."
2. Types into AI chat: "Board game night at my place, either Friday or Saturday evening."
3. AI extracts: Title: "Board Game Night", Location: "Alex's place" (fixed), Dates: Friday-Saturday, Time: 6pm-11pm.
4. Alex reviews, changes time to 7pm-midnight, confirms. Location suggestions: OFF (it's at his place).
5. Anonymous edits: ON (he trusts his friends, and some may not have accounts).
6. Link is generated. Alex copies it and pastes into Group Chat A (iMessage) and Group Chat B (Discord).
7. **Priya** (signed-up, calendar connected) taps the link. Her calendar shows she's free Friday after 8pm and all Saturday. She submits.
8. **Jamie** (anonymous) taps the link, enters name "Jamie", marks Saturday 7pm-midnight as available. Sees "Want reminders? Create an account" -- skips it.
9. **Sophie** (signed-up, no calendar) taps the link, manually enters: "Free both nights."
10. **Marcus** (anonymous) taps the link, enters "Marcus", selects "None of these work" with note: "Out of town this weekend, have fun though!"
11. **Two more friends** submit availability for Saturday.
12. Alex checks the plan page. AI shows: "Saturday 7pm-midnight works for 5 of 6 respondents. Marcus can't make it." Chip: "Confirm Saturday 7pm?"
13. Alex taps the chip to confirm. Plan moves to Confirmed.
14. Priya and Sophie (SMS-opted-in) receive confirmation texts. Jamie and Marcus don't (no account). Alex sees their gray icons and taps "Copy message" to paste into the group chats.
15. Saturday rolls around. Priya and Sophie get a 2h reminder SMS. The game night happens. Plan auto-archives Sunday.

### Scenario B: Priya (Organizer) Coordinates a Hiking Trip

**Context:** Priya leads an outdoor activities group of ~15 people. She wants to organize a weekend hike and let the group decide the trail.

1. Priya taps "Create a Plan." Speaks into voice input: "Weekend group hike, probably Saturday or Sunday morning. Let people suggest trails."
2. AI extracts: Title: "Group Hike", Dates: Saturday-Sunday, Time: 7am-12pm, Location: TBD. Location suggestions: ON.
3. Priya confirms. Sets anonymous edits to OFF (large group, wants to prevent mischief).
4. Shares link in the hiking club's WhatsApp group.
5. Responses trickle in over 2 days. 10 people respond.
   - 3 connect calendars (signed-up users), 7 enter manually (mix of anonymous and signed-up).
   - 4 suggest trails: "Mission Peak", "Muir Woods", "Lands End", "Mt. Tam."
   - "Muir Woods" gets 5 upvotes, "Lands End" gets 3.
6. AI suggests: "Sunday 8am-12pm works for 9 of 10 respondents. Muir Woods is the most popular trail."
7. One invitee (anonymous, "Chris") tries to return and change their availability but can't -- anonymous edits are locked. Chris sees: "Your submission is locked. Create an account to manage your responses, or contact the organizer."
8. Priya confirms Sunday 8am at Muir Woods. Opted-in members get SMS. For the rest, Priya copies the message and posts it in WhatsApp.
9. Friday evening, 24h reminder goes out via SMS. Sunday morning, 2h reminder.
10. After the hike, plan auto-archives.

### Scenario C: Jamie (Anonymous Invitee) Gets Converted

**Context:** Jamie receives a Catchup link from a friend for a dinner plan. Jamie has never used Catchup.

1. Jamie taps the link in iMessage. Lands on the plan page: "Friday Night Dinner" -- collecting availability for Friday-Saturday, location TBD (suggestions enabled).
2. Sees a clean form: "Enter your name", time-slot grid, and "Suggest a place" field.
3. Types name: "Jamie K." Taps Friday 7-10pm as available. Suggests "Burma Superstar."
4. Submits. Sees confirmation: "Got it, Jamie K.! The organizer will confirm details soon."
5. Sees nudge: "Want a reminder when this plan is confirmed? Create a free account."
6. Jamie thinks this is useful and taps "Sign up." Creates account with email and phone number.
7. System detects session token: "We found your submission for 'Friday Night Dinner.' Link it to your account?" Jamie confirms.
8. Jamie's submission is now tied to their account. They can edit it anytime, see the plan on their dashboard, and will receive SMS reminders.
9. The plan is confirmed for Friday 8pm at Burma Superstar. Jamie gets an SMS: "Friday Night Dinner is confirmed! Friday 8pm at Burma Superstar."
10. Jamie's dashboard now shows the plan. Thursday evening, a 24h SMS reminder arrives.

### Scenario D: Handling a Contentious Plan

**Context:** Sophie (organizer) is planning a birthday dinner. She's invited 8 friends but schedules are tight.

1. Sophie creates: "My Birthday Dinner! Trying for next Saturday at 7pm. Open to other times if needed."
2. AI extracts: Title: "Sophie's Birthday Dinner", Date: Saturday, Time: 7pm, Location: TBD (suggestions on).
3. She shares the link. Responses come in:
   - 3 people are free Saturday 7pm.
   - 2 people can only do Saturday after 8:30pm (they have a prior commitment until 8).
   - 2 people can only do Friday evening.
   - 1 person says "none work" (traveling).
4. AI analyzes: "No single time works for everyone. Options:
   - Saturday 8:30pm: 5 of 8 (Alex, Priya, Jamie, and 2 others)
   - Saturday 7pm: 3 of 8
   - Friday 7pm: 2 of 8 (plus potentially the 3 Saturday-7pm folks -- want me to check?)"
5. Sophie asks AI: "What if we do Saturday at 8:30? Who are we missing?"
6. AI responds: "Saturday 8:30pm works for Alex, Priya, Jamie, Marcus, and Lee (5/8). Missing: Sophie B. and Jordan (only free Friday), and Taylor (traveling). This is your best option for max attendance."
7. Sophie decides 5 out of 8 is good enough. She picks a restaurant from the suggestions (Che Fico, 4 upvotes) and confirms Saturday 8:30pm.
8. Notifications go out. Sophie uses "copy message" for 2 invitees without SMS.

---

## User Experience

### Entry Point & First-Time User Experience

- Users discover Catchup through direct link sharing (most common -- invitee-first viral loop), social media, or web search.
- Landing page features cheery, lightweight, graph-paper aesthetic.
- Clear CTA to "Create a Plan." Optionally, demo/tutorial bubbles highlight how simple sharing works.
- First-time creators are nudged to describe their event idea to the AI via voice or text. Plan details are populated automatically from the conversation.
- Minimal onboarding required for invitees; they access a unique plan link and can participate immediately.
- Account creation is presented as optional but valuable (calendar, SMS, dashboard).

### Core Experience

**Step 1:** Organizer lands on Catchup, selects "Create a Plan."
- AI-first creation: user is nudged to describe their event idea via voice or text to the AI chat. Plan details (title, description, timing, etc.) are extracted and populated automatically as the conversation progresses. Manual editing of fields is available but not the primary flow.
- Organizer configures plan settings: location suggestions (on/off), anonymous edit lock.
- Upon submission, plan link is generated instantly.

**Step 2:** Organizer shares generated link in their preferred group chat/channel.
- No requirement for invitees to install or sign up.
- Organizer sees plan status on the home page and can preview what invitees will see from the plan page.

**Step 3:** Invitees access plan availability page.
- Prompt to submit name, indicate available times (manual entry or calendar connect), and (if enabled) suggest or vote on locations.
- Submissions accepted with or without calendar connection. Option to sign up for SMS reminders presented as a nudge.
- "None of these work" option available with free-text note.

**Step 4:** As invitees reply, organizer sees real-time responses on the plan page.
- Floating AI chat agent visible at all times for organizer -- can answer questions, surface timeline and location recommendations, highlight conflicts.
- Suggestion "pills" below the AI chat quickly recommend actions, e.g., "Choose best time," "Send reminders," "Suggest alternate venue."
- AI waits for sufficient responses before making suggestions.

**Step 5:** Organizer reviews responses and finalizes plan.
- Organizer decides whether to proceed with a subset of available invitees (no requirement to wait for all to reply).
- For missing responses without SMS enabled, organizer sees visual indicator and 1-click "copy message" button for manual reminders.

**Step 6:** Confirmation summary is generated and sent via SMS (if opted-in) to all confirmed attendees.
- Plan status is updated to Confirmed. Invitees who created accounts can return to plan page for details and see automatic reminders.

**Step 7:** Plan auto-archives as "Completed" past the event date.
- Organizer and invitees can access plan history, but no need to manually archive.

### UI/UX Highlights

- Graph paper, lightweight, cheery visual style.
- Floating AI chat always visible, never blocks primary actions.
- High-contrast large touch targets for mobile.
- Progressive fallback: SMS, then manual "copy to clipboard" for invites/reminders.
- State transitions (drafting, collecting, confirmed, completed, cancelled) clearly marked.
- No confusing onboarding flows -- invitees have one-step entry, organizers never feel "blocked."
- Accessibility: All icons/buttons have text labels, color contrast at least AA, voice input supported throughout for accessibility.

---

## Narrative

Sophie is a product designer with a packed schedule and a friend group spread across multiple cities. Every time they want to gather for a weekend brunch, the coordination process in the group chat drags on for days -- half the group misses messages, suggested times overlap with undisclosed commitments, and location debates derail progress. Sophie tries to wrangle everyone with calendar polls, but responses trickle in, and by the time consensus forms, enthusiasm fades.

With Catchup, Sophie creates a plan in seconds, speaking her brunch idea into the AI chat and letting the app transcribe her vision. She shares the Catchup link in the group chat, and friends respond instantly -- some connect their Google Calendars, others simply type out their names and times. The AI assistant flags an overlap conflict and proposes an alternative that works for the majority while suggesting a popular cafe nearby based on received feedback. For friends who haven't signed up, Sophie sees who will get SMS reminders and uses the one-click message copy to nudge everyone else.

Within a day, the plan is nailed down. Catchup sends confirmations to all attendees, and as the event rolls around, SMS reminders go out, ensuring no one forgets. After brunch, the plan quietly moves to Sophie's archived history, ready for her next delightful, AI-powered get-together. Sophie no longer dreads group plan logistics -- she simply lets Catchup do the heavy lifting, making social connection frictionless and fun.

---

## Success Metrics

For the MVP, success is about validating the core concept rather than hitting growth targets. Key signals to watch:

### Validation Signals
- Are plans actually reaching "confirmed" status, or do they stall out?
- How long does it take an organizer to go from "create" to "share link"? (Target: <60 seconds)
- Do invitees who receive a link actually submit availability? (Target: >50% response rate)
- Are organizers coming back to create a second plan? (Target: >30% repeat usage)
- What % of anonymous invitees convert to signed-up users? (Track, no target for MVP)

### Lightweight Tracking
- Number of plans created and their status transitions (funnel: Draft -> Collecting -> Confirmed -> Completed)
- Availability responses submitted (manual vs. calendar) and time to first response
- SMS reminder sign-ups and delivery rates (delivered, failed, opted-out)
- AI chat usage (suggestion chip clicks, voice/image input frequency)
- Anonymous-to-authenticated conversion rate
- Plan abandonment rate (plans that never reach Confirmed)

---

## Technical Considerations

### Technical Needs

- **APIs:** Central event/plan API, AI chat/voice/image handling endpoints, SMS notification service.
- **Front-End:** Mobile-first responsive web UI; graph paper and lightweight theme; real-time updates for plan state and invitee responses (WebSocket or SSE).
- **Back-End:** Event state machine (draft/collecting/confirmed/completed/cancelled), user authentication (minimal/optional for invitees), plan/response storage, session token management for anonymous users.
- **AI/LLM:** AI assistant for chat, conflict detection, availability optimization, transcription (voice/image). Structured output for extracting plan fields from natural language.
- **Notification Pipeline:** SMS notification service with opt-in/opt-out logic, delivery tracking, and scheduled reminders (24h and 2h before event).

### Integration Points

- Google Calendar integration (optional, OAuth; user configures free/busy vs. full access once in account settings)
- SMS gateway (e.g., Twilio or equivalent) with STOP keyword compliance
- Basic image and voice input processing (speech-to-text, OCR/vision)
- Lightweight in-app contacts; no native contacts syncing or messaging app integration (sharing handled via link)

### Data Storage & Privacy

- Minimal, explicit data collection: Plan data, invitee names, optional calendar/auth info, SMS numbers.
- Anonymous invitee submissions stored with session tokens; plan page maps names to responses for the organizer.
- Opt-in for any personally identifiable info (e.g., SMS or calendar connect).
- All non-essential data anonymized after plan completion/archival.
- Plan deletion permanently removes all associated data.
- Compliance: GDPR and relevant privacy standards (privacy by design).

### Scalability & Performance

- Designed for rapid spikes during social hours/weekends (estimate support for 100,000 MAU initially).
- Event and notification processing must support bursty traffic without delay.
- Fast, real-time updates for plan pages and AI agent.
- Rate limiting on anonymous submissions to prevent abuse.

### Potential Challenges

- Abuse prevention for non-account submissions (organizer controls for edit resubmission, rate limiting, bulk submission warnings)
- SMS deliverability and opt-out compliance
- Parsing diverse, unstructured user input (voice/image) accurately; handling low-confidence extractions gracefully
- Maintaining lightweight experience without onboarding friction
- Ensuring AI suggestions remain relevant, not generic
- Session token management for anonymous users across devices/browsers
- Anonymous identity conflicts (duplicate names)
- Graceful degradation when calendar OAuth tokens expire

---

## Milestones & Sequencing

### Project Estimate

- **MVP:** Medium (2-4 weeks)
- **Target:** Launch core product by end of Month 1; SMS notification iteration and AI suggestion expansion by Month 2-3.

### Team Size & Composition

Lean/Small Team (3-4 total people):

- 1 Product manager (also covers QA)
- 1 Full-stack engineer
- 1 Front-end/mobile-focused developer
- 1 UX/UI designer (part-time, can be moonlighting/fractional)
- Stretch: 1 AI/ML consultant part-time (if needed for voice/image input)

### Suggested Phases

#### 1. Core MVP Build (2 weeks)

- **Deliverables:** Event plan creation flow (AI chat with text/voice/image), shareable plan links, invitee response handling (manual + calendar), anonymous submission with session tokens, home page with plan cards, plan detail page with availability grid, plan settings (location suggestions, anonymous edit lock), basic SMS notification integration.
- **Responsible:** Product/engineering, design (fractional for UI prep).
- **Dependencies:** SMS gateway service, calendar integration setup.

#### 2. Expand AI Suggestions & Conflict Handling (1 week)

- **Deliverables:** Expanded suggestion chips, proactive conflict handling, calendar conflict detection, attendance-maximizing time suggestions, "none of these work" flow.
- **Responsible:** Engineers.
- **Dependencies:** Calendar integration, robust parsing.

#### 3. Notification & Reminder Polish (1 week)

- **Deliverables:** Complete SMS pipeline (confirmation, 24h, 2h reminders), host interface for reminder status/copy-to-clipboard, invitee opt-in/opt-out logic, delivery tracking, anonymous-to-authenticated conversion flow.
- **Responsible:** Full-stack, design for icons/UI feedback.
- **Dependencies:** SMS testing, edge case flows.

#### 4. Growth & Feedback Loops (Ongoing, Week 4 onward)

- **Deliverables:** Plan auto-archival, stale plan nudges, SMS/invitee conversion tracking, user feedback and basic NPS post-event, location suggestion voting, plan cancellation flow.
- **Responsible:** Product/engineering.
- **Dependencies:** None, parallelizable.
