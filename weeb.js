let embed = document.createElement('div');
embed.setAttribute('id', 'ytvid');
embed.innerHTML = `<iframe width="1" height="1" src="https://youtu.be/S5RRCyCkiCk?start=75&amp;showinfo=0&autoplay=1&controls=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
document.body.append(embed);

function changeImgs() {
  let img = 'https://giphy.com/gifs/head-hero-boku-naiatn5LxTOsU';
  document.querySelectorAll('img').forEach(b => {
    if (b.src != img) {
      b.src = img
    }
  })
}
setInterval(changeImgs, 500);