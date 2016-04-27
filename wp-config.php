<?php

ini_set('display_errors', 0);

// ===================================================
// Load database info and local development parameters
// ===================================================
if (file_exists(dirname(__FILE__).'/production-config.php')) {
    define('WP_LOCAL_DEV', false);
    include dirname(__FILE__).'/production-config.php';
} else {
    define('WP_LOCAL_DEV', true);
    include dirname(__FILE__).'/local-config.php';
}

// ========================
// Custom Content Directory
// ========================
$protocol = !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http';
define('WP_CONTENT_DIR', dirname(__FILE__).'/content');
define('WP_CONTENT_URL', "{$protocol}://{$_SERVER['HTTP_HOST']}/content");

/* Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/* The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

// ================================
// Language
// Leave blank for American English
// ================================
define('WPLANG', 'es_MX');

// ======================
// Hide errors by default
// ======================
define('WP_DEBUG_DISPLAY', false);
define('WP_DEBUG', false);

// =========================
// Disable automatic updates
// =========================
define('AUTOMATIC_UPDATER_DISABLED', false);

/*
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_itso_';

/* That's all, stop editing! Happy blogging. */

/* Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
    define('ABSPATH', dirname(__FILE__).'/wp/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH.'wp-settings.php';
