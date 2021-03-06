---
sidebar_position: 2
---

# MailHog Support

## Introduction

MailHog provides us with a way to test and develop emails during local development by catching all the emails sent by
the application and sending them to the service installed using Docker.

:::caution

MailHog can be installed using Docker, by following the [Docker Support Guide](/docs/using-docker).

:::

### Enabling MailHog Support

```php title="inc/config/app.php"
<?php

//highlight-next-line
use WPN\Support\Plugins\Mailhog;

return [
    'plugins' => [
        //highlight-next-line
        Mailhog::class,
    ]
];
```