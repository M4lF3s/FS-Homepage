<?php


// Clean up wordpres <head>
remove_action('wp_head', 'rsd_link'); // remove really simple discovery link
remove_action('wp_head', 'wp_generator'); // remove wordpress version
remove_action('wp_head', 'feed_links', 2); // remove rss feed links (make sure you add them in yourself if youre using feedblitz or an rss service)
remove_action('wp_head', 'feed_links_extra', 3); // removes all extra rss feed links
remove_action('wp_head', 'index_rel_link'); // remove link to index page
remove_action('wp_head', 'wlwmanifest_link'); // remove wlwmanifest.xml (needed to support windows live writer)
remove_action('wp_head', 'start_post_rel_link', 10, 0); // remove random post link
remove_action('wp_head', 'parent_post_rel_link', 10, 0); // remove parent post link
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0); // remove the next and previous post links
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);

add_action( 'init', function() {
    global $wp_rewrite;
    $wp_rewrite->set_permalink_structure( '/%postname%/' );
} );


require get_template_directory() . '/settings.php';



function create_posttype(){

    register_post_type('protokolle',
        array(
            'labels' => array(
                'name' => __('Protokolle'),
                'singular_name' => __('Protokoll')
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'protokolle'),
        )
    );
}

// Hooking up our function to theme setup
add_action('init', 'create_posttype');

/*
* Creating a function to create our CPT
*/

function custom_post_type(){

// Set UI labels for Custom Post Type
    $labels = array(
        'name' => _x('Sitzungsprotokolle', 'Post Type General Name'),
        'singular_name' => _x('Sitzungsprotokoll', 'Post Type Singular Name'),
        'menu_name' => __('Protokolle'),
        'all_items' => __('Alle Protokolle'),
        'view_item' => __('Protokoll anzeigen'),
        'add_new_item' => __('Neues Sitzungsprotokoll anlegen'),
        'add_new' => __('Hinzufügen'),
        'edit_item' => __('Sitzungsprotokoll bearbeiten'),
        'update_item' => __('Sitzungsprotokoll aktualisieren'),
        'search_items' => __('Sitzungsprotokoll suchen'),
        'not_found' => __('Keine Sitzungsprotokolle gefunden :('),
        'not_found_in_trash' => __('Der Papierkorb ist leer'),
    );

// Set other options for Custom Post Type

    $args = array(
        'label' => __('protokolle'),
        'description' => __('Protokolle der Fachschaftssitzungen'),
        'labels' => $labels,
        'hierarchical' => false,
        'public' => true,
        'show_in_menu' => 'settings.php',
        'has_archive' => true,
        'exclude_from_search' => false,
        'publicly_queryable' => true,
        'capability_type' => 'post',
    );

// Registering your Custom Post Type
    register_post_type('protokolle', $args);
    remove_post_type_support('protokolle', 'editor');
    remove_post_type_support('protokolle', 'title');

}

/* Hook into the 'init' action so that the function
* Containing our post type registration is not
* unnecessarily executed.
*/

add_action('init', 'custom_post_type');