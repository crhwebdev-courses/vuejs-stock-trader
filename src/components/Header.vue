<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Stock Trader</router-link>
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
        <router-link
          class="nav-item"
          to="/portfolio"
          activeClass="active"
          tag="li"
          ><a class="nav-link">Portfolio</a></router-link
        >

        <router-link class="nav-item" to="/stocks" activeClass="active" tag="li"
          ><a class="nav-link">Stocks</a></router-link
        >
      </ul>
    </div>
  </nav>
</template>

<script></script>
