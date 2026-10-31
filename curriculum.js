// ============================================================
// EDIT THIS FILE to add years and resources. Nothing else needs touching.
// To add a resource, copy one block in RESOURCES and change the details.
//   year:    which year it belongs to (must match an id in YEARS)
//   area:    the small label on the tape, e.g. "Art", "Maths", "Computing"
//   colour:  the colour of the tape and the card edge
//   icon:    which drawn icon to show (see ICONS in app.js)
//   url:     the resource's web address (leave "" to show "Coming soon")
// ============================================================

window.SITE = {
  name: "AC Curriculum",
  tagline: "Year 1 resources, all in one place."
};

window.YEARS = [
  { id: "year1", name: "Year 1", blurb: "Resources and platforms for Year 1." }
];

window.RESOURCES = [
  {
    year: "year1",
    title: "Digital Art Tools",
    area: "Art",
    colour: "#e5527a",
    icon: "pixels",
    summary: "Make digital art in six ways: pixels, shapes, pen, paint, patterns and code.",
    url: "https://digialart-mrandy.vercel.app/"
  },
  {
    year: "year1",
    title: "Weird and Wonderful",
    area: "New platform",
    colour: "#7cb518",
    icon: "sparkle",
    summary: "A brand new Year 1 platform, being built right now. Watch this space!",
    url: ""
  }
];
