<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dft">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="/logo.png" width="30" height="30" alt="Logotipo" loading="lazy" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link link-color" to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link link-color" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tipificação
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/categorias">Categoria de Serviços</router-link>
              <a class="dropdown-item" href="#">Órgãos</a>
              <a class="dropdown-item" href="#">Unidades</a>
              <a class="dropdown-item" href="#">Entregas</a>
              <a class="dropdown-item" href="#">Indic. de Produtividade</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-sm btn-light my-2 my-sm-0" type="submit">
            <i class="fa fa-fw fa-user"></i>
            Login
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.bg-dft {
  background-color: #166f88;
  height: 50px;
}
.link-color {
  color: rgb(255, 255, 255, 0.8) !important;
}
</style>
