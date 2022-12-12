export default {
  namespaced: true,
  state() {
    return {
      workspaces: [],
    };
  },
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    createWorkspace() {},
    async readWorkspaces({ commit }) {
      const workspaces = await fetch(process.env.API_KEY, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-username": process.env.USERNAME,
        },
      }).then((res) => res.json());
      commit("assignState", {
        workspaces,
      });
    },
    readWorkspace() {},
    updateWorkspace() {},
    deleteWorkspace() {},
  },
};
