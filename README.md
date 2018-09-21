
# Innhold og Funksjonalitet:

Webappen oppfyller kravene til 3 kategorier av bilder, lyd og tekst. De tre kategoriene for de ulike
medietypene:
* Bilde - Forest, Mountain og Sea.
* Tekst - Haiku, Limericks og Rhymes.
* Sounds - Birds, Rivers and Waves, og Weather.
Vi har oppfylt kravet om at det skal være mulig å få generert en utstilling med 4 kombinasjoner av bilde tekst og lyd. Dette blir gjort ved å markere de ulike kategoriene for hver medietype i radio-buttons, og deretter trykke "Generate". Vi valgte å bruke radio-buttons fordi det bare skal være mulig å velge en av kategoriene for hver medietype, og da mente vi det var det mest naturlige valget. Kravet om at hver kombinasjon skal kunne vises som en separat side i et tabs-display er oppfylt. Disse tabsene er plassert over bildet, men under tittelen, og nummereres med 1, 2, 3 og 4. Vi mente dette gir en god visuell oversikt.
Bildene er SVG-bilder som vi fant fra ulike copyright-frie kilder og lyden er hentet fra Freesound.

Lydfilene er MP3-filer og teksten er ulike dikt-kategorier som Haiku, Limericks og Rhymes.
Filene lagres lokalt sammen i egne mapper, der bildene blir lagret i /img, lydene blir lagret i /sound/kategori. 
Siden har har et responsivt design, der siden skaleres avhengig av skjermstørrelsen.

## Bruk av teknologier:
### REACT
REACT er et JavaScript-bibliotek for å lage brukergrensesnitt. REACT er komponentbasert, det vil si at i REACT kan vi designe et view som er bygd opp av ulike komponenter. Disse komponentene holder på sin egen tilstand som gjør at vi kan sette sammen flere av de til å danne komplekse brukergrensesnitt. REACT bruker en virtuell DOM for å kunne effektivisere prosessen med hvilke elementer i DOM’en som skal skal rendres. Dette gjør at REACT gjør at webapper med komplekse brukergrensesnitt fortsatt kan effektivt rendre innholdet på siden ved å bare rendre det som er oppdatert og ikke hele siden. Vi brukte REACT til å lage hele front-end’en av webappen vår. Alt av brukergrensesnitt er laget i REACT komponenter. Alle disse blir så satt inn i en hovedkomponent som rendrer hele siden.
### AJAX
Vi har brukt Axios som vårt tredjeparts AJAX bibliotek. Vi brukte Axios for asynkron lasting av stien til filene. Stien til disse filene ble referert til i en fil som vi kalte resources.json. Ut i fra disse stiene kunne vi dynamisk oppdatere innholdet i webappen. 
### RESPONSIVE WEB DESIGN
Responsiv web design ble implementert ved bruk av media queries. Ved å bruke disse fikk vi mulighet til style websiden avhengig av hvilken skjermstørrelse web browseren ble kjørt i.
Viewport ble brukt da vi spesifiserte størrelsen på <Image> inne i SVG-elementet. Bildene skalerer etter størrelsen på skjermen siden størrelsen på viewporten også skalerer avhengig av skjermen.
Layouten er fleksibel, den endrer seg også avhengig av skjermstørrelsen som browseren blir kjørt i. Dersom skjermen blir for smal, blir kategorivalg-elementene flyttet fra høyresiden av bildet til under bildet.

## Testing:
Applikasjonen er testet på tre forskjellige enheter: En ordinær pc, en mobil (Pixel 2) og et nettbrett (iPad Pro). Boksene med kategorivalg flytter seg under utstillingen hvis skjermen blir for smal.
* Ordinær PC:
<img src="documentation_img/pc.png" width="350">
* iPad Pro:
<br/>
<img src="documentation_img/ipad_pro.png" width="180">
* Pixel 2: <br/>
<img src="documentation_img/Pixel2_1.png" width="150"><img src="documentation_img/Pixel2_2.png" width="150">

Vi testet siden systematisk ved å gå inn på nettsiden og verifisere at det er fire forskjellige tabs med de kategoriene som er satt som standard. Deretter forandre hvilke kategorier som er aktive og generere en ny bildeutstilling. Så verifiserer vi om disse utstillingene matcher de kategoriene som er huket av. Vi gjør dette for ulike skjermstørrelser og i ulike browsere. Vi har cross-browser testet websiden i Firefox, Chrome og Opera. Der funket alt fint, men i Safari og Edge så fungerer ikke SVG-bildene som forventet. Dette ser ut til å være på grunn av at JavaScript ikke kjøres korrekt, selv om det er skrudd på i nettleseren, og resultatet blir en "no-script"-tag.

