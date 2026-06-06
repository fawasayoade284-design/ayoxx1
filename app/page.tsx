"use client";

export default function Home() {
  const track = (source: string) => {
    fetch("/api/track", {
      method: "POST",
      body: JSON.stringify({ source }),
    });
  };

  return (
    <main style={styles.page}>

      {/* NAV */}
      <nav style={styles.nav}>
        <h2>AYFASCO</h2>
        <div style={styles.links}>
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/admin">Dashboard</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <h1>Ayfasco Website</h1>
        <p>Music • Content • Growth Platform</p>

        <a
          href="https://audiomack.com/ayfasco"
          onClick={() => track("audiomack")}
          style={styles.btn1}
        >
          🎵 Audiomack
        </a>

        <a
          href="https://tiktok.com/@ayfascoyen"
          onClick={() => track("tiktok")}
          style={styles.btn2}
        >
          🎥 TikTok
        </a>
      </section>

      {/* CONTACT */}
      <section style={styles.card}>
        <h3>Contact</h3>
        <p>Email: fawasayoade284@gmail.com</p>
        <p>WhatsApp: +2349126347822</p>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Ayfasco Website
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
    textAlign: "center",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
    borderBottom: "1px solid #222",
  },
  links: { display: "flex", gap: 15 },
  hero: { padding: "80px 20px" },
  btn1: {
    display: "block",
    margin: "10px auto",
    padding: 15,
    background: "#ff4d00",
    color: "white",
    borderRadius: 10,
    textDecoration: "none",
    width: 200,
  },
  btn2: {
    display: "block",
    margin: "10px auto",
    padding: 15,
    background: "#25f4ee",
    color: "black",
    borderRadius: 10,
    textDecoration: "none",
    width: 200,
  },
  card: {
    margin: 20,
    padding: 20,
    background: "#111",
    borderRadius: 10,
  },
  footer: {
    marginTop: 40,
    padding: 20,
    color: "#666",
  },
};
