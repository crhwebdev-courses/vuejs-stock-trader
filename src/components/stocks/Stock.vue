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
              placeholder="Qauntity"
              v-model="quantity"
            />
          </div>
          <div class="col-sm-4">
            <button
              class="btn btn-success"
              @click="buyStock"
              :disabled="quantity <= 0"
            >
              Buy
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
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity | 0
      };

      console.log(order);
      this.quantity = 0;
    }
  }
};
</script>
