---
sidebar_position: 1
description: Registering admin menus with WPN
pagination_label: Menus - The Basics
---

# The Basics

## Introduction

Administration Menus are the interfaces displayed in WordPress Administration. They allow you to add option pages 
for your plugin or theme.

The Top-level menus are rendered along the left side of the WordPress Administration. Each menu may contain a set of 
Sub-menus.

When deciding between Top-level menus and Sub-menus think carefully about the needs of your plugin as well as the 
needs of your end users.

## Register Admin Menus

Admin menus can be register inside the `boot` method of the `AppServiceProvider`. The callback for the menu can be either
a Closure or a class which `implements` the `WPN\Support\Admin\MenuCallback` `interface`.

```php
<?php

namespace App;

use WPN\App;
use WPN\Providers\ServiceProvider;
use WPN\Support\Admin\Menu;
//highlight-next-line
use App\Http\Controllers\ThemeAdminMenu;

class AppServiceProvider extends ServiceProvider {
	protected function boot( App $app ) {
		$app->init( __DIR__ . '/config.php' );
		
        //highlight-next-line
		Menu::register( 'Testing Menu', ThemeAdminMenu::class );
	}
}
```

When you register your menu, you can set the `position` as the 3rd parameter and the menu icon as the 4th, like so:

```php
Menu::register( 'Testing Menu', ThemeAdminMenu::class, 4, 'dashicons-admin-users' );
```

## Admin Menu Callbacks

Callbacks can either be a Closure or a class which `implements` the `WPN\Support\Admin\MenuCallback` `interface`.

### Class Callback Example

```php
<?php

namespace App\Http\Controllers;

use WPN\Support\Admin\MenuCallback;

class ThemeAdminMenu implements MenuCallback {
	public function __invoke(): void {
		echo '<h1>Hello</h1>';
	}
}
```

Inside your callback function or `__invoke` method, you can use the `render_component` helper function to render the
template for your menu.

If you need to save data from the menu, you should send a request to the page and deal with the request inside the callback.

## Submenu

Submenus can be added when registering the admin menu, you may also use the `WPN\Support\Admin\Submenu` class to register
a submenu onto an already existing menu.

### Adding submenus to registered menu

```php
<?php

namespace App;

use WPN\App;
use WPN\Providers\ServiceProvider;
use WPN\Support\Admin\Menu;
use App\Http\Controllers\ThemeAdminMenu;

class AppServiceProvider extends ServiceProvider {
	protected function boot( App $app ) {
		$app->init( __DIR__ . '/config.php' );
		
		Menu::register( 'Testing Menu', ThemeAdminMenu::class )
		    ->submenu( 'Testing Menu', ThemeAdminMenu::class )
		    ->submenu( 'Submenu 2', function () {
			    echo '<h1>Third</h1>';
		    } );
	}
}
```

### Adding submenu to already declared menu

You can add submenus to other plugins menus by calling `WPN\Support\Admin\Submenu`. The 2nd parameter would be the parent
menu's slug. 

Here is an example of adding to the Woocommerce menu.

```php
<?php

namespace App;

use App\Http\Controllers\ThemeAdminMenu;
use WPN\App;
use WPN\Providers\ServiceProvider;
use WPN\Support\Admin\Submenu;

class AppServiceProvider extends ServiceProvider {
	protected function boot( App $app ) {
		$app->init( __DIR__ . '/config.php' );

		Submenu::register( 'My New Menu', 'woocommerce', ThemeAdminMenu::class );
	}
}
```
