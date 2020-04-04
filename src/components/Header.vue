<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Stock Trader</router-link>
    <button
      class="navbar-toggler"
      :class="{ collapsed: !isMenuOpen }"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      :aria-expanded="!isMenuOpen"
      aria-label="Toggle navigation"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse"
      :class="{ show: isMenuOpen }"
      id="navbarSupportedContent"
    >
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
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item">
          <a class="nav-link" href="#" @click="endDay">End Day</a>
        </li>
        <li
          class="nav-item dropdown"
          :class="{ open: isDropdownOpen, show: isDropdownOpen }"
          @click="isDropdownOpen = !isDropdownOpen"
        >
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            :aria-expanded="isDropdownOpen"
          >
            Save & Load
          </a>
          <div
            class="dropdown-menu"
            :class="{ show: isDropdownOpen }"
            aria-labelledby="navbarDropdown"
          >
            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
          </div>
        </li>
      </ul>
      <strong class="navbar-text navbar-right"
        >Funds: {{ funds | currency }}</strong
      >
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isDropdownOpen: false,
      isMenuOpen: false,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData",
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks,
      };

      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    },
  },
};
</script>
