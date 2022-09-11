export const images = [
  "https://i.pinimg.com/564x/9a/e7/e5/9ae7e59a409f1b0364b3c84afcd31ba8.jpg",
  "https://i.pinimg.com/564x/07/e2/22/07e22290ad935d4bb6961d15767e2ea4.jpg",
  "https://i.pinimg.com/564x/8c/44/81/8c44811bd8395f413bee9dbc465214a3.jpg",
  "https://i.pinimg.com/564x/62/6c/b9/626cb982ee36f313bc4d4a2217f658c9.jpg",
  "https://i.pinimg.com/564x/d9/84/bd/d984bd2ba3455e28348b5485bac33b32.jpg",
  "https://i.pinimg.com/736x/94/50/00/945000e8ff2183b081d7c3e94add39d3.jpg",
  "https://i.pinimg.com/736x/00/2e/99/002e997bf1bf6570c44dbd2a6e0f5ea0.jpg",
  "https://i.pinimg.com/564x/90/cd/0d/90cd0db74f3f351466e3bcbcb5bc3812.jpg",
  "https://i.pinimg.com/564x/22/62/ee/2262ee28c894126a37f0f91a4c3d361d.jpg",
  "https://i.pinimg.com/564x/51/1a/e1/511ae188323c7de65b27360f59e1ff32.jpg",
];

export const contacts = [...Array(10)].map((_, i) => ({
  id: i,
  image: images[i],
  username: `user test${i}`,
  lastMessage: `Lorem ipsum test ${i}`,
}));

export const messages = [...Array(20)].map((_, i) => ({
  id: i,
  user: `${i % 2 === 0 ? "receiver" : "sender"}`,
  message: `${
    i % 2 === 0
      ? "galley of type and scrambled it to make"
      : "when an unknown printer took a galley of type and scrambled it to make"
  }`,
}));

export const imagesFemale = [
  "https://i.pinimg.com/564x/9b/7a/21/9b7a216e05a4f58ae39266863df7625f.jpg",
  "https://i.pinimg.com/564x/3f/9f/eb/3f9febc39aeab588e64a77ca2abef0f5.jpg",
  "https://i.pinimg.com/564x/e6/a7/39/e6a739795a9cdc577d60db8c231bbf7d.jpg",
  "https://i.pinimg.com/564x/f0/ca/ac/f0caacb3a4c60499932a0fbad9291e53.jpg",
  "https://i.pinimg.com/564x/38/d1/44/38d144171db4dc83e4120b9be727ec8c.jpg",
  "https://i.pinimg.com/564x/46/1c/8c/461c8c4066f4c2084cc00909a0ad8ede.jpg",
  "https://i.pinimg.com/564x/bf/47/36/bf47360152e90f175c9448e79c8d83c3.jpg",
  "https://i.pinimg.com/564x/74/16/d0/7416d077cd767c78aab8a0722b052762.jpg",
  "https://i.pinimg.com/564x/84/35/19/843519b8169cf1fe890b553d1a8726b2.jpg",
  "https://i.pinimg.com/564x/ca/16/68/ca16680441aeaf2eaa0d948a35c36d4b.jpg",
  "https://i.pinimg.com/564x/ce/a1/a7/cea1a79e59873dbe363bbeb37574c8aa.jpg",
  "https://i.pinimg.com/564x/48/0c/a1/480ca163ede848c96c7a5c992f67c153.jpg",
  "https://i.pinimg.com/564x/4a/58/4c/4a584c33aeec658e046c22aaeeaeb55b.jpg",
  "https://i.pinimg.com/564x/22/ec/fc/22ecfcda754e7eb327098426ef9d1975.jpg",
  "https://i.pinimg.com/564x/02/63/52/0263528a0e3b68eb564a7293b54922b5.jpg",
  "https://i.pinimg.com/736x/5b/e7/7d/5be77d9d4f9cd1e51faedca1d2869c7a.jpg",
  "https://i.pinimg.com/564x/6b/bc/58/6bbc5850e17856966a5730a2f7cbfa53.jpg",
  "https://i.pinimg.com/736x/8f/c0/ea/8fc0ea9c3929dc2ae36415cb87b5d946.jpg",
  "https://i.pinimg.com/564x/4b/a9/33/4ba933a704669926a32c39b72f3dff30.jpg",
  "https://i.pinimg.com/564x/8e/f7/ff/8ef7ff2f1f7d1e310a04dad516acfd8d.jpg",
];

export const imagesMale = [
  "https://i.pinimg.com/564x/37/67/db/3767dbd9d35ab9af945a2a20e94de09e.jpg",
  "https://i.pinimg.com/564x/8b/84/ff/8b84ffad0b9d3d6bfda078d9b695a6de.jpg",
  "https://i.pinimg.com/564x/8b/84/ff/8b84ffad0b9d3d6bfda078d9b695a6de.jpg",
  "https://i.pinimg.com/564x/01/73/e1/0173e143e69d1827d6c3357c08515e9a.jpg",
  "https://i.pinimg.com/564x/cf/a8/7f/cfa87f7b5eed22078304a77a9f7511c9.jpg",
  "https://i.pinimg.com/564x/d5/e7/aa/d5e7aa2ef8d4d08a333dbb2db986f6f3.jpg",
  "https://i.pinimg.com/564x/5e/68/02/5e6802e522b7d685efe5fd76d9348132.jpg",
  "https://i.pinimg.com/564x/8c/d6/5b/8cd65bd4bec5aa78f42535aed210da5b.jpg",
  "https://i.pinimg.com/564x/00/4f/f0/004ff097f4e965e87b62c2c7d54ed403.jpg",
  "https://i.pinimg.com/736x/88/19/00/881900873304a82e1df39ba6ebd6471a.jpg",
  "https://i.pinimg.com/564x/6b/3d/c8/6b3dc81e75aea313ba4968f339938489.jpg",
  "https://i.pinimg.com/564x/64/0c/f9/640cf920d68c34168b0bd7e467be3bf6.jpg",
  "https://i.pinimg.com/564x/0d/ed/8d/0ded8df4a0a73604f889bf713d839f04.jpg",
  "https://i.pinimg.com/564x/16/4e/fc/164efc166f28c9d89ffe231afff83598.jpg",
  "https://i.pinimg.com/564x/16/4e/fc/164efc166f28c9d89ffe231afff83598.jpg",
  "https://i.pinimg.com/564x/bc/01/60/bc0160479a674b2ab7058378b266e8ad.jpg",
  "https://i.pinimg.com/564x/7e/0d/43/7e0d4316f389fe31c49f21f89fcae06c.jpg",
  "https://i.pinimg.com/564x/14/58/ee/1458ee389fbfb1ed9cd0cd3ab7cb0439.jpg",
  "https://i.pinimg.com/564x/d3/54/0e/d3540eef76b55fd800f5554c841cde6e.jpg",
  "https://i.pinimg.com/564x/62/36/c0/6236c02da7ef5a24e96d40deb840dac8.jpg",
];
