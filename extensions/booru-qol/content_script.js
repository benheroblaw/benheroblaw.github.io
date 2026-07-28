// library functions
function qSel(params='') {
  return document.querySelector(params)
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
function gewi(id='') {
  return document.getElementById(id)
}

// script
let tags = qSel('input[name="tags"]').value
let bsTags = getCookie('bsTags')
let searchForm = qSel('form[action="index.php?page=search"]')
let sortMargin = '0.25rem'
let sortBreakMargin = '0.75rem'

let sortButtons = document.createElement('div')
sortButtons.id = 'sortButtons'
sortButtons.style.marginTop = sortBreakMargin
let sortDesc = document.createElement('button')
// let sortDesc = document.createElement('input')
// sortDesc.type = 'submit'
sortDesc.id = 'sortDesc'
sortDesc.textContent = 'Sort by Highest Score'
sortDesc.style.marginBottom = sortMargin
sortDesc.onclick = () => {
  let tags = qSel('input[name="tags"]').value
  if (tags.includes('sort:score:desc')) {
    ''
  }
  else {
    qSel('input[name="tags"]').value = 'sort:score:desc ' + qSel('input[name="tags"]').value
    if (tags.includes('sort:score:asc')) {
      let tagOutput = qSel('input[name="tags"]').value.replace('sort:score:asc', '')
      tagOutput= tagOutput.replace(/\s+/g, ' ')
      qSel('input[name="tags"]').value = tagOutput.trim()
    }
  }
}
let sortAsc = document.createElement('button')
// let sortAsc = document.createElement('input')
// sortAsc.type = 'submit'
sortAsc.id = 'sortAsc'
sortAsc.textContent = 'Sort by Lowest Score'
sortAsc.style.marginBottom = sortMargin
sortAsc.onclick = () => {
  let tags = qSel('input[name="tags"]').value
  if (tags.includes('sort:score:asc')) {
    ''
  }
  else {
    if (tags.includes('sort:score:desc')) {
      let tagOutput = qSel('input[name="tags"]').value.replace('sort:score:desc', '')
      tagOutput= tagOutput.replace(/\s+/g, ' ')
      qSel('input[name="tags"]').value = tagOutput.trim()
    }
    qSel('input[name="tags"]').value = 'sort:score:asc ' + qSel('input[name="tags"]').value
  }
}
let sortNone = document.createElement('button')
// let sortNone = document.createElement('input')
// sortNone.type = 'submit'
sortNone.id = 'sortNone'
sortNone.textContent = 'Disable Sort'
sortNone.style.marginBottom = sortBreakMargin
sortNone.onclick = () => {
  let tags = qSel('input[name="tags"]').value
  if (tags.includes('sort:score:desc')) {
      let tagOutput = qSel('input[name="tags"]').value.replace('sort:score:desc', '')
      tagOutput= tagOutput.replace(/\s+/g, ' ')
      qSel('input[name="tags"]').value = tagOutput.trim()
  }
  else if (tags.includes('sort:score:asc')) {
      let tagOutput = qSel('input[name="tags"]').value.replace('sort:score:asc', '')
      tagOutput= tagOutput.replace(/\s+/g, ' ')
      qSel('input[name="tags"]').value = tagOutput.trim()
    }
}
let br = document.createElement('br')
br.style.display = 'inline-block'
let sortVideo = document.createElement('button')
sortVideo.id = 'sortVideo'
sortVideo.textContent = 'Only Videos'
sortVideo.style.marginBottom = sortMargin
sortVideo.onclick = () => {
  let tags = qSel('input[name="tags"]').value
  if (tags.includes('video')) {
    ''
  }
  else {
    if (tags.includes('-video')) {
      let tagOutput = qSel('input[name="tags"]').value.replace('-video', '')
      tagOutput= tagOutput.replace(/\s+/g, ' ')
      qSel('input[name="tags"]').value = tagOutput.trim()
    }
    qSel('input[name="tags"]').value += ' video'
  }
}
let sortNoVideo = document.createElement('button')
sortNoVideo.id = 'sortNoVideo'
sortNoVideo.textContent = 'No Videos'
sortNoVideo.style.marginBottom = sortMargin
sortNoVideo.onclick = () => {
  let tags = qSel('input[name="tags"]').value
  if (tags.includes('-video')) {
    ''
  }
  else {
    if (tags.includes('-video')) {
      let tagOutput = qSel('input[name="tags"]').value.replace('video', '')
      tagOutput= tagOutput.replace(/\s+/g, ' ')
      qSel('input[name="tags"]').value = tagOutput.trim()}
  }
      qSel('input[name="tags"]').value += ' -video'
}
let sortAllMedia = document.createElement('button')
sortAllMedia.id = 'sortAllMedia'
sortAllMedia.textContent = 'All Media'
sortAllMedia.style.marginBottom = sortMargin
sortAllMedia.onclick = () => {
  let tags = qSel('input[name="tags"]').value
  if (tags.includes('-video')) {
      let tagOutput = qSel('input[name="tags"]').value.replace('-video', '')
      tagOutput= tagOutput.replace(/\s+/g, ' ')
      qSel('input[name="tags"]').value = tagOutput.trim()
    }
  else if (tags.includes('video')) {
      let tagOutput = qSel('input[name="tags"]').value.replace('video', '')
      tagOutput= tagOutput.replace(/\s+/g, ' ')
      qSel('input[name="tags"]').value = tagOutput.trim()
    }
  }


try {gewi('sortButtons').remove()}
catch {}

searchForm.appendChild(sortButtons)
gewi('sortButtons').appendChild(sortDesc)
gewi('sortButtons').appendChild(sortAsc)
gewi('sortButtons').appendChild(sortNone)
gewi('sortButtons').appendChild(br)
br = document.createElement('br')
br.style.display = 'inline-block'
gewi('sortButtons').appendChild(sortVideo)
gewi('sortButtons').appendChild(br)
br = document.createElement('br')
br.style.display = 'inline-block'
gewi('sortButtons').appendChild(sortNoVideo)
gewi('sortButtons').appendChild(br)
br = document.createElement('br')
br.style.display = 'inline-block'
gewi('sortButtons').appendChild(sortAllMedia)



  tags = qSel('input[name="tags"]').value
  bsTags = getCookie('bsTags')
  if (tags.includes(bsTags)) {
    // console.log('already sorted')
    ''
  }
  else {
    console.log('adding tags...')
    qSel('input[name="tags"]').value = bsTags + ' ' + qSel('input[name="tags"]').value
  }
  searchForm

