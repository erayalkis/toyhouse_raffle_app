import { reactive } from 'vue'

export const participants = reactive({
  list: {},
  setParticipants(obj) {
    console.log(obj);
    this.list = obj;
    console.log(this.list);
  }
});

