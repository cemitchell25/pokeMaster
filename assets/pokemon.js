$(document).ready(function() {


var pokeCompare = {};
var loss = 0;
var wins = 0;

function compareThis() {

if (pokeCompare.MasterPokePower > pokeCompare.pokePower) {

  loss++;
  $("#lossCount").html("Losses: " + loss);
  $("#winCount").html("Wins: " + wins);

  setTimeout(function(){ alert("You lose! Even Misty could do better."); }, 1000);
  $("#testerButton").show();
}

else {

  wins++;
  setTimeout(function(){ alert("You win, PokeMaster!"); }, 1000);
  $("#testerButton").show();
  $("#winCount").html("Wins: " + wins);
  $("#lossCount").html("Losses: " + loss);
}

};

function displayPokemon() {


       var pokemon =  Math.ceil(Math.random() * 100);
       var queryURL = "https://pokeapi.co/api/v2/" + "pokemon/" + pokemon;

       $.ajax({
         url: queryURL,
         method: "GET"
       }).done(function(response) {

         var masterResult = response.forms[0].name;
         var picURL = response.sprites.front_default;
         pokeCompare.MasterPokePower = Math.floor(Math.random() * 100);

         console.log(pokeCompare.MasterPokePower = Math.floor(Math.random() * 100), "CHECK");

         console.log("RESULTS " + masterResult);

         $("#picPlace").append('<img class="picStyle" src="' + picURL + '">');
         $("#pokePower").append(masterResult + '<br>' + "PokePower: " + pokeCompare.MasterPokePower);

       })
    }

  function chooseYourPoke(){

    var pokemon =  Math.ceil(Math.random() * 100);
    var queryURL = "https://pokeapi.co/api/v2/" + "pokemon/" + pokemon;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

      var results = response.forms[0].name;
      var picURL = response.sprites.front_default;
      pokeCompare.pokePower = Math.floor(Math.random() * 100);

      console.log("RESULTS " + results);
      console.log(pokePower);

      $("#picPlaceTwo").append('<img class="picStyle" src="' + picURL + '">');
      $("#pokePowerTwo").append(results + '<br>' + "PokePower: " + pokeCompare.pokePower);

      compareThis();

  })


};


$("#testerButton").on("click", () => {

  displayPokemon();
  reset();

})

$(".pokeBall").on("click", () =>{

  chooseYourPoke();

})

function reset() {

  $("#picPlace").empty();
  $("#pokePower").empty();
  $("#pokePowerTwo").empty();
  $("#picPlaceTwo").empty();

  console.log("RESET")

}

$("#testerButton").hide();
displayPokemon();

});
