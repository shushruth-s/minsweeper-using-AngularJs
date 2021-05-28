var app = angular.module('myapp',[]);
app.controller('controler',function($scope){
$scope.minified= crateminified();
});
function crateminified(){
var minified={};
minified.rows = [];
for(var i=0;i<9;i++){
var row={};
row.cols = [];
for(var j=0;j<9;j++){
var col={};
col.isRevealed=true;
col.content = "empty";
row.cols.push(col);
}
minified.rows.push(row);
}
placeManyRandomMines(minified);
callAllNumber(minified);
return minified;
}
function placerandommines(minified){
var row = Math.floor(Math.random()*8);
var column = Math.floor(Math.random()*8);
var col = getcol(minified,row,column);
col.content = "mine";
}
function getcol(minified,row,column){
return minified.rows[row].cols[column];

} 
function placeManyRandomMines(minified){
for(var j=0;j<11;j++){
placerandommines(minified);
}
}
function createNumber(minified,row,column){
var thiscol = getcol(minified,row,column);

	if(thiscol.content == 'mine'){
	return;
	}
	var minecount=0;
	if(row>0){
	if(column>0){
	var col= getcol(minified,row-1,column-1);
	if(col.content == 'mine'){
	minecount++;
	}
	}
	var col= getcol(minified,row-1,column);
	if(col.content == 'mine'){
	minecount++;
	}
	if(column<8){
	var col= getcol(minified,row-1,column+1);
	if(col.content == 'mine'){
	minecount++;
	}
	}
	}
	
	if(column>0){
	var col= getcol(minified,row,column-1);
	if(col.content == 'mine'){
	minecount++;
	}
	}
	if(column<8){
	var col= getcol(minified,row,column+1);
	if(col.content == 'mine'){
	minecount++;
	}
	}
	
	if(row<8){
	if(column>0){
	var col= getcol(minified,row+1,column-1);
	if(col.content == 'mine'){
	minecount++;
	}
	}
	var col= getcol(minified,row+1,column);
	if(col.content == 'mine'){
	minecount++;
	}
	if(column<8){
	var col= getcol(minified,row+1,column+1);
	if(col.content == 'mine'){
	minecount++;
	}
	}
	}
	if(minecount > 0){
	thiscol.content = minecount;
	}
	}
	function callAllNumber(minified){
	for(var i=0;i<9;i++){
	for(var j=0;j<9;j++){
	createNumber(minified,i,j);}
	}
	}
	