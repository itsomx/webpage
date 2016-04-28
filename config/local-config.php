<?php

ini_set('display_errors', E_ALL);
define('WP_DEBUG_DISPLAY', true);
define('WP_DEBUG', true);

/**#@-*/
define('WP_DEBUG', true);
define('WP_DEBUG_DISPLAY', true);
define('WP_DEBUG_LOG', true);
define('SCRIPT_DEBUG', true);

// ** MySQL settings ** //
/** The name of the database for WordPress */
define('DB_NAME', 'itso_webpage');

/** MySQL database username */
define('DB_USER', 'wp');

/** MySQL database password */
define('DB_PASSWORD', 'wp');

/** MySQL hostname */
define('DB_HOST', 'localhost');

define('AUTH_KEY',         'KBvbRa(2?)G+#*Sv]UO}YT+3LhoA{^p`+7e]g~CDNx]TM-|1V$IH0X-*KFX9K7I[');
define('SECURE_AUTH_KEY',  '68lF+7vO~3Q.U?<[rl7P~+|<n-$4zx^]yiZmTL0S8.xaF)1-!k(zU!V+][>J~*n@');
define('LOGGED_IN_KEY',    ':YM6~F3U2-r_K/I}&AP7oBbMy1dMl${=k&HyK(=n%s-%B3:-oQqLlIt(6+-;N`&m');
define('NONCE_KEY',        'd1zEs)0r50/`~Q^ %SjqIn4qu;?+OppDw29mI>%UKO+4uJ%_)k]@|CUbt?rDKpuj');
define('AUTH_SALT',        'rX8<EN|wZm}&|u%IL;d-s>hQW{Asjo8Wh0%MCq9Sgzt~1`58hV%5+s1MUKOHbW-@');
define('SECURE_AUTH_SALT', '$JTr0r93@An#5p{LJ~$ELF2lh7irCBF|X~|x^nK]6sdcKu]%k`(ANBoUq^1+2$<J');
define('LOGGED_IN_SALT',   '[S[LW &s]cWm;+A- !j>+_=/xw*|*3C4-5HDt)jn*seqh=vT#O}cPcl;rjqV%z7{');
define('NONCE_SALT',       'f|]sjJIu*W(%l@!A;Ud)M9-aOwA,CP!w=6z.;2R=/qjRbwZ#KLNyEs6JoR^pGup+');
