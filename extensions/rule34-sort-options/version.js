let version = '1.1'

console.log('setting interval...')
setInterval(() => {
  try {
    let verElement = document.getElementById('r34Ver')
    let newestVer = document.getElementById('r34Newest').textContent
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