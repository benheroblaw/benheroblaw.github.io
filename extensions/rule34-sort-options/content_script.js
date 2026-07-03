console.log('r34sort ver 1.2');

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

let tags = qSel('input[name="tags"]').value
let bsTags = getCookie('bsTags')
let searchForm = qSel('form[action="index.php?page=search"]')

let sortButtons = document.createElement('div')
sortButtons.id = 'sortButtons'
let sortDesc = document.createElement('button')
// let sortDesc = document.createElement('input')
// sortDesc.type = 'submit'
sortDesc.id = 'sortDesc'
sortDesc.textContent = 'Sort Descending'
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
let sortNone = document.createElement('button')
// let sortNone = document.createElement('input')
// sortNone.type = 'submit'
sortNone.id = 'sortNone'
sortNone.textContent = 'Disable Sort'
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
let sortAsc = document.createElement('button')
// let sortAsc = document.createElement('input')
// sortAsc.type = 'submit'
sortAsc.id = 'sortAsc'
sortAsc.textContent = 'Sort Ascending'
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

try {gewi('sortButtons').remove()}
catch {}

searchForm.appendChild(sortButtons)
gewi('sortButtons').appendChild(sortDesc)
gewi('sortButtons').appendChild(sortNone)
gewi('sortButtons').appendChild(sortAsc)

// console.log('adding interval');

// setInterval(() => {
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


// }, 100)