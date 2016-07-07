(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let app = angular.module('TriviaGame', []);

require('./game')(app);

},{"./game":2}],2:[function(require,module,exports){
module.exports = function(app) {
    app.controller('GameController', function($scope, $http) {

        $scope.questionHistory = [];
        $scope.playeranswer = "";
        $scope.answer = "";
        $scope.score = 0;


        $scope.newQuestion = {
            question: 'Your question.. ',
            answer: 'Correct Answer',
            value: 0,
            category: 'Category',
        };

        //storing player not working
        $scope.player = {
            name: 'Unknown Player',
        };

        $scope.ask = function() {
            console.log('ask me a question!');
            $http({
                method: 'GET',
                url: 'http://jservice.io/api/random',
            }).then(function(response) {
                let newQuestion = response.data[0];
                $scope.newQuestion = newQuestion.question;
                console.log(response.data[0]);

                $scope.questionHistory.push({
                    question: newQuestion.question
                });

            });
        };
        $scope.ask();

        $scope.submitA = function() {
          $scope.answer = $scope.newQuestion.answer;
          if ($scope.playeranswer === $scope.newQuestion.answer) {
            console.log('right answer');
            let addNum = Number($scope.newQuestion.value + $scope.score);
            $scope.score = addNum;
          } else {
            console.log('try again');
            var subNum = Number($scope.score - $scope.newQuestion.value)
            $scope.score = subNum;
          }
        }
    });
};

},{}]},{},[1])