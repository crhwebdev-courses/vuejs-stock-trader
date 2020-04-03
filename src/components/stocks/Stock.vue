<template>
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <h3 class="card-header bg-success text-white">
        {{ stock.name }}
        <small>(Price: {{ stock.price }})</small>
      </h3>

      <div class="card-body">
        <div class="row">
          <div class="col-sm-8">
            <input
              type="number"
              class="form-control"
              :class="{ danger: insufficentFunds }"
              placeholder="Qauntity"
              v-model="quantity"
            />
          </div>
          <div class="col-sm-4">
            <button
              class="btn btn-success"
              @click="buyStock"
              :disabled="insufficentFunds || quantity <= 0"
            >
              {{ insufficentFunds ? "Insufficient Funds" : "Buy" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficentFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity | 0
      };

      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>
