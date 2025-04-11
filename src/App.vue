<script>
export default {
  name: "App",
};
</script>

<template>
  <div id="app" class="full-screen">
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg custom-navbar">
      <div class="container-fluid px-4">
        <a class="navbar-brand" href="#">Pagina Web</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

          <ul class="navbar-nav ms-auto">

            <!-- LOGIN -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Login</a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><router-link to="/registro" class="dropdown-item">Registro</router-link></li>
                <li><router-link to="/login" class="dropdown-item">Iniciar sesión</router-link></li>
              </ul>
            </li>

            <!-- CALCULADORA -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Calculadora</a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><router-link to="/calculadora1" class="dropdown-item">Calculadora 1</router-link></li>
                <li><router-link to="/calculadora2" class="dropdown-item">Calculadora 2</router-link></li>
              </ul>
            </li>

            <!-- CICLOS -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Ciclos</a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><router-link to="/recorrido" class="dropdown-item">Recorrido</router-link></li>
              </ul>
            </li>

            <!-- HORARIO -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Horario</a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><router-link to="/horario1" class="dropdown-item">Horario 1</router-link></li>
                <li><router-link to="/horario2" class="dropdown-item">Horario 2</router-link></li>
              </ul>
            </li>
            <!-- EVENTOS-->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Eventos</a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><router-link to="/eventos" class="dropdown-item">evento</router-link></li>
              </ul>
            </li>
            <!-- Hello -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Hello</a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><router-link to="/hello" class="dropdown-item">rosas</router-link></li>
              </ul>
            </li>
             <!-- Props -->
             <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Props</a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><router-link to="/props1" class="dropdown-item">Props</router-link></li>
              </ul>
            </li>

          </ul>
       
      </div>
    </nav>

    <!-- CONTENIDO PRINCIPAL -->
  
      <div class="text-center my-5">
        <h1 class="display-5 fw-bold text-light">Bienvenido a Mi Aplicación</h1>
        <p class="lead text-light opacity-75">Usa el menú para navegar entre las secciones.</p>
      </div>
      <div class="main-content bg-glass p-4 rounded shadow-sm">
        <router-view />
      </div>
    
  </div>
</template>
<style scoped>


.full-screen {
  min-height: 100vh;
  background: url('https://imgs.search.brave.com/aVR4HZKGRwNbs4IhVCRjN41OUc-LwKyhZj0tUYd7BZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzQ3L0hlYXJ0X29m/X1NpbWlsYW4uanBn') no-repeat center center fixed;
  background-size: cover;
  font-family: 'Lora', serif;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

/* NAVBAR FIJO */
.custom-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #1b1d2b;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1rem 2rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.navbar-brand {
  color: #e0e0e0 !important;
  font-weight: 600;
  font-size: 1.3rem;
}

.nav-link {
  color: #cfd1dc !important;
  font-weight: 500;
  font-size: 1.05rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #d4af37 !important;
}

.dropdown-menu {
  background-color: #24263b;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
}

.dropdown-item {
  color: #f0f0f0;
  transition: all 0.2s ease-in-out;
}

.dropdown-item:hover {
  background-color: #343651;
  color: #d4af37;
}

/* ESPACIO PARA EL NAVBAR */
.content-wrapper {
  flex-grow: 1;
  padding: 6rem 1rem 2rem; /* Deja espacio para el navbar fijo */
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* ESTILOS PRINCIPALES */
.main-content {
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #f2f2f2;
  padding: 2rem;
}

/* TABLAS Y FORMULARIOS */
table {
  width: 100%;
  margin-bottom: 1rem;
  border-collapse: collapse;
  background-color: #2b2e4a;
  color: #f0f0f0;
}

th, td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #44475a;
}

th {
  background-color: #1f2235;
  font-weight: 600;
}

tr:hover {
  background-color: #343658;
}

input, select, textarea {
  background-color: #1f2235;
  color: #f0f0f0;
  border: 1px solid #3a3d5c;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  width: 100%;
  margin-bottom: 1rem;
}

button {
  background-color: #d4af37;
  border: none;
  color: #1a1a1a;
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #bfa133;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .navbar-brand, .nav-link {
    font-size: 1rem;
  }

  .custom-navbar {
    padding: 1rem;
  }

  .content-wrapper {
    padding: 6rem 1rem 2rem;
  }
}
</style>

