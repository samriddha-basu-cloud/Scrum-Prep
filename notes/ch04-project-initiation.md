# Chapter 4 — Project Initiation
Syllabus Unit 4 (4.5 hrs): project initiation overview; determine project justification and metrics; provide value-driven delivery; write project vision statement; create project charter; responsibility matrix; identify stakeholders and leader/coach; form project team based on organisational requirement; case studies with project charter.

> **Source key:** 📘 = faculty deck p15 ("Assessing value"), p41 (RACI), p25–26 (team stages). 📗 = textbook (PMI-ACP, Schwaber, K R Sharma). Most of this unit is not in the uploaded slides, so much of it is 📗.
> Exam weight: ⭐⭐ (short notes on charter, vision, RACI, NPV/ROI are common).

---

## 1. Initiation overview: where it sits
```
 IDEA ─► JUSTIFY (business case, metrics) ─► VISION ─► CHARTER ─► STAKEHOLDERS ─► TEAM ─► Release planning (Ch 6)
```
In Agile, initiation is **light but real**: enough to get authorisation and shared direction; details emerge later (progressive elaboration).

## 2. ⭐⭐ Determine project justification and metrics (📘 p15 "Assessing value")
Faculty list: **Pay-back period, Present Value (PV), Net Present Value (NPV), Return on Investment (ROI), Internal Rate of Return (IRR), Earned Value / EVM.**

| Metric | Formula | Decision rule |
|---|---|---|
| **Payback period** | Time until cumulative inflows = investment | Shorter is better |
| **PV** | FV ÷ (1 + r)^n | Today's value of a future amount |
| **NPV** | Σ CFt ÷ (1+r)^t − initial investment | Accept if NPV > 0; higher is better |
| **ROI** | (Net benefit ÷ cost) × 100 | Higher is better |
| **IRR** | Discount rate at which NPV = 0 | Accept if IRR > cost of capital |
| **EVM** | CPI = EV/AC; SPI = EV/PV | CPI, SPI ≥ 1 is good |

**Worked example (📗):** Investment ₹10 lakh; inflows ₹4 lakh/yr for 3 years; r = 10%.
- PV of inflows = 4/1.1 + 4/1.21 + 4/1.331 = 3.636 + 3.306 + 3.005 = **₹9.947 lakh** → **NPV = −₹0.053 lakh** (reject at 10%; marginal).
- Payback = 10 ÷ 4 = **2.5 years**. ROI (undiscounted) = (12 − 10)/10 = **20%**. IRR ≈ **9.7%** (< 10%).

**Agile EVM (📗):** Planned % complete = sprints done ÷ total sprints; actual % complete = points done ÷ total points; EV = actual % × budget.

**Agile metrics for justification:** business value delivered per sprint, time-to-market, customer satisfaction (NPS), cycle time, velocity trend.

## 3. ⭐⭐ Value-driven delivery 📗
- Deliver the **highest-value, highest-risk** items first so value is realised early and risk falls early.
- Tools: MoSCoW, Kano, MVP/MMF, **risk-adjusted backlog** (📘 p37; see Ch 6), incremental delivery.
- **Minimize waste** (Lean 7 wastes), **fail fast** (📘 p37: cheap early failure).
```
  Value
   ▲          ●──●──● Agile (value accrues every sprint)
   │       ●
   │    ●                       ┌── Traditional (value only at go-live)
   │ ●                          │
   └─────────────────────────────┴──► Time
```

## 4. ⭐⭐ Write the project vision statement 📗
A short, inspiring statement of **what** the product is, **for whom**, and **why it matters**. Agile tools:

**Geoffrey Moore's elevator-pitch template**
> **For** (target customer) **who** (need), **the** (product name) **is a** (category) **that** (key benefit). **Unlike** (competitor), **our product** (differentiator).

Example: "**For** busy SIOM students **who** struggle to track events, **CampusConnect** **is a** mobile app **that** shows all club events and lets you register in one tap. **Unlike** WhatsApp groups, **our product** sends reminders and keeps a single calendar."

Other tools: **Product vision box** (design the product's box: name, slogan, 3–4 selling points), **Press release / PR-FAQ** (Amazon "working backwards"), **Product vision board** (Roman Pichler: target group, needs, product, business goals).

## 5. ⭐⭐ Create the project charter
**Charter** = document that **formally authorises** the project and gives the PM/Scrum team authority to use resources. Issued by the **sponsor**.

**Agile charter (📗) — W5H:** Who (team, stakeholders), What (vision, goals), Where (location/working agreements), When (timeline, release dates), Why (business case), How (Scrum, cadence, DoD).

**Sample agile charter: College Fest 2026 (case study)**
| Section | Content |
|---|---|
| Project name | "Symphony 2026" annual fest |
| Sponsor | Director, SIOM |
| Vision | "Best inter-college fest in Pune, with 5,000 footfall and zero safety incidents" |
| Objectives (SMART) | 5,000 attendees; ₹8 lakh sponsorship by 15 Dec; 20 events; budget ≤ ₹12 lakh |
| Scope (in) | Cultural, technical, sports events; sponsorship; marketing; logistics |
| Scope (out) | Accommodation for outside participants |
| Approach | Scrum, 1-week sprints over 8 weeks; daily 10-min stand-up; Sunday review/retro |
| Roles | PO: Student Council President; Scrum Master: Fest Coordinator; Dev teams: event, sponsorship, marketing squads |
| Milestones / releases | R1 sponsorship deck (wk 2), R2 website + registrations (wk 4), R3 event schedule (wk 6), Fest day (wk 8) |
| Budget | ₹12 lakh (sponsorship + college grant) |
| Risks | Rain (backup indoor venue), sponsor dropout, permissions |
| Success criteria | Footfall, sponsorship raised, feedback score ≥ 4/5 |
| Definition of Done (sample) | Task approved by PO, vendor confirmed in writing, budget updated |
| Sign-off | Sponsor, PO |

## 6. ⭐⭐ Responsibility assignment matrix — RACI (📘 p41 "Standardize: RACI charts are useful")
- **R – Responsible:** does the work. **A – Accountable:** owns the outcome, approves (only one A per task). **C – Consulted:** gives input (two-way). **I – Informed:** kept updated (one-way).

Example (fest):
| Task | Student President (PO) | Fest Coordinator (SM) | Sponsorship team | Faculty advisor |
|---|---|---|---|---|
| Sponsorship deck | A | C | R | I |
| Venue booking | C | A | I | R |
| Event schedule | A | R | I | C |
| Budget approval | R | C | I | A |

Note: Agile teams self-organise, so RACI is used mostly at stakeholder level, not for assigning tasks within the Scrum team. The faculty uses RACI under 5S "Standardize".

## 7. ⭐ Identify stakeholders and leader/coach 📗
1. **Identify:** brainstorm, org charts, past projects; stakeholder register (name, role, interest, influence).
2. **Analyse:** power–interest grid
```
 Power ▲  Keep satisfied   │  Manage closely
       │  (Director)       │  (Sponsor, PO, key client)
       ├───────────────────┼────────────────────
       │  Monitor          │  Keep informed
       │  (Vendors)        │  (Students, users)
       └───────────────────┴──────────────────► Interest
```
3. **Engage:** invite to sprint reviews; information radiators; PO as single voice.
- **Leader/coach:** in Scrum, the **Scrum Master** is the servant leader/agile coach (Ch 5). Coaching happens at individual and team level (📘 p25).

## 8. ⭐⭐ Form the project team based on organisational requirement
- **Cross-functional** (all skills needed to deliver a Done increment), **small** (📗 Scrum Guide: 10 or fewer people; classic guidance 7 ± 2), **dedicated**, **co-located** where possible, **T-shaped** members (📘 p31: "I-shaped" specialists create hand-off and bottleneck issues; "T-shaped" generalizing specialists solve them).
- Choose roles: who is PO (has business authority), SM (facilitation skills), developers.
- **Team development stages (📘 p25–26, Tuckman):**

| Stage | 📘 Description | Direction | Emotional support | Leadership style (📘 match key) |
|---|---|---|---|---|
| **Forming** | A working group learning about each other | High | Low | **Directing** |
| **Storming** | Pseudo-team challenging each other, developing into a potential team | High | High | **Coaching** |
| **Norming** | Potential team working with each other, developing into a real team | Low | High | **Supporting** |
| **Performing** | Real team working as one, becoming high-performing | Low | Low | **Delegating** |
| **Adjourning** | Team disbands at project end | — | — | — |
```
 Performance
   ▲                                  ● Performing
   │                       ● Norming
   │  ● Forming
   │            ● Storming (dip)
   └──────────────────────────────────────► Time
```
- **Shu-Ha-Ri (📘 p24, agile team stages):** **Shu** — follow a single master (follow rules); **Ha** — learn from multiple masters (adapt); **Ri** — create own approaches (transcend).

## 9. Q&A — Chapter 4

**Q1. ⭐⭐ (5 marks) What is a project charter? Prepare an agile charter for a college event.** 
Definition (formal authorisation by sponsor), W5H, then the table in §5.

**Q2. (5 marks) Explain the metrics used to justify a project.** 
Payback, PV, NPV, ROI, IRR, EVM with formulas; work a small numeric example.

**Q3. (5 marks) A project costs ₹5 lakh and returns ₹2 lakh per year for 3 years. Discount rate 8%. Find payback and NPV.** 
Payback = 2.5 years. PV = 2/1.08 + 2/1.1664 + 2/1.2597 = 1.852 + 1.715 + 1.588 = 5.155 → NPV = **+₹0.155 lakh** → accept.

**Q4. (5 marks) What is a RACI matrix? Give an example.** 
§6; one A per task; example table.

**Q5. (5 marks) How do you write a product vision statement? Give an example.** 
Moore's template + example + vision box/PR-FAQ.

**Q6. ⭐⭐ (5 marks) Explain team development stages and matching leadership styles.** 
Tuckman table from 📘 with directing/coaching/supporting/delegating; add Shu-Ha-Ri.

**Q7. (5 marks) What is value-driven delivery?** 
Deliver highest value and risk first; early ROI; tools (MoSCoW, risk-adjusted backlog, MVP).

**Q8. (2 marks) I-shaped vs T-shaped team members?** 
I-shaped = deep in one skill → hand-offs/bottlenecks; T-shaped = deep in one + broad in others → flexible, fewer bottlenecks.
