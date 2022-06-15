import { reactive } from 'vue'

export const participants = reactive({
  list: {},
  changed: [],
  removed: [],
  loaded: false,
  setParticipants(obj) {
    this.list = obj;
  },
  deleteParticipants() {
    this.list = {};
    this.loaded = false;
    this.removed = [];
    // Holds original values, list holds changed values
    // I know its confusing
    this.changed = {};
  },
  remove(key) {
    this.removed.push({ username: key, details: this.list[key] })
    delete this.list[key];
  },
  increment(key) {
    let user = this.list[key]
    user.ticket_count += 1;
  },
  decrement(key) {
    let user = this.list[key]
    user.ticket_count -= 1;
  }
});

