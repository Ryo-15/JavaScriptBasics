'use strict';

{
  const scores = [80, 90, 40, 70];

  // const [a, b, c, d] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);

  // const [a, b, ...others] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(others);

  let x = 30;
  let y = 70;
  [x, y] = [y, x];
  console.log(x);
  console.log(y);
}

{
  const scores = [80, 90, 40, 70];
  scores.splice(1, 0, 40, 50);

  for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);
  }
}
