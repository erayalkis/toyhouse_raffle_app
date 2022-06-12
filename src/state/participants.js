import { reactive } from 'vue'

export const participants = reactive({
  list: {},
  changed: [],
  removed: [],
  loaded: false,
  setParticipants(obj) {
    console.log(obj);
    this.list = obj;
    console.log(this.list);
  },
  deleteParticipants() {
    this.list = {};
    this.loaded = false;
  },
  remove(key) {
    console.log(key);
    this.removed.push({ username: key, details: this.list[key] })
    
    delete this.list[key];
  }
});

