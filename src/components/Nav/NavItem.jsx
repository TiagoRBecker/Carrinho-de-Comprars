import "./NavItem.css"


const Nav = ({cart, clean})=> {
    const totalPrice = cart.reduce((acc, current)=> acc + Number(current.price), 0)
    const number = Number(totalPrice)
    console.log(number)
    return(
           <nav>
             <div className="logo">
                 <h2>Cursos</h2>
             </div>
             <div className="price">
                 <p>{cart.length} {cart.length === 1? "Curso":"Cursos"}</p>
                 <span>R$ {totalPrice.toFixed(2)}</span>
             </div>
             <button onClick={()=>clean()}className="btn">Limpar</button>
           </nav>
    )
}

export default Nav;