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

let rwby_DRAFT = [

  '<h2>chars</h2><h1 style="color: #f00; text-shadow: 5px 5px 10px #a00">Ruby Rose</h1>' +

  background(
    paragraph(
      `weapon pervert - refers to weapons she finds interesting as "she"
      she will take Myrtenaster apart for the first time (with weiss's permission), start thinking about upgrades or modifications she could make, and put it back together with no help about as fast as weiss could
      she also goes "ooo! grease!" and licks it off of her finger

      always smiling to some degree, little close-lipped smile, showing teeth smile, big manic grin

      intense eyes, staring super hard at everything

      rough and possessive with Weiss (she likes it)

      gayyy  (- w -)

      `
    )
  , false),

  chapter('chars', 'Weiss',
    paragraph(
      ``
    )
  ),

  chapter('', 'plot?',
    paragraph(
      ``
    )
  )

]

let rwby = [

]