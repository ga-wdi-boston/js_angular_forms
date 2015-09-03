## Angular Forms



## Objectives

* Learn how to use the Angular directives for creating forms.
* Know how Angular forms can be validated, client-side validation.


## Demo

### Setup

Install angular.

```bower install```


##### All code will be included in the form.html.
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

The done version is in ``simple_input_form_done.html``

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="bower_components/angular/angular.js"></script>
  </head>

  <body ng-app="myapp">

    <div ng-controller="MyController as ctrl" >
      <form>
        <!-- Bind the input field to the myForm.firstName -->
        <input type="text" name="firstName" ng-model="ctrl.myForm.firstName"> First name <br/>
        <!-- Bind the input field to the myForm.lastName -->
        <input type="text" name="lastName"  ng-model="ctrl.myForm.lastName"> Last name <br/>
      </form>

      <div>
        <!-- Just show the models/properties bound to the input field -->
        {{ctrl.myForm.firstName}} {{ctrl.myForm.lastName}}
      </div>
    </div>

    <script>
      angular.module("myapp", [])
      .controller("MyController", function() {
      this.myForm = {};
      // init the name
      this.myForm.firstName = "Jakob";
      this.myForm.lastName  = "Jenkov";
      } );
    </script>

  </body>
</html>
```

## Lab

Create an index.html and add Customer Name input field. *Pretty like above*

### Create a couple of checkboxes.

The done version is in ``simple_checkbox_form_done.html``

```html
...
  	Sign Aggreement: <input type="checkbox" ng-model="ctrl.myForm.signedAgreement">
   <br/>

	Wants to receive the newsletter: <input type="checkbox" ng-model="ctrl.myForm.wantNewsletter" ng-true-value="'YES'" ng-false-value="'NO'" >        

<p>Signed Agreement: {{myForm.signedAgreement}}</p>
<p>Wants Newsletter: {{myForm.wantsNewsLetter}}</p>
...
```

**And the javascript model properties for the checkboxes.**

This will set the initial values for the checkboxes.

```javascript
...
this.myForm.signedAgreement = false;
this.myForm.wantsNewsLetter = 'YES';
...
```

## Lab

In index.html add Customer Education Level checkboxes. One for High School, one each for Associates, Bachelor, Master and Doctorate degrees.

### Create a couple of radio buttons.

Done version is in ``simple_radio_form_done.html``

```html
...
<fieldset>
  <legend>Newsletter</legend>
  Daily <input type="radio" ng-model="ctrl.myForm.whichNewsLetter" value="dailyNews"/>
  <br/>
  Weekly <input type="radio" ng-model="ctrl.myForm.whichNewsLetter" value="weeklyNews"/>
  <br/>
  Monthly <input type="radio" ng-model="ctrl.myForm.whichNewsLetter" value="monthlyNews"/>
  <br/>
  </fieldset>
...  
  <p>Which Newsletter: {{ctrl.myForm.whichNewsLetter}}</p>

```

Update the javascript. 

```javascript
	this.myForm.whichNewsLetter = 'weeklyNews';
```

## Lab

Add to the index.html Customer Gender radio buttons, one for male and one for female.

### Create a select/drop down.

Here we are going to hardcode the drop down options.

The done version is in ``simple_select_form_done.html``

```html
...
  <label for="car-model">Select Car Make</label>
  <select id="car-model" ng-model="ctrl.myForm.car">
    <option value="nissan">Nissan</option>
    <option value="toyota">Toyota</option>
    <option value="fiat">Fiat</option>
  </select>
...
  <p>Selected Car: {{ctrl.myForm.car}}</p>
...
```

```javascript
 // The default selected car is nissan
 this.myForm.car = 'nissan';
```

## Lab

Add to the index.html Customer current mode of tranportation, Bus, Train, Auto, Bicycle, Motorcycle using a select field. 

Can only choose one. 

### Generate the select options dynamically.

Generate the options from an array that contains an object literal for each option.  

This object literal will have two properties. An ``id`` for the option id and name ``property`` for the option name.

The done version is in ``complex_select_form_done.html``

```html
...
  <label for="car-model">Select Car Make</label>
  <select id="car-model" ng-model="ctrl.myForm.car" 
  ng-options="obj.id as obj.name for obj in ctrl.myForm.options">
  </select>
...
```

**Add the javascript**  

```javascript  
	...
   this.myForm.options = [
      { id : "nissan", name: "Nissan" },
      { id : "toyota", name: "Toyota" },
      { id : "fiat"  , name: "Fiat" }
    ];
  });
```

## Lab

Same as above but generate the options.

### Create option groups.

This will group the Car Models by either domestic or foreign manufactorers.

Add a ``group by obj.type`` the expression.

The done version is in ``complex_select2_form_done.html``


```html
...
  <select id="car-model" ng-model="ctrl.myForm.car" ng-options="obj.id as obj.name group by obj.type for obj in ctrl.myForm.options" >
    <option value="">Please choose a car</option>
  </select>
...  
```

Create another property for each car model named ``type``.

```javascript
this.myForm.options = [
      { id : "nissan", name: "Nissan", type: 'foreign' },
      { id : "toyota", name: "Toyota", type: 'foreign' },
      { id : "fiat"  , name: "Fiat", type: 'foreign' },
      { id : "ford"  , name: "Ford", type: 'domestic' },
      { id : "chevy"  , name: "Chevolet", type: 'domestic' }
      ];
      });
```

## Lab

Same as above but generate options types.


### Add min/max validations.

This will add the ng-minlength and ng-maxlength attributes to the first and last name fields.

The model associated with each will NOT be updated unless the field is **valid**.

The done version is in ``length_valid_form_done.html``

```html
<input type="text" name="firstName" ng-model="ctrl.myForm.firstName" ng-minlength="2" ng-maxlength="15"> First name <br/>

<input type="text" name="lastName"  ng-model="ctrl.myForm.lastName" ng-minlength="4" ng-maxlength="10"> Last name <br/>
```

## Lab

Add min/max validations to the customer name.

And create a customer city input field.



### Use Regular Expressions to validate an age.

The regular expression, regex, will validate that the age must be between 1 and 115 inclusive.

[Regular Expression Tutorial](http://www.regular-expressions.info/tutorial.html)

The done version is in regexp_valid_form_done.rb.

```html

<input type="number" name="age"  ng-model="ctrl.myForm.age" ng-pattern="/^\d{1,3}$/" min=1 max=115>Age<br/>
        <br/>
```

## Lab

Add a customer email field and use a regular expression to validated it.


### Validate required fields.

We will require that a first and last name be entered. 

>> Note that we can use the HTML5 ``required`` attribute OR the Angular ``ng-required`` attribute.

Done file is ``required_valid_form_done.html``

```html
<!-- Angular will check for the HTML5 required attribute, or you can use ng-required -->
<input type="text" name="firstName" ng-model="ctrl.myForm.firstName" ng-minlength="2" ng-maxlength="15" required > First name <br/>

<input type="text" name="lastName"  ng-model="ctrl.myForm.lastName" ng-minlength="4" ng-maxlength="10" ng-required> Last name <br/>
```

## Lab

Make customer email and name required.

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

 <input type="text" name="firstName" ng-model="myForm.firstName" ng-minlength="2" ng-maxlength="15" required ng-class="ctrl.myForm.getFormFieldCssClass(myFormNg.firstName)"> First name <br/>

<input type="text" name="lastName"  ng-model="myForm.lastName" ng-minlength="4" ng-maxlength="10" ng-required ng-class="ctrl.myForm.getFormFieldCssClass(myFormNg.lastName)"> Last name <br/>
  
```

## Documentation

[Angular JS Forms](http://tutorials.jenkov.com/angularjs/forms.html)

[AngularJS](https://angularjs.org/)

[API Documentation](https://docs.angularjs.org/api)

This is like the $.ajax in JQuery.  
[Ajax HTTP Service](https://docs.angularjs.org/api/ng/service/$http) 