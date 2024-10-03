var thevalue="";
var lastoperator="";
var lastvalue="";
var result="";
let equalButtonClicked=false;
let invalidMasseg=false;
let displayvalue=false;
let brackets = false;


// Number click
function buttonclick(val){
    if(invalidMasseg==true){
        document.getElementById("display").value=""
        displayvalue=false;
        invalidMasseg=false;
        if(equalButtonClicked==true){
            document.getElementById("display").value="";
            equalButtonClicked=false;
            thevalue="";
            buttonclick(val);
        }
        else{
            document.getElementById("display").value+=val;
            displayvalue=true;
        }
    }else{
        if(equalButtonClicked==true){
            document.getElementById("display").value="";
            displayvalue=false;
            equalButtonClicked=false;
            thevalue="";
            buttonclick(val);
        }
        else{
            document.getElementById("display").value+=val;
            displayvalue=true;
        }
    }
        
}

//brackets
function buttonbracket(){
    if(brackets){
        document.getElementById("display").value+=")";
        brackets = false
    }
    else{
        document.getElementById("display").value+="(";
        brackets = true
    }

}

// clear button function
function buttonclear(){
    document.getElementById("display").value="";
    displayvalue=false;
    thevalue="";
    equalButtonClicked=false;
    invalidMasseg=false;
    brackets = false;
}

//operator button function
function buttonclickar(val){
    document.getElementById("display").value+=val
    thevalue+=document.getElementById("display").value
    document.getElementById("display").value="";
    displayvalue=false;
    lastoperator=val;
    console.log(thevalue)
}

//equation result printing button
function buttonclickequal(){


    if(thevalue==false){
        document.getElementById("display").value="Invalid format used"
        displayvalue=false;
        invalidMasseg=true
    }
    else if(equalButtonClicked==false){
        lastvalue=document.getElementById("display").value
        thevalue+=document.getElementById("display").value   
        document.getElementById("display").value="";
        displayvalue=false;
        console.log(thevalue)
        result=eval(thevalue)
        document.getElementById("display").value=result
        thevalue=result
        displayvalue=true;
        equalButtonClicked=true;

        console.log("thevalue - "+thevalue)
        console.log(lastoperator);
        console.log(lastvalue)
    }
    else{
        thevalue=result+lastoperator+lastvalue
        result=eval(thevalue)
        document.getElementById("display").value=result
        displayvalue=true;
    }
}

//Dot button
function buttonclickdot(val){
    if (thevalue==false){
        let val1="0"+val;
        document.getElementById("display").value+=val1;
    }
    else if(displayvalue==false){
        let val1="0"+val;
        document.getElementById("display").value+=val1;
    }
}