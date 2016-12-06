/*
Module : example
Controllers : 
	-StoreController
	-PanelController
Directives :
	-productTitle
	-reviewForm
*/
(function(){
	//create angular module
	var app = angular.module('example',[]);
	//store controller
	app.controller('StoreController',function(){
		this.products = cars;
	});

	//cars object
	var cars = [
	 {
		model : 'BMW',
		description : 'Bayerische Motoren Werke AG (About this sound pronunciation (help·info); English: Bavarian Motor Works), commonly known as BMW or BMW AG, is a German automobile, motorcycle and engine manufacturing company founded in 1916.BMW is headquartered in Munich, Bavaria. It also owns and produces Mini cars, and is the parent company of Rolls-Royce Motor Cars. BMW produces motorcycles under BMW Motorrad. In 2012, the BMW Group produced 1,845,186 automobiles and 117,109 motorcycles across all of its brands. BMW is part of the "German Big 3" luxury automakers, along with Audi and Mercedes-Benz, which are the three best-selling luxury automakers in the world.[3][4]',
		spec:[
		{
			engineType: '2.0L I4',
			fuel:'17/25 mpg'
		}],
		price : '22000',
		images:[
		{
			full:'images/BMW.jpg',
			thumb:'images/BMWthumb.jpeg'
		}

		],
		review:[
		{
			stars:5,
			body:'BMW has been in the line-blurring business of late, with the original X5 "Sports Activity Vehicle" muddling the line between SUVs and sport sedans in 1999, the 5 Series Gran Turismo challenging what our definition of "Gran Turismo" means in 2009, and pretty, low-roofed four-doors like the 6 Series Gran Coupe and the fresh new 4 Series Gran Coupe broadening the meaning of the word "coupe."',
			author:'test@gmail.com'
		},
		{
			stars:1,
			body:"'BMW's all-new M3 Sedan is dynamically nearly identical to its two-door M4 Coupe sibling: a stopwatch reveals that both are sub-four-second cars to 60 miles per hour, a racetrack proves that the mechanical twins are equally as adept on a road course... '",
			author:'test@gmail.com'
		}
		],
		canPurchase:false,
		soldOut:true
	},

	{
		model : 'Mercedes',
		description : 'Mercedes-Benz (German pronunciation: [mɛʁˈt͡seːdəs ˈbɛnt͡s]) is a German automobile manufacturer, a multinational division of the German manufacturer Daimler AG. The brand is used for luxury automobiles, buses, coaches, and trucks. The headquarters of Mercedes-Benz is in Stuttgart, Baden-Württemberg, Germany.The name first appeared in 1926 under Daimler-Benz but traces its origins to Daimler-Motoren-Gesellschafts 1901 Mercedes and to Karl Benzs 1886 Benz Patent Motorwagen, which is widely regarded as the first gasoline powered automobile. Mercedes-Benzs slogan is "Das Beste oder nichts" (English: "The best or nothing"). Mercedes-Benz is part of the German Big 3 luxury automakers, along with Audi and BMW, which are the best selling luxury automakers in the world.[1]',
		spec:[
		{
			engineType: '2.0L I4',
			fuel:'10/25 mpg'
		}],
		price : '20000',
		images:[{
			full:'images/MER.jpg',
			thumb:'images/MERthumb.jpeg'
		}],
		review :[
		{
			stars:3,
			body:'Mercedes-Benz has made reviewing the B-Class Electric Drive pretty darn easy. They included the grade the car deserves right in the name: A nice, solid B.',
			author:'test@gmail.com'
		},
		{
			stars:4,
			body:'With more than a year separating my test week with the 2014 Mercedes-Benz CLA250 from its debutante ball at the 2013 Detroit Auto Show, I had the advantage of a mountain of data and diatribes with which to inform my initial opinion. Conversations... ',
			author:'test@example.com'
		}
		],
		canPurchase:false,
		soldOut:false
	}
	];

	//Panel Controller
	app.controller('PanelController',function(){
	
	this.tab=1;

		this.selectTab = function(selecttab){
			this.tab= selecttab;
		};

		this.isSelected=function(gettab){
			return this.tab===gettab;
		};

	});

	//directive : productTitle
	app.directive('productTitle',function(){
		return{
			restrict:'E',
			templateUrl:'html/product-Title.html'
		};
	});

	//directive : reviewForm
	app.directive('reviewForm',function(){

		return{
			restrict:'E',
			templateUrl:'html/review-Form.html',
			controller:function(){
				this.review = {};
				this.addReview = function(product){
				product.review.push(this.review);
				this.review={};
				};
			},
			controllerAs:'reviewCtrl'	//use of controllerAs
		};
	});
})();