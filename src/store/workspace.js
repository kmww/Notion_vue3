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
    async createWorkspace(context, payload = {}) {
      const { parentId } = payload;
      await fetch(process.env.API_KEY, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-username": process.env.USERNAME,
        },
        body: JSON.stringify({
          title: "",
          parent: parentId,
        }),
      }).then((res) => res.json());
    },
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
    async deleteWorkspace(context, payload) {
      const { id } = payload;
      await fetch(`${process.env.API_KEY}${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-username": process.env.USERNAME,
        },
      }).then((res) => res.json());
    },
  },
};
