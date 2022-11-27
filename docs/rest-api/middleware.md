---
sidebar_position: 2
description: Middleware provides authentication to a given route and the authentication method will be executed on every request
---

# Middleware

## Introduction

Middleware provides authentication to a given route and the authentication method will be executed on every request.

## Middleware Example

In this example we are creating a middleware class that will check for a `token` parameter and ensure it matches a token
from the options table by calling the `get_option` method (without a default value)

```php file="APIMiddleware.php"

namespace App\Http\Middleware;

use WP_REST_Request;
use WPN\Support\Api\AuthenticatesRequests;

class APIMiddleware implements AuthenticatesRequests {
	public function authenticate( WP_REST_Request $request ): bool {
		return $request->has_param('token') && ($request->get_param('token') === get_option('some_users_token'));
	}
}

```

### Assign middleware to a route

Middleware is assigned when a route is registered.

```php title="routes.php"
<?php

use WPN\Support\Api\RestApi;
use App\Http\Controllers\APIResponse;
use App\Http\Middleware\APIMiddleware;

RestApi::route( 'posts', 'GET', APIResponse::class, [], APIMiddleware::class);

```