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

	      ["practice", aj, {s: {html: "<p>Kontext: v českých obchodech se lahvová piva obvykle prodávají po 0.5 litru.</p><p>Věta: <b>Pokud jde o piva, tak v obchodě Petr koupil tři.  </b></p><p><i>Tato věta je v daném kontextu pořádku. Pokud souhlasíte, vyberte jednu z možností v pravém konci škály (nejspíš 5).</i></p>"}}],
["practice", aj, {s: {html: "<p>Kontext: ve vinotékách se na začátku listopadu prodává první letošní víno.</p><p>Věta: <b>Pokud jde letošní víno, tak všechno letošní červené víno bylo už vyprodané.  </b></p><p><i>Tato věta je v daném kontextu pořádku. Pokud souhlasíte, vyberte jednu z možností v pravém konci škály (nejspíš 5).</i></p>"}}],
["practice", aj, {s: {html: "<p>Kontext: ve zverimexech se prodává mnoho druhů akvarijních rybiček, např. neonky, gupky, ...</p><p>Věta: <b>Pokud jde letošní neonky, tak Petr koupil všechnu neonku.  </b></p><p><i>Tato věta je v daném kontextu pořádku, ale není gramatická. Pokud souhlasíte, vyberte jednu z možností v levém konci škály (nejspíš 1).</i></p>"}}],

	      ["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["first-item1-perf", 1], aj, {s: {html: "<p>Kontext: Petr rád chodí na ryby. Během minulého týdne si výsledky své oblíbené aktivity zaznamenával do seznamu. Rozhodněte jak moc, na škále od 1 do 7, věta přiložená k seznamu významově odpovídá tomu, co Petr do seznamu zaznamenal. </p><p> <table><tr><th>Den</th><th>Ryba</th></tr><tr><td>Pondělí</td><td>Amur</td></tr><tr><td>Úterý</td><td>Pstruh</td></tr><tr><td>Středa</td><td>Štika</td></tr><tr><td>Čtvrtek</td><td>Amur</td></tr><tr><td>Pátek</td><td>Candát</td></tr><tr><td>Sobota</td><td>Okoun</td></tr><tr><td>Neděle</td><td>Cejn</td></tr></table> </p><p>Věta: <b>Petr každý den chytnul jednu rybu.  </b></p>"}}],


["firstfiller1", aj, {s: "Já, starý sadař nejsem přišel do lesa celé roky." }],
["firstfiller_item2", aj, {s: "Já, starý sadař, jsem nepřišel do lesa celé roky." }],
];
