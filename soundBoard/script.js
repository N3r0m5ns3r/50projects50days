const sounds = ['Deftones', 'Tesseract', 'Tool', 'Jinjer', 'Hatebreed', 'Whitechapel'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound),play();
    })
    
    document.getElementById('buttons').appendChild(btn)
})

function stopsongs() {
    sounds.forEach(sound => {
        const song = document.createElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}
