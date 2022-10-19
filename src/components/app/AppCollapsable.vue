<script setup lang="ts">
defineProps<{
  value: boolean
}>()

defineEmits<{
  (e: 'update:value', value: boolean): void
}>()

const beforeEnter = (el: HTMLElement) => {
  requestAnimationFrame(() => {
    if (!el.style.height) {
      el.style.height = '0px'
    }
    el.style.display = ''
  })
}
const enter = (el: HTMLElement) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.height = `${el.scrollHeight}px`
    })
  })
}
const afterEnter = (el: HTMLElement) => {
  el.style.height = ''
}
const beforeLeave = (el: HTMLElement) => {
  requestAnimationFrame(() => {
    if (!el.style.height) {
      el.style.height = `${el.offsetHeight}px`
    }
  })
}
const leave = (el: HTMLElement) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.height = '0px'
    })
  })
}
const afterLeave = (el: HTMLElement) => {
  el.style.height = ''
}
</script>

<template>
  <Transition
    ref="contentEl"
    enter-active-class="enter-active"
    leave-active-class="leave-active"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <div v-show="value" :aria-expanded="value" class="app-collapsable">
      <slot />
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.app-collapsable {
  opacity: 0;
  transition: height var(--collapse-time, 0.35s) var(--collapse-timing-fn, ease),
    opacity var(--collapse-time, 0.35s) var(--collapse-timing-fn, ease);
  overflow: hidden;

  &[aria-expanded='true'] {
    opacity: 1;
  }

  .enter-active,
  .leave-active {
    overflow: hidden;
    transition: height var(--collapse-time, 0.35s)
        var(--collapse-timing-fn, ease),
      opacity var(--collapse-time, 0.35s) var(--collapse-timing-fn, ease);
  }
}
</style>
