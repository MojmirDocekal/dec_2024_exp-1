var shuffleSequence = seq("intro", sepWith("sep",  seq("practice")), "practiceover", sepWith("sep", rshuffle(startsWith("first-item"), startsWith("firstfiller"))));

var continueMessage = ["Klikni zde"];

var aj = "AcceptabilityJudgment";

var q = "Question";

var completionMessage = "[Zadané odpovědi jsou odeslány na server. Děkujeme za spolupráci!]";

var ms = "Message";

var defaults = [    
    "Separator", { transfer: 800,
                   normalMessage: "Počkejte prosím na další položku v experimentu.",
                   errorMessage: "Špatně. Počkejte prosím na další položku v experimentu." 
		 },
    "AcceptabilityJudgment", { as: ["1", "2", "3", "4", "5", "6", "7"],
                               presentAsScale: true,
                               leftComment: "(absolutně nepřijatelná věta)", rightComment: "(věta je naprosto v pořádku)" },
    "Message", { hideProgressBar: true, transfer: "click" }
];

 var progressBarText = "";

var items = [ ["sep", "Separator", { }],
 
	      ["intro", "Form", {continueMessage: "Pro vstup do experimentu, klikněte zde", html: { include: "example_intro.html" }}],

	      ["practice", aj, {s: {html: "<p>Pět kamarádů vyrazilo do lesa na houby. Rozhodněte jak moc, na škále od 1 do 7, věta zapsaná jedním z nich významově odpovídá tomu, co popisuje tabulka.</p><center><table><tr><th>Jméno</th><th>Houba</th></tr><tr><td>Petr</td><td>hřib</td></tr><tr><td>Marie</td><td>bedla</td></tr><tr><td>Jan</td><td>muchomůrka</td></tr><tr><td>Markéta</td><td>liška</td></tr><tr><td>Jana</td><td>kozák</td></tr></table><p>Věta: <b>Každý z kamarádů našel po jedné houbě.  </b></p><p><i>Tato věta je v daném kontextu pořádku. Pokud souhlasíte, vyberte jednu z možností v pravém konci škály (nejspíš 7).</i></p></center>"}}],
["practice", aj, {s: {html: "<p>Kontext: ve vinotékách se na začátku listopadu prodává první letošní víno.</p><p>Věta: <b>Pokud jde letošní víno, tak všechno letošní červené víno bylo už vyprodané.  </b></p><p><i>Tato věta je v daném kontextu pořádku. Pokud souhlasíte, vyberte jednu z možností v pravém konci škály (nejspíš 5).</i></p>"}}],
["practice", aj, {s: {html: "<p>Kontext: ve zverimexech se prodává mnoho druhů akvarijních rybiček, např. neonky, gupky, ...</p><p>Věta: <b>Pokud jde letošní neonky, tak Petr koupil všechnu neonku.  </b></p><p><i>Tato věta je v daném kontextu pořádku, ale není gramatická. Pokud souhlasíte, vyberte jednu z možností v levém konci škály (nejspíš 1).</i></p>"}}],

	      ["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["first-item1-perf", 1], aj, {s: {html: "<p>Petr rád chodí na ryby. Během minulého týdne si výsledky své oblíbené aktivity zaznamenával do seznamu. Rozhodněte jak moc, na škále od 1 do 7, věta přiložená k seznamu významově odpovídá tomu, co Petr do seznamu zaznamenal. </p><center> <p> <table><tr><th>Den</th><th>Ryba</th></tr><tr><td>Pondělí</td><td>Amur</td></tr><tr><td>Úterý</td><td>Pstruh</td></tr><tr><td>Středa</td><td>Štika</td></tr><tr><td>Čtvrtek</td><td>Amur</td></tr><tr><td>Pátek</td><td>Candát</td></tr><tr><td>Sobota</td><td>Okoun</td></tr><tr><td>Neděle</td><td>Cejn</td></tr></table> </p><p>Věta: <b>Petr každý den chytnul jednu rybu.  </b></center></p>"}}],
[["first-item1-hab", 1], aj, {s: {html: "<p>Petr rád chodí na ryby. Během minulého týdne si výsledky své oblíbené aktivity zaznamenával do seznamu. Rozhodněte jak moc, na škále od 1 do 7, věta přiložená k seznamu významově odpovídá tomu, co Petr do seznamu zaznamenal. </p><center> <p> <table><tr><th>Den</th><th>Ryba</th></tr><tr><td>Pondělí</td><td>Amur</td></tr><tr><td>Úterý</td><td>Pstruh</td></tr><tr><td>Středa</td><td>Štika</td></tr><tr><td>Čtvrtek</td><td>Amur</td></tr><tr><td>Pátek</td><td>Candát</td></tr><tr><td>Sobota</td><td>Okoun</td></tr><tr><td>Neděle</td><td>Cejn</td></tr></table> </p><p>Věta: <b>Petr chytával jednu rybu.   </b></center></p>"}}],
[["first-item1-gen", 1], aj, {s: {html: "<p>Petr rád chodí na ryby. Během minulého týdne si výsledky své oblíbené aktivity zaznamenával do seznamu. Rozhodněte jak moc, na škále od 1 do 7, věta přiložená k seznamu významově odpovídá tomu, co Petr do seznamu zaznamenal. </p><center> <p> <table><tr><th>Den</th><th>Ryba</th></tr><tr><td>Pondělí</td><td>Amur</td></tr><tr><td>Úterý</td><td>Pstruh</td></tr><tr><td>Středa</td><td>Štika</td></tr><tr><td>Čtvrtek</td><td>Amur</td></tr><tr><td>Pátek</td><td>Candát</td></tr><tr><td>Sobota</td><td>Okoun</td></tr><tr><td>Neděle</td><td>Cejn</td></tr></table> </p><p>Věta: <b>Petr po ránu chytával jednu rybu.   </b></center></p>"}}],

[["first-item2-perf", 2], aj, {s: {html: "<p>Oslice Lucie je nepřátelská k ostatním zvířatům a často je po jídle kope. Její ošetřovatelka nakopnutá zvířata zapisuje do seznamu. Rozhodněte jak moc, na škále od 1 do 7, věta přiložená k seznamu významově odpovídá tomu, co ošetřovatelka do seznamu zaznamenala.  </p><center> <p> <table><tr><th>Den</th><th>Zvíře</th></tr><tr><td>Pondělí</td><td>Ovce</td></tr><tr><td>Úterý</td><td>Pštros</td></tr><tr><td>Středa</td><td>Koza</td></tr><tr><td>Čtvrtek</td><td>Slepice</td></tr><tr><td>Pátek</td><td>Lama</td></tr><tr><td>Sobota</td><td>Husa</td></tr><tr><td>Neděle</td><td>Prase</td></tr></table> </p><p>Věta: <b>Lucie každý den kopla jedno zvíře.  </b></center></p>"}}],
[["first-item2-hab", 2], aj, {s: {html: "<p>Oslice Lucie je nepřátelská k ostatním zvířatům a často je po jídle kope. Její ošetřovatelka nakopnutá zvířata zapisuje do seznamu. Rozhodněte jak moc, na škále od 1 do 7, věta přiložená k seznamu významově odpovídá tomu, co ošetřovatelka do seznamu zaznamenala.  </p><center> <p> <table><tr><th>Den</th><th>Zvíře</th></tr><tr><td>Pondělí</td><td>Ovce</td></tr><tr><td>Úterý</td><td>Pštros</td></tr><tr><td>Středa</td><td>Koza</td></tr><tr><td>Čtvrtek</td><td>Slepice</td></tr><tr><td>Pátek</td><td>Lama</td></tr><tr><td>Sobota</td><td>Husa</td></tr><tr><td>Neděle</td><td>Prase</td></tr></table> </p><p>Věta: <b>Lucie kopávala jedno zvíře.  </b></center></p>"}}],
[["first-item2-gen", 2], aj, {s: {html: "<p>Oslice Lucie je nepřátelská k ostatním zvířatům a často je po jídle kope. Její ošetřovatelka nakopnutá zvířata zapisuje do seznamu. Rozhodněte jak moc, na škále od 1 do 7, věta přiložená k seznamu významově odpovídá tomu, co ošetřovatelka do seznamu zaznamenala.  </p><center> <p> <table><tr><th>Den</th><th>Zvíře</th></tr><tr><td>Pondělí</td><td>Ovce</td></tr><tr><td>Úterý</td><td>Pštros</td></tr><tr><td>Středa</td><td>Koza</td></tr><tr><td>Čtvrtek</td><td>Slepice</td></tr><tr><td>Pátek</td><td>Lama</td></tr><tr><td>Sobota</td><td>Husa</td></tr><tr><td>Neděle</td><td>Prase</td></tr></table> </p><p>Věta: <b>Lucie po jídle kopávala jedno zvíře.  </b></center></p>"}}],





["firstfiller1-good", aj, {s: {html: "<p>Pět dětí ve třídě dostalo za úkol nakreslit jedno zvíře. Rozhodněte jak moc, na škále od 1 do 7, věta zapsaná panem učitelem a přiložená k seznamu významově odpovídá tomu, co popisuje tabulka.</p><center> <p> <table><tr><th>Dítě</th><th>Zvíře</th></tr><tr><td>Jan</td><td>prase</td></tr><tr><td>Marie</td><td>kůň</td></tr><tr><td>Petr</td><td>pes</td></tr><tr><td>Markéta</td><td>kráva</td></tr><tr><td>Jana</td><td>kočka</td></tr></table> </p><p>Věta: <b>Každé dítě nakreslilo jedno zvíře.</b></center></p>" }}],
["firstfiller_item2", aj, {s: "Já, starý sadař, jsem nepřišel do lesa celé roky." }],
];
