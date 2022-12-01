---
sidebar_position: 1
description: Services within the WordPress Neon framework and snippets of code that can be enabled and disabled depending on your requirements
pagination_label: Optional Services
pagination_prev: rest-api/creating-routes
---

# Using Services

## Introduction

Services within the WordPress Neon framework and snippets of code that can be enabled and disabled depending on your
requirements. They are intended to speed up development by giving you an implementation of the code modern themes include
everytime, such as an options' menu with the theme logo, SVG support and so on.

## Plugins

:::tip Enabling WPN Services

Services are enabled by referencing the fully qualified class name in the applications' config file, in the `plugins` block.
Services are registered during the applications' initialisation method called in the `AppServiceProvider`.

:::

* [Mailhog](mailhog)
* [SVG Support](svg-support)
* [Custom Taxonomy Widget](custom-taxonomy-widget)