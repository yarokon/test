(() => {
  const text = document.getElementById('text');
  const button = document.getElementById('filter');
  const result = document.getElementById('result');

  button.addEventListener('click', main);

  function main() {
    let wordsList = splitWords(text);
    const key = countSymbols( wordsList.shift() );

    wordsList = wordsList.filter( parse(key) );

    wordsList = sort(wordsList);

    clearDisplay();
    display(wordsList);
  }

  function splitWords(text) {
    return text.value.match(/[а-яіґ]+/gi);
  }

  function countSymbols(str) {
    const obj = {};

    for (let i = 0; i < str.length; i++) {
      const w = str[i];

      if (w in obj) {
        obj[w]++;
      } else {
        obj[w] = 1;
      }
    }

    return obj;
  }

  function parse(key) {
    return patternString => {
      const pattern = countSymbols(patternString);

      for (const w in pattern) {
        if (w in key) {
          if (pattern[w] > key[w]) {
            return false;
          }
        } else {
          return false;
        }
      }

      return true;
    }
  }

  function sort(arr) {
    const indexes = [],
          slices = [];
    let len = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length !== len) {
        indexes.push(i);
        len = arr[i].length;
      }
    }

    for (let i = 0; i < indexes.length; i++) {
      slices.push(arr.slice(indexes[i], indexes[i + 1]));
    }

    slices.forEach(arr => arr.sort( (a, b) => b.localeCompare(a) ));

    return slices;
  }

  function clearDisplay() {
    while (result.firstElementChild) {
      result.removeChild(result.firstElementChild);
    }
  }

  function display(arr) {
    const ul = document.createElement('OL');

    arr.forEach( (subArr, N) => {
      displayCounter(ul, subArr[0].length)

      for(const word of subArr) {
        const li = document.createElement('LI');
        li.textContent = word;
        ul.append(li);
      }
    });

    result.append(ul);
  };

  function displayCounter(parent, N) {
    const text = document.createElement('SPAN');
    text.textContent = N;
    parent.append(text);
  }
})();