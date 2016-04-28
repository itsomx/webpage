<?php

ini_set('display_errors', 0);

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

// ================================
// Language
// Leave blank for American English
// ================================
define('WPLANG', '');

// ======================
// Hide errors by default
// ======================
define('WP_DEBUG_DISPLAY', false);
define('WP_DEBUG', false);

// ===================================================
// Load database info and local development parameters
// ===================================================
if (file_exists(dirname(__FILE__).'/../config/production-config.php')) {
  define('WP_LOCAL_DEV', false);
  include dirname(__FILE__).'/../config/production-config.php';
} else {
  define('WP_LOCAL_DEV', true);
  include dirname(__FILE__).'/../config/local-config.php';
}


$table_prefix = 'wp_itso_';


/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
