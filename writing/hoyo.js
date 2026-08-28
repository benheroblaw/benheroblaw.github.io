function chapter(descriptor='', title='', content='', bg_linebreak=false) {
  output = ''
  if (descriptor != 'false') {
    output += header2(descriptor)
  }
  if (title != 'false') {
    output += header1(title)
  }
  if (content != 'false') {
    output += background(content, bg_linebreak)
  }
  // output = header2(descriptor) + header1(title) + background(content, linebreak)
  return output
}

hsr_draft = [
  chapter('', 'orgy at the astral express', paragraph(
    `<i>Lumine and Belle are dragged away from a tour of the Astral Express by Stelle, along with March and Wolfie.</i>

    `
  ))
]
hsr = [
  // nothing yet
]

genshin_draft = [
  chapter('', '', paragraph(
    ``
  ))
]
genshin = [
  // gotta write it first :T
]

zenless_draft = [
  chapter('', '', paragraph(
    ``
  ))
]
zenless = [
  // nothing :L
]