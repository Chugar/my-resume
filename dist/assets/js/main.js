!function(){const e=document.getElementById("contact-form"),t=document.getElementById("envoyer"),n=document.getElementById("loading"),o=document.querySelector(".loader"),l=document.getElementById("contact-fullname"),i=document.getElementById("contact-email"),r=document.getElementById("contact-message"),d=document.getElementById("fullname-error"),c=document.getElementById("email-error"),s=e=>{t.style.display="none",n.style.display="block",setTimeout((()=>{o.style.display="none",n.innerHTML="Envoyé !"}),2e3)};l.addEventListener("blur",(e=>{d.innerHTML="",""===l.value&&(d.innerHTML="* Entrez votre nom et prénom"),l.validity.tooShort&&(d.innerHTML="* Trop court")})),i.addEventListener("blur",(e=>{c.innerHTML="",i.validity.patternMismatch&&(c.innerHTML="* Veuillez entrer une addresse email correcte"),i.validity.valueMissing&&(c.innerHTML="* Entrer votre addresse email")})),e.addEventListener("submit",(e=>{e.preventDefault();l.value,i.value,r.value;t.addEventListener("click",s)}))}(),document.getElementById("download-button").addEventListener("click",(()=>{!function(e,t){const n=document.createElement("a");n.style.display="none",n.href=e,n.download=t,n.target="_blank",document.body.appendChild(n),n.click(),window.URL.revokeObjectURL(url)}("./dist/assets/other/my_resume.pdf","my_resume.pdf")}));const typingZone=document.querySelector(".typing-effect"),texts=["Tout terrain","Dev agile","Clean coder ","Language agnostic "];let letter,position=0,i=0;!function e(){i===texts.length&&(i=0),letter=texts[i].slice(0,++position),typingZone.textContent=letter,letter.length===texts[i].length&&(position=0,i++),setTimeout(e,100)}();const scrollButton=document.querySelector("#scrolltop-button");function showScollButton(){window.pageYOffset>300?scrollButton.style.display="block":scrollButton.style.display="none"}function gotoTop(){window.scroll(0,0)}window.addEventListener("scroll",showScollButton),scrollButton.addEventListener("click",gotoTop);
//# sourceMappingURL=main.js.map
