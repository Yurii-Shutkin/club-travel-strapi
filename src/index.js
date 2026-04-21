'use strict';

module.exports = {
  register(/*{ strapi }*/) {},

  async bootstrap({ strapi }) {
       // --- НАПОЛНЕНИЕ КАТЕГОРИЙ ---
    // const categories = [
    //   { name: 'Зимние туры', slug: 'winter' },
    //   { name: 'Летние туры', slug: 'summer' }
    // ];

    // console.log('📂 Создаем категории...');

    // // Получаем все существующие офферы, чтобы распределить их
    // const allOffers = await strapi.entityService.findMany('api::offer.offer');

    // for (const cat of categories) {
    //   const existing = await strapi.entityService.findMany('api::category.category', {
    //     filters: { slug: cat.slug },
    //   });

    //   if (existing.length === 0) {
    //     await strapi.entityService.create('api::category.category', {
    //       data: {
    //         name: cat.name,
    //         slug: cat.slug,
    //         // Для теста привяжем первые 3 оффера к зиме, остальные к лету
    //         offers: cat.slug === 'winter' ? allOffers.slice(0, 3) : allOffers.slice(3, 6),
    //         publishedAt: new Date(),
    //       },
    //     });
    //     console.log(`✅ Категория ${cat.name} создана`);
    //   }
    // }


  },
};
