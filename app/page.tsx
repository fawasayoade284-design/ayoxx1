<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Ayfasco | Music & Money Hub</title>

<meta name="description" content="Official Ayfasco hub for music, vibes, and exclusive updates.">
<meta name="keywords" content="Ayfasco, music, TikTok, Audiomack, Afrobeat, Nigeria artist">

<!-- Open Graph -->
<meta property="og:title" content="Ayfasco Money Hub">
<meta property="og:description" content="Music • Links • Exclusive Updates • Vibes">
<meta property="og:type" content="website">

<style>
body {
  margin: 0;
  font-family: Arial;
  background: radial-gradient(circle at top, #1a1a1a, #000);
  color: white;
  text-align: center;
}

/* HEADER */
header {
  padding: 40px 20px 10px;
}

h1 {
  font-size: 42px;
}

.tag {
  color: #aaa;
}

/* BUTTONS */
.btn {
  display: block;
  margin: 12px auto;
  padding: 15px;
  width: 85%;
  max-width: 340px;
  border-radius: 12px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  transition: 0.25s;
}

.btn:hover {
  transform: scale(1.06);
}

.music { background: #ff4d00; }
.tiktok { background: #25f4ee; color: black; }
.join { background: #22c55e; }
.shop { background: #8b5cf6; }

/* SECTION BOX */
.card {
  background: #111;
  margin: 20px auto;
  padding: 20px;
  max-width: 600px;
  border-radius: 12px;
  border: 1px solid #222;
}

/* EMAIL BOX */
input {
  width: 80%;
  padding: 12px;
  border-radius: 8px;
  border: none;
  margin-top: 10px;
}

button {
  padding: 12px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 8px;
  background: #22c55e;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

/* STATS */
.stats {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.stat {
  background: #1c1c1c;
  padding: 12px;
  border-radius: 10px;
  min-width: 120px;
}

/* FOOTER */
footer {
  margin-top: 40px;
  padding: 20px;
  color: #666;
  font-size: 12px;
}
</style>
</head>

<body>

<header>
  <h1>🔥 Ayfasco Hub</h1>
  <div class="tag">Music • Growth • Money System</div>
</header>

<!-- MAIN MONEY BUTTONS -->
<a class="btn music" href="https://audiomack.com/ayfasco" target="_blank" onclick="track('audiomack')">
🎵 Listen on Audiomack
</a>

<a class="btn tiktok" href="https://tiktok.com/@ayfascoyen" target="_blank" onclick="track('tiktok')">
🎥 Follow on TikTok
</a>

<a class="btn join" href="#email">
🚀 Join Exclusive Updates
</a>

<a class="btn shop" href="#" onclick="track('affiliate')">
💸 Recommended Tools (Earn Online)
</a>

<!-- STATS -->
<div class="card">
  <h3>🔥 Live Stats</h3>
  <div class="stats">
    <div class="stat">
      <b id="clicks">0</b><br>Clicks
    </div>
    <div class="stat">
      <b>Growing</b><br>Audience
    </div>
    <div class="stat">
      <b>Active</b><br>Traffic
    </div>
  </div>
</div>

<!-- EMAIL CAPTURE -->
<div class="card" id="email">
  <h3>📩 Join VIP List</h3>
  <p>Get updates before anyone else</p>

  <input type="email" id="emailInput" placeholder="Enter your email">
  <br>
  <button onclick="saveEmail()">Join Now</button>

  <p id="msg"></p>
</div>

<!-- AD SECTION -->
<div class="card">
  <h3>💰 Monetization Zone</h3>
  <p>This area is reserved for ads & sponsors.</p>

  <!-- Google AdSense Placeholder -->
  <!-- Google AdSense -->
  <p style="color:#777;">Ads will auto appear when approved.</p>
</div>

<footer>
  © 2026 Ayfasco | Built as Money Funnel System
</footer>

<script>
let clicks = 0;

function track(type){
  clicks++;
  document.getElementById("clicks").innerText = clicks;
  console.log("Clicked:", type);
}

function saveEmail(){
  let email = document.getElementById("emailInput").value;

  if(email.includes("@")){
    let list = JSON.parse(localStorage.getItem("emails") || "[]");
    list.push(email);
    localStorage.setItem("emails", JSON.stringify(list));

    document.getElementById("msg").innerText = "🔥 You're in!";
  } else {
    document.getElementById("msg").innerText = "Enter a valid email";
  }
}
</script>

</body>
</html>
