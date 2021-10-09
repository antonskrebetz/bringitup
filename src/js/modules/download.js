export default class Download {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
    this.path = 'assets/img/mainbg.jpg';
  }

  downloadItem(path) {
    const elem = document.createElement('a');
    elem.setAttribute('href', path);
    elem.setAttribute('download', 'background');
    elem.style.display = 'none';
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }

  init() {
    this.btns.forEach(btn => {
      btn.style.cursor = 'pointer';
      btn.addEventListener('click', () => {
        this.downloadItem(this.path);
      })
    });
  }
}