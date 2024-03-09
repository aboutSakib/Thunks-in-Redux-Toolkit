import { Link } from "react-router-dom/dist";

const Nav = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__navbar">
          <ul>
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/counter">Counter-App</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
            <li>
              <Link to="/add-product">Add Product</Link>
            </li>
            <li>
              <Link to="/Class-Components">Class Components</Link>
            </li>
            <li>
              <Link to="/PostList">PostList</Link>
            </li>
            <li>
              <Link to="/UserList">UserList</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Nav;
