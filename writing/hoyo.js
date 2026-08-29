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
  chapter('', 'lore or something', paragraph(
      `stelle is kind of a bitch
      she bullies march all the time ("it's technically not consensual but she gets hard")
      is one of the few girls on the astral express to have a vulva (that she would trade for a dick in a heartbeat {bc she's surrounded by trans girls she wants feel her dick sliding inside of})
      does not like vaginal, would rather do anal ("if i <i>have</i> to... i <i>guess...</i>") ("pussy") ("shut the fuck up wolfie") ("kys") ("i need to get a gag to shove in your mouth") <span class="preserve_text preserve">("O  _  O")</span>
      face is almost always (- _ -) ; only changes when she's fucking wolfie's tail
      can teleport stuff around with a range of miles; only uses it for the funny (she could teleport girls inside her :>c)`
    ) +
    paragraph(``) +
    paragraph(``)
  ),

  chapter('', 'orgy at the astral express', paragraph(
    `<i>Lumine and Belle are dragged away from a tour of the Astral Express by Stelle, along with March and Wolfie.</i>

    `
  )),
]
hsr = [
  // nothing yet
]

genshin_draft = [
  chapter('', 'lore or something', paragraph(
      `lumine is horny af
      and switch
      she will top lisa and be arle's dog
      Lisa is her wife, but she'll fuck just about any woman`
    ) +
    paragraph(``)
  ),
]
genshin = [
  // gotta write it first :T
]

zenless_draft = [
  chapter('', '', paragraph(
    ``
  )),
]
zenless = [
  // nothing :L
]