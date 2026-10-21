"""Bundle notes/*.md into assets/notes.js so the site works on Vercel and when index.html is opened directly.

Run after editing any note:  python3 build.py
"""
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).parent
NOTES = ROOT / "notes"

# Sidebar order and short labels. Any new .md file not listed here is appended at the end.
ORDER = [
    # (slug, sidebar label, tag, group)
    ("README", "About these notes", "", "start"),
    ("rapid-revision", "Rapid Revision", "★", "start"),
    ("ch01-basics-of-project-management", "Basics of PM, Traditional vs Agile", "01", "chapters"),
    ("ch02-agile-manifesto", "Agile Manifesto", "02", "chapters"),
    ("ch03-scrum-elements-and-terminology", "Scrum Elements & Terms", "03", "chapters"),
    ("ch04-project-initiation", "Project Initiation", "04", "chapters"),
    ("ch05-scrum-teams-roles-team-space", "Roles & Team Space", "05", "chapters"),
    ("ch06-scrum-planning", "Scrum Planning", "06", "chapters"),
    ("ch07-sprint-events-and-retrospective", "Sprint Events & Retro", "07", "chapters"),
    ("ch08-progress-tracking-burndown-burnup-cfd", "Burndown, Burnup, CFD", "08", "chapters"),
    ("ch09-xp-lean-kanban-tps", "XP, Lean, Kanban, TPS", "09", "chapters"),
    ("ch10-cases-agile-scrum-msp", "Cases & MS Project", "10", "chapters"),
    ("ch11-extra-topics", "Extra Topics", "11", "chapters"),
    ("presentation-topics-qna", "14 Presentation Topics", "Q&A", "practice"),
    ("quiz-bank-from-answer-keys", "Quiz Bank", "Quiz", "practice"),
    ("glossary", "Glossary A–Z", "A–Z", "practice"),
]


def first_heading(md: str, fallback: str) -> str:
    m = re.search(r"^#\s+(.+)$", md, re.M)
    return m.group(1).strip() if m else fallback


def main() -> None:
    files = {p.stem: p for p in NOTES.glob("*.md")}
    entries = []
    for slug, label, tag, group in ORDER:
        if slug in files:
            md = files.pop(slug).read_text(encoding="utf-8")
            entries.append({"slug": slug, "label": label, "tag": tag, "group": group, "title": first_heading(md, label), "md": md})
    for slug, path in sorted(files.items()):
        md = path.read_text(encoding="utf-8")
        title = first_heading(md, slug)
        entries.append({"slug": slug, "label": title, "tag": "", "group": "practice", "title": title, "md": md})

    out = ROOT / "assets" / "notes.js"
    out.write_text("window.NOTES = " + json.dumps(entries, ensure_ascii=False) + ";\n", encoding="utf-8")
    print(f"Wrote {out.relative_to(ROOT)} with {len(entries)} notes")


if __name__ == "__main__":
    main()
