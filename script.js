const planets = [
  { id: 'planet1', radius: 100, speed: 0.2 },
  { id: 'planet2', radius: 150, speed: 0.12 },
  { id: 'planet3', radius: 200, speed: 0.08 },
  { id: 'planet4', radius: 250, speed: 0.07 },
  { id: 'planet5', radius: 300, speed: 0.04 },
  { id: 'planet6', radius: 350, speed: 0.03 },
  { id: 'planet7', radius: 400, speed: 0.025 },
  { id: 'planet8', radius: 450, speed: 0.02 }
];

let isPlaying = true;
let speedFactor = 1;

document.getElementById("toggleAnimation").onclick = () => {
  isPlaying = !isPlaying;
  document.getElementById("toggleAnimation").innerText = isPlaying ? "Pause" : "Play";
};

document.getElementById("speedSlider").oninput = (e) => {
  speedFactor = parseFloat(e.target.value);
};

document.getElementById("toggleTheme").onclick = () => {
  document.body.classList.toggle("light");
  document.getElementById("toggleTheme").innerText =
    document.body.classList.contains("light") ? "🌞 Light" : "🌙 Dark";
};

function animate() {
  if (isPlaying) {
    const t = Date.now() * 0.009 * speedFactor;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    planets.forEach(p => {
      const el = document.getElementById(p.id);
      const a = t * p.speed;
      const x = cx + p.radius * Math.cos(a) - el.offsetWidth / 2;
      const y = cy + p.radius * Math.sin(a) - el.offsetHeight / 2;
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
    });
  }

  requestAnimationFrame(animate);
}

animate();
