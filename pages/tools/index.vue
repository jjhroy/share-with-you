<template>
  <div>
    
  </div>
</template>

<script lang="ts" setup>
  const list = [
    {
      name: '优设标题黑',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_94d0d6f74f.woff2',
      img: 'https://www.kuaitu.cc/uploads/_3fcc03fa21.svg',
    },
    {
      name: '优设鲨鱼菲特健康体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_88d61ab413.woff2',
      img: 'https://www.kuaitu.cc/uploads/_ed1eeafeda.svg',
    },
    {
      name: '包图小白体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_135ed5d818.woff2',
      img: 'https://www.kuaitu.cc/uploads/_775d29599b.svg',
    },
    {
      name: '字体视界法棍体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_1c77bcfb18.woff2',
      img: 'https://www.kuaitu.cc/uploads/_d145acee47.svg',
    },
    {
      name: '字体视界法棍体拼音版',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_ed5885c8ed.woff2',
      img: 'https://www.kuaitu.cc/uploads/_afde29fec5.svg',
    },
    {
      name: '庞门正道粗书体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_89eaed67b2.woff2',
      img: 'https://www.kuaitu.cc/uploads/_01a9462e22.svg',
    },
    {
      name: '庞门正道轻松体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_c7176906ce.woff2',
      img: 'https://www.kuaitu.cc/uploads/_462c944b28.svg',
    },
    {
      name: '得意黑',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_67e8f226af.woff2',
      img: 'https://www.kuaitu.cc/uploads/_b75e299078.svg',
    },
    {
      name: '手书体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_7a8e2b114e.woff2',
      img: 'https://www.kuaitu.cc/uploads/_d24d822610.svg',
    },
    {
      name: '杨任东竹石体-Bold',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/Bold_8a987c4ebd.woff2',
      img: 'https://www.kuaitu.cc/uploads/Bold_689ee0f66e.svg',
    },
    {
      name: '杨任东竹石体-Extralight',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/Extralight_7e55311f08.woff2',
      img: 'https://www.kuaitu.cc/uploads/Extralight_bbe80c7ff4.svg',
    },
    {
      name: '杨任东竹石体-Heavy',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/Heavy_0bdace657b.woff2',
      img: 'https://www.kuaitu.cc/uploads/Heavy_e6a1a82e3d.svg',
    },
    {
      name: '杨任东竹石体-Light',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/Light_3f8537c46b.woff2',
      img: 'https://www.kuaitu.cc/uploads/Light_0338f7520b.svg',
    },
    {
      name: '杨任东竹石体-Medium',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/Medium_78cab8108e.woff2',
      img: 'https://www.kuaitu.cc/uploads/Medium_fa033f2e3c.svg',
    },
    {
      name: '杨任东竹石体-Regular',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/Regular_879e83d3c1.woff2',
      img: 'https://www.kuaitu.cc/uploads/Regular_4829a84bc2.svg',
    },
    {
      name: '杨任东竹石体-Semibold',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/Semibold_a00754e0fa.woff2',
      img: 'https://www.kuaitu.cc/uploads/Semibold_0ba5ad4f65.svg',
    },
    {
      name: '沐瑶软笔手写体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_48c6bd1ec8.woff2',
      img: 'https://www.kuaitu.cc/uploads/_7fc988f4d7.svg',
    },
    {
      name: '沐瑶随心手写体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_0038313b03.woff2',
      img: 'https://www.kuaitu.cc/uploads/_489a71d296.svg',
    },
    {
      name: '站酷仓耳渔阳体W01',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/W01_cde5aeb3b1.woff2',
      img: 'https://www.kuaitu.cc/uploads/W01_f35ae903c8.svg',
    },
    {
      name: '站酷仓耳渔阳体W02',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/W02_22f09e4428.woff2',
      img: 'https://www.kuaitu.cc/uploads/W02_281a123706.svg',
    },
    {
      name: '站酷仓耳渔阳体W03',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/W03_dbb992c105.woff2',
      img: 'https://www.kuaitu.cc/uploads/W03_59c9dfde6f.svg',
    },
    {
      name: '站酷仓耳渔阳体W04',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/W04_b8761bcef8.woff2',
      img: 'https://www.kuaitu.cc/uploads/W04_5e3b400a3d.svg',
    },
    {
      name: '站酷仓耳渔阳体W05',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/W05_e1c666f1db.woff2',
      img: 'https://www.kuaitu.cc/uploads/W05_2bafb098ca.svg',
    },
    {
      name: '站酷小薇LOGO体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/LOGO_e7f825fcd8.woff2',
      img: 'https://www.kuaitu.cc/uploads/LOGO_9b318f24c7.svg',
    },
    {
      name: '站酷庆科黄油体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_31b44c96dc.woff2',
      img: 'https://www.kuaitu.cc/uploads/_a97b69c4cf.svg',
    },
    {
      name: '站酷快乐体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_0a921e5d85.woff2',
      img: 'https://www.kuaitu.cc/uploads/_4acc3a4d83.svg',
    },
    {
      name: '站酷快乐体2016修订版',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/2016_98ed6d5bc9.woff2',
      img: 'https://www.kuaitu.cc/uploads/2016_b8e0fba65f.svg',
    },
    {
      name: '站酷文艺体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_c5a837a876.woff2',
      img: 'https://www.kuaitu.cc/uploads/_ebe90178f4.svg',
    },
    {
      name: '站酷高端黑',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_3105cb2355.woff2',
      img: 'https://www.kuaitu.cc/uploads/_bc75e04735.svg',
    },
    {
      name: '联盟起艺卢帅正锐黑体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_a3ee263e5e.woff2',
      img: 'https://www.kuaitu.cc/uploads/_3fcd050b68.svg',
    },
    {
      name: '钉钉进步体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_a34db64a97.woff2',
      img: 'https://www.kuaitu.cc/uploads/_1ac9e4d4b5.svg',
    },
    {
      name: '钟齐志莽行书',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_c2490bf592.woff2',
      img: 'https://www.kuaitu.cc/uploads/_e7c9df7f4e.svg',
    },
    {
      name: '锐字真言体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_f2bb2e1168.woff2',
      img: 'https://www.kuaitu.cc/uploads/_c3ab65c0a4.svg',
    },
    {
      name: '阿里妈妈东方大楷',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_fb03107147.woff2',
      img: 'https://www.kuaitu.cc/uploads/_40ca86fe79.svg',
    },
    {
      name: '阿里妈妈刀隶体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_b377cd981f.woff2',
      img: 'https://www.kuaitu.cc/uploads/_367fc4c80e.svg',
    },
    {
      name: '阿里妈妈数黑体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_44ed2d0dfd.woff2',
      img: 'https://www.kuaitu.cc/uploads/_a626c49020.svg',
    },
    {
      name: '阿里妈妈方圆体',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/_ae280f531f.woff2',
      img: 'https://www.kuaitu.cc/uploads/_f242c6a17d.svg',
    },
    {
      name: '阿里巴巴普惠体Black',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/Black_d9d5b23faa.woff2',
      img: 'https://www.kuaitu.cc/uploads/Black_8443af1c9f.svg',
    },
    {
      name: '阿里巴巴普惠体Bold',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/Bold_b087697603.woff2',
      img: 'https://www.kuaitu.cc/uploads/Bold_095dc2ac63.svg',
    },
    {
      name: '阿里巴巴普惠体ExtraBold',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/Extra_Bold_7322ef78a2.woff2',
      img: 'https://www.kuaitu.cc/uploads/Extra_Bold_2b70126db4.svg',
    },
    {
      name: '阿里巴巴普惠体Heavy',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/Heavy_9d50e3bd01.woff2',
      img: 'https://www.kuaitu.cc/uploads/Heavy_afef62af2c.svg',
    },
    {
      name: '阿里巴巴普惠体Light',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/Light_9a4bbe9522.woff2',
      img: 'https://www.kuaitu.cc/uploads/Light_152cddf78d.svg',
    },
    {
      name: '阿里巴巴普惠体Medium',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/Medium_a83a0b8634.woff2',
      img: 'https://www.kuaitu.cc/uploads/Medium_289b812852.svg',
    },
    {
      name: '阿里巴巴普惠体Regular',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/Regular_1f35bf2deb.woff2',
      img: 'https://www.kuaitu.cc/uploads/Regular_1097084bc3.svg',
    },
    {
      name: '阿里巴巴普惠体SemiBold',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/Semi_Bold_be840be128.woff2',
      img: 'https://www.kuaitu.cc/uploads/Semi_Bold_c938649a61.svg',
    },
    {
      name: '阿里巴巴普惠体Thin',
      type: 'cn',
      file: 'https://www.kuaitu.cc/uploads/Thin_43dcdb7cd1.woff2',
      img: 'https://www.kuaitu.cc/uploads/Thin_fef1f24f03.svg',
    },
  ];
  console.log('list', list.length);

  // function downloadFiles(links) {
  //   links.forEach((link, index) => {
  //     setTimeout(() => {
  //       const a = document.createElement('a');
  //       a.href = link;
  //       a.download = ''; // 设置 download 属性
  //       document.body.appendChild(a);
  //       a.click();
  //       document.body.removeChild(a);
  //     }, 5000); // 每次间隔 1 秒下载
  //   });
  // }

  const getSubstringAfterLastSlash =(str:string) =>{
    const parts = str.split('/');
    return parts.pop() || ''; // 获取并移除数组的最后一个元素
  }

  const handleDownload = async (url:string, fileName:string) => {
    const res = await fetch(url);
    res.blob().then((blob) => {
      const a = document.createElement('a');
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  };

  async function downloadFiles(links:string[]) {
    const promises = links.map((link, index) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const fileName = getSubstringAfterLastSlash(link);
          handleDownload(link, fileName);
          resolve('');
        }, index * 500); // 每次间隔 500ms 触发下载
      });
    });

    await Promise.all(promises);
  }
  // downloadSvgs(list.map((item) => item.img));
  downloadFiles(list.map((item) => item.img));
</script>

<style>

</style>