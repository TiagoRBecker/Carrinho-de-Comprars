import "./courseItem.css"
 const Item = ({img,price,title,addToCart})=>{
    return (
        <div className="itens">
            <img src={img} alt="logo" />
            <p>{title}</p>
            <strong>R$ {price}</strong>
            <button onClick={()=> addToCart(img,title,price)} className="btn-item">Adicionar</button>
        </div>

    )
}
export default Item;
