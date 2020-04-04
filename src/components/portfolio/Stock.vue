<template>
  <div class="card stock col-sm-6 col-md-4">
    <h3 class="card-header bg-info text-white">
      {{ stock.name }}
      <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
    </h3>

    <div class="card-body">
      <div class="row">
        <div class="col-sm-8">
          <input
            type="number"
            class="form-control"
            :class="{ danger: insufficientQuantity }"
            placeholder="Qauntity"
            v-model="quantity"
          />
        </div>
        <div class="col-sm-4">
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="insufficientQuantity || quantity <= 0"
          >
            {{ insufficientQuantity ? "Not Enough Stocks" : "Sell" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };

      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>
<style scoped>
.stock {
  min-width: 350px;
}
.danger {
  border: 1px solid red;
}
</style>
