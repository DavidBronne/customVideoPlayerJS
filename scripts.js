
//  grab DOM elements
const player = document.querySelector('.player')
const viewer = player.querySelector('.viewer')
console.log('viewer :>> ', {viewer});
const playPauseButton = player.querySelector('.toggle')
/* console.log('playPauseButton :>> ', {playPauseButton}); */
const skipButtons = player.querySelectorAll('[data-skip]')
/* console.log('skipButtons :>> ', {skipButtons}); */
const rangers = player.querySelectorAll('.player__slider');
/* console.log('rangers :>> ', rangers); */
const progressBar = player.querySelector('.progress__filled');
/* console.log('progressBar :>> ', progressBar); */
const totalProgress = player.querySelector('.progress')
console.log('totalProgress :>> ', {totalProgress});


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

function handleProgress () {
    const progressValue = (viewer.currentTime / viewer.duration) * 100;
    console.log('progressValue :>> ', progressValue);
    progressBar.style.flexBasis = `${progressValue}%`
}

function scrub (e) {
    
    const scrubTime = ( e.offsetX/ totalProgress.offsetWidth) * viewer.duration
    viewer.currentTime = scrubTime
}

// fire function thanks to event listners
viewer.addEventListener('click', togglePlay)
viewer.addEventListener('play', toggleIcon)
viewer.addEventListener('pause', toggleIcon)
viewer.addEventListener('timeupdate', handleProgress)

playPauseButton.addEventListener('click', togglePlay)

skipButtons.forEach( skipButton => {
    skipButton.addEventListener('click', handleSkip)
})

rangers.forEach( ranger => {
    ranger.addEventListener('change', handleChange)
})

let clikDown = false
totalProgress.addEventListener('click', scrub)
totalProgress.addEventListener('mousemove', (e) => clikDown && scrub(e))
totalProgress.addEventListener('mousedown', () => clikDown =true)
totalProgress.addEventListener('mouseup', () => clikDown = false)


