import { reactive } from 'vue'

export const participants = reactive({
  list: {},
  loaded: false,
  setParticipants(obj) {
    console.log(obj);
    this.list = obj;
    console.log(this.list);
  },
  deleteParticipants() {
    this.list = {};
    this.loaded = false;
  }
});

