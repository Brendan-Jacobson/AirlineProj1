import React from 'react'

function ArrayToRow(elements: any[]){

}

function DateTimeToDate(DateTime:string){
    console.log(DateTime)
    var x = DateTime.split('T')[0];
    var y = x.split('-')
    const u = [y[1],y[2],y[0]].join('/')
    return u;
}//moth/day/year

function DateTimeToDateJS(DateTime:string){
    console.log(DateTime)
    var x = DateTime.split('T')[0];
    var y = x.split('-')
    const u = [y[1],y[2],y[0]].join('/')
    return u;
}

function DateToDateTime(DateTime:string){
    var x = DateTime.split('/')[0];
    const u = [x[2],x[0],x[1]].join('/')+"T00:00:00"
    return u;
}

const listToThread = (arr:string[]) => {
    return(
    <thead>
    <tr>
        {arr.map((x,index)=>
        <React.Fragment key={index}>
        <th>{x}</th></React.Fragment>)}
    </tr>
    </thead>
    )
}//2022-05-09T00:00:00

const extendstring = (str:string|number) => {
    str = str.toString();//typeof str == "number" ? str.toString() : str
    return str.length == 1 ? "0"+str : str
}
 
const timeToDateTime =  (date: Date | null | undefined) => {
    return date!.toString().split(" ")[4]
}

const JSDateToDateTime = (date: Date | null | undefined) => {
    return ""+date!.getFullYear()+"-"+extendstring(date!.getMonth()+1)+"-"+extendstring(date!.getDate())+"T00:00:00"
    /*if(typeof date == "undefined"){
        return " "
    }
    if(typeof date == null){
        return " "
    }*/
    //console.log(date)
    //console.log(date?.getDate)
    if(typeof date != null && typeof date == typeof new Date() ){
        /*console.log(date)
        console.log(date!.getDate())
        console.log(date!.getFullYear())
        console.log(date!.getMonth()+1)
        console.log(date!.toString().split(" ")[4])*/
        //console.log(date!.get)
        //console.log(date!.getDay())
        const result = ""+date!.getFullYear()+"-"+extendstring(date!.getMonth()+1)+"-"+extendstring(date!.getDate())+"T00:00:00"
        return result
    }
    
    
}


const UsefulFunctions = {
    DateTimeToDate,
    listToThread,
    DateToDateTime,
    JSDateToDateTime,
    timeToDateTime
}

export default UsefulFunctions;