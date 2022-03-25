---
sidebar_position: 3
---

# SVG Support

## Introduction

The SVGSupport plugin allows SVG's to be uploaded into the WordPress media library.

## Enabling SVG Support

```php title="inc/config/app.php"
<?php

//highlight-next-line
use WPN\Support\Plugins\SVGSupport;

return [
    'plugins' => [
        //highlight-next-line
        SVGSupport::class,
    ]
];
```