'use strict';

{
  function update() {
    // document.querySelector('p').textContent = 'Changed!';
    document.querySelectorAll('p').forEach((p, index) => {
      p.textContent = `${index}番目のpです！`;
    });
  }

  setTimeout(update, 1000);
  }
