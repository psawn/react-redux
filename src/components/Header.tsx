
import { authActions, TAuthState } from "../store/auth";
import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state: { auth: TAuthState }) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
