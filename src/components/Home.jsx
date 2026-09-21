import { useState, useEffect } from "react";
// Put sunlogo.png in  src/assets/  (this file lives in src/components/Home.jsx)
import universityLogo from "/sunlogo.png";

/* ------------------------------------------------------------------
   SETUP
   1. Put the 9 uploaded images in  /public/  (same filenames as in IMG below).
   2. Put your logo at  src/assets/sunlogo.png  (case-sensitive filename).
   3. All styling is inline CSS (no Tailwind / CSS files needed).
      Add this once to your global CSS or index.html for a clean base:
         body { margin: 0; }
   4. Replace everything inside CONTENT with the exact copy from
      sod.sandipuniversity.edu.in  (items marked "REPLACE" are placeholders).
   5. In handleSubmit(), send the lead to your CRM and fire your
      Google Ads conversion event (gtag_report_conversion).
------------------------------------------------------------------- */

// Every image is used exactly once.
const IMG = {
  hero: "/6A5A8616.jpg", // draping on mannequin
  campus: "/042__1_.jpg", // campus panorama
  mentor: "/SKP07334__1_.jpg", // faculty mentoring student
  craft: "/SKP07289__1_.jpg", // student embroidering
  collab: "/DSC_4484__1_.jpg", // students sketching + stitching
  detail: "/DSC_4518__1_.jpg", // close-up embroidery
  bottles: "/DSC_0045.JPG", // painted bottle art
  indigo: "/DSC_0042.JPG", // indigo-dyed drapes
  saree: "/DSC_0039.JPG", // block-print saree
};

const CONTENT = {
  brand: "Sandip University",
  // school: "School of Design",

  phone: "+91-XXXXXXXXXX", // REPLACE
  phoneHref: "tel:+91XXXXXXXXXX", // REPLACE
  heroTag: "Admissions Open 2026–27", // REPLACE
  heroTitle: "Design Your Future at the School of Design",
  heroSub:
    "Studio-based, industry-connected design education where you learn by making — from fashion and textiles to craft and creative direction.", // REPLACE
  heroPoints: [
    "Hands-on studio learning",
    "Experienced faculty mentors",
    "Industry-aligned curriculum",
    "Modern campus & design labs",
  ], // REPLACE
  stats: [
    { value: "00+", label: "Years of Excellence" },
    { value: "00+", label: "Industry Partners" },
    { value: "00+", label: "Design Labs & Studios" },
    { value: "00%", label: "Placement Support" },
  ], // REPLACE with real figures
  aboutTitle: "About the School of Design",
  aboutText: [
    "The School of Design at Sandip University nurtures creative thinkers who can turn ideas into products, garments and experiences.",
    "Students work in fully equipped studios, learn traditional techniques like block printing, dyeing and embroidery, and pair them with contemporary design thinking.",
  ], // REPLACE
  programs: [
    { name: "B.Des", duration: "4 Years", blurb: "Undergraduate design degree with specialisation options." },
    { name: "M.Des", duration: "2 Years", blurb: "Advanced design practice, research and portfolio building." },
    { name: "Diploma / Certificate", duration: "As per programme", blurb: "Short, skill-focused programmes in design and craft." },
  ], // REPLACE with the programmes listed on the SOD page
  highlights: [
    { title: "Learn by Making", text: "Draping, pattern making, dyeing, printing and embroidery in dedicated studios." },
    { title: "Mentorship", text: "Small studio groups with faculty who guide every project one-to-one." },
    { title: "Craft Meets Contemporary", text: "Work with indigo, block print, jute and upcycled materials for modern design." },
    { title: "Portfolio Ready", text: "Exhibitions and live projects help you graduate with work that stands out." },
    { title: "Industry Exposure", text: "Workshops, guest sessions and internships with design houses and brands." },
    { title: "Green Campus", text: "A spacious, well-connected campus built for creative focus." },
  ], // REPLACE
  careers: [
    "Fashion Designer",
    "Textile Designer",
    "Costume Designer",
    "Fashion Stylist",
    "Pattern Maker",
    "Merchandiser",
    "Creative Director",
    "Entrepreneur / Label Founder",
  ], // REPLACE
  steps: [
    { title: "Enquire", text: "Fill the form or call our admission desk." },
    { title: "Counselling", text: "Talk to our team about programmes and eligibility." },
    { title: "Apply", text: "Submit your application and documents." },
    { title: "Enrol", text: "Confirm your seat and start your design journey." },
  ], // REPLACE
  faqs: [
    { q: "What is the eligibility for admission?", a: "Eligibility depends on the programme. Please share your details and our counsellor will confirm the exact criteria." }, // REPLACE
    { q: "Do I need a drawing or portfolio background?", a: "No prior portfolio is mandatory for most programmes — creativity and interest matter most. Confirm with admissions for your chosen course." }, // REPLACE
    { q: "Are scholarships available?", a: "Merit-based scholarships may be available. Ask our admission team for the latest details." }, // REPLACE
    { q: "Is there placement or internship support?", a: "Yes, the university supports students with internships and placement opportunities in the design industry." }, // REPLACE
  ],
  footerAddress: "Sandip University, Nashik, Maharashtra, India", // REPLACE
};

/* ----------------------------- theme ----------------------------- */

const C = {
  blue950: "#172554",
  blue900: "#1e3a8a",
  blue800: "#1e40af",
  blue700: "#1d4ed8",
  blue200: "#bfdbfe",
  blue100: "#dbeafe",
  orange700: "#c2410c",
  orange600: "#ea580c",
  orange500: "#f97316",
  orange400: "#fb923c",
  orange200: "#fed7aa",
  orange100: "#ffedd5",
  slate900: "#0f172a",
  slate700: "#334155",
  slate600: "#475569",
  slate500: "#64748b",
  slate400: "#94a3b8",
  slate300: "#cbd5e1",
  slate200: "#e2e8f0",
  slate50: "#f8fafc",
  white: "#ffffff",
};

const FONT =
  "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

/* ----------------------------- helpers ----------------------------- */

function useWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return w;
}

// Returns responsive flags used by every section
function useBp() {
  const w = useWidth();
  return { sm: w >= 640, md: w >= 768, lg: w >= 1024 };
}

const goToForm = () =>
  document.getElementById("enquire")?.scrollIntoView({ behavior: "smooth" });

function Container({ children, style }) {
  const { sm } = useBp();
  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        maxWidth: 1152,
        margin: "0 auto",
        padding: sm ? "0 24px" : "0 16px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, center = true, light = false }) {
  const { sm } = useBp();
  return (
    <div style={{ textAlign: center ? "center" : "left" }}>
      {eyebrow && (
        <p
          style={{
            margin: 0,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: light ? C.orange400 : C.orange600,
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        style={{
          margin: "8px 0 0",
          fontSize: sm ? 36 : 30,
          fontWeight: 700,
          lineHeight: 1.2,
          color: light ? C.white : C.slate900,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

// Button / link with hover support (inline styles can't do :hover)
function Btn({ href, onClick, style, hoverStyle, children, type }) {
  const [hover, setHover] = useState(false);
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      type={href ? undefined : type || "button"}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-block",
        cursor: "pointer",
        textDecoration: "none",
        border: "none",
        fontFamily: "inherit",
        transition: "background-color .2s, transform .2s",
        ...style,
        ...(hover ? hoverStyle : {}),
      }}
    >
      {children}
    </Tag>
  );
}

// Card that lifts on hover
function HoverCard({ style, children }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        transition: "transform .2s, box-shadow .2s",
        transform: hover ? "translateY(-4px)" : "none",
        boxShadow: hover ? "0 10px 25px rgba(15,23,42,.12)" : "0 1px 2px rgba(15,23,42,.06)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Input / select with focus ring
function Field({ as = "input", style, ...props }) {
  const [focus, setFocus] = useState(false);
  const Tag = as;
  return (
    <Tag
      {...props}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        boxSizing: "border-box",
        width: "100%",
        padding: "11px 12px",
        fontSize: 14,
        fontFamily: "inherit",
        color: C.slate900,
        background: C.white,
        borderRadius: 8,
        outline: "none",
        border: `1px solid ${focus ? C.orange600 : C.slate300}`,
        boxShadow: focus ? `0 0 0 3px ${C.orange200}` : "none",
        ...style,
      }}
    />
  );
}

/* ----------------------------- lead form ----------------------------- */

function LeadForm() {
  const { sm } = useBp();
  const [data, setData] = useState({ name: "", phone: "", email: "", program: "", city: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: POST `data` to your CRM / backend
    // TODO: fire Google Ads conversion, e.g. gtag_report_conversion();
    console.log("Lead:", data);
    setSent(true);
  };

  const card = {
    boxSizing: "border-box",
    background: C.white,
    borderRadius: 16,
    padding: sm ? 32 : 24,
    boxShadow: "0 25px 50px rgba(0,0,0,.3)",
  };

  if (sent) {
    return (
      <div style={{ ...card, textAlign: "center", padding: 32 }}>
        <div
          style={{
            width: 56,
            height: 56,
            margin: "0 auto 16px",
            borderRadius: "50%",
            background: "#dcfce7",
            color: "#16a34a",
            fontSize: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✓
        </div>
        <h3 style={{ margin: 0, fontSize: 20, color: C.slate900 }}>Thank you!</h3>
        <p style={{ margin: "8px 0 0", fontSize: 14, color: C.slate600 }}>
          Our admission counsellor will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={card}>
      <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: C.slate900 }}>
        Apply / Get a Free Callback
      </h3>
      <p style={{ margin: "4px 0 0", fontSize: 14, color: C.slate500 }}>Takes less than a minute.</p>
      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        <Field name="name" placeholder="Full name" required value={data.name} onChange={onChange} />
        <Field name="phone" type="tel" placeholder="Mobile number" required pattern="[0-9+\- ]{10,15}" value={data.phone} onChange={onChange} />
        <Field name="email" type="email" placeholder="Email address" required value={data.email} onChange={onChange} />
        <Field name="city" placeholder="City" value={data.city} onChange={onChange} />
        <Field as="select" name="program" required value={data.program} onChange={onChange}>
          <option value="">Select programme</option>
          {CONTENT.programs.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name}
            </option>
          ))}
        </Field>
      </div>
      <Btn
        type="submit"
        style={{
          width: "100%",
          marginTop: 20,
          padding: "14px 16px",
          borderRadius: 8,
          background: C.orange600,
          color: C.white,
          fontSize: 16,
          fontWeight: 600,
        }}
        hoverStyle={{ background: C.orange700 }}
      >
        Submit Enquiry
      </Btn>
      <p style={{ margin: "12px 0 0", textAlign: "center", fontSize: 12, color: C.slate400 }}>
        By submitting, you agree to be contacted by Sandip University.
      </p>
    </form>
  );
}

/* ----------------------------- sections ----------------------------- */

function Header() {
  const { sm } = useBp();
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(255,255,255,.95)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${C.slate200}`,
      }}
    >
      <Container style={{ display: "flex", height: 64, alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src={universityLogo}
            alt={CONTENT.brand}
            style={{ height: 69, width: "auto", objectFit: "contain", display: "block" }}
          />
          <span style={{ fontSize: 13, fontWeight: 600, color: C.orange600 }}>{CONTENT.school}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {sm && (
            <a href={CONTENT.phoneHref} style={{ fontSize: 14, fontWeight: 600, color: C.slate700, textDecoration: "none" }}>
              📞 {CONTENT.phone}
            </a>
          )}
          <Btn
            onClick={goToForm}
            style={{ padding: "8px 20px", borderRadius: 999, background: C.orange600, color: C.white, fontSize: 14, fontWeight: 600 }}
            hoverStyle={{ background: C.orange700 }}
          >
            Apply Now
          </Btn>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  const { sm, lg } = useBp();
  return (
    <section style={{ position: "relative", overflow: "hidden", background: C.blue950 }}>
      <img
        src={IMG.hero}
        alt="Design student draping fabric on a mannequin in the studio"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to right, ${C.blue950}, rgba(23,37,84,.8), transparent)`,
        }}
      />
      <Container
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: lg ? "1fr 1fr" : "1fr",
          alignItems: "center",
          gap: 40,
          paddingTop: lg ? 80 : 56,
          paddingBottom: lg ? 80 : 56,
        }}
      >
        <div style={{ color: C.white }}>
          <span
            style={{
              display: "inline-block",
              padding: "4px 16px",
              borderRadius: 999,
              background: C.orange600,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {CONTENT.heroTag}
          </span>
          <h1 style={{ margin: "20px 0 0", fontSize: sm ? 48 : 36, fontWeight: 800, lineHeight: 1.15 }}>
            {CONTENT.heroTitle}
          </h1>
          <p style={{ margin: "16px 0 0", maxWidth: 576, fontSize: 18, lineHeight: 1.6, color: C.blue100 }}>
            {CONTENT.heroSub}
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: "24px 0 0",
              padding: 0,
              display: "grid",
              gridTemplateColumns: sm ? "1fr 1fr" : "1fr",
              gap: 8,
            }}
          >
            {CONTENT.heroPoints.map((p) => (
              <li key={p} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: C.orange500,
                    fontSize: 12,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div id="enquire" style={{ scrollMarginTop: 96 }}>
          <LeadForm />
        </div>
      </Container>
    </section>
  );
}

function Stats() {
  const { md } = useBp();
  return (
    <section style={{ background: C.orange600 }}>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: md ? "repeat(4, 1fr)" : "repeat(2, 1fr)",
          gap: 24,
          padding: "32px 24px",
          textAlign: "center",
          color: C.white,
        }}
      >
        {CONTENT.stats.map((s) => (
          <div key={s.label}>
            <p style={{ margin: 0, fontSize: 30, fontWeight: 800 }}>{s.value}</p>
            <p style={{ margin: "4px 0 0", fontSize: 14, color: C.orange100 }}>{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

function About() {
  const { sm, lg } = useBp();
  return (
    <section style={{ padding: sm ? "80px 0" : "64px 0" }}>
      <Container style={{ display: "grid", gridTemplateColumns: lg ? "1fr 1fr" : "1fr", alignItems: "center", gap: 40 }}>
        <div>
          <SectionTitle eyebrow="Who we are" title={CONTENT.aboutTitle} center={false} />
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 16, color: C.slate600, lineHeight: 1.7 }}>
            {CONTENT.aboutText.map((t) => (
              <p key={t} style={{ margin: 0 }}>{t}</p>
            ))}
          </div>
          <Btn
            onClick={goToForm}
            style={{ marginTop: 24, padding: "12px 24px", borderRadius: 999, background: C.blue900, color: C.white, fontSize: 14, fontWeight: 600 }}
            hoverStyle={{ background: C.blue800 }}
          >
            Talk to a Counsellor
          </Btn>
        </div>
        <img
          src={IMG.campus}
          alt="Sandip University campus"
          loading="lazy"
          style={{
            width: "100%",
            height: "100px",
            objectFit: "cover",
            borderRadius: 16,
            boxShadow: "0 20px 40px rgba(15,23,42,.2)",
          }}
        />
      </Container>
    </section>
  );
}

function Programs() {
  const { sm, md } = useBp();
  return (
    <section style={{ background: C.slate50, padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Programmes" title="Choose Your Design Path" />
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: md ? "repeat(3, 1fr)" : "1fr", gap: 24 }}>
          {CONTENT.programs.map((p) => (
            <HoverCard key={p.name} style={{ boxSizing: "border-box", background: C.white, border: `1px solid ${C.slate200}`, borderRadius: 16, padding: 24 }}>
              <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: 999, background: C.orange100, color: C.orange700, fontSize: 12, fontWeight: 600 }}>
                {p.duration}
              </span>
              <h3 style={{ margin: "16px 0 0", fontSize: 24, fontWeight: 700, color: C.slate900 }}>{p.name}</h3>
              <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{p.blurb}</p>
              <Btn
                onClick={goToForm}
                style={{ marginTop: 20, padding: 0, background: "none", color: C.orange600, fontSize: 14, fontWeight: 600 }}
                hoverStyle={{ color: C.orange700 }}
              >
                Enquire now →
              </Btn>
            </HoverCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Highlights() {
  const { sm, lg } = useBp();
  return (
    <section style={{ padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Why choose us" title="What Makes Our School Different" />
        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: lg ? "repeat(3, 1fr)" : sm ? "repeat(2, 1fr)" : "1fr",
            gap: 24,
          }}
        >
          {CONTENT.highlights.map((h, i) => (
            <div key={h.title} style={{ boxSizing: "border-box", border: `1px solid ${C.slate200}`, borderRadius: 16, padding: 24 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  background: C.blue900,
                  color: C.white,
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </div>
              <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 700, color: C.slate900 }}>{h.title}</h3>
              <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{h.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function GalleryItem({ src, alt, cap, style }) {
  const [hover, setHover] = useState(false);
  return (
    <figure
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ position: "relative", overflow: "hidden", margin: 0, borderRadius: 16, ...style }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform .5s",
          transform: hover ? "scale(1.05)" : "scale(1)",
        }}
      />
      <figcaption
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: 16,
          fontSize: 14,
          fontWeight: 600,
          color: C.white,
          background: "linear-gradient(to top, rgba(0,0,0,.7), transparent)",
        }}
      >
        {cap}
      </figcaption>
    </figure>
  );
}

function StudioLife() {
  const { sm, md } = useBp();
  const items = [
    { src: IMG.mentor, alt: "Faculty guiding a student with embroidery", cap: "One-to-one mentoring", span: { gridColumn: "span 2", gridRow: "span 2" } },
    { src: IMG.craft, alt: "Student hand-embroidering in the studio", cap: "Hands-on craft", span: {} },
    { src: IMG.collab, alt: "Students sketching and stitching together", cap: "Collaborative studios", span: {} },
    { src: IMG.detail, alt: "Close-up of embroidery in progress", cap: "Attention to detail", span: { gridColumn: "span 2" } },
  ];
  return (
    <section style={{ background: C.blue950, color: C.white, padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Life in the studio" title="Where Ideas Become Design" light />
        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: md ? "repeat(4, 1fr)" : "1fr",
            gridAutoRows: md ? 190 : 220,
            gap: 16,
          }}
        >
          {items.map((it) => (
            <GalleryItem key={it.cap} src={it.src} alt={it.alt} cap={it.cap} style={md ? it.span : {}} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Showcase() {
  const { sm, md } = useBp();
  const items = [
    { src: IMG.indigo, alt: "Indigo-dyed drapes on mannequins", title: "Indigo & Natural Dyeing", text: "Traditional dyeing techniques reimagined as modern drapes." },
    { src: IMG.saree, alt: "Block-printed and batik saree on a mannequin", title: "Block Print & Batik", text: "Hand-printed textiles styled into contemporary garments." },
    { src: IMG.bottles, alt: "Hand-painted upcycled glass bottles", title: "Upcycled Art", text: "Creative reuse projects that turn waste into decor." },
  ];
  return (
    <section style={{ padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Student showcase" title="Work Created by Our Students" />
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: md ? "repeat(3, 1fr)" : "1fr", gap: 24 }}>
          {items.map((it) => (
            <article
              key={it.title}
              style={{ overflow: "hidden", background: C.white, border: `1px solid ${C.slate200}`, borderRadius: 16, boxShadow: "0 1px 2px rgba(15,23,42,.06)" }}
            >
              <img src={it.src} alt={it.alt} loading="lazy" style={{ display: "block", width: "100%", height: 288, objectFit: "cover" }} />
              <div style={{ padding: 20 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.slate900 }}>{it.title}</h3>
                <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Careers() {
  const { sm } = useBp();
  return (
    <section style={{ background: C.slate50, padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Careers" title="Where a Design Degree Can Take You" />
        <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
          {CONTENT.careers.map((c) => (
            <span
              key={c}
              style={{ padding: "8px 20px", borderRadius: 999, background: C.white, border: `1px solid ${C.blue200}`, color: C.blue900, fontSize: 14, fontWeight: 600 }}
            >
              {c}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Process() {
  const { sm, lg } = useBp();
  return (
    <section style={{ padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Admission process" title="4 Simple Steps to Get Started" />
        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: lg ? "repeat(4, 1fr)" : sm ? "repeat(2, 1fr)" : "1fr",
            gap: 24,
          }}
        >
          {CONTENT.steps.map((s, i) => (
            <div key={s.title} style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  margin: "0 auto",
                  borderRadius: "50%",
                  background: C.orange600,
                  color: C.white,
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </div>
              <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 700, color: C.slate900 }}>{s.title}</h3>
              <p style={{ margin: "4px 0 0", fontSize: 14, color: C.slate600 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const { sm } = useBp();
  const [open, setOpen] = useState(0);
  return (
    <section style={{ background: C.slate50, padding: sm ? "80px 0" : "64px 0" }}>
      <Container style={{ maxWidth: 768 }}>
        <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
          {CONTENT.faqs.map((f, i) => (
            <div key={f.q} style={{ background: C.white, border: `1px solid ${C.slate200}`, borderRadius: 12 }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                  fontSize: 16,
                  fontWeight: 600,
                  color: C.slate900,
                }}
              >
                {f.q}
                <span style={{ marginLeft: 16, fontSize: 20, color: C.orange600 }}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <p style={{ margin: 0, padding: "0 20px 16px", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  const { sm } = useBp();
  return (
    <section style={{ background: `linear-gradient(to right, ${C.blue900}, ${C.blue700})`, padding: "64px 0", textAlign: "center", color: C.white }}>
      <Container>
        <h2 style={{ margin: 0, fontSize: sm ? 36 : 30, fontWeight: 700 }}>Ready to Start Your Design Journey?</h2>
        <p style={{ margin: "12px auto 0", maxWidth: 576, color: C.blue100 }}>
          Limited seats. Talk to our admission team today.
        </p>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            flexDirection: sm ? "row" : "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <Btn
            onClick={goToForm}
            style={{ padding: "12px 32px", borderRadius: 999, background: C.orange600, color: C.white, fontWeight: 600 }}
            hoverStyle={{ background: C.orange700 }}
          >
            Apply Now
          </Btn>
          <Btn
            href={CONTENT.phoneHref}
            style={{ padding: "12px 32px", borderRadius: 999, border: "1px solid rgba(255,255,255,.7)", background: "transparent", color: C.white, fontWeight: 600 }}
            hoverStyle={{ background: "rgba(255,255,255,.1)" }}
          >
            📞 Call {CONTENT.phone}
          </Btn>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const { md } = useBp();
  return (
    <footer style={{ background: C.slate900, padding: md ? "32px 0" : "32px 0 96px", textAlign: "center", fontSize: 14, color: C.slate400 }}>
      <Container>
        <img
          src={universityLogo}
          alt={CONTENT.brand}
          style={{ height: 48, width: "auto", objectFit: "contain", display: "block", margin: "0 auto" }}
        />
        <p style={{ margin: "12px 0 0" }}>{CONTENT.footerAddress}</p>
        <p style={{ margin: "12px 0 0", fontSize: 12 }}>
          © {new Date().getFullYear()} {CONTENT.brand}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

function StickyMobileBar() {
  const { md } = useBp();
  if (md) return null;
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        display: "flex",
        background: C.white,
        borderTop: `1px solid ${C.slate200}`,
      }}
    >
      <a
        href={CONTENT.phoneHref}
        style={{ flex: 1, padding: "12px 0", textAlign: "center", fontSize: 14, fontWeight: 600, color: C.blue900, textDecoration: "none" }}
      >
        📞 Call Now
      </a>
      <button
        onClick={goToForm}
        style={{ flex: 1, padding: "12px 0", border: "none", background: C.orange600, color: C.white, fontSize: 14, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}
      >
        Apply Now
      </button>
    </div>
  );
}

/* ----------------------------- page ----------------------------- */

export default function SchoolOfDesignLanding() {
  return (
    <div style={{ fontFamily: FONT, color: C.slate700, WebkitFontSmoothing: "antialiased" }}>
      <Header />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Highlights />
      <StudioLife />
      <Showcase />
      <Careers />
      <Process />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileBar />
    </div>
  );
}