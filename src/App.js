import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  let song = "Celebration";
  let author = "Kool and the Gang";
  let date = "1980";
  const tabsImage = "celebration.png";
  return (
    <div>
      <Helmet>
        <title>Kai's Uke Tabs</title>
      </Helmet>
      <div id="title">
        <h1>{song}</h1>
        <h2>by {author}</h2>
        <div class="date">{date}</div>
        <p>
          <a href="https://tabs.ultimate-guitar.com/tab/kool-the-gang/celebration-ukulele-1346171">tabs.ultimate-guitar.com/tab/kool-the-gang/celebration-ukulele-1346171</a><br />
        </p>
        <p id="chords">
          <img src={tabsImage} alt="tabs" />
        </p>
      </div>
<pre>{`
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
`}</pre>
    </div>
  );
}

export default App;
