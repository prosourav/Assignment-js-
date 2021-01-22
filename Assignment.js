        // Main fuctions for the Assignment
        function kilometerToMeter(kilometer){
            // user must give a posetive number and it should be bigger than 0
            if(kilometer == 0 || kilometer < 0){
                return "eror";
            }
            var meter = kilometer * 1000;
            return meter;
        }
        function budgetCalculator(watch, mobile, laptop){
            // watch cost 50/watch, mobile cost 100/mobile, laptop cost 500/laptop
            var totalCost = (watch * 50) + (mobile * 100) + (laptop * 500);
            return totalCost;
        }
        function hotelCost(numberOfdays){
            var cost = 0;
             // User should stay atleast 1 day
            if(numberOfdays < 1){
            return "error";   
            }
            // first 10 days hotel cost 100 doller
            if(numberOfdays <= 10){
            cost =  numberOfdays * 100;
            return cost;
            }
             // second 10 days hotel cost 80 doller
            else if(numberOfdays <= 20 ){
            var firstTenDays = 10 * 100;
            var secondTenDays = (numberOfdays - 10) * 80;
            var cost = firstTenDays + secondTenDays;
            return cost;
            }
            // after twenty days hotel charges willbe 50 dollers per day
            else if(numberOfdays > 20){
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            var thirdTenDays = (numberOfdays - 20) * 50;
            var cost = firstTenDays + secondTenDays + thirdTenDays;
            return cost;
            }
        }
        function megaFriend(friends){
            var biggestLength = friends[0].length;
            var largestName = friends[0];
            for( var i = 0; i < friends.length; i++){
                if(biggestLength < friends[i].length){
                    biggestLength = friends[i].length ;
                    largestName = friends[i];
                }
            }
            return largestName;
        }
//  function calling codes for checking
    var userInputInKilometer = 7;
    var resultInMeter = kilometerToMeter(userInputInKilometer);
    console.log(userInputInKilometer," kilometer is equal to : ",resultInMeter,"Meter");

    var numberOfWatch = 4;
    var numberOfMobile = 3;
    var numberOfLaptop = 2;
    var Cost = budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop);
    console.log("Total cost of my shopping: ",Cost,"Doller");

    var numberOfDaysInHotel = 12;
    var myHotelRent = hotelCost(numberOfDaysInHotel);
    console.log("My hotel rent: ",myHotelRent);

    var myFriends = ["Sumit", "Akash Chowdhury", "Sayantan", "Dip", "Sujoy RoyChowdhury"];
    var biggestName = megaFriend(myFriends);
    console.log("largest name from the array is :",biggestName);