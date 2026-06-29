console.log('r34sort ver 0.1');
function qSel(params='') {
  return document.querySelector(params)
}

let tags = qSel('input[name="tags"]').value

console.log('adding interval');

setInterval(() => {
  tags = qSel('input[name="tags"]').value
  if (tags.includes("sort:score:desc")) {
    // console.log('already sorted')
    return
  }
  else {
    console.log('sorting...')
    qSel('input[name="tags"]').value += ' sort:score:desc'
  }
}, 100)