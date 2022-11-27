---
sidebar_position: 2
description: Service providers provide a way to execute code on application (WordPress) boot
---
# Service Providers

Service providers provide a way to execute code on application (WordPress) boot. Within WPN they are used for code that
would normally be dumped into the `functions.php` file.

By default, WPN is set up with an `ApplicationServiceProvider` in which WPN is configured.

## Registering Providers

Provider registration is done by adding them to the `config.php` file. Highlighted below.

```php title="config.php"
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
	//highlight-start
	'providers'     => [
		App\Providers\FontServiceProvider::class
	],
	//highlight-end
	'template_path' => 'views',
	'asset_path'    => 'assets'
];
```

### Example Provider

```php
<?php

namespace App\Providers;

use WPN\App;
use WPN\Assets\GoogleFont;
use WPN\Providers\ServiceProvider;

class FontServiceProvider extends ServiceProvider {
	protected function boot( App $app ) {
		GoogleFont::load(
			'SourceSansPro',
			'https://fonts.googleapis.com/css?family=Source Sans Pro',
			admin: true 
		);
	}
}
```