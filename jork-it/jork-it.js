hony = [';3 < ', ';//3 < ', '://3 < ']

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
  if (checkCookie(path + 'electros') === 'error') {
    setCookie(path + 'electros', 0, debug)
  }
  if (checkCookie(path + 'ePrice') === 'error') {
    setCookie(path + 'ePrice', 2500, debug)
  }
  if (checkArrayCookie(path + 'upgrades') === 'error') {
    setArrayCookie(path + 'upgrades', ['none', 'balls'], debug)
  }

  let jorks = Number(getCookie(path + 'jorks'))
  let alljorks = Number(getCookie(path + 'alljorks'))
  let vibes = Number(getCookie(path + 'vibes'))
  let electros = Number(getCookie(path + 'electro'))
  let upgrades = Number(getArrayCookie(path + 'upgrades'))
  let vibePrice = Number(getCookie(path + 'vibePrice'))
  let ePrice = Number(getCookie(path + 'ePrice'))
  let arousal = Number(getCookie(path + upgrades).length)
  if (arousal === 0) {arousal=1}
  let jorkpower = 1 + (vibes * 0.75) + (electros * 5) * arousal

function click() {
  jorks = Number(getCookie(path + 'jorks'))
  jorks += jorkpower
  setCookie(path + 'jorks', + jorks, debug)
  setCookie(path + "alljorks", alljorks += jorkpower, debug)
  document.getElementById('counter').innerHTML = Math.round(jorks) + ' jorks'
}

  document.getElementById('counter').innerHTML = Math.round(jorks) + ' jorks'
  document.getElementById('vibePrice').innerHTML = '<img src="/jork-it/jork.png" alt="">' + vibePrice
        document.getElementById('vibes').innerHTML = vibes
  document.getElementById('ePrice').innerHTML = '<img src="/jork-it/jork.png" alt="">' + ePrice
        document.getElementById('electros').innerHTML = electros
  document.getElementById('jorker').addEventListener('click', () => {
    click()
  })

document.getElementById('reset').addEventListener('click', () => {
    vibes = 0
    vibePrice = 50
    electros = 0
    ePrice = 2500
    jorks = 0
    jorkpower = 1
    setCookie(path + 'vibes', 0, debug)
    setCookie(path + 'jorks', 0, debug)
    setCookie(path + 'alljorks', 0, debug)
    setCookie(path + 'vibePrice', 50, debug)
    setCookie(path + 'electros', 0, debug)
    setCookie(path + 'ePrice', 2500, debug)
    document.getElementById('counter').innerHTML = 0 + ' jorks'
    document.getElementById('vibePrice').innerHTML = vibePrice
    document.getElementById('vibes').innerHTML = vibes
    document.getElementById('ePrice').innerHTML = ePrice
    document.getElementById('electros').innerHTML = electros
})

const move = document.querySelectorAll(".tooltiptext");

document.body.onpointermove = event => {
    const { clientY } = event;

    move.forEach( element =>
      element.animate({top: 'calc(-10vw + ' + clientY+'px)'}, {duration: 10, fill: "forwards"})
    )
}

  document.getElementById('vibe').addEventListener('click', () => {
    vibes = Number(getCookie(path + 'vibes'))
    jorks = Number(getCookie(path + 'jorks'))
      if (jorks >= vibePrice) {
        vibes++
        if (debug) {console.log(vibes)}
        jorks -= vibePrice
        vibePrice += 24 + Math.round((vibes / 1.5))
        jorkpower += 0.75
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
  document.getElementById('electro').addEventListener('click', () => {
    electros = Number(getCookie(path + 'electros'))
    jorks = Number(getCookie(path + 'jorks'))
      if (jorks >= ePrice) {
        electros++
        if (debug) {console.log(electros)}
        jorks -= ePrice
        ePrice += 499 + (electros)
        jorkpower += 5
        document.getElementById('ePrice').innerHTML = '<img src="/jork-it/jork.png" alt="">' + ePrice
        document.getElementById('electros').innerHTML = electros
        if (debug) {console.log(jorks)}
        setCookie(path + 'electros', electros, debug)
        if (electros === 1) {viber()}
        setCookie(path + 'ePrice', ePrice, debug)
        setCookie(path + 'jorks', jorks, debug)
      }
      document.getElementById('counter').innerHTML = Math.round(jorks) + ' jorks'
      if (debug) {console.log(ePrice)}
    }
  )

  viber()
  tick()

  document.getElementById('top').style.display = 'none'
}

const viber = async () => {
  console.log(hony[0]+'starting viber')
  let jorks = Number(getCookie(path + 'jorks'))
  let vibes = Number(getCookie(path + 'vibes'))
  let electros = Number(getCookie(path + 'electros'))
  let idlepower = vibes + (electros * 10)
  while (vibes != 0 || electros !=0) {
    vibes = Number(getCookie(path + 'vibes'))
    electros = Number(getCookie(path + 'electros'))
    idlepower = vibes + (electros * 10)
    await delay(1000 / idlepower)
    jorks = Number(getCookie(path + 'jorks'))
    alljorks = Number(getCookie(path + 'alljorks'))
    setCookie(path + 'jorks', jorks += 1, debug)
    setCookie(path + "alljorks", alljorks += 1, debug)
    document.getElementById('counter').innerHTML = Math.round(jorks) + ' jorks'
  }
  if (vibes === 0) {console.log(hony[0]+'stopping viber')}
}

const tick = async () => {
  while (true) {
    let vibes = Number(getCookie(path + 'vibes'))
    let electros = Number(getCookie(path + 'electros'))
    let upgrades = Number(getArrayCookie(path + 'upgrades'))
    let arousal = Number(getCookie(path + upgrades).length)
    if (arousal === 0) {arousal=1}
    let jorkpower = 1 + (vibes * 0.75) + (electros * 5) * arousal
    let idlepower = vibes + (electros * 10)
    document.getElementById('idlepower').innerText = idlepower + ' jorks per second'
    document.getElementById('clickpower').innerText = jorkpower + ' jorks per click'
    await delay(100)
  }
}
