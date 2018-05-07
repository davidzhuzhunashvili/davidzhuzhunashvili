const HOURHAND = document.querySelector('#hour')
const MINUTEHAND = document.querySelector('#minute')
const SECONDHAND = document.querySelector('#second')

function clock() {
  var date = new Date()
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var seconds = date.getSeconds()

  var hourPosition = hours/12*360 + minutes/60*360/12
  var minutePosition = minutes/60*360 + seconds/60*360/60
  var secondPosition = seconds/60*360

  HOURHAND.style.transform = `rotate(${hourPosition}deg)`
  MINUTEHAND.style.transform = `rotate(${minutePosition}deg)`
  SECONDHAND.style.transform = `rotate(${secondPosition}deg)`
}

function run() {
  var time = new Date()
  while(time.getMilliseconds() !== 0) {
    time = new Date()
  }
  clock()
  setInterval(clock, 1000)
}

run()


/*
clock()
setInterval(clock, 1000)
*/