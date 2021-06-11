<template>
  <div class="mx-auto py-6 sm:px-6 lg:px-8">
    <label id="listbox-label" class="block text-sm font-medium text-gray-700">
      Assigned to
    </label>
    <div class="mt-1 relative">
      <button
        @click="isDropdownOpen = !isDropdownOpen"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <span class="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            class="flex-shrink-0 h-6 w-6 rounded-full"
          />
          <span class="ml-3 block truncate">
            {{ selectedName }}
          </span>
        </span>
        <span
          class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <!-- Heroicon name: selector -->
          <svg
            class="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div
        class="absolute mt-1 w-full rounded-md bg-white shadow-lg"
        v-if="isDropdownOpen"
      >
        <ul
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-item-3"
          class="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          <!-- <DropdownItem personName="Wade Cooper"></DropdownItem>
          <DropdownItem personName="Arlene"></DropdownItem>
          <DropdownItem></DropdownItem>
          <DropdownItem></DropdownItem> -->
          <!-- <p @mouseenter="highlightListItem">hihi</p> -->
          <DropdownItem
            v-for="(person, index) in people"
            :key="index"
            :personName="person.name"
            :imageUrl="person.imageUrl"
            :checked="person.name === selectedName"
            :isMouseOver="person.name === mouseOverName"
            @select="selectDropdownItem"
            @mouseenter.native="highlightListItem(person.name)"
          ></DropdownItem>

          <!-- More options... -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DropdownItem from "../components/DropdownItem.vue";

const PEOPLE = [
  {
    name: "Wade Cooper",
    imageUrl:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Arlene Mccoy",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Devon Webb",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
  },
  {
    name: "Tanya Fox",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default {
  components: { DropdownItem },

  data() {
    return {
      isDropdownOpen: false,
      selectedName: PEOPLE[0].name,
      people: PEOPLE.map((person, index) => ({ ...person, id: index })),
      mouseOverName: ""
    };
  },

  methods: {
    selectDropdownItem(name) {
      this.selectedName = name;
    },
    highlightListItem(name) {
      // console.log("highlight");
      this.mouseOverName = name;
    },
    /**
     * @param {MouseEvent} event 마우스 이벤트야
     */
    highlightItem(event) {
      // Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
      event.target.classList.remove("text-gray-900");
      event.target.classList.add("text-white", "bg-indigo-600");
    }
    // unhighlightItem() {
    //   event.target.classList.remove("text-white", "bg-indigo-600");
    //   event.target.classList.add("text-gray-900");
    // },
    // selectDropdown() {
    //   const selectedListElement = event.target.closest(".list-item");
    //   const selectedName = selectedListElement.querySelector(".dropdown-name");
    //   console.log(selectedName);
    // }
  }
};
</script>

<style></style>
