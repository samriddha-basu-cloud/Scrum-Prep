# Chapter 11 — Extra Topics Beyond the Slides
Topics that examiners often add to Scrum/Agile papers or that strengthen 10-mark answers: other agile frameworks, scaling, Scrum Guide 2020 changes, Definition of Ready vs Done, technical debt, DevOps, agile contracts, agile risk management, agile EVM, anti-patterns, psychological safety and agile outside IT.

> **Source key:** almost everything here is 📗 (textbook/standard sources: Scrum Guide 2020, PMI Agile Practice Guide, SAFe, LeSS, Kniberg, Edmondson). Use it to add depth; base core answers on the faculty material in Ch 1–10.
> ⭐⭐ = good value-add in long answers. ⭐ = good to know.

---

## 1. ⭐⭐ The agile family: other frameworks
| Framework | Origin | Key idea | Distinctive practices |
|---|---|---|---|
| **Scrum** | Schwaber & Sutherland, 1995 | Empirical framework for complex products | Roles, sprints, 5 events, 3 artifacts |
| **XP** | Kent Beck, 1996–99 | Technical excellence, embrace change | TDD, pairing, CI, weekly cycle |
| **Kanban** | David Anderson, 2004–07 (from TPS) | Evolutionary flow improvement | Visualise, WIP limits, manage flow |
| **Lean Software Development** | Mary & Tom Poppendieck, 2003 | Eliminate waste | 7 principles, 7 wastes, VSM |
| **DSDM / AgilePM** | UK consortium, 1994 | Fix time and cost, flex features | MoSCoW (DSDM created it), timeboxing, facilitated workshops |
| **Crystal (Clear, Orange…)** | Alistair Cockburn, 1990s | Method scaled to team size and criticality | Osmotic communication, frequent delivery, reflective improvement |
| **FDD (Feature-Driven Development)** | Jeff De Luca & Peter Coad, 1997 | Build by feature | Domain model, feature lists, 2-week feature builds |
| **ASD (Adaptive Software Development)** | Jim Highsmith, 2000 | Speculate–Collaborate–Learn | Mission-driven, risk-driven cycles |
| **Scrumban** | Corey Ladas, 2008 | Scrum + Kanban | Sprints optional, WIP limits, pull |
| **Lean Startup** | Eric Ries, 2011 | Validated learning | MVP, Build–Measure–Learn, pivot or persevere |

**Exam tip:** MoSCoW comes from **DSDM**; "osmotic communication" and "information radiator" from **Cockburn (Crystal)**; "Speculate–Collaborate–Learn" from **ASD**.

## 2. ⭐⭐ Scaling agile: many teams, one product
| Framework | Structure | When used |
|---|---|---|
| **Scrum of Scrums** (📘 in slides) | Ambassadors from each team meet to resolve dependencies | 2–10 teams; simplest |
| **SAFe (Scaled Agile Framework)** | Agile Release Trains (50–125 people), Program Increments (PI, 8–12 weeks), PI Planning, roles like Release Train Engineer | Large enterprises, banks, telecom |
| **LeSS (Large-Scale Scrum)** | One Product Owner, one product backlog, many teams with a shared sprint | 2–8 teams (LeSS Huge beyond) |
| **Nexus** (Scrum.org) | 3–9 Scrum teams + a Nexus Integration Team | Scrum-centric scaling |
| **Scrum@Scale** (Jeff Sutherland) | Scrum of Scrums + MetaScrum for product ownership | Fractal scaling |
| **Spotify model** | Squads, tribes, chapters, guilds | Culture-led autonomy (inspiration, not a framework) |

**Challenges of scaling:** dependencies between teams, integration, consistent DoD, aligning priorities, keeping autonomy.

## 3. ⭐⭐ Scrum Guide 2020: what changed
1. **Less prescriptive**, shorter (13 pages); usable beyond software.
2. **"Development Team" → "Developers"**; one Scrum Team with no sub-teams or hierarchy.
3. **Product Goal** added as the commitment for the Product Backlog.
4. **Commitments:** Product Goal (Product Backlog), Sprint Goal (Sprint Backlog), Definition of Done (Increment).
5. **Sprint Planning has three topics:** Why (value), What, How.
6. **Self-managing** replaces self-organising (team decides who, how and what to work on).
7. Daily Scrum three questions are now **optional**; the team chooses the structure.
8. Scrum Master described as "**true leaders who serve**".

(The faculty slides use the older wording: "Development team", three daily questions. Both are acceptable; mention the update for extra marks.)

## 4. ⭐⭐ Definition of Ready vs Definition of Done vs Acceptance Criteria
| | Definition of Ready (DoR) | Acceptance criteria | Definition of Done (DoD) |
|---|---|---|---|
| Applies to | Backlog item **before** sprint | One specific story | **Every** item / the increment |
| Owner | Team + PO | PO (with team) | Scrum team (organisation standard) |
| Purpose | Item is clear enough to start | What this story must do | Quality bar for "complete" |
| Example | Story has acceptance criteria, estimated ≤ 8 points, dependencies cleared, UX mock attached | "Given a valid OTP, when I log in, then I see my dashboard within 2 s" | Code reviewed, unit tests ≥ 80% coverage, integrated, regression passed, documented, PO accepted |
DoR is not in the Scrum Guide (it's a common practice); DoD is mandatory.

## 5. ⭐⭐ Technical debt 📘 (defined in answer key) + 📗
- **Definition:** "Work that needs to be done to make code more maintainable in the long term" (📘). Coined by Ward Cunningham: shortcuts are like borrowing money; you pay "interest" through slower future change.
- **Causes:** deadline pressure, hacks/kludges, skipped tests, poor design, lack of refactoring.
- **Martin Fowler's debt quadrant:** deliberate vs inadvertent × reckless vs prudent ("We don't have time for design" = reckless-deliberate; "Now we know how we should have done it" = prudent-inadvertent).
- **Managing it:** make it visible in the backlog, reserve capacity each sprint (e.g. 10–20%), refactor continuously, strong DoD, TDD/CI.
```
 Velocity
   ▲  ●──●──●──●──●──●──  team that pays down debt
   │  ●──●─●
   │         ●──●
   │              ●──●──  team that ignores debt (velocity decays)
   └──────────────────────► Sprints
```

## 6. ⭐ DevOps and CI/CD
- **DevOps:** culture + practices joining development and operations so software can be released frequently and reliably.
- **CI (continuous integration):** merge and test code many times a day (📘 XP practice).
- **CD (continuous delivery):** every change is always releasable; **continuous deployment:** every passing change goes to production automatically.
- **Pipeline:** commit → build → automated tests → staging → production.
- **Link to Agile:** extends Principle 1 (early and continuous delivery) past the sprint into operations; XP's 10-minute build is an early form.

## 7. ⭐⭐ Agile contracts
| Contract type | How it works | Fit with agile |
|---|---|---|
| Fixed price, fixed scope | Traditional; scope frozen | Poor (conflicts with "customer collaboration over contract negotiation") |
| Time & materials | Pay for effort used | Good flexibility; customer bears risk |
| **Fixed price per sprint / iteration** | Pay a fixed amount per sprint; scope chosen each sprint | Good |
| **Not-to-exceed with fixed-fee increments** | Budget cap; pay per accepted increment | Good |
| **"Money for nothing, change for free"** (Jeff Sutherland) | Customer can swap equal-sized backlog items free; can stop early paying a fraction of remaining value | Very agile |
| **Graduated fixed price** | Rate changes if delivery is early or late (shared risk/reward) | Good |
| **Capped T&M / target cost** | T&M with a ceiling; savings shared | Good |

## 8. ⭐⭐ Agile risk management
- **Risk is reduced by design:** short iterations, early feedback, working increments, fail fast (📘).
- **Tools:** risk-adjusted backlog (📘), risk burndown graph (📘), risk-based spikes (📘), pre-mortem (📘), risk board on the wall, daily scrum impediments, retrospectives.
- **Risk categories:** business (wrong product), technical (architecture), schedule, people (key person leaves), external (vendor, regulation).
- **Response strategies (threats):** avoid, mitigate, transfer, accept; **opportunities:** exploit, enhance, share, accept.
```
 Cumulative risk
   ▲ ███████████████████▇▅▂  Traditional: risk stays high until late testing
   │ ██▆▄▃▂▁                 Agile: risk drops as each increment validates assumptions
   └────────────────────────► Time
```

## 9. ⭐ Agile Earned Value Management (AgileEVM)
- **Planned % complete (PPC)** = sprints done ÷ total planned sprints.
- **Actual % complete (APC)** = story points done ÷ total story points.
- **PV** = PPC × budget; **EV** = APC × budget; **AC** = actual cost.
- **SPI** = EV ÷ PV; **CPI** = EV ÷ AC (> 1 is good).
**Worked example:** Budget ₹20 lakh; 10 sprints planned, 4 done; 200 points total, 70 done; actual cost ₹9 lakh. PPC = 40% → PV = ₹8 L; APC = 35% → EV = ₹7 L. **SPI = 7 ÷ 8 = 0.875** (behind schedule), **CPI = 7 ÷ 9 = 0.78** (over budget).

## 10. ⭐⭐ Scrum anti-patterns (what not to do)
| Anti-pattern | Why it hurts | Fix |
|---|---|---|
| Daily Scrum as status report to the manager | Kills ownership | Team speaks to team; SM only facilitates |
| PO absent or a committee | Slow decisions, wrong priorities | One empowered, available PO |
| Scrum Master as project manager assigning tasks | Breaks self-organisation | Coach, don't command |
| "Water-Scrum-fall" (testing after the sprint) | Late defects, fake Done | Test inside the sprint; strong DoD |
| Changing sprint scope constantly | No focus, broken goals | Protect the sprint goal; new work to backlog |
| Skipping retrospectives | Same problems repeat | Keep retros short but regular |
| Using velocity to compare teams or set targets | Points inflation, gaming | Velocity is a team planning tool only |
| Overtime "hero" sprints | Burnout, defects | Sustainable pace |
| Huge stories carried across sprints | Flat burndown, no value | Split stories (INVEST) |
| Hiding impediments | Problems surface too late | Openness and courage values |

## 11. ⭐⭐ Agile leadership and psychological safety
- **Psychological safety** (Amy Edmondson): a shared belief that the team is safe for interpersonal risk-taking. Google's **Project Aristotle** (2015) found it was the #1 factor in team effectiveness.
- Connects to 📘 answer keys: "mistakes shouldn't be punished if you want a motivated team"; a culture of fear demotivates; trust means letting teammates make mistakes.
- **Motivation (Dan Pink, *Drive*):** autonomy, mastery, purpose; matches Principle 5 (motivated individuals, trust).
- **Situational leadership** (📘 team stages): directing → coaching → supporting → delegating.
- **Agile leader behaviours:** set vision and boundaries, remove impediments, coach, protect sustainable pace, model transparency, celebrate learning from failure.

## 12. ⭐ Agile outside software
| Area | How agile is used |
|---|---|
| Marketing | 2-week campaign sprints, A/B tests as increments, Kanban content calendars |
| HR | Agile recruitment pipelines on Kanban; continuous feedback instead of annual appraisal |
| Operations / manufacturing | Kanban for maintenance (CMMS), Scrum for NPI, Lean daily huddles |
| Education | Students run projects in sprints; teachers use retros after each unit |
| Events | Fest committees with sprint boards (see Ch 10) |
| Government | GOV.UK, digital public services built iteratively |
| Construction | Last Planner System (Lean construction) with weekly pull planning |

## 13. ⭐ Certifications and bodies (for viva / quiz)
- **Scrum Alliance:** CSM (Certified ScrumMaster), CSPO.
- **Scrum.org:** PSM I/II/III, PSPO (founded by Ken Schwaber).
- **PMI:** PMI-ACP (Agile Certified Practitioner); PMI Agile Practice Guide (2017, with Agile Alliance).
- **Scaled Agile Inc.:** SAFe Agilist (SA).
- **Kanban University:** KMP.

---

## 14. Q&A — Chapter 11

**Q1. ⭐⭐ (5 marks) Name five agile frameworks other than Scrum and state one distinctive feature of each.** 
XP (TDD/pairing), Kanban (WIP limits), DSDM (MoSCoW, fixed time and cost), Crystal (osmotic communication, scaled by criticality), FDD (feature lists, domain model), Lean Startup (MVP, build–measure–learn).

**Q2. ⭐⭐ (10 marks) How can Scrum be scaled for large organisations?** 
Scrum of Scrums (📘), SAFe (ARTs, PI planning), LeSS (one PO, one backlog), Nexus, Scrum@Scale, Spotify model; challenges and conclusion.

**Q3. (5 marks) Differentiate Definition of Ready, Acceptance Criteria and Definition of Done.** 
Table §4 with examples.

**Q4. ⭐⭐ (5 marks) What is technical debt? How do agile teams manage it?** 
📘 definition, Cunningham metaphor, causes, Fowler quadrant, management practices, velocity diagram.

**Q5. (5 marks) What contract types suit agile projects?** 
Table §7; explain "money for nothing, change for free".

**Q6. (5 marks) Calculate SPI and CPI:** budget ₹50 L, 10 sprints planned, 5 done, 400 points, 180 done, AC ₹27 L. 
PPC 50% → PV ₹25 L; APC 45% → EV ₹22.5 L; SPI = 0.9; CPI = 0.83 → behind schedule and over budget.

**Q7. ⭐⭐ (5 marks) List five Scrum anti-patterns and their fixes.** 
Table §10.

**Q8. (5 marks) What is psychological safety and why does it matter in agile teams?** 
Edmondson definition, Project Aristotle, link to 📘 answer keys on mistakes and fear, Pink's motivation.

**Q9. (5 marks) What changed in the Scrum Guide 2020?** 
§3 list.

**Q10. (2 marks each)** 
- MoSCoW originated in → DSDM. 
- PI Planning belongs to → SAFe. 
- One PO, one backlog, many teams → LeSS. 
- "Speculate–Collaborate–Learn" → ASD. 
- No.1 factor in Google's Project Aristotle → psychological safety.
