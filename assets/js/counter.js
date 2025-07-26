    const gamesPlayedTarget = 135;
  const flagsTakenTarget = 89;
  const deathmatchesTarget = 32;
  const tournamentsTarget = 17;

  const duration = 2000; 

  function animateCounter(elementId, target) {
    let element = document.getElementById(elementId);
    let start = 0;
    let stepTime = Math.floor(duration / target);

    let timer = setInterval(function() {
      start++;
      element.textContent = start;
      if (start >= target) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  window.onload = function() {
    animateCounter('gamesPlayed', gamesPlayedTarget);
    animateCounter('flagsTaken', flagsTakenTarget);
    animateCounter('deathmatches', deathmatchesTarget);
    animateCounter('tournaments', tournamentsTarget);
  };
