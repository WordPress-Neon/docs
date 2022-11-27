---
sidebar_position: 1
description: Generate custom post types with WPN
pagination_prev: getting-started/intro
pagination_label: Post Types
---

# Post Types

## Introduction

While developing your theme, you may need to create your own specific content type: for example, products for an 
e-commerce website, assignments for an e-learning website, or movies for a review website.

Using Custom Post Types, you can register your own post type. Once a custom post type is registered, 
it gets a new top-level administrative screen that can be used to manage and create posts of that type.

:::tip Flush Permalinks

WPN will not flush permalinks as this has a negative impact on performance. After you have registered a public post
type you should flush permalinks yourself by simply saving permalink settings in the wp-admin menu.

:::

## Registering a post type

Post types can be registered within a service provider. In this example we are using the `AppServiceProvider`.

Calling the `register` method of the `WPN\Support\PostType` class will handle the post type registration with the given parameters.
Here we will create a post type called `product` *(names are slugified when creating the post type)* which supports 
titles, content and featured images.

```php title="AppServiceProvider.php"
<?php

namespace App\Providers;

use WPN\App;
use WPN\Providers\ServiceProvider;
use WPN\Support\PostType;

class AppServiceProvider extends ServiceProvider {
	protected function boot( App $app ) {
		$app->init( __DIR__ . '/config.php' );
		
        //highlight-start
		PostType::register( 'Products',
			supports: [
				'title',
				'editor',
				'thumbnail'
			],
		);
		//highlight-end
	}
}
```

## Post type args

The third parameter of the `register` method allows for an array of arguments for the post type. For an exhaustive list
of arguments available, you can visit the [WordPress' documentation](https://developer.wordpress.org/reference/functions/register_post_type/#parameters).

```php title="AppServiceProvider.php"
<?php

namespace App\Providers;

use WPN\App;
use WPN\Providers\ServiceProvider;
use WPN\Support\PostType;

class AppServiceProvider extends ServiceProvider {
	protected function boot( App $app ) {
		$app->init( __DIR__ . '/config.php' );
		
		PostType::register( 'Products',
			supports: [
				'title',
				'editor',
				'thumbnail'
			],
            //highlight-start
			args: [
			    'show_in_rest' => false 
			]
		    //highlight-end
		);
	}
}
```