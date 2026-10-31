(function () {
  "use strict";

  var tiles = document.getElementById("tiles");
  var yearsBar = document.getElementById("years");
  var yearTitle = document.getElementById("year-title");
  var yearBlurb = document.getElementById("year-blurb");

  document.getElementById("site-name").textContent = window.SITE.name.replace(/^AC\s+/, "");
  document.getElementById("tagline").textContent = window.SITE.tagline;
  document.title = window.SITE.name;

  // Simple line icons on a 32 x 32 grid. They take the colour of the text around them.
  var pixels = "";
  for (var r = 0; r < 3; r++) {
    for (var c = 0; c < 3; c++) {
      var px = 3.5 + c * 9, py = 3.5 + r * 9;
      pixels += (r + c) % 2 === 0
        ? '<rect x="' + px + '" y="' + py + '" width="7" height="7" rx="1.2" fill="currentColor" stroke="none"/>'
        : '<rect x="' + (px + 0.9) + '" y="' + (py + 0.9) + '" width="5.2" height="5.2" rx="1" stroke-width="1.8"/>';
    }
  }
  var ICONS = {
    pixels: pixels,
    sparkle: '<path d="M14 3l2.8 7.9L25 14l-8.2 3.1L14 25l-2.8-7.9L3 14l8.2-3.1z"/><path d="M26 20l1.1 3 3 1.1-3 1.1-1.1 3-1.1-3-3-1.1 3-1.1z"/>',
    app: '<rect x="5" y="5" width="22" height="22" rx="5"/><path d="M11 16h10M16 11v10"/>'
  };

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (key) {
      if (key === "text") node.textContent = attrs[key];
      else if (key === "class") node.className = attrs[key];
      else node.setAttribute(key, attrs[key]);
    });
    (children || []).forEach(function (child) { if (child) node.appendChild(child); });
    return node;
  }

  function icon(name) {
    var holder = el("span", { class: "icon-svg", "aria-hidden": "true" });
    holder.innerHTML = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" focusable="false">' + (ICONS[name] || ICONS.app) + "</svg>";
    return holder;
  }

  var current = window.YEARS[0].id;

  function renderYears() {
    yearsBar.innerHTML = "";
    window.YEARS.forEach(function (y) {
      var b = el("button", { class: "year", type: "button", "aria-pressed": y.id === current ? "true" : "false", text: y.name });
      b.addEventListener("click", function () { current = y.id; renderYears(); renderTiles(); });
      yearsBar.appendChild(b);
    });
  }

  function renderTiles() {
    var year = window.YEARS.filter(function (y) { return y.id === current; })[0];
    yearTitle.textContent = year.name;
    yearBlurb.textContent = year.blurb || "";
    tiles.innerHTML = "";
    var items = window.RESOURCES.filter(function (r) { return r.year === current; });
    if (!items.length) {
      tiles.appendChild(el("li", {}, [el("p", { class: "lead", text: "Resources are coming soon." })]));
      return;
    }
    items.forEach(function (res) {
      var parts = [
        el("span", { class: "tape" }, [
          el("span", { class: "tape-icon", "aria-hidden": "true" }, [icon(res.icon)]),
          document.createTextNode(res.area)
        ]),
        el("span", { class: "tile-icon", "aria-hidden": "true" }, [icon(res.icon)]),
        el("span", { class: "tile-title", text: res.title }),
        el("span", { class: "tile-sum", text: res.summary }),
        el("span", { class: "tile-cta", text: res.url ? "Open" : "Coming soon" })
      ];
      var card = res.url
        ? el("a", { class: "tile", href: res.url, target: "_blank", rel: "noopener noreferrer", "aria-label": "Open " + res.title + ". Opens in a new tab." }, parts)
        : el("div", { class: "tile disabled" }, parts);
      tiles.appendChild(el("li", { style: "--accent:" + res.colour }, [card]));
    });
  }

  renderYears();
  renderTiles();
})();
