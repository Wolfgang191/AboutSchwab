


<!doctype html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>contact form response</title>

  <link rel="stylesheet" href="styles.css">
</head>

<body>

<p>Values from Form</p>
<hr>
<br><br>

Welcome <?php echo $_POST["firstname"]; ?><br>Your email address is: <?php echo $_POST["email"]; ?>

Fav brand: <?php echo $_POST["brand"]; ?><br>Reason for collecting: <?php echo $_POST["collect"]; ?>

<br><hr>
<a href="contact.html"> Back to form</a>

</body>
</html>

