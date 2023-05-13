import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingTable from "./BookingTable";
import Swal from "sweetalert2";

const Booking = () => {
   const {user} = useContext(AuthContext)
   const [bookingCards , setBookingCard ] = useState([])
   const url = `http://localhost:5000/checkOuts?email=${user.email}`
   useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data => setBookingCard(data))
   } ,[url])

   // delete 
   const handleDelete = id =>{

      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
       }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5000/checkOuts/${id}` ,{
               method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
               console.log(data)
             if(data.deletedCount> 0){  
                   Swal.fire(
             'Deleted!',
             'Your file has been deleted.',
             'success'
           )
           const remaining =bookingCards.filter(booking => booking._id !== id)
           setBookingCard(remaining)
               }}
              )
         
         }
       })

     
      }

      
   return (
      <div>
         <h1 className="text-4xl font-bold text-orange-600 text-center p-8">You Total Booked {bookingCards.length} Service</h1>
     <div>
      {
         bookingCards.map(bookingCard => <BookingTable
         key={bookingCard._id}
         bookingCard={bookingCard}
         handleDelete={handleDelete}
         ></BookingTable>)
      }
     </div>
      </div>
   );
};

export default Booking;