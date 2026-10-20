# Chapter 1 — Basics of Project Management, Traditional vs Agile
Syllabus Unit 1 (4.5 hrs): ethics in agile PM; meaning, need, project, project management, types, breakdown structure; core agile concepts; traditional methodologies; drawbacks of waterfall; agile approach; agile vs traditional; choice of methodology; importance of all stakeholders.

> **Source key:** 📘 = from your faculty's decks ("01 History and Introduction to PM", "02 The Agile Way of Leading Projects to SUCCESS") or answer keys. 📗 = standard textbook material (PMBOK, Schwaber, K R Sharma, Heimrath) added to fill gaps.
> **Exam markers:** ⭐⭐⭐ = named in your important-topics list (Topic 8: Traditional vs Agile). ⭐⭐ = likely short note. ⭐ = good to know.

---

## 1. What is Project Management? (📘 deck 01)
- Old joke on the slide: PM was "the art of creating the illusion that any outcome is the result of a series of predetermined, deliberate acts when, in fact, it was dumb luck." It was **"an accidental profession."**
- **Today it is a discipline and a profession.** What is different today: **"There is no 2nd chance."**
- **The need (Joel Barker, "Mr. Paradigm"):** "Vision without action is merely a dream. Action without vision just passes the time. Vision with action can change the world."

### Key concepts (📘 Bruce Snow, Stanford APM)
```
   STRATEGIZE  ───────────►  IMPLEMENT  ───────────►  OPERATE
 Portfolio Management     Project Management     Continuous Improvement
```
Projects are the bridge between strategy and day-to-day operations.

### ⭐⭐ Definitions (PMBOK 6th ed., quoted on slide)
- **Project:** "A **temporary** endeavor undertaken to create a **unique** product, service, or result."
- **Project management:** "The application of **knowledge, skills, tools and techniques** to project activities to meet the project requirements."

📗 **Characteristics of a project:** temporary (definite start and end), unique output, progressive elaboration, defined objective, constrained by scope/time/cost/quality, has a sponsor and stakeholders, involves risk and uncertainty, cross-functional team.

📗 **Need for project management:** delivers strategy into results; controls cost, time and scope; manages risk early; aligns stakeholders; makes best use of scarce resources; gives a single point of accountability; creates repeatable learning.

---

## 2. ⭐⭐ Projects vs Operations (📘 deck 01 — two tables, learn both)

| Projects | Operations |
|---|---|
| Create own charter, organization and goals | Semi-permanent charter, organization and goals |
| Catalyst for change | Maintains status quo |
| Unique product or service | Standard product or service |
| Heterogeneous teams | Homogeneous teams |
| Start and end date | Ongoing |

| Item of comparison | Projects | Operations |
|---|---|---|
| Goal | Time bound | Ongoing |
| End product | Defined / few | Indefinite / many |
| Start date | Discrete / single | Continuous / many |
| Completion date | Discrete / single | Continuous / many |
| Budget | Separate | Combined |
| Customer | Involved | Less involved |
| Complexity | Unique | Repetitive |

**Examples (📘):** Projects: develop a new product; re-engineer the compensation system; kick off a new ad campaign; develop a training course. Operations: manage the emergency room; sell shoes; make business loans; maintain the intranet.

---

## 3. 📗 Types of projects
| Basis | Types | Example |
|---|---|---|
| Industry/content | Construction, IT/software, manufacturing, R&D, service, event | Metro line, ERP rollout, new car model, college fest |
| Size | Small, medium, mega | App feature vs Mumbai Trans-Harbour Link |
| Ownership | Public, private, PPP | Smart City, Tata plant, airport PPP |
| Certainty of requirements | Predictive (well-defined) vs adaptive (evolving) | Bridge vs mobile app |
| Delivery life cycle (📘 slide "Which methodology") | Predictive, incremental, iterative, agile | See §6 |

---

## 4. ⭐⭐ Work Breakdown Structure (WBS) — "breakdown structure" in syllabus (📗)
**WBS** = a deliverable-oriented, hierarchical decomposition of the total scope into smaller, manageable pieces. Lowest level = **work package** (can be estimated, scheduled, assigned). **100% rule:** the WBS includes 100% of the scope, nothing more.

Example: College Annual Fest
```
                         College Fest 2026 (1.0)
     ┌──────────────┬──────────────┼──────────────┬──────────────┐
  1.1 Venue      1.2 Sponsorship  1.3 Events     1.4 Marketing   1.5 Logistics
  ├ Booking      ├ Deck           ├ Cultural     ├ Social media  ├ Food stalls
  ├ Stage        ├ Outreach       ├ Technical    ├ Posters       ├ Security
  └ Sound/light  └ MoUs           └ Sports       └ Website       └ Transport
```
Related tools: OBS (organisation breakdown), RBS (resource/risk breakdown), RACI matrix (Ch 4).
**Agile equivalent:** Epic → Feature → User story → Task (the product backlog is a value-ordered, living "WBS").

---

## 5. Traditional project management methodologies (📗)
- **Waterfall (Royce, 1970):** sequential phases, each must finish before the next.
```
Requirements ─► Design ─► Build/Code ─► Test ─► Deploy ─► Maintain
      (change control pushes the project back to an earlier phase)
```
- **PMBOK process groups:** Initiating → Planning → Executing → Monitoring & Controlling → Closing.
- **PRINCE2:** process-based, stage gates, business-case driven (UK government).
- **Critical Path Method (CPM) / PERT:** network scheduling; Gantt charts.
- **V-Model:** waterfall with a test phase paired to each design phase.

### ⭐⭐ Drawbacks of Waterfall
1. Requirements frozen early; customers rarely know everything up front (**Gulf of evaluation**, 📘 p33: gap between what was described and what was interpreted).
2. Working product only at the very end → late feedback, late discovery of defects; cost of change rises sharply.
3. Change is treated as a problem (change control board), not as normal.
4. Risk accumulates until testing/integration ("big bang").
5. Heavy documentation; progress measured by documents, not working output.
6. Customer involved only at start and end.
7. Poor fit for knowledge work (📘 p3: knowledge work is invisible and changing).
8. Low team autonomy (command and control).

📘 Answer key: Waterfall = "Traditional but often less-than-effective way to build software"; "the entire project is broken down into sequential phases, often including a change control process in which changes force the project into a prior phase."

---

## 6. Choosing a life cycle (📘 p4 "Which methodology… Think first!")
| Method | Characteristic | Plan (requirements) | Urgency (of delivery) |
|---|---|---|---|
| **Predictive** | Detailed, comprehensive plan | Ready | Low |
| **Incremental** | Planning for successive subsets | Ready | High |
| **Iterative** | Planning, but output might change the plan | Not ready | Low |
| **Agile** | Plan is high level; re-plan as project progresses | Not ready | High |

### Stacey complexity diagram (📘 p4)
```
Requirements
 Far from     │  Complicated │   COMPLEX    │  Anarchy /
 agreement    │              │ (Agile works │   chaos
              │              │  well here)  │
              ├──────────────┼──────────────┤
 Close to     │   SIMPLE     │ Complicated  │
 agreement    │ (predictive) │              │
              └──────────────┴──────────────┴─────► Technology
                Close to certainty     Far from certainty
```
**Exam line:** use predictive when both requirements and technology are clear (building a warehouse); use Agile when either is uncertain (new app, R&D).

### Knowledge work vs industrial work (📘 p3) ⭐⭐
| Industrial work | Knowledge work |
|---|---|
| Work is visible | Work is invisible |
| Work is stable | Work is changing |
| Emphasis on running things | Emphasis on changing things |
| More structure, fewer decisions | Less structure, more decisions |
| Focus on right answers | Focus on right questions |
| Define the task | Understand the task |
| Command and control | Give autonomy |
| Measure performance to strict standards | Continuously learn and teach |

---

## 7. Core agile concepts (📘 p5)
- Agile is **a set of methods and methodologies**; each consists of **practices**; **Agile is also a mindset**; Agile has **values** to get people into that mindset.
- 📘 Answer key: "What makes the biggest difference when adopting practices?" → **Mindset**.
- Main approaches: **Scrum** (project management focus), **XP** (design/architecture, programming focus), **Lean/Kanban** (process improvement focus). Scrum is the most common; XP the second most popular (📘 p11).
- 📘 p12: "**Building a product successfully** doesn't mean **building a successful product**!" Building it successfully (on time, on budget) does not create customer value; building a successful product does. **Agile focuses on building a successful product.**
- **Iterative and incremental:** deliver small working slices, get feedback, adapt.
- **Empiricism:** knowledge comes from experience; decisions based on what is observed (transparency, inspection, adaptation).

---

## 8. ⭐⭐⭐ Traditional vs Agile Project Management (Important Topic 8)

### 8.1 📘 Faculty diagram "Traditional Way vs The Agile Way" (p2)
| Traditional Way | The Agile Way |
|---|---|
| Change management is a process | Change is part of the system |
| Plan driven | Execution driven |
| Inside approach | Inside and outside approach |
| Faith in process | Faith in people |
| Technology driving people | People driving technology |
| Final product only at the end | Final product in incremental stages |
| Same time, same place | Anywhere, anytime |
| Uncertainty not expected | Uncertainty expected |

### 8.2 📘 Constraint triangles (p6) — "the iron triangle is inverted"
```
   TRADITIONAL                         AGILE
        Scope (FIXED)            Cost (FIXED)───────Time (FIXED)
         /\                            \            /
        /  \                            \          /
       /    \                            \        /
      /______\                            \      /
  Time        Cost                         \    /
  (VARIABLE)  (VARIABLE)                    \  /
                                          Scope (VARIABLE)
```
- **Traditional:** scope is fixed (in the contract); time and cost are estimated and vary (overruns).
- **Agile:** time (timeboxed sprints) and cost (stable team) are fixed; **scope varies** — the most valuable features are delivered first, low-value items may be dropped.

### 8.3 ⭐⭐⭐ Comparison on the four bases your syllabus names (plus extras)
| Basis | Traditional (Waterfall) PM | Agile PM |
|---|---|---|
| **Planning requirements** | Detailed up-front plan; all requirements gathered and frozen at the start (Big Design Up Front); WBS, Gantt, baseline | High-level plan up front; **progressive elaboration**; re-plan every sprint (rolling-wave). Total planning is actually **more** (📘 p10) but spread through the project |
| **Customer involvement** | At start (requirements sign-off) and end (acceptance); contract-driven | Continuous; Product Owner is part of the Scrum team; customer sees working product every sprint review ("customer collaboration over contract negotiation") |
| **Delivery approach** | Single "big bang" delivery at the end | Iterative and incremental; potentially shippable increment every 1–4 weeks; early and continuous delivery of value |
| **Response to change** | Change is a risk; controlled by formal change control board; expensive late | "Welcome changing requirements, even late in development"; change is absorbed via the product backlog in the next sprint |
| Progress measure | % complete against plan, documents, earned value | Working software/product; velocity; burndown/burnup |
| Team structure | Hierarchical; PM assigns tasks (command and control) | Self-organizing, cross-functional; Scrum Master as servant leader |
| Documentation | Comprehensive | Just enough ("working software over comprehensive documentation") |
| Risk | Discovered late (integration/testing) | Exposed early via frequent delivery; risk-adjusted backlog; fail fast |
| Quality | Tested at the end (QA phase) | Built in; tested every sprint; Definition of Done |
| Fixed / variable | Scope fixed; time and cost vary | Time and cost fixed; scope varies |
| Best for | Stable, well-understood, regulated, low-uncertainty (construction, plant installation) | Complex, uncertain, fast-changing (software, new products, marketing campaigns) |

### 8.4 📘 Agile value proposition (p14) — four graphs
```
Visibility        Adaptability       Business value        Risk
 Agile: high ────  Agile: stays high  Agile: rises early    Agile: falls early
 Trad: U-shaped    Trad: drops fast   Trad: only at end     Trad: stays high till end
```
- **Visibility:** Agile stays high throughout; traditional is high at start, low in the middle ("black box"), high again only at the end.
- **Adaptability:** Agile keeps the ability to change high; traditional loses it quickly once requirements are frozen.
- **Business value:** Agile delivers value from early sprints (curve rises early); traditional delivers value only at the end.
- **Risk:** Agile risk drops quickly as working increments validate assumptions; traditional risk stays high until late testing.

### 8.5 ⭐⭐⭐ Advantages of adopting Agile PM over Traditional PM
1. **Faster time-to-market / early ROI:** usable increments every sprint; value starts flowing early (self-funding projects).
2. **Higher customer satisfaction:** customer sees and shapes the product every sprint; fewer "that's not what I wanted" surprises (reduces gulf of evaluation).
3. **Flexibility to change:** changes absorbed through backlog reprioritisation without contract renegotiation.
4. **Lower risk:** problems surface early; "fail fast" means cheap failure; risk-adjusted backlog.
5. **Better quality:** continuous testing, Definition of Done, TDD/CI (XP), retrospectives.
6. **Transparency and visibility:** task boards, burndown charts, daily scrum, information radiators.
7. **Higher team motivation and ownership:** self-organizing teams, autonomy, sustainable pace.
8. **Continuous improvement:** retrospective every sprint (Agile's own Kaizen).
9. **Right product, not just product right:** focus on value; MVP avoids unwanted features (64% of features rarely/never used — Standish, 📗).
10. **Better cost control:** fixed cost per sprint; PO can stop when enough value is delivered.

📗 **Evidence to quote:** Standish CHAOS reports consistently show agile projects succeed roughly 3x as often as waterfall projects, and waterfall projects fail about 2–3x as often (CHAOS 2015/2020: ~42% agile success vs ~13–14% waterfall).

### 8.6 Limitations of Agile (balance the answer) 📗
- Hard to give a fixed price/date for full scope up front; scope uncertainty worries some sponsors.
- Needs committed, available Product Owner and customer.
- Needs mature, self-disciplined, co-located or well-connected teams.
- Less documentation can hurt in regulated industries or handovers.
- Scaling to large programmes needs extra frameworks (Scrum of Scrums, SAFe, LeSS).
- Risk of "scope creep" if backlog is not managed.

### 8.7 When to use which — "Choice of methodology" 📗
| Use Traditional when | Use Agile when |
|---|---|
| Requirements clear and stable | Requirements unclear or evolving |
| Technology known | Technology new/uncertain |
| Change is very costly (physical construction) | Change is cheap (software, digital, marketing) |
| Fixed-price, fixed-scope contracts; regulation | Customer available to collaborate |
| Sequential dependencies (foundation before floors) | Work can be sliced into small valuable pieces |
**Hybrid** (📘 answer key: replacing XP planning with a full Scrum implementation is called "Hybrid") — e.g., waterfall for hardware/plant, agile for software/controls (common in manufacturing and ERP projects).

---

## 9. Importance of all stakeholders (📗)
Stakeholder = anyone who affects or is affected by the project (sponsor, customer, users, team, functional managers, suppliers, regulators, community). Agile makes stakeholder engagement continuous: invited to sprint reviews, represented by the Product Owner, visible information radiators. **Power–interest grid:** manage closely (high power, high interest), keep satisfied, keep informed, monitor.

## 10. Ethical considerations in agile PM (📗; PMI Code of Ethics: Responsibility, Respect, Fairness, Honesty)
- **Honesty/transparency:** report real velocity and burndown; do not hide impediments; (📘) **Courage** value: "If you agree to a deadline you know you won't meet because it's easier to apologize later, you lack courage."
- **Respect:** no blame culture; (📘) "mistakes shouldn't be punished if you want a motivated team"; fear demotivates.
- **Sustainable pace:** not exploiting the team with overtime (Principle 8).
- **Fairness:** fair estimation (team estimates, not imposed), fair credit, inclusive participation.
- **Responsibility:** data privacy, user safety, accessibility built into Definition of Done; avoid shipping known defects as "done".
- **Avoid gaming metrics:** velocity is for planning, not for comparing teams or punishing people.

## 11. 📗 Agile perspective cases (syllabus "sharing an agile perspective")
- **Spotify:** squads (Scrum-like teams), tribes, chapters; autonomous, frequent releases.
- **ING Bank (2015):** moved 3,500 HQ staff to agile squads/tribes; faster time-to-market.
- **FBI Sentinel:** case-management system stalled under a waterfall contract after several hundred million dollars; the FBI took it in-house with a small agile team and finished it (2012) for a small fraction of the original spend.
- **Indian example:** Indian IT firms (TCS, Infosys) run most client delivery on Scrum; HDFC/ICICI digital banking apps release in sprints.

---

## 12. Q&A — Chapter 1

**Q1. (2 marks) Define project and project management.** 
Project: a temporary endeavor to create a unique product, service or result (PMBOK). Project management: application of knowledge, skills, tools and techniques to project activities to meet project requirements.

**Q2. (5 marks) Differentiate projects and operations with examples.** 
Use the two tables in §2. Projects are temporary, unique, catalysts for change with separate budgets (e.g., launching a new product); operations are ongoing, repetitive, maintain status quo (e.g., selling shoes, running an ER).

**Q3. (5 marks) What is a WBS? Draw one for a college event.** 
Definition, 100% rule, work package; draw the tree in §4; mention agile equivalent (epic → story → task).

**Q4. (5 marks) What are the drawbacks of the Waterfall methodology?** 
List §5 drawbacks; tie to gulf of evaluation and knowledge work; conclude why Agile emerged (2001 Manifesto).

**Q5. ⭐⭐⭐ (10 marks) Compare Agile PM and Traditional PM on planning requirements, customer involvement, delivery approach and response to change. State advantages of Agile.** 
Structure: (1) one-line definitions of both; (2) draw the constraint triangles; (3) comparison table §8.3 with at least the four named bases plus 3–4 more; (4) advantages list §8.5 (6–8 points); (5) example: a bank app built in 2-week sprints vs a waterfall ERP that delivered after 18 months with outdated requirements; (6) conclusion: Agile for uncertainty, traditional for stable, hybrid for mixed.

**Q6. (5 marks) "Agile projects do less planning than traditional projects." True or false? Explain.** 
False. 📘 p10: total planning effort on an agile project is **more**; it is spread across the project (release planning, sprint planning, daily scrum, backlog refinement) instead of concentrated up front. Agile does **less up-front** planning (📘 T/F key).

**Q7. (5 marks) Explain the agile and traditional triangle of constraints.** 
§8.2 diagram and explanation.

**Q8. (5 marks) How do you choose between predictive, incremental, iterative and agile life cycles?** 
Table in §6 (plan readiness × urgency) plus Stacey diagram.

**Q9. (2 marks) "Building a product successfully vs building a successful product."** 
The first is meeting time/cost/scope; the second is creating customer value. Agile aims at the second.

**Q10. (5 marks) Discuss ethical considerations in agile project management.** 
§10 with PMI's four values and agile values (courage, respect).

**Quick one-word checks (📘 answer key):** Traditional but often less-than-effective way to build software → **Waterfall**. Biggest difference when adopting practices → **Mindset**. Developing a plan in steps using knowledge from the previous step → **Progressive elaboration**. Break project into smaller parts delivering working software each time → **Iterative**.
