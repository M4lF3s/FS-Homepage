<?php

function create_posttype(){

    register_post_type('members',
        array(
            'labels' => array(
                'name' => __('Mitglieder'),
                'singular_name' => __('Mitglied')
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'members'),
            'show_in_menu' => 'edit.php?post_type=members',
        )
    );
}

// Hooking up our function to theme setup
add_action('init', 'create_posttype');