
//  grab DOM elements
const player = document.querySelector('.player')
const viewer = player.querySelector('.viewer')
console.log('viewer :>> ', {viewer});

const playPauseButton = player.querySelector('.toggle')
console.log('playPauseButton :>> ', {playPauseButton});


// define functions
function togglePlay () {
    console.log('togglePlay ');
    if (viewer.paused) {
        viewer.play()
    } else {
        viewer.pause()
    }
}

function toggleIcon (){
/* const icon = this.paused ? console.log("play icon") : console.log("pause icon"); */
const icon = this.paused ? '►' : '❚ ❚';
playPauseButton.innerHTML = icon

}

// fire function thanks to event listners
viewer.addEventListener('click', togglePlay)
viewer.addEventListener('play', toggleIcon)
viewer.addEventListener('pause', toggleIcon)

playPauseButton.addEventListener('click', togglePlay)
