import { reactive } from 'vue'

export const messages = reactive({
  error: "",
  loading: "",
  setLoading(str) {
    this.loading = str;
  },
  setError(str) {
    this.error = str;
  },
  clearLoading() {
    this.loading = "";
  },
  clearError() {
    this.error = "";
  }
});

