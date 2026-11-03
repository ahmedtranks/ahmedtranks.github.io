/* Logo intro: plays the After Effects logo (Lottie) once per visit, then hands off to the hero animation.
   portrait.json / landscape.json / sound.mp3 live in intro/. To turn it off, remove the #intro block from index.html. */
(function () {
  const root = document.documentElement;
  const box = document.getElementById("intro");
  if (!box) return;
  let seen = false;
  try { seen = sessionStorage.getItem("introSeen") === "1"; } catch (e) {}
  if (seen || !root.classList.contains("anim")) {
    box.remove();
    window.__intro = Promise.resolve();
    return;
  }
  try { sessionStorage.setItem("introSeen", "1"); } catch (e) {}

  let release;
  window.__intro = new Promise((r) => (release = r));
  root.classList.add("has-intro");

  const en = location.hash === "#en" || (location.hash !== "#ar" && (() => { try { return localStorage.getItem("lang") === "en"; } catch (e) { return false; } })());
  const skipBtn = box.querySelector(".intro-skip");
  const soundBtn = box.querySelector(".intro-sound");
  skipBtn.textContent = en ? "Skip" : "تخطّي";
  soundBtn.setAttribute("aria-label", en ? "Sound" : "الصوت");

  const audio = new Audio("intro/sound.mp3");
  audio.preload = "auto";
  let anim = null, done = false;

  function finish(fast) {
    if (done) return;
    done = true;
    box.classList.add("is-out");
    root.classList.remove("has-intro");
    release();
    if (fast) fadeAudio();
    setTimeout(() => { box.remove(); if (anim) anim.destroy(); }, 900);
  }
  function fadeAudio() {
    const step = () => {
      audio.volume = Math.max(0, audio.volume - 0.1);
      if (audio.volume > 0) setTimeout(step, 40); else audio.pause();
    };
    step();
  }
  function setSound(on) { soundBtn.classList.toggle("is-on", on); }
  function startSound() {
    if (anim) audio.currentTime = anim.currentFrame / anim.frameRate;
    return audio.play().then(() => setSound(true));
  }

  skipBtn.addEventListener("click", () => finish(true));
  soundBtn.addEventListener("click", () => {
    if (audio.paused) startSound().catch(() => {});
    else { audio.pause(); setSound(false); }
  });

  // never hold the visitor if the files are slow or fail
  const giveUp = setTimeout(() => finish(), 3000);
  setTimeout(() => finish(), 9000);

  const file = innerWidth >= innerHeight ? "intro/landscape.json" : "intro/portrait.json";
  const lib = new Promise((ok, fail) => {
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie_light.min.js";
    s.onload = ok; s.onerror = fail;
    document.head.append(s);
  });
  Promise.all([lib, fetch(file).then((r) => r.json())]).then(([, data]) => {
    if (done) return;
    clearTimeout(giveUp);
    anim = lottie.loadAnimation({
      container: box.querySelector(".intro-stage"), renderer: "svg", loop: false, autoplay: false, animationData: data,
    });
    anim.addEventListener("complete", () => setTimeout(() => finish(), 250));
    anim.play();
    box.classList.add("is-playing");
    // browsers only allow sound after the visitor has touched the page; until then the button offers it
    startSound().catch(() => setSound(false));
  }).catch(() => finish());
})();
