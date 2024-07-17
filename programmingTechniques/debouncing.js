let count = 1;

async function getData() {
  const URL = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${count}.json`;

  const response = await fetch(URL);
  const data = await response.json();

  count++;
  console.log(data.name);
}

function debounce(fn, debounceTime) {
  let timer;
  // Call the function only once after the debounce time has passed,
  // even if the function is called multiple times in that time.
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn();
    }, debounceTime);
  };
}

const betterFunction = debounce(getData, 1000);


