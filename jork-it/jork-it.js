
const path = 'jorking - '

if (checkCookie(path + 'debug') === 'error') {
  setCookie(path + 'debug', false)
}
let debug = getCookie(path + 'debug')
if (debug === 'false') {debug = false}
else if (debug === 'true') {debug = true}

function jork() {
  if (checkCookie(path + 'jorks') === 'error') {
    setCookie(path + 'jorks', 0, debug)
  }
  if (checkCookie(path + 'alljorks') === 'error') {
    setCookie(path + 'alljorks', 0, debug)
  }
  if (checkCookie(path + 'vibes') === 'error') {
    setCookie(path + 'vibes', 0, debug)
  }
  if (checkCookie(path + 'vibePrice') === 'error') {
    setCookie(path + 'vibePrice', 50, debug)
  }
  if (checkArrayCookie(path + 'upgrades') === 'error') {
    setArrayCookie(path + 'upgrades', ['none', 'balls'], debug)
  }

  let jorks = Number(getCookie(path + 'jorks'))
  let alljorks = Number(getCookie(path + 'alljorks'))
  let vibes = Number(getCookie(path + 'vibes'))
  let upgrades = Number(getArrayCookie(path + 'upgrades'))
  let vibePrice = Number(getCookie(path + 'vibePrice'))
  let arousal = Number(getCookie(path + upgrades).length)
  if (arousal === 0) {arousal=1}
  let jorkpower = 1+ (vibes * 0.25) * arousal


  document.getElementById('counter').innerHTML = Math.round(jorks) + ' jorks'
  document.getElementById('vibePrice').innerHTML = '<img src="/jork-it/jork.png" alt="">' + vibePrice
        document.getElementById('vibes').innerHTML = vibes
  document.getElementById('jorker').addEventListener('click', () => {
    jorks = Number(getCookie(path + 'jorks'))
    jorks += jorkpower
    setCookie(path + 'jorks', + jorks, debug)
    setCookie(path + "alljorks", alljorks += jorkpower, debug)
    document.getElementById('counter').innerHTML = Math.round(jorks) + ' jorks'
  })

document.getElementById('reset').addEventListener('click', () => {
    vibes = 0
    vibePrice = 50
    jorks = 0
    jorkpower = 1
    setCookie(path + 'vibes', 0, debug)
    setCookie(path + 'jorks', 0, debug)
    setCookie(path + 'alljorks', 0, debug)
    setCookie(path + 'vibePrice', 50, debug)
    document.getElementById('counter').innerHTML = 0 + ' jorks'
    document.getElementById('vibePrice').innerHTML = vibePrice
        document.getElementById('vibes').innerHTML = vibes
})

  document.getElementById('vibe').addEventListener('click', () => {
    vibes = Number(getCookie(path + 'vibes'))
    jorks = Number(getCookie(path + 'jorks'))
      if (jorks >= vibePrice) {
        vibes++
        if (debug) {console.log(vibes)}
        jorks -= vibePrice
        vibePrice += Math.round(vibePrice / 5 * 0.8)
        jorkpower = (vibes * 1.5)
        document.getElementById('vibePrice').innerHTML = '<img src="/jork-it/jork.png" alt="">' + vibePrice
        document.getElementById('vibes').innerHTML = vibes
        if (debug) {console.log(jorks)}
        setCookie(path + 'vibes', vibes, debug)
        if (vibes === 1) {viber()}
        setCookie(path + 'vibePrice', vibePrice, debug)
        setCookie(path + 'jorks', jorks, debug)
      }
      document.getElementById('counter').innerHTML = Math.round(jorks) + ' jorks'
      if (debug) {console.log(vibePrice)}
    }
  )

  viber()
  achieves()

  document.getElementById('top').style.display = 'none'}

const viber = async () => {
  console.log('starting viber')
  let jorks = Number(getCookie(path + 'jorks'))
  let vibes = Number(getCookie(path + 'vibes'))
  while (vibes != 0) {
    vibes = Number(getCookie(path + 'vibes'))
    await delay(1000 / 1*(0.5 / vibes))
    jorks = Number(getCookie(path + 'jorks'))
    alljorks = Number(getCookie(path + 'alljorks'))
    setCookie(path + 'jorks', jorks += 1, debug)
    setCookie(path + "alljorks", alljorks += 1, debug)
    document.getElementById('counter').innerHTML = Math.round(jorks) + ' jorks'
  }
  if (vibes === 0) {console.log('stopping viber')}
}

const achieves = async () => {
  while (true) {
    await delay(100)
  }
}