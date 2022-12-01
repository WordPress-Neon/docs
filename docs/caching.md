---
sidebar_position: 1
description: Working with the WPN Caching interface
pagination_prev: post-types
pagination_label: Caching
---

# Caching

## Introduction

Some data retrieval or processing tasks performed by your application could be CPU intensive or take several 
seconds to complete. When this is the case, it is common to cache the retrieved data for a time so it can be retrieved 
quickly on subsequent requests for the same data.

Thankfully, WPN provides an expressive, unified API for WordPress transient feature, allowing you to take advantage 
of their blazing fast data retrieval and speed up your web application.

## Storing items in the cache

You may use the `set` method on the `\WPN\Cache` class to store items in the cache:

```php
use WPN\Cache;

Cache::set('key', 'value', $seconds = 10);
```

If the storage time is not passed to the `set` method, the item will be stored indefinitely:

```php
use WPN\Cache;

Cache::set('key', 'value');
```

Instead of passing the number of seconds as an integer, you may also use the WPN defined constants:

```php
use WPN\Cache;

Cache::set('key', 'value', 2 * SECONDS_IN_AN_HOUR);
```

### Storing values from closures

The `rememberForver` method may be used to store the resulting value from a Closure in the cache permanently.
Since these items will not expire, they must be manually removed from the cache using the `delete` method:

```php
use WPN\Cache;

Cache::rememberForever( 'key', function (): string {
    return 'Hello' . 'World';
} );
```

If you want the resulting value to expire, you can use the `remember` method and an integer for the number of seconds as 
the second parameter.

```php
use WPN\Cache;

$value = Cache::remember( 'key', 2 * SECONDS_IN_AN_HOUR, function (): string {
    return 'Foo' . 'Bar';
} );
```

:::info Transient Storage

Under the hood, WordPress stores transients in the options table, prefixed with `_transient`, resulting in a key like
`_transient_key`. This means a database query is still required to get the value from the cache and caching is best used
when multiple database queries are required. For example, an ACF repeater field.

:::

## Retrieve an item from the cache

The Cache's `get` method is used to retrieve items from the cache. If the item does not exist in the cache or 
has expired, `false` will be returned.

```php
use WPN\Cache;

Cache::get('key');
```

You may also use the `remember` function to retrieve the value from either the cache or the Closure provided.

```php
use WPN\Cache;

$value = Cache::remember( 'key', 2 * SECONDS_IN_AN_HOUR, function (): string {
    return 'Foo' . 'Bar';
} );
```
