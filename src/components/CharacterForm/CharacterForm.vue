<template>
  <div
    class="flex-col p-10 bg-toyhouse-bg-primary border border-toyhouse-border-primary rounded-sm text-toyhouse-text-primary"
  >
    <h3 class="text-xl font-semibold">Toyhouse Raffle</h3>
    <hr class="my-2" />
    <h3 class="font-bold">Character Profile</h3>
    <div class="flex mt-2">
      <input
        placeholder="Profile Url"
        class="p-2 border border-toyhouse-border-primary outline-0 rounded-md rounded-r-none w-full indent-1"
      />
      <button
        class="bg-toyhouse-blue-primary text-white p-2 transition duration-300 ease-out rounded-md rounded-l-none hover:bg-toyhouse-blue-secondary"
      >
        Load
      </button>
    </div>
    <div>
      <input type="checkbox" />
    </div>
  </div>
</template>
