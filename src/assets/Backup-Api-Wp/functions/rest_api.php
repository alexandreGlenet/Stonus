<?php
/** API ENDPOINTS */
add_action('rest_api_init', function () {

    // ROUTING ------------------------------------------------------------------------------------------------------------

    // STONES  ---------------------------------------------------

    // GET stones
    register_rest_route('stonus/v1', 'stones', array(
        'methods' => WP_REST_Server::READABLE, // ou 'GET'
        'callback' => 'get_stones',
        // 'permission_callback' => function ($request) {
        //     return is_user_logged_in();
        // },
    ));

    // GET stone
    register_rest_route('stonus/v1', 'stones/(?P<stone_id>\d+)', array(
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'get_stone',
        'args' => [
            'stone_id' => array(
                'validate_callback' => function ($param, $request, $key) {
                    return is_numeric($param);
                },
            ),
        ],
        'permission_callback' => function ($request) {
            $stone_id = $request['stone_id'] ? $request['stone_id'] : null;
            $user_id = get_current_user_id();
            return isset($stone_id) && isset($user_id);
        },
    ));

    // The next filter fix a bug of access
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, PATCH');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Expose-Headers: Link', false);
        return $value;
    });

    // FUNCTIONS -----------------------------------------------------------------------------------------------------------

    // GET STONES -----------------------------------------------------

    function get_stones($request)
    {
        //return is_user_logged_in();
        $data = [];
        $params = $request->get_params();
        $stone_id = isset($params['stone_id']) ? esc_sql($params['stone_id']) : null;

        $stones = get_posts([
            'post_type' => 'stones', // ici je recupere le custom post
            'numberposts' => -1, // de base 10 -1 tous les avoir,
            'fields' => 'ids', // recuperer l'id des fields marche sans mais jaurais tous les fields de wp.

        ]);

        foreach ($stones as $stone) {
            $data[] = [
                'id' => $stone,
                'title' => get_the_title($stone),
                'latitude' => get_field('latitude', $stone),
                'photo' => [
                    'alt' => get_field('photo', $stone)['alt'],
                    'sizes' => [
                        'thumbnail' => get_field('photo', $stone)['sizes']['thumbnail'],
                        'medium' => get_field('photo', $stone)['sizes']['medium'],
                    ],
                ],
                'created_at' => get_the_date('Y-m-d', $stone),

            ];

            // if( $stone_id ) {
            //     $data = [$stone_id];
            //     }

        }
        return $data;

    }

    // GET STONE -----------------------------------------------------------

    function get_stone(WP_REST_Request $request)
    {

        $data = [];
        $params = $request->get_params();
        $stone_id = isset($params['stone_id']) ? esc_sql($params['stone_id']) : null;

        if ($stone_id) {
            $data = [
                'id' => $stone_id,
                'title' => get_the_title($stone_id),
                'latitude' => get_field('latitude', $stone_id),
                'photo' => [
                    'alt' => get_field('photo', $stone_id)['alt'],
                    'sizes' => [
                        'thumbnail' => get_field('photo', $stone_id)['sizes']['thumbnail'],
                        'medium' => get_field('photo', $stone_id)['sizes']['medium'],
                    ],
                ],
                'created_at' => get_the_date('Y-m-d', $stone_id),
            ];
        }

        return $data;
    }

});
