path = 'vocaloid clicker - '

if (checkCookie(path + 'debug') === 'error') {
  setCookie(path + 'debug', false)
}
debug = getCookie(path + 'debug')
if (debug === 'false') {debug = false}
else if (debug === 'true') {debug = true}

if (checkCookie(path + 'mikus') === 'error') {
  setCookie(path + 'mikus', 0, debug)
}
if (checkCookie(path + 'amikus') === 'error') {
  setCookie(path + 'amikus', 0, debug)
}
if (checkCookie(path + 'tetos') === 'error') {
  setCookie(path + 'tetos', 0, debug)
}
if (checkCookie(path + 'atetos') === 'error') {
  setCookie(path + 'atetos', 0, debug)
}
if (checkCookie(path + 'nerus') === 'error') {
  setCookie(path + 'nerus', 0, debug)
}
if (checkCookie(path + 'anerus') === 'error') {
  setCookie(path + 'anerus', 0, debug)
}

function getMikus() {
  return Number(getCookie(path + 'mikus'))
}
function getTetos() {
  return Number(getCookie(path + 'tetos'))
}
function getNerus() {
  return Number(getCookie(path + 'nerus'))
}

function init() {
  let mikus = getMikus()
  let amikus = Number(getCookie(path + 'amikus'))
  let tetos = getTetos()
  let nerus = getNerus()

  gewi('mikus').innerHTML = ' ' + mikus.toExponential(3) + ' Mikus'
  gewi('tetos').innerHTML = ' ' + tetos.toExponential(3) + ' Tetos'
  gewi('nerus').innerHTML = ' ' + nerus.toExponential(3) + ' Nerus'

  gewi('mikuFace').innerHTML = selectableMiku('4rem')
  gewi('tetoFace').innerHTML = selectableTeto('4rem')
  gewi('neruFace').innerHTML = selectableNeru('4rem')

  gewi('mikuFace').onclick = () => {
    mikus = getCookie(path + 'mikus')
    mikus++
    setCookie(path + 'mikus', mikus)
    gewi('mikus').innerHTML = ' ' + mikus.toExponential(3) + ' Mikus'
  }
  gewi('tetoFace').onclick = () => {
    tetos = getCookie(path + 'tetos')
    tetos++
    setCookie(path + 'tetos', tetos)
    gewi('tetos').innerHTML = ' ' + tetos.toExponential(3) + ' Tetos'
  }
  gewi('neruFace').onclick = () => {
    nerus = getCookie(path + 'nerus')
    nerus++
    setCookie(path + 'nerus', nerus)
    gewi('nerus').innerHTML = ' ' + nerus.toExponential(3) + ' Nerus'
  }

  gewi('mikuAuto').addEventListener('click', async (e) => {
    mikus = getMikus()
    amikus = Number(getCookie(path + 'amikus'))
    if (mikus >= 25) {
    amikus++
    if (amikus === 1) {sing()}
      setCookie(
        path + 'amikus',
        amikus
      )
      mikus -= 25
      setCookie(path + 'mikus',
        mikus
      )
    gewi('mikus').innerHTML = ' ' + mikus.toExponential(3) + ' Mikus'
    gewi('mps').innerHTML = amikus + ' Mikus per second.'
    }
    // await delay(750)
    // while (e.type == 'mousedown') {
    // await delay (50)
    //   if (mikus >= 25) {
    //   amikus++
    //   if (amikus === 1) {sing()}
    //     setCookie(
    //       path + 'amikus',
    //       amikus
    //     )
    //     mikus -= 25
    //     setCookie(path + 'mikus',
    //       mikus
    //     )
    //   gewi('mikus').innerHTML = ' ' + mikus + ' Mikus'
    //   gewi('mps').innerHTML = amikus + ' Mikus per second.'
    //   }
    //   else {console.log('not enough mikus')}
    // }
  })
  gewi('tetoAuto').addEventListener('click', async (e) => {
    tetos = getTetos()
    atetos = Number(getCookie(path + 'atetos'))
    if (tetos >= 25) {
    atetos++
    if (atetos === 1) {sing()}
      setCookie(
        path + 'atetos',
        atetos
      )
      tetos -= 25
      setCookie(path + 'tetos',
        tetos
      )
    gewi('tetos').innerHTML = ' ' + tetos.toExponential(3) + ' Tetos'
    gewi('tps').innerHTML = atetos + ' Tetos per second.'
    }
    // await delay(750)
    // while (e.type == 'mousedown') {
    // await delay (50)
    //   if (mikus >= 25) {
    //   amikus++
    //   if (amikus === 1) {sing()}
    //     setCookie(
    //       path + 'amikus',
    //       amikus
    //     )
    //     mikus -= 25
    //     setCookie(path + 'mikus',
    //       mikus
    //     )
    //   gewi('mikus').innerHTML = ' ' + mikus + ' Mikus'
    //   gewi('mps').innerHTML = amikus + ' Mikus per second.'
    //   }
    //   else {console.log('not enough mikus')}
    // }
  })
  gewi('neruAuto').addEventListener('click', async (e) => {
    nerus = getNerus()
    anerus = Number(getCookie(path + 'anerus'))
    if (nerus >= 25) {
    anerus++
    if (anerus === 1) {sing()}
      setCookie(
        path + 'anerus',
        anerus
      )
      nerus -= 25
      setCookie(path + 'nerus',
        nerus
      )
    gewi('nerus').innerHTML = ' ' + nerus.toExponential(3) + ' Nerus'
    gewi('nps').innerHTML = anerus + ' Nerus per second.'
    }
    // await delay(750)
    // while (e.type == 'mousedown') {
    // await delay (50)
    //   if (mikus >= 25) {
    //   amikus++
    //   if (amikus === 1) {sing()}
    //     setCookie(
    //       path + 'amikus',
    //       amikus
    //     )
    //     mikus -= 25
    //     setCookie(path + 'mikus',
    //       mikus
    //     )
    //   gewi('mikus').innerHTML = ' ' + mikus + ' Mikus'
    //   gewi('mps').innerHTML = amikus + ' Mikus per second.'
    //   }
    //   else {console.log('not enough mikus')}
    // }
  })

  sing()
  tick()
}

function sing() {
  amiku()
  ateto()
  aneru()
}

const amiku = async () => {
  mikus = getMikus()
  amikus = getCookie(path + 'amikus')

  while (amikus > 0) {
    mikus = getMikus()
    if (amikus < 1000) {
      await delay(1000 / amikus)
      setCookie(path + 'mikus', mikus +1)
    gewi('mikus').innerHTML = `${mikus.toExponential(3)} Mikus`
    }
    else {
      await delay(30)
      setCookie(path + 'mikus', mikus + Math.round(amikus / 30))
    gewi('mikus').innerHTML = `${mikus.toExponential(3)} Mikus`
    }
  }
}
const ateto = async () => {
  tetos = getTetos()
  atetos = getCookie(path + 'atetos')

  while (atetos > 0) {
    tetos = getTetos()
    if (atetos < 1000) {
      await delay(1000 / atetos)
      setCookie(path + 'tetos', tetos +1)
    gewi('tetos').innerHTML = `${tetos.toExponential(3)} Tetos`
    }
    else {
      await delay(30)
      setCookie(path + 'tetos', tetos + Math.round(atetos / 30))
    gewi('tetos').innerHTML = `${tetos.toExponential(3)} Tetos`
    }
  }
}
const aneru = async () => {
  nerus = getNerus()
  anerus = getCookie(path + 'anerus')

  while (anerus > 0) {
    nerus = getNerus()
    if (anerus < 1000) {
      await delay(1000 / anerus)
      setCookie(path + 'nerus', nerus +1)
    gewi('nerus').innerHTML = `${nerus.toExponential(3)} Nerus`
    }
    else {
      await delay(30)
      setCookie(path + 'nerus', nerus + Math.round(anerus / 30))
    gewi('nerus').innerHTML = `${nerus.toExponential(3)} Nerus`
    }
  }
}

const tick = async () => {
  while (true) {
    sing()

    mikus = Number(getCookie(path + 'mikus'))
    tetos = Number(getCookie(path + 'tetos'))
    nerus = Number(getCookie(path + 'nerus'))
    amikus = Number(getCookie(path + 'amikus'))
    atetos = Number(getCookie(path + 'atetos'))
    anerus = Number(getCookie(path + 'anerus'))

    gewi('mikus').innerHTML = `${mikus.toExponential(3)} Mikus`
    gewi('tetos').innerHTML = `${tetos.toExponential(3)} Tetos`
    gewi('nerus').innerHTML = `${nerus.toExponential(3)} Nerus`

    gewi('mps').innerHTML = amikus + ' Mikus per second.'
    gewi('tps').innerHTML = atetos + ' Tetos per second.'
    gewi('nps').innerHTML = anerus + ' Nerus per second.'

    await delay(100)
  }
}