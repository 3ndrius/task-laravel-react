<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Yellow Octopus - task</title>
        <meta name="description" content="">

         <!-- Styles -->
        <link rel="stylesheet" href="{{mix('css/app.css')}}?v=<?php echo date('Y-m-d\TH:i:sO') ?>">
    </head>
    <body>
        <div id="app">
        </div>
        <script src="{{mix('js/app.js')}}?v=<?php echo date('Y-m-d\TH:i:sO') ?>" ></script>
    </body>
</html>
