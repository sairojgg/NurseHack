import * as React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import history from "../router/history";
import { ICurrent } from "../mutations/types";
interface IProps {
  exact?: boolean;
  isAuthenticated: boolean | null;
  path: string;
  component: React.ComponentType<any>;
}
const GuestRoute = ({
  component: Component,
  isAuthenticated,
  ...otherProps
}: IProps) => {
  if (isAuthenticated === true) {
    history.push("/admin/dashboard");
  }

  return (
    <>
      <Route
        render={otherProps => (
          <>
            <Component {...otherProps} />
          </>
        )}
      />
    </>
  );
};

const mapStateToProps = (state: ICurrent) => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(
  mapStateToProps
)(GuestRoute);