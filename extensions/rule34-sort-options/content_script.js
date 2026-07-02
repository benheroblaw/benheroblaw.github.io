console.log('r34sort ver 1.1');

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

let tags = qSel('input[name="tags"]').value
let bsTags = getCookie('bsTags')

console.log('adding interval');

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
// }, 100)