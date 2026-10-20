# Chapter 8 — Progress Tracking: Burndown, Burnup, Cumulative Flow Diagrams, Kanban Charts
Syllabus Unit 7 (part 2): progress tracking, monitoring and controlling — burndown and burnup charts, cumulative flow diagrams, Kanban charts; communicating information.

> **Source key:** 📘 = faculty deck pp 18, 20–21, 43, 47–48 and answer keys. 📗 = textbooks (PMI-ACP, Kanban literature).
> ⭐⭐⭐ **Important Topic 4** (Burndown and Burnup) and ⭐⭐⭐ **Important Topic 5** (Cumulative Flow Diagrams). Also Presentation Topic 10. **Practise drawing all three charts; numeric questions are common.**

---

## 1. Why track progress in Agile?
- **Transparency** (Scrum pillar): everyone sees the real state of work.
- **Inspect and adapt:** detect slippage early; re-plan scope.
- Agile measures progress by **completed (Done) work**, not hours spent (Principle 7).
- Charts are **information radiators** (Ch 5) posted in the team space.

---

## 2. ⭐⭐⭐ Burndown chart
📘 "The burndown chart is a great tool for helping you to figure out how much work is left to do, and get a pretty good sense of whether or not you'll finish all of the work planned for the sprint." 📘 MTF: "A burndown chart is a line chart, updated daily, that tracks the amount of work left on the project, 'burning' down to zero when the work is done." Answer key: "Chart that tracks the amount of work left on a project" → **Burndown**; y-axis labelled **story points**.

### Anatomy
- **X-axis:** time (days of the sprint, or sprints of a release).
- **Y-axis:** **remaining** work (story points, or task hours).
- **Ideal line:** straight line from total work on Day 0 to zero on the last day.
- **Actual line:** remaining work plotted each day.

### Worked example — 10-day sprint, 40 story points
| Day | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Ideal remaining | 40 | 36 | 32 | 28 | 24 | 20 | 16 | 12 | 8 | 4 | 0 |
| Actual remaining | 40 | 40 | 37 | 34 | 34 | 28 | 24 | 18 | 13 | 6 | 0 |
```
 Story points remaining      ● = actual (rounded to grid)   · = ideal
 40 │  ●    ●
 36 │       ·    ●
 32 │            ·    ●    ●
 28 │                 ·         ●
 24 │                      ·         ●
 20 │                           ·
 16 │                                ·    ●
 12 │                                     ·    ●
  8 │                                          ·    ●
  4 │                                               ·
  0 │                                                    ●
    └───────────────────────────────────────────────────────
      0    1    2    3    4    5    6    7    8    9    10    Day
```
Actual stays **above** the ideal line from Day 1 to Day 9 = behind schedule; the flat stretch on Days 3–4 means nothing was finished; the team catches up only at the end.

### How to read a burndown
| Pattern | Meaning | Action |
|---|---|---|
| Actual **above** ideal | Behind schedule | Remove impediments; discuss scope with PO |
| Actual **below** ideal | Ahead of schedule | Pull extra item from backlog (with PO) |
| **Flat** line for days | No work being finished (blocked, or stories too big, or not updated) | Split stories; swarm; check impediments |
| Line goes **up** | Scope added mid-sprint or re-estimation | Protect sprint goal; investigate |
| Cliff at the end | Work marked Done only at the end (mini-waterfall) | Finish stories one at a time |
| Hits zero early repeatedly | Team under-committing | Increase commitment using velocity |

### Types
- **Sprint burndown:** remaining work in the current sprint (daily).
- **Release burndown:** remaining story points in the release (per sprint).
- **Risk burndown (📘 MTF):** "total daily estimated impact of problems, issues and threats."

### Advantages and limitations
- ✅ Simple, visual, daily; forecasts completion; exposes problems early; motivates team.
- ❌ **Hides scope change** — if 10 points are added and 10 completed, the line stays flat; you cannot tell whether the team worked or not. This is why burnup charts exist. Does not show which items are done; easy to misread if not updated daily.

---

## 3. ⭐⭐⭐ Burnup chart
📘 Slide title: "**Burn-ups keep progress and scope separate**." Answer key: "**Burnup** charts track scope and completed story points on different lines."

### Anatomy
- **X-axis:** time (days/sprints).
- **Y-axis:** story points.
- **Scope line (total work):** total points in the sprint/release; moves up or down when scope changes.
- **Completed (work done) line:** cumulative points completed; rises over time.
- Work is done when the completed line meets the scope line. The gap between the lines = remaining work.

### 📘 Faculty example (p21) — 10-day sprint
- Sprint started with **28** story points in the sprint backlog.
- **Day 4:** work added → total **32** points.
- **Day 7:** 2 points removed → total **30** points.
- Completed line: about 3, 6, 8, 14, 17, 19, 19, 19, 23, 30 → meets scope on Day 10.
```
 Story points        ━ = scope line   ● = completed (cumulative)
 32 │                    ━━━━  ━━━━  ━━━━
 30 │                                      ━━━━  ━━━━  ━━━━   ●
 28 │  ━━━━  ━━━━  ━━━━
 26 │
 24 │                                                   ●
 22 │
 20 │                                 ●     ●     ●
 18 │
 16 │                           ●
 14 │                     ●
 12 │
 10 │
  8 │               ●
  6 │         ●
  4 │   ●
  2 │
  0 │
    └────────────────────────────────────────────────────────────
       D1    D2    D3    D4    D5    D6    D7    D8    D9    D10   
```
The flat completed line on Days 6–8 shows a stall that a burndown might have masked if scope changed at the same time.

### How to read a burnup
| Pattern | Meaning |
|---|---|
| Scope line rising | Scope creep / new requirements added |
| Scope line falling | Items descoped |
| Completed line flat | Team not finishing work (blocked) |
| Gap narrowing | On track to finish |
| Lines diverging | Scope growing faster than delivery → release date at risk |
| Projected completed trend crossing scope | Forecast completion date |

---

## 4. ⭐⭐⭐ Burndown vs Burnup
| Basis | Burndown chart | Burnup chart |
|---|---|---|
| Shows | Work **remaining** | Work **completed** and **total scope** |
| Lines | One actual line (+ ideal) | Two lines: scope and completed (+ optional ideal) |
| Direction | Slopes **down** to zero | Completed line slopes **up** to scope line |
| Scope change | **Hidden** (mixed into the remaining line) | **Visible** as separate scope line (📘 "keeps progress and scope separate") |
| Best for | Sprint-level daily tracking | Release-level tracking; projects with changing scope |
| Simplicity | Simpler | Slightly more complex but more informative |
| Question answered | "Will we finish the sprint?" | "How much is done, how much did scope change, when will we finish?" |
| Example | 40 → 0 points in 10 days | Scope 28→32→30; completed 0→30 |

---

## 5. ⭐⭐⭐ Cumulative Flow Diagram (CFD)
### What it is
A **stacked area chart** showing, for each day, the **cumulative number of work items in each workflow state** (e.g., Backlog/To Do, In Progress (Dev), Testing, Done). Used mostly with **Kanban**, also in Scrum. 📗 It is a "burnup with bands": the top line shows total scope, the bottom band is Done.

### Anatomy
- **X-axis:** time (days).
- **Y-axis:** cumulative count of work items (or points).
- **Bands:** one coloured band per workflow state, stacked (Done at the bottom, To Do at the top).
- **Vertical distance** between band edges at a date = **WIP** (work in progress) in that stage.
- **Horizontal distance** across a band = **approximate cycle time / lead time** for items.
- **Top line** = total scope (arrivals); **bottom (Done) line** = throughput (departures).

### Worked example (items in each state, cumulative)
| Day | Done | Test | Dev | To Do | Total |
|---|---|---|---|---|---|
| 1 | 0 | 1 | 3 | 16 | 20 |
| 3 | 2 | 2 | 4 | 12 | 20 |
| 5 | 4 | 3 | 5 | 10 | 22 |
| 7 | 7 | 3 | 4 | 8 | 22 |
| 10 | 12 | 3 | 4 | 5 | 24 |
```
 Cumulative items
 24 │                                   ░░░░░░░░  ← total scope (top line rising = scope added)
 22 │                 ░░░░░░░░░░░░░░░░░░░░░░░░░░
 20 │░░░░░░░░░░░░░░░░░░░ TO DO ░░░░░░░░░░░░▒▒▒▒▒
    │░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   ▒ DEV (In progress)
 15 │░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓
    │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ▓ TEST
 10 │▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████████
    │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█████████████████████   █ DONE
  5 │▓▓▓▓▓▓▓▓▓▓▓████████████████████████████████
    │█████████████████████████████████████████████
  0 └──────┬──────┬──────┬──────┬──────┬──────┬── Day
           2      4      6      8     10
           │◄──── horizontal = cycle time ────►│     vertical thickness of a band = WIP in that stage
```

### ⭐⭐⭐ How to interpret a CFD
| Pattern | Meaning | Action |
|---|---|---|
| Bands **parallel**, steady thickness | Stable, healthy flow | Keep going |
| A band **widening** (e.g., Test getting thicker) | **Bottleneck** in that stage: work arriving faster than leaving | Apply/lower WIP limit; swarm on testing; add capacity |
| A band **narrowing** to nothing | Upstream starvation; stage waiting for work | Check upstream; balance capacity |
| **Flat** bands (no rise in Done) | Work stopped; blocked | Investigate impediments |
| **Top line rising** sharply | Scope growth / new requests arriving | Prioritise, negotiate scope |
| **Steep Done band** | High throughput | Good |
| Stair steps in Done | Batch releases (work done in big chunks) | Move toward smaller, continuous delivery |

### Key flow metrics (📘 p43 Lean thinking tools)
- **Lead time:** time from when a request enters the system (customer asks) to delivery.
- **Cycle time:** time from when work actually starts to when it is done.
- **Flow efficiency (📘 formula):** **Cycle time ÷ Lead time**. 📗 (Many books define flow efficiency = active work time ÷ lead time; follow the faculty formula in this course's exam, and mention the alternative if space allows.)
- **WIP:** number of items started but not finished.
- **Throughput:** items finished per unit time.
- **Little's Law (📗):** **Average cycle time = Average WIP ÷ Average throughput.** Example: WIP 12 items, throughput 3 items/day → cycle time = 4 days. Reducing WIP to 6 → 2 days. This is why WIP limits speed up delivery.
```
 Customer request ──wait──► Work starts ─────── work ───────► Delivered
 │◄──────────────────────── LEAD TIME ──────────────────────────────►│
                            │◄──────────── CYCLE TIME ──────────────►│
```

### Benefits of CFD
Shows bottlenecks early, WIP trends, scope growth, lead/cycle time, predictability; supports Kanban "manage flow" practice; great information radiator.

---

## 6. ⭐⭐ Kanban charts / boards as tracking tools (📘 p47–48)
- **Kanban board** (Ch 5) shows **current** state of flow; **CFD** shows **history** of that board over time.
- **Control chart (📗):** plots cycle time of each completed item; shows predictability and outliers.
- **Lead-time histogram / throughput run chart (📗).**
- 📘 "Optimize throughput, not resource utilization" (busy highway vs free highway).

## 7. Other monitoring metrics (📗)
| Metric | Meaning |
|---|---|
| **Velocity** | Points completed per sprint (📘); used for forecasting |
| **Velocity chart** | Bar chart of committed vs completed points per sprint |
| **Escaped defects** | Bugs found after release |
| **Sprint goal success** | % sprints meeting goal |
| **Agile EVM** | CPI/SPI based on points completed vs planned |
| **Niko-niko calendar** | Team mood each day |
| **Parking lot chart** | Status of feature groups by colour |

## 8. Communicating information (syllabus)
Information radiators (big visible charts), daily stand-ups, sprint reviews with stakeholders, release burnup shared with sponsors, digital dashboards (Jira, Azure DevOps, MS Project agile views — see Ch 10), **osmotic communication**, avoid "information refrigerators" (data hidden in tools no one opens).

---

## 9. Q&A — Chapter 8

**Q1. ⭐⭐⭐ (10 marks) Explain burndown and burnup charts with diagrams. Which is better when scope changes and why?** 
Definitions (📘 quotes), axes, ideal vs actual, draw both, reading patterns, comparison table §4. Conclude: burnup is better with changing scope because it keeps progress and scope separate.

**Q2. ⭐⭐⭐ (10 marks) What is a cumulative flow diagram? How does it help identify bottlenecks?** 
Definition, axes, bands, draw CFD, vertical = WIP, horizontal = cycle time, widening band = bottleneck, Little's Law, lead vs cycle time, benefits.

**Q3. (5 marks) Draw a sprint burndown from this data and interpret:** 10-day sprint, 50 points; remaining at day end: 50, 48, 45, 45, 45, 38, 30, 22, 15, 8, 0. 
Ideal drops 5/day. Actual above ideal from Day 2 (flat Days 3–4 = blocked or not updated), still behind on Day 9 (8 vs 5), catches up on the last day — likely work marked Done in a rush at the end; discuss in retrospective.

**Q4. (5 marks) A release starts with 120 points. After sprint 3, 60 points are done but 20 new points were added. Show on a burnup and forecast.** 
Scope line 120 → 140; completed 60 after 3 sprints → velocity 20; remaining 80 → 4 more sprints (total 7), if no more scope is added.

**Q5. (5 marks) Using Little's Law, if a team has 20 items in progress and completes 4 per day, what is the average cycle time? What happens if WIP is limited to 8?** 
20 ÷ 4 = 5 days; 8 ÷ 4 = 2 days (assuming the same throughput).

**Q6. (5 marks) Lead time vs cycle time; define flow efficiency.** 
§5 with diagram; faculty formula = cycle time ÷ lead time.

**Q7. (2 marks each)** 
- Y-axis of burndown → story points (remaining). 
- Chart that tracks scope and completed work on different lines → burnup. 
- A widening band in a CFD indicates → bottleneck. 
- Flat burndown line → no work completed / blocked / not updated.
