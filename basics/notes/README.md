# Web Ninja Workshop - Basics

## Agenda

* Git
* HTML
* CSS
* JS
* Node.JS
* Ajax
* Wireshark
* Browser Dev Tools


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
&lt;link rel='stylesheet' type='text/css' href='mycssfile.css'>
</code>

rel-Attribut beschreibt den Typ des Links (z.B. Shortcut Icon).


