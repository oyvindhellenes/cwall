'use strict';

angular.module('webApp')
  .controller('MainCtrl',['$scope', function ($scope) {
    $scope.messages = []
    $scope.msg = {
    	value: ""
    }

    var conn = new WebSocket("ws://localhost:8000/ws")

    conn.onclose = function(e){
    	$scope.$apply(function(){
    		$scope.messages.push("DISCONNECT")
    	})
    }
    conn.onopen = function(e){
    	$scope.$apply(function(){
    		$scope.messages.push("CONNECTED")
    	})

    }
    conn.onmessage = function(e){

    	console.log('msg' + e.data)

    	$scope.$apply(function(){
    		$scope.messages.push(e.data)
    	})

    }

    $scope.send = function(){
    	for (var i in $scope.messages){
    		console.log(i + ': ' + $scope.messages[i])
    	}
    	conn.send($scope.msg.value)
    	$scope.msg.value = ''
    }
  }]);
