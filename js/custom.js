const URL="https://covid19.mathdro.id/api";


var app=angular.module("myApp",[]);


 app.controller("myctrl",function($scope,$http){
    $scope.title="Stay Home Stay Safe";
     console.log("api loaded");
     //calling api
     $http.get(URL).then((response)=>{
         //success
      
         console.log(response.data);
         $scope.all_data=response.data;
     },(error)=>{
         console.log(error);
     } );
 //country
    $scope.get_c_data=()=>{
        let country=$scope.c;
        if(country==""){
            $scope.c_data=undefined;
            return;
        }
        $http.get(`${URL}/countries/${country}`)
            .then((response)=>{
            console.log(response.data);
            $scope.c_data=response.data;
        },(error)=>{
            console.log(error);
        }
        );
    }; 
 });