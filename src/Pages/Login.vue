<template>
  <section class="vh-100 transparent-section">
    <div class="container py-5 h-100 transparent-container">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card transparent-card" style="border-radius: 1rem;">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img src="http://images.unsplash.com/photo-1657053460900-3a12f32b592f?q=80&w=1974&auto=format&fit=crop"
                  alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-white">
                  <form>
                    <div class="d-flex align-items-center mb-3 pb-1">
                      <i class="fas fa-cubes fa-2x me-3 text-warning"></i>
                      <span class="h1 fw-bold mb-0">Login</span>
                    </div>

                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Inicia sesión en tu cuenta</h5>

                    <div class="form-outline mb-4">
                      <input type="email" id="form2Example17" class="form-control form-control-lg bg-transparent text-white" />
                      <label class="form-label text-white" for="form2Example17">Correo</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="password" id="form2Example27" class="form-control form-control-lg bg-transparent text-white" />
                      <label class="form-label text-white" for="form2Example27">Contraseña</label>
                    </div>

                    <div class="pt-1 mb-4">
                      <button class="btn btn-light btn-lg btn-block" type="button">Login</button>
                    </div>

                    <a class="small text-muted" href="#!">¿Olvidaste la contraseña?</a>
                    <p class="mb-5 pb-lg-2">¿No tienes una cuenta? <a href="#!" class="text-info">Regístrate aquí</a></p>
                    <a href="#!" class="small text-muted me-2">Términos de uso</a>
                    <a href="#!" class="small text-muted">Política de privacidad</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.transparent-section {
  background-color: transparent !important;
}

.transparent-container {
  background-color: transparent !important;
}

.transparent-card {
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

.card-body {
  background-color: transparent !important;
}

.form-control {
  background-color: transparent !important;
  color: #0e0d0d;
  border: 1px solid #1b1a1a;
}

.form-label {
  color: #181616;
}

.btn-light {
  background-color: #ffffff;
  color: #000;
  border: none;
}

.btn-light:hover {
  background-color: #0e0d0d;
}
</style>
