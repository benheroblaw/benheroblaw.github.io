// import {pornSidebar} from '/r34/porn.js'

// service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function(registration) {
    tesLog('Service Worker registered with scope: ' + registration.scope);
  }).catch(function(error) {
    tesLog('Service Worker registration failed:', error);
  });
}

// variables
var script = document.createElement('script')
script.src = '/r34/porn.js'

var pornSidebar = '\
  <h1><a href="/r34/r34.html"><span style="color: white;">prawns</span></a></h1>\
  <a href="all.html" class="red"><span>all</span></a><br>\
  <a class="blue" href="assets.html"><span>assets</span></a><br>\
  <a href="coolart.html" class="blue"><span>Artists</span></a><br>\
  <br>\
  \
  <a class="blue" href="/r34/comics.html"><span>Comics</span></a><br><br>\
  <a href="/r34/cavestory.html" class="blue"><span>Cave Story</span></a><br>\
  <a href="/r34/dragon-maid.html" class="blue"><span>Dragon Maid</span></a><br>\
  <a href="/r34/hard-degen.html" class="blue"><span>Hard Degenerate</span></a><br>\
  <a href="/r34/hoyo.html" class="blue"><span>Hoyoverse</span></a><br>\
  <a class="blue" href="/r34/irl.html"><span>IRL</span></a><br>\
  <a class="blue" href="/r34/mario.html"><span>Mario</span></a><br>\
  <a class="blue" href="/r34/miku.html"><span>Miku</span></a><br>\
  <a class="blue" href="/r34/Overwatch.html"><span>Overwatch</span></a><br>\
  <a class="blue" href="/r34/other.html"><span>Other</span></a><br>\
  <a class="blue" href="/r34/pokemon.html"><span>Pokemon</span></a><br>\
  <a class="blue" href="/r34/rouge.html"><span>Rouge the Bat</span></a><br>\
  <a class="blue" href="/r34/roblox.html"><span>Roblox</span></a><br>\
  <a class="blue" href="/r34/terraria.html"><span>Terraria</span></a><br>\
  <a class="blue" href="/r34/zonkpunch.html"><span>Zonkpunch</span></a><br><br>\
  <a class="blue" href="/r34/audio.html"><span>Audio</span></a><br>\
  <a class="blue" href="/r34/shibby.html"><span>shibby</span></a><br><br>\
  <button onclick="location.reload(true)">ctrl+f5</button><br>\
  <a class="hidden", style="color: #111;" href="files.html">Files</a>\
'

var pokemonSidebar = '\
  <h1>Viewers</h1>\
  <a href="/r34/pokemon/cynthia+houndoom-viewer.html">Cynthia x Houndoom</a>\
'

var mikuSidebar =
  '<h1>Viewers</h1>' +
  '<a href="/r34/miku/miku_viewer.html">Cat Miku</a><br>' +
  '<a href="/r34/miku/migu_viewer.html">Migu</a><br>' +
  '<a href="/r34/miku/mikgu.html">Miku Teto</a><br>' +
  '<a href="/r34/miku/migu.html">Horny Migu</a><br>'

var sona = '<h1>sonas</h1>\
  <a href="/character-sheets/femsona.html"><span>femsona</span></a><br>\
  <a href="/character-sheets/enbysona.html"><span>themsona</span></a><br>'
  // <a href="/character-sheets/mascsona.html"><span>mascsona</span></a>'

var dragonSidebar = '<h1>Viewers</h1>'
+ '<a href="/r34/dragon maid/miss-tohru.html">Miss Tohru</a><br>'

var program = [
    '(^///^) ',
    "(o///o) ",
    "(0///0) ",
    "(>///<) ",
    " ( /o///o) ",
    " ( /0///0) ",
    "(v///v) ",
    '(-///-) ',
    '(u///u) ',
]

var tes = ["(o ^ o) ", "(- ^ -) "]

var me = [':3 > ', ';3 > ']

// functions
function setCookie(cname, cvalue, output = true, exdays = 365) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';page=/';
  if (output) {
  console.log(
    tes[0] + 'Set cookie \'' + cname + '\' with value \'' + cvalue + '\'; ' + expires
  )}
}

function setArrayCookie(name, value, daysToLive = 365) {
  // Serialize the value (array --> string)
  var serializedValue = JSON.stringify(value);

  // Set expiration date
  var date = new Date();
  date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000)); // days --> milliseconds
  var expires = `expires=${date.toUTCString()}`;

  // Combine all cookie attributes[0]
  var cookie = `${name}=${encodeURIComponent(serializedValue)}; ${expires}; path=/; SameSite=Strict`;

  // Add "secure" attribute if using HTTPS
  if (window.location.protocol === "https:") {
    cookie += "; secure";
  }

  // Set the cookie
  document.cookie = cookie;
}

function getCookie(cname) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function getArrayCookie(name) {
  // Split all cookies into an array of "name=value" strings
  var cookies = document.cookie.split(";");

  // Loop through cookies to find the one with the matching name
  for (let cookie of cookies) {
    // Trim whites[0]pace and split into name/value
    var [cookieName, cookieValue] = cookie.trim().split("=");

    // If the name matches, decode and parse the value
    if (cookieName === name) {
      try {
        // Decode URI and parse JSON
        return JSON.parse(decodeURIComponent(cookieValue));
      } catch (error) {
        // Handle invalid JSON (e.g., manually modified cookie)
        console.error("Failed to parse cookie:", error);
        return null;
      }
    }
  }

  // Return null if cookie not found
  return null;
}

function checkCookie(cname, output=true) {
  let anti = getCookie(cname)
  if (anti != '') {
    if (output) {
    console.log(
      tes[0] + 'Found cookie \'' + cname + '\' with value \'' + getCookie(cname) + '\''
    )}
    return 'success!'
  } else {
    errorMessage('Couldn\'t find cookie ' + cname)
    return 'error'
  }
}

function checkArrayCookie(cname) {
  let anti = getArrayCookie(cname)
  if (anti != null) {
    console.log(
      tes[0] + 'Found cookie \'' + cname + '\' with value \'' + getArrayCookie(cname) + '\''
    )
    return 'success!'
  } else {
    errorMessage('Couldn\'t find cookie \'' + cname + '\'')
    return 'error'
  }
}

function deleteCookie(cname, cvalue='', output = true, exdays = -7) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';page=/';
  if (output) {
  console.log(
    tes[0] + 'Deleted cookie \'' + cname + '\''
  )}
}


// function fetchJSONData(jsonFile="./tes[0]t.json") {
//   fetch(jsonFile)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('Failed to fetch data:', error));
// }

function displayStory(content = ['wtf'], extraScript='', doCookies = true, doX = false, doY = true, doOutput = false) {
  var page = window.location.pathname + ' - '
  var showSlide = (n) => {
    gewi('story').innerHTML = content[n]
  }

  let index = Number(getCookie(page + 'index'))
  if (index + 1 > content.length) {
    setCookie(page + 'index', 0, doOutput)
    index = 0
  }
  if (index + 1 === content.length) {
    gewi('prev').style.display = 'inline'
    gewi('prev1').style.display = 'inline'
    gewi('next').style.display = 'none'
    gewi('next1').style.display = 'none'
  }
  else {
    gewi('prev').style.display = 'inline'
    gewi('prev1').style.display = 'inline'
    gewi('next').style.display = 'inline'
    gewi('next1').style.display = 'inline'
  }
  if (index === 0) {
    gewi('prev').style.display = 'none'
    gewi('prev1').style.display = 'none'
    gewi('next').style.display = 'inline'
    gewi('next1').style.display = 'inline'
    if (content.length <= 1) {
      gewi('prev').style.display = 'none'
      gewi('prev1').style.display = 'none'
      gewi('next').style.display = 'none'
      gewi('next1').style.display = 'none'
    }
  }
  if (doCookies == true) {
    if (doX === true && checkCookie(page + 'scrollx', false) === 'error') {
      setCookie(page + 'scrollx', 0, doOutput)
    }
    if (doY === true && checkCookie(page + 'scrolly', false) === 'error') {
      setCookie(page + 'scrolly', 0, doOutput)
    }
    if (checkCookie(page + 'index', false) === 'error') {
      setCookie(page + 'index', 0, doOutput)
      index = 0
    }
    if (index === 'NaN') {
      setCookie(page + 'index', 0, doOutput)
      index = 0
    }
  }
  showSlide(index)
  if (doCookies = true) {
    window.scrollTo(
      Number(getCookie(page + 'scrollx')),
      Number(getCookie(page + 'scrolly'))
    )
  }
  function next() {
    var videoElement = qSelA('video')
    try {videoElement.forEach(element => {
      element.pause()
      element.removeAttribute('src')
      element.load()
    })}
    catch (TypeError) {errorMessage('no videos')}
      index = (index + 1) % content.length
    if (index + 1 >= content.length) {
      gewi('next').style.display = 'none'
      gewi('next1').style.display = 'none'
      gewi('prev').style.display = 'inline'
      gewi('prev1').style.display = 'inline'
    }
    else {
      gewi('next').style.display = 'inline'
      gewi('next1').style.display = 'inline'
      gewi('prev').style.display = 'inline'
      gewi('prev1').style.display = 'inline'
    }
    window.scrollTo(0, 0)
    showSlide(index)
    vol()
    eval(extraScript)
    if (doCookies == true) {
      setCookie(page + 'index', index, doOutput)
    }
    char()
  }
  function prev() {
    var videoElement = qSelA('video')
    try {videoElement.forEach(element => {
      element.pause()
      element.removeAttribute('src')
      element.load()
    })}
    catch (TypeError) {errorMessage('no videos')}
    index = (index + content.length - 1) % content.length
    if (index === 0) {
      gewi('prev').style.display = 'none'
      gewi('prev1').style.display = 'none'
      gewi('next').style.display = 'inline'
      gewi('next1').style.display = 'inline'
    }
    else {
      gewi('prev').style.display = 'inline'
      gewi('prev1').style.display = 'inline'
      gewi('next').style.display = 'inline-block'
      gewi('next1').style.display = 'inline-block'
    }
    window.scrollTo(0, 0)
    showSlide(index)
    vol()
    eval(extraScript)
    if (doCookies == true) {
      setCookie(page + 'index', index, doOutput)
    }
    char()
  }
  gewi('next').addEventListener('click', () => {
    next()
  })
  gewi('next1').addEventListener('click', () => {
    next()
  })
  gewi('prev').addEventListener('click', () => {
    prev()
  })
  gewi('prev1').addEventListener('click', () => {
    prev()
  })
  window.onkeydown = function (event) {
    if (event.key === 'ArrowRight') {
      if (index + 1 != content.length) {
        next()
      }
    }
    else if (event.key === 'ArrowLeft') {
      if (index != 0) {
        prev()
      }
    }
    else if (event.key === 'ArrowUp') {
    // Up Arrow pressed
    }
    else if (event.key === 'ArrowDown') {
      // Down Arrow pressed
    }
  }
  function char() {
    try {
    gewi('char').addEventListener('dblclick', () => {
      word_count()
    })
    }
    catch (TypeError) {
      errorMessage('story: no char element')
    }
  }
  char()
  if (doCookies == true) {
    window.addEventListener('scrollend', () => {
      if (doX === true) {
        setCookie(page + 'scrollx', window.scrollX, doOutput)
      }
      if (doY === true) {
        setCookie(page + 'scrolly', window.scrollY, doOutput)
      }
    })
  }
  tesLog('finished loading story')
}

var startState = 'not started'

function startStory(content=['wtf'], format=false, extraScript='', doCookies=true, doX=false, doY=true, doOutput=true) {
  if (doOutput) {tesLog('starting story...')}
  var s = document.createElement('script');
  s.id = 'text'
  if (startState === 'not started') {
    getScript('/text.js')
    if (doOutput) {tesLog('story: fetched text')}
    startState = 'debug check'
  }
  if (window.location.href.indexOf('http://localhost:8001') > 0) {
    if (doOutput) {tesLog('story: debug true')}
    startState = 'debug true'
  }
  else {
    if (doOutput) {tesLog('story: debug false')}
    startState = 'ready to display'
  }
  if (startState === 'debug true') {
    tesLog('story: getting text')
    getScript('https://prokid99999.github.io/text.js')
    getScript('http://localhost:2009/text.js')
    }
  if (doOutput) {tesLog('story: displaying')}
  if (startState === 'ready to display') {
    if (format) {document.body.innerHTML +=
      '\
        <br>\
        <div class="space">\
            <div style="text-align: left"><button id="prev">&lt; Previous</button></div>\
            <div id="center" style="text-align: center;"></div>\
            <div style="text-align: right;"><button id="next">Next &gt;</button></div>\
        </div>\
            <div id="story"><br>\
                <span style="color: white;">this shit isn\'t fucking working :&lpar;</span>\
            </div><br>\
        <div class="space">\
            <div style="text-align: left"><button id="prev1">&lt; Previous</button></div>\
            <div id="center1" style="text-align: center;"></div>\
            <div style="text-align: right;"><button id="next1">Next &gt;</button></div>\
        </div><br><br>'}
    displayStory(content, extraScript, doCookies, doX, doY, doOutput)
  }
}

function StartThoughts(content = ['wtf']) {
  var page = window.location.pathname + ' - '
  getScript('/thoughts.js')
  // content.reverse()
  var showSlide = (n) => {
    gewi('story').innerHTML += '<div class="background">' + content[n] + '</div><br><br>'
  }

  gewi('story').innerHTML = ""

  for (let index = 0; index < content.length; index++) {
    const element = content[index];
    showSlide(index)
  }
}

function startViewer(basePath='', contents=[''], location='html>body', debug = false) {
  // const content = contents.forEach((index) => {basePath + index})
  try {
    gewi('image').remove()
    qSel('.pages').remove()
  }
  catch (error) {
    errorMessage('nothing to remove')
  }

  // image
  const image = document.createElement('img')
  image.className = 'center'
  image.id = 'image'
  image.src = basePath + contents[0]
  image.style.marginTop = '0.5rem'
  image.style.marginBottom = '0.5rem'
  image.style.border = 'none'
  image.style.backgroundColor = 'rgb(127, 127, 127)'
  image.innerText = 'loading...'

    if (debug) {console.log('adding image')}
  qSel(location).innerHTML += '<div class="center"></div><div class="pages" id="pages"></div>'
  qSel('.center').appendChild(image)


  // page buttons
  contents.forEach((value, index, array) => {
    const button = document.createElement('button')
    button.id = index
    button.style.marginRight = '0.25rem'
    if (debug) {console.log('adding text')}
    button.innerText = 'Page ' + (index + 1)
    if (debug) {console.log('adding onclick')}
    button.onclick = () => {
      gewi("image").src = basePath + contents[index];
      qSelA('.pages>button').forEach(element => element.style.backgroundColor = 'black');
      gewi(index).style.backgroundColor = "blue";
    }
    gewi('pages').appendChild(button)
  })
  gewi('0').style.backgroundColor = 'blue'
  // qSel(location).style = "margin: 0; width: 100vw;"
}

function getCommit(owner, repo) {
  fetch(
    'https://api.github.com/repos/' + owner + '/' + repo + '/commits?per_page=1',
    {Authorization: "Bearer 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"}).then(res => res.json()).then(
    res => {
      gewi('message').className = 'message'
      gewi('message').innerHTML = res[0].commit.message
      if (res[0].commit.author.name = 'benheroblaw') {
        gewi('committer').className = 'benheroblaw'
      }
      else if (res[0].commit.author.name === 'Prokid99999') {
        gewi('committer').className = 'prokid'
      }
      else {
        gewi('committer').className = 'other'
      }
      gewi('committer').innerText = res[0].commit.committer.name
    })
}

function getCommitNumbers(owner, repo) {
  fetch(
    'https://api.github.com/repos/' + owner + '/' + repo + '/commits?per_page=1',
    {
      Authorization: atob('')
    }).then(res => res.json()).then(
    res => {
      gewi('message').innerHTML = res[0].commit.message
    })
}

var delay = ms => new Promise(res => setTimeout(res, ms));

function word_count(paras = 'background') {
  paras = document.getElementsByClassName(paras);
  var count = 0;
  for (var i = 0; i < paras.length; i++) {
    var content = paras[i].textContent;
    var words = content.match(/\S+/g);
    count += words ? words.length : 0;
  }
  let contents = paras[0].textContent
  contents = contents.trim()
  contents = contents.replace(/<[^>]*>?/gm, '');
  char = contents.length
  tesLog(count + ' words, ' + char + ' characters');
}

function wordcount(paras = 'background') {
  let area = gewi(paras);
  let char = 0 // Count characters
  let content = area.textContent;
  char = content.length;
  // Remove empty spaces from start and end
  content.trim();
  console.log(content);
  let wordList = content.split(/\s/);
  // Remove spaces from between words
  let words = wordList.filter(function (element) {
    return element != '';
  });
  // Count words
  console.log(words.length)
}

function stripHtml(html) {
  let tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent ||
  tmp.innerText ||
  '';
}

function vol(video_volume = 0.1, audio_volume = 0.75) {
  var video = qSelA('video');
  video.forEach(element => element.volume = video_volume
  )
  // video.forEach(element => element.addEventListener('pause', () => setCookie(element + 'time', element.currentTime)), doOutput)
  // video.forEach(element => element.preload = 'none')
  var audio = qSelA('audio');
  audio.forEach(element => element.volume = audio_volume)
}

function colorTrace(msg, color='red') {
    console.log("%c" + msg, "color:" + color + "; font-weight:bolder;");
}

function errorMessage(msg) {
  colorTrace(tes[1] + ' ' + msg, 'red')
}

function tesLog (msg='') {
  console.log(tes[0] + msg)
}

function clear() {
  console.clear()
}

var video = qSelA('video')
document.addEventListener('loadstart', video.forEach(element => element.preload = 'none'))

function addSidebar(sidebar=pornSidebar, viewerSidebar='', sidebar3='', sidebar4='',) {
  document.body.innerHTML += '<link rel="stylesheet" href="/sidebar.css">'
  try {gewi('sidebar').innerHTML = sidebar; gewi('sidebar').style.display = 'inline'}
  catch (Error) {errorMessage('no 1st sidebar')}
  if (viewerSidebar != '') {
    try {gewi('sidebar2').innerHTML = viewerSidebar; gewi('sidebar2').style.display = 'inline'}
    catch (Error) {errorMessage('no 2nd sidebar')}
  }
  if (sidebar3 != '') {
    try {gewi('sidebar3').innerHTML = sidebar3; gewi('sidebar3').style.display = 'inline'}
    catch (Error) {errorMessage('no 3rd sidebar')}
  }
  if (sidebar4 != '') {
    try {gewi('sidebar4').innerHTML = sidebar4; }
    catch (Error) {errorMessage('no 4th sidebar')}
  }

}

function getScript(file) {
  var s = document.createElement('script');
  s.id = 'getScript'
  s.src = file;
  document.head.appendChild(s);
  // gewi('getScript').remove()
}
function getModule(file) {
  var s = document.createElement('script');
  s.id = 'getScript'
  s.src = file;
  s.type = 'module'
  document.head.appendChild(s);
  // gewi('getScript').remove()
}
// function promiseLoadScript(url) {
//   var script = document.createElement("script");  // create a script DOM node
//   script.src = url;  // set its src to the provided URL

//   document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
//   return Promise.resolve('Success')
// }
// const promisepromiseLoadScript = (script='/r34/porn.js') => {
//   new Promise(() => promiseLoadScript(script))
//   tesLog('loaded script')
// }

function addElement(element='', id='') {
  let elem = document.createElement(element)
  if (id != '') {
    elem.id = id
  }
  document.body.appendChild(elem)
}

/**
 * loads a script
 * @param {string} file file path
 */
function getScript(file) {
  var s = document.createElement('script');
  s.id = 'getScript'
  s.src = file;
  document.head.appendChild(s);
}
/**
 * loads a script as a module
 * @param {string} file file path
 */
function getModule(file) {
  var s = document.createElement('script');
  s.id = 'getScript'
  s.src = file;
  s.type = 'module'
  document.head.appendChild(s);
}

/**
 * Quick element adder
 * @param {string} element element type
 * @param {string} id id to add to the element
 */
function addElement(element='', id='') {
  let elem = document.createElement(element)
  if (id != '') {
    elem.id = id
  }
  document.body.appendChild(elem)
  if (id === '') {return `added ${element} to document`}
  else {return `added ${element} to document with id ${id}`}
}

/**
 *Shorthand for document.getElementById
 * @param {string} id - id of the element
 * @returns the element
 */
function getElementWithId(id='') {
  return document.getElementById(id)
}
/**
 *Shortened version of getElementWithId
 * @param {string} id - id of the element
 */
function gEWI(id='') {
  return getElementWithId(id)
}
/**
 *Shortened version of getElementWithId
 * @param {string} id - id of the element
 */
function gewi(id='') {
  return getElementWithId(id)
}

/**
 * Shorthand for document.getElementsByClassName
 * @param {string} clas - class to search for
 * @returns elements
 */
function getElementsWithClassname(clas='') {
  return document.getElementsByClassName(clas)
}
/**
 * Shortened version of getElementWithClass
 * @param {*} clas - class to search for
 * @returns elements
 */
function gEWC(clas='') {
  return getElementsWithClassname(clas)
}
/**
 * Shortened version of getElementWithClass
 * @param {*} clas - class to search for
 * @returns elements
 */
function gewc(clas='') {
  return gEWC(clas)
}

/**
 * Shorthand for document.querySelector
 * @param {string} params CSS selectors
 * @returns elements
 */
function qSel(params='') {
  return document.querySelector(params)
}
/**
 * Shorthand for document.querySelectorAll
 * @param {string} params CSS selectors
 * @returns elements
 */
function qSelA(params='') {
  return document.querySelectorAll(params)
}

function linkedImage(link, linebreak='') {
  var output = ` <a href="${link}"><img src="${link}"></a> `
  if (linebreak != '') {output += '<br>'}
  return output
}

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

// event listeners
document.addEventListener("DOMContentLoaded", function() {
  // document.body.appendChild(script)
  if (window.location.pathname.indexOf('/r34/') > -1) {
    tesLog('loading porn.js');
    promiseLoadScript('/r34/porn.js').then(addSidebar(pornSidebar))
  }
  // qSelA('video').forEach(element => element.preload = 'auto')
  vol(0.1, 0.1)
  // getScript('/bullshit.js')
})

document.addEventListener("onload", function() {
  addSidebar(pornSidebar)
})

document.addEventListener('load', () =>
  ''
)

if (window.location.href.indexOf('http://localhost:8001') > 0) {
  console.clear()
}