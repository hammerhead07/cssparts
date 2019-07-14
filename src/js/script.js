// .c-file-control
jQuery(".js-file").change(function() {
	jQuery(this)
		.siblings(".c-file-result")
		.show();
	jQuery(this)
		.siblings(".c-file-result")
		.text(jQuery(this).val());
});

// .c-drawer
jQuery(".js-drawer").on("click", function(e) {
	e.preventDefault();
	let target = jQuery(this).attr("data-target");
	jQuery("#" + target).toggleClass("is-checked");
	if (jQuery("#" + target).hasClass("is-checked")) {
		jQuery("#" + target)
			.children(".e-text")
			.text("CLOSE");
	} else {
		jQuery("#" + target)
			.children(".e-text")
			.text("MENU");
	}
	return false;
});

// .c-modal
jQuery(".js-modal").on("click", function(e) {
	e.preventDefault();
	let target = jQuery(this).attr("data-target");
	jQuery("#" + target).toggleClass("is-checked");
	return false;
});

// .c-accordion
jQuery(".js-accordion").on("click", function(e) {
	e.preventDefault();
	jQuery(this)
		.siblings(".js-accordion-content")
		.slideToggle(500);
	jQuery(this)
		.parent(".c-accordion")
		.toggleClass("is-checked");
	return false;
});

// .c-tab
jQuery(".js-tab").on("click", function(e) {
	e.preventDefault();
	jQuery(this)
		.parent(".e-nav")
		.children(".e-item")
		.removeClass("is-checked");
	jQuery(this).addClass("is-checked");
	let target = jQuery(this).attr("data-target");
	jQuery("#" + target)
		.parent(".e-contents")
		.children(".e-content")
		.removeClass("is-checked");
	jQuery("#" + target).addClass("is-checked");
	return false;
});
