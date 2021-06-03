
//  grab DOM elements
const player = document.querySelector('.player')
const viewer = player.querySelector('.viewer')
/* console.log('viewer :>> ', {viewer}); */
const playPauseButton = player.querySelector('.toggle')
/* console.log('playPauseButton :>> ', {playPauseButton}); */
const skipButtons = player.querySelectorAll('[data-skip]')
/* console.log('skipButtons :>> ', {skipButtons}); */
const rangers = player.querySelectorAll('.player__slider');
console.log('rangers :>> ', rangers);


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

function handleSkip () {
    console.log('this :>> ', this.dataset.skip);
    const skipTime = parseFloat(this.dataset.skip)
    viewer.currentTime += skipTime
}

function handleChange () {
    viewer[this.name] = this.value
    
}

// fire function thanks to event listners
viewer.addEventListener('click', togglePlay)
viewer.addEventListener('play', toggleIcon)
viewer.addEventListener('pause', toggleIcon)

playPauseButton.addEventListener('click', togglePlay)

skipButtons.forEach( skipButton => {
    skipButton.addEventListener('click', handleSkip)
})

rangers.forEach( ranger => {
    ranger.addEventListener('change', handleChange)
})
