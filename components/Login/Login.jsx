import React from "react";

const Login = () => {
  return (
    <section class="login-content">
      <div class="container h-100">
        <div class="row justify-content-center align-items-center height-self-center">
          <div class="col-md-5 col-sm-12 col-12 align-self-center">
            <div class="sign-user_card">
              <img
                src="../assets/images/logo.png"
                class="img-fluid rounded-normal light-logo logo"
                alt="logo"
              />
              <img
                src="../assets/images/logo-white.png"
                class="img-fluid rounded-normal darkmode-logo logo"
                alt="logo"
              />
              <h3 class="mb-3">Sign In</h3>
              <p>Login to stay connected.</p>
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="floating-label form-group">
                      <input
                        class="floating-input form-control"
                        type="email"
                        placeholder=" "
                      />
                      <label>Email</label>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="floating-label form-group">
                      <input
                        class="floating-input form-control"
                        type="password"
                        placeholder=" "
                      />
                      <label>Password</label>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="custom-control custom-checkbox mb-3 text-left">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck1"
                      />
                      <label class="custom-control-label" for="customCheck1">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <a
                      href="auth-recoverpw.html"
                      class="text-primary float-right"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">
                  Sign In
                </button>
                <p class="mt-3">
                  Create an Account{" "}
                  <a href="auth-sign-up.html" class="text-primary">
                    Sign Up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
