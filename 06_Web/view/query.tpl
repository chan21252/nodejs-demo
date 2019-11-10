<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>成绩查询系统</title>
</head>
<body>
    <form action="/score" method="POST">
        <label for="code">请输入考号：</label>
        <input type="text" id="code" name="code" required="required"><br/>
        <input type="submit" value="查询">
    </form>
</body>
</html>