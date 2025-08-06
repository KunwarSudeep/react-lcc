
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const phone = e.target.phone.value;
    const Gender = e.target.Gender.value;
    const dob = e.target.dob.value;
    const address = e.target.address.value;
    const cpassword = e.target.cpassword.value;

    const date = new Date().getFullYear();
    const inputYear = new Date(dob).getFullYear();
    //const age = new Date().getFullYear() - new Date(dob).getFullYear;

    if (firstname.length < 3 || lastname.length < 3) {
      toast.error("Firstname and Lastname should be more than 3");
      return;
    } else if (date - inputYear < 18) {
      toast.error("Age must be more than 18 years");
      return;
    } else if (cpassword !== password) {
       toast.error("Password must match");
    } else {
      console.log(firstname);
      console.log(lastname);
      console.log(email);
      console.log(password);
      console.log(phone);
      console.log(Gender);
      console.log(dob);
      console.log(address);

      toast.success("Success");
    }
    return;
  };
  return (
    <div className="body">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Registration</h2>

        <div className="name-text">
          <p className="fn">
            <small>First Name:</small>
          </p>
          <p className="ln">
            <small>Last Name:</small>
          </p>
        </div>

        <div className="name">
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
          />
        </div>

        <div className="ep-text">
          <p className="e">
            <small>Email:</small>
          </p>
          <p className="p">
            <small>Phone:</small>
          </p>
        </div>

        <div className="ep">
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="number" name="phone" id="phone" placeholder="Phone" />
        </div>

        <div className="passw">
          <p>
            <small>Password:</small>
          </p>
        </div>

        <div className="pass">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="conpassw">
          <p>
            <small>Confirm Password:</small>
          </p>
        </div>

        <div className="conpass">
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="Confirm Password"
          />
        </div>

        <div className="gen">
          <p>
            <small>Gender:</small>
          </p>
        </div>

        <div className="gender">
          <input type="radio" name="Gender" id="male" value="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" name="Gender" id="female" value="female" />
          <label htmlFor="female">Female</label>
        </div>

        <div className="date-of-birth">
          <p>
            <small>Date of Birth:</small>
          </p>
          <input type="date" name="dob" id="date" />
        </div>

        <div className="add">
          <p>
            <small>Address:</small>
          </p>
        </div>

        <textarea name="address" id="address" placeholder="Address"></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
