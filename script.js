
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/taixiu-clash/id6503441063";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/47/21/bd/4721bdec-30c2-835e-d5f0-dd965c63c2c9/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  image2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  image3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  image4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  image5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4b/d5/4e/4bd54efb-5497-b950-91f0-b06c773b5979/8d2bf1fa-f1b4-4d87-94e6-f6e53658f281_1.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/15/46/eb/1546eb74-0641-b0e0-7a00-fcf746161cb2/32e04040-af6a-4fb8-be6f-42060f3da5cc_2.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/92/1c/30/921c30d5-f53c-3c00-f501-b0720d1dcb2b/5e2b6159-9f03-4800-a3e1-fc9d625f87d2_3.jpg/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3

