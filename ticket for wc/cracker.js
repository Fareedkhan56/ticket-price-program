alert("Welcome To Ticket Program");

let countries = ['pakistan','india','bangladesh','sri-lanka','afghanistan','new-zeland','south-africa','westindies','england','netherland'];

var userCountry = +prompt('1. '+countries[0]+'\n2. '+countries[1]+'\n3. '+countries[2]+'\n4. '+countries[3]+'\n5. '+countries[4]+'\n6. '+countries[5]+'\n7. '+countries[6]+'\n8. '+countries[7]+'\n9. '+countries[8]+'\n10. '+countries[9]+'\n',"enter your country");

if (countries.length >= userCountry){

    let matches = ['Quarter-final','semi-final','the final'] 

    let userMatch = +prompt('1. '+matches[0]+'\n2. '+matches[1]+'\n3. '+matches[2],"enter match ticket you want");

    if (matches.length >= userMatch){

        var countrySplice = countries.splice(userCountry-1,1);
        var matchesSplice = matches.splice(userMatch-1,1);

     if(countrySplice == "pakistan" && matchesSplice == "Quarter-final"){
        document.write('<h1><center>The Price Of '+matchesSplice+' Ticket in '+countrySplice+' is 10lac PKR</center></h1>')
    }
    else if (countrySplice == "pakistan" && matchesSplice == "semi-final"){
        document.write('<h1><center>The Price Of '+matchesSplice+' Ticket in '+countrySplice+' is 15lac PKR</center></h1>')
    }
    else if (countrySplice == "pakistan" && matchesSplice == "the final"){
        document.write('<h1><center>The Price Of '+matchesSplice+' Ticket in '+countrySplice+' is 20lac PKR</center></h1>')
    }


    else if(countrySplice == "india" && matchesSplice == "Quater-Final"){
        document.write('<h1><center>The Price Of '+matchesSplice+' Ticket in '+countrySplice+' is 30k INR</center></h1>')
    }
    else if(countrySplice == "india" && matchesSplice == "semi-final"){
        document.write('<h1><center>The Price Of '+matchesSplice+' Ticket in '+countrySplice+' is 35k INR</center></h1>')
    }
    else if(countrySplice == "india" && matchesSplice == "the final"){
        document.write('<h1><center>The Price Of '+matchesSplice+' Ticket in '+countrySplice+' is 60k INR</center></h1>')    
    }


    else if(countrySplice == "bangladesh" && matchesSplice == "Quarter-final"){
        document.write('<h1><center>The Price Of '+matchesSplice+' Ticket in '+countrySplice+' is 40k BDT</center></h1>')
    }
    else if(countrySplice == "bangladesh" && matchesSplice == "semi-final"){
        document.write('<h1><center>The Price Of '+matchesSplice+' Ticket in '+countrySplice+' is 46k BDT</center></h1>')
    }
    else if(countrySplice == "bangladesh" && matchesSplice == "the final"){
        document.write('<h1><center>The Price Of '+matchesSplice+' Ticket in '+countrySplice+' is 80k BDT</center></h1>')
    }


    else if(countrySplice == "sri-lanka" && matchesSplice == "Quarter-final"){
        document.write('<h1><center>The Price Of '+matchesSplice+' Ticket in '+countrySplice+' is 1.16lac LKR</center></h1>')
    }
    else if(countrySplice == "sri-lanka" && matchesSplice == "semi-final"){
        document.write('<h1><center>The Price Of '+matchesSplice+' Ticket in '+countrySplice+' is 1.35lac LKR</center></h1>')
    }
    else if(countrySplice == "sri-lanka" && matchesSplice == "the final"){
        document.write('<h1><center>The Price Of '+matchesSplice+' Ticket in '+countrySplice+' is 2.38lac LKR</center></h1>')
    }


    else if(countrySplice == "afghanistan" && matchesSplice == "Quarter-final"){
        document.write('<h1><center>The Price Of '+matchesSplice+' Ticket in '+countrySplice+' is 2.71k AFN </center></h1>')
    }
    else if(countrySplice == "afghanistan" && matchesSplice == "semi-final"){
        document.write('<h1><center>The Price Of '+matchesSplice+' Ticket in '+countrySplice+' is 31k AFN</center></h1>')
    }
    else if(countrySplice == "afghanistan" && matchesSplice == "the final"){
        document.write('<h1><center>The Price Of '+matchesSplice+' Ticket in '+countrySplice+' is 5.58k AFN</center></h1>')
    }
}

    else{
    document.write('<h1><center>PLEASE ENTER MATCH YOU WANT</center></h1>');
    }
}
else{
    document.write('<h1><center>PLEASE ENTER YOUR COUNTRY</center></h1>');
}