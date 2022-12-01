---
sidebar_position: 2
description: MailHog provides us with a way to test and develop emails during local development by catching all the emails sent by the application and sending them to the service installed using Docker
---

# MailHog Support

## Introduction

MailHog provides us with a way to test and develop emails during local development by catching all the emails sent by
the application and sending them to the service installed using Docker.

:::caution

MailHog can be installed using Docker, by following the [Docker Support Guide](/docs/using-docker).

:::

### Enabling MailHog Support

```php title="config.php"
<?php

//highlight-next-line
use WPN\Plugins\Mailhog;

return [
    'plugins' => [
        //highlight-next-line
        Mailhog::class,
    ]
];
```