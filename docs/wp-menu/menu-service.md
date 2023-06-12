---
sidebar_position: 1
description: Get WordPress menus as an array
pagination_label: Menus
---

# Working With WordPress Menus

## Introduction

WordPress' menus created in the admin dashboard usually require a Nav Walker to get output from the menu, with the menu
API you can get an array from the menu in the back-end.

## Get Menu as an Array

```php
<?php

use WPN\Menu;

$menu = new Menu('menu-id');
$items = $menu->as_array();
```

The `menu-id` is the label you assigned to the menu when you created it in the back-end.

The `Menu` class also supports the following methods:
- as_array
- as_json
- as_object