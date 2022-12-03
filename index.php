<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <h1>List of employees</h1>
    <br>

    <table class = "table">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $servername = "localhost";
            $username = "root";
            $password = "";
            $database = "temp";

            $connection = new mysqli($servername, $username, $password, $database);

            if($connection->connect_error)
            {
                die("Connection failed:" .$connection->connect_error);
            }
            
            $sql = "SELECT * FROM employees";
            $result = $connection->query($sql);

            if(!$result)
            {
                die("Invalid query: " .$connection->error);
            }

            while($row = $result->fetch_assoc())
            {
                echo 
                "<tr>
                <td>" . $row['id'] . "</td>
                <td>" . $row['first_name'] . "</td>
                <td>" . $row['last_name'] . "</td>
                <td>" . $row['email'] . "</td>
                </tr>";
            }

            
            ?>
        </tbody>


    </table>
    
</body>
</html>