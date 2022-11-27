---
sidebar_position: 3
description: AJAX routes within WPN can use WordPress' nonce functionality to protect a route
---

# CSRF Protection

AJAX routes within WPN can use WordPress' nonce functionality to protect a route. 

By default, AJAX callbacks will check the nonce they receive by calling `wp_verify_nonce( $_REQUEST['_token'], 'theme-nonce' )`. To disable this you
should register routes with `true` as the third parameter.

```php
Route::create('get_posts', GetPostsController::class, withoutNonce: true);
```

:::tip Sending Token

If routes are protected by nonces then `_token` should be inside the request body with the response from `wp_create_nonce('theme-nonce')`

:::

## Localize nonce token

If you are registering your JavaScript files using WPN then you can localize the token by calling the `localize` method.

```php
Script::load( 'js/app.js' )
		      ->localize( 'theme', [ ...Script::ajaxData() ] );	      
```

The `token` and `ajax url` are now available in your `app.js` script in `theme` variable.

## Example fetch request

```js
let formData = new FormData();
formData.append('action', 'get_posts');
formData.append('token', theme.token);

const response = fetch(theme.ajaxurl, {
  method: 'POST',
  credentials: 'same-origin',
  body: formData
}).catch((error) => {
  console.log(error)
}).then(
  (response) => response.json()
).then((response) => {
  console.log(response);
})
```