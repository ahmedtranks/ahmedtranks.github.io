/* ملف تشغيل الموقع — مش محتاج تعدّل فيه. كل المحتوى في data.js */
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const make = (tag, props = {}, kids = []) => {
    const el = Object.assign(document.createElement(tag), props);
    kids.forEach((k) => el.append(k));
    return el;
  };
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* =========================== language =========================== */
  const T = {
    ar: {
      "nav.home": "الرئيسية", "nav.graphic": "جرافيك", "nav.motion": "موشن", "nav.video": "AI & فيديو", "nav.clients": "عملائي", "nav.about": "عني", "nav.contact": "تواصل معي",
      "sec.clients": "عملائي", "clients.sub": "براندات وشركات اشتغلت معاهم.",
      menu: "القائمة", "cta.work": "شاهد أعمالي", "cta.wa": "كلّمني واتساب", allWorks: "شاهد كل الأعمال", resume: "تحميل سيرتي الذاتية", aiTools: "الأدوات ونماذج الذكاء الاصطناعي", vimeo: "فيميو", tiktok: "تيك توك",
      "sec.graphic": "جرافيك ديزاين", "sec.motion": "موشن جرافيك", "sec.video": "AI & فيديو برودكشن",
      "contact.title": "عندك فكرة؟ يلا نحرّكها.", "contact.sub": "ابعتلي على واتساب أو الإيميل، وهرد عليك في نفس اليوم.",
      whatsapp: "واتساب", email: "الإيميل", behance: "بيهانس", linkedin: "لينكدإن", instagram: "إنستجرام",
      prev: "السابق", next: "التالي", close: "إغلاق", viewProject: "شوف المشروع كامل ↗", openVideo: "افتح الفيديو ↗", work: "عمل",
    },
    en: {
      "sec.clients": "Clients", "clients.sub": "Brands and companies I've worked with.", "nav.clients": "Clients",
      "nav.home": "Home", "nav.graphic": "Graphic", "nav.motion": "Motion", "nav.video": "AI & Video", "nav.about": "About", "nav.contact": "Contact",
      menu: "Menu", "cta.work": "See my work", "cta.wa": "WhatsApp me", allWorks: "View all work", resume: "Download my resume", aiTools: "Tools & AI models", vimeo: "Vimeo", tiktok: "TikTok",
      "sec.graphic": "Graphic Design", "sec.motion": "Motion Graphics", "sec.video": "AI & Video Production",
      "contact.title": "Got an idea? Let's make it move.", "contact.sub": "Message me on WhatsApp or email and I'll reply the same day.",
      whatsapp: "WhatsApp", email: "Email", behance: "Behance", linkedin: "LinkedIn", instagram: "Instagram",
      prev: "Previous", next: "Next", close: "Close", viewProject: "View full project ↗", openVideo: "Open video ↗", work: "Work",
    },
  };
  let lang = "ar";
  try { lang = localStorage.getItem("lang") === "en" ? "en" : "ar"; } catch (e) {}
  if (location.hash === "#en" || location.hash === "#ar") lang = location.hash.slice(1); // site.com/#en opens in English
  const t = (k) => T[lang][k] || k;
  const pick = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] : v);

  const c = SITE.contact;
  const waUrl = c.whatsapp ? "https://wa.me/" + c.whatsapp : "";
  if (waUrl) Object.assign($("#heroWa"), { href: waUrl, target: "_blank", rel: "noopener" });
  const short = (url) => (url || "").replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  $("#tools").append(...SITE.tools.map((x) => make("li", { textContent: x })));
  $("#aiTools").append(...(SITE.aiTools || []).map((x) => make("li", { textContent: x })));
  if (!(SITE.aiTools || []).length) $("#aiTools").hidden = true;

  // social icons: drawn from SVG paths (simple-icons, CC0), each linking to its profile
  const ICONS = {
    behance: "M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM20.37 11.04a2.346 2.346 0 0 0-1.795-.65 2.849 2.849 0 0 0-1.3.27 2.67 2.67 0 0 0-.832.642 2.447 2.447 0 0 0-.465.84 3.85 3.85 0 0 0-.181.81h4.758a3.38 3.38 0 0 0-.185-1.912ZM15.656 4.991h5.976v1.459h-5.976V4.991ZM7.246 5.012c.642 0 1.284.06 1.914.183.529.11 1.031.326 1.475.635.414.293.743.69.954 1.151.243.551.359 1.15.339 1.752a3.266 3.266 0 0 1-.508 1.866 3.712 3.712 0 0 1-1.499 1.224c.826.218 1.553.718 2.054 1.414.475.735.715 1.597.687 2.47a4.307 4.307 0 0 1-.458 2.031 3.945 3.945 0 0 1-1.236 1.4c-.531.367-1.123.638-1.749.8-.639.172-1.3.26-1.962.26H0V5.012h7.246Zm-.436 5.639a2.384 2.384 0 0 0 1.428-.416c.371-.302.569-.769.533-1.249a1.593 1.593 0 0 0-.177-.784 1.252 1.252 0 0 0-.471-.48 1.986 1.986 0 0 0-.678-.24 4.36 4.36 0 0 0-.793-.069H3.567v3.237l3.243.001Zm.181 5.903c.293.001.585-.03.871-.091.267-.056.521-.163.749-.316.224-.151.405-.354.531-.592.142-.302.21-.636.198-.97a1.96 1.96 0 0 0-.65-1.649 2.776 2.776 0 0 0-1.731-.494H3.567v4.11l3.424.002Z",
    vimeo: "M23.9765 6.4168c-.105 2.338-1.739 5.5429-4.894 9.6088-3.2679 4.247-6.0258 6.3699-8.2898 6.3699-1.409 0-2.578-1.294-3.553-3.881l-1.9179-7.1138c-.719-2.584-1.488-3.878-2.312-3.878-.179 0-.806.378-1.881 1.132L0 7.2217a315.2 315.2 0 003.501-3.1279C5.08 2.7208 6.266 1.9928 7.055 1.9208c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.002z",
    tiktok: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  };
  const SVGNS = "http://www.w3.org/2000/svg";
  const icon = (name) => {
    const svg = document.createElementNS(SVGNS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    const path = document.createElementNS(SVGNS, "path");
    path.setAttribute("d", ICONS[name]);
    svg.append(path);
    return svg;
  };
  const socialLinks = ["behance", "vimeo", "tiktok"].filter((k) => SITE.contact[k]);
  $$("[data-socials]").forEach((box) => {
    if (!socialLinks.length) { box.hidden = true; return; }
    box.append(...socialLinks.map((k) => {
      const a = make("a", { href: SITE.contact[k], target: "_blank", rel: "noopener" }, [icon(k)]);
      a.dataset.social = k;
      return a;
    }));
  });

  // clients: two strips drifting in opposite directions; each strip's list is
  // repeated once so the loop is seamless (the copy is hidden from screen readers)
  const clients = typeof CLIENTS !== "undefined" ? CLIENTS : [];
  if (!clients.length) $("#clients").hidden = true;
  const logoTile = (cl, copy) => {
    const inner = cl.logo
      ? make("img", { src: cl.logo, alt: copy ? "" : cl.name, loading: "lazy", decoding: "async", draggable: false })
      : make("span", { className: "logo-name", textContent: cl.name });
    const tile = cl.link
      ? make("a", { className: "logo-tile", href: cl.link, target: "_blank", rel: "noopener" }, [inner])
      : make("div", { className: "logo-tile" }, [inner]);
    if (copy) { tile.setAttribute("aria-hidden", "true"); if (cl.link) tile.tabIndex = -1; }
    return make("li", {}, [tile]);
  };
  // featured clients get their own top strip with bigger tiles; the rest share REST_ROWS strips
  const REST_ROWS = 4;
  const featured = clients.filter((cl) => cl.featured);
  const rest = clients.filter((cl) => !cl.featured);
  const perRow = Math.ceil(rest.length / REST_ROWS);
  const rows = [{ list: featured, big: true }];
  for (let r = 0; r < REST_ROWS; r++) rows.push({ list: rest.slice(r * perRow, (r + 1) * perRow), big: false });
  rows.filter((row) => row.list.length).forEach((row, r) => {
    const track = make("ul", { className: "mq-track" }, [
      ...row.list.map((cl) => logoTile(cl, false)),
      ...row.list.map((cl) => logoTile(cl, true)),
    ]);
    track.style.setProperty("--dur", row.list.length * (row.big ? 4.2 : 3.2) + "s");
    const cls = ["marquee", r % 2 ? "is-reverse" : "", row.big ? "is-featured" : ""].filter(Boolean).join(" ");
    $("#logoRows").append(make("div", { className: cls }, [track]));
  });
  $("#year").textContent = new Date().getFullYear();
  const resumeBtn = $("#resumeBtn");
  if (SITE.resume) resumeBtn.href = SITE.resume; else resumeBtn.parentElement.hidden = true;

  function applyLang(next) {
    lang = next;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";

    const site = {
      brand: SITE.brand, name: pick(SITE.name), role: pick(SITE.role), intro: pick(SITE.intro),
      headline0: pick(SITE.headline)[0], headline1: pick(SITE.headline)[1],
    };
    $$("[data-site]").forEach((el) => { el.textContent = site[el.dataset.site] || ""; });
    // top-bar name sits on two lines: AHMED / HASHISH, or أحمد / حشيش in Arabic
    const brandWords = (lang === "ar" ? pick(SITE.name) : SITE.brand).split(" ");
    $("#brandName").replaceChildren(...brandWords.map((w) => make("span", { textContent: w })));
    // "&" is wrapped so it can be drawn in a font that has the glyph (the display fonts lack it)
    $$("[data-t]").forEach((el) => {
      const s = t(el.dataset.t);
      if (s.includes("&")) el.replaceChildren(...s.split("&").flatMap((p, i) => (i ? [make("span", { className: "amp", textContent: "&" }), p] : [p])));
      else el.textContent = s;
    });
    $$("[data-t-label]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.tLabel)); });
    $$("[data-social]").forEach((a) => { a.setAttribute("aria-label", t(a.dataset.social)); });
    $(".hero-photo .me").alt = site.name;

    $("#stats").replaceChildren(...SITE.stats.map((s) =>
      make("li", {}, [make("b", { textContent: s.value }), make("span", { textContent: pick(s.label) })])));
    $("#aboutParas").replaceChildren(...pick(SITE.about).map((p) => make("p", { textContent: p })));
    $("#timeline").replaceChildren(...SITE.experience.map((x) => make("li", {}, [
      make("span", { className: "when", textContent: x.when }),
      make("span", { className: "where", textContent: x.where }),
      make("span", { className: "what", textContent: pick(x.what) + " · " + pick(x.place) }),
    ])));

    const rows = [
      ["whatsapp", c.phone, waUrl],
      ["email", c.email, c.email && "mailto:" + c.email],
      ["behance", short(c.behance), c.behance],
      ["linkedin", short(c.linkedin), c.linkedin],
      ["vimeo", short(c.vimeo), c.vimeo],
      ["tiktok", short(c.tiktok), c.tiktok],
      ["instagram", short(c.instagram), c.instagram],
    ].filter((r) => r[2]);
    const contactItems = () => rows.map(([k, v, href]) => make("li", {}, [
      make("a", { href, target: href.startsWith("http") ? "_blank" : "", rel: "noopener" }, [
        make("span", { className: "k", textContent: t(k) }),
        make("span", { className: "v", textContent: v }),
      ]),
    ]));
    $("#contactList").replaceChildren(...contactItems());
    $("#menuContact").replaceChildren(...contactItems());

    const btn = $("#langBtn");
    btn.textContent = lang === "ar" ? "EN" : "عربي";
    btn.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل للعربية");
    reels.forEach((r) => r.relabel());
  }

  /* ============================= reels ============================= */
  // Each section is an endless strip that drifts right-to-left. The card nearest the
  // middle swells; hovering pauses the drift and makes the swell stronger.
  const SPEED = reduceMotion ? 0 : 38;       // px per second
  const reels = [];

  class Reel {
    constructor(section) {
      this.section = section;
      this.el = $(".reel", section);
      this.track = $(".reel-track", section);
      this.items = WORKS[section.dataset.cat] || [];
      this.o = 0; this.v = SPEED; this.vTarget = SPEED;
      this.amp = .1; this.ampTarget = .1;
      this.tween = null; this.drag = null; this.moved = 0;
      this.visible = true;
      const all = $(".all-works", section), href = (SITE.allWorks || {})[section.dataset.cat];
      if (href) all.href = href; else all.parentElement.hidden = true;
      this.bind();
    }

    makeCard(item, i, clone) {
      const card = make("button", { className: item.shape ? "card is-" + item.shape : "card", type: "button" }, [
        make("img", { src: item.image, alt: "", loading: "lazy", draggable: false }),
      ]);
      if (item.video) card.append(make("span", { className: "play", ariaHidden: "true" }));
      card.dataset.i = i;
      if (clone) { card.tabIndex = -1; card.setAttribute("aria-hidden", "true"); }
      card.addEventListener("click", (e) => { if (e.detail === 0 || this.moved < 6) openLightbox(this.items, i); });
      return card;
    }

    relabel() {
      $$(".card", this.track).forEach((card) => {
        const item = this.items[card.dataset.i];
        card.setAttribute("aria-label", pick(item.title) || `${t("sec." + this.section.dataset.cat)} — ${t("work")} ${+card.dataset.i + 1}`);
      });
    }

    layout() {
      if (!this.items.length) { this.section.hidden = true; return; }
      this.track.replaceChildren(...this.items.map((it, i) => this.makeCard(it, i, false)));
      const gap = parseFloat(getComputedStyle(this.track).columnGap) || 0;
      this.setW = this.track.scrollWidth + gap;
      const reelW = this.el.clientWidth;
      const copies = Math.max(3, Math.ceil(reelW / this.setW) + 3);
      for (let k = 1; k < copies; k++) {
        this.items.forEach((it, i) => this.track.append(this.makeCard(it, i, true)));
      }
      this.cards = [...this.track.children].map((el) => ({ el, left: el.offsetLeft, w: el.offsetWidth }));
      this.reelW = reelW;
      this.relabel();
      this.render(0);
    }

    step() { return (this.cards && this.cards[0] ? this.cards[0].w : 300) + (parseFloat(getComputedStyle(this.track).columnGap) || 0); }

    bind() {
      const el = this.el;
      el.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") this.hover(true); });
      el.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse") this.hover(false); });
      el.addEventListener("focusin", () => this.hover(true));
      el.addEventListener("focusout", () => this.hover(false));

      el.addEventListener("pointerdown", (e) => {
        if (e.button !== 0) return;
        this.drag = { x: e.clientX, o: this.o, lastX: e.clientX, lastT: performance.now(), vel: 0 };
        this.moved = 0; this.tween = null;
      });
      window.addEventListener("pointermove", (e) => {
        if (!this.drag) return;
        const dx = e.clientX - this.drag.x;
        this.moved = Math.max(this.moved, Math.abs(dx));
        if (this.moved > 6) el.classList.add("dragging");
        this.o = this.drag.o - dx;
        const now = performance.now();
        this.drag.vel = -(e.clientX - this.drag.lastX) / Math.max(1, now - this.drag.lastT) * 1000;
        this.drag.lastX = e.clientX; this.drag.lastT = now;
      });
      const release = () => {
        if (!this.drag) return;
        if (this.moved > 6) this.v = Math.max(-1600, Math.min(1600, this.drag.vel)); // fling, then ease back to drift
        this.drag = null;
        el.classList.remove("dragging");
      };
      window.addEventListener("pointerup", release);
      window.addEventListener("pointercancel", release);

      $$(".arrow", this.section).forEach((b) => b.addEventListener("click", () => {
        const dir = b.dataset.dir === "next" ? 1 : -1;
        const from = this.tween ? this.tween.to : this.o;
        this.tween = { from: this.o, to: from + dir * this.step(), t: 0 };
      }));
    }

    hover(on) {
      this.vTarget = on ? 0 : SPEED;
      this.ampTarget = on ? .22 : .1;
    }

    render(dt) {
      if (!this.cards) return;
      if (this.tween) {
        this.tween.t = Math.min(1, this.tween.t + dt / .55);
        const e = 1 - Math.pow(1 - this.tween.t, 3);
        this.o = this.tween.from + (this.tween.to - this.tween.from) * e;
        if (this.tween.t >= 1) this.tween = null;
        this.v = 0;
      } else if (!this.drag) {
        this.v += (this.vTarget - this.v) * Math.min(1, dt * 3);
        this.o += this.v * dt;
      }
      this.amp += (this.ampTarget - this.amp) * Math.min(1, dt * 6);

      const setW = this.setW;
      const wrapped = ((this.o % setW) + setW) % setW;
      const x = -(setW + wrapped);
      this.track.style.transform = `translate3d(${x}px,0,0)`;

      const mid = this.reelW / 2;
      const vis = [];
      let pivot = -1, best = Infinity;
      for (const card of this.cards) {
        const center = card.left + x + card.w / 2;
        if (center < -card.w * 1.5 || center > this.reelW + card.w * 1.5) continue;
        const d = Math.abs(center - mid);
        let near = Math.max(0, 1 - d / (card.w * 1.4));
        near = near * near * (3 - 2 * near);
        const far = Math.max(0, 1 - d / (this.reelW * .62));
        const scale = 1 + this.amp * near;
        if (d < best) { best = d; pivot = vis.length; }
        vis.push({ card, near, far, scale, grow: card.w * (scale - 1) });
      }
      // the growing cards push their neighbours outward, so the gap between cards stays clear
      const shift = new Array(vis.length).fill(0);
      for (let i = pivot + 1, acc = vis[pivot] ? vis[pivot].grow / 2 : 0; i < vis.length; i++) {
        shift[i] = acc + vis[i].grow / 2;
        acc += vis[i].grow;
      }
      for (let i = pivot - 1, acc = vis[pivot] ? vis[pivot].grow / 2 : 0; i >= 0; i--) {
        shift[i] = -(acc + vis[i].grow / 2);
        acc += vis[i].grow;
      }
      vis.forEach(({ card, near, far, scale }, i) => {
        card.el.style.transform = `translateX(${shift[i].toFixed(1)}px) scale(${scale})`;
        card.el.style.opacity = (.42 + .58 * Math.max(near, far * far)).toFixed(3);
        card.el.style.zIndex = Math.round(near * 10);
        card.el.style.setProperty("--ring", this.ampTarget > .15 ? near.toFixed(2) : 0);
      });
    }
  }

  $$(".works").forEach((s) => reels.push(new Reel(s)));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { const r = reels.find((x) => x.el === en.target); if (r) r.visible = en.isIntersecting; });
  });
  reels.forEach((r) => io.observe(r.el));

  let last = performance.now();
  function frame(now) {
    const dt = Math.min(.05, (now - last) / 1000);
    last = now;
    reels.forEach((r) => { if (r.visible) r.render(dt); });
    requestAnimationFrame(frame);
  }

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => reels.forEach((r) => r.layout()), 150);
  });

  /* ============================ lightbox ============================ */
  const lb = $("#lightbox"), media = $("#lbMedia"), link = $("#lbLink");
  let lastFocus = null;
  const videoKind = (v) => {
    if (!v) return null;
    if (/youtu\.?be/.test(v)) return "youtube";
    if (/vimeo\.com/.test(v)) return "vimeo";
    if (/drive\.google\.com/.test(v)) return "drive";
    if (/\.(mp4|webm|mov)(\?|$)/i.test(v)) return "file";
    return "link";
  };

  // the viewer steps through the section it was opened from
  let lbList = [], lbIndex = 0;
  function openLightbox(list, index) {
    if (lb.hidden) lastFocus = document.activeElement;
    lbList = list;
    lbIndex = (index + list.length) % list.length;
    showItem(lbList[lbIndex]);
    $("#lbCount").textContent = `${lbIndex + 1} / ${lbList.length}`;
    $("#lbPrev").hidden = $("#lbNext").hidden = lbList.length < 2;
  }
  const stepLightbox = (d) => { if (!lb.hidden && lbList.length > 1) openLightbox(lbList, lbIndex + d); };

  function showItem(item) {
    media.replaceChildren();
    const kind = videoKind(item.video);
    // open each piece in its own shape: reels tall, films wide
    const shapes = { story: "9 / 16", square: "1 / 1", wide: "16 / 9" };
    $("#lbPanel").style.setProperty("--ar", shapes[item.shape] || (kind ? "16 / 9" : "4 / 5"));
    // Drive's player squeezes its controls into a broken strip when the frame is short
    $("#lbPanel").classList.toggle("is-player", kind === "drive" || kind === "youtube" || kind === "vimeo");
    if (kind === "youtube") {
      const id = (item.video.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/) || [])[1];
      media.append(make("iframe", {
        src: "https://www.youtube.com/embed/" + id + "?autoplay=1&rel=0",
        allow: "autoplay; encrypted-media; picture-in-picture", allowFullscreen: true, title: pick(item.title) || "video",
      }));
    } else if (kind === "drive") {
      // any Drive share link works: .../file/d/ID/view, open?id=ID, uc?id=ID
      const id = (item.video.match(/\/d\/([\w-]+)/) || item.video.match(/[?&]id=([\w-]+)/) || [])[1];
      media.append(make("iframe", {
        src: "https://drive.google.com/file/d/" + id + "/preview",
        allow: "autoplay; fullscreen", allowFullscreen: true, title: pick(item.title) || "video",
      }));
    } else if (kind === "vimeo") {
      const id = (item.video.match(/vimeo\.com\/(?:video\/)?(\d+)/) || [])[1];
      media.append(make("iframe", {
        src: "https://player.vimeo.com/video/" + id + "?autoplay=1",
        allow: "autoplay; fullscreen; picture-in-picture", allowFullscreen: true, title: pick(item.title) || "video",
      }));
    } else if (kind === "file") {
      media.append(make("video", { src: item.video, controls: true, autoplay: true, playsInline: true, poster: item.image }));
    } else {
      media.append(make("img", { src: item.image, alt: pick(item.title) || "" }));
    }
    const title = pick(item.title) || "";
    // a direct link to the video too, in case the embedded player can't load
    const href = item.link || (kind && kind !== "file" ? item.video : "");
    link.textContent = t(item.link ? "viewProject" : "openVideo");
    $("#lbTitle").textContent = title;
    link.hidden = !href;
    if (href) link.href = href;
    if (lb.hidden) {
      lb.hidden = false;
      document.body.style.overflow = "hidden";
      $("#lbClose").focus();
    }
  }
  function closeLightbox() {
    lb.hidden = true;
    media.replaceChildren();
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  $("#lbClose").addEventListener("click", closeLightbox);
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
  $("#lbNext").addEventListener("click", () => stepLightbox(1));
  $("#lbPrev").addEventListener("click", () => stepLightbox(-1));
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    // arrow keys follow the reading direction: in Arabic, left means next
    const rtl = document.documentElement.dir === "rtl";
    if (e.key === "ArrowRight") stepLightbox(rtl ? -1 : 1);
    if (e.key === "ArrowLeft") stepLightbox(rtl ? 1 : -1);
  });

  /* ============================== menu ============================== */
  const menuBtn = $("#menuBtn"), menu = $("#menu");
  const setMenu = (open) => {
    menu.hidden = !open;
    menuBtn.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  };
  menuBtn.addEventListener("click", () => setMenu(menu.hidden));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !menu.hidden) setMenu(false); });

  // highlight the section you're looking at in the centered nav
  const pillLinks = $$("#navPill a");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const id = en.target.id || "top";
      pillLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  [$(".hero"), ...$$("main > section[id]")].forEach((s) => spy.observe(s));
  pillLinks[0].classList.add("is-active");
  $("#langBtn").addEventListener("click", () => {
    applyLang(lang === "ar" ? "en" : "ar");
    reels.forEach((r) => r.layout());
  });

  /* ============================== start ============================== */
  applyLang(lang);
  reels.forEach((r) => r.layout());
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => reels.forEach((r) => r.layout()));
  requestAnimationFrame(frame);

  /* ============================== motion ============================== */
  const root = document.documentElement;
  if (root.classList.contains("anim")) {
    window.__motionReady = true;
    // start the hero sequence once the display fonts are in, so lines don't reflow mid-move
    const fontsIn = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    Promise.race([fontsIn, new Promise((r) => setTimeout(r, 900))])
      .then(() => window.__intro) // wait for the logo intro (intro.js) to step aside
      .then(() => requestAnimationFrame(() => root.classList.add("intro")));

    // scroll reveals; items in the same group enter one after another
    const groups = [
      $$(".sec-head h2"), $$(".reel"), $$(".reel-foot"),
      $$(".marquee"), $$(".about-text > *"), $$(".timeline li"),
      $$(".contact-in > div > *"), $$(".contact-list li"),
    ];
    // a fully masked title has no visible area, so watch its row instead of the title itself
    const watched = new Map();
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        watched.get(en.target).classList.add("is-in");
        reveal.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    groups.forEach((els, g) => els.forEach((el, i) => {
      el.classList.add("rv");
      if (g >= 3) el.style.setProperty("--d", i);
      const watch = el.matches(".sec-head h2") ? el.parentElement : el;
      watched.set(watch, el);
      reveal.observe(watch);
    }));
  }

  // pointer parallax on the hero (mouse and trackpad only)
  const hero = $(".hero");
  if (!reduceMotion && matchMedia("(pointer: fine)").matches) {
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
      hero.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
    });
    hero.addEventListener("pointerleave", () => {
      hero.style.setProperty("--mx", 0);
      hero.style.setProperty("--my", 0);
    });
  }
})();
