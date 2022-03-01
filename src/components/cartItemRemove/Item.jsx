import "./item.css"
const Item = ({cart, handleRemove})=>{
    return (
        <div className="container-remove">
                {cart.map((i,k)=>(
            <div key={k} className="box-container">
                    
                    <h2 className="title-remove">{i.title}</h2>
                    <p className="price-remove">R$ {i.price}</p>
                    <button className="btn-remove" onClick={()=>handleRemove(k)}>Remover</button>
                    
            </div>
                    ))}
                
              
        </div>
    )
}
export default Item;