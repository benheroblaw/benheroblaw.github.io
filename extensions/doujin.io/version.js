let version = '1.4.2'
console.log('setting interval...')
setInterval(() => {
  let verElement = document.getElementById('doujinVer')
  let newestVer = document.getElementById('doujinNewest').textContent
  // try {
    if (version === newestVer) {
      verElement = `Current Version: ${version}!`
      verElement.style.color = '#0f0'
    }
    else {
      verElement.innerHTML = 'Current Version: ' + version
    }
  // }
  // catch {}

  // console.log('setting version')
  }, 100);

// document.title += ' version 1.4.2'
// document.getElementById('doujinVer').innerHTML += 'Current Version: 1.4.2'