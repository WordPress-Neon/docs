---
sidebar_position: 3
description: Display taxonomy posts in a sidebar
---

# Custom Taxonomy Widget

## Introduction

By default, WordPress does not have a widget for custom taxonomies registered by themes and plugins. The custom taxonomy
widget service adds a widget to allow your theme to display a listing of posts inside that taxonomy.

### Enabling the Service

```php title="inc/config/app.php"
<?php

//highlight-next-line
use WPN\Plugins\CustomTaxonomyListWidget;

return [
    'plugins' => [
        //highlight-next-line
		CustomTaxonomyListWidget::class
    ]
];
```