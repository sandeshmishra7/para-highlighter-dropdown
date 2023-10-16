var content = document.querySelector('.para');

content.innerHTML = content.innerHTML.split(' ').map((e) => {
    return e.length > 8 ? `<span style='background-color: yellow'>${e}</span>` : e;
}).join(' ');