# Chapter 3 — Scrum Methodology: Elements and Terminology
Syllabus Unit 3 (3 hrs): Scrum methodology; elements and terminology overview; project/product; release initiation; Scrum planning and Scrum sprint planning and executing; examples of projects with Scrum.

> **Source key:** 📘 = faculty deck pp 6–8, 16–19 and answer keys. 📗 = Scrum Guide 2020 (Schwaber & Sutherland) / textbooks.
> ⭐⭐⭐ **Important Topic 2** (Scrum cycle) is introduced here and detailed in [Chapter 7](ch07-sprint-events-and-retrospective.md). Roles are detailed in [Chapter 5](ch05-scrum-teams-roles-team-space.md).

---

## 1. What is Scrum?
- 📗 **Scrum Guide definition:** "A lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems."
- Created by **Ken Schwaber and Jeff Sutherland** (first presented at OOPSLA 1995). Name from **rugby**: the team moves the ball forward together (Takeuchi & Nonaka, "The New New Product Development Game", HBR 1986).
- 📘 "Scrum is the most common approach to Agile"; Scrum "focuses on **project management**" (XP on design/architecture, Lean/Kanban on process improvement). 📘 crossword: "Framework focused on project management and product development" → **SCRUM**.
- Scrum is a **framework**, not a full methodology: it gives roles, events, artifacts and rules; the team fills in practices.

## 2. ⭐⭐ The three pillars of empiricism (📗; 📘 lists "Empiricism" as a key concept)
**Empiricism** = knowledge comes from experience and decisions are based on what is observed (📘 answer key: "The theory that knowledge comes from experience" → **Empiricism**).
```
             ┌───────────────── EMPIRICISM ─────────────────┐
             │                                               │
      TRANSPARENCY            INSPECTION              ADAPTATION
  (work & progress visible  (frequent checks of     (adjust plan/process
   to all: boards, charts)   artifacts & progress)   when deviation found)
```
Lean thinking is the second foundation: reduce waste, focus on essentials.

## 3. ⭐⭐⭐ The Scrum framework at a glance: 3-5-3
| 3 Roles / accountabilities | 5 Events | 3 Artifacts (+ commitment) |
|---|---|---|
| Product Owner | The Sprint (container) | Product Backlog (→ Product Goal) |
| Scrum Master | Sprint Planning | Sprint Backlog (→ Sprint Goal) |
| Developers / Development Team | Daily Scrum | Increment (→ Definition of Done) |
| | Sprint Review | |
| | Sprint Retrospective | |

📘 The faculty deck lists **four** roles on a Scrum project team: **Project Sponsor, Product Owner, Scrum Master, Development team members.** (The Scrum Guide's Scrum Team has the last three; the Sponsor sits outside as the project's main advocate.)

📘 Other Scrum concepts listed: **Sprints (2 weeks to 30 days), Sprint planning, Sprint backlog, Daily scrum, Sprint review, Retrospective.**

## 4. ⭐⭐⭐ The Scrum cycle diagram (📘 p7 "Scrum project execution"; draw this in exams)
```
 Input from end-users,
 customers, team &          ┌──────────── Daily Stand-up (Daily Scrum, 15 min) ◄───┐
 other stakeholders         │                                                       │
        │                   ▼                                                       │
        ▼            ┌─────────────┐   ┌──────────────┐   ┌───────────────────┐     │
 ┌──────────────┐    │   SPRINT    │   │    SPRINT    │   │      SPRINT       │─────┘
 │   PRODUCT    │──► │  PLANNING   │──►│   BACKLOG    │──►│   1–4 weeks       │
 │   BACKLOG    │    │ (Part 1 & 2)│   │ (items+tasks)│   │ No changes in     │
 │ (ordered by  │    └─────────────┘   └──────────────┘   │ duration or goal  │
 │  Product     │          ▲                              └─────────┬─────────┘
 │  Owner)      │          │                                        ▼
 └──────▲───────┘          │                               ┌──────────────────┐
        │                  │                               │  SPRINT REVIEW   │──► Potentially
        │ Product backlog  │                               │ (demo increment) │    shippable
        │ refinement       │                               └────────┬─────────┘    product
        └──────────────────┴──────── SPRINT RETROSPECTIVE ◄─────────┘              increment
                                     (inspect & adapt process)
     Roles around the cycle: Product Owner (owns backlog) · Team (does the work) · Scrum Master (facilitates)
```

### 📘 A typical Scrum project (p7) — sprint after sprint
```
 Sprint 1 (30 days)   Sprint 2 (30 days)   Sprint 3 (30 days)   Sprint 4 (30 days)
 Planning             Planning             Planning             Planning
 Daily Scrum x n      Daily Scrum x n      Daily Scrum x n      Daily Scrum x n
   (Development)        (Development)        (Development)        (Development)
 Sprint Review        Sprint Review        Sprint Review        Sprint Review
 Retrospective        Retrospective        Retrospective        Retrospective
 → Increment 1        → Increment 2        → Increment 3        → Release
```

## 5. Scrum events (summary; details in Ch 7)
| Event | When (📘 match key) | Timebox (for 1-month sprint, 📗) | Purpose | Output |
|---|---|---|---|---|
| **Sprint** | Throughout the project | 1–4 weeks (📘: 2 weeks to 30 days) | Container for all work | Done increment |
| **Sprint Planning** | Beginning of the sprint | Max 8 hrs | What (Part 1) and How (Part 2) | Sprint goal + sprint backlog |
| **Daily Scrum** | Every day | 15 min | Inspect progress, plan next 24 hrs | Updated plan, impediments |
| **Sprint Review** | End of the sprint | Max 4 hrs | Demo increment to stakeholders, adapt backlog | Revised product backlog |
| **Retrospective** | After the sprint review | Max 3 hrs | Improve process | Improvement actions |

📘 Sprint rules from the answer key: "The Sprint is over when the timebox **expires**"; "The Product Owner is allowed to **cancel** the Sprint, but it wastes the team's energy and damages the company's trust in the team."

## 6. ⭐⭐ Scrum artifacts (📘 p16: Product Backlog, Sprint Backlog, Increment)
- **Product Backlog** — "an ordered list of all of the items (with descriptions, estimates and values) that might be needed in the product at some time in the future" (📘 Who-am-I). Owned by the **Product Owner** (📘 match key). Each item has description, business value, order and a rough **estimate**. PO routinely **refines** it. 📗 Commitment: **Product Goal**.
- **Sprint Backlog** — "the set of items the team will build during the Sprint, along with a plan to build them (usually a set of tasks the items are decomposed into)". Owned by the **Scrum Master** in the faculty's match key (📗 the Scrum Guide says it belongs to the Developers). Team **decomposes** items into tasks. 📗 Commitment: **Sprint Goal**.
- **Increment** — "the sum of all items that the team delivers to the users at the end of the Sprint, and can only be delivered if every item is Done". Produced by the **Development Team** (📘 match key). 📗 Commitment: **Definition of Done**.

> 📘 Match-the-following (role ↔ artifact): **Development Team ↔ Increment; Scrum Master ↔ Sprint Backlog; Product Owner ↔ Product Backlog.** Use this pairing in this course's exams.

## 7. ⭐⭐ Scrum values (📘 p16: "Scrum values make the team more effective")
**Openness, Respect, Courage, Focus, Commitment (collective commitment).** Mnemonic: **"FORCC"**.
| Value | Meaning | 📘 answer-key cue |
|---|---|---|
| **Commitment** | Team commits to sprint goal and to each other; collective ownership | "What pigs have, chickens don't" → collective commitment |
| **Focus** | Work on the sprint goal; one thing at a time | "You don't even consider trying to do two things at once" |
| **Openness** | Transparent about work and problems | Three daily scrum questions give complete **transparency** |
| **Respect** | Trust teammates as capable people; no blame | "When this isn't part of your mindset… you blame them" |
| **Courage** | Do the right thing; say no; raise problems | Agreeing to an impossible deadline = lack of courage |

**Pigs and chickens fable (📘 p17 "Collective commitment"):** a chicken suggests to a pig they open a restaurant called "Ham and Eggs". The pig says: "No thanks, I'd be **committed**, you'd only be **involved**." Pigs = Scrum team (committed); chickens = stakeholders (involved).

## 8. ⭐⭐ Other important Scrum concepts (📘 p17)
| Concept | Meaning / exam line |
|---|---|
| **Definition of "Done"** | Agreed-upon condition which, when satisfied, means a feature is complete (coded, tested, reviewed, documented, accepted). Shared by whole team. |
| **Last responsible moment** | Make decisions when you have the most information, but before delay causes harm. "The most effective time to make a decision is at the last responsible moment." |
| **Self-organizing teams** | Team decides how to do the work, who does what; no external task assignment. |
| **Empiricism** | Knowledge from experience; transparency-inspection-adaptation. |
| **Elapsed time** | Calendar time including interruptions (e.g., 2 ideal days may take 4 elapsed days). |
| **Ideal time** | "Time required to accomplish a task if it's done without interruption" (📘 → **Ideal**). |
| **Velocity** | "Number of story points completed in a given sprint" (📘 → **Velocity**). Used to forecast; not a performance target. |

Example for velocity forecast: sprints 1–3 completed 18, 22, 20 points → average velocity 20. Remaining backlog 160 points → about 8 more sprints.

## 9. ⭐⭐ Generally Accepted Scrum Practices — GASPs (📘 p18)
**Timebox, User stories (story cards), Story points, Task boards, Planning poker, Burndown chart, Persona.** (Each is explained in Ch 6 and Ch 8.)
- **Timebox:** "Setting a hard deadline for an activity and adjusting the scope of that activity to meet it" (📘 → **Timeboxed**).

## 10. Project / product / release initiation (syllabus) 📗
```
Product Vision ─► Product Roadmap ─► Release Plan ─► Sprint Plan ─► Daily Plan
 (years)            (quarters)          (months)        (weeks)        (day)
 "Planning onion" — each level more detailed and shorter horizon
```
- **Project vs product in Scrum:** a project is temporary; a product lives on. Scrum teams often are long-lived product teams delivering many releases.
- **Release initiation:** PO defines release goal and date (📘 who-is-responsible key: "Provides the due dates for the project and/or its releases" → **Product Owner**); team estimates backlog; release plan = number of sprints = total points ÷ velocity.
- **Sprint 0 (📗, not official Scrum):** set up environment, team agreements, initial backlog, architecture spike.

## 11. Scaling: Scrum of Scrums (📘 p9–10)
When several Scrum teams work on one product, each team sends an ambassador to a **Scrum of Scrums** meeting (daily or a few times a week) to coordinate dependencies; at even larger scale, a **Scrum of Scrum of Scrums**.
```
          Scrum of Scrum of Scrums
           /         |          \
     SoS (A)       SoS (B)      SoS (C)
     / | \         / | \        / | \
   T1 T2 T3      T4 T5 T6     T7 T8 T9   (each Ti = a Scrum team)
```

## 12. Example project with Scrum: online grocery app (📗)
- **Vision:** "Groceries at your door in 20 minutes in Pune."
- **Product backlog (top):** register/login; browse catalogue; cart; UPI payment; order tracking; ratings.
- **Sprint 1 goal:** "A user can browse and add items to cart." Sprint backlog: catalogue API, product list screen, cart screen, tests.
- **Daily scrum:** "Yesterday I finished the product list; today I'll build cart; blocked on API key from payments vendor."
- **Review:** demo to store manager; feedback: add "frequently bought" list → new backlog item.
- **Retro:** testing was late → start writing tests with each story.

---

## 13. Q&A — Chapter 3

**Q1. ⭐⭐ (5 marks) What is Scrum? Explain its three pillars.** 
Definition + origin (rugby, Schwaber & Sutherland) + transparency, inspection, adaptation with examples (task board, daily scrum, retrospective).

**Q2. ⭐⭐⭐ (10 marks) Explain the Scrum framework: roles, events and artifacts, with a diagram.** 
3-5-3 table, Scrum cycle diagram (§4), one line on each element, values (FORCC). Conclude with an example sprint.

**Q3. (5 marks) Explain the Scrum artifacts.** 
§6 with owner, contents and commitment (product goal, sprint goal, DoD).

**Q4. (5 marks) What are the Scrum values? Explain with examples.** 
§7 table + pig and chicken story.

**Q5. (2 marks each) Define:** velocity; ideal time vs elapsed time; definition of done; last responsible moment; timebox; empiricism. (§8, §9)

**Q6. (5 marks) What are GASPs?** 
List the seven practices with a line each.

**Q7. (5 marks) What is a Scrum of Scrums?** 
§11 with diagram.

**Q8. (5 marks) A team's velocities are 24, 26, 25. The release backlog is 200 points. How many sprints are needed?** 
Average velocity 25 → 200 ÷ 25 = **8 sprints** (state assumptions: stable team, scope unchanged).

**Q9. (2 marks) Who can cancel a sprint and what is the consequence?** 
Only the Product Owner; it wastes team energy and damages trust (📘).

**Q10. (2 marks) "Pigs vs chickens"?** 
Pigs are committed (Scrum team), chickens are only involved (stakeholders).
