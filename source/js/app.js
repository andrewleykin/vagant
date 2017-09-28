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