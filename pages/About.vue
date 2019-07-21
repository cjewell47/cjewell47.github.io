<template>
  <div class="page">
    <h1>About</h1>
    <div class="about-container">
      <p>I'm a Web Developer currently working in London, for <a target="_blank" href="https://www.dk.com/uk/">Dorling Kindersley</a>. At DK I use a lot JavaScript, TypeScript, Angular, and SCSS, and I'm looking to use a lot more serverless functions. I was previously a Front End Developer for <a target="_blank" href="https://www.experian.co.uk">Experian</a>. At Experian I did a lot of front end development with SCSS, LESS, JavaScript, and Vue.js, as well a optimisation tests with Adobe Target and Tag Management through Ensighten.</p>
      <p>I graduated from a Wed Development course at General Assembly in 2017, after dipping my toe into the world of web development. I couldn't be happier with how GA set me up with a solid foundation for becoming a web developer.</p>
      <p>You'll still me find me at meetups and conferences, trying to get better and picking up on the latest trends and technologies.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang='scss' scoped>
@mixin mobile {
  @media screen and (max-width: 767px) {
    @content;
  }
}
h1 {
  color: #0000ff;
  font-size: 2rem;
}
.page {
  max-width: 700px;
  margin: auto;
  text-align: center;
}
.about-container {
  margin: 40px auto;
  display: block;
  @include mobile {
    width: 100%;
    margin: 20px auto;
  }
}
</style>
