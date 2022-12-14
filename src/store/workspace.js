import router from "~/routes";

export default {
  namespaced: true,
  state() {
    return {
      workspaces: [],
      currentWorkspace: {},
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
    async createWorkspace({ dispatch }, payload = {}) {
      const { parentId } = payload;
      const workspace = await fetch(process.env.API_KEY, {
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
      await dispatch("readWorkspaces");
      router.push({
        name: "Workspace",
        params: {
          id: workspace.id,
        },
      });
    },
    async readWorkspaces({ commit, dispatch }) {
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
      if (!workspaces.length) {
        dispatch("createWorkspace");
      }
    },
    async readWorkspace({ commit }, payload) {
      const { id } = payload;
      const workspace = await fetch(`${process.env.API_KEY}${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-username": process.env.USERNAME,
        },
      }).then((res) => res.json());
      commit("assignState", {
        currentWorkspace: workspace,
      });
    },
    async updateWorkspace({ dispatch }, payload) {
      const { id, title, content } = payload;
      await fetch(`${process.env.API_KEY}${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-username": process.env.USERNAME,
        },
        body: JSON.stringify({
          title,
          content,
        }),
      }).then((res) => res.json());
      dispatch("readWorkspaces");
    },
    async deleteWorkspace({ state, dispatch }, payload) {
      const { id } = payload;
      await fetch(`${process.env.API_KEY}${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-username": process.env.USERNAME,
        },
      }).then((res) => res.json());
      await dispatch("readWorkspaces");
      if (id === parseInt(router.currentRoute.value.params.id, 10)) {
        router.push({
          name: "Workspace",
          params: {
            id: state.workspaces[0].id,
          },
        });
      }
    },
  },
};
