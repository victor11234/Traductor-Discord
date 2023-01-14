const BOT_FULLNAME_AUTO_ERROR = "Formato incorrecto: Un ejemplo sería `!texto-en-español-sueco`, donde el `texto-en-español` se convierte a sueco";
const BOT_ABBR_AUTO_ERROR = "Formato incorrecto: Un ejemplo sería `!de french-text-here`, donde `french-text-here` se convierte a alemán";
const BOT_TRANS_SPECIFIC_ERROR = "Formato incorrecto: Un ejemplo sería `!translate sueco coreano texto-sueco-aquí` donde después de `!traducir` traduciría `texto-sueco-aquí` al coreano";
const BOT_TRANSLATION_ERROR = "Hubo un error: ";
const BOT_COMMANDS_HELP = 
"For una lista de nombres y abreviaturas va aquí: <https://cloud.google.com/translate/docs/languages> Aquí están los comandos disponibles:\n\
```! traducir de a texto```\
=>`!traducir inglés italiano english-text-here` convierte inglés a español\n\
```!idioma auto-traducir-texto```\
=>`!texto-inglés-francés-aquí` convierte inglés a español\n\
```!abrv traducción automática de texto```\
=>`!de english-text-here` convierte inglés a español"


module.exports = {
    BOT_FULLNAME_AUTO_ERROR,
    BOT_ABBR_AUTO_ERROR,
    BOT_TRANS_SPECIFIC_ERROR,
    BOT_TRANSLATION_ERROR,
    BOT_COMMANDS_HELP,
}