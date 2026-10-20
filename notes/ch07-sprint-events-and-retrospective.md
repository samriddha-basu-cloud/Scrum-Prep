# Chapter 7 — The Sprint: Planning, Daily Scrum, Review and Retrospective
Syllabus Unit 7 (3 hrs), part 1: iterations/sprints overview; iteration planning meeting and guidelines; development; testing; daily standup meetings; closing: sprint, release and product retrospectives. (Part 2, progress tracking charts, is in [Chapter 8](ch08-progress-tracking-burndown-burnup-cfd.md).)

> **Source key:** 📘 = faculty deck pp 3, 6–7, 22–24, 45 and answer keys. 📗 = Scrum Guide 2020, Derby & Larsen "Agile Retrospectives" (2006), textbooks.
> ⭐⭐⭐ **Important Topic 2** (Scrum cycle: sprint planning, daily scrum, sprint review) and ⭐⭐⭐ **Important Topic 3** (retrospective, all four stages). Also Presentation Topics 7 and 8.

---

## 1. ⭐⭐⭐ The Sprint (iteration)
- A **fixed-length timebox** of **1–4 weeks** (📘 "2 weeks to 30 days") in which a Done, usable increment is created. A new sprint starts immediately after the previous one ends.
- **Container event:** sprint planning, daily scrums, development work, sprint review and retrospective all happen inside it.
- **Rules (📗/📘):** no changes that endanger the sprint goal; quality does not decrease; product backlog is refined as needed; scope may be clarified/renegotiated with the PO as more is learned; "**No changes in duration or goal**" (📘 Scrum cycle graphic); the sprint ends when the timebox **expires** (📘); only the **PO can cancel** a sprint (📘).
- 📘 "How Scrum teams divide up their projects chronologically" → **Sprint**.

### ⭐⭐⭐ Sprint cycle timeline (2-week sprint example)
```
 Day 1            Days 1–10 (every day)                                  Day 10 (last day)
 ┌──────────┐    ┌───────────────────────────────────────────────┐     ┌──────────┐  ┌──────────────┐
 │ SPRINT   │───►│ DEVELOPMENT + TESTING  ◄── Daily Scrum 15 min │────►│ SPRINT   │─►│ SPRINT       │──► next
 │ PLANNING │    │ Backlog refinement (≈10% capacity)            │     │ REVIEW   │  │RETROSPECTIVE │    sprint
 │ ≤4 h     │    │ Task board + burndown updated daily           │     │ ≤2 h     │  │ ≤1.5 h       │
 └──────────┘    └───────────────────────────────────────────────┘     └──────────┘  └──────────────┘
   WHAT + HOW                                                            Inspect the     Inspect the
   Sprint goal +                                                         PRODUCT         PROCESS
   sprint backlog                                                        (increment)     (team)
```
📗 Timeboxes scale with sprint length: for a 1-month sprint — planning 8 h, review 4 h, retro 3 h; for 2 weeks — about half.

📘 Match key — **when** each event happens: Sprint → throughout the project; Sprint Planning → beginning of the sprint; Daily Scrum → every day; Sprint Review → end of the sprint; Retrospective → after the sprint review.

---

## 2. ⭐⭐⭐ Sprint Planning (iteration planning meeting)
📘 Who-am-I: "I'm a timeboxed meeting where the team comes up with a Sprint Goal, decides which items they'll deliver, and decomposes them into tasks." Answer key: "During Sprint **Planning** the team chooses what items to include in the Sprint and builds a plan."

| | Part 1 — WHAT (📘 "first part") | Part 2 — HOW (📘 "second part") |
|---|---|---|
| Question | What can be done this sprint? | How will the chosen work get done? |
| Led by | PO presents top-ordered backlog items and proposed objective | Development team |
| Activities | Discuss items, check capacity and past velocity, select items, craft **Sprint Goal** | **Decompose** items into tasks (≤ 1 day each), estimate tasks in hours, identify dependencies |
| Output | Selected backlog items + Sprint Goal | **Sprint Backlog** (items + plan/tasks) |

📗 Scrum Guide 2020 adds a "Why" topic (why is this sprint valuable?) — so: **Why, What, How**.
- **Sprint Goal:** "an objective crafted by the team when they plan the sprint" (📘). Example: "Customers can pay for their order using UPI."
- **Inputs:** product backlog, latest increment, team capacity (leave, holidays), past velocity, Definition of Done.
- **Iteration planning guidelines (📗):** come with a refined, estimated backlog (Definition of Ready); plan to capacity, not hope (use yesterday's weather = last velocity); include testing in every story; leave **slack** (📘 XP: "optional or minor items added to give breathing room"); team commits, not the PO or SM; keep tasks small; don't assign names upfront — team pulls work.

**Example (college fest, 1-week sprint):** Goal: "Lock 3 sponsors and launch the registration page." Items: sponsorship deck (5 pts), contact 15 companies (8 pts), registration Google form + website page (5 pts). Tasks: draft deck, design, review with PO, send emails, follow-up calls, build page, test form.

---

## 3. Development and testing during the sprint (📗; 📘 XP pp 32–35)
- Team works on sprint backlog, swarming on the highest-priority story first ("stop starting, start finishing").
- **Testing within the sprint**, not after: unit tests, **TDD** ("writing unit tests **first**", 📘), **continuous integration**, automated **10-minute build** (📘), pair programming, **acceptance tests** written by the team (📘).
- **Definition of Done** checklist applied to every item (coded, reviewed, tested, integrated, documented, PO-accepted).
- **Backlog refinement** for future sprints happens in parallel.
- Task board and burndown updated daily (information radiators).

---

## 4. ⭐⭐⭐ Daily Scrum (Daily Standup)
📘 Who-am-I: "I'm a 15-minute timeboxed meeting held every day, where team members create a plan for the next 24 hours." 📘 p3: "A daily standup is a good starting point!"

**The three questions (📘 p3)**
1. What have I done **yesterday** to move towards the goal?
2. What will I do **today** to help meet the goal?
3. Are there any **impediments** in my way?

- 📘 "The three Daily Scrum questions give the team complete **transparency** into what each team member is doing."
- 📘 "Everyone is part of making important decisions; everyone is part of the planning process."
- 📘 "A daily **standup** can be valuable, but it really works best if everyone on the team has the right **mindset**."
- **Who:** the developers (required); SM ensures it happens and is short; PO optional. Same time, same place, standing in front of the task board.

### 📘 Daily standup do's and don'ts (answer key)
| ✅ Do | ❌ Don't |
|---|---|
| If you have a task, you must attend | Side conversations |
| Only those who have tasks can talk | Discuss issues in the meeting |
| Speak to the team, not the coach or Scrum Master | Solve problems in the meeting (take it offline / "parking lot") |
| Create a new sticky note for each new task that is started | Turn it into a status report to a manager |

### 📘 Valid vs invalid standup statements (answer key)
| Statement | Verdict | Why |
|---|---|---|
| "Santosh from accounting did not approve my trip to see the users" | Valid | Impediment |
| "I just finished adding the supercharger" | Valid | Yesterday's work |
| "I think we should add a turbo booster" | **Invalid** | New idea/scope → take to PO/backlog |
| "I finished testing the launcher" | Valid | Progress |
| "My PC still needs more RAM" | Valid | Impediment |
| "Vaishali from marketing won't go on a date with me" | **Invalid** | Personal, irrelevant |
| "I am still stuck trying to attach the nose cone" | Valid | Impediment |
| "If you thread it backwards, the nose cone should go on easily" | **Invalid** | Problem-solving → after the meeting |

**Benefits:** daily inspect-and-adapt, early impediment detection, transparency, team alignment, fewer other meetings, commitment and peer accountability.
**Common anti-patterns:** status report to SM, running over 15 min, problem-solving, people not attending, sitting down at desks.

---

## 5. ⭐⭐⭐ Sprint Review (iteration review / demo)
📘 Who-am-I: "I'm held at the end of the Sprint to do an inspection of each item that the team built with users and stakeholders who were invited." 📘 "What teams do with working software at the Sprint Review" → **Demo**; "The Scrum team always demos **working** software."
- **Purpose:** inspect the **increment** (product) and **adapt the product backlog**. It is a working session, not just a presentation.
- **Attendees:** Scrum team + key stakeholders invited by the PO.
- **Flow (📗):**
  1. PO states what was planned and what is "Done" / not done.
  2. **Development team demonstrates** the working increment (📘) and answers questions.
  3. Stakeholders give feedback.
  4. **PO accepts or requests changes** for each item (📘).
  5. PO discusses backlog, likely release dates (based on velocity), market changes.
  6. Group collaborates on what to do next → **revised product backlog**.
- Only **Done** work is demoed. Undone work goes back to the backlog.
- 📘 MTF example: "I just demoed a new feature to one of our video-streaming users. She said it won't actually fix the problem" → fixed by **user stories** (understand the user's real need). The review is where this feedback surfaces early.

---

## 6. ⭐⭐⭐ Sprint Retrospective — "Agile's own Kaizen"
📘 Who-am-I: "I'm how the team inspects itself, where they look for the things that went well, and make a plan to improve things that didn't." 📘 MTF: "A retrospective is a meeting in which everyone talks about how the last part of the project went, and what lessons can be learned" — it fixes the problem "We always seem to run into the same kind of problems over and over again with every release."
- Implements **Agile Principle 12**. Held **after the sprint review**, before the next planning. Attendees: whole Scrum team; SM facilitates.
- Focus is the **process**: people, interactions, tools, Definition of Done.

### 6.1 ⭐⭐⭐ The stages (Esther Derby & Diana Larsen) — 📘 p22
📘 Answer key: "Derby and Larsen's basic progression for a retrospective is: **set the stage, gather data, generate insights, decide what to do**." These are the **four core stages**; the faculty slide adds a fifth closing step.
```
 ┌───────────────┐   ┌───────────────┐   ┌───────────────────┐   ┌───────────────────┐   ┌───────────────┐
 │ 1. SET THE    │──►│ 2. GATHER     │──►│ 3. GENERATE       │──►│ 4. DECIDE WHAT    │──►│ 5. CLOSE THE  │
 │    STAGE      │   │    DATA       │   │    INSIGHTS       │   │    TO DO          │   │ RETROSPECTIVE │
 └───────────────┘   └───────────────┘   └───────────────────┘   └───────────────────┘   └───────────────┘
   OPENING step         ◄─────────── PROBLEM-SOLVING steps ───────────►                      CLOSING step
```

| Stage | Purpose | 📘 Activities (p22) | Example output |
|---|---|---|---|
| **1. Set the stage** | Welcome, state goal and timebox, create safety, get everyone to speak early | **Check-ins** (one word on how you feel), **ESVP**, **Focus on / Focus off** working agreements | Agreed goal: "Why did testing slip?" |
| **2. Gather data** | Build a shared picture of facts and feelings of the sprint | **Timeline** of events, **color-code dots** (green = good day, red = bad), metrics (burndown, defects) | Timeline shows test env down Days 4–6 |
| **3. Generate insights** | Ask "why?"; find patterns and root causes | **Fishbone (Ishikawa) diagram** (📘: "used to determine the root cause"), **prioritize with dots**, 5 Whys | Root cause: no shared test environment |
| **4. Decide what to do** | Pick 1–3 concrete, owned actions (SMART) for next sprint | **Stop doing / Start doing / Keep doing** | Start: book test server from Day 1 (owner: Ravi) |
| **5. Close the retrospective** | Summarise actions, appreciate people, improve the retro itself | Appreciations, "plus/delta", return on time invested (ROTI) | Action items put on next sprint backlog/task board |

### 6.2 Activities in detail
- **ESVP (📘):** anonymous poll of how people feel about being there: **E**xplorers (eager to discover new ideas), **S**hoppers (will look and take one useful thing), **V**acationers (📘 answer → **Vacationers**; glad to be away from work), **P**risoners (forced to attend). Shows engagement level; facilitator adapts.
- **Focus on / Focus off (📘 p23):** working agreements — Inquiry rather than Advocacy; Dialogue rather than Debate; Conversation rather than Argument; Understanding rather than Defending.
- **Timeline:** team posts sticky notes of key events along the sprint's days.
- **Color-code dots:** members mark how they felt about each event/day.
- **Fishbone:** effect (problem) at the head; causes grouped under bones (People, Process, Tools, Environment…).
```
   People ──────┐      Process ─────┐
   (new tester) │      (no DoD for  │
                ▼       tests)      ▼
 ───────────────────────────────────────────► TESTING SLIPPED
                ▲                   ▲
   Tools ───────┘      Environment ─┘
   (no automation)     (test server down)
```
- **Prioritize with dots:** each person gets 3 dots to vote for the most important insight.
- **Stop / Start / Keep (📘):**

| Stop doing | Start doing | Keep doing |
|---|---|---|
| Accepting stories without acceptance criteria | Writing tests along with code | Daily 15-min stand-up at 9:30 |
| Late-night commits before review | Booking test server on Day 1 | Pair programming on complex stories |

📘 MTF (classify retro comments): "I really like Planning Poker, it helps the team figure out a design approach efficiently" → **Continue (keep) doing**; "We should commit to more story points than we delivered last sprint" → **Stop doing**; "I (PO) could wait to talk to the stakeholders about our goals until after we've all agreed on what goes in the sprint backlog" (a new practice proposed) → **Start doing**; "Programmers shouldn't care about velocity, that's the SM's job" → **Not constructive**.

- **Other formats (📗):** Mad-Sad-Glad; Start-Stop-Continue; 4Ls (Liked, Learned, Lacked, Longed for); Sailboat (wind = helps, anchor = slows, rocks = risks, island = goal).

### 6.3 Kaizen connection (📘 p44–45)
- **KAIZEN = Retrospectives in Agile.** Kaizen means "continuous improvement"; more philosophy than tool; challenges the status quo. Benefits: less waste, people satisfaction, productivity gain, continuous improvement.
- **PDCA vs PDEL:** Kaizen follows **Plan-Do-Check-Act**; Agile follows **Plan-Develop-Evaluate-Learn**.
- **Agile's own Kaizen layers (📘):** pair programming (seconds/minutes) → daily stand-up (day) → demo, review, retrospective (sprint) → product release (release).
```
 Feedback loop size:  Pair programming  ⊂  Daily stand-up  ⊂  Sprint review/retro  ⊂  Release
                      (seconds)            (24 hours)          (1–4 weeks)              (months)
```

### 6.4 Problem detection during retros (📘 p24, Deming)
| Common-cause variation | Special-cause variation |
|---|---|
| Average day-to-day differences due to normal factors | Greater differences due to special or new factors |
| Fix the **system/process** | Fix the specific **event** |
**Mistake 1:** treating a common cause as special. **Mistake 2:** treating a special cause as common.
📘 Examples: "I'm *again* waiting for Sameer" → common; "the paint shop is running a day behind *again*" → common; "our safety inspector caught malaria on vacation" → special; "estimates were on average 5% too high" → common.

### 6.5 Release and product retrospectives (syllabus "closing") 📗
- **Sprint retrospective:** every sprint; process of the team.
- **Release retrospective:** at end of a release; wider view across several sprints, includes stakeholders.
- **Product/project retrospective (post-mortem/lessons learned):** at product end or major milestone; organisational learning, archived lessons.
- **Closing a sprint:** review + retro + update metrics + release decision. **Closing a release:** deploy, release notes, user training, release retro. **Closing the project:** final acceptance, handover to operations, release resources, celebrate, archive lessons.

### 6.6 Benefits of retrospectives
Continuous improvement, team ownership, early fixing of recurring problems, psychological safety, better morale, faster learning, prevents "same problems every release".

---

## 7. Q&A — Chapter 7

**Q1. ⭐⭐⭐ (10 marks) Explain the Scrum sprint cycle: sprint planning, daily scrum and sprint review, with a diagram.** 
Draw Scrum cycle (Ch 3 §4 or §1 timeline). Planning: Part 1 what/Part 2 how, sprint goal, sprint backlog, inputs/outputs. Daily scrum: 15 min, 3 questions, do's/don'ts. Review: demo working increment, PO accepts, backlog adapted. Mention retrospective and timeboxes. Example sprint.

**Q2. ⭐⭐⭐ (10 marks) Explain the stages of a sprint retrospective with activities.** 
Diagram of the four stages (+ close). Table with purpose, 📘 activities (check-in, ESVP, timeline, dots, fishbone, stop/start/keep). Example. Link to Kaizen/PDEL and Principle 12.

**Q3. (5 marks) What are the three questions of a daily scrum? State do's and don'ts.** 
§4.

**Q4. (5 marks) Differentiate sprint review and sprint retrospective.** 
| Sprint review | Sprint retrospective |
|---|---|
| Inspects the **product** (increment) | Inspects the **process** (team) |
| Stakeholders invited | Scrum team only |
| Output: revised product backlog | Output: improvement actions |
| PO accepts/rejects | SM facilitates |
| Held at end of sprint | Held after the review |

**Q5. (5 marks) Explain the two parts of sprint planning.** 
§2 table.

**Q6. (5 marks) What is ESVP?** 
Explorers, Shoppers, Vacationers, Prisoners; anonymous engagement check in "set the stage".

**Q7. (5 marks) "Retrospective is Agile's own Kaizen." Explain.** 
Kaizen meaning, PDCA vs PDEL, Kaizen layers.

**Q8. (5 marks) Classify as valid/invalid standup statements:** (use the table in §4).

**Q9. (5 marks) Distinguish common-cause and special-cause variation with examples.** 
§6.4.

**Q10. (2 marks each)** 
- Who can cancel a sprint? → PO. 
- When does a sprint end? → When the timebox expires. 
- What is the output of sprint planning? → Sprint goal + sprint backlog. 
- Tool to find root cause in a retro? → Fishbone diagram.
