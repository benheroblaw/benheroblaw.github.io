let version = '1.4.3'

console.log('setting interval...')
setInterval(() => {
  try {
    let verElement = document.getElementById('doujinVer')
    let newestVer = document.getElementById('doujinNewest').textContent
    verElement.innerHTML = 'Current Version:'
    if (version === newestVer) {
      verElement.textContent = `Current Version: ${version}!`
      verElement.style.color = '#0f0'
    }
    else {
      verElement.textContent = 'Current Version: ' + version
      verElement.style.color = '#fff'
    }
  }
  catch {}
  }, 100);