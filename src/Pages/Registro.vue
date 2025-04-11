\<template>
  <!-- Section: Design Block -->
  <section class="text-center text-lg-start transparent-section">
    <!-- Jumbotron -->
    <div class="container py-4 transparent-container">
      <div class="row g-0 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card transparent-card">
            <div class="card-body p-5 shadow-5 text-center">
              <h2 class="fw-bold mb-5">Sign up now</h2>
              <form>
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1" class="form-control" />
                      <label class="form-label" for="form3Example1">First name</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example2" class="form-control" />
                      <label class="form-label" for="form3Example2">Last name</label>
                    </div>
                  </div>
                </div>

                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3" class="form-control" />
                  <label class="form-label" for="form3Example3">Email address</label>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4" class="form-control" />
                  <label class="form-label" for="form3Example4">Password</label>
                </div>

                <!-- Checkbox -->
                <div class="form-check d-flex justify-content-center mb-4">
                  <input class="form-check-input me-2" type="checkbox" id="form2Example33" checked />
                  <label class="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Sign up
                </button>

                <!-- Register buttons -->
                <div class="text-center">
                  <p>or sign up with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Imagen -->
        <div class="col-lg-6 mb-5 mb-lg-0">
          <img
            src="https://images.unsplash.com/photo-1556040220-4096d522378d?q=80&w=1974&auto=format&fit=crop"
            class="w-100 rounded-4 shadow-4"
            alt="signup"
          />
        </div>
      </div>
    </div>
    <!-- Jumbotron -->
  </section>
</template>
<style scoped>
.transparent-section {
  background-color: transparent;
}

.transparent-container {
  background-color: transparent;
}

.transparent-card {
  background-color: transparent;
  border: none;
  box-shadow: none;
}

.card-body {
  background-color: transparent;
}

.form-outline,
.form-control {
  background-color: transparent !important;
  color: #fff;
  border: 1px solid #0e0d0d;
}

.form-label {
  color: #050505;
}

input::placeholder {
  color: #aaa;
}

/* Botón actualizado sin color café */
.btn-primary {
  background-color: #70a5da; /* Azul oscuro serio */
  border: none;
  color: #0853f3;
}

.btn-primary:hover {
  background-color: #3779b8;
  color: #6990e6;
}
</style>
