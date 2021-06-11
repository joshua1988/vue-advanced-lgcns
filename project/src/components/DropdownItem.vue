<template>
  <li
    id="listbox-item-0"
    role="option"
    class="cursor-default select-none relative py-2 pl-3 pr-9 list-item"
    :class="listClass"
    @click="selectDropdown"
  >
    <!-- @mouseenter="highlightItem"
    @mouseleave="unhighlightItem"
    @click="selectDropdown" -->
    <div class="flex items-center">
      <img :src="imageUrl" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
      <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
      <span class="ml-3 block truncate dropdown-name" :class="textClass">
        {{ personName }}
      </span>
    </div>

    <!--
            Checkmark, only display for selected option.

            Highlighted: "text-white", Not Highlighted: "text-indigo-600"
          -->
    <DropdownItemCheckMark v-if="checked"></DropdownItemCheckMark>
  </li>
</template>

<script>
import DropdownItemCheckMark from "./DropdownItemCheckMark.vue";

export default {
  components: { DropdownItemCheckMark },

  props: {
    personName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    checked: Boolean,
    isMouseOver: Boolean
  },

  computed: {
    listClass() {
      return {
        "text-gray-900": !this.isMouseOver,
        "text-white": this.isMouseOver,
        "bg-indigo-600": this.isMouseOver
      };
    },
    textClass() {
      return this.checked ? "font-semibold" : "font-normal";
      // return {

      //   this.checked ? 'font-semibold' : 'font-normal'
      // }
    }
  },

  methods: {
    selectDropdown() {
      this.$emit("select", this.personName);
    }
  }
};
</script>

<style></style>
