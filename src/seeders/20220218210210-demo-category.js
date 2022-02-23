'use strict';

module.exports = {
  	async up (queryInterface, Sequelize) {
		

		await queryInterface.bulkInsert('categories', [
			{title: 'Sport',slug: 'sport',createdAt: new Date(),updatedAt: new Date()},
			{title: 'Travel',slug: 'travel',createdAt: new Date(),updatedAt: new Date()},
			{title: 'Business',slug: 'business',createdAt: new Date(),updatedAt: new Date()},
			{title: 'Pet',slug: 'pet',createdAt: new Date(),updatedAt: new Date()},
			{title: 'Economy',slug: 'economy',createdAt: new Date(),updatedAt: new Date()},
			{title: 'Money',slug: 'money',createdAt: new Date(),updatedAt: new Date()},
			{title: 'Cripto',slug: 'cripto',createdAt: new Date(),updatedAt: new Date()},
			{title: 'Adventures',slug: 'adventures',createdAt: new Date(),updatedAt: new Date()},
			{title: 'Nature',slug: 'nature',createdAt: new Date(),updatedAt: new Date()},
			{title: 'Nature',slug: 'nature',createdAt: new Date(),updatedAt: new Date()},
			{title: 'Nature',slug: 'nature',createdAt: new Date(),updatedAt: new Date()},
			{title: 'Nature',slug: 'nature',createdAt: new Date(),updatedAt: new Date()},
			{title: 'Nature',slug: 'nature',createdAt: new Date(),updatedAt: new Date()},
			{title: 'Nature',slug: 'nature',createdAt: new Date(),updatedAt: new Date()},
			{title: 'Nature',slug: 'nature',createdAt: new Date(),updatedAt: new Date()},
			{title: 'Nature',slug: 'nature',createdAt: new Date(),updatedAt: new Date()},
		], {});
    
  },

  async down (queryInterface, Sequelize) {
 
    await queryInterface.bulkDelete('categories', null, {});
    
  }
};
