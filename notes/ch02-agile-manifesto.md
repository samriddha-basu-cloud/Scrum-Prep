# Chapter 2 — The Agile Manifesto: 4 Values and 12 Principles
Syllabus Unit 2 (3 hrs): Agile Manifesto, manifesto contributors, manifesto values, manifesto principles, cases with Agile in manufacturing and service industries.

> **Source key:** 📘 = faculty deck "The Agile Way of Leading Projects to SUCCESS" (pp 11–15) and answer keys. 📗 = textbook/other sources.
> ⭐⭐⭐ **Important Topic 1** (4 values + 12 principles; "with 6 at least" means you must be able to explain at least 6 principles in detail). Also Presentation Topics 2, 3, 4, 5.

---

## 1. Background: how the Manifesto came about (📗)
- **February 2001**, the **Snowbird ski resort, Wasatch mountains, Utah, USA** (📘 crossword answer: "Where the original authors got together" → **SNOWBIRD**).
- **17 software practitioners** ("organisational anarchists") representing "lightweight" methods (Scrum, XP, DSDM, Crystal, FDD, Adaptive Software Development, Pragmatic Programming) met to find common ground as an alternative to heavyweight, documentation-driven processes.
- **Contributors (17 signatories):** Kent Beck, Mike Beedle, Arie van Bennekum, Alistair Cockburn, Ward Cunningham, Martin Fowler, James Grenning, Jim Highsmith, Andrew Hunt, Ron Jeffries, Jon Kern, Brian Marick, Robert C. Martin ("Uncle Bob"), Steve Mellor, Ken Schwaber, Jeff Sutherland, Dave Thomas.
  - **Remember for exams:** Ken Schwaber & Jeff Sutherland (Scrum creators), Kent Beck (XP), Ward Cunningham (wiki, XP), Martin Fowler (refactoring), Alistair Cockburn (Crystal), Jim Highsmith (ASD; wrote the history page).
- They chose the word **"Agile"** and later formed the **Agile Alliance**.

---

## 2. ⭐⭐⭐ The Manifesto text and the 4 Values (📘 p12)
> "We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value:
> **Individuals and interactions** over processes and tools
> **Working software** over comprehensive documentation
> **Customer collaboration** over contract negotiation
> **Responding to change** over following a plan
> That is, while there is value in the items on the right, we value the items on the left more."

```
        LEFT (valued MORE)                RIGHT (still valued)
 ┌────────────────────────────────┐   ┌────────────────────────────┐
 │ Individuals & interactions     │ > │ Processes & tools          │
 │ Working software               │ > │ Comprehensive documentation│
 │ Customer collaboration         │ > │ Contract negotiation       │
 │ Responding to change           │ > │ Following a plan           │
 └────────────────────────────────┘   └────────────────────────────┘
```
**Key exam point:** the right side is **not rejected**. It is a matter of priority. (📘 crossword: "Agile teams still follow one" → **PLAN**; "Very useful for agile teams because they help get the work done" → **TOOLS**; "An effective way to communicate complex requirements" → **DOCUMENTATION**.)

### Value 1 — Individuals and interactions over processes and tools
- **Meaning:** people and how they communicate solve problems; processes and tools only support them. A great process cannot save a team that doesn't talk.
- **Practices:** daily scrum, co-location, face-to-face talk, self-organising teams, pair programming.
- **Example:** instead of raising a Jira ticket and waiting two days, a developer walks over to the tester and fixes the issue in 10 minutes.
- **Significance in modern PM/teamwork:** builds trust, faster decisions, psychological safety, motivation.

### Value 2 — Working software over comprehensive documentation
- **Meaning:** the true measure of progress is a working product the customer can use, not a 300-page specification. Document "just enough".
- **Practices:** potentially shippable increment every sprint, Definition of Done, user stories instead of long SRS, demos at sprint review.
- **Example:** a food-delivery startup shows a clickable working ordering flow to users in week 2 rather than a spec in month 3.
- **Non-software reading:** "working product" (a working prototype, a usable piece of an event plan).

### Value 3 — Customer collaboration over contract negotiation
- **Meaning:** treat the customer as a partner throughout, not an adversary bound by a fixed contract. Contracts matter, but collaboration gets the right product.
- **Practices:** Product Owner in the team, sprint reviews with stakeholders, frequent feedback, agile contracts (time-and-materials, fixed price per sprint, "money for nothing, change for free").
- **Example:** the bank's product owner joins every sprint review of the mobile app and re-prioritises features as customer feedback arrives.
- 📘 Answer key: "Attitude toward customers or other teams that requires strict agreements before any work can start" → **CONTRACT** (negotiation).

### Value 4 — Responding to change over following a plan
- **Meaning:** plans are useful but must adapt to new information (market, customer, technology). Change is a competitive advantage, not a threat.
- **Practices:** short sprints, re-planning each sprint, backlog refinement, last responsible moment decisions.
- **Example:** during COVID-19 many retailers re-prioritised their backlog in weeks to launch contactless delivery and curbside pickup.

📘 **Match-the-following key (Values):** Working software ↔ comprehensive documentation; Responding to change ↔ following a plan; Individuals and interactions ↔ processes and tools; Customer collaboration ↔ contract negotiation.

---

## 3. ⭐⭐⭐ The 12 Principles (📘 p13 full text + p14 short labels)

| # | Short label (📘 p14) | Theme (presentation grouping) |
|---|---|---|
| 1 | Satisfy customer by valuable software | Customer satisfaction, early value (P1–4) |
| 2 | Adapt to change | |
| 3 | Deliver working software frequently | |
| 4 | Business people and developers together | |
| 5 | Build projects around motivated individuals | Collaboration, motivation, communication, sustainability (P5–8) |
| 6 | Face-to-face conversation | |
| 7 | Working software is the measure of progress | |
| 8 | Sustainable development | |
| 9 | Continuous technical excellence | Excellence, simplicity, self-organisation, improvement (P9–12) |
| 10 | Simplicity | |
| 11 | Self-organizing team | |
| 12 | Team reflects at regular intervals | |

**Memory hook (📗):** "**C**ustomers **C**hange **D**elivery; **B**usiness **M**otivates **F**ace-to-face; **W**orking **S**ustainably; **T**echnical **S**implicity, **S**elf-organised **R**eflection" → C-C-D-B-M-F-W-S-T-S-S-R.

### Principle 1 — Customer satisfaction through early and continuous delivery
> "Our highest priority is to satisfy the customer through early and continuous delivery of valuable software."
- Deliver value early (first sprint) and keep delivering; customer gets ROI sooner and gives feedback sooner.
- **Example:** Zomato/Swiggy ship small app improvements weekly instead of one big annual release.
- **Links:** MVP, MMF, sprint increment. 📘 crossword: "When to deliver software" → **EARLY**; "kind of delivery" → **CONTINUOUS**; "kind of users highest priority" → **SATISFIED**.

### Principle 2 — Welcome changing requirements
> "Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage."
- Change is not failure; it reflects learning. New requirements go into the product backlog and are prioritised for the next sprint (the current sprint goal is protected).
- **Example:** a competitor launches UPI-autopay; the PO moves that story to the top of the backlog for the next sprint.
- 📘 answer key: "Agile teams welcome **changing** requirements, even late in development."

### Principle 3 — Deliver working software frequently
> "Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale."
- Short timeboxes (Scrum 1–4 weeks; XP 1 week) → fast feedback loops, lower risk.
- **Example:** 2-week sprints delivering a usable feature each time. 📘: "How often agile teams try to deliver" → **Frequently**.

### Principle 4 — Business people and developers work together daily
> "Business people and developers must work together daily throughout the project."
- Removes hand-offs and misunderstanding (reduces gulf of evaluation). Product Owner is available to the team daily.
- **Example:** an insurance company seats its claims manager with the dev team building the claims portal.

### Principle 5 — Build projects around motivated individuals
> "Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done."
- Motivation via autonomy, mastery, purpose (Dan Pink, 📗). Leaders remove impediments rather than micromanage (servant leadership).
- **Example:** Google's "20% time" and Atlassian "ShipIt days" trust teams to innovate.
- 📘: "You need to **trust** the team"; "something that shouldn't be punished → **mistake**"; "culture of fear → **demotivate**".

### Principle 6 — Face-to-face conversation
> "The most efficient and effective method of conveying information to and within a development team is face-to-face conversation."
- Richest channel: tone, body language, instant clarification. Supports **osmotic communication** and co-location (sit together). Remote teams use video calls as the nearest equivalent.
- 📘 p15 "Agile teams VALUE face-to-face communication"; answer key: "most effective way to communicate" → **Face-to-face**.
```
Communication effectiveness (Alistair Cockburn, 📗)
 high │                         ● Face-to-face at whiteboard
      │                   ● Face-to-face
      │             ● Video call
      │        ● Phone
      │   ● Email
  low │ ● Paper document
      └──────────────────────────────► richness of channel
```

### Principle 7 — Working software is the primary measure of progress
> "Working software is the primary measure of progress."
- Not "% of documents done" or "hours spent". A feature counts only when it meets the Definition of Done.
- **Example:** burndown chart burns story points only for "Done" stories; half-done work counts as zero. 📘 crossword: "Working software is the primary measure of → **PROGRESS**".

### Principle 8 — Sustainable development (constant pace)
> "Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely."
- No death marches; overtime causes burnout and defects. XP "energized work", 40-hour week.
- **Example:** a team that works 70-hour weeks for a launch then loses two members and slows for months; a sustainable team keeps stable velocity.
- 📘: "The pace XP teams strive for" → **Sustainable**.

### Principle 9 — Continuous attention to technical excellence and good design
> "Continuous attention to technical excellence and good design enhances agility."
- Clean code is easy to change; poor code (technical debt) slows future change. Practices: refactoring, TDD, continuous integration, pair programming.
- **Example:** refactoring "spaghetti code" (📘 match key: a programmer "wasted hours grinding through spaghetti code to find a bug" → fix with **refactoring**).

### Principle 10 — Simplicity
> "Simplicity — the art of maximizing the amount of work not done — is essential."
- Build only what is needed now (YAGNI). Avoid gold plating and extra features (one of the 7 wastes).
- **Example:** an MVP for a college-canteen app has only menu + order + pay; loyalty points can wait.
- 📘: "This value maximizes the amount of work not done" → **Simplicity**.

### Principle 11 — Self-organizing teams
> "The best architectures, requirements, and designs emerge from self-organizing teams."
- The people closest to the work decide how to do it; no manager assigns tasks. Team pulls work in sprint planning.
- **Example:** in sprint planning part 2, the dev team decomposes stories into tasks and volunteers for them.
- 📘: "A self-**organizing** team decides as a team how they'll meet their goals."

### Principle 12 — Regular reflection and adjustment
> "At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly."
- Implemented through the **Sprint Retrospective** (Agile's own Kaizen). Inspect and adapt the process, not just the product.
- **Example:** a retrospective finds that code reviews are a bottleneck; team agrees to pair-review daily, then checks the result next sprint.
- 📘: "What the team does to its behaviour after a retrospective" → **Adjusts**; crossword "At regular → **INTERVALS**".

### Principles mapped to Values (📗, useful for 10-mark answers)
| Value | Principles that implement it |
|---|---|
| Individuals & interactions | 5, 6, 8, 11, 12 |
| Working software | 1, 3, 7, 9, 10 |
| Customer collaboration | 1, 4 |
| Responding to change | 2, 3, 12 |

---

## 4. Agile beyond software: manufacturing and service cases (syllabus) 📗
**Translate "working software" → "working product/increment".**

**Manufacturing**
- **Toyota Production System:** Lean origin of Agile (see Ch 9 and presentation topic 14).
- **WIKISPEED (Joe Justice, 2008–):** built a 100-mpg road-legal car in about 3 months using Scrum: 1-week sprints, modular car design so each module can change independently, test-driven hardware.
- **John Deere / Saab Gripen fighter:** Saab's Gripen E programme runs on Scrum with 3-week sprints across hardware and software teams.
- **Typical hybrid in automotive (general practice, not a specific company claim):** vehicle software and design studios run agile sprints while hardware tooling stays stage-gated.
- **Plant maintenance (CMMS):** maintenance improvements prioritised in a backlog; Kanban boards for work orders.

**Service industries**
- **Banking:** ING (Netherlands) agile squads; ICICI/HDFC digital banking teams.
- **Healthcare:** hospitals use Kanban for patient flow and bed management; agile for EMR rollouts.
- **Marketing:** agile marketing teams run 2-week campaign sprints with A/B tests as "increments".
- **Education:** a college event committee using a Scrum board (see Ch 10 case).
- **Government:** UK Government Digital Service (GOV.UK) built with agile; India's UPI/Aadhaar ecosystem iterates in releases.

---

## 5. Q&A — Chapter 2

**Q1. ⭐⭐⭐ (10 marks) Explain the four values of the Agile Manifesto with examples and their significance in modern project management.** 
Opening: 2001 Snowbird, 17 signatories. Quote the statement and the "while there is value on the right" clause. Explain each value with meaning + practice + example (§2). Conclude: values form the agile mindset; practices without values fail ("mindset makes the biggest difference").

**Q2. ⭐⭐⭐ (10 marks) Explain any six principles of the Agile Manifesto with examples.** 
Pick P1, P2, P3, P5, P6, P12 (or any 6). For each: quote, meaning, example, linked practice. Add the principle-to-value map for extra marks.

**Q3. (5 marks) "The Agile Manifesto rejects documentation and planning." Comment.** 
False. Right-side items still have value; agile teams still follow a plan (re-planned) and still document (just enough). Priority, not rejection.

**Q4. (5 marks) Who wrote the Agile Manifesto and why?** 
§1: 17 practitioners, Feb 2001, Snowbird, Utah; frustration with heavyweight waterfall processes; common ground among lightweight methods.

**Q5. (5 marks) Explain "Simplicity — the art of maximizing the amount of work not done".** 
P10 with YAGNI, MVP, waste of extra features; example.

**Q6. (5 marks) How do Principles 1–4 increase customer satisfaction?** 
Early/continuous delivery, welcome change, frequent delivery, daily collaboration → customer sees value early, shapes product, gets competitive advantage.

**Q7. (5 marks) How do Principles 5–8 support team collaboration and sustainability?** 
Motivated individuals + trust; face-to-face; working product as progress; sustainable pace → less burnout, stable velocity.

**Q8. (5 marks) How do Principles 9–12 lead to continuous improvement?** 
Technical excellence + simplicity keep the product easy to change; self-organising teams produce best designs; retrospectives tune behaviour (Kaizen).

**Q9. (5 marks) Give an example of applying Agile values in a manufacturing or service firm.** 
WIKISPEED or ING (§4).

**Q10. (2 marks each, one-liners)** 
- Most efficient method of conveying information → face-to-face conversation (P6). 
- Primary measure of progress → working software (P7). 
- Preferred delivery timescale → shorter (couple of weeks) (P3). 
- Kind of individuals to build projects around → motivated (P5).
