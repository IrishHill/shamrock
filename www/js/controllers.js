angular.module('benefitsApp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('HomeCtrl', function($scope, $state) {

  // main home data
  $scope.listings = [
    { title: 'Sonoma Bundle', selectedListing: false, image_url: './img/1118.jpeg', body: 'Your spending budget is low.', notifications: 1, alert: true },
    { title: 'Napa Bundle', selectedListing: false, image_url: './img/1566.jpeg', list: true },
    { title: 'Santa Cruz Bundle', selectedListing: false, image_url: './img/2439.jpeg', advice: true, 'subTitle': '$1500 paid vacation with Capital One', body: 'Enjoy a nice vacation with your usage of Capital One rewards card.' }
  ];
  $scope.discoveries = [
    { title: 'Sonoma', image_url: './img/61981fc1_original.jpg', body: 'Your spending budget is low.', notifications: 1, alert: true },
    { title: 'Napa', image_url: './img/61981fc1_original.jpg', list: true },
    { title: 'Santa Cruz', image_url: './img/61981fc1_original.jpg', advice: true, 'subTitle': '$1500 paid vacation with Capital One', body: 'Enjoy a nice vacation with your usage of Capital One rewards card.' }
  ];

  // select listing
  $scope.selectListing = function(listing) {
    listing.selectedListing = !listing.selectedListing;
  }

  // go to listing
  $scope.go = function(listing) {
    $state.go('home.listing', {listing: listing});
  }
  
  // main home function
  $scope.voiceTest = function() {
    try {     
      ApiAIPlugin.requestVoice({},
        function (response) {
            console.log(JSON.stringify(response));
            var query = response.result.resolvedQuery;
            var to = query.metadata.parameters.to;
            alert(query);
            alert(to);
        },
        function (error) {
            // place your error processing here 
            alert(error);
        });                
    } catch (e) {
        alert(e);
    }
  }

})

.controller('ListingCtrl', function($scope, $state, $stateParams) {
  
  $scope.listing = $stateParams.listing;

})

.controller('LoginCtrl', function($scope, $state, $ionicViewService) {
  
  $ionicViewService.nextViewOptions({
            disableAnimate: true,
            disableBack: true
          });

  $scope.login = function() {
    $state.go('app.dashboard');
  }

})

.controller('DashboardCtrl', function($scope) {
  $scope.cards = [
    { title: 'Alerts', 'subTitle': '', body: 'Your spending budget is low.', notifications: 1, alert: true },
    { title: 'Notifications', 'subTitle': '', list: true },
    { title: 'Advice', advice: true, 'subTitle': '$1500 paid vacation with Capital One', body: 'Enjoy a nice vacation with your usage of Capital One rewards card.' }
  ];
})

.controller('CompanyCtrl', function($scope, DataFactory) {
  // DataFactory.company().then(function(company) {
  //   console.log(company)
  // });
  $scope.company = {'logo': 'g.jpg', 'name': 'Google', 'location': 'Amphitheatre Parkway Mountain View'}
})

.controller('ServicesCtrl', function($scope) {
  $scope.cards = [
    { title: 'Alerts', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Activity', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Recommend', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' }
  ];
})

.controller('BenefitsCtrl', function($scope) {
  $scope.cards = [
    { title: 'Alerts', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Activity', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Recommend', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' }
  ];
})

.controller('EmployeesCtrl', function($scope, DataFactory) {
  // DataFactory.employees().then(function(employees) {
  //   if(employees.data) {
  //     $scope.employees = employees.data.Employee;
  //   }
  // });
  $scope.employees = [{
                   name: "John Wilson",
                   title: "Jr Engineer",
                   hired: "10/12/16",
                   imgSrc: "1.jpg"
               },
               {
                   name: "Sam Jackson",
                   title: "Jr Engineer",
                   hired: "10/12/16",
                   imgSrc:"2.jpg"
               },
               {
                   name: "Ryan Reynolds",
                   title: "Jr Engineer",
                   hired: "10/12/16",imgSrc:"3.jpg"
               },
               {
                   name: "Luke Wilson",
                   title: "Jr Engineer",
                   hired: "10/12/16",imgSrc:"4.jpg"
               },
               {
                   name: "Frank Manja",
                   title: "Jr Engineer",
                   hired: "10/12/16",
                   imgSrc:"5.jpg"
               },
               {
                   name: "Holy Capone",
                   title: "Jr Engineer",
                   hired: "10/12/16",
                   imgSrc:"6.jpg"
               },
               {
                   name: "Kye Holy",
                   title: "Jr Engineer",
                   hired: "10/12/16",
                   imgSrc:"7.jpg"
               },
               {
                   name: "Molly Capone",
                   title: "Jr Engineer",
                   hired: "10/12/16",
                   imgSrc:"8.jpg"
               },
               {
                   name: "Reynolds Capone",
                   title: "Jr Engineer",
                   hired: "10/12/16",
                   imgSrc:"9.jpg"
               },{
                   name: "Molly Engineer",
                   title: "Jr Engineer",
                   hired: "10/12/16",
                   imgSrc:"10.jpg"
               }]
})

.controller('ComplianceCtrl', function($scope) {
  $scope.cards = [
    { title: 'Alerts', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Activity', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Recommend', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' }
  ];
})

.controller('SettingsCtrl', function($scope) {
  $scope.cards = [
    { title: 'Alerts', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Activity', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Recommend', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' }
  ];
})

.controller('HelpCtrl', function($scope) {
  $scope.cards = [
    { title: 'Alerts', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Activity', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' },
    { title: 'Recommend', body: 'bun tacos vice occupy narwhal slow-carb four dollar toast. Microdosing health goth blue bottle, four dollar toast narwhal PBR&B post-ironic celiac fap tofu. Four dollar toast selfies flexitarian ethical, blue bottle +1 letterpress intelligentsia food truck.' }
  ];
})

.controller('LogoutCtrl', function($scope) {
})