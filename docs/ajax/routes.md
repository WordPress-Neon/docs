---
sidebar_position: 1
description: Registering ajax routes using WPN framework.
pagination_label: AJAX
---

# Overview

You can either register your routes in the `AppServiceProvider` class or use `require_once . '/routes.php'` to organise them
into a routes file.

```php title="ajax-routes.php"
<?php

use App\Http\Controllers\GetPostsController;
use WPN\Http\Route;

Route::create('get_posts', GetPostsController::class);
```

### Callback

```php title="GetPostsController.php"
<?php

namespace App\Http\Controllers;

use WPN\Http\Callback;
use WPN\Http\Response;

class GetPostsController implements Callback
{
    public function __invoke(): Response
    {
        $post = get_post($_REQUEST['post_id']);
        
        return new Response(['status' => 200, 'data' => $post]);
    }
}
```

### Validating the Request

```php title="GetPostsRequest.php"
<?php

namespace App\Http\Requests;

use WPN\Support\Request;

class GetPostsRequest extends Request
{
    protected function rules(): array
    {
        return [
            'post_id' => ['required', 'numeric'],
        ];
    }
}
```

### Using Validated Data

```php title="GetPostsController.php"
<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetPostsRequest;
use WPN\Http\Callback;
use WPN\Http\Response;

class GetPostsController implements Callback
{
    public function __invoke(): Response
    {
        $request = (new GetPostsRequest())->validated();
        
        $post = get_post($request['post_id']);
        
        return new Response(['status' => 200, 'data' => $post]);
    }
}
```