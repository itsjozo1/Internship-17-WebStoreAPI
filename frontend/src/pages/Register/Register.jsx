function Register() {
  return (
    <div>
      <h1>Register</h1>
      <div>
        <span>Email</span>
        <input type="email" id="email" />
        <span>Name</span>
        <input type="text" id="name" />
        <span>Password</span>
        <input type="password" id="password" />
        <span>Confirm Password</span>
        <input type="password" id="confirmPassword" />
      </div>
    </div>
  );
}

export default Register;
