<template>
  <div class="product-container">
    <div class="product-photo">
      <img src="https://images.unsplash.com/photo-1600447196220-eaca91b66c5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80" alt="">
    </div>
    <div class="product-text">
      <h1>Title</h1>
      <p class="text-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, alias sapiente obcaecati placeat praesentium nulla aliquid, exercitationem, laboriosam quam similique consequuntur. Temporibus explicabo saepe harum ad accusamus recusandae assumenda officiis?
      </p>
      <a class="buy-button" href="">
        <p>Acheter moi 45 $</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.product-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background: #efe200;
}
.product-photo {
  display: flex;
  width: 35vw;
  height: auto;
  margin: 2rem;
}
.product-photo img {
  width: inherit;
  object-fit: contain;
}
.product-text {
  width: 40vw;
  padding: 3rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}
.text-description {
  margin: 1rem 20% 2rem 0;
}
.buy-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  padding: 15px 0;
  background: rgb(57, 167, 218);
  font-size: 1.75vw;
  font-weight: bolder;
  border-radius: 50px;
  color: white;
  text-decoration: none;
  box-shadow: 10px 10px 5px 0px rgba(7, 186, 231, 0.75);
}
.buy-button:hover {
  background: lightgreen;
  color: black;
  box-shadow: 10px 10px 5px 0px rgba(11, 107, 145, 0.75);
}
@media (max-width: 400px) {
  .product-container {
    flex-flow: column;
    padding: 1rem;
    justify-content: flex-start;
  }
  .product-text {
    width: 100%;
    padding: 1rem 2rem;
  }
  .product-photo {
    width: 100%;
  }
  .buy-button {
    width: 100%;
    font-size: 6vw;
  }
  .text-description {
    
  }
}
</style>
