angular.module('app.controllers')
    .controller('ProjectNotesListController',['$scope','ProjectNotes',function($scope,ProjectNotes){
        $scope.projectNotes = ProjectNotes.query();
    }]);