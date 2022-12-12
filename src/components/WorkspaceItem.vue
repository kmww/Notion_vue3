<template>
  <li>
    <div class="title" :style="{ paddingLeft: `${14 * depth}px` }">
      {{ workspace.title }}
    </div>
    <ul v-if="hasChildren">
      <WorkspaceItem
        v-for="ws in workspace.documents"
        :key="ws.id"
        :workspace="ws"
        :depth="depth + 1"
      />
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    workspace: {
      type: Object,
      default: () => ({}),
    },
    depth: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    hasChildren() {
      return this.workspace.documents && this.workspace.documents.length;
    },
  },
};
</script>
