<template>
  <vue-tree-navigation :items="items" :defaultOpenLevel="defaultOpenLevel" />
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "Home", route: "home" },
        {
          name: "Comics",
          route: "comics",
          children: [
            { name: "Appalachian Rabbi Avatar", route: "appalachian-rabbi-avatar-comic" },
            { name: "MLK Day", route: "mlk-day-comic" }
          ]
        },
        {
          name: "Art",
          route: "art",
          children: [
            { name: "Cut Paper", route: "cut-paper" },
            { name: "Torah Ark Project", route: "torah-ark" }
          ]
        },
        {
          name: "Bio and Contact",
          route: "about",
          children: [
            {
              name: "About Jean",
              route: "bio"
            },
            {
              name: "Contact",
              route: "contact"
            }
          ]
        }
      ],
      defaultOpenLevel: 0
    };
  }
};
</script>

<style scoped>
.NavigationLevel__children {
  padding-left: 10px;
}

.NavigationLevel__parent {
  font-weight: 600;
  padding-bottom: 5px;
}

.NavigationItem {
  color: #545454;
  padding: 0;
}

.NavigationItem--active {
  color: #42b883;
}

.NavigationToggle__icon {
  border-color: #42b883;
}
</style>
