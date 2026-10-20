# Chapter 10 — Cases: Project Management with Agile and Scrum, Using MSP (Microsoft Project)
Syllabus Unit 8 (6 hrs): cases: project management with Agile and Scrum application, using MSP. Also Presentation Topic 13 (applying Scrum to a real-life project such as a college event).

> **Source key:** No faculty slides were uploaded for this unit, so this chapter is 📗 (textbook / general practice), built on the concepts from the faculty deck. Use it for case-based answers, which usually carry 10 marks.
> ⭐⭐⭐ Case writing technique is important: a good case answer shows **vision → backlog → roles → sprints → events → charts → retrospective → outcome**.

---

## 1. How to answer a case question in Scrum (template)
1. **Context:** organisation, problem, why Agile suits it (uncertainty, need for early value).
2. **Vision statement** (elevator pitch).
3. **Scrum team:** PO, SM, dev team members (with skills), sponsor, stakeholders.
4. **Product backlog:** 6–10 user stories with story points and MoSCoW priority.
5. **Release plan:** number of sprints, sprint length, velocity, release goals.
6. **Sprint 1 in detail:** sprint goal, sprint backlog (tasks), task board snapshot.
7. **Events:** daily scrum example, sprint review feedback, retrospective (stop/start/keep).
8. **Tracking:** burndown/burnup sketch; risk handling.
9. **Outcome and learnings;** advantages over a waterfall approach.

---

## 2. ⭐⭐⭐ Case 1: Applying Scrum to a college event — "Symphony 2026" annual fest (Presentation Topic 13)
### 2.1 Context
SIOM's annual fest, 8 weeks away. Past fests were planned "waterfall style": a big plan in week 1, then chaos in the last week, sponsors confirmed late, posters printed with wrong dates. This year the council uses Scrum.

### 2.2 Vision
"Make Symphony 2026 Pune's best inter-college fest: 5,000 footfall, ₹8 lakh sponsorship, zero safety incidents, and a feedback score of 4.5/5."

### 2.3 Scrum team
| Role | Who | Responsibility |
|---|---|---|
| Sponsor | Director, SIOM | Funds, approvals, big picture |
| Product Owner | Student Council President | Owns fest backlog, prioritises, accepts work |
| Scrum Master | Fest Coordinator (senior student) | Runs stand-ups, removes blockers (permissions, vendor delays), shields team from interruptions |
| Development team | 8 students: 2 sponsorship, 2 events, 2 marketing/design, 1 logistics, 1 tech (website) | Deliver fest increments |
| Stakeholders | Faculty advisor, students, sponsors, vendors, police/fire dept | Feedback at reviews |

### 2.4 Product backlog (prioritised)
| # | User story | Points | MoSCoW |
|---|---|---|---|
| 1 | As the council, I want a sponsorship deck so that we can approach companies | 5 | Must |
| 2 | As a sponsor, I want clear branding packages so that I know what I get | 3 | Must |
| 3 | As a participant, I want online registration so that I can sign up easily | 8 | Must |
| 4 | As the director, I want police and fire permissions so that the event is legal and safe | 5 | Must |
| 5 | As a student, I want an event schedule so that I can plan my day | 5 | Must |
| 6 | As a visitor, I want food stalls so that I can eat on campus | 5 | Should |
| 7 | As a follower, I want Instagram reels so that I feel the hype | 3 | Should |
| 8 | As a participant, I want e-certificates so that I have proof of participation | 3 | Could |
| 9 | As a visitor, I want a fest mobile app | 13 | Won't (this year) |

### 2.5 Release plan
8 one-week sprints; forecast velocity ≈ 12 points/week.
| Sprint | Goal (release increment) |
|---|---|
| 1 | Sponsorship deck ready; 15 companies contacted |
| 2 | 3 sponsors signed; permissions applied |
| 3 | Website + registration live |
| 4 | Event schedule published; judges confirmed |
| 5 | Food stalls and vendors booked |
| 6 | Marketing blitz; 2,000 registrations |
| 7 | Dry run; logistics and security plan |
| 8 | Fest day + feedback + closure |

### 2.6 Sprint 1 detail
- **Sprint planning (Sunday, 1 hr):** Goal: "Sponsorship deck approved and 15 companies contacted." Items 1 and 2 (8 points).
- **Task board snapshot (Wednesday):**
```
 ┌────────────────────┬─────────────────┬────────────────┬──────────────────┐
 │ STORY              │ TO DO           │ IN PROGRESS    │ DONE             │
 ├────────────────────┼─────────────────┼────────────────┼──────────────────┤
 │ Sponsorship deck   │ PO review       │ Design slides  │ Past-fest data   │
 │ (5 pts)            │                 │ (Riya)         │ Audience stats   │
 ├────────────────────┼─────────────────┼────────────────┼──────────────────┤
 │ Branding packages  │ Pricing sheet   │                │ Package tiers    │
 │ (3 pts)            │ Email template  │                │                  │
 └────────────────────┴─────────────────┴────────────────┴──────────────────┘
```
- **Daily scrum (8:45 am, 10 min, by the notice board):** "Yesterday I collected audience stats; today I design slides 5–10; blocked: need last year's sponsor logos from the alumni office." SM gets the logos by noon.
- **Sprint review (Saturday):** demo of deck to faculty advisor and an alumni sponsor. Feedback: add digital reach numbers and a student-startup stall package → new backlog item.
- **Retrospective:** Keep: daily 10-minute stand-up. Stop: approving designs over WhatsApp at midnight. Start: a shared Google Drive folder with a naming standard.
- **Burndown:** 8 points → 0 by Saturday; flat on Tuesday (waiting for logos) — impediment visible on the chart.

### 2.7 Outcome and why Scrum helped
Sponsors confirmed by week 2 (vs week 7 last year); registration problems caught in sprint 3 review; the team adapted when rain was forecast (moved two events indoors in sprint 7). **Advantages vs waterfall:** early value, visible progress, quick adaptation, less last-minute chaos, team ownership.

---

## 3. Case 2: College project — final-year capstone / MBA live project (Presentation Topic 13 variant)
- **Project:** "Inventory dashboard for a local pharmacy" (4 students, 6 weeks).
- **PO:** pharmacy owner (or faculty guide as proxy PO). **SM:** rotates weekly among students.
- **Backlog:** capture stock data, low-stock alerts, expiry alerts, sales report, supplier list.
- **Sprints:** three 2-week sprints; review with the pharmacist each fortnight.
- **Learning:** sprint 1 review revealed the pharmacist cared most about **expiry alerts**, not sales reports → PO reprioritised; waterfall would have built the wrong feature first.

---

## 4. Case 3: Agile in a manufacturing project — new product introduction (NPI)
- **Context:** an appliance maker developing a smart mixer-grinder; hardware + firmware + app.
- **Hybrid approach:** hardware tooling stage-gated (predictive: die-making has long lead times); firmware and app in 2-week Scrum sprints; hardware prototypes iterated via 3D printing every sprint.
- **Kanban** used on the pilot line for engineering change requests (WIP limit 3).
- **Metrics:** release burnup for app features; CFD for change requests.
- **Result:** app features validated with users while tooling was being made; launch on time.

## 5. Case 4: Agile in a service industry — bank digital onboarding
- **Context:** a private bank wants video-KYC account opening.
- **PO:** head of retail digital; **team:** UX, 4 developers, tester, compliance analyst.
- **MVP (sprint 1–3):** mobile number + Aadhaar OTP + PAN verification + video-KYC slot booking.
- **Compliance as part of DoD:** each story checked against RBI KYC master direction.
- **Outcome:** MVP live in 6 weeks to employees (pilot), public in 12 weeks; feedback cut drop-off from 40% to 22% (illustrative numbers).

## 6. Case 5: ERP (SAP) and CMMS
See [Chapter 6 §11](ch06-scrum-planning.md) — SAP Activate sprints in the Realize phase; CMMS releases (MVP: asset register, work orders, PM schedule).

---

## 7. ⭐⭐ Using MSP (Microsoft Project) for Agile/Scrum projects
### 7.1 What MS Project offers (📗)
Traditionally MS Project is a **predictive** tool: WBS, Gantt charts, task dependencies, critical path, resource levelling, baselines. Newer subscription versions (Project Online desktop client / Project Plan 3 and 5) added **agile features**:
| Feature | Use in Scrum |
|---|---|
| **New project from Scrum or Kanban template** | Creates a project with sprints or Kanban columns |
| **Backlog Board / Backlog Sheet** | Product backlog as cards or rows |
| **Sprint Planning Board / Sheet** | Drag backlog items into Sprint 1, Sprint 2… |
| **Manage Sprints** dialog | Set sprint length and start dates |
| **Current Sprint Board** (task board) | Columns: Not started, Next up, In progress, Done |
| **Custom board columns + WIP** (Kanban template) | Visualise flow |
| **Sprint reports** | **Burndown**, sprint status, task status, work-in-progress reports |
| **Hybrid projects** | Gantt (waterfall) tasks and sprint (agile) tasks in one plan; dependencies across them |
📗 Note: Microsoft is moving its cloud project tools into **Microsoft Planner** (premium plans); the desktop MS Project agile views above are what is usually taught in class. Common alternatives: **Jira, Azure DevOps, Trello, Asana, monday.com**.

### 7.2 ⭐⭐ Step-by-step: running a Scrum project in MS Project (lab-style answer)
1. **File → New → Scrum template** (or add Agile to an existing plan: Project tab → Agile → Scrum).
2. **Manage Sprints:** set sprint length (e.g., 2 weeks), start date and number of sprints.
3. **Enter the product backlog** in **Backlog Sheet**: task name (story), story points (custom field), priority, assigned resources.
4. **Sprint planning:** open **Sprint Planning Board**, drag stories into Sprint 1 up to team capacity (velocity).
5. **Execution:** use the **Current Sprint Board** as the task board; move cards through columns during daily scrum; update % complete/remaining work.
6. **Tracking:** Report tab → **Sprint Burndown**, Task Status, Sprint Status reports; print as information radiators.
7. **Hybrid:** add predictive tasks (e.g., hardware procurement) on the Gantt chart and link to sprint tasks.
8. **Close sprint:** mark Done tasks; move unfinished stories back to the backlog or next sprint; save a baseline/snapshot; repeat.
```
 MS Project hybrid view (illustrative)
 ┌─────────────────────────────────── GANTT ──────────────────────────────────┐
 │ Procure servers      ████████                                              │
 │ Data migration plan          ██████                                        │
 │ Sprint 1 ─ Login, Catalog ──────████                                       │
 │ Sprint 2 ─ Cart, Payment ───────────████                                   │
 │ Sprint 3 ─ Tracking, Ratings ───────────████                               │
 │ Go-live                                      ◆                             │
 └────────────────────────────────────────────────────────────────────────────┘
```

### 7.3 MS Project (traditional) vs agile tools
| MS Project (classic) | Agile tools (Jira/MSP agile views) |
|---|---|
| Gantt, critical path, baseline | Boards, backlogs, sprints |
| Fixed scope, schedule variance | Velocity, burndown, burnup, CFD |
| PM updates the plan | Team updates the board |
| Good for predictive/hybrid | Good for Scrum/Kanban |

---

## 8. Q&A — Chapter 10

**Q1. ⭐⭐⭐ (10 marks) Apply Scrum to plan and manage a college event. Show roles, backlog, sprints, events and tracking.** 
Use §2 in full (vision, team, backlog table with MoSCoW and points, release plan, sprint 1 with task board, daily scrum example, review feedback, retro stop/start/keep, burndown, outcome).

**Q2. (10 marks) A bank wants to launch a mobile app feature in 3 months. Explain how you will use Scrum.** 
Follow the §1 template with §5 content.

**Q3. ⭐⭐ (5 marks) How can MS Project be used for agile project management?** 
§7.1 features table + §7.2 steps.

**Q4. (5 marks) Explain a hybrid approach with an example.** 
§4 (hardware predictive + software Scrum) or SAP Activate.

**Q5. (5 marks) What lessons does the college-event case teach about Agile vs Waterfall?** 
Early sponsorship, visible progress, adaptation to rain, fewer last-minute surprises, team ownership.
