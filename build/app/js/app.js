// функция для показа свг

$(function(){
	svg4everybody();
});
(function() {
	var link = $('.menu__toggle'),
		list = $('.menu__list'),
		btn = $('.menu__humburger'),
		activeBtn = 'menu__humburger--active',
		flag = true;

		link.click(function() {
			if(flag == true) {
				list.slideDown(400);
				btn.addClass(activeBtn);
				flag = false;
			} else {
				btn.removeClass(activeBtn);
				list.slideUp('400', function() {
					setTimeout(function(){
						list.removeAttr('style');
						flag = true;
					},200);
				});
				
			}
		});
})();
// функция для слайдера в секции баннера

(function(){
	$('.banner__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true
	});
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN2ZzRldmVyeWJvZHkuanMiLCJhcHAuanMiLCJzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0L/QvtC60LDQt9CwINGB0LLQs1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cdHN2ZzRldmVyeWJvZHkoKTtcclxufSk7IiwiKGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaW5rID0gJCgnLm1lbnVfX3RvZ2dsZScpLFxyXG5cdFx0bGlzdCA9ICQoJy5tZW51X19saXN0JyksXHJcblx0XHRidG4gPSAkKCcubWVudV9faHVtYnVyZ2VyJyksXHJcblx0XHRhY3RpdmVCdG4gPSAnbWVudV9faHVtYnVyZ2VyLS1hY3RpdmUnLFxyXG5cdFx0ZmxhZyA9IHRydWU7XHJcblxyXG5cdFx0bGluay5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYoZmxhZyA9PSB0cnVlKSB7XHJcblx0XHRcdFx0bGlzdC5zbGlkZURvd24oNDAwKTtcclxuXHRcdFx0XHRidG4uYWRkQ2xhc3MoYWN0aXZlQnRuKTtcclxuXHRcdFx0XHRmbGFnID0gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YnRuLnJlbW92ZUNsYXNzKGFjdGl2ZUJ0bik7XHJcblx0XHRcdFx0bGlzdC5zbGlkZVVwKCc0MDAnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0bGlzdC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG5cdFx0XHRcdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0sMjAwKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcbn0pKCk7IiwiLy8g0YTRg9C90LrRhtC40Y8g0LTQu9GPINGB0LvQsNC50LTQtdGA0LAg0LIg0YHQtdC60YbQuNC4INCx0LDQvdC90LXRgNCwXHJcblxyXG4oZnVuY3Rpb24oKXtcclxuXHQkKCcuYmFubmVyX19zbGlkZXInKS5zbGljayh7XHJcblx0XHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdGFycm93czogdHJ1ZSxcclxuXHRcdGZhZGU6IHRydWVcclxuXHR9KTtcclxufSkoKTsiXX0=
