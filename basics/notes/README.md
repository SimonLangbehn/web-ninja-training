# Web Ninja Workshop - Basics

## Agenda

* Git
* HTML
* CSS
* JS
* Node.JS

## Ablauf

## Git

### Was ist Git?

* Dezentrales Versionverwaltungssystem
* Kommandozeilenwerkzeug
* [SetUp](https://help.github.com/articles/set-up-git)
* [Einleitung](http://rogerdudler.github.com/git-guide/index.de.html)

### Beispiel - TimeTracker

* Maske fuer die Erfassung von Zeiten
* Vorlage (Inkscape)

![TimeTracker Vorlage](images/DesignTimeTracker.png)

* Jeder erweitert die README.md mit etwas Inhalt ueber die TimeTracker-App


## Github

### Was ist Github?

* Social Coding Platform
* Projekthosting
* Gitintegration
* Issues
* Code-Reviews
* Jeder macht einen Push zu Github


## HTML

* HTML steht fuer Hypertext Markup Language. (Hypertext Auszeichnungssprache)
* Textbasierte Auszeichnungssprache mit der man Inhalte wie Texte, Bilder, Verweise usw. als solche Auszeichnen kann.
* HTML wird von User-Agents wie ein Zeitungsartikel interpretiert.
* Ein User-Agent ist ein Programm, dass auf Webseiten navigiert und dabei durch den Benutzer gelenkt wird.
* Alle Browser sind User-Agents, aber nicht alle User-Agents sind Browser. Bsp User-Agents von Google fuer die Indizierung von Web. Diese werden jedoch nicht direkt durch den Benutzer gesteuert.

[Demo: User Agents](../src/html/useragents.html)

* HTML wird also zur Strukturierung der Inhalte und NICHT fuer die Beschreibung der Darstellung verwendet. Mit Darstellung ist gemeint, dass z.B. der Titel fett und rot angezeigt wird.
* Neben der Inhalte enthaelt HTML auch Metainformationen, die zu den Inhalten gehoeren:
	* Titel des Dokumentes
	* Author der Inhalte
	* Schluesselwoerter
	* verwendete Encoding

Der HTML Standard wird von W3C (World Wide Web Consortium) und WHATWG (Web Hypertext Application Technology Working Group). Die aktuellie fertige Version ist bei 4.01.

### Struktur

Hier sieht man ein Beispiel fuer den Aufbau eines HTML Elements &lt;p id=’elementId’ data-bubu=’otherValue’>Text&lt;/p>

* Oeffnender Tag &lt;p>
* Attributename **id** und **data-bubu**
* Attributevalue **elementId** und **otherValue**
* Inhalt Text
* Schliessender Tag &lt;/p>

### &lt;HTML> &lt;/HTML>
Kommen wir zu dem Aufbau eines HTML Dokumentes. HTML wird in einem Boxenmodell strukturiert.

Hier auf dem Bild sieht man eine Box in der alle Inhalte und Metainformationen landen.

![HTML - Grundgeruest](images/html.png)

Diese werden aber nicht beliebig reingestoepselt. Es gibt bestimmte Regeln.

### &lt;HEAD> &lt;/HEAD>

Im Head-Element werden verschiedene Informationen definiert, die nicht direkt gerendert / angezeigt werden.

![Head-Element mit Inhalten](images/head.png)

Man kann Skripte direkt im HTML definieren:

<code>
&lt;script type='text/javascript'> window.alert(42);  &lt;/script>
</code>

oder aus Dateien laden.

<code>
&lt;script type='text/javascript' src='test.js'>  &lt;/script>
</code>

Im HEAD wird neben der Script-Tags auch der Titel und das Encoding definiert.

* <code>&lt;title>My Page Title&lt;/title></code>
* <code>&lt;meta charset='utf-8'></code>
* <code>&lt;meta name='keywords' content='HTML, CSS, JS'></code>
* <code>&lt;meta name='author' content='Konstantin Denerz'></code>
* <code>&lt;meta name='description' content='My Page Description'></code>

Neben der Struktutierung von Inhalten, koennen wir auch beschreiben, wie die Inhalte aussehen sollen. 
Diesen Style koennen wir entweder direkt in einem Style block definieren:

<code>
&lt;style type='text/css'> .myclass { } &lt;/style>
</code>

oder das Einbinden von ueber einen Link

<code>
&lt;link rel='stylesheet' type='text/css' href='mycssfile.css' />
</code>

rel-Attribut beschreibt den Typ des Links (z.B. Shortcut Icon).

### &lt;BODY> &lt;/BODY>

Im Body werden die Inhalte strukturiert abgelegt.

![Body-Element mit Inhalten](images/body.png)

Beispiel fuer ein Bild:

<code>
&lt;img src='images/cat.png' alt='The Murakamicat' width='200px'>
</code>

Beispiel fuer ein Div und einen Absatz mit Text (Paragraph):

<code>
&lt;div>&lt;p>Text&lt;/p>&lt;/div>
</code>

Form-Element ist ein Container fuer Form-basierte Elemente. Einige davon koennen Werte enthalten, 
die durch die Anwender bearbeitbar sind und die an den Server fuer die weitere Verarbeitung geschickt werden koennen.

<code>
&lt;form action="http://www.google.com/search" method="get">

 &lt;label>Google: &lt;input type="search" name="q">&lt;/label>
 
 &lt;input type="submit" value="Search...">

&lt;/form>
</code>

### &lt;TABLE> &lt;/TABLE>

<table>
  <tr><th>Item</th><th>Turnover / Year</th><th>Quantity</th></tr>
  <tr><td>Coffee</td><td>$ 347,456.00</td><td>422,232</td></tr>
  <tr><td>Cake</td><td>$ 69,123.00</td><td>42,202</td></tr>
</table>

Kommen wir zu den Tabellen. Tabellen sind fuer die tabellarische Darstellung von Informationen da. 
Wie man oben erkennen kann, habe ich eine Tabelle mit 2 Spalten und 3 Zeilen angelegt. Die erste Zeile ist eine Kopfzeile.

Tabellen koennen aber nicht nur fuer das Anzeigen von tabellarischen Inhalten verwendet werden, sondern auch fuer die Ausrichtung von Inhalten.

### DOCTYPE

Um dem Browser mitzuteilen in welcher HTML-Version die HTML-Datei erstellt wurde, wird vor dem HTML-Tag der DocType definiert:

&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

Bedeutung:

* DOCTYPE HTML PUBLIC: Bezug auf die offentlich verfuegbare HTML-DTD
* W3C: Herausgeber der DTD
* HTML: Dokumenttyp
* 4.01: Sprachversion
* Transitional: Sprachvariante (Es gibt 3)
* EN: steht fuer die Sprache in der die HTML-Tags inklusive der HTML-Attribute geschrieben wurden (nicht die Sprache der Inhalte)


#### Strict

&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w4.org/TR/html4/strict.dtd">

* BSP: Inhalte muessen in Block-Elementen stehen und duerfen nicht direkt unter BODY-ELEMENT auftauchen.

#### Transitional

&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w4.org/TR/html4/loose.dtd">

* Enthaelt etwas lockere Regeln als in Strict

#### HTML5

&lt;!DOCTYPE html>

### HTML - TimeTracker - Demo

[TimeTracker Demo in HTML](../src/html/timetracker.html)

### HTML5

* Ist der neue HTML Standard, der noch in der *Entwicklung* ist
* Neue HTML-Elemente und Attribute
	* data-* Attribute
* Voller CSS3 Support
* Video und Audio
* Local Storage
* WebWorker


<q>HTML5 ist eine Ansammlung von Componenten, die zur Entwicklung von innovativen Webanwendungen dienen.</q>

#### HTML5 Componenten

* ![Semantics](images/class-header-semantics.jpg)
	* Mehr semantische HTML-Elemente fuer die feinere Strukturierung von Inhalten
* ![CSS3](images/class-header-css3.jpg)
	* Mehr Effekte und Stylingmoeglichkeiten
	* Web Open Font Format (WOFF)
* ![Connectivity](images/class-header-connectivity.jpg)
	* Web Sockets
* ![Performance](images/class-header-performance.jpg)
	* Web Workers 
	* XMLHttpRequest 2
* ![3D](images/class-header-3d.jpg)
	* SVG
	* Canvas
	* WebGL
	* CSS3 3D
* ![Device](images/class-header-device.jpg)
	* Bessere API fuer den Zugriff auf das entsprechende Device
* ![Offline](images/class-header-offline.jpg)
	* Local Storage
	* Indexed DB
	* File API
* ![Multimedia](images/class-header-multimedia.jpg)
	* Audio
	* Video

##### Semantics

Semantische Elemente werden definiert, um Inhalten eine bestimmte Bedeutung zu geben. Diese Inhalte stehen in einer bestimmten Beziehung zu einandern.

* Section
	* Abschnitt eines Dokumentes
	* Vergleichbar mit Div
* Header
	* Enthaelt Navigationslinks, Ueberschriften
	* In Verbingung mit Section nutzbar
	* Duerfen nicht verschachtelt werden oder in Footer, Address verwendet werden
* Footer
	* Enthaelt Metainformationen zu den Inhalten
	* Verhalten wie Header
	* Kann auch am Ende jeder Section verwendet werden
* Aside
	* Enthaelt Informationen zu zusaetzlichen Inhalten, die nicht direkt mit dem Hauptinhalt etwas zu tun haben.
	* z.B. Sidebar
	* Hilft Suchmaschinen und Screenreadern Inhalte die nicht zum Thema gehoeren als solche zu erkennen
* Nav
	* Enthaelt Navigationselemente, die auf Inhalte oder andere Dokumente verweisen.
	* Typischerweise wird es in Head platziert.
	* Sollte nur 1 Mal vorkommen
* Article
	* Container fuer Inhalte die in sich zusammenhaengend sind, aber von dem Rest der Seite entkoppelt
	* Blogeintrag
* Figure
	* Definiert einen Container fuer einen in sich abgeschlossenen Inhalt:
	* Bilder, Diagramme, Codefragmente
* Figcaption
	* Definiert einen Titel fuer den Figure-Container
* Mark
	* Wird benutzt um bestimmte Fragmente von Inhalten hervorzuheben
* Time
	* Markiert Datumsinhalte als solche
	* Bietet die Moeglichkeit Datumsinformationen in Attributen zu hinterlegen
* Progress
	* Native Progressbar



#### HTML5 - TimeTracker - Demo

[TimeTracker Demo in HTML](../src/html/timetracker-html5.html)


## CSS

* Cascading Stylesheets ist eine deklarative Sprache fuer Stilvorlagen von strukturierten Dokumenten
* Unterstuetzt Vererbung fuer Auszeichnungsattribute
* Style fuer verschieden Ausgabemedien
* Stylen von strukturierten Inhalten findet ueber CSS und nicht ueber HTML statt. HTML-Elemente wie Font und Center sind deprecated.
* CSS2 und 2.1 ist der aktuelle Stand
* CSS3 ist in der Entwicklung

### Struktur

Der Aufbau einer CSS-Regel:

<pre><code>
	Selector [, Selector2, ...]
	{
		Property-1: Value-1;
		Property-2: Value-2;
		...
		Property-n: Value-n;
	}
	/* My Comment */
</code></pre>

* Der Selektor gibt an fuer welchen Bereich des Dokumentes der Style gilt.
* Ein Styleblock kann fuer mehrere Selektoren definiert werden (Vermeidung von Redundanz)

<table>
	<caption>einfache Selektoren</caption>
	<tr><th>Selektor</th><th>Bedeutung</th><th>HTML-Beispiel</th></tr>
	<tr><td>*</td><td>Selektiert jedes Element</td><td>&lt;div>&lt;/div></td></tr>
	<tr><td>Bubu</td><td>Selektiert jedes mit dem Tagname Bubu</td><td>&lt;Bubu>&lt;/Bubu></td></tr>
	<tr><td>.foobar</td><td>Selektiert jedes Element mit der Klasse foobar</td><td>&lt;div class='foobar'>&lt;/div></td></tr>
	<tr><td>#bubu</td><td>Selektiert jedes Element mit der ID bubu</td><td>&lt;div id='bubu'>&lt;/div></td></tr>
	<tr><td>[bubu]</td><td>Selektiert jedes Element dessen bubu-Attribut gesetzt ist, egal welchen Wert dieses Attribut hat</td><td>&lt;div bubu='foobar'>&lt;/div></td></tr>
	<tr><td>[bubu]</td><td>Selektiert jedes Element dessen bubu-Attribut den Wert foobar hat</td><td>&lt;div bubu='foobar'>&lt;/div></td></tr>
</table>


<table>
	<caption>Kombinatoren</caption>
	<tr><th>Selektor</th><th>Bedeutung</th><th>HTML-Beispiel</th></tr>
	<tr><td>Bubu Foobar</td><td>Selektiert alle Foobar-Elemente, die Nachfahren von Bubu-Element sind</td><td>&lt;div>&lt;/div></td></tr>
	<tr><td>Bubu > Foobar</td><td>Selektiert alle Foobar-Elemente, die ein Kind-Element von Bubu-Element sind</td><td>&lt;div>&lt;/div></td></tr>
	
</table>



<table>
	<caption>Pseudoklassen</caption>
	<tr><th>Selektor</th><th>Bedeutung</th><th>HTML-Beispiel</th></tr>
	<tr><td>a:link</td><td>Selektiert unbesuchte Verweise</td><td>&lt;a>&lt;/a></td></tr>
	<tr><td>a:visited</td><td>Selektiert besuchte Verweise</td><td>&lt;a>&lt;/a></td></tr>
	<tr><td>a:active</td><td>Selektiert das Element das gerade angeklickt ist</td><td>&lt;a>&lt;/a></td></tr>
	<tr><td>a:hover</td><td>Selektiert das Element ueber dem gerade die Maus drueber ist.</td><td>&lt;a>&lt;/a></td></tr>
	<tr><td>a:focus</td><td>Selektiert das Element das gerade den Fokus hat</td><td>&lt;a>&lt;/a></td></tr>
	<tr><td>a:first-child</td><td>Selektiert Elemente, die das erste Kind ihres Elternelementes sind</td><td>&lt;a>&lt;/a></td></tr>
</table>

* Style sollte nicht Inline definiert werden!
* Ueber das @media Attribut koennen Styles fuer verschiedene Ausgabemedien deklariert weden:
	* all
	* print
	* projection
	* screen
	* tv
	* ...
* In CSS3 wurden Media Queries eingefuehrt.
	* Damit laesst sich Style nicht nur fuer ein Medium definieren, sondern auch fuer bestimmte Eigenschaften des Mediums:
		* Breite und Höhe des Browserfensters
		* Breite und Höhe des Gerätes
		* Orientierung (Quer- oder Hochformat)
		* Bildschirmauflösung

Beispiel fuer Media Queries:

<pre>
<code>
@media screen and (max-width: 1024px){
	html {
		color: red;
	}	

	div {
		font-family: 'Helvetica';
	}
}
</code>
</pre>
In diesem Beispiel wird der Style angewandt, wenn das Medium ein Bildschirm ist und die Breite des Fensters kleiner 1025px ist.


#### CSS - TimeTracker - Demo

[TimeTracker Demo in HTML mit CSS](../src/css/timetracker.html)

# Web Ninja Workshop - Basics II

## Agenda

* Ajax
* Wireshark
* Browser / Dev Tools

## HTTP

* Hypertext Transfer Protokol ist ein Transferprotokoll zur Uebertragung von Daten
* Es wird hauptsaechlich eingesetzt um eine Webseite aus World Wide Web in den Browser zu laden.
* Die Kommunikationseinheiten zwischen Client und Server werden als Nachrichten bezeichnet, von denen es zwei unterschiedliche Arten gibt.
	* Anfrage (Request) wird vom Client an den Server geschickt
	* Antwort (Response) wird vom Server an den Client geschickt, als Reaktion auf die Anfrage

* Die Nachrichten bestehen aus 2 Teilen
	* Nachrichtenkopf oder auch HTTP-Header genannt
		* Der Kopf enthaelt Informationen ueber den Koerper, z.B. 
			* welche Encodierung verwendet wird.
			* Den Typ der Inhalte
			* Die Laenge der Inhalte
			* Cookies
      * User-Agent
		* Diese Informationen sind notwendig, damit der Empfaenger die Nachricht richtig interpretiert
		* Jede Zeile im Header wird durch einen Zeilenumbruch getrennt
	* Nachrichtenkoerper oder auch Message Body / Body genannt

*** DEMO: Skizze
*** DEMO: HTTP mit NODE.JS

* Ungueltige Zeichen in der Url werden mit %-kodiert. Leerzeichen wird zu **%20**
* Header und Body werden durch eine Leerzeile getrennt

* Protokollversionen
	* HTTP/1.0
		* Hier bei jedem Request die Verbindung immer wieder aufgebaut
		* Bei 10 Bilder auf einer Seite, wird die Verbindung 11 Aufgebaut
	* HTTP/1.1
		* Hier kann der Client dem Server mitteilen, dass der Verbindungsabbau nicht stattfinden soll (keep-alive), bis alle Ressourcen geladen sind

* Das Protokoll ist zustandlos. Die Informationen aus frueheren Nachrichten gehen verloren.
	* Um Informationen von Nachricht zu Nachricht zu transportieren, werden Cookies verwendet.
		* Key-Value-Pairs
	* Ueber Cookies werden z.B. Sitzungsinformationen mitgegeben (Session ID)

* HTTP-Methoden
	* Get
		* Methode fuer das Abholen von Daten auf dem Server
		* Abrufen von Ressourcen
	* Put
		* Methode fuer das Uebertragen von Daten an den Server
		* Hier werden die Inhalte im Body verschickt z.B. als Key-Value-Pair
		* Weitere Daten koennen auch an die URI gebunden werden
	* Delete
		* Mit der Delete Methode kann das Loeschen von Daten auf dem Server realisiert werden
	* Head
		* Ruft den Kopf ab, aber nicht den Body
		* Z.B. zuer Pruefung von Metainformationen

	* Weitere Methoden
		* Put
			* Dient zum Hochladen einer Ressource auf den Server mit der Angabe der URI
		* Delete
			* Loescht Ressourcen auf dem Server
		* Options
			* Liefert vom Server eine Liste mit unterstuetzten Methoden und Features

* DEMO: Einschraenkungen von HTTP ohne Ajax


* Ajax
 * Asynchronous JavaScript and XML
 * Bezeichnet das Konzept der asynchronen Uebertragung von Daten
 * Ermoeglicht eine HTTP-Anfrage durchzufuehren, waehrend eine HTML-Seite angezeigt wird.
 * XMLHttpRequest
 * Beispiel am FlipChart

* jQuery HTTP - Beispiel
	* $.ajax({url: 'http://localhost:12345', type:'GET'});
	* $.ajax({url: 'http://localhost:12345', data: {name:"Foobar"}, type:'POST'});

## Browser

### Debugging
### Profiling
### Network

## Links

### Stuff

* [https://github.com/konstantindenerz/web-ninja-training/](https://github.com/konstantindenerz/web-ninja-training/)

### Web

* [www.evolutionoftheweb.com/](www.evolutionoftheweb.com/)
* [www.20thingsilearned.com/](www.20thingsilearned.com/)
* [http://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol](http://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
* [http://de.wikipedia.org/wiki/HTTP-Statuscode](http://de.wikipedia.org/wiki/HTTP-Statuscode)
* [http://de.wikipedia.org/wiki/Fehlerseite](http://de.wikipedia.org/wiki/Fehlerseite)

### HTML5

* [http://www.w3.org/html/logo/](http://www.w3.org/html/logo/)
* [www.html5rocks.com/](www.html5rocks.com/)
* [www.w3.org/](www.w3.org/)
* [http://www.selfhtml5.org/html5-tag-systematik/](http://www.selfhtml5.org/html5-tag-systematik/)

### CSS

* [http://de.wikipedia.org/wiki/Cascading_Style_Sheets](http://de.wikipedia.org/wiki/Cascading_Style_Sheets)
* [http://de.wikipedia.org/wiki/Reset-Stylesheet](http://de.wikipedia.org/wiki/Reset-Stylesheet)
* [www.lesscss.de](www.lesscss.de)
* [sass-lang.com/](sass-lang.com/)
* [www.webdesignerwall.com/trends/47-amazing-css3-animation-demos](www.webdesignerwall.com/trends/47-amazing-css3-animation-demos)
* [http://www.colorzilla.com/gradient-editor/](http://www.colorzilla.com/gradient-editor/)
* [http://www.google.com/webfonts](http://www.google.com/webfonts)
* [http://www.fontsquirrel.com/](http://www.fontsquirrel.com/)
* [http://www.css3maker.com/](http://www.css3maker.com/)

### JS

* [http://jquery.com/](http://jquery.com/)
* [http://api.jquery.com/](http://api.jquery.com/)

### AJAX

* [http://de.wikipedia.org/wiki/Ajax_(Programmierung)](http://de.wikipedia.org/wiki/Ajax_(Programmierung))
* [http://de.wikipedia.org/wiki/XMLHttpRequest](http://de.wikipedia.org/wiki/XMLHttpRequest)
* [http://de.selfhtml.org/diverses/mimetypen.htm](http://de.selfhtml.org/diverses/mimetypen.htm)
### SharePoint

* [Browser Support: technet.microsoft.com/en-us/library/cc263526.aspx#supportmatrix](Browser Support: technet.microsoft.com/en-us/library/cc263526.aspx#supportmatrix)


