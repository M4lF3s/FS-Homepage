<?php

function fs_add_admin_page() {
    add_menu_page( 'FS-Theme Options', 'Fachschaft', 'manage_options', 'fs', 'fs_theme_members', get_template_directory_uri() . '/assets/img/tross.svg', 110 );

    //Generate Admin Sub Pages
    add_submenu_page( 'fs', 'Members', 'Mitglieder', 'manage_options', 'fs', 'fs_theme_members');
    add_submenu_page( 'fs', 'Uni-Kino', 'Uni-Kino', 'manage_options', 'fs_uk', 'fs_theme_uk');
    //add_submenu_page( 'fs', 'FS Physikerbar Settings', 'Physikerbar', 'manage_options', 'fs_phybar', 'fs_theme_phybar_page');
    //add_submenu_page( 'fs', 'FS Theme Setup', 'Setup', 'manage_options', 'fs_setup', 'fs_theme_setup_page');

}
#add_action( 'admin_menu', 'fs_add_admin_page' );
add_action( 'admin_menu', 'fs_add_admin_page' );

function fs_theme_members() {
    require_once( get_template_directory() . '/Fachschaft/members.php' );
}

function fs_theme_uk() {
    require_once( get_template_directory() . '/Fachschaft/unikino.php' );
}