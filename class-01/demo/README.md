# 201d33-class1


## HTML

html is for structring the page:

```html
<!-- version 5 of html -->
<!DOCTYPE html>
<html>

    <head>
       <title>
       review
       </title>
    </head>

    <body>
       <header>
       </header>
       <main>
       </main>
       <footer>
       </footer>
    </body>
</html>
 






```


## CSS
cascading style sheet
and its for styling

-inline:

```html

<p style="color:red;background-color:black;">
text
</p>

```


-internal style:
in the same html file

```html
  <head>
       <title>
       review
       </title>

       <style>
       p{
           color:red;
       }

       </style>
    </head>


```


-external style

creating a new css file "style.css"


first link in html
```html
  <head>
       <title>
       review
       </title>

       <link rel="stylesheet" href="style.css">


    </head>


```


```css
p{
    color:red;
}
```



## JavaScript
interaction and make it more dynamic:

```html
<script>
 var name="samer"
</script>
```

or make a file and link it


```html
<script src="app.js">

</script>
```

