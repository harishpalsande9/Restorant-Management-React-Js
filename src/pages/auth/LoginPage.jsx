import { Row, Form, Col, Button, Container } from "react-bootstrap";
import login from "./../../login.png";
import LoginComponent from "../../component/auth/LoginComponent";
import AuthNavbar from "../../component/navs/authNavbar";
import FooterNavbar from "../../component/navs/footer";
function LoginPage() {
  return (
    <>
      <Container>
        <AuthNavbar />
        <div className=" row mt-2 row-eq-height ">
          <div className="col-md-6 mob-img">
            <img src={login} alt="login" />
          </div>
          <div className="col-md-6 ">
            <LoginComponent />
          </div>
        </div>
        <FooterNavbar />
      </Container>
    </>
  );
}

export default LoginPage;
