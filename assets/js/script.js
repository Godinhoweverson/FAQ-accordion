const summuaries = document.querySelectorAll('summary img');
const details = document.querySelectorAll('details');


details.forEach((evt) =>{
    evt.addEventListener('toggle', () => {
        let minus = document.querySelector('.minus');
        if(minus){
            minus.remove()
        }
        const img = document.createElement('img');
        img.setAttribute('class', 'close');
        img.setAttribute('src', `/assets/images/icon-${evt.open ? 'minus' : 'plus'}.svg`);
        evt.children[0].appendChild(img);
      });
})
