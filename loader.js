console.log('loading scripts')

function promiseLoadScript(url) {
  var script = document.createElement("script")
  script.src = url;

  document.head.appendChild(script)
  return Promise.resolve('Success')
}
function loadScript (script='') {
  new Promise(() => promiseLoadScript(script))
  console.log(`loaded ${script}`)
}

async function load() {
  await loadScript('/bullshit.js')
  await loadScript('/script.js')
  console.log('done loading scripts')
}

load()