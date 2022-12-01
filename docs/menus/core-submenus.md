---
sidebar_position: 2
description: Registering admin menus with WPN
pagination_label: Menus - Core Menus
---

# Core Submenus

## Introduction

Administration Menus are the interfaces displayed in WordPress Administration. They allow you to add option pages
for your plugin or theme.

Certain top-level menus are registered by the WordPress core and require the use of a different API.

## Adding Core Submenus

You can use the `WPN\Support\Admin\Submenu` class and `core` method to register your Tool submenu. Menus should be
registered in the `boot` method of your service provider.

The first parameter of the `core` method is the core menu you would like to add to.

```php
<?php

use App\Http\Controllers\ThemeAdminMenu
use WPN\Support\Admin\Submenu;

Submenu::core( 'dashboard', 'Testing WPN', ThemeAdminMenu::class );
```

### Available Core Menus

- dashboard
- posts
- media
- pages
- comments
- theme (Appearance)
- plugins
- users
- management (Tools)
- options
- links (Permalinks)

:::warning Invalid Core Menus

Registering a submenu on a core menu that does not exist will throw a `WPN\Exceptions\WPNInvalidCoreMenuException` exception.

:::