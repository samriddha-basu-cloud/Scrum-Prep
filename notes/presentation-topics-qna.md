# The 14 Presentation Topics — Exam Q&A
⭐⭐⭐ You marked all 14 group-presentation topics as important. For each topic: what to cover, where the detail is, and a planned set of questions with model answers (short answers for 2–5 marks; outlines for 10 marks).

> Source key: 📘 = faculty deck/answer keys; 📗 = textbook. Full notes live in the chapter files linked under each topic.

| # | Topic | Detailed notes |
|---|---|---|
| 1 | Agile vs Traditional (Waterfall) PM | [Ch 1 §5–8](ch01-basics-of-project-management.md) |
| 2 | Values of the Agile Manifesto | [Ch 2 §2](ch02-agile-manifesto.md) |
| 3 | Principles 1–4 | [Ch 2 §3](ch02-agile-manifesto.md) |
| 4 | Principles 5–8 | [Ch 2 §3](ch02-agile-manifesto.md) |
| 5 | Principles 9–12 | [Ch 2 §3](ch02-agile-manifesto.md) |
| 6 | Roles in Scrum | [Ch 5 Part A](ch05-scrum-teams-roles-team-space.md) |
| 7 | Sprint cycle: planning to review | [Ch 7 §1–5](ch07-sprint-events-and-retrospective.md), [Ch 3 §4](ch03-scrum-elements-and-terminology.md) |
| 8 | Daily Scrum and Sprint Retrospective | [Ch 7 §4, §6](ch07-sprint-events-and-retrospective.md) |
| 9 | Product backlog, user stories, prioritisation | [Ch 6](ch06-scrum-planning.md) |
| 10 | Burndown, burnup, CFD | [Ch 8](ch08-progress-tracking-burndown-burnup-cfd.md) |
| 11 | High-touch low-tech tools | [Ch 5 Part B](ch05-scrum-teams-roles-team-space.md) |
| 12 | Task board vs Kanban board | [Ch 5 §B3–B5](ch05-scrum-teams-roles-team-space.md) |
| 13 | Case: Scrum for a college event/project | [Ch 10 §2–3](ch10-cases-agile-scrum-msp.md) |
| 14 | Case: Toyota Production System | [Ch 9 §5](ch09-xp-lean-kanban-tps.md) |

---

## Topic 1 — Agile vs Traditional (Waterfall) Project Management
*Brief: compare processes, advantages, limitations, suitable application areas.*

**Q1.1 (2 marks) What is the Waterfall model?** 
A sequential model where the project moves through fixed phases (requirements → design → build → test → deploy → maintain); each phase must finish before the next, and changes push the project back to an earlier phase via change control.

**Q1.2 (2 marks) What is Agile project management?** 
An iterative, incremental approach that delivers working product in short timeboxes, welcomes change, and relies on self-organising teams and continuous customer collaboration (guided by the Agile Manifesto).

**Q1.3 (5 marks) Draw and explain the traditional and agile triangles of constraints.** 
Traditional: scope fixed; time and cost variable. Agile: time and cost fixed (sprints, stable team); scope variable (highest-value items first). Diagram in Ch 1 §8.2.

**Q1.4 ⭐⭐⭐ (10 marks) Compare Agile and Waterfall on planning, customer involvement, delivery, response to change, and give advantages, limitations and application areas of each.** 
- Planning: detailed up front vs progressive elaboration (more total planning in Agile).
- Customer: start/end vs continuous (PO, sprint reviews).
- Delivery: big bang vs incremental every 1–4 weeks.
- Change: controlled/expensive vs welcomed via backlog.
- Also: progress measure, team structure, documentation, risk, quality.
- Waterfall advantages: clear plan, predictable budget for stable scope, documentation, easy to manage contracts; limitations: late feedback, costly change, high late risk.
- Agile advantages: early ROI, flexibility, quality, transparency, motivation; limitations: needs PO availability, less predictable full-scope date, scaling, documentation in regulated fields.
- Application: Waterfall for construction, plant installation, regulated fixed-scope; Agile for software, digital products, marketing, R&D; Hybrid for ERP and hardware+software.
- 📘 faculty table "Traditional way vs Agile way" (8 rows) and value-proposition graphs strengthen the answer.

**Q1.5 (5 marks) Explain the Agile value proposition graphs.** 
Visibility, adaptability, business value and risk over time: Agile keeps visibility and adaptability high, delivers value early and reduces risk early; traditional has low mid-project visibility, falling adaptability, value only at the end, risk high till late. (Ch 1 §8.4)

**Q1.6 (2 marks) Agile does more or less total planning than Waterfall?** 
More in total (📘 p10), but less up front.

---

## Topic 2 — The Values of the Agile Manifesto
*Brief: four core values and their significance in modern PM and teamwork.*

**Q2.1 (2 marks) State the four values.** 
Individuals and interactions over processes and tools; working software over comprehensive documentation; customer collaboration over contract negotiation; responding to change over following a plan.

**Q2.2 (2 marks) Does the Manifesto reject processes, documentation, contracts and plans?** 
No. "While there is value in the items on the right, we value the items on the left more."

**Q2.3 ⭐⭐⭐ (10 marks) Explain the four values with examples and their significance in modern project management and teamwork.** 
Intro (2001, Snowbird, 17 signatories). For each value: meaning, practice, example, significance (Ch 2 §2). Significance summary: people-centric teams with psychological safety; value-focused delivery; partnership with customers; adaptability in VUCA markets; applicable beyond software (marketing, manufacturing, HR).

**Q2.4 (5 marks) Explain "customer collaboration over contract negotiation" with an example.** 
Customer as partner; PO in team; reviews each sprint; agile contracts (time and materials, fixed price per sprint); example: bank PO re-prioritising features from customer feedback.

**Q2.5 (2 marks) Where and when was the Manifesto written? Name two authors.** 
Snowbird, Utah, February 2001; e.g., Ken Schwaber, Jeff Sutherland, Kent Beck, Martin Fowler.

---

## Topic 3 — Principles 1 to 4
*Brief: customer satisfaction, adaptability, early delivery of value.*

**Q3.1 (2 marks) State Principles 1–4.** 
(1) Highest priority is to satisfy the customer through early and continuous delivery of valuable software. (2) Welcome changing requirements, even late in development; harness change for the customer's competitive advantage. (3) Deliver working software frequently, from a couple of weeks to a couple of months, preferring the shorter timescale. (4) Business people and developers must work together daily throughout the project.

**Q3.2 ⭐⭐⭐ (10 marks) Explain Principles 1–4 with examples and show how they increase customer satisfaction.** 
Each principle: meaning, practice (MVP/increment; backlog reprioritisation; short sprints; PO co-location), example (Zomato weekly releases; UPI autopay change; 2-week sprints; insurance claims manager sitting with team). Link: early value + customer shaping product + short feedback loops + no hand-offs = higher satisfaction and competitive advantage.

**Q3.3 (5 marks) How does an agile team "welcome change" without chaos?** 
Changes go to the product backlog; PO prioritises; current sprint goal protected; change absorbed in the next sprint; short sprints keep the cost of change low.

**Q3.4 (2 marks) Why prefer the shorter timescale?** 
Faster feedback, earlier value, lower risk, smaller batches.

---

## Topic 4 — Principles 5 to 8
*Brief: team collaboration, motivation, communication, sustainable development.*

**Q4.1 (2 marks) State Principles 5–8.** 
(5) Build projects around motivated individuals; give them the environment and support they need and trust them. (6) Face-to-face conversation is the most efficient and effective method of conveying information. (7) Working software is the primary measure of progress. (8) Agile processes promote sustainable development; sponsors, developers and users should maintain a constant pace indefinitely.

**Q4.2 ⭐⭐⭐ (10 marks) Explain Principles 5–8 with examples.** 
Motivation via autonomy/trust, servant leadership, no fear culture (📘: mistakes shouldn't be punished; fear demotivates); face-to-face richest channel, co-location, osmotic communication (Cockburn chart); working product as progress, Definition of Done, burndown burns only Done work; sustainable pace, energized work, avoid burnout and defects.

**Q4.3 (5 marks) Why is face-to-face communication preferred? What about remote teams?** 
Richest channel (tone, body language, instant clarification), builds trust, reduces misunderstanding; remote teams use video calls, digital boards, overlapping hours, occasional in-person meet-ups.

**Q4.4 (2 marks) What does "sustainable pace" mean?** 
A constant, maintainable work rate (no overtime death marches) so velocity and quality stay stable indefinitely.

---

## Topic 5 — Principles 9 to 12
*Brief: technical excellence, simplicity, self-organising teams, continuous improvement.*

**Q5.1 (2 marks) State Principles 9–12.** 
(9) Continuous attention to technical excellence and good design enhances agility. (10) Simplicity, the art of maximizing the amount of work not done, is essential. (11) The best architectures, requirements and designs emerge from self-organizing teams. (12) At regular intervals the team reflects on how to become more effective, then tunes and adjusts its behaviour.

**Q5.2 ⭐⭐⭐ (10 marks) Explain Principles 9–12 with examples.** 
Technical excellence (refactoring, TDD, CI, low technical debt); simplicity (YAGNI, MVP, avoid extra features waste); self-organising teams (team decides how, pulls tasks, T-shaped); reflection (sprint retrospective stages, stop/start/keep, Kaizen, PDEL).

**Q5.3 (5 marks) "Simplicity is the art of maximizing the amount of work not done." Explain.** 
Do only what adds value now; avoid gold plating; Lean waste of extra features; example: canteen app MVP.

**Q5.4 (2 marks) Which Scrum event implements Principle 12?** 
The Sprint Retrospective.

---

## Topic 6 — Roles in Scrum: Product Owner, Scrum Master and Development Team
*Brief: responsibilities and how they collaborate.*

**Q6.1 (2 marks) Who is the Product Owner?** 
The person accountable for maximising product value; owns and orders the product backlog; decides what goes into the product and accepts work as Done on behalf of the company.

**Q6.2 (2 marks) Who is the Scrum Master?** 
A servant leader who helps the team understand and implement Scrum, removes impediments, facilitates events, and coaches self-organisation.

**Q6.3 (2 marks) What is the Development Team?** 
The self-organising, cross-functional professionals who do the work of delivering a Done increment each sprint.

**Q6.4 ⭐⭐⭐ (10 marks) Describe the Scrum roles, their responsibilities and how they collaborate.** 
Role diagram; responsibilities (5–6 each, 📘 quotes); sponsor; collaboration across events table; comparison table (focus what/how/process); example. (Ch 5 Part A)

**Q6.5 (5 marks) Classify: Gantt chart on the wall, suggestions box, detailed task lists, doing admin for team members.** 
Command-and-control: Gantt chart, task lists. Servant leadership: suggestions box, admin work for team.

**Q6.6 (2 marks) Who writes acceptance tests and who accepts the increment?** 
Development team writes acceptance tests (📘); Product Owner accepts/rejects.

---

## Topic 7 — Sprint Cycle: Sprint Planning to Sprint Review
*Brief: complete sprint lifecycle: planning, execution, review, incremental delivery.*

**Q7.1 (2 marks) What is a sprint?** 
A fixed timebox of 1–4 weeks (📘 2 weeks to 30 days) in which a Done, usable increment is created; no changes in duration or goal.

**Q7.2 ⭐⭐⭐ (10 marks) Explain the sprint lifecycle with a diagram.** 
Scrum cycle diagram; sprint planning (part 1 what, part 2 how; sprint goal; sprint backlog); execution (development, testing, DoD, refinement, daily scrum, task board, burndown); sprint review (demo working increment, PO accepts, backlog adapted); retrospective; increment delivered; next sprint starts. Example sprint.

**Q7.3 (5 marks) What are the inputs and outputs of sprint planning?** 
Inputs: product backlog, latest increment, capacity, past velocity, DoD. Outputs: sprint goal and sprint backlog (items + tasks).

**Q7.4 (5 marks) What happens in a sprint review?** 
PO explains done/not done; team demos; stakeholders give feedback; PO accepts or requests changes; discuss backlog and release outlook; output revised product backlog.

**Q7.5 (2 marks) What is an increment?** 
The sum of all items delivered at the end of the sprint; deliverable only if every item is Done (📘).

---

## Topic 8 — Daily Scrum and Sprint Retrospective
*Brief: purpose, process and benefits in continuous improvement.*

**Q8.1 (2 marks) What are the three daily scrum questions?** 
What did I do yesterday toward the goal? What will I do today? Any impediments?

**Q8.2 (5 marks) State the do's and don'ts of a daily standup.** 
Do: attend if you have a task; only task-holders talk; speak to the team; add a sticky note for each new task. Don't: side conversations; discuss or solve problems in the meeting.

**Q8.3 ⭐⭐⭐ (10 marks) Explain the stages of a sprint retrospective.** 
Set the stage (check-in, ESVP, focus on/off) → gather data (timeline, color-coded dots) → generate insights (fishbone, dot prioritisation) → decide what to do (stop/start/keep) → close. Purpose, example, Kaizen link.

**Q8.4 (5 marks) How do the daily scrum and retrospective support continuous improvement?** 
Daily: inspect-adapt every 24 h, impediments raised early. Retro: inspect-adapt process every sprint. Both are layers of Agile's Kaizen (with pair programming and releases).

**Q8.5 (2 marks) ESVP stands for?** 
Explorers, Shoppers, Vacationers, Prisoners.

**Q8.6 (2 marks) Is "If you thread it backwards, the nose cone goes on easily" valid in a standup?** 
Invalid; it is problem-solving, take it offline.

---

## Topic 9 — Product Backlog, User Stories and Prioritisation Techniques
*Brief: how requirements are captured, prioritised and managed.*

**Q9.1 (2 marks) Define product backlog.** 
An ordered list of everything that might be needed in the product, with descriptions, estimates and values; owned by the PO; single source of requirements.

**Q9.2 (2 marks) User story template?** 
As a <role>, I want <action>, so that <benefit>.

**Q9.3 (5 marks) Explain INVEST and the 3Cs.** 
Independent, Negotiable, Valuable, Estimatable, Small, Testable; Card, Conversation, Confirmation.

**Q9.4 ⭐⭐⭐ (10 marks) How are requirements captured, prioritised and managed in Scrum?** 
Vision → personas → story map → user stories (template, 3Cs, INVEST, acceptance criteria) → estimation (story points, planning poker, T-shirt) → prioritisation (MoSCoW, Kano, dot voting, 100-point, value vs effort, risk-adjusted backlog) → refinement (DEEP) → release planning.

**Q9.5 (5 marks) Explain MoSCoW with an example.** 
Must, Should, Could, Won't (this time); food app MVP example.

**Q9.6 (2 marks) What is backlog refinement?** 
Ongoing review, re-estimation and re-prioritisation of backlog items by PO and team.

---

## Topic 10 — Agile Metrics: Burndown, Burnup and CFD
*Brief: monitoring progress, team performance and workflow efficiency.*

**Q10.1 (2 marks) What is a burndown chart?** 
A line chart updated daily showing work remaining (story points) against time, burning down to zero when work is done.

**Q10.2 (2 marks) What is a burnup chart?** 
A chart with separate lines for total scope and completed work, so progress and scope changes are visible separately.

**Q10.3 ⭐⭐⭐ (10 marks) Explain burndown, burnup and CFD with diagrams and how each helps.** 
Draw all three; axes; interpretation patterns; burndown hides scope change, burnup shows it; CFD shows WIP (vertical), cycle time (horizontal), bottlenecks (widening band); Little's Law; velocity.

**Q10.4 (5 marks) What does a widening band in a CFD indicate?** 
A bottleneck at that stage: work enters faster than it leaves; fix by limiting WIP, swarming, adding capacity.

**Q10.5 (5 marks) Velocity 20, release backlog 180 points: how many sprints?** 
180 ÷ 20 = 9 sprints.

---

## Topic 11 — High-Touch, Low-Tech Agile Tools (Task board, Kanban board, Caves and Commons, Information radiators)
*Brief: simple visual and collaborative tools without advanced software.*

**Q11.1 (2 marks) What does "high touch, low tech" mean?** 
Using simple physical, tactile tools (sticky notes, whiteboards, cards) that encourage face-to-face collaboration instead of relying on complex software.

**Q11.2 (5 marks) Explain caves and commons.** 
Commons: open shared area for collaboration, osmotic communication, stand-ups. Caves: small private spaces for focused or private work. Balance collaboration and concentration.

**Q11.3 (5 marks) What is an information radiator? Examples and benefits.** 
Big visible display in team space that radiates project information to passers-by (Cockburn); task board, burndown, CFD, build light, DoD; transparency, early problem detection, fewer status reports.

**Q11.4 ⭐⭐⭐ (10 marks) Explain high-touch low-tech tools and how they improve communication, transparency and tracking.** 
Task board, Kanban board, information radiators, caves and commons, story cards, planning poker cards, dot voting, physical burndown, niko-niko calendar, low-fidelity wireframes; benefits: cheap, fast, visible, participative, no training.

**Q11.5 (2 marks) What is osmotic communication?** 
Absorbing useful project information by overhearing conversations around you in a shared team space.

---

## Topic 12 — Task Board vs Kanban Board
*Brief: compare on workflow, flexibility, advantages and practical business applications.*

**Q12.1 (2 marks) What is a task board?** 
An agile planning tool where user stories/tasks are placed in columns by status (To Do, In Progress, Done) for the current sprint.

**Q12.2 (2 marks) What is a Kanban board?** 
A visual board whose columns mirror the workflow steps, with WIP limits per column, used to manage continuous pull-based flow.

**Q12.3 ⭐⭐⭐ (10 marks) Compare task boards and Kanban boards: features, differences, benefits and real-life applications.** 
Draw both; comparison table (columns, WIP limits, cadence/reset, items, change, roles, metrics, system, best for); benefits; applications: task board for software sprints and college event sprints; Kanban for IT helpdesk, hospital patient flow, newsroom, CMMS work orders, Toyota assembly; Scrumban hybrid; highway analogy (throughput over utilisation).

**Q12.4 (2 marks) Why do Kanban boards have WIP limits?** 
To create pull, prevent overload, expose bottlenecks and shorten cycle time (Little's Law).

---

## Topic 13 — Case Study 1: Applying Scrum to a Real-Life Project (College Event, College Projects)
*Brief: plan and manage a real-life project with agile practices.*

**Q13.1 ⭐⭐⭐ (10 marks) Apply Scrum to organise your college's annual fest.** 
Vision; Scrum team (PO = council president, SM = fest coordinator, dev team squads, sponsor = director); product backlog with points and MoSCoW; 8 one-week sprints release plan; sprint 1 goal, task board, daily scrum example, review feedback, retro stop/start/keep; burndown; outcome vs previous waterfall fest. (Ch 10 §2)

**Q13.2 (5 marks) Write five user stories for a college event.** 
E.g., As a participant I want online registration…; as a sponsor I want branding packages…; as a student I want an event schedule…; as the director I want safety permissions…; as a visitor I want food stalls….

**Q13.3 (5 marks) What would a sprint retrospective of the fest team look like?** 
Set stage (check-in), gather data (timeline of the week), insights (sponsors replied late because emails went from personal IDs), decide (start using official email; keep daily stand-up; stop WhatsApp approvals at midnight), close.

**Q13.4 (5 marks) How would you apply Scrum to a college group project?** 
Faculty guide/client as PO, rotating SM, 2-week sprints, backlog of deliverables, reviews with guide, retros; example pharmacy dashboard (Ch 10 §3).

---

## Topic 14 — Case Study 2: Toyota Production System — the Foundation of Lean, Agile and Scrum
*Brief: how TPS introduced Lean principles that influenced Agile and Scrum.*

**Q14.1 (2 marks) Who developed TPS?** 
Taiichi Ohno and Eiji Toyoda at Toyota (1948–75), building on Sakichi Toyoda's jidoka and Kiichiro Toyoda's JIT.

**Q14.2 (2 marks) What are the two pillars of TPS?** 
Just-in-Time and Jidoka (automation with a human touch).

**Q14.3 (5 marks) Explain the TPS house.** 
Goal roof (quality, cost, lead time); pillars JIT (takt, flow, pull/kanban) and Jidoka (stop at abnormality, andon, poka-yoke); people and teamwork in the centre; foundation: heijunka, standardised work, kaizen, stability.

**Q14.4 ⭐⭐⭐ (10 marks) How did TPS influence Lean, Agile and Scrum?** 
Origin and context; TPS house; Lean (Womack & Jones; Poppendieck's 7 principles and 7 wastes); mapping table (kanban → Kanban board/pull; JIT → last responsible moment; jidoka → stop-the-line CI, DoD; kaizen → retrospective; muri → sustainable pace; gemba → sprint review; respect → self-organising teams); Takeuchi–Nonaka 1986 rugby paper → name "Scrum"; conclusion: culture over tools.

**Q14.5 (2 marks) What does "Kanban" mean?** 
Signal card (Japanese).

**Q14.6 (2 marks) Name three Japanese Lean terms and meanings.** 
Muda (waste), Kaizen (continuous improvement), Jidoka (automation with human touch) / Andon (stop-the-line signal) / Gemba (the real place).
