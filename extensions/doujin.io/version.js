let version = '1.4.2'

console.log('setting interval...')
setInterval(() => {
  try {
  let verElement = document.getElementById('doujinVer')
  let newestVer = document.getElementById('doujinNewest').textContent
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