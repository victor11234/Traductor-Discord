const BOT_FULLNAME_AUTO_ERROR = "Formato incorrecto: Un ejemplo sería `!english text-here`, donde el `text-here` se convierte a ingles";
const BOT_ABBR_AUTO_ERROR = "Formato incorrecto: Un ejemplo sería `!en text-here`, donde `text-here` se convierte a ingles";
const BOT_TRANS_SPECIFIC_ERROR = "Formato incorrecto: Un ejemplo sería `!translate spanish english text-here` donde después de `!translate` traduciría `text-here` al ingles";
const BOT_TRANSLATION_ERROR = "Hubo un error: ";
const BOT_COMMANDS_HELP = 
"Tipos de traduccion:\n\
\n\
=>`!translate english spanish  text-here \---->  Convierte el texto de inglea a español\n\
=>`!english text-here \---->  Convierte cualquier texto a ingles\n\
=>`!en   text-here \---->  Convierte cualquier texto a ingles\n\
"


module.exports = {
    BOT_FULLNAME_AUTO_ERROR,
    BOT_ABBR_AUTO_ERROR,
    BOT_TRANS_SPECIFIC_ERROR,
    BOT_TRANSLATION_ERROR,
    BOT_COMMANDS_HELP,
}