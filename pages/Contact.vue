<template>
  <div class="page">
    <h1>Contact</h1>
    <div class="email-container">
      <a href="mailto:cj@charlesjewell.com">
        <h2 id="email" data-el="cj@charlesjewell.com">cj@charlesjewell.com</h2>
      </a>
    </div>
    <div class="social-container">
      <a
        class="social-link"
        target="_blank"
        href="https://www.linkedin.com/in/jewellcharles/"
      >LinkedIn</a>
      <br>
      <a class="social-link" target="_blank" href="https://github.com/cjewell47">GitHub</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang='scss' scoped>
@mixin mobile {
  @media screen and (max-width: 767px) {
    @content;
  }
}
$blue: #0000ff;
h1 {
  color: $blue;
  font-size: 2rem;
}
.page {
  max-width: 700px;
  margin: auto;
  text-align: center;
}

.email-container {
  position: relative;
  margin: 0 auto 20px;
  width: 400px;
  height: 70px;
  border: 1px solid #000;
  @media screen and (max-width: 450px) {
    width: 280px;
  }
  a {
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    #email {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      position: absolute;
      margin: 0;
      color: #000;
      background: transparent;
      justify-content: center;
      z-index: 1;
      transition: font-size 250ms cubic-bezier(0.59, 0.04, 0.3, 1.43);
      &:after {
        content: attr(data-el);
        position: absolute;
        left: 0;
        z-index: 2;
        overflow: hidden;
        white-space: wrap;
        width: 100%;
        height: 100%;
        top: 0;
        display: flex;
        align-items: center;
        text-align: center;
        position: absolute;
        justify-content: center;
        opacity: 0;
        color: #fff;
        background: #000;
        clip-path: polygon(0 0, 100% 0, 101% 25%, 0 77%);
        transition: opacity 0.4s ease;
      }
    }
  }
  &:hover {
    a {
      #email {
        &:after {
          opacity: 1;
        }
      }
    }
  }
}
.social-container {
  display: flex;
  margin: 0 auto 20px;
  width: 400px;
  justify-content: space-around;
  @media screen and (max-width: 450px) {
    width: 280px;
  }
}
.social-link {
  color: $blue;
  position: relative;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #fff, #fff 50%, $blue 50%);
  background-size: 200% 100%;
  background-position: 100%;
  transition: all 0.3s cubic-bezier(0, 0, 0.23, 1);
  &:hover {
    background-position: 0%;
  }
}
</style>
