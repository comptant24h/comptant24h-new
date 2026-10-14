function setLang(l){
  document.documentElement.lang = l;
  document.getElementById('btn-fr').classList.toggle('active', l==='fr');
  document.getElementById('btn-en').classList.toggle('active', l==='en');
}
