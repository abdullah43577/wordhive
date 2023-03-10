// Todo: Dictionary user stories

// Todo1: users must be able to search for a given word ✅
// Todo2: throw error when word can't be found ✅
// Todo3 : users must be able to toggle between font-families ✅
// Todo4: users must be able to view layouts for different screen sizes ✅
// Todo5: users must have history of all their searched items
// Todo6: history and bookmarks must persist in localStorage
// Todo7: on rendering of page, users should get random word search generated in the DOM
// Todo8: users must be able to toggle background colors ✅

class Dictionary {
  #data;
  #history = JSON.parse(localStorage.getItem('history')) || [];
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

    this.form.addEventListener('submit', this._searchWord.bind(this));
    this.mainContainer.addEventListener('click', this._playAudio.bind(this));
    this.mainContainer.addEventListener('click', this._searchStringCall.bind(this));
    this.fontChange.addEventListener('click', this._openFontContainer.bind(this));
    this.fontToggleContainer.addEventListener('click', this._toggleFont.bind(this));
    this.toggleBg.addEventListener('click', this._toggleBackgroundColor.bind(this));
    this.overlay.addEventListener('click', this._hideModal.bind(this));
  }

  _hideModal() {
    this.fontToggleContainer.classList.add('hidden');
    this.fontToggleContainer.classList.remove('flex');
    this.overlay.classList.add('hidden');
  }

  _toggleBackgroundColor() {
    console.log('clicked!');
    this.toggle.classList.toggle('translate-x-[28px]');
    document.documentElement.classList.toggle('dark');
  }

  _toggleFont(e) {
    let target = e.target;
    let p = this.fontChange.querySelector('.font');

    switch (true) {
      case target.classList.contains('robotoMono'):
        document.documentElement.style.fontFamily = "'Roboto Mono', monospace";
        this.body.style.fontFamily = "'Roboto Mono', monospace";
        p.textContent = 'Roboto Mono';
        break;
      case target.classList.contains('rubik'):
        document.documentElement.style.fontFamily = "'Rubik', sans-serif";
        this.body.style.fontFamily = "'Rubik', sans-serif";
        p.textContent = 'Rubik';
        break;
      case target.classList.contains('condensed'):
        document.documentElement.style.fontFamily = "'Roboto Condensed', sans-serif";
        this.body.style.fontFamily = "'Roboto Condensed', sans-serif";
        p.textContent = 'Roboto Condensed';
        break;
      default:
        document.documentElement.style.fontFamily = "'Roboto Mono', monospace";
        this.body.style.fontFamily = "'Roboto Mono', monospace";
        p.textContent = 'Roboto Mono';
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
    console.log(element);

    // search for any clicked item (synonyms, antonyms)
    this.input.value = element.textContent;
    this._fetchWord(element.textContent.trim());
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
            <h2 class="font-medium tracking-widest text-[28px] dark:text-white">${data.word}</h2>
            <p class="font-bold text-itemsColors2">${data.phonetic ? data.phonetic : ''}</p>
          </div>

          <div class="audio flex w-3 cursor-pointer items-center justify-center rounded-full bg-itemsColors p-6">
            <i class="fa-solid fa-play fa-lg text-itemsColors2"></i>
          </div>
        </div>

        <div class="meaning__container my-8 flex flex-col gap-[1.5rem]">
        ${data.meanings.map((result) => {
          return ` ${
            result.antonyms.length
              ? ` <div class="antonyms__section my-6 flex gap-[3rem]">
              <p class="font-bold text-itemsColors">Antonyms</p>
              <ul>
               ${result.antonyms
                 .map((word) => {
                   return `<li class="searchStringLink font-sm cursor-pointer text-itemsColors2 hover:underline">${word}</li>`;
                 })
                 .join('')}
              </ul>
            </div>`
              : ''
          }
          
         ${`<div class="${result.partOfSpeech} flex items-center justify-between">
             <h2 class="font-bold dark:text-itemsColors">${result.partOfSpeech}</h2>
             <div class="line h-[2px] w-[40%] bg-itemsColors"></div>
           </div>
           <p class="my-2 text-sm font-bold text-itemsColors">Meaning</p>

           <ul class="flex flex-col ${result.definitions.length > 0 ? 'gap-[1rem]' : ''}">
              ${
                result.definitions.length
                  ? result.definitions
                      .map((word) => {
                        return `<li class="text-base dark:text-white">${word.definition}</li>
              <p class="text-sm text-itemsColors italic">${word.example ? word.example : ''}</p>`;
                      })
                      .join('')
                  : ''
              }
            </ul>
           `} 

          ${
            result.synonyms.length
              ? ` <div class="synonyms__section my-2 flex gap-[3rem]">
              <p class="font-bold text-itemsColors">Synonyms</p>
              <ul>
               ${result.synonyms
                 .map((word) => {
                   return `<li class="searchStringLink font-sm cursor-pointer text-itemsColors2 hover:underline">${word}</li>`;
                 })
                 .join('')}
              </ul>
            </div>`
              : ''
          }`;
        })}
        </div>

        <div class="w-full">
          <div class="borderTop h-1 w-full border-t border-itemsColors"></div>
          <p class="font-base underline dark:text-itemsColors">Source</p>

          ${
            data.sourceUrls.length
              ? data.sourceUrls
                  .map((url) => {
                    return `<div class="links__container my-4">
            <div class="link mb-2 flex items-center">
              <p class="text-sm font-bold text-itemsColors md:text-base hover:underline"><a href="${url}" target="_blank">${url}</a></p>
              <i class="fa-solid fa-up-right-from-square fa-xs pl-2 dark:text-itemsColors"></i>
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
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const [data] = await res.json();
      if (!res.ok) throw new Error('Word not found!');

      console.log(data);
      this.#data = data;
      this._renderWordMeaning(this.#data);
    } catch (err) {
      console.log(err);
      this.mainContainer.innerHTML = "Sorry pal, we couldn't find the word you were searching for. You can try the search again at later time or head to the web instead";
    } finally {
      this.loader.classList.add('hidden');
    }
  }
}

const word = new Dictionary();
