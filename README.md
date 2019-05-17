# labelizer  [![GitHub release](https://img.shields.io/github/release/noograss/labelizer.svg)](../../releases) [![Language](https://img.shields.io/badge/language-JavaScript-yellow.svg)](../../search) [![Language](https://img.shields.io/badge/language-html-yellow.svg)](../../search)

## What is it ?
The plugin provides a mean to extract all the labels presents in your sketch page.
Once extracted, those labels can be edited in a table which can then be imported in the page. This provides an easy way to translate a design. The table consists of a set of key-value defined as follow
- ArtBoardName__Symbol_fieldName
- ArtBoardName__Symbol
- ArtBoardName__fieldName (case of text)
- ArtboardName__sharedName (explained later on).

You can share your translation by exporting/importing them in JSON or CSV format.
This plugin was create with the idea to improve the process between  Designer/Copywriter/Developer.

By using clear names for sketch elements, everyone involved can clearly understand what element stand for and the transition from one party to another is improved.

## How ?
The plugin will go through each artboards present in the sketch page.
*Be sure to provide a proper name to your elements, that name will serve an identifier for the labels*
It will retrieve the text of the following elements:
- Artboard
- Symbol
- Text
- MasterSymbol

A name precedede with [x] will be skippe during the extraction. 

### Shared Name
Currenlty there is a short list of common names, these will be shown only once in the table.
- tab
- title
- ContinueButton
- NextButton
- BackButton
- PreviousButton
- CancelButton 
- DoneButton

## Usage
1. First download the zip file and extract it in your plugins folder.
2. The plugin will appears under the tab 'Plugin/LabelizING/Labelize'
3. It will be linked to the current sketch file, once it's opened. Closed it to link it to another one
4. Click either on 'import' to import a file exported using the plugin or one the pageName you wish the work one.
5. A table will be displayed containing all the found labels.
6. From this you can modify the table and translate the page by clicking 'Translate the page'
7. If you want to save your work for storing or share purpose, click on 'Go To download' and fill in the form to retrieve your export.

## Up coming features:
1. Possiblity to add a custom list of shared name.
2. Csv Multi languages handling