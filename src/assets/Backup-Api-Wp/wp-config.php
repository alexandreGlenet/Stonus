<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'wp_stonus');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'root');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '<5)e[?<qEu-)kFHjK:2dpgFGE59WPS=F8DL| __%dvu~m.U$v^R~<IXb_T GkNY$');
define('SECURE_AUTH_KEY', ' KosnO#Q.Z~rd2.&1d[V$u.}-vC$,8!3`n6.mjn-sV IqAVTv.zinX8D#o!oZ<Xm');
define('LOGGED_IN_KEY', '6#hSO$ryuP4]u>gDK3PF#Z.4V=mInH4Vg?e7~(@Y@vgJzy~y[K4H97|Ia{v.~M_G');
define('NONCE_KEY', ';,:%x~]]7x}[dpGK~tzX@`hKLX9LKi0egJpk/iG+XKm^tUVs|yz[`]lSRp|#}n;D');
define('AUTH_SALT', ')KV>om2$yNRd(.e]ndV~C+w~X`fx(C(FylP#$o/*M(1X`NF?U69ZfnzZ/UjQ2;l~');
define('SECURE_AUTH_SALT', 'X?uSQIO--x]r3GPPngVD2)f$?^|?nUJEE9XWoUNBvj,U6ZJ3N&*U3i4h[{8`f@n!');
define('LOGGED_IN_SALT', '~JV;s+1Ui$L0d`ml%:4l$D0gv>8U6BbnuhZ_=Iy:?CBpz]0FDg-A9-WBP1h_p~I8');
define('NONCE_SALT', '6K-gb[>r*QIyYD,UJ,ZiAb/YNd57&j.v(]r(lX`gHVz8Q_.#*u7;3=Zsk {qL%G&');
define('JWT_AUTH_CORS_ENABLE', true);
define('JWT_AUTH_SECRET_KEY', 'Xav>xfsRf_49_|xMsr|V1G be|6*=|X:Ap40x0]_*1X_@Q$:8&)18Kb)hmyB>@hM');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', true);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if (!defined('ABSPATH')) {
    define('ABSPATH', dirname(__FILE__) . '/');
}

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once ABSPATH . 'wp-settings.php';




//define('AUTH_KEY', 'c:!f)V$[s~t-9UnU74!HuSR6Vj AT[xxe.lwO-g|sB@sKgDf|8jkxe?eyBht,>K?');
// define('SECURE_AUTH_KEY', '(X>~eOEvWNS(bSO9pWNRg>]#n+dj,i+P4Z~*_dAvTP-57g!4-~S65b/fXwm0=U{q');
// define('LOGGED_IN_KEY', 'renLpe{*EBrHcIGAa]Yh;6GQ#6qU5a#}tBlbt_M1-a7lvIr4RnOj?mtcy;#-Q&20');
// define('NONCE_KEY', 'YRb3B!U4STRaXA4gMiQhgm%|+QRzV*L91y[(hC^=Qoz5P- +>T(c+<O{s-] UGj{');
// define('AUTH_SALT', '$]$*jB1|=Qd$tYbwBSoo@s#,>Qk7-)}1kJ#o+3|n{AU FFE`Iq5Y{6q Toa>@6Q,');
// define('SECURE_AUTH_SALT', ' qlARrq_3knl[tGUff>M#:yw@g0uiAc m< gQCmQpkCIAuqlPm`z9}rm:00LJ=c=');
// define('LOGGED_IN_SALT', 'j;{rtu0O/$Tf)k[f4%Ci^JR6+LBFy8H(YOUfGh<d(ugbg4wxmwndq< y1bn-5x3]');
// define('NONCE_SALT', '-sR z^?oxm`+N3FjGce67j?9J=a4H^@~^.O`E<4s!K=Y:V-l+<t+-ic6u@C##-B9');
