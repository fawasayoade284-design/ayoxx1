"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [clicks, setClicks] = useState(0);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Load clicks from browser
  useEffect(() => {
    const saved = localStorage.getItem("clicks");
    if (saved) setClicks(Number(saved));
  }, []);

  const trackClick = (name: string) => {
    const newCount = clicks + 1;
    setClicks(newCount);
    localStorage.setItem("clicks", String(newCount));
    console.log("Clicked:", name);
  };

  const saveEmail = () => {
    if (!email.includes("@")) {
      setMessage("Enter a valid email");
      return;
    }

    const list = JSON.parse(localStorage.getItem("emails") || "[]");
    list.push(email);
    localStorage.setItem("emails", JSON.stringify(list));

    setMessage("🔥 You're on the VIP list!");
    setEmail("");
  };

  return (
    <main style={styles.body}>
      {/* GOOGLE ANALYTICS */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      ></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }}
      />

      <header style={styles.header}>
        <h1>🔥 Ayoxx Hub</h1>
        <p>Music • Vibes • Money System</p>
      </header>

      {/* MAIN BUTTONS */}
      <a
        href="https://audiomack.com/ayfasco"
        target="_blank"
        onClick={() => trackClick("audiomack")}
        style={{ ...styles.btn, background: "#ff4d00" }}
      >
        🎵 Listen on Audiomack
      </a>

      <a
        href="https://tiktok.com/@ayfascoyen"
        target="_blank"
        onClick={() => trackClick("tiktok")}
        style={{ ...styles.btn, background: "#25f4ee", color: "black" }}
      >
        🎥 Follow on TikTok
      </a>

      <a
        href="#email"
        onClick={() => trackClick("vip")}
        style={{ ...styles.btn, background: "#22c55e" }}
      >
        🚀 Join VIP List
      </a>

      {/* STATS */}
      <div style={styles.card}>
        <h3>📊 Live Click Stats</h3>
        <p>
          Total Clicks: <b>{clicks}</b>
        </p>
      </div>

      {/* EMAIL CAPTURE */}
      <div id="email" style={styles.card}>
        <h3>📩 VIP Email List</h3>
        <p>Get updates before everyone else</p>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          style={styles.input}
        />

        <button onClick={saveEmail} style={styles.button}>
          Join Now
        </button>

        <p>{message}</p>
      </div>

      {/* ADS SECTION */}
      <div style={styles.card}>
        <h3>💰 Monetization Zone</h3>
        <p>Ad space ready for approval</p>
        <p style={{ color: "#888" }}>
          (Google AdSense will appear here when approved)
        </p>
      </div>

      <footer style={styles.footer}>
        © 2026 Ayoxx Hub | Built for Growth & Monetization
      </footer>
    </main>
  );
}

const styles: any = {
  body: {
    fontFamily: "Arial",
    background: "black",
    color: "white",
    textAlign: "center",
    padding: "20px",
  },
  header: {
    padding: "30px 10px",
  },
  btn: {
    display: "block",
    margin: "10px auto",
    padding: "15px",
    width: "85%",
    maxWidth: "350px",
    borderRadius: "10px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
  card: {
    marginTop: "20px",
    padding: "20px",
    background: "#111",
    borderRadius: "10px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    padding: "12px",
    width: "80%",
    borderRadius: "8px",
    border: "none",
    marginTop: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    background: "#22c55e",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  footer: {
    marginTop: "40px",
    color: "#666",
    fontSize: "12px",
  },
};
