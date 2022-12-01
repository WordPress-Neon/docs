---
sidebar_position: 1
description: Helper functions provided by WPN.
pagination_label: Helper Functions
---

# Helpers

## Introduction

WPN includes a variety of global "helper" PHP functions. Many of these functions are used by the 
framework itself; however, you are free to use them in your own applications if you find them convenient.

## Templates

* [render_component](#render_component)
* [get_component](#get_component)

### render_component

`Echo` the output from a component file. Path of file is prefix by `template_path` in the config file.

```php
render_component('mobile-navigation');
```

An array of variables to pass to the component can be provided as the second parameter. Passed variables are available
in the component file as their key.

```php title="footer.php"
render_component('social-media-links',[
        'facebook' => 'https://facebook.com/...'
]);
```

```php title="social-media-links.php"
<a href="<?= $facebook; ?>">Facebook</a>
```

### get_component

Get the output from the component as a `string`. Path of file is prefix by `template_path` in the config file.

An array of variables to pass to the component can be provided as the second parameter. Passed variables are available
in the component file as their key.

```php title="footer.php"
$facebook_link = get_component('social-media-links',[
        'facebook' => 'https://facebook.com/...'
]);
```

```php title="social-media-links.php"
<a href="<?= $facebook; ?>">Facebook</a>
```

## Assets

### asset_path

The asset path returns the fully qualified URL of a file from the asset folder defined in your config file.

```php
$img_url = asset_path('img/logo.svg');
// http://localhost/wp-content/themes/wpn-theme/assets/img/log.svg;
```