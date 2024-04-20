<template>
  <v-system-bar color="#1F1F1F">
    <span>Kính chào quý khách</span>
    <v-spacer></v-spacer>
    <v-icon icon="mdi mdi-facebook" class="ms-2"></v-icon>
    <v-icon icon="mdi mdi-linkedin" class="ms-2"></v-icon>
    <v-icon icon="mdi mdi-pinterest" class="ms-2"></v-icon>
    <v-icon icon="mdi mdi-twitter" class="ms-2"></v-icon>
    <v-icon icon="mdi mdi-instagram" class="ms-2"></v-icon>
    <v-icon icon="mdi mdi-youtube" class="ms-2"></v-icon>
  </v-system-bar>
  <v-app-bar height="100" flat color="#1F1F1F">
    <v-app-bar-title>
      <h2>Menu</h2>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-card
      color="#141415"
      flat
      outlined
      height="50"
      width="500"
      class="mt-6 pt-1"
    >
      <v-row>
        <v-col cols="12" sm="10">
          <v-text-field
            density="compact"
            placeholder="Search"
            variant=""
            class=""
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-icon
            color="orange"
            icon="mdi mdi-magnify"
            size="large"
            class="mt-2 ml-4"
          ></v-icon>
        </v-col>
      </v-row>
    </v-card>

    <v-spacer></v-spacer>
    <div>
      <span class="ml-4 text-caption">Danh sách</span><br />
      <v-btn append-icon="mdi mdi-heart-outline" class="account">
        Yêu thích
        <template v-slot:append>
          <v-icon></v-icon>
        </template>
      </v-btn>
    </div>
    <v-divider vertical inset class="mr-6"></v-divider>
    <div>
      <span class="ml-4 text-caption">Đăng nhập/Đăng kí</span><br />
      <v-btn append-icon="mdi mdi-lock-open-outline" class="account">
        My account
        <template v-slot:append>
          <v-icon></v-icon>
        </template>
      </v-btn>
    </div>
    <v-divider vertical inset class="mr-6"></v-divider>
    <v-icon class="mr-10">mdi mdi-shopping-outline</v-icon>
  </v-app-bar>
  <v-app-bar height="50" flat color="#191919">
    <v-btn variant="text" color="orange"> Trang chủ </v-btn>
    <v-btn variant="text" class="account" @click="goToCoffeePage"> Coffee </v-btn>
    <v-btn variant="text" class="account"> Kem tươi </v-btn>
    <v-btn variant="text" class="account"> Nước ép </v-btn>
    <v-btn variant="text" class="account"> Trà sữa </v-btn>
    <v-spacer></v-spacer>
    <v-btn
      density="comfortable"
      icon="mdi mdi-phone"
      class="phone mr-2"
    ></v-btn>
    <div>
      <span class="text-caption">Liên hệ</span><br />
      <span class="text-grey text-caption mr-2">0832183162</span>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    goToCoffeePage() {
      this.$router.push('/coffee');
    }
  }
};
</script>

<style>
.account {
  transition-duration: 0.4s;
}
.account:hover {
  color: orange;
}
.phone {
  background-color: orange !important;
}
</style>
