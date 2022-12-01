---
sidebar_position: 4
description: Register an ACF Pro options page with WPN
---

# ACF Options Page

## Introduction

The ACF Pro plugin allows you to register options pages for your themes or plugins, WPN provides a cleaner way to register
an options' menu for your theme.

```php
<?php

//highlight-next-line
use WPN\Plugins\OptionsPage;

return [
    'plugins' => [
        //highlight-next-line
        OptionsPage::class,
    ]
];
```