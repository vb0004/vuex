<template>
  <div>
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <button class="btn btn-success m-1" @click="increment">Increment</button>
    <button class="btn btn-danger m-1" @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  name: 'CounterView',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>

<style></style>
