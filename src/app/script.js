import { getRandomWord } from './wordoftheday';

class Dictionary {
  #data;
  #history = JSON.parse(localStorage.getItem('history')) || [];
  #index = parseInt(localStorage.getItem('index')) || 0;
  #date = new Date().toLocaleString();

  #lastGeneratedTime = parseInt(localStorage.getItem('lastGeneratedTime')) || 0;
  #currentTime = new Date().getTime(); // results in milliseconds
  #timeSinceLastGenerated = this.#currentTime - this.#lastGeneratedTime;
  #twentyFourHours = 86400000;
  #timeLeft = this.#twentyFourHours - this.#timeSinceLastGenerated;
  #generatedWord = JSON.parse(localStorage.getItem('generatedWord')) || '';

  constructor() {
    this.form = document.querySelector('form');
    this.input = document.querySelector('input');
    this.mainContainer = document.querySelector('.main__content');
    this.fontChange = document.querySelector('.fontChange');
    this.fontToggleContainer = document.querySelector('.fontToggleContainer');
    this.body = document.querySelector('body');
    this.loader = document.querySelector('.loader');
    this.toggleBg = document.querySelector('.toggle__Container');
    this.toggle = document.querySelector('.toggle');
    this.overlay = document.querySelector('.overlay');
    this.listItem = document.querySelector('.listItem');
    this.historyModalWindow = document.querySelector('.historyModalWindow');
    this.button = document.querySelector('button');

    this.form.addEventListener('submit', this._searchWord.bind(this));
    this.mainContainer.addEventListener('click', this._playAudio.bind(this));
    this.mainContainer.addEventListener('click', this._renderHistory.bind(this));
    this.mainContainer.addEventListener('click', this._searchStringCall.bind(this));
    this.listItem.addEventListener('click', this._searchStringHistory.bind(this));
    this.listItem.addEventListener('click', this._deleteHistory.bind(this));
    this.fontChange.addEventListener('click', this._openFontContainer.bind(this));
    this.fontToggleContainer.addEventListener('click', this._toggleFont.bind(this));
    this.toggleBg.addEventListener('click', this._toggleBackgroundColor.bind(this));
    this.overlay.addEventListener('click', this._hideModal.bind(this));
    this.button.addEventListener('click', this._closeWindowModal.bind(this));

    // if time since the last word generated is greater than or equal to 24hours
    if (this.#timeSinceLastGenerated >= this.#twentyFourHours) {
      this.#generatedWord = getRandomWord();
      localStorage.setItem('lastGeneratedTime', this.#currentTime.toString());
      localStorage.setItem('generatedWord', JSON.stringify(this.#generatedWord));
    } else {
      console.log(`Time until next random word generation: ${this.#timeLeft / 1000} seconds`);
    }

    this._generateRandomWords();
    localStorage.setItem('lastGeneratedTime', this.#currentTime.toString());
  }

  _generateRandomWords() {
    if (!this.#generatedWord) {
      this.#generatedWord = getRandomWord();
    }
    this.input.value = this.#generatedWord;
    this._fetchWord(this.#generatedWord);
    localStorage.setItem('generatedWord', JSON.stringify(this.#generatedWord));
  }

  _hideModal() {
    this.fontToggleContainer.classList.add('hidden');
    this.fontToggleContainer.classList.remove('flex');
    this.overlay.classList.add('hidden');
  }

  _toggleBackgroundColor() {
    this.toggle.classList.toggle('translate-x-[25px]');
    document.documentElement.classList.toggle('dark');
  }

  _toggleFont(e) {
    let target = e.target;
    let p = this.fontChange.querySelector('.font');

    switch (true) {
      case target.classList.contains('source'):
        document.documentElement.style.fontFamily = "'Source Sans Pro', sans-serif";
        this.body.style.fontFamily = "'Source Sans Pro', sans-serif";
        p.textContent = 'Source sans pro';
        break;
      case target.classList.contains('rubik'):
        document.documentElement.style.fontFamily = "'Rubik', sans-serif";
        this.body.style.fontFamily = "'Rubik', sans-serif";
        p.textContent = 'Rubik';
        break;
      case target.classList.contains('sans'):
        document.documentElement.style.fontFamily = "'Open Sans', sans-serif";
        this.body.style.fontFamily = "'Open Sans', sans-serif";
        p.textContent = 'Open sans';
        break;
      default:
        document.documentElement.style.fontFamily = "'Source Sans Pro', sans-serif";
        this.body.style.fontFamily = "'Source Sans Pro', sans-serif";
        p.textContent = 'Source sans pro';
    }
  }

  _openFontContainer() {
    this.fontToggleContainer.classList.toggle('hidden');
    this.fontToggleContainer.classList.toggle('flex');
    this.overlay.classList.toggle('hidden');

    document.querySelector('.angle').classList.toggle('rotate');
  }

  _searchStringCall(e) {
    let element = e.target.closest('.searchStringLink');
    if (!element) return;

    // search for any clicked item (synonyms, antonyms)
    this.input.value = element.textContent;
    this._fetchWord(element.textContent.trim());
  }

  _deleteHistory(e) {
    let delBtn = e.target.closest('.delbtn');
    if (!delBtn) return;

    const index = parseInt(delBtn.id);
    const itemIndex = this.#history.findIndex((element) => element.id === index);
    this.#history.splice(itemIndex, 1);
    localStorage.setItem('history', JSON.stringify(this.#history));
    this._historyElement();
  }

  _searchStringHistory(e) {
    let element = e.target.closest('.historyLink');
    if (!element) return;

    if (e.target.classList.contains('delbtn')) return;

    // accessing the element to be searched
    let stringEl = element.firstElementChild.firstElementChild.textContent.trim();
    this.input.value = stringEl;
    this._fetchWord(stringEl);

    // close modal window on clicking on element
    this.historyModalWindow.classList.add('translate-x-[100%]');
  }

  _historyElement() {
    let history = '';
    this.#history.forEach((historyEl) => {
      history += `
        <div class="listEl historyLink bg-historyContainerEl cursor-pointer relative flex items-center justify-between px-4 py-5 dark:bg-darkBg" id="${historyEl.id}">
          <div class="content-container">
              <li class="text-base dark:text-white pb-2">${historyEl.word}</li>
              <p class="text-xs dark:text-white italic">${historyEl.date}</p>
          </div>
          <i class="delbtn fa-solid fa-xmark fa-lg cursor-pointer dark:text-headingsIconsWhiteBg" id="${historyEl.id}"></i>
        </div>`;
    });
    this.listItem.innerHTML = history || `<div>You've got no history for now, start by making a search!</div>`;
  }

  _closeWindowModal() {
    this.historyModalWindow.classList.add('translate-x-[100%]');
  }

  _renderHistory(e) {
    let clickedEl = e.target.closest('.historyContainer');
    if (!clickedEl) return;
    this.historyModalWindow.classList.remove('translate-x-[100%]');
    this._historyElement();
  }

  _playAudio(e) {
    let clickedEl = e.target.closest('.audio');
    if (!clickedEl) return;
    for (const phonetic of this.#data.phonetics) {
      if (phonetic.audio) {
        const audio = new Audio(phonetic.audio);
        audio.play();
        break;
      }
    }
  }

  _renderWordMeaning(data) {
    let html = `
        <div class="hd flex items-center justify-between">
          <div class="searchString">
            <h2 class="tracking-widest text-[30px] lg:text-[40px] font-bold text-headingsIconsWhiteBg">${data.word}</h2>
            <p class="font-bold text-bullet">${data.phonetic ? data.phonetic : ''}</p>
          </div>

          <div class="audioHistoryContainer flex items-center gap-3">
            <div class="audio flex w-3 cursor-pointer items-center justify-center rounded-full bg-headingsIconsWhiteBg dark:bg-white p-6">
              <i class="fa-solid fa-play fa-lg text-textColorsWhiteBg"></i>
            </div>
            <div class="historyContainer flex w-3 cursor-pointer items-center justify-center rounded-full bg-headingsIconsWhiteBg dark:bg-white p-6">
              <i class="fa-solid fa-clock-rotate-left fa-lg text-textColorsWhiteBg"></i>
            </div>
          </div>
        </div>

        <div class="meaning__container my-8 flex flex-col gap-[1.5rem]">
        ${data.meanings.map((result) => {
          return ` ${
            result.antonyms.length
              ? ` <div class="antonyms__section my-6 flex gap-[3rem]">
              <p class="font-bold text-headingsIconsWhiteBg">Antonyms</p>
              <ul class="flex flex-wrap gap-[0.5rem]">
               ${result.antonyms
                 .map((word) => {
                   return `<li class="searchStringLink font-sm cursor-pointer text-bullet hover:underline">${word}</li>`;
                 })
                 .join('')}
              </ul>
            </div>`
              : ''
          }
          
         ${`<div class="${result.partOfSpeech} flex items-center justify-between">
             <h2 class="font-bold dark:text-headingsIconsWhiteBg">${result.partOfSpeech}</h2>
             <div class="line h-[2px] w-[40%] bg-headingsIconsWhiteBg"></div>
           </div>
           <p class="my-2 text-sm font-bold text-headingsIconsWhiteBg">Meaning</p>

           <ul class="flex flex-col ${result.definitions.length > 0 ? 'gap-[1rem]' : ''}">
              ${
                result.definitions.length
                  ? result.definitions
                      .map((word) => {
                        return `<li class="meaningWord text-base text-txtColor dark:text-white">${word.definition}</li>
              <p class="text-sm text-examples font-bold italic mb-[20px]">${word.example ? word.example : ''}</p>`;
                      })
                      .join('')
                  : ''
              }
            </ul>
           `} 

          ${
            result.synonyms.length
              ? ` <div class="synonyms__section my-2 flex gap-[3rem]">
              <p class="font-bold text-headingsIconsWhiteBg">Synonyms</p>
              <ul class="flex flex-wrap gap-[0.5rem]">
               ${result.synonyms
                 .map((word) => {
                   return `<li class="searchStringLink font-sm cursor-pointer text-bullet hover:underline">${word}</li>`;
                 })
                 .join('')}
              </ul>
            </div>`
              : ''
          }`;
        })}
        </div>

        <div class="w-full">
          <div class="borderTop h-1 w-full border-t border-headingsIconsWhiteBg"></div>
          <p class="font-base underline dark:text-white">Source</p>

          ${
            data.sourceUrls.length
              ? data.sourceUrls
                  .map((url) => {
                    return `<div class="links__container my-4">
            <div class="link mb-2 flex items-center">
              <p class="text-sm font-bold text-headingsIconsWhiteBg md:text-base hover:underline"><a href="${url}" target="_blank">${url}</a></p>
              <i class="fa-solid fa-up-right-from-square fa-xs pl-2 dark:text-headingsIconsWhiteBg"></i>
            </div>
          </div>`;
                  })
                  .join('')
              : ''
          }
      </div>
        `;
    this.mainContainer.innerHTML = html;
  }

  _searchWord(e) {
    e.preventDefault();
    if (!this.input.value) return;
    this._fetchWord(this.input.value);
  }

  async _fetchWord(word) {
    try {
      this.loader.classList.remove('hidden');
      // emptying main container when searching for any new word
      this.mainContainer.innerHTML = '';
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const [data] = await res.json();
      if (!res.ok) throw new Error('Word not found!');

      this.#data = data;
      this._renderWordMeaning(this.#data);

      // increment global variable index
      ++this.#index;

      let storage = {
        id: this.#index,
        word: this.#data.word,
        date: this.#date,
      };

      this.#history.unshift(storage);
      localStorage.setItem('history', JSON.stringify(this.#history));
      localStorage.setItem('index', JSON.stringify(this.#index));
    } catch (err) {
      console.log(err);
      this.mainContainer.innerHTML = `Sorry pal, we couldn't find the word you were searching for. You can try the search again at later time or head to the web instead`;
    } finally {
      this.loader.classList.add('hidden');
    }
  }
}

const word = new Dictionary();
