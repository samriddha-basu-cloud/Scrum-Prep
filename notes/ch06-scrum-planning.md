# Chapter 6 — Scrum Planning: Stories, Backlog, Prioritisation, Roadmap, Release Planning
Syllabus Unit 6 (3 hrs): agile planning overview; create stories/alternatives; story maps; prioritising stories; create product roadmap; conduct release planning; cases with examples related to SAP/ERP and CMMS.

> **Source key:** 📘 = faculty deck pp 10, 18–19, 21, 37, 44, 49 and answer keys. 📗 = textbooks (Mike Cohn, Jeff Patton, PMI-ACP).
> ⭐⭐ Presentation Topic 9 (Product backlog, user stories, prioritisation techniques). Short notes on INVEST, user story, planning poker, MoSCoW are very likely.

---

## 1. Agile planning overview
- 📘 p10: "Is planning effort on an Agile project less? **No** — total planning effort on the agile project is **more** than on a traditional project." It is spread out: release planning, sprint planning, daily planning, refinement.
- 📘 T/F: Agile does **less up-front** planning; plans **will** change even at the last responsible moment; mid-course adjustments are **common**; knowledge work has high rates of change.
- **Planning onion (📗):** Vision → Roadmap → Release → Sprint (iteration) → Daily.
- **Progressive elaboration:** "Starting with an initial version of an artifact and updating it as more information is known" (📘 MTF).
- **Rolling-wave planning:** plan near-term work in detail, later work at high level.

## 2. ⭐⭐ Product Backlog
- Ordered list of everything that might be needed in the product; single source of requirements; owned by the **PO**.
- Each item: **description, business value, order, rough estimate** (📘).
- **DEEP** (📗, Roman Pichler): **D**etailed appropriately, **E**stimated, **E**mergent, **P**rioritised.
```
   ┌──────────────────────────┐   ▲ Top: small, detailed, estimated, ready for next sprint
   │ Story: Login with OTP    │   │
   │ Story: Browse menu       │   │
   ├──────────────────────────┤   │
   │ Feature: Loyalty points  │   │ Middle: medium-sized features
   │ Feature: Reviews         │   │
   ├──────────────────────────┤   │
   │ Epic: Subscription plans │   │ Bottom: large, vague epics (refined later)
   │ Epic: Multi-city         │   ▼
   └──────────────────────────┘
```
- **Backlog refinement / grooming:** "reviewing, re-estimating and re-prioritising the list of planned features and work items" (📘 MTF); "adding, removing and reprioritizing items in the list of features to be developed" (📘 → **Backlog grooming**). 📗 Typically ≤ 10% of team capacity.
- **Risk-adjusted backlog:** "the list of planned features and work items that also includes problems, issues, and threats" (📘).

## 3. ⭐⭐⭐ User stories (📘 GASP, p18)
- **Definition (📘 MTF):** "A user story is a way to express one very specific need that a user has, usually written out as a few sentences on a sticky note or index card." Also "a minimal description of a feature that explains who needs it and why they need it."
- **Template (📘):** **As a** <role>, **I want to** <action>, **so that** <benefit>.
  - "As a **student**, I want to **register for an event with one tap** so that **I don't fill long forms**."
  - "As a **maintenance supervisor**, I want to **see overdue work orders** so that **I can prevent breakdowns**." (CMMS)
- **3 Cs (Ron Jeffries; 📘 → Card, Conversation, Confirmation):**
  - **Card:** written on an index card (placeholder).
  - **Conversation:** details emerge from discussion between PO and team.
  - **Confirmation:** acceptance criteria/tests that confirm it is done.
- **Acceptance criteria (Given–When–Then, 📗):** *Given* I am logged in, *When* I tap Register, *Then* I receive a confirmation SMS within 30 seconds.
- **Epic → Feature → Story → Task:** an epic is a large story to be split.

### ⭐⭐⭐ INVEST (📘 p19; "an acronym to help you identify a good user story")
| Letter | Meaning | Check |
|---|---|---|
| **I** | Independent | Can be built/released without depending on another story |
| **N** | Negotiable | Not a contract; details can be discussed |
| **V** | Valuable | Delivers value to user/customer |
| **E** | Estimatable | Team can estimate its size |
| **S** | Small | Fits within one sprint |
| **T** | Testable | Has clear acceptance criteria |

**Bad vs good story:** "Build the database" (not valuable to a user, not independent) → "As a shopper, I want to save my address so that checkout is faster."

### Splitting stories (📗): by workflow step, by business rule, by data type, happy path vs edge cases, by platform, CRUD operations, spike first.

## 4. ⭐⭐ Personas (📘 GASP, p21)
- "A way of assigning a name and personal facts to a made-up user of your system" (📘 → **Personas**). Crossword: "Helps the team understand who their users are" → **PERSONA**.
- 📘 Example on slide: **Melinda Oglesby**, age 29, IT consultant, New York, role: expert gamer. Bio: attends gaming conferences, owns all consoles, built gaming PCs. Goals: satisfying story, multiple play styles, challenging puzzles, co-operative play. Frustrations: poor quality (bugs, crashes), plot holes, poor server performance.
- 📗 Indian example: "**Rohan, 22, MBA student, Pune**: orders food at 11 pm, budget ₹200, wants fast delivery; frustrated by hidden charges."

## 5. ⭐⭐ Story maps (📗, Jeff Patton)
A 2-D arrangement of stories: **backbone** (user activities, left to right in sequence) and **stories** under each activity, ordered top-down by priority. Horizontal **release lines** slice the map into MVP, Release 2, etc.
```
 Backbone →  Discover      Choose        Order         Pay          Track
            ─────────────────────────────────────────────────────────────────
 MVP         Search menu   View dish     Add to cart   UPI          Order status
 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ (release 1 line)
 Release 2   Filters       Photos        Coupons       Cards        Live map
 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ (release 2 line)
 Later       Voice search  AR preview    Group order   Wallet       Chat rider
```
**Benefits:** see the whole user journey (avoids a flat backlog), find the MVP slice, spot gaps, plan releases.

## 6. ⭐⭐⭐ Prioritisation techniques (📘 p49 "A few last tools and techniques")
### 6.1 MoSCoW
| Category | Meaning | Example (food app MVP) |
|---|---|---|
| **M**ust have | Without it, release fails | Login, menu, cart, payment |
| **S**hould have | Important but not vital | Order tracking |
| **C**ould have | Nice to have if time permits | Coupons |
| **W**on't have (this time) | Agreed out of scope for now | Voice ordering |
📗 Rule of thumb: Musts ≤ 60% of effort.

### 6.2 Kano analysis (Noriaki Kano)
```
 Customer satisfaction
   ▲                         ╱ Delighters (Excitement): unexpected, wow
   │                      ╱      e.g., free dessert on birthday
   │               ●────╱───── Performance (Linear): more is better
   │           ╱                 e.g., faster delivery
   ├──────────╱────────────────────────────► Feature implementation
   │      ╱ ___________________ Basic (Must-be): expected; absence → anger
   │   ╱ /                       e.g., correct order delivered
   ▼  /
```
Categories: **Basic/Must-be, Performance/One-dimensional, Excitement/Delighters, Indifferent, Reverse.** Delighters become basics over time.

### 6.3 Other techniques
- **Dot voting:** each stakeholder gets N dots to place on items (📘 p49; retrospective "prioritize with dots").
- **100-point voting (cumulative voting):** each person distributes 100 points among items (📘).
- **Fist of five:** quick consensus check, 0–5 fingers (📘).
- **Business value vs effort (2×2):** do quick wins (high value, low effort) first.
- **Risk-based prioritisation / risk-adjusted backlog (📘 p37):** risk responses are inserted into the backlog by their Expected Monetary Value (EMV) alongside features by value.
- **WSJF (📗, SAFe):** Cost of Delay ÷ Job Size. **Cost of delay** is listed among the faculty's Lean thinking tools.
- **Relative weighting (📗, Wiegers):** (benefit + penalty) ÷ (cost + risk).

### 6.4 📘 Risk-adjusted backlog example (p37)
| Risk register (by EMV) | Prioritised product backlog | → Risk-adjusted backlog |
|---|---|---|
| Risk 1 ₹4,00,000 | Req 1 ₹4,50,000 | Req 1 ₹4,50,000 |
| Risk 2 ₹2,70,000 | Req 2 ₹3,70,000 | **Risk 1 response ₹4,00,000** |
| Risk 3 ₹1,90,000 | Req 3 ₹2,20,000 | Req 2 ₹3,70,000 |
| Risk 4 ₹1,00,000 | Req 4 ₹1,40,000 | Req 3 ₹2,20,000 |
| Risk 5 ₹50,000 | Req 5 ₹90,000 | Req 4 ₹1,40,000 |
| Risk 6 ₹40,000 | Req 6 ₹45,000 | **Risk 4 response ₹1,00,000** |
| Risk 7 ₹5,000 | Req 7 ₹10,000 | Req 5 ₹90,000 |
Selected risk responses are merged with features by value so the team works on the highest value-or-risk item first. **Fast failure:** learn about risks cheaply and early. **Risk burndown graph:** "a chart that shows the total daily estimated impact of problems, issues and threats" (📘). **Risk-based spike:** "experimental work to determine the impact of a specific potential problem, issue or threat" (📘).

## 7. ⭐⭐⭐ Estimation
- **Story points (📘 GASP):** a relative, unitless measure of size/effort/complexity/risk of a story compared with a reference story. Often on a **modified Fibonacci** scale: 1, 2, 3, 5, 8, 13, 20, 40, 100. (📘 burndown y-axis labelled story **points**.) 📘 T/F: story points are not called that "because not all stories are true" (FALSE); risk **should** be factored in; estimates include testing and documentation (all-containing); estimates are not frozen.
- **⭐⭐ Planning poker (📘 GASP):** "a Scrum planning technique that depends on the team describing the high and low individual estimates until the group reaches consensus" (📘); "a game team members play using cards to help them agree on estimates".
  1. PO reads a story; team discusses.
  2. Each member privately picks a card (1, 2, 3, 5, 8, 13…).
  3. All reveal at once (avoids anchoring).
  4. Highest and lowest explain their reasoning.
  5. Re-vote until consensus.
  - Based on **Wideband Delphi**; popularised by Mike Cohn.
- **T-shirt sizing:** grouping features into XS, S, M, L, XL effort categories (📘 → **T-shirt** sizing). Good for early, rough release-level estimates.
- **Affinity estimating (📗):** team silently groups stories by relative size on a wall.
- **Ideal days vs elapsed days** (Ch 3).

## 8. ⭐⭐ Product roadmap (📗)
High-level, time-based view of how the product will evolve toward the vision: themes/features by quarter or release, **not** detailed tasks. Updated regularly.
```
 Product: SIOM CampusConnect app
 ┌───────────────┬───────────────┬────────────────┬─────────────────┐
 │  Q1 (Jan–Mar) │  Q2 (Apr–Jun) │  Q3 (Jul–Sep)  │  Q4 (Oct–Dec)   │
 ├───────────────┼───────────────┼────────────────┼─────────────────┤
 │ R1: Events &  │ R2: Payments  │ R3: Clubs &    │ R4: Placement   │
 │ registration  │ & tickets     │ chat           │ prep module     │
 │ (MVP)         │               │                │                 │
 └───────────────┴───────────────┴────────────────┴─────────────────┘
```

## 9. ⭐⭐ Release planning (📗)
**Goal:** decide which backlog items go into the next release and roughly when.
**Steps:**
1. PO states release goal/date (📘: PO provides due dates).
2. Refine and estimate the backlog (story points, T-shirt).
3. Determine team velocity (historical or forecast).
4. Number of sprints = release scope ÷ velocity (or scope = sprints × velocity for a fixed date).
5. Slice the story map; allocate stories to sprints; add buffer.
6. Publish the release plan as an information radiator; update every sprint.
**Example:** Fixed date release in 6 two-week sprints; velocity 25 → capacity 150 points; PO picks Must-haves worth 130 points + 20 points of Should-haves.
**Release burnup** tracks progress toward the release (Ch 8).

## 10. Other planning techniques from the deck
- **MVP vs MMF (📘 p28, p44):**

| MVP (Minimum Viable Product) | MMF (Minimal Marketable Feature) |
|---|---|
| Small feature offered to customers to understand actual behaviour | Small, self-contained feature that delivers value to stakeholders |
| Focus on **LEARNING** | Focus on **EARNING** |
| Minimum set of features to get maximum feedback with minimum effort | Basic minimum feature so people can use it; has value on its own |
| Not market-driven; early deployable product for feedback | Market-driven; multiple MMFs make the whole product |
| Avoids unwanted features | Contains one or more user stories |
📘 "Finding the simplest and cheapest way to solve customer's problems"; "iterative and incremental approach helps in minimizing the distance to AWESOME!" (skateboard → scooter → bicycle → motorbike → car analogy, 📗 Henrik Kniberg).
```
 NOT like this:  wheel ─► chassis ─► car body ─► CAR      (useless until the end)
 LIKE this:      skateboard ─► scooter ─► bicycle ─► motorbike ─► CAR (useful every step)
```
- **Mind maps** (📘), **Pre-mortem** (📘: "a thought experiment where you imagine things failed and figure out what caused it"), **Wireframes** (low fidelity), **Spikes** (architectural spike: "run an experiment by creating a small, throwaway program").

## 11. Cases: SAP/ERP and CMMS (syllabus) 📗
### 11.1 SAP S/4HANA rollout with agile (SAP Activate)
- SAP's own methodology **SAP Activate** phases: **Discover → Prepare → Explore → Realize → Deploy → Run**. The **Realize** phase runs in **sprints** (typically 2–4 weeks) delivering configured business processes.
- Backlog items = business processes/user stories, e.g., "As an AP clerk, I want three-way match of PO, GRN and invoice so that I pay only for received goods."
- Fit-to-standard workshops replace long blueprint documents; demos to key users each sprint; hybrid: data migration and cut-over planned predictively.
- **Example epics (manufacturer):** Procure-to-Pay, Order-to-Cash, Plan-to-Produce, Record-to-Report. MoSCoW: Musts = statutory GST reporting, MRP; Coulds = advanced analytics dashboards.

### 11.2 CMMS (Computerized Maintenance Management System) implementation
- **Vision:** "Reduce unplanned downtime of the bottling plant by 30% in 12 months."
- **Backlog:** asset register; work-order creation; preventive maintenance (PM) scheduler; spare-parts inventory; mobile app for technicians; MTBF/MTTR dashboard.
- **Release 1 (MVP):** asset register + work orders + PM schedule for critical machines. **Release 2:** spares, mobile app. **Release 3:** predictive maintenance with IoT sensors.
- **Story:** "As a technician, I want to close a work order from my phone with a photo so that records are updated instantly."
- **Kanban** for daily maintenance work orders (To do → Assigned → In progress → Waiting for spares → Done; WIP limit per technician).

## 12. Q&A — Chapter 6

**Q1. ⭐⭐⭐ (10 marks) Explain product backlog, user stories and prioritisation techniques.** 
Backlog (definition, DEEP, iceberg diagram, refinement); user story (template, 3Cs, acceptance criteria, INVEST); prioritisation (MoSCoW table, Kano diagram, dot/100-point voting, risk-adjusted backlog). Example: food app.

**Q2. ⭐⭐ (5 marks) What is INVEST? Rewrite a poor user story into a good one.** 
Table §3 + example.

**Q3. (5 marks) Explain the 3 Cs of a user story.** 
Card, Conversation, Confirmation with example.

**Q4. ⭐⭐ (5 marks) Explain planning poker.** 
Steps, Fibonacci scale, why simultaneous reveal; Wideband Delphi.

**Q5. (5 marks) What is a story map? Draw one.** 
§5 diagram.

**Q6. (5 marks) Explain MoSCoW and Kano with examples.** 
§6.1, §6.2.

**Q7. (5 marks) Differentiate MVP and MMF.** 
Table §10 + skateboard analogy.

**Q8. (5 marks) How is release planning done? Team velocity is 30, release backlog 240 points, sprint length 2 weeks. When will the release be ready?** 
240 ÷ 30 = 8 sprints = 16 weeks (plus buffer).

**Q9. (5 marks) Explain how agile can be applied to an SAP/ERP or CMMS implementation.** 
§11.

**Q10. (2 marks each)** 
- Grouping features into small/medium/large → T-shirt sizing. 
- Made-up user with name and facts → Persona. 
- Imagine failure and find causes → Pre-mortem. 
- Backlog including threats → Risk-adjusted backlog.
