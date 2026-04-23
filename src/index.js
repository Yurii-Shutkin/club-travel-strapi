'use strict';

module.exports = {
  register(/*{ strapi }*/) {},

  async bootstrap({ strapi }) {
    //     const countries = [
    //   { name: 'Болгария', slug: 'bulgaria' },
    //   { name: 'Греция', slug: 'greece' },
    //   { name: 'Турция', slug: 'turkey' },
    //   { name: 'Египет', slug: 'egypt' },
    //   { name: 'Черногория', slug: 'montenegro' },
    //   { name: 'Испания', slug: 'spain' },
    //   { name: 'Италия', slug: 'italy' },
    //   { name: 'ОАЭ', slug: 'uae' },
    //   { name: 'Таиланд', slug: 'thailand' },
    //   { name: 'Тунис', slug: 'tunisia' },
    // ];

    // console.log('🌍 Начинаем импорт стран...');

    // for (const country of countries) {
    //   const existing = await strapi.entityService.findMany('api::country.country', {
    //     filters: { slug: country.slug },
    //   });

    //   if (existing.length === 0) {
    //     await strapi.entityService.create('api::country.country', {
    //       data: {
    //         ...country,
    //         publishedAt: new Date(),
    //       },
    //     });
    //     console.log(`✅ Страна добавлена: ${country.name}`);
    //   } else {
    //     console.log(`🟡 Страна ${country.name} уже существует, пропускаем.`);
    //   }
    // }
    // console.log('🎉 Импорт стран завершен!');

    //     const regions = [
    //   { name: 'Золотые Пески', countryName: 'Болгария' },
    //   { name: 'Солнечный Берег', countryName: 'Болгария' },
    //   { name: 'Крит', countryName: 'Греция' },
    //   { name: 'Родос', countryName: 'Греция' },
    //   { name: 'Кемер', countryName: 'Турция' },
    //   { name: 'Анталья', countryName: 'Турция' },
    //   { name: 'Хургада', countryName: 'Египет' },
    //   { name: 'Шарм-эль-Шейх', countryName: 'Египет' },
    //   { name: 'Будва', countryName: 'Черногория' },
    //   { name: 'Бечичи', countryName: 'Черногория' },
    // ];

    // console.log('🏙️ Начинаем импорт регионов...');

    // for (const reg of regions) {
    //   // Ищем ID страны по её названию
    //   const targetCountry = await strapi.entityService.findMany('api::country.country', {
    //     filters: { name: reg.countryName },
    //   });

    //   if (targetCountry.length > 0) {
    //     const existing = await strapi.entityService.findMany('api::region.region', {
    //       filters: { name: reg.name },
    //     });

    //     if (existing.length === 0) {
    //       await strapi.entityService.create('api::region.region', {
    //         data: {
    //           name: reg.name,
    //           country: targetCountry[0].id,
    //           publishedAt: new Date(),
    //         },
    //       });
    //       console.log(`✅ Регион добавлен: ${reg.name} (${reg.countryName})`);
    //     } else {
    //       console.log(`🟡 Регион ${reg.name} уже существует.`);
    //     }
    //   } else {
    //     console.log(`❌ Страна ${reg.countryName} не найдена для региона ${reg.name}`);
    //   }
    // }
    // console.log('🎉 Импорт регионов завершен!');

    // const hotels = [
    //   { name: 'Viva Club Hotel', stars: 4, region: 'Золотые Пески', desc: 'Уютный отель с зеленой территорией и отличным питанием All Inclusive.' },
    //   { name: 'Admiral Hotel', stars: 5, region: 'Золотые Пески', desc: 'Роскошный отель на первой линии с панорамным видом на море.' },
    //   { name: 'Laguna Beach', stars: 4, region: 'Солнечный Берег', desc: 'Прекрасный выбор для семейного отдыха с аквапарком для детей.' },
    //   { name: 'Mitsis Rinela', stars: 5, region: 'Крит', desc: 'Премиальный сервис, песчаный пляж и изысканная кухня.' },
    //   { name: 'Mariliana Hotel', stars: 3, region: 'Крит', desc: 'Бюджетный и очень уютный отель в шаговой доступности от моря.' },
    //   { name: 'Lindos Village', stars: 4, region: 'Родос', desc: 'Отель только для взрослых в традиционном греческом стиле.' },
    //   { name: 'Akka Alinda', stars: 5, region: 'Кемер', desc: 'Расположен у подножия гор, окружен хвойными лесами.' },
    //   { name: 'Rixos Downtown', stars: 5, region: 'Анталья', desc: 'Городской отель мирового уровня с огромным парком.' },
    //   { name: 'Steigenberger Alcazar', stars: 5, region: 'Шарм-эль-Шейх', desc: 'Новый люксовый отель с уникальной архитектурой.' },
    //   { name: 'Iberostar Slavija', stars: 5, region: 'Будва', desc: 'Современный отель в центре Будвы с бассейном на крыше.' }
    // ];

    // console.log('🏨 Начинаем импорт отелей...');

    // for (const h of hotels) {
    //   const targetRegion = await strapi.entityService.findMany('api::region.region', { filters: { name: h.region } });
      
    //   if (targetRegion.length > 0) {
    //     const existing = await strapi.entityService.findMany('api::hotel.hotel', { filters: { name: h.name } });

    //     if (existing.length === 0) {
    //       await strapi.entityService.create('api::hotel.hotel', {
    //         data: {
    //           name: h.name,
    //           stars: h.stars,
    //           shortDescription: h.desc,
    //           region: targetRegion[0].id,
    //           features: [
    //             { label: 'Пляж', value: 'Песчаный' },
    //             { label: 'Wi-Fi', value: 'Бесплатно' }
    //           ],
    //           publishedAt: new Date(),
    //         },
    //       });
    //       console.log(`✅ Отель добавлен: ${h.name}`);
    //     }
    //   }
    // }
    // console.log('🎉 Импорт отелей завершен!');

    //     const offers = [
    //   { hotelName: 'Viva Club Hotel', price: 509, date: '2026-06-25', duration: 7, meal: 'AI', city: 'Таллин' },
    //   { hotelName: 'Viva Club Hotel', price: 480, date: '2026-07-01', duration: 7, meal: 'BB', city: 'Рига' },
    //   { hotelName: 'Admiral Hotel', price: 850, date: '2026-06-15', duration: 7, meal: 'UAI', city: 'Хельсинки' },
    //   { hotelName: 'Laguna Beach', price: 420, date: '2026-06-20', duration: 10, meal: 'HB', city: 'Таллин' },
    //   { hotelName: 'Mitsis Rinela', price: 1100, date: '2026-07-10', duration: 7, meal: 'UAI', city: 'Таллин' },
    //   { hotelName: 'Mariliana Hotel', price: 390, date: '2026-06-05', duration: 7, meal: 'BB', city: 'Рига' },
    //   { hotelName: 'Akka Alinda', price: 720, date: '2026-06-12', duration: 7, meal: 'AI', city: 'Вильнюс' },
    //   { hotelName: 'Rixos Downtown', price: 950, date: '2026-07-01', duration: 14, meal: 'BB', city: 'Таллин' },
    //   { hotelName: 'Steigenberger Alcazar', price: 1250, date: '2026-08-01', duration: 7, meal: 'AI', city: 'Хельсинки' },
    //   { hotelName: 'Iberostar Slavija', price: 680, date: '2026-06-30', duration: 7, meal: 'HB', city: 'Таллин' }
    // ];

    // console.log('💰 Начинаем импорт предложений (Offers)...');

    // for (const off of offers) {
    //   // Ищем отели
    //   const foundHotels = await strapi.entityService.findMany('api::hotel.hotel', {
    //     filters: { name: off.hotelName },
    //   });

    //   // Берем первый найденный отель
    //   const targetHotel = foundHotels[0];

    //   if (targetHotel) {
    //     // Проверяем существование предложения
    //     const existing = await strapi.entityService.findMany('api::offer.offer', {
    //       filters: { 
    //         hotel: { id: targetHotel.id }, // Указываем ID явно
    //         date: off.date
    //       },
    //     });

    //     if (existing.length === 0) {
    //       await strapi.entityService.create('api::offer.offer', {
    //         data: {
    //           price: off.price,
    //           date: off.date,
    //           duration: off.duration,
    //           mealType: off.meal,
    //           departureCity: off.city,
    //           hotel: targetHotel.id,
    //           publishedAt: new Date(),
    //         },
    //       });
    //       console.log(`✅ Предложение добавлено: ${off.hotelName} на ${off.date}`);
    //     }
    //   } else {
    //     console.log(`⚠️ Отель ${off.hotelName} не найден, пропускаем оффер.`);
    //   }
    // }

    //     // --- НАПОЛНЕНИЕ STAFF (СОТРУДНИКИ) ---
    // const staffMembers = [
    //   { name: 'Алексей Волков', contacts: '+372 555 11 22, alex@travel.ee' },
    //   { name: 'Елена Соколова', contacts: '+372 555 33 44, elena@travel.ee' },
    //   { name: 'Дмитрий Ланс', contacts: '+372 555 99 00, dmitri@travel.ee' },
    // ];

    // console.log('👥 Начинаем импорт сотрудников...');

    // const allHotels = await strapi.entityService.findMany('api::hotel.hotel');

    // for (const member of staffMembers) {
    //   const existing = await strapi.entityService.findMany('api::staff.staff', {
    //     filters: { name: member.name },
    //   });

    //   if (existing.length === 0) {
    //     await strapi.entityService.create('api::staff.staff', {
    //       data: {
    //         ...member,
    //         // Привязываем сотрудника к первому попавшемуся отелю для теста
    //         hotel: allHotels.length > 0 ? allHotels[Math.floor(Math.random() * allHotels.length)].id : null,
    //         publishedAt: new Date(),
    //       },
    //     });
    //     console.log(`✅ Сотрудник добавлен: ${member.name}`);
    //   }
    // }

    // // --- НАПОЛНЕНИЕ LEAD (ЗАЯВКИ) ---
    // const leads = [
    //   { name: 'Иван Иванов', phone: '+372 56123456', email: 'ivan@mail.com', details: { direction: 'Греция', budget: 1200, stars: 4 } },
    //   { name: 'Ольга Кравц', phone: '+372 56987654', email: 'olga@test.ee', details: { direction: 'Болгария', guests: '2 взрослых + 1 ребёнок' } },
    //   { name: 'Марк Овер', phone: '+372 51223344', email: 'mark@tour.com', details: { direction: 'Турция', notes: 'Нужен отель с аквапарком' } },
    // ];

    // console.log('📩 Создаем тестовые заявки...');

    // for (const lead of leads) {
    //   const existing = await strapi.entityService.findMany('api::lead.lead', {
    //     filters: { phone: lead.phone },
    //   });

    //   if (existing.length === 0) {
    //     await strapi.entityService.create('api::lead.lead', {
    //       data: {
    //         clientName: lead.name,
    //         phone: lead.phone,
    //         email: lead.email,
    //         requestDetails: lead.details,
    //         publishedAt: new Date(),
    //       },
    //     });
    //     console.log(`✅ Заявка от ${lead.name} создана`);
    //   }
    // }

    // console.log('🚀 БАЗА ПОЛНОСТЬЮ ГОТОВА!');

  },
};

