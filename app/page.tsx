"use client";

export default function Home() {
  return (
    <main style={styles.page}>

      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={styles.logo}>AYFASCO</div>

        <div style={styles.navLinks}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#links">Links</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" style={styles.hero}>
        <h1 style={styles.title}>Ayfasco Website</h1>
        <p style={styles.subtitle}>
          A modern music & creator platform built for growth, reach, and global visibility.
        </p>

        <div style={styles.ctaRow}>
          <a
            href="https://audiomack.com/ayfasco"
            target="_blank"
            style={{ ...styles.button, background: "#ff4d00" }}
          >
            🎵 Listen on Audiomack
          </a>

          <a
            href="https://tiktok.com/@ayfascoyen"
            target="_blank"
            style={{ ...styles.button, background: "#25f4ee", color: "black" }}
          >
            🎥 Follow on TikTok
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" style={styles.section}>
        <h2>About</h2>
        <p style={styles.text}>
          Ayfasco Website is a digital hub for music distribution, audience engagement,
          and content visibility. Built with modern web technologies for speed, scale,
          and performance.
        </p>
      </section>

      {/* LINKS SECTION */}
      <section id="links" style={styles.section}>
        <h2>Official Links</h2>

        <div style={styles.linkGrid}>
          <a href="https://audiomack.com/ayfasco" target="_blank" style={styles.card}>
            🎧 Audiomack Profile
          </a>

          <a href="https://tiktok.com/@ayfascoyen" target="_blank" style={styles.card}>
            📱 TikTok Profile
          </a>

          <a href="mailto:business@ayfasco.com" style={styles.card}>
            📩 Business Contact
          </a>
        </div>
      </section>

      {/* MONETIZATION READY SECTION (REALISTIC) */}
      <section style={styles.section}>
        <h2>Partnership & Advertising</h2>
        <p style={styles.text}>
          This platform supports advertising integrations and brand collaborations.
        </p>

        <div style={styles.adBox}>
          Advertisement placements are available for approved networks such as
          Google AdSense.
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Ayfasco Website. All rights reserved.
      </footer>

    </main>
  );
}

const styles: any = {
  page: {
    fontFamily: "Arial",
    background: "#0b0b0f",
    color: "white",
    minHeight: "100vh",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    borderBottom: "1px solid #222",
  },

  logo: {
    fontWeight: "bold",
    fontSize: "20px",
    letterSpacing: "2px",
  },

  navLinks: {
    display: "flex",
    gap: "20px",
  },

  hero: {
    textAlign: "center",
    padding: "80px 20px",
  },

  title: {
    fontSize: "48px",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#aaa",
    maxWidth: "600px",
    margin: "0 auto 30px",
  },

  ctaRow: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },

  button: {
    padding: "15px 20px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    color: "white",
  },

  section: {
    padding: "60px 20px",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },

  text: {
    color: "#aaa",
    lineHeight: "1.6",
  },

  linkGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    marginTop: "20px",
  },

  card: {
    background: "#15151c",
    padding: "20px",
    borderRadius: "12px",
    textDecoration: "none",
    color: "white",
    border: "1px solid #222",
  },

  adBox: {
    marginTop: "20px",
    padding: "20px",
    border: "1px dashed #444",
    color: "#777",
    borderRadius: "10px",
  },

  footer: {
    textAlign: "center",
    padding: "30px",
    borderTop: "1px solid #222",
    color: "#666",
  },
};
