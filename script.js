window.addEventListener('DOMContentLoaded', () => {
  const curtainContainer = document.querySelector('.curtain-container');
  const launchButton = document.getElementById('launchButton');
  const sparklesContainer = document.getElementById('sparkles');
  const confettiContainer = document.getElementById('confetti');
  const lightRaysContainer = document.getElementById('lightRays');
  const fireworksContainer = document.getElementById('fireworks');

  setTimeout(() => {
    curtainContainer.classList.add('open');
    createLightRays();
    createSparkles();
  }, 500);

  setTimeout(() => {
    createConfetti();
  }, 1500);

  setTimeout(() => {
    createFireworks();
  }, 2500);

  setTimeout(() => {
    launchButton.classList.add('visible');
  }, 4000);

  function createLightRays() {
    lightRaysContainer.classList.add('active');
    const rayCount = 12;

    for (let i = 0; i < rayCount; i++) {
      const ray = document.createElement('div');
      ray.className = 'light-ray';
      const angle = (360 / rayCount) * i;
      ray.style.transform = `translateX(-50%) rotate(${angle}deg)`;
      ray.style.animationDelay = (i * 0.1) + 's';
      lightRaysContainer.appendChild(ray);
    }

    setTimeout(() => {
      lightRaysContainer.classList.remove('active');
    }, 4000);
  }

  function createSparkles() {
    sparklesContainer.classList.add('active');

    const sparkleCount = 100;
    const centerX = window.innerWidth / 2;

    for (let i = 0; i < sparkleCount; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';

        const side = Math.random() < 0.5 ? 'left' : 'right';
        const offsetX = (Math.random() * 200 - 100);
        const baseX = side === 'left' ? centerX - 250 + offsetX : centerX + 250 + offsetX;
        const startY = Math.random() * window.innerHeight * 0.7 + window.innerHeight * 0.15;

        sparkle.style.left = baseX + 'px';
        sparkle.style.top = startY + 'px';
        sparkle.style.animationDelay = (Math.random() * 0.3) + 's';
        sparkle.style.animationDuration = (2 + Math.random() * 0.5) + 's';

        sparklesContainer.appendChild(sparkle);

        setTimeout(() => {
          sparkle.remove();
        }, 3500);
      }, i * 20);
    }

    setTimeout(() => {
      sparklesContainer.classList.remove('active');
    }, 3500);
  }

  function createConfetti() {
    const confettiCount = 150;
    const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f7dc6f', '#bb8fce', '#85c1e2', '#f8b500'];

    for (let i = 0; i < confettiCount; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        const x = Math.random() * window.innerWidth;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const rotation = Math.random() * 360;
        const duration = 2 + Math.random() * 2;

        confetti.style.left = x + 'px';
        confetti.style.top = '-20px';
        confetti.style.backgroundColor = color;
        confetti.style.transform = `rotate(${rotation}deg)`;
        confetti.style.animationDuration = duration + 's';
        confetti.style.animationDelay = (Math.random() * 0.5) + 's';

        confettiContainer.appendChild(confetti);

        setTimeout(() => {
          confetti.remove();
        }, (duration + 0.5) * 1000);
      }, i * 10);
    }
  }

  function createFireworks() {
    const fireworkCount = 8;

    for (let i = 0; i < fireworkCount; i++) {
      setTimeout(() => {
        const x = (window.innerWidth / fireworkCount) * i + (window.innerWidth / (fireworkCount * 2));
        const y = 100 + Math.random() * 200;
        createFireworkBurst(x, y);
      }, i * 300);
    }
  }

  function createFireworkBurst(x, y) {
    const particleCount = 30;
    const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f7dc6f', '#ffffff'];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'firework-particle';

      const angle = (360 / particleCount) * i;
      const velocity = 50 + Math.random() * 100;
      const tx = Math.cos(angle * Math.PI / 180) * velocity;
      const ty = Math.sin(angle * Math.PI / 180) * velocity;

      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.setProperty('--tx', tx + 'px');
      particle.style.setProperty('--ty', ty + 'px');
      particle.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`;

      fireworksContainer.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1500);
    }
  }

  launchButton.addEventListener('click', () => {
    console.log('Launch button clicked!');
  });

  // Add falling code effect
  const codePhrases = [
    '{ innovation }',
    'while(coding) {',
    'if(creative) {',
    'function solve() {',
    'hack.init();',
    'git commit -m "win"',
    'npm start future',
    'const ideas = [];',
    '> python3 solve.py',
    'docker compose up',
  ];

  function createCodeLine() {
    const line = document.createElement('div');
    line.className = 'code-line';
    line.textContent = codePhrases[Math.floor(Math.random() * codePhrases.length)];
    line.style.left = Math.random() * 100 + '%';
    line.style.animationDuration = (5 + Math.random() * 10) + 's';
    document.getElementById('codeLines').appendChild(line);

    setTimeout(() => {
      line.remove();
    }, 15000);
  }

  setInterval(createCodeLine, 2000);
});
