<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>PAN Details</title>

    <!-- Bootstrap -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.css">

  </head>
  <body>
    <div class="container">        
        <div class="row">
            <div class="col-xs-6">
                <h2> PAN Card</h2>

                <label for="pan">PAN</label>
                <input type="text" class="form-control" id="pan" >
                <div id="panError" class="text-danger" ></div><br>

                <label for="name">Company Name</label>
                <input type="text" class="form-control" id="name" ><br>

                <label for="date">Date</label>
                <input type="date" class="form-control" id="date" ><br>

                <label for="file-format">File Text Format</label>
                <div id="file-format">PAN-ABCAADSA1234~<br>
                    Name-Company Name~<br>   
                    Date-1994-12-07
                </div>

                <!-- <textarea class="form-control" rows="10" cols="10" id="fileContent"></textarea> -->
                <!-- <div class="form-group">
                    <input type="submit" class="btn btn-default" id="submit" value="submit">
                </div>  -->               
            </div>    

            <div class="col-xs-6">
                <br>
                <label for="file-upload">File Upload</label>
                <input type="file" id="file-upload"><br>                
            </div>   

        </div>      
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="bootstrap/js/bootstrap.min.js"></script>

    <script type="text/javascript" src="app.js"></script>
    
  </body>
</html>