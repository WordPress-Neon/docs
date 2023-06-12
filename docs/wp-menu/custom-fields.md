---
sidebar_position: 2
description: Add custom field to menu output
pagination_label: Menus
---

# Custom Fields For Menu Items

## Introduction

Some menus may require custom fields, if this is the case for your menu then you can query the custom fields (meta fields)
by using filters.

## Filter Top Level Items

```php
<?php

use WPN\Menu;

add_filter( 'wpn_menu_fields', function ( array $args, int $id ): array {
    //highlight-next-line
	$args['subtitle'] = get_post_meta( $id, 'my_subtitle_field' );
	
	// Advanced Custom Fields Query
	// $args['subtitle'] = get_field( 'my_subtitle_field', $id );

	return $args;
}, 10, 2 );

$menu    = new Menu( 'menu-id' );
echo $menu->as_array();
```

## Filter Child Items

```php
<?php

use WPN\Menu;

add_filter( 'wpn_submenu_fields', function ( array $args, int $id ): array {
    //highlight-next-line
	$args['subtitle'] = get_post_meta( $id, 'my_subtitle_field' );
	
	// Advanced Custom Fields Query
	// $args['subtitle'] = get_field( 'my_subtitle_field', $id );

	return $args;
}, 10, 2 );

$menu    = new Menu( 'menu-id' );
echo $menu->as_array();
```