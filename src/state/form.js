import { reactive } from "vue";

export const form = reactive({
  shouldSub: false,
  toggleShouldSub() {
    this.shouldSub = !this.shouldSub;
  },
  shouldComment: false,
  toggleShouldComment() {
    this.shouldComment = !this.shouldComment;
  },
  subCount: 1,
  commentCount: 1,
});
