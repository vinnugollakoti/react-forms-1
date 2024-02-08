import { useState } from "react";

const Register = () => {
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [validSuccess, setValidSuccess] = useState(false);
  const [spaceError, setSpaceError] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSetState = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { firstName, lastName, email, phone } = data;

    if (email === "" || phone === "" || email.includes(" ")) {
      setSpaceError(true);
      return;
    }
    if (firstName === "") {
      setFirstNameError(true);
      return;
    }
    if (lastName === "") {
      setLastNameError(true);
      return;
    }
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      setPhoneError(true);
      return;
    }
    if (!email.includes('@kalvium.community') && !email.includes('@gmail.com')) {
      setEmailError(true);
      return;
    }

    // for all inputs are true
    setValidSuccess(true);
  };
  return (
    <div>
      <center>
        <div className="main-box">
          <form onSubmit={handleSubmit}>
            <div className="content">
              {validSuccess && (
                <div className="banner">
                  <p>Registration Successful</p>
                </div>
              )}
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={handleSetState}
                placeholder="First Name"
              />
              {firstNameError && <p className="error">Check your First Name</p>}
              <br />
              <br />
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={handleSetState}
                placeholder="Last Name"
              />
              {lastNameError && <p className="error">Check your Last Name</p>}
              <br />
              <br />
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleSetState}
                placeholder="Email"
              />
              {emailError && <p className="error">Check your email</p>}
              <br />
              <br />
              <input
                type="number"
                value={data.phone}
                onChange={handleSetState}
                placeholder="Phone Number"
                id="phone"
                name="phone"
              />
              {phoneError && <p className="error">Check your phone number</p>}
              <br />
              <br />
              {spaceError && <p className="error">Please enter all inputs</p>}
              <div>
                <input type="submit" value="Sign up" className="submitBtn" />
              </div>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
};

export default Register;
