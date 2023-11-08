var cacheName = "v1";
const cacheFiles = [
  {
    url: "build/vendor.js",
    revision: "d5368396e898c4599aaaf43e1db6f72b",
  },
  {
    url: "build/workbox-0858eadd.js",
    revision: "8d0d745db914a1b685ac22f76c66a6ad",
  },
  {
    url: "build/workbox-2b403519.js",
    revision: "1ec82034cd840c65751dbbeee9d7f921",
  },
  { url: "favicon.ico", revision: "c18300a2e402f72063384c4cedec4db1" },
  {
    url: "icons/android/android-launchericon-144-144.png",
    revision: "3bc66eed9280a6ab609ae15179d015bf",
  },
  {
    url: "icons/android/android-launchericon-192-192.png",
    revision: "11075d3b8f9e5c1a80aa85a5da4f0ee2",
  },
  {
    url: "icons/android/android-launchericon-48-48.png",
    revision: "f1b360095e8b68e02dc97e5f183e011f",
  },
  {
    url: "icons/android/android-launchericon-512-512.png",
    revision: "12f9843be410eb55d1a339c324c3b809",
  },
  {
    url: "icons/android/android-launchericon-72-72.png",
    revision: "340020abf930f61b0202f64d6c09b1b6",
  },
  {
    url: "icons/android/android-launchericon-96-96.png",
    revision: "0b9ba46e390dfb95a75cbb4d7b38f823",
  },
  {
    url: "icons/ios/100.png",
    revision: "9d1e9b6403959c47db6c2fa5c576545c",
  },
  {
    url: "icons/ios/1024.png",
    revision: "a9b0e1e31d9ca61d3126d6019a91174f",
  },
  {
    url: "icons/ios/114.png",
    revision: "3b962687fafc2e8aef1f1998d6b6b33b",
  },
  {
    url: "icons/ios/120.png",
    revision: "17989c54a0e690b542e522c87ee5a700",
  },
  {
    url: "icons/ios/128.png",
    revision: "f3d8ac9a7c47c9f1d3d2a43eef7d30c5",
  },
  {
    url: "icons/ios/144.png",
    revision: "3bc66eed9280a6ab609ae15179d015bf",
  },
  {
    url: "icons/ios/152.png",
    revision: "6ff97a705af6ce4153f7085b18b4fccf",
  },
  {
    url: "icons/ios/16.png",
    revision: "12349d626ea512ed6cd87130f3303820",
  },
  {
    url: "icons/ios/167.png",
    revision: "8406450698e89a6b5282231d40b63294",
  },
  {
    url: "icons/ios/180.png",
    revision: "79f1744722f49031c4376703e2a58265",
  },
  {
    url: "icons/ios/192.png",
    revision: "11075d3b8f9e5c1a80aa85a5da4f0ee2",
  },
  {
    url: "icons/ios/20.png",
    revision: "6ad5f21291b5010f5f19ec23c4fcce80",
  },
  {
    url: "icons/ios/256.png",
    revision: "689a95940f3f9532b89b6f3fe16d42c4",
  },
  {
    url: "icons/ios/29.png",
    revision: "4092615226ec65d583697907be8b552a",
  },
  {
    url: "icons/ios/32.png",
    revision: "9aef962706eddb802211dadaa1ae4620",
  },
  {
    url: "icons/ios/40.png",
    revision: "9c6ea0c2dc2e5e37b9007b5f399cb00b",
  },
  {
    url: "icons/ios/50.png",
    revision: "990fc02c67be9a15880c82ac58ddd365",
  },
  {
    url: "icons/ios/512.png",
    revision: "12f9843be410eb55d1a339c324c3b809",
  },
  {
    url: "icons/ios/57.png",
    revision: "356fe160d31b9395c6b5dca8dcaac7ae",
  },
  {
    url: "icons/ios/58.png",
    revision: "c412dd93b9207708aee6b4af78914f23",
  },
  {
    url: "icons/ios/60.png",
    revision: "13fbb4c859f3b53c8d023fc27bd5d404",
  },
  {
    url: "icons/ios/64.png",
    revision: "8ef90fc69aaaa4a4b528163cb1f60aa2",
  },
  {
    url: "icons/ios/72.png",
    revision: "340020abf930f61b0202f64d6c09b1b6",
  },
  {
    url: "icons/ios/76.png",
    revision: "4a22843162fcb07cdda96fc350b48533",
  },
  {
    url: "icons/ios/80.png",
    revision: "9d2b6d1713597f2be07439b69e024fa8",
  },
  {
    url: "icons/ios/87.png",
    revision: "b6f260556188b788ece7719a93bea8d1",
  },
  {
    url: "icons/screenshot.png",
    revision: "2cb6c3203ed6da32fab6ad062559b330",
  },
  {
    url: "icons/windows11/LargeTile.scale-100.png",
    revision: "ea771aefd658790fd5f4bb3915cc327a",
  },
  {
    url: "icons/windows11/LargeTile.scale-125.png",
    revision: "330199aa00606d51e988fd86797bba6b",
  },
  {
    url: "icons/windows11/LargeTile.scale-150.png",
    revision: "48f82f0a5ba3102a8b6c50a00c80f2f1",
  },
  {
    url: "icons/windows11/LargeTile.scale-200.png",
    revision: "10a904b13fd6d4ad20be4ea9793484f1",
  },
  {
    url: "icons/windows11/LargeTile.scale-400.png",
    revision: "152e99a2645bb88312d0c72d22bb4a87",
  },
  {
    url: "icons/windows11/SmallTile.scale-100.png",
    revision: "eeea97b776aaa7fb1093909ce11de528",
  },
  {
    url: "icons/windows11/SmallTile.scale-125.png",
    revision: "34e9ce88ea37fc3648d5432f27467abf",
  },
  {
    url: "icons/windows11/SmallTile.scale-150.png",
    revision: "2ba440e78a0afcc7c0037d93fed10019",
  },
  {
    url: "icons/windows11/SmallTile.scale-200.png",
    revision: "33938b2078fb262a7ae05f0e9d3c70a6",
  },
  {
    url: "icons/windows11/SmallTile.scale-400.png",
    revision: "162a64dcbfd0ab423d1bddd05c0a608c",
  },
  {
    url: "icons/windows11/SplashScreen.scale-100.png",
    revision: "8d67e4ad62bcb1ea1fb766e2d0ad7008",
  },
  {
    url: "icons/windows11/SplashScreen.scale-125.png",
    revision: "3c6069a3932bafbc6af5e4071f218a68",
  },
  {
    url: "icons/windows11/SplashScreen.scale-150.png",
    revision: "bf7de025c0647e888d5cb12603fe2679",
  },
  {
    url: "icons/windows11/SplashScreen.scale-200.png",
    revision: "5d0078cbf88991d939ad7a03eb0d3f7d",
  },
  {
    url: "icons/windows11/SplashScreen.scale-400.png",
    revision: "b1b1372cbd624d2135a90515dc95f22d",
  },
  {
    url: "icons/windows11/Square150x150Logo.scale-100.png",
    revision: "e4f2e1aeb5c1f69351005c9c879f56ea",
  },
  {
    url: "icons/windows11/Square150x150Logo.scale-125.png",
    revision: "476c675e6ae51524ac51e555a2b5657d",
  },
  {
    url: "icons/windows11/Square150x150Logo.scale-150.png",
    revision: "4ef7e15210f5b618e039918ac225277b",
  },
  {
    url: "icons/windows11/Square150x150Logo.scale-200.png",
    revision: "71a4e21686bb741456e1c975ce2460b2",
  },
  {
    url: "icons/windows11/Square150x150Logo.scale-400.png",
    revision: "53e6852c39b63bc71b77ae73f276ff62",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
    revision: "6a47b1d5a1aff561b0c9659b1a6b7cbe",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
    revision: "5e25da0412d700b9373d425b07a7a240",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
    revision: "74051f20eceb637280e90c1cb7902420",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
    revision: "1925ee7de2a32639d291cc4df8747881",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
    revision: "ac769b53079fe33f41cf680c18cba3d1",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
    revision: "8de0240a04d20ba9d474240fd551c697",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
    revision: "bd745cece5f7bb64a0c71ca759465c7f",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
    revision: "780e2f6a4e6c20f5fae46d495578ae44",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
    revision: "df58828636ff15ebd537cfbd6ab7ec9d",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
    revision: "d749f4f127f5964e7406220782858a1c",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
    revision: "da3d9c6d727c23d9141b9fbef49894f1",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
    revision: "ead79186e930eab0bf942f1cdd6c2cd9",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
    revision: "47be4f9a1173a15ea7faeec94e0e6d48",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
    revision: "db0bf9f809d0c4e8cd71e4140a0d7d9b",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
    revision: "f4767a2a96f18057d13743b02e084322",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
    revision: "6a47b1d5a1aff561b0c9659b1a6b7cbe",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
    revision: "5e25da0412d700b9373d425b07a7a240",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
    revision: "74051f20eceb637280e90c1cb7902420",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
    revision: "1925ee7de2a32639d291cc4df8747881",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
    revision: "ac769b53079fe33f41cf680c18cba3d1",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
    revision: "8de0240a04d20ba9d474240fd551c697",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
    revision: "bd745cece5f7bb64a0c71ca759465c7f",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
    revision: "780e2f6a4e6c20f5fae46d495578ae44",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
    revision: "df58828636ff15ebd537cfbd6ab7ec9d",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
    revision: "d749f4f127f5964e7406220782858a1c",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
    revision: "da3d9c6d727c23d9141b9fbef49894f1",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
    revision: "ead79186e930eab0bf942f1cdd6c2cd9",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
    revision: "47be4f9a1173a15ea7faeec94e0e6d48",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
    revision: "db0bf9f809d0c4e8cd71e4140a0d7d9b",
  },
  {
    url: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
    revision: "f4767a2a96f18057d13743b02e084322",
  },
  {
    url: "icons/windows11/Square44x44Logo.scale-100.png",
    revision: "df58828636ff15ebd537cfbd6ab7ec9d",
  },
  {
    url: "icons/windows11/Square44x44Logo.scale-125.png",
    revision: "8f7e74a06d01e75d83dc38d2bbc647fd",
  },
  {
    url: "icons/windows11/Square44x44Logo.scale-150.png",
    revision: "d74b14cb50f492bc3d5816a7861726a0",
  },
  {
    url: "icons/windows11/Square44x44Logo.scale-200.png",
    revision: "fec84ab5e4f615cd0fd38870319441c8",
  },
  {
    url: "icons/windows11/Square44x44Logo.scale-400.png",
    revision: "6b1b4ed5b2d117675497aee807d50ce1",
  },
  {
    url: "icons/windows11/Square44x44Logo.targetsize-16.png",
    revision: "6a47b1d5a1aff561b0c9659b1a6b7cbe",
  },
  {
    url: "icons/windows11/Square44x44Logo.targetsize-20.png",
    revision: "5e25da0412d700b9373d425b07a7a240",
  },
  {
    url: "icons/windows11/Square44x44Logo.targetsize-24.png",
    revision: "74051f20eceb637280e90c1cb7902420",
  },
  {
    url: "icons/windows11/Square44x44Logo.targetsize-256.png",
    revision: "1925ee7de2a32639d291cc4df8747881",
  },
  {
    url: "icons/windows11/Square44x44Logo.targetsize-30.png",
    revision: "ac769b53079fe33f41cf680c18cba3d1",
  },
  {
    url: "icons/windows11/Square44x44Logo.targetsize-32.png",
    revision: "8de0240a04d20ba9d474240fd551c697",
  },
  {
    url: "icons/windows11/Square44x44Logo.targetsize-36.png",
    revision: "bd745cece5f7bb64a0c71ca759465c7f",
  },
  {
    url: "icons/windows11/Square44x44Logo.targetsize-40.png",
    revision: "780e2f6a4e6c20f5fae46d495578ae44",
  },
  {
    url: "icons/windows11/Square44x44Logo.targetsize-44.png",
    revision: "df58828636ff15ebd537cfbd6ab7ec9d",
  },
  {
    url: "icons/windows11/Square44x44Logo.targetsize-48.png",
    revision: "d749f4f127f5964e7406220782858a1c",
  },
  {
    url: "icons/windows11/Square44x44Logo.targetsize-60.png",
    revision: "da3d9c6d727c23d9141b9fbef49894f1",
  },
  {
    url: "icons/windows11/Square44x44Logo.targetsize-64.png",
    revision: "ead79186e930eab0bf942f1cdd6c2cd9",
  },
  {
    url: "icons/windows11/Square44x44Logo.targetsize-72.png",
    revision: "47be4f9a1173a15ea7faeec94e0e6d48",
  },
  {
    url: "icons/windows11/Square44x44Logo.targetsize-80.png",
    revision: "db0bf9f809d0c4e8cd71e4140a0d7d9b",
  },
  {
    url: "icons/windows11/Square44x44Logo.targetsize-96.png",
    revision: "f4767a2a96f18057d13743b02e084322",
  },
  {
    url: "icons/windows11/StoreLogo.scale-100.png",
    revision: "990fc02c67be9a15880c82ac58ddd365",
  },
  {
    url: "icons/windows11/StoreLogo.scale-125.png",
    revision: "d326a1268e9aa14a3354a26ccae76072",
  },
  {
    url: "icons/windows11/StoreLogo.scale-150.png",
    revision: "a19d938de0cb2072e3c64b05ee7642f3",
  },
  {
    url: "icons/windows11/StoreLogo.scale-200.png",
    revision: "9d1e9b6403959c47db6c2fa5c576545c",
  },
  {
    url: "icons/windows11/StoreLogo.scale-400.png",
    revision: "6ea56f63e5f4e32aacbe2dedbf823e0f",
  },
  {
    url: "icons/windows11/Wide310x150Logo.scale-100.png",
    revision: "85fdf7c533bde71faeb5219f08e3f3f9",
  },
  {
    url: "icons/windows11/Wide310x150Logo.scale-125.png",
    revision: "8c506c5fe58f297af2722d39a896945f",
  },
  {
    url: "icons/windows11/Wide310x150Logo.scale-150.png",
    revision: "54fa4193181e4e98957119be3e4af80f",
  },
  {
    url: "icons/windows11/Wide310x150Logo.scale-200.png",
    revision: "8d67e4ad62bcb1ea1fb766e2d0ad7008",
  },
  {
    url: "icons/windows11/Wide310x150Logo.scale-400.png",
    revision: "5d0078cbf88991d939ad7a03eb0d3f7d",
  },
  { url: "index.html", revision: "9ee0cd733dd75dd015da61cfd45fa720" },
  { url: "manifest.json", revision: "b8b1564ce4edb20a3248b60c33c60b3e" },
  {
    url: "package-lock.json",
    revision: "6b948fbe1ef59bbf2e3fa3e44ad12984",
  },
  { url: "package.json", revision: "b07263e758918bff209a3ea2e6a80c0c" },
  {
    url: "pwabuilder-sw.js",
    revision: "e1e58ba8d095cda3239e0110ad58185a",
  },
  {
    url: "src/assets/audio/background-audio.wav",
    revision: "110444485a598eb36065640527126390",
  },
  {
    url: "src/assets/audio/vo-1.wav",
    revision: "8c696b7ac848f97d27ed3132ecdfceef",
  },
  {
    url: "src/assets/audio/vo-2.wav",
    revision: "86be0821b5ec1ef7bb136b8055b05905",
  },
  {
    url: "src/assets/audio/vo-3.wav",
    revision: "db8f7f4f6fcb6ea17bd93a136290613a",
  },
  {
    url: "src/assets/audio/vo-4.wav",
    revision: "3a3b13ad1a5472d8036169b460381e0a",
  },
  {
    url: "src/assets/audio/vo-5.wav",
    revision: "74dbcdd32ccad691fae14aafede973d0",
  },
  {
    url: "src/assets/audio/vo-6.wav",
    revision: "dd0fb1ef51d0f574bf5b4241d81df88b",
  },
  {
    url: "src/assets/audio/vo-7.wav",
    revision: "325a595d50008da5cfccccf1094bba80",
  },
  {
    url: "src/assets/audio/vo-8.wav",
    revision: "b07a3da09f6772832b33d0d3794b1e4b",
  },
  {
    url: "src/assets/audio/vo-9.wav",
    revision: "d979c25697e2b8e8ab1c029dba20577f",
  },
  {
    url: "src/assets/images/app-icon.png",
    revision: "b09c105de3d87814fde9df805c8e2b83",
  },
  {
    url: "src/assets/images/audio-off-btn-hover.png",
    revision: "ef99001085c21f1a256ad6f52a5f357f",
  },
  {
    url: "src/assets/images/audio-off-btn.png",
    revision: "0585a3b1373174e15fdff986c3954ac1",
  },
  {
    url: "src/assets/images/audio-on-btn-hover.png",
    revision: "77d4b3361561974ac16f0985ef5c10b9",
  },
  {
    url: "src/assets/images/audio-on-btn.png",
    revision: "70028767b29b6ac4df8ed0dcc9d3abf5",
  },
  {
    url: "src/assets/images/audio-on-hover.png",
    revision: "77d4b3361561974ac16f0985ef5c10b9",
  },
  {
    url: "src/assets/images/cinema.jpg",
    revision: "36f689fa211632a65d03745ed2402bd6",
  },
  {
    url: "src/assets/images/landing.png",
    revision: "f85d72d18ed9429ebbac0aca5396a2c6",
  },
  {
    url: "src/assets/images/lobby-360.jpg",
    revision: "12d3ab81f5da81b05751be1ccb443ae9",
  },
  {
    url: "src/assets/images/logo.png",
    revision: "37093dd61534d8a1e50ec92065ac32f9",
  },
  {
    url: "src/assets/images/market-360.jpg",
    revision: "259e1bbfcdd53c2aeb2947ca906239f5",
  },
  {
    url: "src/assets/images/money-shot-360-dpt.jpg",
    revision: "2a90606521f66a471f10f9564eed4f0d",
  },
  {
    url: "src/assets/images/money-shot-360.jpg",
    revision: "88330126df7114de2c0d9a30a32d59ec",
  },
  {
    url: "src/assets/images/next-btn-hover.png",
    revision: "bd5f1e2fa77b7ca4828f865daf4473f1",
  },
  {
    url: "src/assets/images/next-btn.png",
    revision: "da1914785c3c20cf4de53acc099b8127",
  },
  {
    url: "src/assets/images/office-360.jpg",
    revision: "6dff65f4d0ae28f419dda87a72caed2b",
  },
  {
    url: "src/assets/images/start-btn-hover.png",
    revision: "489cd727ac696863042d9a6aed746519",
  },
  {
    url: "src/assets/images/start-btn.png",
    revision: "03458e84076cfb08afef67bd8dd86e22",
  },
  {
    url: "src/assets/video/cinema-blackout-reverse.mp4",
    revision: "4eba1b8b70d9602f24e7d0eb554d520b",
  },
  {
    url: "src/assets/video/cinema-blackout-whole.mov",
    revision: "baa690cdfed79a70ba5c3d83a6e718e0",
  },
  {
    url: "src/assets/video/cinema-blackout-whole.mp4",
    revision: "e6eb4c43630d5c6cab9834635058df8f",
  },
  {
    url: "src/assets/video/cinema-blackout.mp4",
    revision: "47acd04691be3f18832634af5076f93c",
  },
  {
    url: "src/assets/video/presentation-1.mp4",
    revision: "4849ca9aa7e12d9a3beb169097c05b45",
  },
  {
    url: "src/assets/video/presentation-2.mp4",
    revision: "371e32c07d05b11d8f94ecc093c1498f",
  },
  {
    url: "src/assets/video/presentation-3.mp4",
    revision: "e0b1b0a7a627d8a05cc728ea2bdfac29",
  },
  {
    url: "src/assets/video/presentation-4.mp4",
    revision: "c88f786ba300e98c457a7f69449501e2",
  },
  {
    url: "src/assets/video/presentation-5.mp4",
    revision: "e83119019e034fc1d67ee1e3cc556dda",
  },
  {
    url: "src/css/app.css",
    revision: "b39d1eed26b5684adc37defb980d757c",
  },
  {
    url: "src/js/components/changeTo360.js",
    revision: "7f858e62c8c58bc4529d4548f9503069",
  },
  {
    url: "src/js/state.js",
    revision: "0d4fbc79e3e0defadc826bdc43a66e26",
  },
  {
    url: "src/js/vendor.js",
    revision: "799d1ea8c637b3bd150a387e4b997134",
  },
  {
    url: "workbox-config.js",
    revision: "5af2ad52c85da9813e0737be896a08e7",
  },
];

self.addEventListener("install", function (e) {
  console.log("[ServiceWorker] Installed");

  // e.waitUntil Delays the event until the Promise is resolved
  e.waitUntil(
    // Open the cache
    caches.open(cacheName).then(function (cache) {
      // Add all the default files to the cache
      console.log("[ServiceWorker] Caching cacheFiles");
      return cache.addAll(cacheFiles.map((c) => c.url));
    })
  ); // end e.waitUntil
});

self.addEventListener("activate", function (e) {
  console.log("[ServiceWorker] Activated");

  e.waitUntil(
    // Get all the cache keys (cacheName)
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (thisCacheName) {
          // If a cached item is saved under a previous cacheName
          if (thisCacheName !== cacheName) {
            // Delete that cached file
            console.log(
              "[ServiceWorker] Removing Cached Files from Cache - ",
              thisCacheName
            );
            return caches.delete(thisCacheName);
          }
        })
      );
    })
  ); // end e.waitUntil
});

self.addEventListener("fetch", function (e) {
  console.log("[ServiceWorker] Fetch", e.request.url);

  // e.respondWidth Responds to the fetch event
  e.respondWith(
    // Check in cache for the request being made
    caches
      .match(e.request)

      .then(function (response) {
        // If the request is in the cache
        if (response) {
          console.log(
            "[ServiceWorker] Found in Cache",
            e.request.url,
            response
          );
          // Return the cached version
          return response;
        }

        // If the request is NOT in the cache, fetch and cache

        var requestClone = e.request.clone();
        fetch(requestClone)
          .then(function (response) {
            if (!response) {
              console.log("[ServiceWorker] No response from fetch ");
              return response;
            }

            var responseClone = response.clone();

            //  Open the cache
            caches.open(cacheName).then(function (cache) {
              // Put the fetched response in the cache
              cache.put(e.request, responseClone);
              console.log("[ServiceWorker] New Data Cached", e.request.url);

              // Return the response
              return response;
            }); // end caches.open
          })
          .catch(function (err) {
            console.log(
              "[ServiceWorker] Error Fetching & Caching New Data",
              err
            );
          });
      }) // end caches.match(e.request)
  ); // end e.respondWith
});
