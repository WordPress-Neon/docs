---
sidebar_position: 1
description: The REST API support within WordPress Neon provides a more MVC friendly implementation of WordPress REST API
pagination_prev: ajax/routes
pagination_label: REST API
---

# Creating Routes

## Introduction

The REST API support within WordPress Neon provides a more MVC friendly implementation of WordPress REST API.

## Adding a route

With the route method of the RestApi class we can provide five parameters for each route.

- Route Name
- Method
- Callback for response
- Parameter validation
- Middleware

### Registering the route

You can either register your routes in the `AppServiceProvider` class or use `require_once . '/routes.php'` to organise them
into a routes file.

Below we are registering our route which will allow us to use `http://localhost/wp-json/theme/v1/posts` and receive a response
from the APIResponse class.

```php title="routes.php"
<?php

use WPN\Support\Api\RestApi;
use App\Http\Controllers\APIResponse;

RestApi::route( 'posts', 'GET', APIResponse::class, [
    'id' => [
        'required' => true,
        'callback' => function ( $value ) {
            return is_numeric($value);
        }
    ]
] );
```

### Callback

Here is the example callback class that receives the WP_REST_Request object and returns the WP_Post object in a WP_REST_Response.

```php title="APIResponse.php"
<?php
namespace App\Http\Controllers;

use WP_REST_Response;
use WP_REST_Request;
use WPN\Support\Api\RestResponse;

class APIResponse implements RestResponse {
	public function __invoke( WP_REST_Request $request ): WP_REST_Response {
		$post = get_post( $request->get_param( 'id' ) );

		return new WP_REST_Response( [ 'post' => $post ] );
	}
}
```

:::info

For more information on [WP_REST_Request](https://developer.wordpress.org/reference/classes/wp_rest_request/) and [WP_REST_Response](https://developer.wordpress.org/reference/classes/wp_rest_response/) visit WordPress' documentation.

:::