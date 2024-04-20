<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.colors.primary }">
    <v-main>
      <SideBare />
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="2">
            <v-row>
              <v-col cols="12" sm="12">
                <v-expansion-panels v-model="panel">
                  <v-expansion-panel class="co">
                    <v-expansion-panel-title class="text-white bg-orange"
                      ><v-icon icon="mdi mdi-menu" class="ml-n4 mr-1"> </v-icon
                      >Phân loại</v-expansion-panel-title
                    >
                    <v-expansion-panel-text>
                      <v-list class="cat" density="compact">
                        <v-list-item
                          v-for="(item, i) in items"
                          :key="i"
                          :value="item"
                          color="orange"
                          variant="plain"
                          class="ml-n2"
                        >
                          <v-list-item-title
                            v-text="item.text"
                            class="text-caption"
                          ></v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
              <v-col cols="12" sm="12">
                <v-card class="co">
                  <v-list lines="two" class="cat pro">
                    <v-list-subheader inset class="ml-n10 text-white"
                      >Bán chạy nhất</v-list-subheader
                    >

                    <v-list-item
                      v-for="product in products"
                      :key="product.title"
                      :title="product.title"
                      color="red"
                    >
                      <v-list-item-subtitle
                        v-text="product.subtitle"
                        class="text-caption text-orange"
                      ></v-list-item-subtitle>
                      <template v-slot:prepend>
                        <v-avatar variant="outlined" rounded="0" color="grey">
                          <v-img color="white" :src="product.image"></v-img>
                        </v-avatar>
                      </template>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12">
                <v-card class="co pa-2">
                  <h5 class="ml-4 text-white">Phổ biến</h5>
                  <v-chip class="ma-2 tag" label color="white">
                    Tráng miệng
                  </v-chip>
                  <v-chip class="ma-2" label color="white"> Nước ép </v-chip>
                  <v-chip class="ma-2" label color="white"> Kem tươi </v-chip>
                  <v-chip class="ma-2" label color="white"> cà phê </v-chip>
                  <v-chip class="ma-2" label color="white"> Trà sữa </v-chip>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="8">
            <v-row>
              <v-col cols="12" sm="12">
                <v-carousel :show-arrows="false">
                  <v-carousel-item
                    v-for="(item, i) in pictures"
                    :key="i"
                    :src="item.src"
                    cover
                  ></v-carousel-item>
                </v-carousel>
              </v-col>
              <v-col cols="12" sm="12">
                <v-toolbar color="#1F1F1F">
                  <v-toolbar-title
                    >Giao hàng nhanh và tiết kiệm</v-toolbar-title
                  >

                  <v-spacer></v-spacer>

                  <v-btn color="white" class="btn"> Xem ưu đãi </v-btn>
                </v-toolbar>
              </v-col>
              <v-col cols="12" sm="12">
                <v-card class="tb" flat>
                  <v-tabs v-model="tab" color="grey" align-tabs="end">
                    <v-tab :value="1">Tráng miệng</v-tab>
                    <v-tab :value="2">Thức uống</v-tab>
                    <v-tab :value="3">Kem tươi</v-tab>
                  </v-tabs>
                  <v-window v-model="tab" class="co">
                    <v-window-item v-for="n in 3" :key="n" :value="n">
                      <v-container fluid>
                        <v-row>
                          <v-col
                            v-for="(dishe, i) in dishes"
                            :key="i"
                            cols="12"
                            md="3"
                          >
                            <v-hover
                              v-slot="{ isHovering, props }"
                              open-delay="200"
                            >
                              <v-card class="" color="#111111" v-bind="props">
                                <v-img
                                  height="90"
                                  :src="dishe.image"
                                  class="mt-6"
                                ></v-img>
                                <v-card-item class="text-center mt-14">
                                  <v-card-subtitle>
                                    <span class=" ">{{ dishe.name }}</span>
                                  </v-card-subtitle>
                                  <v-card-title
                                    class="text-caption text-orange"
                                    >{{ dishe.money }}</v-card-title
                                  >
                                </v-card-item>
                                <v-expand-transition>
                                  <div
                                    v-if="isHovering"
                                    class="d-flex transition-fast-in-fast-out bg-grey-darken-3 v-card--reveal text-h2"
                                    style="height: 100%"
                                  >
                                    <v-btn
                                      density="compact"
                                      icon="mdi mdi-magnify"
                                      class="mr-2"
                                    ></v-btn>
                                    <v-btn
                                      density="compact"
                                      icon="mdi mdi-heart-outline"
                                      class="mr-2"
                                    ></v-btn>
                                    <v-btn
                                      density="compact"
                                      icon="mdi mdi-sync"
                                    ></v-btn>
                                  </div>
                                </v-expand-transition>
                              </v-card>
                            </v-hover>
                          </v-col>
                          <v-toolbar color="transparent">
                            <v-toolbar-title class="text-white"
                              >Danh sách</v-toolbar-title
                            >
                            <v-spacer></v-spacer>
                            <v-icon icon="mdi mdi-chevron-left-circle"></v-icon>
                            <v-icon
                              icon="mdi mdi-chevron-right-circle"
                              class=""
                            ></v-icon>
                          </v-toolbar>
                          <v-col cols="12" sm="12">
                            <v-sheet
                              class="mx-auto co"
                              elevation="8"
                              max-width="800"
                            >
                              <v-slide-group
                                v-model="model"
                                class="pa-4"
                                center-active
                                show-arrows
                              >
                                <v-slide-group-item
                                  v-for="(dishe, i) in dishes"
                                  :key="i"
                                  v-slot="{ isSelected, toggle }"
                                >
                                  <v-card
                                    :color="isSelected ? 'primary' : '#111111'"
                                    class="ma-4 btn"
                                    height="100"
                                    width="200"
                                    @click="toggle"
                                  >
                                    <v-row>
                                      <v-col cols="12" sm="6">
                                        <v-img
                                          height="100"
                                          :src="dishe.image"
                                          class="ml-5"
                                        ></v-img>
                                      </v-col>
                                      <v-col
                                        cols="12"
                                        sm="6"
                                        class="text-center mt-6"
                                      >
                                        <span class=" ">{{ dishe.name }}</span>

                                        <h5 class="text-caption text-orange">
                                          {{ dishe.money }}
                                        </h5>
                                      </v-col>
                                    </v-row>
                                    <div
                                      class="d-flex fill-height align-center justify-center"
                                    >
                                      <v-scale-transition>
                                        <v-icon
                                          v-if="isSelected"
                                          color="white"
                                          size="48"
                                          icon="mdi-close-circle-outline"
                                        ></v-icon>
                                      </v-scale-transition>
                                    </div>
                                  </v-card>
                                </v-slide-group-item>
                              </v-slide-group>
                            </v-sheet>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-window-item>
                  </v-window>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="2">
            <v-row>
              <v-col cols="12" sm="12">
                <v-card class="co">
                  <v-list lines="two" class="cat pro">
                    <v-list-item
                      v-for="offer in offers"
                      :key="offer.title"
                      :title="offer.title"
                      color="red"
                    >
                      <v-list-item-subtitle
                        v-text="offer.subtitle"
                        class="text-caption"
                      ></v-list-item-subtitle>
                      <template v-slot:prepend>
                        <v-icon
                          :icon="offer.icon"
                          large
                          color="orange"
                        ></v-icon>
                      </template>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12">
                <v-card class="co pa-2">
                  <div class="float-sm-left">
                    <span class="ml-4 text-white">Member VIP</span>
                    <v-icon
                      icon="mdi mdi-chevron-right-circle"
                      class="ml-10"
                    ></v-icon>
                    <v-icon icon="mdi mdi-chevron-left-circle"></v-icon>
                  </div>
                  <div class="text-center">
                    <v-avatar variant="outlined" color="white" class="mt-2">
                      <v-img src="/20.jpg" alt="John"></v-img>
                    </v-avatar>
                    <h5 class="text-grey mt-3">Sơn Tùng MTP</h5>
                    <p class="text-grey mt-2 text-caption">
                      "Tôi cảm thấy cửa hàng này là một trong những cửa hàng bán đồ ăn nhẹ ngon nhất mà tôi từng ăn"
                    </p>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12">
                <v-card class="co pa-2">
                  <div class="float-sm-left mb-4">
                    <span class="ml-4 text-white">Mới nhất </span>
                    <v-icon
                      icon="mdi mdi-chevron-right-circle"
                      class="ml-6"
                    ></v-icon>
                    <v-icon icon="mdi mdi-chevron-left-circle"></v-icon>
                  </div>
                  <div class="text-center">
                    <v-img src="/40.jpg" alt="pi" width="200"></v-img>
                  </div>
                  <h5 class="text-grey mt-3">Trà sữa hành lá</h5>
                  <p class="text-grey mt-2 text-caption">20-04-2024</p>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import SideBare from "@/components/SideBare.vue";
import Footer from "@/components/Footer.vue";
</script>
<script>
export default {
  data: () => ({
    panel: [0],
    disabled: false,
    tab: null,
    model: null,
    items: [
      { text: "Cà phê" },
      { text: "Nước ép" },
      { text: "Kem tươi" },
      { text: "Trà sữa" },
    ],
    products: [
      {
        title: "Cappuccino",
        subtitle: "30.000đ",
        image: "3.png",
      },
      {
        title: "Kem dừa",
        subtitle: "25.000đ",
        image: "11.png",
      },
      {
        title: "Sinh tố Dâu",
        subtitle: "20.000đ",
        image: "20.png",
      },
      {
        title: "Sinh tố lúa mạch",
        subtitle: "15.000đ",
        image: "21.png",
      },
      {
        title: "Trà sữa thái xanh",
        subtitle: "28.000đ",
        image: "7.png",
      },
    ],
    offers: [
      {
        title: "Khách hàng VIP",
        subtitle: "Giảm 30% ",
        icon: "mdi mdi-diamond-stone",
      },
      {
        title: "Ưu đãi",
        subtitle: "Mua 1 tặng 1",
        icon: "mdi mdi-anchor",
      },
      {
        title: "Phục vụ 24/7",
        subtitle: "6:00 đến 22:00",
        icon: "mdi mdi-coffee",
      },
      {
        title: "Nhiều ưu đãi khác",
        subtitle: "Mua ngay",
        icon: "mdi mdi-basket",
      },
      {
        title: "Miễn phí ship",
        subtitle: "Đối với đơn từ 150.000đ trở lên",
        icon: "mdi mdi-airplane",
      },
    ],
    pictures: [
      {
        src: "p2.jpg",
      },
      {
        src: "p4.jpg",
      },
      {
        src: "p3.jpg",
      },
      {
        src: "p1.jpg",
      },
    ],
    dishes: [
      { image: "f1.png", name: "Kem ốc quế", money: "20.000đ" },
      { image: "f2.png", name: "sữa chua", money: "$15.000đ" },
      { image: "f3.png", name: "Sinh tố Dừa", money: "20.000đ" },
      { image: "f4.png", name: "Sinh tố chuối", money: "20.000đ" },
      { image: "f5.png", name: "Cà phê sữa", money: "18.000đ" },
      { image: "f6.png", name: "Cà phê đen", money: "15.000đ" },
      { image: "f7.avif", name: "Trà sữa Chocolate", money: "20.000đ" },
      { image: "44.png", name: "Chanh tuyết", money: "23.000đ" },
    ],
  }),
};
</script>
<style scoped>
.co {
  background-color: #1f1f1f;
}
.tb {
  background-color: #2f2f2f;
}

.cat {
  background-color: #1f1f1f;
  color: white;
}
.tag:hover {
  color: orange;
}
.btn {
  background-color: #111111;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
