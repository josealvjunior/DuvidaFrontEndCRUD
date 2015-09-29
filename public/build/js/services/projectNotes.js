angular.module('app.services')
.service('ProjectNotes', ['$resource', 'appConfig', function($resource,appConfig){
        return $resource(appConfig.baseUrl + '/projects/:id/notes', {id: '$id'},{

        });
    }])