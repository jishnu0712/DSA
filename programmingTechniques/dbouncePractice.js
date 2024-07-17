let count = 1;

async function getData() {
  const URL = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${count}.json`;

  const response = await fetch(URL);
  const data = await response.json();

  count++;
  console.log(data.name);
}

function debounce(fn, delay) {
    let timer;

    if (timer) {
        clearTimeout(timer);
    }

    return function(...args) {
        timer = setTimeout(() => {
            fn();
        }, delay);
    }
}



const betterFunction = debounce(getData, 1000);