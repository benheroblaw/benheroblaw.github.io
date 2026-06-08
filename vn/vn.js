path = window.location.pathname + ' - vn'

if (getCookie(path + 'index') === 'error') {
    setCookie(path + 'index', 0)
}

function textbox(text, characters) {
    addElement('div', 'textbox')
    let textbox = gewi('textbox')
    let index = getCookie(path + 'index')

    textbox.innerHTML = text[0]

    window.addEventListener('click', () => {
        if (index <= text.length) {
            index = getCookie(path + 'index')
            index++
            setCookie(path + 'index', index)
            if (characters[index] !== '') {
                gewi(characters[index]).src = `${characters[index]}Selected.svg`
            }
            textbox.innerHTML = text[index]
        }
    })
}

function visualNovel(text=['error'], characters=['']) {
    gss('/vn/vn.css')
    textbox(text, characters)
}