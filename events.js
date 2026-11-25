// Zouk Calendar – event data (v1.10.5) – FALLBACK data: the site reads the published Google Sheet first (csvUrl) and uses this list only when the sheet is unreachable
// Add or edit events here. Dates are YYYY-MM-DD. Only zouk/lambada-related events.
// type: party | regular | workshop | weekender | festival | retreat   (a course with an end date is still "regular")
//   party                      -> "Parties"
//   regular/workshop           -> "Classes"
//   weekender/festival/retreat -> "Festivals & weekends" (always visible, even when a city is selected)
// Weekly recurring entries use `weekly` (1 = Monday ... 7 = Sunday) and `from`.
// endTime: "03:00" (optional) -> end clock on the end date; an end clock from 00:00 to 06:00 (also 24:00) means that last day only holds the after-midnight tail and is not counted as a separate day (a time like "21:00–03:00" works the same)
// note / title can be a string or {hu:"", en:""}
// mixed: true | ["bachata","salsa"] -> "Mixed" chip, or one chip per other dance when listed
// also: "party" (optional) -> a second type, for events that are both (e.g. workshop + party); shows both tags and counts in both groups
// verify: true -> shows a small "check" badge (data taken from a cover banner, not an event page)
// city: "Budapest", "Debrecen" or "Külföld" (abroad: group trips with a contact person; the venue/place text shows on the card, the city chip reads "Külföld"). Other city names show only when no city filter is selected.
// contact: "Name" or "Name, Name" (optional, any event, one or more people) -> shows a "Contact: ..." line on the card (the promoter(s) from our group; typical for "Külföld" trips)
// djs: "Name, Name2" or "Name|https://link, Name2" (optional) -> shows a "DJ: ..." line on the card; links come from the "DJ-k" sheet (by name, case and accent insensitive) unless given with | in the cell
// The organizer name links to an organizer page (#slug) when the "Szervezők" sheet has an active row with the same name (case and accent insensitive).
window.ZC_UPDATED = "2026-11-25"; // fallback only: the site shows the `updated` timestamp of the published CSV when it has one
window.ZC_CONFIG = {
  submitUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdHwYUnaeKkjjUn_PRhC-hFeR8eO37LanShNTLnEGGkBbjqfQ/viewform", // the Google Form link ("Esemény beküldése" button)
  csvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRADk7y7goAewdHhpi4mWsxT7tq8VPbOxmBHYaJoS2nnV_UOuVoUJunk6aLWYm0kJ_gAb-10yhrac8q/pub?gid=1840318514&single=true&output=csv", // Google Sheet -> Publish to web -> "Publikus" tab -> CSV link; empty = use the list below
  djsCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRADk7y7goAewdHhpi4mWsxT7tq8VPbOxmBHYaJoS2nnV_UOuVoUJunk6aLWYm0kJ_gAb-10yhrac8q/pub?gid=430200600&single=true&output=csv", // Google Sheet -> Publish to web -> "DJ-k" tab -> CSV link; empty = links only from the "Name|https://..." text in the djs column
  orgsCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRADk7y7goAewdHhpi4mWsxT7tq8VPbOxmBHYaJoS2nnV_UOuVoUJunk6aLWYm0kJ_gAb-10yhrac8q/pub?gid=1556018248&single=true&output=csv", // Google Sheet -> Publish to web -> "Szervezők" tab -> CSV link; empty = no organizer pages
};
// Hungarian public holidays and working Saturdays – UPDATE EVERY YEAR (the NGM decree on the working schedule around public holidays is published in spring or autumn).
//   off  = weekday public holidays and moved rest days (Saturdays and Sundays are always shown as days off)
//   work = Saturdays that are working days (shown as normal days)
// Checked 2026-11-25: Dec 24 became a permanent public holiday (law of 2026-11-13) and the working Saturday of 2026-12-12 was repealed.
// The 2027 decree on moved working days had not been published yet; none expected. If it appears, add the Saturday to `work` and the moved rest day to `off`.
window.ZC_HOLIDAYS = {
  off: [
    "2026-12-24", "2026-12-25", "2026-12-26",
    "2027-01-01", "2027-03-15", "2027-03-26", "2027-03-29", "2027-05-01", "2027-05-17",
    "2027-08-20", "2027-10-23", "2027-11-01", "2027-12-24", "2027-12-25", "2027-12-26"
  ],
  work: []
};
window.ZC_EVENTS = [
  {
    id: "zouk-intenziv-nap-2026-12-12",
    title: "Zouk Intenzív nap",
    start: "2026-12-12", end: "2026-12-13", time: "", endTime: "01:00",
    city: "Budapest", venue: "Quality Dance Club",
    type: "workshop", also: "party", styles: ["zouk"],
    organizer: "Brazilian Zouk Budapest",
    url: "https://www.facebook.com/events/2425992797937926/"
  },
  {
    id: "connect-xmas-social-2026-12-18",
    mixed: ["bachata", "salsa"],
    title: "Connect Xmas Social Night - BZS",
    start: "2026-12-18", end: "", time: "21:00",
    city: "Budapest", venue: "Quality Dance Club",
    type: "party", styles: ["zouk"],
    note: { hu: "Többstílusú est (bachata, zouk, salsa).", en: "Multi-style night (bachata, zouk, salsa)." },
    organizer: "Connect Dance School",
    url: "https://www.facebook.com/events/1037150439402692/"
  },
  {
    id: "bruno-fae-weekender-2027-02-05",
    title: "Bruno & Fae Zouk Weekender",
    start: "2027-02-05", end: "2027-02-07", time: "",
    city: "Budapest", venue: "",
    type: "weekender", styles: ["zouk"],
    organizer: "Zouk Amigos Budapest",
    url: "https://www.facebook.com/events/1702211761576559/"
  },
  {
    id: "zouk-lambada-fever-2027",
    title: "Zouk Lambada Fever",
    start: "2027-04-30", end: "2027-05-03", time: "",
    city: "Budapest", venue: "Kerepesi út 26",
    type: "festival", styles: ["zouk", "lambada"],
    organizer: "Zouk Fever Events",
    url: "https://www.facebook.com/events/2070575700302485/"
  },
  {
    id: "all-stars-festival-2027-10-28",
    mixed: true,
    title: "All Stars Festival - SBKZ",
    start: "2027-10-28", end: "", time: "20:00",
    city: "Budapest", venue: "",
    type: "festival", styles: ["zouk"],
    note: { hu: "Az előző kiadás zouk-os volt (brazilzouk.hu), de ellenőrizd, lesz-e zouk program.", en: "The previous edition included zouk (listed on brazilzouk.hu) – please confirm the zouk programme." },
    organizer: "All Stars Festival",
    url: "https://www.facebook.com/events/1109668051867719/"
  },
  {
    id: "onyx-zouk-focus-2026-11-30",
    title: "Zouk Focus – Open level (modul)",
    start: "2026-11-30", end: "", time: "20:00",
    city: "Debrecen", venue: "Turn terem 1 – Mikepércsi út",
    type: "regular", styles: ["zouk"],
    note: { hu: "4 alkalmas modul – az összes időpont az eseménynél.", en: "4-session module – see the event for all dates." },
    organizer: "Onyx Dance Studio",
    url: "https://www.facebook.com/events/1444858657153019/"
  },
  {
    id: "euphoria-bachazouk-2026-11-30",
    mixed: ["bachata"],
    title: "Bachazouk Alapozó Kurzus",
    start: "2026-11-30", end: "", time: "20:00",
    city: "Debrecen", venue: "Euphoria Dance Studio",
    type: "regular", styles: ["zouk"],
    note: { hu: "Bachata–zouk kurzus; több időpont – részletek az eseménynél.", en: "Bachata–zouk course; several dates – see the event." },
    organizer: "Euphoria Dance Studio",
    url: "https://www.facebook.com/events/1124061940100147/"
  },
  {
    id: "regular-monday-zouk-roxy",
    title: { hu: "Zouk rendszeres óra (Juanma & Mely) + gyakorlás", en: "Regular zouk class (Juanma & Mely) + practice" },
    start: "2026-11-02", end: "", from: "2026-11-02", weekly: 1,
    time: "20:00–22:00 (+ 22:30)",
    city: "Budapest", venue: "Roxy",
    type: "regular", styles: ["zouk"], verify: true,
    organizer: "Brazilian Zouk Budapest",
    url: "https://www.facebook.com/zoukbudapest/"
  },
  {
    id: "regular-wednesday-zouk-intensive-roxy",
    title: { hu: "Intenzív zouk órák (Alex & Lilla)", en: "Intensive zouk classes (Alex & Lilla)" },
    start: "2026-11-04", end: "", from: "2026-11-04", weekly: 3,
    time: "21:00–22:00",
    city: "Budapest", venue: "Roxy",
    type: "regular", styles: ["zouk"], verify: true,
    organizer: "Connect Dance School",
    url: "https://www.facebook.com/zoukbudapest/"
  },
  {
    id: "regular-monday-zouk-euphoria",
    title: { hu: "Zouk hétfőnként (kezdő)", en: "Zouk on Mondays (beginner)" },
    start: "2026-11-30", end: "", from: "2026-11-30", weekly: 1,
    time: "18:00",
    city: "Debrecen", venue: "Euphoria Dance Studio",
    type: "regular", styles: ["zouk"], verify: true,
    organizer: "Euphoria Dance Studio",
    url: "https://www.facebook.com/euphoria.dance.hun"
  }
];
