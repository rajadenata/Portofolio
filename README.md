# Raja Denata — Personal Portfolio

Dark futuristic portfolio (purple + neon cyan). Stack: React 19, Vite, Tailwind CSS 3, Framer Motion, Lucide.

## Run

```bash
npm install
npm run dev      # development
npm run build    # production build -> dist/
npm run preview  # preview the build
```

## Where to edit content

**Everything lives in `src/data/content.js`** (about text, experiences, achievements, projects, certificates, education, contact). Every fact there comes from the CV; empty values are deliberate placeholders.

## Files you need to add / replace

| What | Put it here | Notes |
|---|---|---|
| Profile photo | `public/assets/profile/raja.webp` + `raja.png` | Already included (cropped from your transparent PNG). Replace both to change. |
| CV | `public/assets/Raja_Denata_CV.pdf` | Already included; used by both Download CV buttons. |
| SmartBiz AI screenshot | `public/assets/projects/smartbiz.png` | Optional. Shown automatically once the file exists. |
| Other project thumbnails | `public/assets/projects/project-2.png`, `project-3.png` | Then edit the entries in `projects` (set `placeholder` removed, add title, description, tags, `github`, `demo`). |
| Certificates | `public/assets/certificates/certificate-1.jpg` … `certificate-6.jpg` | Add/rename entries in `certificates`. |
| Achievement documentation | `public/assets/achievements/mahasiswa-berprestasi.jpg`, `idea-fest-5.jpg`, `lktii-iysa.jpg`, `pesta-pendidikan.jpg` | Shown in the 4 featured achievement cards. |
| Contact links | `contact` object in `src/data/content.js` | Fill `email`, `github`, `linkedin`, `instagram`. Empty ones show a dashed placeholder card. |
| GitHub / Live Demo for SmartBiz | `github` and `demo` in the `smartbiz` project | Buttons appear only when filled. |

Missing images never break the layout — a labelled placeholder is shown instead, with the expected file name.

## Things to review

- `about.quote` is a **draft personal statement** — edit it to your own words.
- Titles in English (e.g. "Member, Program Tahfidz") are translations of the CV entries.
- Experience organizations for *Pengurus Kamar* entries use "MAS Wali Songo Ngabar Putra" (your school during those years). Change if different.
- Organizer for training/courses is not stated in the CV, so only the category is shown.
- Date of birth, address, and family details from the CV are intentionally **not** shown publicly.

## Structure

```
src/
  components/  Navbar, Hero, About, Experience, Achievements, Projects, Resume (Education), Contact, Footer, Background, Reveal, SectionHeading, ImageSlot, Icon
  data/content.js
  hooks/       useTyping, useActiveSection
public/assets/ profile, projects, achievements, certificates, icons
```
