import { useContext } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const CheckOut = () => {
   const service = useLoaderData()
   const {user} = useContext(AuthContext)
   const {title ,img , price , _id} = service

   const handleService = event =>{
      event.preventDefault()
      const form = event.target 
      const name = form.name.value
      const date = form.date.value
      const email = user?.email
      const order={
         CheckOutName:name ,
         email:email ,
         img ,
         price ,
         date:date ,
         service:title ,
         service_id: _id
      }
      console.log(order);

      fetch("http://localhost:5000/checkOuts" , {
         method: "POST" ,
         headers:{
            "content-type":"application/json"
         } ,
         body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => {
         console.log(data);
         if(data.insertedId){
            Swal.fire({
               title: 'Congrats SuccessFully Booked',
               text: 'Thanks for Booking',
               icon: 'success',
               confirmButtonText: 'Okhe'
             })
         }
      })
   }
   return (
      <Form onSubmit={handleService}>
 <div className="card-body">
   <h1 className="text-center font-semibold text-4xl p-5 text-orange-500">{title}</h1>
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
   <div className="form-control">
          
          <input type="text" placeholder=" Name" name="name" className="input input-bordered" />
        </div>

        <div className="form-control">
       <input type="date" placeholder="Date" name="date" className="input input-bordered" />
        </div>

        <div className="form-control">
     <input type="text" placeholder="Your Email" name="email" defaultValue={user?.email} className="input input-bordered" />
        </div>

        <div className="form-control">
       <input type="text" placeholder="Due Amount"  defaultValue={"$" + price} className="input input-bordered" />
       </div>
       
   </div>

   <div className="form-control border-2 border-gray-200 p-3 rounded-xl">
       <textarea name="Your Massage" placeholder="Your Massage"  id="" cols="30" rows="10"></textarea>
       </div>
        <div className="form-control mt-6">
         
         <input type="submit" className="btn btn-block  btn-warning" value="Order Confirm" />
        </div>
      </div>
      </Form>
     
    
   );
};

export default CheckOut;