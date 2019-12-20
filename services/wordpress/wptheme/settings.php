<?php

function fs_add_admin_page() {
    add_menu_page( 'FS-Theme Options', 'Fachschaft', 'manage_options', 'fs', 'fs_theme_members', get_template_directory_uri() . '/assets/img/tross.svg', 110 );

    //Generate Admin Sub Pages
    add_submenu_page( 'fs', 'Members', 'Mitglieder', 'manage_options', 'fs', 'fs_theme_members_page');
    add_submenu_page( 'fs', 'Uni-Kino', 'Uni-Kino', 'manage_options', 'fs_uk', 'fs_theme_uk');
    //add_submenu_page( 'fs', 'FS Physikerbar Settings', 'Physikerbar', 'manage_options', 'fs_phybar', 'fs_theme_phybar_page');
    //add_submenu_page( 'fs', 'FS Theme Setup', 'Setup', 'manage_options', 'fs_setup', 'fs_theme_setup_page');

}
add_action( 'admin_menu', 'fs_add_admin_page' );

function fs_custom_settings() {

    register_setting('fs-settings-members', 'members');

    add_settings_section('add-members', NULL, 'add_members', 'fs');
    add_settings_field('new_profile_picture', 'Profilbild', function(){
        echo '<div class="fs-profile-preview" ></div>';
    }, 'fs', 'add-members');
    add_settings_field('new_profile_name', 'Name', function(){
        echo '<div class="linewrapper"><input type="text" placeholder="Vorname" name="name" /><input type="text" placeholder="Nachname" /></div>';
    }, 'fs', 'add-members');
    add_settings_field('new_profile_age', 'Geburtstag', function(){
        echo '<div class="linewrapper"><input type="date" /></div>';
    }, 'fs', 'add-members');
    add_settings_field('new_profile_major', 'Studium', function(){
        echo '<div class="linewrapper"><input type="text" placeholder="Studiengang" /><input type="text" placeholder="Semester" /></div>';
    }, 'fs', 'add-members');
    add_settings_field('new_progile_description', 'Charakteristik', function(){
        wp_editor('Initial Content', 'new_profile_description_editor', array('media_buttons' => false, 'quicktags' => false, 'textarea_rows' => 4));
    }, 'fs', 'add-members');

}
add_action('admin_init', 'fs_custom_settings');

function add_members() {
    //echo '<p>Something</p>';
}

function fs_theme_members_page() {
    require_once( get_template_directory() . '/Fachschaft/members.php' );
}

function fs_theme_uk_page() {
    require_once( get_template_directory() . '/Fachschaft/unikino.php' );
}