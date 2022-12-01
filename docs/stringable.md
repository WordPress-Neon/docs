---
sidebar_position: 1
description: Working with strings in WPN.
pagination_label: String Functions
---

# String Functions

## Introduction

The `WPN\Support\Stringable` class provides various methods for manipulating string values.

## Available Methods

- [Headline](/docs/stringable#headline)
- [Title](/docs/stringable#title)
- [Slug](/docs/stringable#slug)
- [Replace](/docs/stringable#replace)
- [ucsplit](/docs/stringable#ucsplit)


### Headline

The `Stringable::headline` method will convert strings delimited by casing, hyphens, or underscores into a 
space delimited string with each word's first letter capitalized:

```php
use WPN\Support\Stringable;

$headline = Stringable::headline('foo_bar');
// Foo Bar

$headline = Stringable::headline('helloWorld');
// Hello World
```

### Title

The `Stringable::title` method converts the given string to title case:

```php
use WPN\Support\Stringable;

$converted = Stringable::title('a lowercase title to convert');
// A Lowercase Title To Convert

```

### Slug

The `Stringable::slug` method generates a URL friendly "slug" from the given string:

```php
use WPN\Support\Stringable;

$slug = Stringable::slug('WordPress Neon');
// wordpress-neon
```

### Replace

The `Stringable::replace` method replaces a given string within the string:

```php
use WPN\Support\Stringable;
 
$replaced = Stringable::replace('1.0', '2.0', 'WordPress Neon 1.0');
// WordPress Neon 2.0
```

### ucsplit

The `WPN\Support\ucsplit` method splits the given string into a collection by uppercase characters:

```php
use WPN\Support\Stringable;

$array = Stringable::ucsplit('Foo Bar');
// array('Foo', 'Bar');
```
