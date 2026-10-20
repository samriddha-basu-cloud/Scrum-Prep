# Chapter 9 — XP, Lean, Kanban and the Toyota Production System
Learning objective: "apply the frameworks associated with Agile, like Scrum, Kanban, and Lean." Not a separate syllabus unit, but **pp 26–48 of the faculty deck (about half of it) cover XP and Lean/Kanban**, and many answer-key questions come from here. Presentation Topic 14 (Toyota Production System) is also covered here.

> **Source key:** 📘 = faculty deck pp 11, 26–48 and answer keys. 📗 = textbooks (Kent Beck "XP Explained"; Poppendieck "Lean Software Development"; Ohno; Liker "The Toyota Way"; David Anderson "Kanban").
> Exam weight: ⭐⭐ for one-word/short-answer questions; ⭐⭐⭐ for Presentation Topic 14 (TPS).

---

## 1. Scrum vs XP vs Lean/Kanban (📘 p11)
| | Scrum | XP (Extreme Programming) | Lean / Kanban |
|---|---|---|---|
| Focus | **Project management** | **Design and architecture** (software development and programming) | **Process improvement** |
| Nature | Framework | Methodology (practices) | Lean = **mindset**; Kanban = **method** "to evolve to a better state tomorrow" |
| Iteration | Sprint 1–4 weeks | **Weekly cycle** (1-week iterations) + **quarterly cycle** | Continuous flow |
| Roles | PO, SM, Dev team | **No fixed or prescribed roles** (whole team) | None prescribed |
| Popularity | Most common | Second most popular | — |
📘 "Scrum and XP are complementary" (p26). When XP teams replace their planning practice with a complete, unmodified Scrum it's called **Hybrid** (📘).

---

## 2. Extreme Programming (XP) — "Embracing change" (📗 Kent Beck, 1996–99, Chrysler C3 project)
### 2.1 Iterative development (📘 p27)
- XP is an **iterative and incremental** methodology.
- Backlog is planned using the **quarterly cycle** (meet users once a quarter for long-term planning).
- XP teams plan work **a quarter at a time** and use **one-week iterations** (**weekly cycle** delivers the next increment of Done working software).
- **Slack** = giving the team "breathing room" by including optional/minor items that can be dropped.
- XP teams use **stories** to track requirements.

### 2.2 ⭐⭐ XP values (📘 p39) — "CRCFS"
**Courage, Respect, Communication, Feedback, Simplicity.**
- **Courage and Respect** keep fear out of the project; these two are **common values of Scrum and XP** (📘 p30).
- Communication: share knowledge; sit together; "when people value communication they don't mind a little chatter in the office".
- Feedback: frequent feedback keeps changes small.
- Simplicity: maximise work not done.

### 2.3 XP team practices (📘 p30–32)
- **Whole team:** everyone functioning as one team; built on **trust**; trust means **letting teammates make mistakes**.
- **Sit together:** teams work best when they sit together.
- **Informative workspace**, **osmotic communication**, **information radiators** (Ch 5).
- **Energized work:** relaxed, rested minds; ideas: leave yourself enough time, get rid of interruptions, let yourself make mistakes, work at a **sustainable pace**.
- **Specialists vs generalizing specialists:** "I"-shaped team creates hand-off and bottleneck issues; **"T"-shaped** team solves them.

### 2.4 XP teams embrace change (📘 p32)
Frequent feedback keeps changes small through: **iteration**, **integrating code**, **unit tests/automated tests**, **teammate review** ("Given enough eyeballs, all bugs are shallow" — Linus's Law).

### 2.5 ⭐⭐ Gulf of evaluation (📘 p33–36)
- The **gap between what was described and what was interpreted**.
- Knowledge-work projects have a greater gulf; a gap between requested and delivered features leads to **rework**.
- **Frequent verification and validation** ensures the team builds the right thing that works, not just what was described.
- **XP practices for frequent V&V (📘 p34):** **Pair programming, 10-minute build, Continuous integration, Test-driven development.**
- The gulf **reduces over iterations** as feedback accumulates.
```
 Gulf of evaluation
   ▲ ███
   │ ███ ██
   │ ███ ██ ▆
   │ ███ ██ ▆ ▄ ▂
   └──────────────────► Iterations 1 2 3 4 5
```
📘 V&V associated terms: build server, refactor, TDD, ATDD, automated build, fast failure, TFD (test-first development), pair programming. **Not** associated: WIP, TED, velocity, SME, relative sizing, EI, servant leader, ROI.

### 2.6 Key XP practices (📘 + 📗)
| Practice | Meaning |
|---|---|
| **Pair programming** | Two people at one computer: driver and navigator (📘 "Pair") |
| **Test-driven development (TDD)** | Write a failing unit test **first**, write code to pass, refactor ("red-green-refactor") |
| **Continuous integration** | Integrate and test code many times a day |
| **10-minute build** | Automated build and tests run in 10 minutes or less (📘) |
| **Refactoring** | "Improving the code structure without changing its behaviour" (📘); done constantly; fixes spaghetti code |
| **Incremental design** | Make design decisions at the last responsible moment; makes code easy to change (📘) |
| **Architectural spike** | Small throwaway program to test a technical approach (📘) |
| **Risk-based spike** | Experiment to determine impact of a specific risk (📘) |
| **Wireframes** | Keep them "low fidelity" (📘) |
| **Hack / kludge** | A clumsy quick-and-dirty solution (📘 one-word answers) — what XP avoids |
| **Rework** | Changing previously written code to function differently; risky (📘) |
| **Technical debt** | Work needed to make code more maintainable in the long term (📘) |
| **Habits** | "Better than discipline for making practices stick" (📘) |

### 2.7 📘 XP terms vs made-up terms
**XP terms:** iteration, sustainable pace, courage, simplicity, refactoring. **Made-up:** continuous interpretation, pear programming, sample design, small revisions, passion, execution game, remarketing, architectural spoke, complexity.

---

## 3. ⭐⭐ Lean — "Eliminating waste and managing flow"
### 3.1 Lean is a mindset (📘 p40)
- Lean does **not** have practices; it is a **mindset based on principles**.
- **Scrum and XP were developed with Lean in mind.** Lean is used to improve the way you work.
- Origin: **Toyota Production System** (§5). Lean Software Development by Mary & Tom Poppendieck (2003).

### 3.2 ⭐⭐ Seven Lean principles (📘 p40)
| # | Principle | Agile practice that implements it (📘 MTF key) |
|---|---|---|
| 1 | **Eliminate waste** | The evolving prototype is the specification (no heavy docs) |
| 2 | **Amplify learning** | Team retrospectives |
| 3 | **Decide as late as possible** | Just-in-time iteration planning ("defer decisions") |
| 4 | **Deliver as fast as possible** | Two-week iterations |
| 5 | **Empower the team** | Teams make their own decisions |
| 6 | **Build quality in** | Unit test as we go |
| 7 | **See and optimize the whole** | Shadow the users to learn what they do |

### 3.3 ⭐⭐ Seven wastes of software development (📘 p42) and their manufacturing origin
| Software waste (📘, Poppendieck) | Manufacturing waste (📗, Ohno's TIMWOOD) | Example |
|---|---|---|
| **Partially done work** | Inventory | Code written but not tested/deployed |
| **Extra processes** | Over-processing | Unneeded approvals, documents nobody reads |
| **Extra features** | Over-production | Gold plating; features users don't use |
| **Task switching** | Transportation (of work between people/contexts) | Developer on 4 projects at once (📘 "trying to do too many things at once") |
| **Waiting** | Waiting | Waiting for approval, test environment |
| **Motion** | Motion | Searching for info, walking to another building to ask a question |
| **Defects** | Defects | Bugs causing rework |
📗 An 8th waste often added: unused talent/skills. Japanese: **Muda** (waste), **Mura** (unevenness), **Muri** (overburden).

### 3.4 Lean thinking tools (📘 p43)
**Seeing waste; Value stream mapping; Queuing theory; Pull systems; Options thinking; Cost of delay; Cycle time; Lead time; Flow efficiency = Cycle time ÷ Lead time.**
- **Value stream mapping:** map every step from request to delivery; mark value-adding vs waiting time to find waste (📘 "map of the **value** stream to find out how much time is spent waiting").
```
 Request ─► [Approve 2d wait] ─► Design 1d ─► [Wait 3d] ─► Build 2d ─► [Wait QA 4d] ─► Test 1d ─► Release
 Value-adding time = 1 + 2 + 1 = 4 days;   Total lead time = 2+1+3+2+4+1 = 13 days
 Process efficiency (📗) = 4 / 13 ≈ 31%   → attack the waits!
```
- **Queuing theory:** analyse how work flows through the system (📘); long queues increase lead time.
- **Options thinking:** keep choices open until the last responsible moment (📘).
- **Systems thinking (📘 p46):** each person's work is part of a bigger system; "see the whole"; remove **local optimizations** — making each individual more productive gets in the way of the team.

### 3.5 ⭐⭐ Lean tool — 5S (📘 p41–42)
| S | Japanese | Meaning (📘) |
|---|---|---|
| **Sort** | Seiri | Sort all tools and materials (remove what's not needed) |
| **Straighten / Set in order** | Seiton | Organize based on size; remove if not required |
| **Shine** | Seiso | Keep work area clean |
| **Standardize** | Seiketsu | Keep label; **RACI charts are useful** |
| **Sustain** | Shitsuke | Put back in place; maintain discipline |
**5S benefits (📘):** safety; identify and eliminate waste; low cost, high impact; gets everyone involved; adherence to standards is key to Kaizen.
**Software 5S example:** sort (delete dead code, unused branches), straighten (folder structure, naming), shine (fix warnings, clean backlog), standardize (coding standards, DoD), sustain (code reviews, CI checks).

### 3.6 Kaizen (📘 p44–45)
Kaizen = continuous improvement; "KAIZEN = Retrospectives in Agile"; PDCA (Kaizen) vs PDEL (Agile); Agile's Kaizen layers: pair programming, daily stand-up, demo/review/retrospective, product release. (Details in Ch 7.)

### 3.7 Pull system (📘 p46–47)
- Traditional projects **push** work through their systems; Lean teams use a **pull system**: "the later step in the process pulls work from the previous step" (📘 → **Pull system**).
- Lean teams establish a **WIP limit** for each step.
- **Kanban** is a method for improving process that implements pull systems.
```
 PUSH:  Step A ──pushes──► Step B ──pushes──► Step C      (queues pile up before slow steps)
 PULL:  Step A ◄──pulls─── Step B ◄──pulls─── Step C ◄─── customer demand  (work moves only when there's capacity)
```

---

## 4. ⭐⭐ Kanban (📘 p47)
- **Kanban means "signal card" in Japanese.** Kanban uses a pull system to make the process better. Lean is the mindset; Kanban is the method to improve the process.
- **Core practices (📘):**
  1. **Visualize workflow** (Kanban board)
  2. **Limit WIP**
  3. **Manage flow** (measure lead/cycle time, CFD)
  4. **Make process policies explicit** (e.g., DoD per column)
  5. **Implement feedback loops** (stand-ups, reviews)
  6. **Improve collaboratively, evolve experimentally** (📘 crossword: "EVOLVE")
- 📗 Kanban principles (David Anderson): start with what you do now; agree to pursue incremental, evolutionary change; respect current roles and responsibilities; encourage leadership at all levels.
- Kanban board, WIP limits, highway analogy, task board comparison → [Chapter 5](ch05-scrum-teams-roles-team-space.md). CFD → [Chapter 8](ch08-progress-tracking-burndown-burnup-cfd.md).

---

## 5. ⭐⭐⭐ Toyota Production System (TPS): the foundation of Lean, Agile and Scrum (Presentation Topic 14) 📗
### 5.1 Origin
- Developed at **Toyota, Japan (1948–1975)** by **Taiichi Ohno** and **Eiji Toyoda**, building on **Sakichi Toyoda**'s automatic loom (jidoka) and **Kiichiro Toyoda**'s just-in-time idea.
- Post-war Japan had scarce capital, small markets and needed variety → could not copy Ford's mass production; so Toyota focused on **eliminating waste** and **flow**.
- Western name **"Lean"** coined by John Krafcik (1988) and popularised by Womack, Jones & Roos, *The Machine That Changed the World* (1990).

### 5.2 ⭐⭐⭐ The TPS House
```
                         ┌────────────────────────────────────────┐
                        ╱   GOAL: Highest quality, lowest cost,   ╲
                       ╱    shortest lead time, safety, morale     ╲
                      └────────────────────────────────────────────┘
           ┌─────────────────────┐                  ┌──────────────────────┐
           │  PILLAR 1:          │   PEOPLE &       │  PILLAR 2:           │
           │  JUST-IN-TIME (JIT) │   TEAMWORK       │  JIDOKA              │
           │ • Takt time         │   (respect for   │ (automation with a   │
           │ • Continuous flow   │    people,       │  human touch)        │
           │ • Pull system /     │    continuous    │ • Stop at abnormality│
           │   Kanban            │    improvement)  │ • Andon cord         │
           │                     │                  │ • Poka-yoke          │
           │                     │                  │ • Separate man/machine│
           └─────────────────────┘                  └──────────────────────┘
      ┌──────────────────────────────────────────────────────────────────────┐
      │  FOUNDATION: Heijunka (levelled production) · Standardized work ·    │
      │              Kaizen (continuous improvement) · Stability · 5S        │
      └──────────────────────────────────────────────────────────────────────┘
      Underlying philosophy: The Toyota Way — Continuous Improvement + Respect for People
```

### 5.3 Key TPS concepts
| TPS concept | Meaning |
|---|---|
| **Just-in-Time (JIT)** | Make only what is needed, when needed, in the amount needed |
| **Kanban** | Signal card that authorises production/movement → pull system |
| **Jidoka** | "Automation with a human touch": machines/people stop when a defect occurs |
| **Andon** | Cord/light any worker can pull to stop the line when a problem appears |
| **Poka-yoke** | Mistake-proofing devices |
| **Heijunka** | Levelling production volume and mix |
| **Takt time** | Available time ÷ customer demand (pace of production) |
| **Kaizen** | Continuous, small improvements by everyone |
| **Genchi genbutsu / Gemba** | "Go and see" the actual place where work happens |
| **Muda, Mura, Muri** | Waste, unevenness, overburden |
| **5 Whys** | Ask "why" five times to reach the root cause (Ohno) |
| **Hansei** | Self-reflection |
| **Respect for people** | Workers are problem-solvers, not cogs |

### 5.4 ⭐⭐⭐ How TPS shaped Lean, Agile and Scrum (mapping table)
| TPS / Lean concept | Agile / Scrum equivalent |
|---|---|
| Kanban card, pull system | Kanban board, WIP limits; team **pulls** stories in sprint planning |
| Just-in-time | Just-in-time planning; last responsible moment; backlog refinement |
| Jidoka / Andon (stop the line) | Stop and fix broken builds immediately (CI); impediments raised in daily scrum; Definition of Done |
| Poka-yoke | Automated tests, TDD, CI checks |
| Kaizen | **Sprint retrospective** ("Agile's own Kaizen"); PDCA → PDEL |
| Hansei (reflection) | Retrospective, Principle 12 |
| Elimination of muda (7 wastes) | 7 wastes of software (partially done work, extra features…); Principle 10 Simplicity |
| Muri (overburden) | Sustainable pace (Principle 8), energized work |
| Heijunka (levelled flow) | Fixed-length sprints, stable velocity, steady cadence |
| Gemba (go and see) | Sprint review with real users; "shadow the users" |
| Visual management (andon boards) | Information radiators, task boards, burndown |
| Respect for people, teamwork | Self-organising, cross-functional teams; Scrum value Respect |
| Multi-skilled workers | T-shaped team members |
| Standardized work | Definition of Done, working agreements |
| 5 Whys | Generate insights stage in retrospectives (fishbone, 5 Whys) |
- **Direct link to Scrum:** Takeuchi & Nonaka's 1986 HBR paper "The New New Product Development Game" studied Japanese firms (Honda, Canon, Fuji-Xerox) using overlapping, rugby-style, self-organising teams. **Jeff Sutherland and Ken Schwaber took the name "Scrum" from this paper.** Sutherland has said Scrum was also inspired by TPS practices.
- **Poppendiecks** (2003) translated TPS principles into the 7 Lean software principles (§3.2).

### 5.5 Results and lessons
- Toyota became one of the world's largest and most profitable automakers, known for quality (Lexus) and short lead times.
- Lesson: tools (Kanban, andon) only work with the **culture** (respect, kaizen). Same for Agile: practices fail without the mindset.
- **Indian adoption:** Maruti Suzuki, TVS Motor (Deming Prize winner), Toyota Kirloskar (Bidadi) apply TPS/Lean on shop floors.

---

## 6. Q&A — Chapter 9

**Q1. ⭐⭐⭐ (10 marks) Explain how the Toyota Production System laid the foundation for Lean, Agile and Scrum.** 
Origin (Ohno, post-war constraints); TPS house diagram; key concepts; mapping table §5.4; Takeuchi–Nonaka link to Scrum; Poppendieck principles; conclusion on culture.

**Q2. ⭐⭐ (5 marks) Explain the seven Lean principles with an agile practice for each.** 
Table §3.2.

**Q3. ⭐⭐ (5 marks) List and explain the seven wastes of software development.** 
Table §3.3 with manufacturing parallels.

**Q4. (5 marks) Explain 5S with a software example.** 
§3.5.

**Q5. (5 marks) What is a pull system? Contrast with push.** 
§3.7 with diagram; WIP limits; Kanban.

**Q6. (5 marks) Explain XP values and practices for frequent verification and validation.** 
CRCFS; pair programming, 10-minute build, CI, TDD; gulf of evaluation.

**Q7. (5 marks) What is the gulf of evaluation? How do agile teams reduce it?** 
§2.5.

**Q8. (5 marks) Compare Scrum, XP and Lean/Kanban.** 
Table §1.

**Q9. (5 marks) What is value stream mapping? Calculate process efficiency for a given stream.** 
§3.4 example.

**Q10. (2 marks each)** 
- Kanban means → signal card. 
- Japanese word for continuous improvement → Kaizen. 
- Lean is a ___, not a methodology → mindset. 
- XP iteration length → weekly. 
- TDD means writing unit tests → first. 
- Waste of doing too many things at once → task switching.
