<template>
  <v-footer color="#1F1F1F" class="d-flex flex-column">
    <div class="px-4 py-2 bgTop  w-100">
      <v-toolbar color="transparent" height="40">
       <span class="mr-2">Mua 1 tặng 1</span>
       <span>Tính tiền 2</span>
       <v-spacer></v-spacer>
       <v-icon>mdi mdi-cash-multiple</v-icon>
       <v-icon>mdi mdi-currency-usd</v-icon>
       <v-icon>mdi mdi-cash-100</v-icon>
      </v-toolbar>
    </div>
    <div class=" d-flex w-100 bgMidum px-4 pb-10">
<v-row>
  <v-col col="12" sm="3">
    <h4 class="mt-2">Kết nối với chúng tôi</h4>
    <span class="text-caption">Facebook</span><br>
    <span class="text-caption">Twitter</span><br>
    <span class="text-caption">Instagram</span><br>
    <span class="text-caption">Whatsapp</span><br>
    <span class="text-caption">Youtube</span><br>
    <span class="text-caption">Pinterest</span>
  </v-col>
  <v-col col="12" sm="3">
    <h4 class="mt-2">Về cửa hàng</h4>
    <span class="text-caption">Hơn 30 chi nhánh khắp cả nước</span><br>
    <span class="text-caption">Nhượng quyền liên hệ : +84832183162 (Mr.Tỏn)</span><br>
    <span class="text-caption">Giảm giá vào những dịp đặc biệt</span><br>
    <span class="text-caption">Nhân viên tay nghề cao</span><br>
    <span class="text-caption">Hỗ trợ khách hàng 24/7</span><br>
    <span class="text-caption">Updating...</span>
  </v-col>
  <v-col col="12" sm="3">
    <h4 class="mt-2">Thông tin cửa hàng</h4>
    <span class="text-caption">Địa chỉ : 33 Vĩnh viễn, P2, Quận 10, TP HCM (Trụ sở chính)</span><br>
    <span class="text-caption">Đạt chứng nhận An toàn vệ sinh thực phẩm 2024</span><br>
    <span class="text-caption">26003</span><br>
    <span class="text-caption">Liên hệ: 19001009</span><br>
    <span class="text-caption">Số khác : +84832183162 (Mr.Tỏn)</span><br>
    <span class="text-caption">Email: Coffee4conGa@gmail.com</span>
  </v-col>
  <v-col col="12" sm="3">
    <h4 class="mt-2">Vị trí</h4>
    <v-img src="/HCE.png" height="150" class="ml-n16"></v-img>
  </v-col>
</v-row>
    </div>

    <div class="px-4 py-2 bgTop text-center w-100">
      <v-icon class="mr-2">mdi mdi-copyright</v-icon>{{ new Date().getFullYear() }} — <strong>COFFEE 4 CON GÀ</strong>
    </div>

    </v-footer>
  </template>

  <script>
  export default {};
  </script>

  <style>

.v-footer {
  padding: 0 0 !important;
}
.bgTop{
  background-color:#111111;
}
.bgMidum{
  background-color:#1F1F1F;
}
</style>
