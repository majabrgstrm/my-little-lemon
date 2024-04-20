import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

export default function Booking(){
    const seedRandom = function(seed){
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function(){
            return (s = s * a % m) /m;
        }
    }  
    

    const fetchAPI = function(date){
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i = 17; i <=23; i++) {
            if(random() < 0.5){
                result.push(i + ':00');
            }
            if(random() < 0.5){
                result.push(i + ':30');
            }
        }
        return result;
    }

    const submitAPI = function(formData){
        return true;
    }

    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date())}
    }

    const navigate = useNavigate();
    function submitForm (formData){
        console.log('ss')
        // if(submitAPI(formData)){
        //     navigate("/confirmed")
        // }
    }


    const handleSubmit = (e) => {
        navigate("/confirmed")
    }

    return <>
         <Nav />
        <BookingForm
            availableTimes={state.availableTimes} dispatch={dispatch} submitForm={handleSubmit}/>
        <Footer />
    </>
}