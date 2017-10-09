// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

});

$$(document).on('pageInit', '.page[data-page="calculator"]', function (e) {
	$$(convert_weight).on('click', weightConverter);
	$$(dosage).on('click', dosageConverter);
})


$$(document).on('pageInit', '.page[data-page="medication"]', function (e) {
	window.open('pharma_guide.pdf', '_blank', 'location=no');
})

$$(document).on('pageInit', '.page[data-page="search"]', function (e) {
	var mySearchbar = myApp.searchbar('.searchbar', {
	    searchList: '.list-block-search',
	    searchIn: '.keywords'
	});
})


function openNativeAppWindow(data){
	window.open(data, '_system');
}
 

function weightConverter() {	
	var input_weight = $$(weight_input).val()/2.2;
	var round_value = Math.round(input_weight*100)/100;
    $$(weight_output).html(round_value);
}

function dosageConverter() {
	var input_dosage = $$(dosage_input).val()
	var input_weight = $$(weight_input).val()/2.2;
	var round_value = Math.round(input_dosage *input_weight*100)/100;
	$$(dosage_output).html(round_value)

	var rows = $$(".dosage_table_output");


	console.log(rows.length);
	$$(weight_output).html(round_value);
	$$(based_on).html(Math.round(input_weight*100)/100);

	rows.each(function(){
		var element = $$(this);
		var dosage = element.data('dosage');
		var max = element.data('max');

		var value = Math.round(dosage * input_weight * 100)/100;
		element.html(value);
		if(max!=0 && value>max){
			element.html(max);
		}
	});

}
