// Todo: Dictionary user stories

// Todo1: users must be able to search for a given word
// Todo2: throw error when word can't be found
// Todo3 : users must be able to toggle between font-families
// Todo4: users must be able to view layouts for different screen sizes
// Todo5: users must have history of all their searched items
// Todo6: history and bookmarks must persist in localStorage
// Todo7: on rendering of page, users should get random word search generated in the DOM

class Dictionary {
  #data;
  constructor() {
    this.form = document.querySelector('form');
    this.input = document.querySelector('input');
    this.mainContainer = document.querySelector('.main__content');

    this.form.addEventListener('submit', this._searchWord.bind(this));
    this.mainContainer.addEventListener('click', this._playAudio.bind(this));
    this.mainContainer.addEventListener('click', this._searchStringCall.bind(this));
  }

  _searchStringCall(e) {
    let element = e.target.closest('.searchStringLink');
    if (!element) return;
    console.log(element);
  }

  _playAudio(e) {
    let clickedEl = e.target.closest('.audio');
    if (!clickedEl) return;
    if (this.#data?.phonetics[0].audio === '') return;
    const audio = new Audio(this.#data.phonetics[0].audio);

    audio.play();
  }

  _renderWordMeaning(data) {
    let html = `
        <div class="hd flex items-center justify-between">
          <div class="searchString">
            <h2 class="font-medium tracking-widest md:text-xl">${data.word}</h2>
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
             <h2 class="font-bold">${result.partOfSpeech}</h2>
             <div class="line h-[2px] w-[40%] bg-itemsColors"></div>
           </div>
           <p class="my-2 text-sm font-bold text-itemsColors">Meaning</p>

           <ul class="flex flex-col ${result.definitions.length > 0 ? 'gap-[1rem]' : ''}">
              ${
                result.definitions.length
                  ? result.definitions
                      .map((word) => {
                        return `<li class="text-base">${word.definition}</li>
              <p class="text-sm text-itemsColors">${word.example ? word.example : ''}</p>`;
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
          <p class="font-base underline">Source</p>

          ${
            data.sourceUrls.length
              ? data.sourceUrls
                  .map((url) => {
                    return `<div class="links__container my-4">
            <div class="link mb-2 flex items-center">
              <p class="text-sm font-bold text-itemsColors md:text-base"><a href="${url}" target="_blank">${url}</a></p>
              <i class="fa-solid fa-up-right-from-square fa-xs"></i>
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
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const [data] = await res.json();
      if (!res.ok) throw new Error('Word not found!');

      console.log(data);
      this.#data = data;
      this._renderWordMeaning(this.#data);
      // this._playAudio(data);
    } catch (err) {
      console.log(err);
      this.mainContainer.innerHTML = err.message;
    }
  }
}

const word = new Dictionary();
