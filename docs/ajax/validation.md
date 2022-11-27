---
sidebar_position: 2
description: It is most common to use the validate method available on all incoming HTTP requests. However, we will discuss other approaches to validation as well
---

# Validation

## Introduction 
WPN provides several different approaches to validate your application's incoming data. It is most common to use the 
validate method available on all incoming HTTP requests. However, we will discuss other approaches to validation as well.

WPN includes a wide variety of convenient validation rules that you may apply to data, 
even providing the ability to validate if values are unique in a given database table. 
We'll cover each of these validation rules in detail so that you are familiar with all of WPN's validation features.

## Quickstart

To learn about WPN's powerful validation features, let's look at a complete example of validating a form 
and displaying the error messages back to the user. By reading this high-level overview, 
you'll be able to gain a good general understanding of how to validate incoming request data using WPN:

### Defining the route

First we are assuming that you have created the following route:

```php 
Route::create('get_posts', GetPostsController::class);
```

### Define the route callback

```php
<?php

namespace App\Http\Controllers;

use WPN\Http\Callback;
use WPN\Http\Response;

class GetPostsController implements Callback
{
    public function __invoke(): Response
    {
       //
    }
}
```

### Writing the validation logic
Now we are ready to fill in our store method with the logic to validate the new blog post. 
To do this, we will use the validate method provided by the `WPN\Support\Request` object. 
If the validation rules pass, your code will keep executing normally; however, 
if validation fails, an `WPN\Validation\ValidatorException` exception will be thrown 
and the proper error response will automatically be sent back to the user.

To get a better understanding of the validate method, let's jump back into the request:

```php title="GetPostsRequest.php"
<?php

namespace App\Http\Requests;

use WPN\Support\Request;

class GetPostsRequest extends Request
{
    protected function rules(): array
    {
        return [
            'post_id' => ['required', 'int'],
        ];
    }
}
```

As you can see, the validation rules are passed into the rules array, using the field name as the key. 
Don't worry - all available validation rules are [documented](/docs/ajax/validation#available-validation-methods). Again, if the validation fails, the proper response will 
automatically be generated. If the validation passes, our controller will continue executing normally.

### Responses

Validation failures will return a `400` status response along with the fields that failed validation.

#### Validation failure response

```json
{
   "status":400,
   "failures":{
      "id":[
         "id is a required field"
      ]
   }
}
```

### Modify validation failure messages

Each rule has its own validation failure message, and you may also set a failure message for a field failing a specific
validation rule

In your request you may overwrite the `messages` function of the `WPN\Http\Request` class. In this example we are overriding
the message for the `required` rule on **all** fields. We are also overriding the `string` rule validation of the `author`
field.

:::tip Get field name in validation message

**%s** in validation rule messages will be converted to the fields name.

:::

```php title="GetPostsRequest.php"
<?php

namespace App\Http\Requests;

use WPN\Http\Request;

class GetPostsRequest extends Request {
	public function rules(): array {
		return [
			'id'     => [ 'required' ],
			'author' => [ 'required', 'string' ]
		];
	}

	protected function messages(): array {
		return [
			...parent::messages(),
			'required'      => '%s has not been filled in!',
			'author.string' => 'The authors name must be a string'
		];
	}
}
```

## Available Validation Methods

- [required](/docs/ajax/validation#required)
- [string](/docs/ajax/validation#string)
- [email](/docs/ajax/validation#email)
- [phone](/docs/ajax/validation#phone)
- [bool](/docs/ajax/validation#bool)
- [date](/docs/ajax/validation#date)
- [numeric](/docs/ajax/validation#number)

### Required

The field under validation must be present in the input data and not empty. A field is considered "empty" if one of the following conditions are true:

- The value is `null`.
- The value is an empty string.

### String

The field under validation must be a `string`. If you would like to allow the field to also be null, you should assign the `nullable` rule to the field.

### Email

The field under validation must be formatted as an email address.

### Phone

The field under validation must be formatted as a phone number.

### Bool

The field under validation must be able to be cast as a `boolean`. Accepted input are `true`, `false`, `1`, `0`, `"1"`, and `"0"`.

### Date

The field under validation must be a valid, non-relative date according to the `strtotime` PHP function.

### Numeric

The field under validation must be `numeric`.