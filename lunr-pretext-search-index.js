var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "ch-motivation",
  "level": "1",
  "url": "ch-motivation.html",
  "type": "Chapter",
  "number": "1",
  "title": "Motivation",
  "body": " Motivation  Wir betrachten das Programmierproblem  Problem 1  Sei eine Funktion. Gesucht ist eine Minimalstelle von unter drei Arten von Nebenbedingungen:    Ungleichungsnebenbedingungen: , für reelwertige Funktionen auf .    Gleichungsnebenbedingungen: , für reelwertige Funktionen auf .    Abstrakte Nebenbedingungen: für abgeschlossen.    Bemerkung 1.1  Wir erlauben hierbei die Fälle , und sodass also bspw. auch Probleme die nur Gleichungsnebenbedinungen haben abgedeckt sind.  Zur Lösung eines solchen Problems wird oft eine notwendige Optimalitätsbedingung genutzt, sodass es dann vergleichsweise leichter ist, unter den die Bedingung erfüllenden Punkten einen optimalen auszuwählen. Solche Methoden sind schon aus der Suche nach Minima und Maxima im Schulunterricht bekannt: Man bestimme alle Stellen an denen gilt und untersuche diese näher. Eine weitere solche Bedingung begegnet uns in der Vorlesung Analysis II: die Lagrange’sche Multiplikatorenregel.    Satz 1.2 Lagrange’sche Multiplikatorenregel   Sei eine offene Umgebung von , und stetig differenzierbar und besitze vollen Zeilenrang. Hat die Funktion unter der Nebenbedingung an der Stelle ein lokales Extremum, so gibt es ein derart, dass die Funktion an der Stelle einen stationären Punkt hat.    Die Regel aus kann nun also bei der Lösung von behilflich sein - allerdings zunächst nur unter Gleichungsnebenbedingungen und wenn und stetig differenzierbar sind. Erstere Einschränkung lässt sich mit gängigen Methoden zumindest auf Ungleichungsnebenbedingungen erweitern. Weitere Resultate erweitern die Bedingung für abstrakte Nebenbedingungen unter gewissen Anforderungen an die Menge . Die Ausweitung auf allgemeinere Funktionen und erfordert jedoch die Verwendung eines anderen Ableitungsbegriffes. Dies ist eine der zentralen Anwendungen der Lipschitz-Optimierung, welche wir anhand von einführen. Zur Motivation und Veranschaulichung der hier eingeführten Konzepte betrachten wir im Rahmen dieser Ausarbeitung das folgende Beispiel:    Beispiel 3 . Sei eine stetig differenzierbare Funktion und eine Konstante. Wir betrachten die Zielfunktion die unter den oben angegebenen Nebenbedingungen zu minimieren ist.  Man beachte zunächst, dass für alle gilt: Der Term wird also niemals negativ. Zudem lässt sich an erkennen, dass der Term gerade dann klein ist, wenn klein ist, also wenn möglichst viele der null sind. Hierbei werden also mit dünner Besetzungsstruktur bevorzugt, die Zielfunktion bleibt dabei aber stetig. Jedoch ist offensichtlich nicht differenzierbar und die Lagrange’sche Multiplikatorenregel somit nicht anwendbar.  "
},
{
  "id": "fact_Problem",
  "level": "2",
  "url": "ch-motivation.html#fact_Problem",
  "type": "Fact",
  "number": "1.0.1",
  "title": "Problem 1.",
  "body": "Problem 1  Sei eine Funktion. Gesucht ist eine Minimalstelle von unter drei Arten von Nebenbedingungen:    Ungleichungsnebenbedingungen: , für reelwertige Funktionen auf .    Gleichungsnebenbedingungen: , für reelwertige Funktionen auf .    Abstrakte Nebenbedingungen: für abgeschlossen.   "
},
{
  "id": "ch-motivation-4",
  "level": "2",
  "url": "ch-motivation.html#ch-motivation-4",
  "type": "Remark",
  "number": "1.0.2",
  "title": "Bemerkung 1.1.",
  "body": "Bemerkung 1.1  Wir erlauben hierbei die Fälle , und sodass also bspw. auch Probleme die nur Gleichungsnebenbedinungen haben abgedeckt sind.  Zur Lösung eines solchen Problems wird oft eine notwendige Optimalitätsbedingung genutzt, sodass es dann vergleichsweise leichter ist, unter den die Bedingung erfüllenden Punkten einen optimalen auszuwählen. Solche Methoden sind schon aus der Suche nach Minima und Maxima im Schulunterricht bekannt: Man bestimme alle Stellen an denen gilt und untersuche diese näher. Eine weitere solche Bedingung begegnet uns in der Vorlesung Analysis II: die Lagrange’sche Multiplikatorenregel.  "
},
{
  "id": "thm_standard_KKT",
  "level": "2",
  "url": "ch-motivation.html#thm_standard_KKT",
  "type": "Theorem",
  "number": "1.0.3",
  "title": "Satz 1.2 Lagrange’sche Multiplikatorenregel.",
  "body": " Satz 1.2 Lagrange’sche Multiplikatorenregel   Sei eine offene Umgebung von , und stetig differenzierbar und besitze vollen Zeilenrang. Hat die Funktion unter der Nebenbedingung an der Stelle ein lokales Extremum, so gibt es ein derart, dass die Funktion an der Stelle einen stationären Punkt hat.   "
},
{
  "id": "Bsp1",
  "level": "2",
  "url": "ch-motivation.html#Bsp1",
  "type": "Example",
  "number": "1.0.4",
  "title": "",
  "body": "  Beispiel 3 . Sei eine stetig differenzierbare Funktion und eine Konstante. Wir betrachten die Zielfunktion die unter den oben angegebenen Nebenbedingungen zu minimieren ist.  Man beachte zunächst, dass für alle gilt: Der Term wird also niemals negativ. Zudem lässt sich an erkennen, dass der Term gerade dann klein ist, wenn klein ist, also wenn möglichst viele der null sind. Hierbei werden also mit dünner Besetzungsstruktur bevorzugt, die Zielfunktion bleibt dabei aber stetig. Jedoch ist offensichtlich nicht differenzierbar und die Lagrange’sche Multiplikatorenregel somit nicht anwendbar. "
},
{
  "id": "sec-ch2-definition",
  "level": "1",
  "url": "sec-ch2-definition.html",
  "type": "Section",
  "number": "2.1",
  "title": "Definition",
  "body": " Definition  Die Clarke’sche Richtungsableitung sowie das Clarke’sche Subdifferential sind für Lipschitz-stetige Funktionen definiert. Zur besseren Übersicht wiederholen wir die Definition der Lipschitz-Stetigkeit:   Definition 2.1 Lipschitz-Stetigkeit   Eine Funktion heißt Lipschitz-stetig mit Lipschitz-Konstante  in , falls für alle gilt: Sie heißt lokal Lipschitz-stetig , wenn für jedes eine Umgebung und eine Konstante existieren sodass in Lipschitz-stetig mit Lipschitz-Konstante ist.    Da wir im Folgenden oft lokal Lipschitz-stetige Funktionen betrachten, formulieren wir die folgende Annahme:  Annahme 2.2   Sei und sei nahe Lipschitz-stetig mit Lipschitz-Konstante .    Bemerkung 2.3  Man kann zeigen, dass alle stetig differenzierbaren Funktionen Lipschitz-stetig sind. Zudem sind alle konvexen Funktionen die auf einer kleinen Umgebung in ihrem Definitionsbereich nach oben beschränkt sind Lipschitz-stetig. Vgl.     Beispiel 2.4  Sei eine lokal Lipschitz-stetige Funktion. Wir betrachten die Funktion aus . Wir bemerken zunächst, dass die Dreiecksungleichung impliziert, dass Summen Lipschitz-stetiger Funktionen ebenfalls Lipschitz-stetig sind. Weiterhin gilt mit der (umgekehrten) Dreiecksungleichung: Wegen der Äquivalenz der Normen in ist also Lipschitz-stetig.     Definition 2.5 (Clarke’sche Richtungsableitung)   Es gelte . Dann ist die Clarke’sche Richtungsableitung von an der Stelle zur Richtung definiert als für und .   Bemerkung 2.6    Der Unterschied zur klassischen Richtungsableitung liegt neben der Verwendung des auch in der Betrachtung des Grenzverhaltens .    Man bemerke, dass die Ableitung durch den Limes Superior durchaus auch für nicht Lipschitz-stetige Funktionen wohldefiniert ist. Allerdings ist die Endlichkeit der Größe dann nicht mehr sichergestellt. Tatsächlich haben wir Zudem gilt: Folglich garantiert die lokale Lipschitz-Stetigkeit also die Endlichkeit der Clarke’schen Richtungsableitung für jede beliebige Richtung Man bemerke, dass Endlichkeit der Clarke’schen Richtungsableitung für jede Richtung jedoch nicht lokale Lipschitz-stetigkeit impliziert, da die Menge nicht beschränkt sein muss. .     Beispiel 2.7  Betrachte eine beliebige Norm auf . Dann ist wegen der (umgekehrten) Dreiecksungleichung Lipschitz-stetig. Zudem gilt für und nach der Dreiecksungleichung: und somit auch, wegen der positiven Homogenität von , Gleichzeitig gilt für : und somit . Für die 1-norm bemerken wir außerdem: Nach obiger Argumentation angewandt auf den Betrag als Norm auf gilt für alle mit : Ebenfalls bestimmen wir für sodass : Folglich gilt also wegen der Linearität des :   Wir gehen im nächsten Abschnitt näher auf die Eigenschaften der Clarke’schen Richtungsableitung ein. An dieser Stelle benötigen wir jedoch bereits die folgende Proposition, die die Definition des Clarke’schen Subdifferentials motiviert.  Proposition 2.8  Es gelte . Dann gilt:    Die Abbildung ist beschränkt auf , positiv homogen und subadditiv auf , und Lipschitz-stetig mit Lipschitz-Konstante . Insbesondere gilt:      ist oberhalbstetig als Funktion in .          Die Proposition lässt sich mithilfe gängiger Eigenschaften des beweisen. Die Abschätzung in (i) ergibt sich direkt aus den Berechnungen in .  Für die Definition des Clarke’schen Subdifferentials betrachten wir den aus der Funktionalanalysis bekannten Satz von Hahn-Banach, den wir hier aus für endlich dimensionale Banachräume zitieren:  Satz 2.9 (Hahn-Banach)  Sei ein Untervektorraum. Ferner seien sublinear (d.h. subadditiv und positiv homogen) und linear sodass Dann existiert eine lineare Fortsetzung , sodass   Mit der Wahl sagt also aus: Jedes sublineare Funktional auf majorisiert ein lineares Funktional auf . Laut (i) ist ein solches sublineares Funktional.  Definition 2.10  Es gelte . Das Clarke’sche Subdifferential von in ist die Menge   Bemerkung 2.11  Die Elemente des topologischen Dualraumes des lassen sich über das Skalarprodukt mit dem identifizieren  Für ist dies die Aussage des Riesz’schen Darstellungssatzes; man beachte dass jeder -dimensionale Banachraum zu diesem Raum isomorph ist. Die hier benötigte endlich-dimensionale Version lässt sich aber auch leicht direkt erkennen. .  Diese Identifikation motiviert die obige Definition: Das Subdifferential besteht aus den Vektoren, die lineare Abbildungen definieren, die von der Clarke’schen Richtungsableitung majorisiert werden. Beachte, dass die Norm im Dualraum im Allgemeinen durch gegeben ist. Man überzeugt sich leicht, dass diese Norm genau der euklidschen Norm entspricht.  Beispiel 2.12  Betrachte nochmals . Dann gilt mit den Überlegungen aus : Wir bemerken zunächst, dass diese Bedingung bei der Wahl für alle erfüllt ist. Wir betrachten im folgenden also nur noch : Wir betrachten nun zwei spezielle Fälle:     . In diesem Fall folgt aus der Cauchy-Schwarz Ungleichung für alle : wobei mit der Wahl Gleichheit gilt. Folglich ist äquivalent zu und somit      . Mithilfe von können wir das Clarke’sche Subdifferential von sogar für allgemeine bestimmen: Hierfür bemerken wir zunächst für alle sodass : sowie Wenn sein soll, muss mit der Wahl also gelten: wobei die erste Relation mit , die zweite mit aus folgt. Wir fixieren nun ein beliebiges mit wann immer . Die Frage ist nun, wann im Subdifferential liegt. Hierfür bemerken wir: Somit reduziert sich die Bedingung aus also zu für alle . Dies gilt offensichtlich, wenn gilt. Für beobachten wir, dass Also gilt genau dann, wenn . Folglich gilt:     "
},
{
  "id": "sec-ch2-definition-3",
  "level": "2",
  "url": "sec-ch2-definition.html#sec-ch2-definition-3",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Definition 2.1 Lipschitz-Stetigkeit.",
  "body": " Definition 2.1 Lipschitz-Stetigkeit   Eine Funktion heißt Lipschitz-stetig mit Lipschitz-Konstante  in , falls für alle gilt: Sie heißt lokal Lipschitz-stetig , wenn für jedes eine Umgebung und eine Konstante existieren sodass in Lipschitz-stetig mit Lipschitz-Konstante ist.   "
},
{
  "id": "flokallip",
  "level": "2",
  "url": "sec-ch2-definition.html#flokallip",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Annahme 2.2.",
  "body": "Annahme 2.2   Sei und sei nahe Lipschitz-stetig mit Lipschitz-Konstante .  "
},
{
  "id": "sec-ch2-definition-6",
  "level": "2",
  "url": "sec-ch2-definition.html#sec-ch2-definition-6",
  "type": "Remark",
  "number": "2.1.3",
  "title": "Bemerkung 2.3.",
  "body": " Bemerkung 2.3  Man kann zeigen, dass alle stetig differenzierbaren Funktionen Lipschitz-stetig sind. Zudem sind alle konvexen Funktionen die auf einer kleinen Umgebung in ihrem Definitionsbereich nach oben beschränkt sind Lipschitz-stetig. Vgl.   "
},
{
  "id": "sec-ch2-definition-7",
  "level": "2",
  "url": "sec-ch2-definition.html#sec-ch2-definition-7",
  "type": "Example",
  "number": "2.1.4",
  "title": "Beispiel 2.4.",
  "body": " Beispiel 2.4  Sei eine lokal Lipschitz-stetige Funktion. Wir betrachten die Funktion aus . Wir bemerken zunächst, dass die Dreiecksungleichung impliziert, dass Summen Lipschitz-stetiger Funktionen ebenfalls Lipschitz-stetig sind. Weiterhin gilt mit der (umgekehrten) Dreiecksungleichung: Wegen der Äquivalenz der Normen in ist also Lipschitz-stetig.   "
},
{
  "id": "sec-ch2-definition-8",
  "level": "2",
  "url": "sec-ch2-definition.html#sec-ch2-definition-8",
  "type": "Definition",
  "number": "2.1.5",
  "title": "Definition 2.5 (Clarke’sche Richtungsableitung).",
  "body": " Definition 2.5 (Clarke’sche Richtungsableitung)   Es gelte . Dann ist die Clarke’sche Richtungsableitung von an der Stelle zur Richtung definiert als für und .  "
},
{
  "id": "Bem1",
  "level": "2",
  "url": "sec-ch2-definition.html#Bem1",
  "type": "Remark",
  "number": "2.1.6",
  "title": "Bemerkung 2.6.",
  "body": "Bemerkung 2.6    Der Unterschied zur klassischen Richtungsableitung liegt neben der Verwendung des auch in der Betrachtung des Grenzverhaltens .    Man bemerke, dass die Ableitung durch den Limes Superior durchaus auch für nicht Lipschitz-stetige Funktionen wohldefiniert ist. Allerdings ist die Endlichkeit der Größe dann nicht mehr sichergestellt. Tatsächlich haben wir Zudem gilt: Folglich garantiert die lokale Lipschitz-Stetigkeit also die Endlichkeit der Clarke’schen Richtungsableitung für jede beliebige Richtung Man bemerke, dass Endlichkeit der Clarke’schen Richtungsableitung für jede Richtung jedoch nicht lokale Lipschitz-stetigkeit impliziert, da die Menge nicht beschränkt sein muss. .    "
},
{
  "id": "Bsp_Norm_fcirc",
  "level": "2",
  "url": "sec-ch2-definition.html#Bsp_Norm_fcirc",
  "type": "Example",
  "number": "2.1.7",
  "title": "Beispiel 2.7.",
  "body": "Beispiel 2.7  Betrachte eine beliebige Norm auf . Dann ist wegen der (umgekehrten) Dreiecksungleichung Lipschitz-stetig. Zudem gilt für und nach der Dreiecksungleichung: und somit auch, wegen der positiven Homogenität von , Gleichzeitig gilt für : und somit . Für die 1-norm bemerken wir außerdem: Nach obiger Argumentation angewandt auf den Betrag als Norm auf gilt für alle mit : Ebenfalls bestimmen wir für sodass : Folglich gilt also wegen der Linearität des :  "
},
{
  "id": "PropBasicRichtung",
  "level": "2",
  "url": "sec-ch2-definition.html#PropBasicRichtung",
  "type": "Proposition",
  "number": "2.1.8",
  "title": "Proposition 2.8.",
  "body": "Proposition 2.8  Es gelte . Dann gilt:    Die Abbildung ist beschränkt auf , positiv homogen und subadditiv auf , und Lipschitz-stetig mit Lipschitz-Konstante . Insbesondere gilt:      ist oberhalbstetig als Funktion in .          Die Proposition lässt sich mithilfe gängiger Eigenschaften des beweisen. Die Abschätzung in (i) ergibt sich direkt aus den Berechnungen in . "
},
{
  "id": "HahnBanach",
  "level": "2",
  "url": "sec-ch2-definition.html#HahnBanach",
  "type": "Theorem",
  "number": "2.1.9",
  "title": "Satz 2.9 (Hahn-Banach).",
  "body": "Satz 2.9 (Hahn-Banach)  Sei ein Untervektorraum. Ferner seien sublinear (d.h. subadditiv und positiv homogen) und linear sodass Dann existiert eine lineare Fortsetzung , sodass  "
},
{
  "id": "sec-ch2-definition-16",
  "level": "2",
  "url": "sec-ch2-definition.html#sec-ch2-definition-16",
  "type": "Definition",
  "number": "2.1.10",
  "title": "Definition 2.10.",
  "body": "Definition 2.10  Es gelte . Das Clarke’sche Subdifferential von in ist die Menge  "
},
{
  "id": "sec-ch2-definition-17",
  "level": "2",
  "url": "sec-ch2-definition.html#sec-ch2-definition-17",
  "type": "Remark",
  "number": "2.1.11",
  "title": "Bemerkung 2.11.",
  "body": "Bemerkung 2.11  Die Elemente des topologischen Dualraumes des lassen sich über das Skalarprodukt mit dem identifizieren  Für ist dies die Aussage des Riesz’schen Darstellungssatzes; man beachte dass jeder -dimensionale Banachraum zu diesem Raum isomorph ist. Die hier benötigte endlich-dimensionale Version lässt sich aber auch leicht direkt erkennen. .  Diese Identifikation motiviert die obige Definition: Das Subdifferential besteht aus den Vektoren, die lineare Abbildungen definieren, die von der Clarke’schen Richtungsableitung majorisiert werden. Beachte, dass die Norm im Dualraum im Allgemeinen durch gegeben ist. Man überzeugt sich leicht, dass diese Norm genau der euklidschen Norm entspricht. "
},
{
  "id": "sec-ch2-definition-18",
  "level": "2",
  "url": "sec-ch2-definition.html#sec-ch2-definition-18",
  "type": "Example",
  "number": "2.1.12",
  "title": "Beispiel 2.12.",
  "body": "Beispiel 2.12  Betrachte nochmals . Dann gilt mit den Überlegungen aus : Wir bemerken zunächst, dass diese Bedingung bei der Wahl für alle erfüllt ist. Wir betrachten im folgenden also nur noch : Wir betrachten nun zwei spezielle Fälle:     . In diesem Fall folgt aus der Cauchy-Schwarz Ungleichung für alle : wobei mit der Wahl Gleichheit gilt. Folglich ist äquivalent zu und somit      . Mithilfe von können wir das Clarke’sche Subdifferential von sogar für allgemeine bestimmen: Hierfür bemerken wir zunächst für alle sodass : sowie Wenn sein soll, muss mit der Wahl also gelten: wobei die erste Relation mit , die zweite mit aus folgt. Wir fixieren nun ein beliebiges mit wann immer . Die Frage ist nun, wann im Subdifferential liegt. Hierfür bemerken wir: Somit reduziert sich die Bedingung aus also zu für alle . Dies gilt offensichtlich, wenn gilt. Für beobachten wir, dass Also gilt genau dann, wenn . Folglich gilt:    "
},
{
  "id": "refs-",
  "level": "1",
  "url": "refs-.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": "  Clarke, Frank H.  Optimization and Nonsmooth Analysis  Society for Industrial and Applied Mathematics  1990  https:\/\/epubs.siam.org\/doi\/abs\/10.1137\/1.9781611971309    Werner, Dirk  Funktionalanalysis  Springer Spektrum Berlin, Heidelberg  2018  https:\/\/doi.org\/10.1007\/978-3-662-55407-4   "
},
{
  "id": "Clarke-5",
  "level": "2",
  "url": "refs-.html#Clarke-5",
  "type": "Note",
  "number": "1.1",
  "title": "",
  "body": "https:\/\/epubs.siam.org\/doi\/abs\/10.1137\/1.9781611971309 "
},
{
  "id": "WernerFA-5",
  "level": "2",
  "url": "refs-.html#WernerFA-5",
  "type": "Note",
  "number": "2.1",
  "title": "",
  "body": "https:\/\/doi.org\/10.1007\/978-3-662-55407-4 "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
