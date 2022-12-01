---
sidebar_position: 3
description: The SVGSupport plugin allows SVGs to be uploaded into the WordPress media library
pagination_next: null
---

# SVG Support

## Introduction

The SVGSupport plugin allows SVGs to be uploaded into the WordPress media library.

## Enabling SVG Support

```php title="config.php"
<?php

//highlight-next-line
use WPN\Plugins\SVGSupport;

return [
    'plugins' => [
        //highlight-next-line
        SVGSupport::class,
    ]
];
```