<!DOCTYPE >
<html ng-app="demoApp">
<head>
    <title>Button directive from attribute for AngularJS</title>
    <link rel="stylesheet" type="text/css" href="../../jqwidgets/styles/jqx.base.css" />
    <script type="text/javascript" src="../../scripts/angular.min.js"></script>
    <script type="text/javascript" src="../../scripts/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="../../jqwidgets/jqxcore.js"></script>
    <script type="text/javascript" src="../../jqwidgets/jqxbuttons.js"></script>
    <script type="text/javascript" src="../../jqwidgets/jqxangular.js"></script>
    <script type="text/javascript" src="../../scripts/demos.js"></script>
    <script type="text/javascript">
        var demoApp = angular.module("demoApp", ["jqwidgets"]);
        demoApp.controller("demoController", function ($scope) {
        });
    </script>
</head>
<body>
    <div ng-controller="demoController">
        <jqx-button></jqx-button>
    </div>
</body>
</html>