import { Link } from "react-router-dom";
import routes from "../../routes";

function Menu() {

    return (
        <div className="navbar navbar-default">
            <div className="navbar-brand bg-danger" >Call API</div>
            <ul className="nav navbar-nav">
                <li className="active">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Quản lý sản phẩm</Link>
                </li>
            </ul>
        </div>

    );
}

export default Menu;
