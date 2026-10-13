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
      `"weapon pervert" - refers to weapons she finds interesting as female
      they will take Myrtenaster apart for the first time (with weiss's permission), start thinking about upgrades or modifications they could make, and put her back together with no help about as fast as weiss could
      also goes "ooo! grease!" and licks it off their finger

      always smiling to some degree, little close-lipped smile, showing teeth smile, big manic grin
      funny red glowing eyes

      intense eyes, staring super hard at everything

      rough and possessive with Weiss (she likes it)

      gayyy  (- w -)

      (i might be projecting onto transfemby ruby)`
    )
  , false),

  '<h2>chars</h2><h1 style="color: #fff; text-shadow: 5px 5px 10px #0ff">Weiss Schnee</h1>' +
  background(
    paragraph(
      ``
    ), false
  ),

  '<h2>chars</h2><h1 style="color: #ff0; text-shadow: 5px 5px 10px #fa0">Yang Xiao Long</h1>' +
  background(
    paragraph(
      ``
    ), false
  ),

  '<h2>chars</h2><h1 style="color: #666; text-shadow: 5px 5px 10px #000">Blake Belladonna</h1>' +
  background(
    paragraph(
      `<b>oral fixation</b>`
    ), false
  ),

  chapter('', 'plot?',
    paragraph(
      `Fights with Cardin (or whatever his name was) bc he is stubid

      Duels Winter Schnee bc Winter showed up at Beacon to fight Weiss's girlfriend

      The thing where some school shooter guy shows up at Beacon and Ozpin says "Sic 'em"`
    )
  ),

  chapter("", "Yang and Blake",
    paragraph(
      `"I'm bored as hell," Blake says, lying on her back, head hanging off the edge of the bed she and Yang shared.

      "That's a shame," Yang replies, a trickle of blood leaking from her nose. "I have an idea, hold on just one second-"

      She turns around, rummaging around in drawers, looking for something.

      After a few seconds of audible searching, she pops back up and presses something against her girlfriend's lips.

      "...Your idea is...?"

      "We haven't tried this position before! Tap my stomach twice if you want me to stop-"

      "Aren't you going to ask me if I want you to fuck my mouth?"

      "Do you not want me to?" Yang says. "That blush is saying yes, that look is saying <i>please god i need this please-</i>"

      "You're an idiot."

      "I'm <i>your</i> idiot!"

      "Yeah, yeah..." she scoffs. "Dick me down already."

      "YES, MA'AM!"

      She grips Blake's hair and chin, gently pressing her tip into her girlfriend's lips.

      She slowly parts her lips, letting Yang push in slowly, dragging the silicon cock across every sensitive spot on her tongue.
      <!-- writing fanfic is hard --!>

      <!-- i want to have yang press her thumb into blake's tongue god --!>
      `
    )
  ),

  chapter("", "Yang and Blake",
    paragraph(
      // kissy kiss
      `Their lips part, a tongue retreating from its lover's mouth.

      "How many girls have you kissed?" Yang nips smugly.

      "I- t-that isn't it..." Blake whispers shakily, blushing profusely and trying very hard to act as though she was not flustered.

      "Really? Do you have an oral fixation or something?"

      Blake stands there, glancing anywhere but her girlfriend, fidgeting.

      She nods slightly.

      "Ah."

      "...May I?" Yang brings a hand up to her cheek, sliding a thumb over her lips.

      "mmh..." Her lips purse, unused to intimacy in general, let alone this kind of focused love.

      But...

      slowly,

      she lets her lips open,

      carefully sucking the thumb into her mouth.

      Yang slowly starts circling her thumb, <i>teasing</i> her.`
    )
  ),

]

let rwby = [

]