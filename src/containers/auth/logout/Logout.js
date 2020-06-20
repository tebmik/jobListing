import { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";

const Logout = ({ logout }) => {
  useEffect(() => {
    logout();
  }, [logout]);

  return null;
};

const mapDispatchToProps = {
  logout: actions.signout,
};

export default connect(null, mapDispatchToProps)(Logout);
