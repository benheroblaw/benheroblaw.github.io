console.log('Bullshit Programs ;3\nbsHelp() for help')

// variables
let bull = ':3 > '

let success = 'Success!'

// functions
/**
 * little function to add a face to a log
 * @param {string} msg - message to be displayed in the console
 */
function bullshitLog(msg='') {
  console.log(bull + msg)
}
function bsLog(msg='') {
  console.log(bull + msg)
}
function bhbUnhide() {
  qSelectA('.hidden').forEach( element => {
    element.style.color = '#666'
  })
  bullshitLog
}

/**
 * Help function
 * @param {string} func specific function to help with - unfinished
 */
function bsHelp(func='') {
  if (func === '') {
    return bull+'bullshit.js, console helper/Javascript library by Bullshit Programs.'
  }

  else {return bull+'unrecognized function'}
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

function qSelect(params) {
  return document.querySelector(params)
}
function qSelectA(params) {
  return document.querySelectorAll(params)
}

bhbUnhide()