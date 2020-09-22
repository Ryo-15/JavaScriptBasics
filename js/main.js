'use strict';

{
  let i = 0;
  function showTime() {
    console.log(new Date());
    i++;
    if (i > 2) {
      clearInterval(internalId);
    }
  }

  const internalId = setInterval(showTime, 1000);


}
