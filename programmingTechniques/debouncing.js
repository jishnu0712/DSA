let count=1;
async function getData() {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${count}.json`
        );
        const data = await response.json();
        count++;
    		console.log(data.name)
     
    }
    function debounce(fn, d) {
      let timer;
      return function (...args) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          fn();
        }, d);
      };
    }
    const betterFunction = debounce(getData, 1000);