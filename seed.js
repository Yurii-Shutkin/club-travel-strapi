// module.exports = async () => {
//   console.log('🚀 Начинаем наполнение базы данных...');

//   try {
//     // 1. Создаем Страну
//     const bulgaria = await strapi.entityService.create('api::country.country', {
//       data: { name: 'Болгария', publishedAt: new Date() },
//     });
//     console.log('✅ Страна создана');

//     // 2. Создаем Регион
//     const goldenSands = await strapi.entityService.create('api::region.region', {
//       data: { 
//         name: 'Золотые Пески', 
//         country: bulgaria.id,
//         publishedAt: new Date() 
//       },
//     });
//     console.log('✅ Регион создан');

//     // 3. Создаем Менеджера (в коллекции staff)
//     const manager = await strapi.entityService.create('api::staff.staff', {
//       data: { 
//         name: 'Марина Каасик', 
//         publishedAt: new Date() 
//       },
//     });

//     // 4. Создаем Отель
//     const hotel = await strapi.entityService.create('api::hotel.hotel', {
//       data: {
//         name: 'Viva Club Hotel',
//         stars: '4',
//         shortDescription: 'Отличный семейный отель на Золотых Песках.',
//         region: goldenSands.id,
//         managers: manager.id,
//         publishedAt: new Date(),
//         features: [
//           { label: 'Пляж', value: 'Песчаный, 100м' },
//           { label: 'Бассейн', value: 'Открытый' }
//         ]
//       },
//     });
//     console.log('✅ Отель создан');

//     // 5. Создаем Предложения (Offers)
//     const offers = [
//       { price: 509, date: '2026-06-25', duration: 7, mealType: 'AI', departureCity: 'Таллин' },
//       { price: 480, date: '2026-07-01', duration: 7, mealType: 'BB', departureCity: 'Рига' }
//     ];

//     for (const data of offers) {
//       await strapi.entityService.create('api::offer.offer', {
//         data: { ...data, hotel: hotel.id, publishedAt: new Date() }
//       });
//     }
//     console.log('✅ Предложения созданы');

//   } catch (err) {
//     console.error('❌ Ошибка:', err);
//   }
// };
