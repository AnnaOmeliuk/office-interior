new Swiper(".swiper", {
	loop: true,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	thumbs: {
		swiper: {
			direction: "vertical",
			el: ".image-mini-slider",
			slidesPerView: 3,
		},
	},
});

// _____________________________ToggleEvent_____________________________
const minusButtons = document.querySelectorAll(".minus-quantity");
const plusButtons = document.querySelectorAll(".plus-quantity");
const currentQuantity = document.querySelectorAll(".current-quantity-number");
// current-price-number
const currentPrice = document.querySelector(".current-price-number");
const oldPrice = document.querySelector(".current-price-discount");
// початкова ціна за 1 одиницю товару
const oneItemPrice = Number(currentPrice.innerHTML);
const oneItemOldPrice = Number(oldPrice.innerHTML);

minusButtons.forEach(btn => {
	btn.addEventListener("click", () => {
		if (Number(currentPrice.innerHTML) > oneItemPrice) {
			currentPrice.innerHTML = Number(currentPrice.innerHTML) - oneItemPrice;
			oldPrice.innerHTML = Number(oldPrice.innerHTML) - oneItemOldPrice;
		}
		currentQuantity.forEach(val => {
			if (Number(val.innerHTML) > 1) {
				val.innerHTML--;
			}
		});
	});
});

plusButtons.forEach(btn => {
	btn.addEventListener("click", () => {
		currentPrice.innerHTML = Number(currentPrice.innerHTML) + oneItemPrice;
		oldPrice.innerHTML = Number(oldPrice.innerHTML) + oneItemOldPrice;
		currentQuantity.forEach(val => {
			val.innerHTML++;
		});
	});
});