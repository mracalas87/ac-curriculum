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
  tagline: "Resources for each year, all in one place."
};

window.YEARS = [
  { id: "year1", name: "Year 1", blurb: "Resources and platforms for Year 1." },
  { id: "year2", name: "Year 2", blurb: "Computing for Year 2: turtle programming, algorithms and sequences." },
  { id: "year4", name: "Year 4", blurb: "Computing for Year 4: repetition and loops with the turtle." },
  { id: "csed", name: "CSEd", blurb: "Computer Science Education Week, 7 to 11 December 2026." }
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
    area: "STEAM",
    colour: "#7cb518",
    icon: "sparkle",
    summary: "Seven lessons of big questions for Year 1. Look closely, ask why, and find out how the world works.",
    url: "https://ac-weird-and-wonderful.vercel.app/"
  },
  {
    year: "year2",
    title: "Turtle Maze",
    area: "Computing",
    colour: "#12a36b",
    icon: "turtle",
    summary: "Give a turtle robot clear instructions to reach the flag. Six lessons on algorithms, order, predicting and fixing bugs.",
    url: "https://ac-turtle-maze-y2.vercel.app/"
  },
  {
    year: "year4",
    title: "Turtle Loops",
    area: "Computing",
    colour: "#12a36b",
    icon: "turtle",
    summary: "Make the turtle do more with fewer blocks. Learn repetition and loops by programming it through mazes.",
    url: "https://ac-turtle-loops-y4.vercel.app/"
  },
  {
    year: "csed",
    title: "Open House",
    area: "Computing",
    colour: "#12a36b",
    icon: "app",
    summary: "Step inside the Open House and find out how computer science is part of your day. Solve the puzzles in each room to switch the lights back on.",
    url: "https://ac-open-house.vercel.app/"
  }
];
