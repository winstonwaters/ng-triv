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
