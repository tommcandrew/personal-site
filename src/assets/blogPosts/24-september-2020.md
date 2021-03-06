# Uploading files with Node

_24 September 2020_

Let's say you have a HTML form as part of your server-side rendered Node/Express application and it just has input for text:

```javascript
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <button type="submit">Submit</button>
</form>
```

&nbsp;

And it posts to this Express endpoint:

```javascript
app.use(express.urlencoded({ extended: false }));

app.post("/submit", (req, res) => {
  console.log(req.body);
});
```

&nbsp;

What if you needed to allow users to upload a file through this form too? Well, first of all, you'll need to add an input element to the form with type of "file":

```javascript
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <input type="file" name="myfile" />
  <button type="submit">Submit</button>
</form>
```

&nbsp;

This will indeed allow you to select a file from your computer but, if you try to access it on the body object after submitting the form, you'll find it's undefined. When a GET or POST request is made from a form, a HTTP request is made to the server. Typically, forms send text data and, as HTTP requests must only contain ASCII characters, this data is encoded before it's sent. The default method of encoding used for forms is called **url encoding** (also known as **percent encoding**). This is applied automatically because the default value of the Content-Type header on the request will be **application/x-www-form-urlencoded**. This type of encoding is suitable for text but you won't be able to send a file in this way because that will be binary data.

Instead, you'll need to set the Content-Type of the request to **multipart/form-data** which will allow you to send both text and binary data. The way to do this is by setting the **enctype** attribute of the form:

```javascript
<form action="/submit" method="POST" enctype="multipart/form-data">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <input type="file" name="myfile" />
  <button type="submit">Submit</button>
</form>
```

&nbsp;

To allow Express to access the data attached to a standard request body object (i.e. url encoded), you need to use the express.urlencoded() middleware. Similarly, to allow it to access the data sent with a multipart/form-data request, you need to use middleware. Node/Express does not support file uploads by default but there are many npm packages for this purpose. In this example, I'm going to use **express-fileupload**. After downloading the package, require it and set the middleware before the endpoint:

```javascript
const fileUpload = require("express-fileupload");
app.use(fileUpload());
```

&nbsp;

The uploaded file should now be accessible from **req.files**.

If, for some reason, you want to make the request to the server in a function separate from the form itself (i.e. a callback to an event listener) in a separate JavaScript file, add the submit event listener to the form:

```javascript
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
```

&nbsp;

In the callback function, before sending the request, you need do a little bit of manual work that wasn't necessary before. First, grab the values you need from the form (the file will be the first item in the **files** array on the file input element). Then create an instance of the FormData class (this is just an object that you'll attach the data to). Then attach the data using the **append** method on this object. Finally, set the Content-Type header to **multipart/form-data**. In this case you'll do it by passing in an options object with the request.

```javascript
function handleSubmit(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const myfile = e.target.myfile.files[0];
  var formData = new FormData();
  formData.append("name", name);
  formData.append("myfile", myfile);
  axios
    .post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
```

&nbsp;

After sending the request, the Express endpoint should be able to access the data just as before.
