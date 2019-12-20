<h1>Mitglieder</h1>
<?php settings_errors(); ?>


<div class="tab">
    <input type="checkbox" id="chck1" class="members-accordion">
    <label class="tab-label" for="chck1">Neuen Fachschaftler anlegen</label>
    <div class="tab-content">
        <form id="membersForm" method="post" action="" class="fs-general-form">
            <div class="fs-profile-preview" ></div>
            <div class="linewrapper"><input type="text" placeholder="Vorname" name="name" /><input type="text" placeholder="Nachname" /></div>
            <div class="linewrapper"><input type="date" /></div>
            <div class="linewrapper"><input type="text" placeholder="Studiengang" /><input type="text" placeholder="Semester" /></div>
            <?php wp_editor('Initial Content', 'new_profile_description_editor', array('media_buttons' => false, 'quicktags' => false, 'textarea_rows' => 4)); ?>
            <input type="submit" class="button button-primary button-large" value="Speichern" />
        </form>
    </div>
</div>

<div class="members">
    <table class="wp-list-table widefat fixed striped posts">
        <thead>
            <tr>
                <th scope="col">Profilbild</th>
                <th scope="col">Name</th>
                <th scope="col">Geburtstag</th>
                <th scope="col">Studium</th>
                <th scope="col">Charakteristik</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
</div>

<?php

if (isset( $_POST['name'] )) {
// create post object with the form values

    $my_cptpost_args = array(

        'post_title'    => $_POST['name'],

        'post_status'   => 'publish',

        'post_type' => 'members'

    );
// insert the post into the database

    wp_insert_post( $my_cptpost_args, True);

}

