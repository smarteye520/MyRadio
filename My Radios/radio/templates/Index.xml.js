/*
Copyright (C) 2015 Hani Hamrouni. All Rights Reserved.
*/
var Template = function() { 
  return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <head>
      <style>
      .whiteText {
        color: rgb(255, 255, 255);
      }
      </style>
    </head>
    <catalogTemplate>
      <banner>
        <title>Radios TV</title>
      </banner>
      <list>
        <section>
          <header>
            <title>Radio TV</title>
          </header>
          
          <listItemLockup>
            <title>Soy Radio</title>
            <decorationLabel>10</decorationLabel>
            <relatedContent>
              <grid>
                <section>
                 <lockup radioURL="http://streamyes.alsolnet.com/quebuenaatlanta/live/playlist.m3u8">
                   <img src="${this.BASEURL}resources/images/stations/laquebuena.lcr" width="308" height="308" />
                   <title class="whiteText">La que Buena Atlanta with</title>
                 </lockup>
                  <lockup radioURL="http://streamyes.alsolnet.com/fiestalasvegas/live/playlist.m3u8">
                    <img src="${this.BASEURL}resources/images/stations/fiesta.lcr" width="308" height="308" />
                    <title class="whiteText">Fiesta Las Vegas</title>
                  </lockup>

                  <lockup radioURL="http://streamyes.alsolnet.com/soyradiotv/live/playlist.m3u8">
                    <img src="${this.BASEURL}resources/images/stations/soyradio.lcr" width="308" height="308" />
                    <title class="whiteText">Soy Radio TV</title>
                  </lockup>

                  <lockup radioURL="http://streamyes.alsolnet.com/superqtv/live/playlist.m3u8">
                    <img src="${this.BASEURL}resources/images/stations/super.lcr" width="308" height="308" />
                    <title class="whiteText">Super Q TV </title>
                  </lockup>

                  <lockup radioURL="http://streamyes.alsolnet.com/digitalestrella/live/playlist.m3u8">
                    <img src="${this.BASEURL}resources/images/stations/estrella.lcr" width="308" height="308" />
                    <title class="whiteText">Estrella Digilta TV</title>
                  </lockup>

                  <lockup radioURL="http://streamyes.alsolnet.com/mexicanatv/live/playlist.m3u8">
                    <img src="${this.BASEURL}resources/images/stations/lamexicana.lcr" width="308" height="308" />
                    <title class="whiteText">La Mexicana 99.9</title>
                  </lockup>

                  <lockup radioURL="https://streamyes.alsolnet.com/powerfmtv/live/playlist.m3u8">
                    <img src="${this.BASEURL}resources/images/stations/poder.lcr" width="308" height="308" />
                    <title class="whiteText">Poder TV</title>
                  </lockup>

                  <lockup radioURL="http://streamyes.alsolnet.com/pegatealamega/live/playlist.m3u8">
                    <img src="${this.BASEURL}resources/images/stations/lamega.lcr" width="308" height="308" />
                    <title class="whiteText">Pegate a la Mega</title>
                  </lockup>

               </section>
              </grid>       
            </relatedContent>
          </listItemLockup>
        </section>
      </list>
    </catalogTemplate>
  </document>`
}
