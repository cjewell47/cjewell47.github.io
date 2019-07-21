<template>
  <div class="page">
    <h1>Skills</h1>
    <div class="skills-container">
      <menu>
        <menuitem
          :class="{'menuitem-active': skills === 1, 'menuitem-inactive': skills === 2 || skills === 3}"
        >
          <p>What I use often</p>
          <button
            class="menuitem-button"
            aria-label="What I use often"
            @click="skills === 1 ? skills = 0 : skills = 1"
          />
        </menuitem>
        <menuitem
          :class="{'menuitem-active': skills === 2, 'menuitem-inactive': skills === 1 || skills === 3}"
        >
          <p>What I have experience with</p>
          <button
            class="menuitem-button"
            aria-label="What I have experience with"
            @click="skills === 2 ? skills = 0 : skills = 2"
          />
        </menuitem>
        <menuitem
          :class="{'menuitem-active': skills === 3, 'menuitem-inactive': skills === 1 || skills === 2}"
        >
          <p>What I'm learning</p>
          <button
            class="menuitem-button"
            aria-label="What I'm learning"
            @click="skills === 3 ? skills = 0 : skills = 3"
          />
        </menuitem>
      </menu>
      <article>
        <div :class="{ 'skills-active': skills === 1 || skills === 2 || skills === 3 }">
          <div v-if="skills === 1" class="skills-text">
            <p v-for="(skill, i) in skillsObj.one" :key="i">
              {{ skill }}
            </p>
          </div>
          <div v-if="skills === 2" class="skills-text">
            <p v-for="(skill, i) in skillsObj.two" :key="i">
              {{ skill }}
            </p>
          </div>
          <div v-if="skills === 3" class="skills-text">
            <p v-for="(skill, i) in skillsObj.three" :key="i">
              {{ skill }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import skillsObj from '../skills.json'

export default {
  name: 'Skills',
  data() {
    return {
      skills: 0,
      skillsObj: skillsObj
    }
  }
}
</script>

<style lang="scss" scoped>
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
  display: flex;
  justify-content: center;
  max-width: 1100px;
  flex-direction: column;
  align-items: center;
}
.skills-container {
  width: 600px;
  margin: 40px auto;
  display: block;
  @include mobile {
    width: 100%;
    margin: 20px auto;
  }
}
article {
  margin: 50px 10px 10px;
  & > div {
    display: inline-flex;
    width: 100%;
    position: relative;
    overflow: hidden;
    min-height: 300px;
    .skills-text {
      z-index: 2;
    }
  }
}
.skills-text {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: max-content;
  width: 100%;
  & > p {
    text-align: center;
  }
  @include mobile {
    grid-template-columns: repeat(2, 1fr);
  }
}
menu {
  padding: 0;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @include mobile {
    margin: 10px 0;
    width: 100%;
  }
}
menuitem {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.35s ease-in-out;
   @include mobile {
     height: 190px;
     justify-content: space-between;
    p {
      opacity: 0;
      text-align: center;
      width: 110%;
    }
  }
}
.menuitem {
  &-button {
    position: relative;
    font-size: 1.5rem;
    height: 100px;
    width: 100px;
    background: white;
    background: linear-gradient(
      135deg,
      rgba(255, 0, 0, 1) 50%,
      rgba(255, 255, 255, 1) 50%
    );
    background-position: 100% 100%;
    background-size: 400%;
    border-radius: 100%;
    transition: all 0.5s ease;
    &::before,
    &::after {
      position: absolute;
      font-size: 2em;
      top: 9px;
      color: #000;
      transition: all 0.5s ease-in-out;
    }
    &::before {
      content: "<";
      left: 25%;
    }
    &::after {
      content: ">";
      right: 25%;
    }
    &:hover {
      transform: scale(1.05);
      background-position: 40% 40%;
      &::before,
      &::after {
        font-size: 2.2em;
        top: 5px;
      }
      &::before {
        left: 10%;
      }
      &::after {
        right: 10%;
      }
    }
    &:focus {
      outline: none;
    }
    @include mobile {
      border-radius: 0;
      &:hover {
        transform: scale(1);
      }
    }
  }
  &-active {
    .menuitem-button {
      transform: scale(1.05);
      background-position: 40% 40%;
      &::before,
      &::after {
        font-size: 2.2em;
        top: 8px;
      }
      &::before {
        left: 10%;
      }
      &::after {
        right: 10%;
      }
    }
    @include mobile {
      .menuitem-button {
        transform: scale(1);
      }
      p {
        opacity: 1;
      }
    }
  }
  &-inactive {
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    @include mobile {
      p {
        opacity: 0;
      }
    }
  }
}
</style>
