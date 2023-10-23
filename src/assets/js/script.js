const play = document.getElementById('play');

function Play() {
    play.innerHTML = `<button class="play">
    <i class="fa-solid fa-play fa-lg" style="color: #000000;"></i>
</button>`
}

function PlayRemove() {
    play.innerHTML = ``
}