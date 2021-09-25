import './Book.css';

function Book({details, deleteBookCallBack}){

    const handleOnDeleteClick = () => {
        deleteBookCallBack(details.id)
    }
    return (
        
        <div className="container">
            <table id="customers">

  
  
  <tr>
    <td>{details.title}</td>
    <td>{details.description}</td>
    <td><img src={details.imageUrl} /></td>
  </tr>
  
 
  </table>
            
               {/*  <h1>{details.title}</h1>
                <p>{details.description}</p>
                <img src={details.imageUrl} />
                <button onClick={handleOnDeleteClick}>Delete</button> */}
            
    </div>
    )
}
export default Book;