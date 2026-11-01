/* =====================================================================
   ملف المحتوى — ده الملف الوحيد اللي محتاج تعدّل فيه
   ---------------------------------------------------------------------
   • النصوص مكتوبة مرتين: ar للعربي و en للإنجليزي.
   • الأعمال: كل سطر { ... } = كارت واحد في المعرض.
     الترتيب على الموقع = نفس الترتيب هنا.
   • خلي بالك من الفاصلة , بعد كل } وعلامات التنصيص " ".

   كل عمل فيه:
     image : الصورة (حطها في فولدر images/works واكتب اسمها هنا)  ← مطلوب
     video : (اختياري) لينك يوتيوب أو فيميو، أو ملف mp4 جوه فولدر videos
     link  : (اختياري) لينك المشروع على بيهانس أو أي مكان
     title : (اختياري) اسم يظهر بس لما العمل يتفتح كبير
     shape : (اختياري) شكل الكارت في قسم الجرافيك عشان الصورة متتقصّش:
             "wide" للعرضي 16:9 ، "story" للطولي 9:16 (ستوري/ريلز)، "square" للمربع.
             في الجرافيك: من غيره = بوست 4:5 — في الموشن والفيديو: من غيره = عرضي 16:9
   ===================================================================== */

const SITE = {
  brand: "Ahmed Hashish",
  name:     { ar: "أحمد حشيش", en: "Ahmed Hashish" },
  role:     { ar: "مصمم ملتيميديا وموشن جرافيك", en: "Multimedia & Motion Graphics Designer" },
  headline: { ar: ["خلّي فكرتك", "تتحرّك"], en: ["Let your idea", "move."] },
  intro: {
    ar: "بحوّل الأفكار لصور وحركة وفيديو بيحكي قصة البراند. خبرة أكتر من 5 سنين بين الجرافيك والموشن والمونتاج.",
    en: "I turn ideas into visuals, motion and video that tell a brand's story. 5+ years across graphic design, motion and editing.",
  },
  about: {
    ar: [
      "مصمم ملتيميديا بخبرة أكتر من 5 سنين في الموشن جرافيك والجرافيك ديزاين. بشتغل على المحتوى البصري للمنصات الرقمية من الفكرة لحد التسليم.",
      "بستخدم أدوات Adobe والأنيميشن 2D و3D والمونتاج، ومعاها أدوات الذكاء الاصطناعي عشان أسرّع الشغل وأرفع جودته. اشتغلت مع شركات في مصر والسعودية والإمارات وعُمان.",
    ],
    en: [
      "Multimedia designer with 5+ years in motion graphics and graphic design. I take visual content for digital platforms from idea to delivery.",
      "I work across Adobe tools, 2D and 3D animation and video editing, with AI tools to move faster and raise quality. I've worked with teams in Egypt, Saudi Arabia, the UAE and Oman.",
    ],
  },
  stats: [
    { value: "+5",   label: { ar: "سنين خبرة",   en: "Years of experience" } },
    { value: "+250", label: { ar: "فيديو موشن",  en: "Motion videos" } },
    { value: "+120", label: { ar: "عميل",        en: "Clients" } },
  ],
  tools: [
    "After Effects", "Premiere Pro", "Illustrator", "Photoshop", "InDesign",
    "DaVinci Resolve", "Blender", "Cinema 4D", "CapCut",
  ],
  // نماذج وأدوات الذكاء الاصطناعي — بتظهر في سطر لوحدها تحت البرامج
  aiTools: [
    "Seedance", "Higgsfield", "Kling", "Wan", "MiniMax Hailuo", "Nano Banana",
    "Gemini Omni Flash", "Seedream", "Midjourney", "GPT Image", "Ideogram",
  ],
  experience: [
    { when: "2026",        where: "Morganti GCC",                    place: { ar: "أبوظبي", en: "Abu Dhabi" },        what: { ar: "مصمم ملتيميديا", en: "Multimedia Designer" } },
    { when: "2026",        where: "INK Communications",              place: { ar: "أبوظبي", en: "Abu Dhabi" },        what: { ar: "مصمم ملتيميديا", en: "Multimedia Designer" } },
    { when: "2025",        where: "KM Production",                   place: { ar: "الإسكندرية", en: "Alexandria" },   what: { ar: "مونتير وموشن تعليمي", en: "Video Editor & Education Motion" } },
    { when: "2024 – 2025", where: "Sun Media",                       place: { ar: "الأردن وعُمان", en: "Jordan & Oman" }, what: { ar: "موشن ومونتاج", en: "Motion & Video Editing" } },
    { when: "2023 – 2025", where: "Azzrk · Qaeed · Samuo",           place: { ar: "الرياض", en: "Riyadh" },           what: { ar: "موشن ومونتاج", en: "Motion & Video Editing" } },
    { when: "2015 – 2023", where: "Claro.eg · Freelance · Anas Publishing", place: { ar: "مصر", en: "Egypt" },        what: { ar: "جرافيك ديزاينر", en: "Graphic Designer" } },
  ],
  contact: {
    whatsapp: "201030481820",              // الرقم بالكود الدولي من غير + ولا مسافات
    phone: "+20 103 048 1820",
    email: "ahmedabdelrhime63@gmail.com",
    behance: "https://www.behance.net/ahmedtranks",
    linkedin: "https://www.linkedin.com/in/ahmedtranks/",
    instagram: "",                          // حط لينك إنستجرام هنا لو عاوزه يظهر
    vimeo: "https://vimeo.com/tranks",
    tiktok: "https://www.tiktok.com/@ahmedtranks",
  },
  // زرار "تحميل سيرتي الذاتية" — الملف جوه فولدر files وبيتحمّل على طول.
  // لو عاوزه من الدرايف بدل كده: "https://drive.google.com/uc?export=download&id=1r4PVRIk1QpAC5JeEw12NJdJqFeOb40o6"
  resume: "files/Ahmed-Hashish-CV.pdf",
  // زرار "شاهد كل الأعمال" تحت كل قسم — سيب اللينك فاضي "" لو مش عاوز الزرار يظهر
  allWorks: {
    graphic: "https://drive.google.com/drive/folders/1IHJmJUhtCce4eey5fXUfXB-aU87n0urW",
    motion:  "https://drive.google.com/drive/folders/1svEWJegrCWH-9IOUbiMDCzvg0ta7n8Fv",
    video:   "https://drive.google.com/drive/folders/1ZGx6u3VyO-giQCaiC-Wp13r_wcWtXCLp",
  },
};

const WORKS = {
  /* ---------------- جرافيك ديزاين ---------------- */
  graphic: [
    { image: "images/works/g01-hamdy-cars.webp", shape: "wide" },
    { image: "images/works/g02-first-shot.webp", shape: "wide" },
    { image: "images/works/g03-collage-art-2.webp", shape: "wide" },
    { image: "images/works/g04-collage-art-1.webp", shape: "wide" },
    { image: "images/works/g05-ink-insta-11.webp" },
    { image: "images/works/g06-hana.webp", shape: "story" },
    { image: "images/works/g07-ink-insta-21.webp" },
    { image: "images/works/g08-ink-ramadan-27.webp" },
    { image: "images/works/g09-ink-ramadan-03.webp" },
    { image: "images/works/g10-ink-ramadan-04.webp" },
    { image: "images/works/g11-eid-03.webp" },
    { image: "images/works/g12-timeely.webp", shape: "story" },
    { image: "images/works/g13-neda-media-6.webp", shape: "story" },
    { image: "images/works/g14-abu-alabd.webp", shape: "story" },
    { image: "images/works/g15-sehat-store.webp", shape: "story" },
    { image: "images/works/g16-sdiri.webp", shape: "story" },
    { image: "images/works/g17-modladyshop.webp", shape: "story" },
    { image: "images/works/g18-heroesksa-shot-4.webp", shape: "story" },
    { image: "images/works/g19-heroesksa.webp", shape: "story" },
    { image: "images/works/g20-electrofasts.webp", shape: "story" },
    { image: "images/works/g21-comfy.webp", shape: "story" },
    { image: "images/works/g22-ao22.webp", shape: "story" },
    { image: "images/works/g23-samadperfumes.webp", shape: "story" },
    { image: "images/works/g24-artboard-05.webp" },
    { image: "images/works/g25-asalazhar.webp", shape: "story" },
    { image: "images/works/g26-ink-poster-08.webp" },
  ],

  /* ---------------- موشن جرافيك ---------------- */
  motion: [
    { image: "images/works/m01-collage-art.webp", video: "https://drive.google.com/file/d/1L9KfTVYl9yjrIAQFPvuhXUSfo2S_V6sd/view" },
    { image: "images/works/m02-showreel.webp", video: "https://drive.google.com/file/d/1pYKYlJIhJXi20VEc5X7cCxCrwRYeJ0BQ/view" },
    { image: "images/works/m03-sell-or-buy-assets.webp", video: "https://drive.google.com/file/d/14TT1VYHCRJWtwJeWzrAu0HDgLWsvHEQG/view" },
    { image: "images/works/m04-lexport-platform.webp", video: "https://drive.google.com/file/d/1NEqpQV9t1NPiwtWS80ATR0Vua58jEfvo/view" },
    { image: "images/works/m05-ethrai-promo.webp", video: "https://drive.google.com/file/d/178j605Qc1l0SmYcpU4fNQIwCfb5ZTRbU/view" },
    { image: "images/works/m06-cti-stream-intro.webp", video: "https://drive.google.com/file/d/14yKY6pwCCDqJlgvse---fpyL8xjx9qUt/view" },
    { image: "images/works/m07-rawabi-riyadh-auction.webp", video: "https://drive.google.com/file/d/1GSbFEHPXpqvuEE6RQe8-1sDYMQQdyI5n/view" },
    { image: "images/works/m08-bashaer-taif-auction.webp", video: "https://drive.google.com/file/d/1drNGpIydfqW0zgxsrBMZEZf2sVQupzrE/view" },
    { image: "images/works/m09-alfozan-academy.webp", video: "https://drive.google.com/file/d/1zuMWBZI4gSeT1M_Bu2SPv2WS0e8L5E7k/view" },
    { image: "images/works/m10-qamhawey.webp", video: "https://drive.google.com/file/d/1pBJi7L9zva0ZM6U77k3h4NnnhBKjLxZP/view", shape: "story" },
    { image: "images/works/m11-ethraai-platform.webp", video: "https://drive.google.com/file/d/1CoT_4gEe1ZZZ46mIAl9xStOjMq-R4_DI/view" },
    { image: "images/works/m12-ar7boo.webp", video: "https://drive.google.com/file/d/1hQMtRBbywmSRD-u6OSZhGWQsPrVPEsqP/view", shape: "story" },
    { image: "images/works/m13-collage-0.webp", video: "https://drive.google.com/file/d/1DObkCxoUMY6k0HikRZe1QoJM3xh4HJUj/view" },
    { image: "images/works/m14-heroesksa.webp", video: "https://drive.google.com/file/d/1Ds0KllWkrrqh__j7x4pKS-R3I7PPBA8C/view", shape: "story" },
    { image: "images/works/m15-bellaro-store.webp", video: "https://drive.google.com/file/d/1y9xl4RW8U8T6PP2oZuXd_oDaBZYhjKwy/view", shape: "story" },
    { image: "images/works/m16-wahaaj-store.webp", video: "https://drive.google.com/file/d/1lvL13hiDVfX122DdC8Y9wv3mYGX0hzgu/view", shape: "story" },
    { image: "images/works/m17-topaz-perfumes.webp", video: "https://drive.google.com/file/d/1sVznj2Z5PWWSxIp9Mn8AHY86ERjX5cas/view", shape: "story" },
    { image: "images/works/m18-bbcorp-logo.webp", video: "https://drive.google.com/file/d/16rvmIMj-8BMjst7ZKE9jY9BhlevXLFqJ/view", shape: "square" },
    { image: "images/works/m19-danastoree.webp", video: "https://drive.google.com/file/d/1T9_gY4U89pqz2Ds2gPsir8Yy4ueJMwWl/view", shape: "story" },
    { image: "images/works/m20-hana.webp", video: "https://drive.google.com/file/d/1lZLNg0oHpj25h-0wgsSiN60CvZKavzeb/view", shape: "story" },
    { image: "images/works/m21-honobrand.webp", video: "https://drive.google.com/file/d/1dhvrWyTSxthugDPh4bbSPuCU2MEmXKUE/view", shape: "story" },
    { image: "images/works/m22-tv-protective.webp", video: "https://drive.google.com/file/d/17k1tut3L3rw562hCF0Ny-wyNXeztSbhX/view", shape: "story" },
    { image: "images/works/m23-redmeatksa.webp", video: "https://drive.google.com/file/d/1wkhO4ttICgRtBAV--BbXdGcOcft8_Gre/view", shape: "story" },
    { image: "images/works/m24-cady-alkhair-v2.webp", video: "https://drive.google.com/file/d/1SCOQNEGpPpsCUi0MtYsXat9Hbc_8vw_w/view", shape: "story" },
    { image: "images/works/m25-cady-alkhair-v3.webp", video: "https://drive.google.com/file/d/1mRIYdm6OYiaRNDw0zKsQ7vJ2d5ZZwim4/view", shape: "story" },
    { image: "images/works/m26-riyadh-pumps.webp", video: "https://drive.google.com/file/d/1mIEGEJpz21AdxkizoXRt2V_Bn9QpfXN5/view", shape: "story" },
    { image: "images/works/m27-malbous.webp", video: "https://drive.google.com/file/d/1DXHcdpYrOk6KNDGWEfyUCUXaQU-wEEO3/view", shape: "story" },
    { image: "images/works/m28-mmm-store.webp", video: "https://drive.google.com/file/d/1tGmINECYGWSY-BVTEqhnji8qyyJ7Qxe4/view", shape: "story" },
    { image: "images/works/m29-motion.webp", video: "https://drive.google.com/file/d/1GznDHVKXjBLaJECyiEP2rYQbawZ9U1-D/view" },
  ],

  /* ---------------- AI & فيديو برودكشن ---------------- */
  video: [
    { image: "images/works/v01-event-ead.webp", video: "https://drive.google.com/file/d/1ewFNhi_aYs-bh_SGDYVovxtGjLUAj0Jq/view" },
    { image: "images/works/v02-union-day-54.webp", video: "https://drive.google.com/file/d/1Jpv7rxdDRFgYLYlcZsCUmbDnzGJwDXmd/view" },
    { image: "images/works/v03-showreel-03.webp", video: "https://drive.google.com/file/d/1ZDvV3sjYW2479L5Csw7EQMqI_LUhZj9-/view" },
    { image: "images/works/v04-airports-gathering.webp", video: "https://drive.google.com/file/d/1i-4Y8aBcR-A55VrFbfm8ieVXhCsGxikw/view" },
    { image: "images/works/v05-internet-day.webp", video: "https://drive.google.com/file/d/184PiCuFa1GALDUmmE_OpzpzW3y_gJXen/view" },
    { image: "images/works/v06-shadow-soldiers.webp", video: "https://drive.google.com/file/d/1Ah4DManhVRnbYRCl2P8DcSsGmOXRG0Sf/view" },
    { image: "images/works/v07-20-pound.webp", video: "https://drive.google.com/file/d/1PdWTnkL5cNxdlWWU_ourgi3q-DarZ4jN/view" },
    { image: "images/works/v08-qamhawey-tiny-figures.webp", video: "https://drive.google.com/file/d/11oNtRO2hb2vYzIiMzJ8xE_ni8noveFDF/view" },
    { image: "images/works/v09-manteq-promo.webp", video: "https://drive.google.com/file/d/1iLP1mj3tkvyjsrEFeWA2m83KTjZYKWXS/view" },
    { image: "images/works/v10-jalal-aldin-reels.webp", video: "https://drive.google.com/file/d/13zWVTbWWVdfulQFXynoCiChCv8SM1j7G/view" },
    { image: "images/works/v11-podcast-e03.webp", video: "https://drive.google.com/file/d/1cLsbbAaGSH73u66wEBPEmubtipn3q3sf/view" },
    { image: "images/works/v12-human-first-ep3.webp", video: "https://drive.google.com/file/d/1eiax5M4ji-KdzdwP5FgWhnSSH0IjpW4R/view", shape: "story" },
    { image: "images/works/v13-intellectuals-promo.webp", video: "https://drive.google.com/file/d/1DejscpCobuL9lWFZJyQFKQYFhCyyJW3H/view" },
    { image: "images/works/v14-zayed-fingers-ep1.webp", video: "https://drive.google.com/file/d/18C-7JPR0tj_CiKzyeEi5DIFV860wfR6k/view", shape: "story" },
    { image: "images/works/v15-ink-04.webp", video: "https://drive.google.com/file/d/1wi-pdpEciOgX5nisTPofBoSBtCeWUK_e/view", shape: "story" },
    { image: "images/works/v16-reel-06.webp", video: "https://drive.google.com/file/d/1qGnFLFNhO_UBrkODwCmSV-k1ZwH02ymn/view", shape: "story" },
    { image: "images/works/v17-ink-03.webp", video: "https://drive.google.com/file/d/1pXYTXXRP7yWB0SZ3k9q96jz0OwAV0_EG/view", shape: "story" },
    { image: "images/works/v18-ink-2k.webp", video: "https://drive.google.com/file/d/1okT-VmOL3E11xm0UyOvuui_jFCH1yVrv/view" },
    { image: "images/works/v19-eye-buy-book.webp", video: "https://drive.google.com/file/d/15p-X2Kd7uQs1vWkRKdf-VEwN9DDRts4-/view" },
    { image: "images/works/v20-exhibition-04.webp", video: "https://drive.google.com/file/d/1TzYT2O59uldr6j38yE9kNsTsTFkSL-u-/view", shape: "story" },
  ],
};

/* =====================================================================
   عملائي
   ---------------------------------------------------------------------
     name : اسم العميل (بيظهر مكان اللوجو لو مفيش لوجو، وبيتقري لقارئات الشاشة)
     logo : (اختياري) اللوجو في فولدر images/clients — يفضل PNG أو SVG بخلفية شفافة
     link : (اختياري) لينك موقع العميل
     featured: true  ← العميل يظهر في الصف الأول بلوجو أكبر
   اللوجوهات بتتقسم على شريطين بيتحركوا عكس بعض، فأي لوجو تضيفه هيظهر لوحده.
   الأفضل اللوجو يكون أبيض بخلفية شفافة عشان يتناسق مع الباقي.
   ===================================================================== */
const CLIENTS = [
  { name: "Abu Dhabi Judicial Department", logo: "images/clients/abu-dhabi-judicial.webp", featured: true },
  { name: "Morganti GCC",                  logo: "images/clients/morganti.webp", featured: true },
  { name: "Khalifa Fund",                  logo: "images/clients/khalifa-fund.webp", featured: true },
  { name: "Environment Agency – Abu Dhabi", logo: "images/clients/environment-agency.svg", featured: true },
  { name: "Emirati Talent Competitiveness Council", logo: "images/clients/emirati-talent-council.webp", featured: true },
  { name: "The UAE Council for Fatwa",     logo: "images/clients/uae-fatwa-council.webp", featured: true },
  { name: "Elderly Safety – Abu Dhabi Public Health Centre", logo: "images/clients/elderly-safety.webp", featured: true },
  { name: "Arkan Media", logo: "images/clients/arkan-media.webp" },
  { name: "Primadiva", logo: "images/clients/primadiva.webp" },
  { name: "Mubkhar Al Thuraiya", logo: "images/clients/mubkhar-al-thuraiya.webp" },
  { name: "Horeka", logo: "images/clients/horeka.webp" },
  { name: "Al Sabban Farms", logo: "images/clients/al-sabban-farms.webp" },
  { name: "Snam Store", logo: "images/clients/snam-store.webp" },
  { name: "Tlabatcom", logo: "images/clients/tlabatcom.webp" },
  { name: "Yusr Awy", logo: "images/clients/yusr-awy.webp" },
  { name: "Al Takhassos Trading & Contracting", logo: "images/clients/al-takhassos-trading-and-contracting.webp" },
  { name: "My Coffee", logo: "images/clients/my-coffee.webp" },
  { name: "Sun Media", logo: "images/clients/sun-media.webp" },
  { name: "Saudigram Travel Agency", logo: "images/clients/saudigram-travel-agency.webp" },
  { name: "Green Building", logo: "images/clients/green-building.webp" },
  { name: "Al Kookh Cafe", logo: "images/clients/al-kookh-cafe.webp" },
  { name: "Industry & Exports Directory", logo: "images/clients/industry-and-exports-directory.webp" },
  { name: "The Housekeepers", logo: "images/clients/the-housekeepers.webp" },
  { name: "MHLLAT", logo: "images/clients/mhllat.webp" },
  { name: "Saqr Elsaharaa", logo: "images/clients/saqr-elsaharaa.webp" },
  { name: "SEHHI", logo: "images/clients/sehhi.webp", featured: true },
  { name: "Shaki Burger", logo: "images/clients/shaki-burger.webp" },
  { name: "White Deer", logo: "images/clients/white-deer.webp" },
  { name: "T7SEEN", logo: "images/clients/t7seen.webp" },
  { name: "VAZA", logo: "images/clients/vaza.webp" },
  { name: "Al Duroo Al Waqiya", logo: "images/clients/al-duroo-al-waqiya.webp" },
  { name: "Wamda Store", logo: "images/clients/wamda-store.webp" },
  { name: "Crown Prince Court", logo: "images/clients/crown-prince-court.webp", featured: true },
  { name: "Malbouscom", logo: "images/clients/malbouscom.webp" },
  { name: "Dehliz Design", logo: "images/clients/dehliz-design.webp" },
  { name: "Cosmetic Boutique", logo: "images/clients/cosmetic-boutique.webp" },
  { name: "Innovative Modern Corner", logo: "images/clients/innovative-modern-corner.webp" },
  { name: "Abaq Al Arabia", logo: "images/clients/abaq-al-arabia.webp" },
  { name: "Beauty Stores", logo: "images/clients/beauty-stores.webp" },
  { name: "Hawi", logo: "images/clients/hawi.webp", featured: true },
  { name: "5G Store", logo: "images/clients/5g-store.webp" },
  { name: "Diora Care Medical Complex", logo: "images/clients/diora-care-medical-complex.webp" },
  { name: "LEF Cosmetics", logo: "images/clients/lef-cosmetics.webp" },
  { name: "Muawadat", logo: "images/clients/muawadat.webp" },
  { name: "Masaedak Digital", logo: "images/clients/masaedak-digital.webp" },
  { name: "OSARH Education Technology", logo: "images/clients/osarh-education-technology.webp", featured: true },
  { name: "Sea and Dunes", logo: "images/clients/sea-and-dunes.webp" },
  { name: "Home Nest", logo: "images/clients/home-nest.webp" },
  { name: "Topaz", logo: "images/clients/topaz.webp" },
  { name: "Talaera", logo: "images/clients/talaera.webp" },
  { name: "Ethraai", logo: "images/clients/ethraai.webp", featured: true },
  { name: "Arhabo", logo: "images/clients/arhabo.webp" },
  { name: "Al Fozan Academy", logo: "images/clients/al-fozan-academy.webp", featured: true },
  { name: "Al-Tayea Industrial Company", logo: "images/clients/al-tayea-industrial-company.webp" },
  { name: "Al Makkawi", logo: "images/clients/al-makkawi.webp" },
  { name: "Tahakom", logo: "images/clients/tahakom.webp" },
  { name: "Zavan Perfume", logo: "images/clients/zavan-perfume.webp" },
  { name: "Sdiri", logo: "images/clients/sdiri.webp" },
  { name: "MSK Dental Care", logo: "images/clients/msk-dental-care.webp" },
  { name: "71 Media", logo: "images/clients/71-media.webp" },
  { name: "Atfal 71", logo: "images/clients/atfal-71.webp" },
  { name: "Shams Digital", logo: "images/clients/shams-digital.webp" },
  { name: "Atri", logo: "images/clients/atri.webp" },
  { name: "Qamhawey", logo: "images/clients/qamhawey.webp" },
  { name: "Mandi Al Jazeera", logo: "images/clients/mandi-al-jazeera.webp" },
  { name: "Manteq", logo: "images/clients/manteq.webp", featured: true },
];
