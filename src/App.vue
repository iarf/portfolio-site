<template>
  <b-container fluid class="wrapper">
    <b-row class="hero">
      <transition name="slide">
      <component :is="$store.state.heroPage"></component>
      </transition>
    </b-row>
    <b-row class="nav-drawer">
      <b-col cols="12" sm="6" lg="5" xl="4">
        <HomeCard></HomeCard>
      </b-col>
      <b-col cols="12" sm="6" lg="5" xl="4">
        <CmsCard></CmsCard>
      </b-col>
      <b-col cols="12" sm="6" lg="5" xl="4">
        <AutomataCard></AutomataCard>
      </b-col>
      <b-col cols="12" sm="6" lg="5" xl="4">
        <ChessCard></ChessCard>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import About from "./components/hero/About";
import CmsCard from "./components/CmsCard";
import HomeCard from "./components/HomeCard";
import AutomataCard from "./components/AutomataCard";
import Cms from "./components/hero/Cms";
import Automata from './components/hero/Automata';
import Chess from './components/hero/Chess';
import ChessCard from './components/ChessCard'

export default {
  components: {
    About,
    CmsCard,
    Cms,
    HomeCard,
    AutomataCard,
    Automata,
    ChessCard,
    Chess
  }
};
</script>

<style lang="sass">
//transitions
.slide-enter-active, .slide-leave-active
  transition: all .5s ease-in-out
  position: absolute
.slide-enter
  transform: translateX(100vw) scale(1.25)
  opacity: .5
.slide-enter-to, .slide-leave
  transform: translateX(0) scaleX(1)
  opacity: 1
.slide-leave-to
  transform: translateX(-100vw) scale(.5)
  opacity: .5
//###########
::-webkit-scrollbar
  width: 6px
::-webkit-scrollbar-thumb
  background: rgba(120, 120, 120, .5)
  border-radius: 3px
  &:hover
    background: rgba(120, 120, 120, .75)

.wrapper
  padding: 0
  overflow: hidden
.hero
  background: #2e3b4f
  min-height: 60vh
  color: #ededed
  box-shadow: 0 0 10px black !important
.nav-drawer
  height: 40vh
  padding: 2rem
  background: #333942
  background: linear-gradient(180deg, black -40px, #333942 12px, #333942 100%)
  overflow-y: scroll
</style>