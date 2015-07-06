## Angular Forms



## Objectives

* Learn how to use the Angular directives for creating forms.
* Know how Angular forms can be validated, client-side validation.


## Demo

### Setup

Install angular.

```bower install```


##### All code will be included in the index.html.
_(Not great, but will get us through these simple demo files.)_

The below is a recap of this article, [Angular JS Forms](http://tutorials.jenkov.com/angularjs/forms.html).

Work thru these files in order. (See the *_done.html for finished versions)

* ``simple_input_form.html`` 
* ``simple_checkbox_form.html``    
* ``simple_radio_form.html``  
* ``simple_select_form.html``  
* ``complex_select_form.html``  
* ``complex_select2_form.html``  
* ``length_valid_form.html``  
* ``regexp_valid_form.html``  
* ``required_valid_form.html`  
* ``field_state_form.html``  


## Code Along

### Create a simple form

With a two text fields.

The done version is in ``simple_input_form.html``

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="bower_components/angular/angular.js"></script>
  </head>

  <body ng-app="myapp">

    <div ng-controller="MyController" >
      <form>
        <!-- Bind the input field to the myForm.firstName -->
        <input type="text" name="firstName" ng-model="myForm.firstName"> First name <br/>
        <!-- Bind the input field to the myForm.lastName -->
        <input type="text" name="lastName"  ng-model="myForm.lastName"> Last name <br/>
      </form>

      <div>
        <!-- Just show the models/properties bound to the input field -->
        {{myForm.firstName}} {{myForm.lastName}}
      </div>
    </div>

    <script>
      angular.module("myapp", [])
      .controller("MyController", function($scope) {
      $scope.myForm = {};
      // init the name
      $scope.myForm.firstName = "Jakob";
      $scope.myForm.lastName  = "Jenkov";
      } );
    </script>

  </body>
</html>

```

### Create a couple of checkboxes.

The done version is in ``simple_checkbox_form.html``

```html
...
Sign Agreement: 
<input type="checkbox" ng-model="myForm.signedAgreement" >

 Wants to recieve the newsletter: 
 <input type="checkbox" ng-model="myForm.wantsNewsLetter" ng-true-value="'yes'" ng-false-value="'no'">

...        

<p>Signed Agreement: {{myForm.signedAgreement}}</p>
<p>Wants Newsletter: {{myForm.wantsNewsLetter}}</p>
...
```

**And the javascript model properties for the checkboxes.**

This will set the initial values for the checkboxes.

```javascript
...
$scope.myForm.signedAgreement = false;
$scope.myForm.wantsNewsLetter = 'yes';
...
```

### Create a couple of radio buttons.

Done version is in ``simple_radio_form.html``

```html
...
<fieldset>
  <legend>Newsletter</legend>
  Daily <input type="radio" ng-model="myForm.whichNewsLetter" value="dailyNews"/>
  <br/>
  Weekly <input type="radio" ng-model="myForm.whichNewsLetter" value="weeklyNews"/>
  <br/>
  Monthly <input type="radio" ng-model="myForm.whichNewsLetter" value="monthlyNews"/>
  <br/>
  </fieldset>
...  
  <p>Which Newsletter: {{myForm.whichNewsLetter}}</p>

```

Update the javascript. 

```javascript
...
$scope.myForm.whichNewsLetter = 'weeklyNews';
```

### Create a select/drop down.

Here we are going to hardcode the drop down options.

The done version is in ``simple_select_form_done.html``

```html
...
  <label for="car-model">Select Car Make</label>
  <select id="car-model" ng-model="myForm.car">
    <option value="nissan">Nissan</option>
    <option value="toyota">Toyota</option>
    <option value="fiat">Fiat</option>
  </select>
...
  <p>Selected Car: {{myForm.car}}</p>
...
```

```javascript
 // The default selected car is nissan
 $scope.myForm.car = 'nissan';
```

### Generate the select options dynamically.

Generate the options from an array that contains an object literal for each option.  

This object literal will have two properties. An ``id`` for the option id and name ``property`` for the option name.

The done version is in ``complex_select_form.html``

```html
...
  <label for="car-model">Select Car Make</label>
  <select id="car-model" ng-model="myForm.car" 
  ng-options="obj.id as obj.name for obj in myForm.options">
  </select>
...
```

**Add the javascript**  

```javascript  
	...
  $scope.myForm.options = [
      { id : "nissan", name: "Nissan" },
      { id : "toyota", name: "Toyota" },
      { id : "fiat"  , name: "Fiat" }
    ];
  });
```

### Create option groups.

This will group the Car Models by either domestic or foreign manufactorers.

Add a ``group by obj.type`` the expression.

The done version is in ``complex_select2_form.html``


```html
...
  <select id="car-model" ng-model="myForm.car" ng-options="obj.id as obj.name group by obj.type for obj in myForm.options" >
    <option value="">Please choose a car</option>
  </select>
...  
```

Create another property for each car model named ``type``.

```javascript
$scope.myForm.options = [
      { id : "nissan", name: "Nissan", type: 'foreign' },
      { id : "toyota", name: "Toyota", type: 'foreign' },
      { id : "fiat"  , name: "Fiat", type: 'foreign' },
      { id : "ford"  , name: "Ford", type: 'domestic' },
      { id : "chevy"  , name: "Chevolet", type: 'domestic' }
      ];
      });
```

### Add min/max validations.

This will add the ng-minlength and ng-maxlength attributes to the first and last name fields.

The model associated with each will NOT be updated unless the field is **valid**.

The done version is in ``length_valid_form_done.html``

```html
<input type="text" name="firstName" ng-model="myForm.firstName" ng-minlength="2" ng-maxlength="15"> First name <br/>

<input type="text" name="lastName"  ng-model="myForm.lastName" ng-minlength="4" ng-maxlength="10"> Last name <br/>
```

### Use Regular Expressions to validate an age.

The regular expression, regex, will validate that the age must be between 1 and 115 inclusive.

[Regular Expression Tutorial](http://www.regular-expressions.info/tutorial.html)

The done version is in regexp_valid_form_done.rb.

```html

<input type="number" name="age"  ng-model="myForm.age" ng-pattern="/^\d{1,3}$/" min=1 max=115>Age<br/>
        <br/>
```

### Validate required fields.

We will require that a first and last name be entered. 

>> Note that we can use the HTML5 ``required`` attribute OR the Angular ``ng-required`` attribute.

Done file is ``required_valid_form.html``

```html
<!-- Angular will check for the HTML5 required attribute, or you can use ng-required -->
<input type="text" name="firstName" ng-model="myForm.firstName" ng-minlength="2" ng-maxlength="15" required > First name <br/>

<input type="text" name="lastName"  ng-model="myForm.lastName" ng-minlength="4" ng-maxlength="10" ng-required> Last name <br/>
```
### Add background color for valid/invalid fields.

Done file is ``field_state_form_done.html``.


```html

<head>
...
<style>
  /* green */
  .fieldValid {
  	background: #00ff00;
  }
  /* red */
  .fieldInvalid {
    background: #ff0000;
  }
</style>
</head>

<body>
....

<!-- Notice the method, myForm.getFormFieldCssClass -->
<form name="myFormNg">

 <input type="text" name="firstName" ng-model="myForm.firstName" ng-minlength="2" ng-maxlength="15" required ng-class="myForm.getFormFieldCssClass(myFormNg.firstName)"> First name <br/>

<input type="text" name="lastName"  ng-model="myForm.lastName" ng-minlength="4" ng-maxlength="10" ng-required ng-class="myForm.getFormFieldCssClass(myFormNg.lastName)"> Last name <br/>
  
```

## Lab 
Refactor the ``field_state_form`` to seperate the controller, view and css.

## Lab
#### Back End
Create a backend Rails API using the rails-api gem. It should return a set of people where each person has a first/last name, age, agreement status, newletter subscription status and car make the person is interested in. 

#### Front End
Show a list or table of all these people in the angular client side code.

Create new people using the form we worked on above. _(Add client and server side validations)_


## Documentation

[Angular JS Forms](http://tutorials.jenkov.com/angularjs/forms.html)

[AngularJS](https://angularjs.org/)

[API Documentation](https://docs.angularjs.org/api)

This is like the $.ajax in JQuery.  
[Ajax HTTP Service](https://docs.angularjs.org/api/ng/service/$http) 