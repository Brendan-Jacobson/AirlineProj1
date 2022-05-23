import React from 'react';
import { useState , useEffect} from 'react';
//import logo from './logo.svg';
import { Route , BrowserRouter as Router , Routes } from "react-router-dom";
import FlightR from './models/flight';
import BookingR from './models/booking';
import PassengerR from './models/passenger';
import PassengerView from './views/passenger/PassengerView'
import BookingView from './views/booking/BookingView'
import HomeView from './views/home/HomeView';
import FlightView from './views/flight/FlightView';
import SinglePassenger from './views/passenger/SinglePassenger';
import SingleFlight from './views/flight/SingleFlight';
//import Tabs from './components/Tabs'
import NoPage from './views/NoPage';
import NavigationBar from "./components/NavigationBar";
//import FlightTable from './components/flights/FlightTable';
//import BookingTable from './components/bookings/BookingTable';
//import FlightTable2 from './components/flights/FlightTable2';
//import Layout from "./views/layout"
import APIService from './services/apiServices';
import './App.css';
import { AxiosResponse } from 'axios';

type FlightType = {
  flightList: FlightR[];
}

type PassengerType = {
  passengerList : PassengerR[];
}

type BookingsType = {
  passengerList : BookingR[];
}

type PropType = {

}
type AppState ={
  flights: FlightR[]
  passengers: PassengerR[]
  bookings: BookingR[]
}

function getdata<T>(func:any): T[] {
  let tt: T[] = []
  func.then((response: AxiosResponse<Array<T>>) => {
    response.data.forEach((objs: T) => {
      tt.push(objs)
    });
  })
  .catch((err: Error) => {
    console.log(err);
    tt = [];
  });
  return tt
}
// class App extends React.Component<PropType , AppState> {
//   constructor(props:PropType){
//     super(props);
//     this.state = {
//       flights: [],
//       passengers: [],
//       bookings: []
//     }
//   }
//   componentDidMount(){
//     APIService.getFlights().then((response: AxiosResponse<Array<FlightR>>) => {
//       this.setState({flights: response.data})})
//     .catch((err: Error) => {
//       console.log(err);
//     });
//   }
//   render(){
//     return (
//           <div className="App">
//             <Parent />
//             <DatePicker2/>
            
//             <BookingTable Bookings = {this.state.bookings}/>
//             <FlightTable Flights = {this.state.flights}/>
//             <Learn />
//           </div>
//         );
//   }
//}
/*
React.useEffect(() => {
  const url = "https://randomuser.me/api/?results=15";
  fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json['results']))
    .catch((error) => console.log(error));
}, []);

React.useEffect(() => {
  if (data.length !== 0) {
    setIsLoading(false);
  }
  console.log(data);
}, [data]);
*/
function App(prop:PropType):JSX.Element {
  //const [FlightLoading, setFlightIsLoading] = React.useState(true);
  //const [BookingLoading, setBookingIsLoading] = React.useState(true);
  //const [PassengerLoading, setPassengerIsLoading] = React.useState(true);
  //const [flights,setFlights] = useState(getdata<FlightR>(APIService.getFlights()))
  //const [bookings,setBookings] = useState(getdata<BookingR>(APIService.getBookings()))
  //const [passengers,setPassengers] = useState(getdata<PassengerR>(APIService.getPassengers()))
  useEffect(() => {
    /*APIService.getFlights().then((response: AxiosResponse<Array<FlightR>>) => {
      setFlights(response.data)})
    APIService.getBookings().then((response: AxiosResponse<Array<BookingR>>) => {
      setBookings(response.data)})
    APIService.getPassengers().then((response: AxiosResponse<Array<PassengerR>>) => {
      setPassengers(response.data)})*/
    }
  ,[])
  /*useEffect(() => {
    APIService.getBookings().then((response: AxiosResponse<Array<BookingR>>) => {
      setBookings(response.data)})
  },[])
  useEffect(() => {
    APIService.getPassengers().then((response: AxiosResponse<Array<PassengerR>>) => {
      setPassengers(response.data)})
  },[])*/
  /*React.useEffect(() => {
    if (passengers.length !== 0) {
      setPassengerIsLoading(false);
    }
    console.log(passengers);
  }, [passengers]);*/
  /*React.useEffect(() => {
    if (passengers.length !== 0) {
      setPassengerIsLoading(false);
    }
    console.log(passengers);
  }, [passengers]);
  React.useEffect(() => {
    if (flights.length !== 0) {
      setFlightIsLoading(false);
    }
    console.log(flights);
  }, [flights]);
  React.useEffect(() => {
    if (bookings.length !== 0) {
      setBookingIsLoading(false);
    }
    console.log(bookings);
  }, [bookings]);*/

  //console.log(FlightList)

  return (
        <main>
        <NavigationBar />
        <Routes>
          <Route path="/" element={ <HomeView />} />
          <Route path="/Flights/*" element={ 
            <React.Suspense fallback={<>...</>}>
              <FlightView />
            </React.Suspense>} />
            <Route path="/bookings/*" element={ 
            <React.Suspense fallback={<>...</>}>
              <BookingView />
            </React.Suspense>} />

            <Route path="/Passengers/*" element={ 
            <React.Suspense fallback={<>...</>}>
              <PassengerView />
            </React.Suspense>} />

            <Route path="/Passenger/:id" element={ 
            <React.Suspense fallback={<>...</>}>
              <SinglePassenger/>
            </React.Suspense>} />

            <Route path="/Flight/:id" element={ 
            <React.Suspense fallback={<>...</>}>
              <SingleFlight/>
            </React.Suspense>} />
        </Routes>
      </main>
  );

  // <Router>
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<HomeView />} />
  //         <Route path="Flights" element={<FlightView Flights={flights}/>} />
  //         <Route path="Passengers" element={<PassengerView passengers={passengers}/>} />
  //         <Route path="Bookings" element={<BookingView Bookings={bookings}/>} />
  //         <Route path="*" element={<NoPage />} />
  //       </Route>
  //     </Routes>
  //   </Router>
}//<PassengerTable Passengers = {passengers}/>
 //     <BookingTable Bookings = {bookings}/>
 //     <FlightTable Flights = {flights}/>
//<DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
export default App;
{/* <Route path='/cats' component={Cats} />
<Route path='/sheeps' component={Sheeps} />
<Route path='/goats' component={Goats} /> */}
  // //let PassengerList :PassengerR = []
  // let flightss:FlightR[] = []
  // const oop = APIService.getFlights().then((response: AxiosResponse<Array<FlightR>>) => {
  //           response.data.forEach(x=>flightss.push(x))})
  //        .catch((err: Error) => {
  //          console.log(err);
  //        });  
  // //console.log(APIService.getFlights())
  // console.log("here")
  // console.log(flights)
  // let FlightList :FlightR[] = []
  // let BookingList :BookingR[] = []
  // //getdata(APIService.getFlights(),FlightList);
  // //getdata(APIService.getBookings(),BookingList);      
  // <main>
  //       <NavigationBar />
  //       <Routes>
  //         <Route path="/" element={ <HomeView />} />

  //         <Route path="/flights/*" element={ 
  //           <React.Suspense fallback={<>...</>}>
  //             <FlightView Flights={flights} />
  //           </React.Suspense>} />

  //       </Routes>
  //     </main>