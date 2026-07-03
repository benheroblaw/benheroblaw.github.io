function qSel(params='') {
  return document.querySelector(params)
}
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
function checkCookie(cname, output=true) {
  let anti = getCookie(cname)
  if (anti != '') {
    if (output) {
    console.log(
      tes[0] + 'Found cookie \'' + cname + '\' with value \'' + getCookie(cname) + '\''
    )}
    return 'success!'
  } else {
    console.log('Couldn\'t find cookie ' + cname)
    return 'error'
  }
}
function ensureCookie(cookie='', defaultVal='') {
  if (checkCookie(cookie) === 'error') {
    setCookie(cookie, defaultVal)
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
function gewi(id='') {
  return document.getElementById(id)
}
tes = [
  '(o ^ o) '
]

let options = qSel('form[action="index.php?page=account&s=options"]')
console.log(options);

ensureCookie('bsTags', '')

let settings = getCookie('bsTags')

let tagForm = document.createElement('tr')
tagForm.id = 'tagForm'
tagForm.innerHTML = `<td><label>Tags for each search</label><p>Tags to include in every search<br><br>Autosaves</p></td><td><textarea id="bsTags" cols="80" rows="6" autocomplete="off"></textarea></td>`
tagForm.onkeyup = () => {
  setCookie('bsTags', gewi('bsTags').value, true)
}

try {gewi('tagForm').remove()}
catch (TypeError) {console.log('no form to remove')}
qSel('form[action="index.php?page=account&s=options"]>table>tbody').appendChild(tagForm)
gewi('bsTags').innerText = getCookie('bsTags')