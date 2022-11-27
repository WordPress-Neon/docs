---
sidebar_position: 1
description: PHP package developed around WordPress core functions to modernise the way we build WordPress themes. Provides APIs for all core functions, reducing development time and improves code readability.
pagination_label: Introduction
---
# Installation

:::caution Stability

WordPress Neon is current in active development and no stable version has been released. Due to this, everything in the
documentation might be subject to breaking changes before version 1.0 is released.

:::

## Install with Composer

```bash
composer require wpn/framework
```

## Including Composer Dependencies in WordPress

```php title="functions.php"
<?php

// highlight-next-line
require_once __DIR__ . '/vendor/autoload.php';
```

### Create the Application Service Provider

As outlined in [WordPress' theme basics](https://developer.wordpress.org/themes/basics/organizing-theme-files/) the App 
service provider should be placed in the `inc` directory of your theme root directory. Which should be included using 
[PSR-4.](https://getcomposer.org/doc/01-basic-usage.md#autoloading)

```php title="inc/AppServiceProvider.php"
<?php

namespace App;

use WPN\App;
use WPN\Providers\ServiceProvider;
use WPN\Assets\GoogleFont;
use WPN\Assets\Script;
use WPN\Assets\Style;

class AppServiceProvider extends ServiceProvider
{
    protected function boot(App $app)
    {
        $app->init(__DIR__.'/config/app.php');

        GoogleFont::load('lato', 'https://fonts.googleapis.com/css?family=Lato');
        
        Style::load('css/app.css');

        Script::load('js/app.js')
              ->localize('theme', [...Script::ajaxData()]);
    }
}
```

By default, we are loading Lato from Google Fonts using their API, enqueuing the theme assets `app.css` and `app.js` from 
their respective directories.

We also provide the Application with a route to our config file which we will create next.  

### Config File

The application's config file is used during the boot method of WordPress Neon to register its plugins and enable/disable 
some features that may not be required in some themes.

```php title="inc/config/app.php"
<?php

use WPN\Plugins\Mailhog;
use WPN\Plugins\Theme\FooterMenu;
use WPN\Plugins\Theme\HeaderMenu;

return [
    'plugins'       => [
        Mailhog::class,
    ],
    'features'      => [
        FooterMenu::class,
        HeaderMenu::class
    ],
    'template_path' => 'template-parts',
    'asset_path'    => 'assets'
];
```

In this config file we have registered the use of the **[MailHog plugin](/docs/plugins/mailhog)** and enabled the Header and
Footer menu features which will [register two menus](https://developer.wordpress.org/reference/functions/register_nav_menus/) 
with WordPress for the respective location of our theme.

## Getting Started With the Starter Theme

:::info

The **WordPress Neon starter theme** is currently in development, check https://github.com/WordPress-Neon/starter-theme for
development progress

:::
