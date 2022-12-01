---
sidebar_position: 1
description: Registering sidebars with WPN
pagination_label: Sidebars
---

# Sidebars

## Introduction

A sidebar is any widgetized area of your theme. Widget areas are places in your theme where users can add their 
own widgets. You do not need to include a sidebar in your theme, but including a sidebar means 
users can add content to the widget areas through the Customizer or the Widgets Admin Panel.

Widgets can be employed for a variety of purposes, ranging from listing recent posts to conducting live chats.

## Register Sidebars

You can register a sidebar by calling the `register` method of the `WPN\Support\Sidebar` class.
```php
use WPN\Support\Sidebar;

Sidebar::register( 'Blog Sidebar', args: [] );
```

Once registered, this sidebar will appear in the widgets menu of the appearance tab on the WordPress dashboard.

:::info

Sidebars are by default registered with the `before_title`, `after_title`, `before_widget` and `after_widget` values set,
however you can override these with the `args` parameter of the `register` method.

```php
'before_title'  => '<h5 class="sidebar-heading">',
'after_title'   => '</h5>',
'before_widget' => '<div class="text-sm">',
'after_widget'  => '</div>',
```

:::

## Retrieving a sidebar

Sidebars are retrieved using the `get` method. The `get` method will echo the sidebar.

```php
use WPN\Support\Sidebar;

Sidebar::get( 'Blog Sidebar' );
```