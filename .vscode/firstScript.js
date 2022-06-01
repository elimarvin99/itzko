document.getElementById('submitButton').onclick = function(){
    let dateIn = new Date(document.getElementById("datetimeIn").value);
    let dateOut = new Date(document.getElementById("datetimeOut").value);
    let discont = document.getElementById("buttonDiskont").checked;
    let parkingSign = document.getElementById("buttonParkingSign").checked;
    let output1 = document.getElementById('output');
    let output_dateIn = document.getElementById('dateIn');
    let output_dateOut = document.getElementById('dateOut');


    //output_dateIn.innerHTML = dateIn.getTime
    //output_dateOut.innerHTML = dateOut.getTime




    function parking(name,timeIn,timeOut,start,stop,price1,prise15,priceEvening,discontWork,parkingSignWork,closeToHome,closeToHomeTime){
        let newTimeIn = new Date(timeIn) 
        let priceA = 0
        let priceEven = 0
        let sum = 0
        let discountPercentage = 75
        let nightTime = 24-(stop-start)%24


    
        if(closeToHome && parkingSign){
            console.log(name)
            start = closeToHomeTime[0]
            stop = closeToHomeTime[1]
            priceEvening = 0
        }


        if(discontWork&&discont){
            console.log(name)
            start = '8'
            stop = '16'
            priceEvening = 0
            
        }  

        while(newTimeIn < timeOut){
            let hours = newTimeIn.getHours()
            let minutes = newTimeIn.getMinutes()
            if(hours >= start && hours < stop){
                priceA = priceA +1

            }
            else{
                priceEven = priceEven +1
            }
            newTimeIn.setMinutes(minutes+15)

        }
        
        let sumEveninig = Math.ceil((priceEven/4)/nightTime)


        if(priceA > 0){
            sum = sum + price1
        }
        if(priceA > 4){
            sum = sum + ((priceA-4)*prise15)
        }

        for(let i = 0; i < sumEveninig; i++){    
        sum = sum + priceEvening
        }
        

        
       

        if(parkingSignWork && parkingSign){
            sum = sum*((100-discountPercentage)/100)
        }

        console.log(name,sum)
        
        return(sum)
        


    
    
    
    }
    






    // BeytPsagot

    let startA = '6'; //Start price a
    let stopA = '16'; //Stop price a
    let price1A = 28; //Price for 1 hour
    let price15A = 6; //Price for 15 minuts
    let priceEveningA = 30; //Price for all the night
    let discontWorkA = true //Discont work in this parking
    let parkingSignWorkA = false //Parking sign work in this parking
    let closeToHomeA = false //If the parking lot has an arrangenent close to home


    

    let BeytPsagot = ' בית פסגות ' + parking('בית פסגות',dateIn,dateOut,startA,stopA,price1A,price15A,priceEveningA,discontWorkA,parkingSignWorkA,closeToHomeA);
    



    //let beytPsagot = 'beyt psagot' + parking(BeytPsagot.startA,dateIn,dateOut,startA,stopA,price1A,price15A,priceEveningA,discontWorkA,parkingSignWorkA);



    //rotshild

    let startB = '7'; //Start price a
    let stopB = '22'; //Stop price a
    let price1B = 16; //Price for 1 hour
    let price15B = 4; //Price for 15 minuts
    let priceEveningB = 24; //Price for all the night
    let discontWorkB = false //Discont work in this parking
    let parkingSignWorkB = true //Parking sign work in this parking
    let closeToHomeB = true //If the parking lot has an arrangenent close to home
    let closeToHomeTimeB = ['8','22'] //If the parking lot has an arrangenent close to home


    
    let rotshild = ' .רוטשילד ' + parking('רוטשילד',dateIn,dateOut,startB,stopB,price1B,price15B,priceEveningB,discontWorkB,parkingSignWorkB,closeToHomeB,closeToHomeTimeB);


    //Montifyory

    let startC = '7'; //Start price a
    let stopC = '16'; //Stop price a
    let price1C = 16; //Price for 1 hour
    let price15C = 4; //Price for 15 minuts
    let priceEveningC = 24; //Price for all the night
    let discontWorkC = false //Discont work in this parking
    let parkingSignWorkC = true //Parking sign work in this parking
    let closeToHomeC = false //If the parking lot has an arrangenent close to home

    
    let Montifyory = ' .מונטיפיורי ' + parking('מונטיפיורי',dateIn,dateOut,startC,stopC,price1C,price15C,priceEveningC,discontWorkC,parkingSignWorkC,closeToHomeC);

    output1.innerHTML = BeytPsagot + '  ' + ' ש"ח '+'   '+ rotshild  + ' ש"ח '+ '   '+ Montifyory  + ' ש"ח '


}