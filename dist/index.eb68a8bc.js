const e=["abacus","abhor","abject","abnegate","abode","abrogate","abstemious","abstruse","accede","accolade","accost","acerbic","acquiesce","acrimonious","acumen","adage","adamant","admonish","adroit","adulation","adulterate","adumbrate","adventitious","aegis","aesthetic","affable","affluent","aggrandize","agile","agitation","agog","ailment","alacrity","alias","alienate","allege","allure","aloof","altruism","amalgamate","ambiguous","ambivalent","ameliorate","amenable","amiable","amorphous","anachronistic","anathema","anomaly","antagonize","antediluvian","antedote","anthropomorphic","antipathy","antithesis","apathy","aphorism","apocalyptic","apocryphal","apostate","apotheosis","apparition","appease","apprehension","approbation","appropriate","aptitude","arbitrary","arboreal","arcane","archaic","ardent","arduous","aristocracy","armistice","arrogance","articulate","ascetic","asperity","aspersion","assail","assuage","astute","asylum","atavistic","atheist","atonement","attenuate","attest","attribute","augment","auspicious","austere","autocrat","avarice","aversion","avow","awe","awry","axiomatic","azure","balk","balm","banal","baneful","barrage","bastion","bawdy","beatitude","bedlam","befuddle","beguile","belabor","beleaguer","belie","bellicose","belligerent","bemoan","benevolent","benign","bequest","bereave","berserk","beseech","besmirch","bestial","betray","bevy","bewilder","bigotry","blandishment","blase","blasphemy","blatant","blight","blithe","bloviate"],t=()=>{let t=Math.floor(Math.random()*e.length);return e[t]};new class{#e;#t=JSON.parse(localStorage.getItem("history"))||[];#i=parseInt(localStorage.getItem("index"))||0;#n=(new Date).toLocaleString();#a=parseInt(localStorage.getItem("lastGeneratedTime"))||0;#s=(new Date).getTime();#o=this.#s-this.#a;#r=864e5;#l=this.#r-this.#o;#d=JSON.parse(localStorage.getItem("generatedWord"))||"";constructor(){this.form=document.querySelector("form"),this.input=document.querySelector("input"),this.mainContainer=document.querySelector(".main__content"),this.fontChange=document.querySelector(".fontChange"),this.fontToggleContainer=document.querySelector(".fontToggleContainer"),this.body=document.querySelector("body"),this.loader=document.querySelector(".loader"),this.toggleBg=document.querySelector(".toggle__Container"),this.toggle=document.querySelector(".toggle"),this.overlay=document.querySelector(".overlay"),this.listItem=document.querySelector(".listItem"),this.historyModalWindow=document.querySelector(".historyModalWindow"),this.button=document.querySelector("button"),this.form.addEventListener("submit",this._searchWord.bind(this)),this.mainContainer.addEventListener("click",this._playAudio.bind(this)),this.mainContainer.addEventListener("click",this._renderHistory.bind(this)),this.mainContainer.addEventListener("click",this._searchStringCall.bind(this)),this.listItem.addEventListener("click",this._searchStringHistory.bind(this)),this.listItem.addEventListener("click",this._deleteHistory.bind(this)),this.fontChange.addEventListener("click",this._openFontContainer.bind(this)),this.fontToggleContainer.addEventListener("click",this._toggleFont.bind(this)),this.toggleBg.addEventListener("click",this._toggleBackgroundColor.bind(this)),this.overlay.addEventListener("click",this._hideModal.bind(this)),this.button.addEventListener("click",this._closeWindowModal.bind(this)),this.#o>=this.#r?(this.#d=t(),localStorage.setItem("lastGeneratedTime",this.#s.toString()),localStorage.setItem("generatedWord",JSON.stringify(this.#d))):console.log(`Time until next random word generation: ${this.#l/1e3} seconds`),this._generateRandomWords(),localStorage.setItem("lastGeneratedTime",this.#s.toString())}_generateRandomWords(){this.#d||(this.#d=t()),this.input.value=this.#d,this._fetchWord(this.#d),localStorage.setItem("generatedWord",JSON.stringify(this.#d))}_hideModal(){this.fontToggleContainer.classList.add("hidden"),this.fontToggleContainer.classList.remove("flex"),this.overlay.classList.add("hidden")}_toggleBackgroundColor(){this.toggle.classList.toggle("translate-x-[25px]"),document.documentElement.classList.toggle("dark")}_toggleFont(e){let t=e.target,i=this.fontChange.querySelector(".font");switch(!0){case t.classList.contains("source"):document.documentElement.style.fontFamily="'Source Sans Pro', sans-serif",this.body.style.fontFamily="'Source Sans Pro', sans-serif",i.textContent="Source sans pro";break;case t.classList.contains("rubik"):document.documentElement.style.fontFamily="'Rubik', sans-serif",this.body.style.fontFamily="'Rubik', sans-serif",i.textContent="Rubik";break;case t.classList.contains("sans"):document.documentElement.style.fontFamily="'Open Sans', sans-serif",this.body.style.fontFamily="'Open Sans', sans-serif",i.textContent="Open sans";break;default:document.documentElement.style.fontFamily="'Source Sans Pro', sans-serif",this.body.style.fontFamily="'Source Sans Pro', sans-serif",i.textContent="Source sans pro"}}_openFontContainer(){this.fontToggleContainer.classList.toggle("hidden"),this.fontToggleContainer.classList.toggle("flex"),this.overlay.classList.toggle("hidden"),document.querySelector(".angle").classList.toggle("rotate")}_searchStringCall(e){let t=e.target.closest(".searchStringLink");t&&(this.input.value=t.textContent,this._fetchWord(t.textContent.trim()))}_deleteHistory(e){let t=e.target.closest(".delbtn");if(!t)return;const i=parseInt(t.id),n=this.#t.findIndex((e=>e.id===i));this.#t.splice(n,1),localStorage.setItem("history",JSON.stringify(this.#t)),this._historyElement()}_searchStringHistory(e){let t=e.target.closest(".historyLink");if(!t)return;if(e.target.classList.contains("delbtn"))return;let i=t.firstElementChild.firstElementChild.textContent.trim();this.input.value=i,this._fetchWord(i),this.historyModalWindow.classList.add("translate-x-[100%]")}_historyElement(){let e="";this.#t.forEach((t=>{e+=`\n        <div class="listEl historyLink bg-historyContainerEl cursor-pointer relative flex items-center justify-between px-4 py-5 dark:bg-darkBg" id="${t.id}">\n          <div class="content-container">\n              <li class="text-base dark:text-white pb-2">${t.word}</li>\n              <p class="text-xs dark:text-white italic">${t.date}</p>\n          </div>\n          <i class="delbtn fa-solid fa-xmark fa-lg cursor-pointer dark:text-headingsIconsWhiteBg" id="${t.id}"></i>\n        </div>`})),this.listItem.innerHTML=e||"<div>You've got no history for now, start by making a search!</div>"}_closeWindowModal(){this.historyModalWindow.classList.add("translate-x-[100%]")}_renderHistory(e){e.target.closest(".historyContainer")&&(this.historyModalWindow.classList.remove("translate-x-[100%]"),this._historyElement())}_playAudio(e){if(e.target.closest(".audio"))for(const e of this.#e.phonetics)if(e.audio){new Audio(e.audio).play();break}}_renderWordMeaning(e){let t=`\n        <div class="hd flex items-center justify-between">\n          <div class="searchString">\n            <h2 class="tracking-widest text-[30px] lg:text-[40px] font-bold text-headingsIconsWhiteBg">${e.word}</h2>\n            <p class="font-bold text-bullet">${e.phonetic?e.phonetic:""}</p>\n          </div>\n\n          <div class="audioHistoryContainer flex items-center gap-3">\n            <div class="audio flex w-3 cursor-pointer items-center justify-center rounded-full bg-headingsIconsWhiteBg dark:bg-white p-6">\n              <i class="fa-solid fa-play fa-lg text-textColorsWhiteBg"></i>\n            </div>\n            <div class="historyContainer flex w-3 cursor-pointer items-center justify-center rounded-full bg-headingsIconsWhiteBg dark:bg-white p-6">\n              <i class="fa-solid fa-clock-rotate-left fa-lg text-textColorsWhiteBg"></i>\n            </div>\n          </div>\n        </div>\n\n        <div class="meaning__container my-8 flex flex-col gap-[1.5rem]">\n        ${e.meanings.map((e=>` ${e.antonyms.length?` <div class="antonyms__section my-6 flex gap-[3rem]">\n              <p class="font-bold text-headingsIconsWhiteBg">Antonyms</p>\n              <ul class="flex flex-wrap gap-[0.5rem]">\n               ${e.antonyms.map((e=>`<li class="searchStringLink font-sm cursor-pointer text-bullet hover:underline">${e}</li>`)).join("")}\n              </ul>\n            </div>`:""}\n          \n         <div class="${e.partOfSpeech} flex items-center justify-between">\n             <h2 class="font-bold dark:text-headingsIconsWhiteBg">${e.partOfSpeech}</h2>\n             <div class="line h-[2px] w-[40%] bg-headingsIconsWhiteBg"></div>\n           </div>\n           <p class="my-2 text-sm font-bold text-headingsIconsWhiteBg">Meaning</p>\n\n           <ul class="flex flex-col ${e.definitions.length>0?"gap-[1rem]":""}">\n              ${e.definitions.length?e.definitions.map((e=>`<li class="meaningWord text-base text-txtColor dark:text-white">${e.definition}</li>\n              <p class="text-sm text-examples font-bold italic mb-[20px]">${e.example?e.example:""}</p>`)).join(""):""}\n            </ul>\n            \n\n          ${e.synonyms.length?` <div class="synonyms__section my-2 flex gap-[3rem]">\n              <p class="font-bold text-headingsIconsWhiteBg">Synonyms</p>\n              <ul class="flex flex-wrap gap-[0.5rem]">\n               ${e.synonyms.map((e=>`<li class="searchStringLink font-sm cursor-pointer text-bullet hover:underline">${e}</li>`)).join("")}\n              </ul>\n            </div>`:""}`))}\n        </div>\n\n        <div class="w-full">\n          <div class="borderTop h-1 w-full border-t border-headingsIconsWhiteBg"></div>\n          <p class="font-base underline dark:text-white">Source</p>\n\n          ${e.sourceUrls.length?e.sourceUrls.map((e=>`<div class="links__container my-4">\n            <div class="link mb-2 flex items-center">\n              <p class="text-sm font-bold text-headingsIconsWhiteBg md:text-base hover:underline"><a href="${e}" target="_blank">${e}</a></p>\n              <i class="fa-solid fa-up-right-from-square fa-xs pl-2 dark:text-headingsIconsWhiteBg"></i>\n            </div>\n          </div>`)).join(""):""}\n      </div>\n        `;this.mainContainer.innerHTML=t}_searchWord(e){e.preventDefault(),this.input.value&&this._fetchWord(this.input.value)}async _fetchWord(e){try{this.loader.classList.remove("hidden"),this.mainContainer.innerHTML="";const t=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${e}`),[i]=await t.json();if(!t.ok)throw new Error("Word not found!");this.#e=i,this._renderWordMeaning(this.#e),++this.#i;let n={id:this.#i,word:this.#e.word,date:this.#n};this.#t.unshift(n),localStorage.setItem("history",JSON.stringify(this.#t)),localStorage.setItem("index",JSON.stringify(this.#i))}catch(e){console.log(e),this.mainContainer.innerHTML="Sorry pal, we couldn't find the word you were searching for. You can try the search again at later time or head to the web instead"}finally{this.loader.classList.add("hidden")}}};
//# sourceMappingURL=index.eb68a8bc.js.map