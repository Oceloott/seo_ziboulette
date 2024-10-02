<template>
    <nav :class="['nav', { active: isActive }]">
      <div
        id="burger"
        :class="['nav-burger', { active: isActive }]"
        @click="toggleActive"
      >
        <button type="button" class="nav-burger-button" title="Menu">
          <span class="nav-burger-bar nav-burger-bar--1"></span>
          <span class="nav-burger-bar nav-burger-bar--2"></span>
          <span class="nav-burger-bar nav-burger-bar--3"></span>
        </button>
      </div>
      <div class="nav-container full grid">
        <div class="nav-container-title col-3">
          <span>Ziboueltte</span>
        </div>
        <ul class="nav-items col-9">
          <li v-for="item in menuList" :key="item.id" class="nav-link active">
            <RouterLink class="nav-text" :to="item.url" :target="item.target">{{
              item.label
            }}</RouterLink>
          </li>
        </ul>

      </div>
    </nav>
  </template>  
<script setup>
import { ref } from 'vue';

const isActive = ref(false)

const menuList = ref([
    { id: 0, label: "ABOUT US", url: "/", target:"" },
    { id: 1, label: "ORIGINES", url: "work", target:"" },
    { id: 1, label: "USAGES", url: "work", target:"" },
    { id: 1, label: "ACTUALITY", url: "work", target:"" },
    { id: 1, label: "FAQ", url: "work", target:"" },
])

const toggleActive = () => {
    isActive.value = !isActive.value
}
</script>
<style scoped lang="scss">
.nav {
  height: 62px;
  display: flex;
  align-items: center;

  &-burger {
    &-button {
      cursor: pointer;
      position: relative;
      height: 30px;
      width: 40px;
      display: block;
      z-index: 99;
      border: 0;
      border-radius: 0;
      background-color: transparent;
      pointer-events: all;
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      &:focus {
        outline: 0;
      }

      &.active .nav-burger-bar--1 {
        transform: rotate(45deg);
        top: 50%;
      }
    }
    &-bar {
      background-color: grey;
      position: absolute;
      top: 50%;
      right: 6px;
      left: 6px;
      height: 3px;
      width: auto;
      margin-top: -1px;
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
        opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
        background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      &--1 {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
        top: 40%;
      }
      &--2 {
        transform-origin: 100% 50%;
        transform: scaleX(1);
      }
      &--3 {
        transform: translateY(6px);
        top: 60%;
      }
    }
  }
  &-container {
    @media (max-width: 1169px) {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: blue;
      z-index: 49;
      display: none;
    }
    &-title {
    //   display: none;
      @media (max-width: 1169px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin-top: 15vh;
        font-family: "Fifties", sans-serif;
        font-weight: 700;
        font-style: italic;
        font-size: 56px;
        color: green;
        text-transform: uppercase;
      }
    }
  }

  &-text {
    font-size: 22px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: green;
    margin-right: 64px;
    text-decoration: none;
    @media (max-width: 1169px) {
      margin-right: 0;
      font-size: 32px;
    }
  }
  &-items {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 1169px) {
      display: flex;
      flex-direction: column;
      gap: 32px;
      margin: 42px 0;
    }
  }
  &-right {
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 1169px) {
      display: flex;
      flex-direction: row;
      gap: 32px;
      margin: 42px 4vh;
      justify-content: space-between;
    }
  }
}

// Animation
#burger.active .nav-burger-button {
  transform: rotate(-180deg);
}

#burger.active .nav-burger-bar {
  //   background-color: lighten(var(--primary), 10);
}

#burger.active .nav-burger-bar--1 {
  transform: rotate(45deg);
  top: 50%;
}

#burger.active .nav-burger-bar--2 {
  opacity: 0;
}

#burger.active .nav-burger-bar--3 {
  transform: rotate(-45deg);
  top: 50%;
}
@media screen and (min-width: 1170px) {
  #burger {
    display: none;
  }
}
@media screen and (max-width: 1171px) {
  #burger {
    position: fixed;
    right: var(--margin);
    top: 4vh;
    z-index: 50;
    background-color: blue;
    padding: 6px 5px;
    border-radius: 13%;
    &.active {
      & + .nav-container {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    }
  }
}
</style>