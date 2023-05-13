


const BookingTable = ({bookingCard , handleDelete}) => {
   const {_id , CheckOutName , img ,email, price ,date ,service} = bookingCard

    
   return (
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{CheckOutName}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
   
          {service}
          <br/>
          <span className="">{email}</span>
          <span className="">${price}</span>
        </td>
        <td>{date}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
     
</tbody>
</table>
</div>
   );
};

export default BookingTable;