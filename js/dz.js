var clockInterval

function reformat(time) {
  if(time < 10) {
    return '0' + time
  }
  return time
}
function clock() {
  var time = new Date()
  var hours = time.getHours()
  var minutes = time.getMinutes()
  var seconds = time.getSeconds()

  document.querySelectorAll('.clock')[0].innerHTML = `${reformat(hours)}:${reformat(minutes)}:${reformat(seconds)}`
}

function run() {
  var time = new Date()
  while(time.getMilliseconds() !== 0) {
    console.log(time.getMilliseconds())
    time = new Date();
  }
  clock()
  clockInterval = setInterval(clock, 1000)
}

//run()