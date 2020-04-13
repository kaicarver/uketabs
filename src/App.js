import React from 'react';
import { Helmet } from 'react-helmet-async';
import './App.css';

function App() {
  const scores = [{
    song: "Let It Rain",
    author: "Eric Clapton",
    date: "1970",
    chordsImage: "celebration.png",
    url: "tabs.ultimate-guitar.com/tab/derek-and-the-dominos/let-it-rain-ukulele-1377517",
    score: `
  score
  `},
    {
    song: "Celebration",
    author: "Kool and the Gang",
    date: "1980",
    chordsImage: "celebration.png",
    url: "tabs.ultimate-guitar.com/tab/kool-the-gang/celebration-ukulele-1346171",
    score: `
  [Intro]

  | N.C. | % | % | % |
  (drums + brass lick)
  | N.C. | % | % | % |
  (drums + brass lick)
  |  C  Fadd9 C | Fadd9 C G   |
  (riff*)
  |  C  Fadd9 C | Fadd9 C G   |
  (riff)

  [Chorus]
  C Fadd9 C    Fadd9 C    G
    Ce  - le - brate good times, come on
  C Fadd9   C Fadd9    C   G
                It's a celebration
  C Fadd9 C    Fadd9 C    G
    Ce  - le - brate good times, come on
  C Fadd9   C Fadd9    C   G
                Let's celebrate

  [Verse 1]
            Fadd9                C       G
  There's a party goin' on right here
        Fadd9                          C       G
  A celebration to last throughout the years
                Fadd9               C        G
  So bring your good times and your laughter too
  Fadd9                         C          G
     We're gonna celebrate your party with you, come on now

  [Bridge]
  Fadd9   C    G
      Celebration
  Fadd9                      C           G
     Let's all celebrate and have a good time
  Fadd9   C    G
      Celebration
  Fadd9                        C           G
     We're gonna celebrate and have a good time

  [Middle 8]
  Cmaj7        Bm7
  It's time to come together
  E7sus4          E
  It's up to you, what's your pleasure?
  Am        Cadd9
  Everyone around the world, come on

  [Instrumental]
  |  C  Fadd9 C | Fadd9 C G   |
  |  C  Fadd9 C | Fadd9 C G   |

  [Chorus]
  C Fadd9 C  Fadd9   C    G
    Ce  - le - brate good times, come on
  C Fadd9   C Fadd9    C   G
                It's a celebration
  C Fadd9 C  Fadd9   C    G
    Ce  - le - brate good times, come on
  C Fadd9      C Fadd9   C   G
         Let's celebrate

  [Chorus](variation)
  Fadd9                        C        G
  We're gonna have a good time tonight
          Fadd9                C       G
  Let's celebrate, it's all right
  Fadd9                        C        G
  We're gonna have a good time tonight
          Fadd9                C       G
  Let's celebrate, it's all right, baby

  Fadd9                        C        G
  We're gonna have a good time tonight
    (Ce-                  le-  bra-    tion)
          Fadd9                C       G
  Let's celebrate, it's all right

  Fadd9                        C        G
  We're gonna have a good time tonight
    (Ce-                  le-  bra-    tion)
          Fadd9                C       G
  Let's celebrate, it's all right

  [Instrumental]
  |  C  Fadd9 C | Fadd9 C G   |
  |  C  Fadd9 C | Fadd9 C G   |

  [Chorus]
  C Fadd9 C  Fadd9   C    G
    Ce  - le - brate good times, come on
  C Fadd9   C Fadd9    C   G
                It's a celebration
  C Fadd9 C  Fadd9   C    G
    Ce  - le - brate good times, come on
  C Fadd9      C Fadd9   C   G
         Let's celebrate

  [Chorus]
  C Fadd9 C  Fadd9   C    G
    Ce  - le - brate good times, come on
  C Fadd9   C Fadd9    C   G
                It's a celebration
  C Fadd9 C  Fadd9   C    G
    Ce  - le - brate good times, come on
  C Fadd9      C Fadd9   C   G
         Let's celebrate

  [Outro] repeat chorus ad lib
  Come on and celebrate, good times, tonight
  (Celebrate good times, come on)
  'Cause everything's gonna be all right
  Let's celebrate
  (Celebrate good times, come on)
  (Let's celebrate)...



*Basic riff
  C    Fadd9  C Fadd9 C   G         C    Fadd9  C Fadd9 C   G
  1 + 2 + 3 + 4 +  1 + 2 + 3 + 4 +  1 + 2 + 3 + 4 +  1 + 2 + 3 + 4 +
A|----------------|----------------|----------------|----------------|
E|--0-0-1-1---0---|1--0---3--------|--0-0-1-1---0---|1--0---3--------|
C|--0-0-0-0---0---|0--0---2--------|--0-0-0-0---0---|0--0---2--------|
g|--0-0-0-0---0---|0--0---0--------|--0-0-0-0---0---|0--0---0--------|
                               Ya - hoo!           (It's a celebration)
`
  }];
  let s = scores[0];
  return (
    <div>
      <Helmet>
        <title>{s.song} by {s.author}</title>
      </Helmet>
      <div id="title">
        <h1 onClick={() => {s = scores[1]; alert("does not work, use props?")}}>{s.song}</h1>
        <h2>by {s.author}</h2>
        <Thing/>
        <div class="date">{s.date}</div>
        <p>
          <a href={"https://"+s.url}>{s.url}</a><br />
        </p>
        <p id="chords">
          <img src={s.chordsImage} alt="tabs" />
        </p>
      </div>
<pre>{s.score}</pre>
    </div>
  );
}

function Thing() {
  return <div>thing</div>
}

export default App;
