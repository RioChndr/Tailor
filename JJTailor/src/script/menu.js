const data = {
	paginationFactor: 135, // 120 + 15 (Padding bawah) / per item
	currentOffset: 0,
	windowSize: 3,
	items: [
		{ img: "#", label: "Clothes" },
		{ img: "#", label: "Fabric" },
		{ img: "#", label: "Sleeve" },
		{ img: "#", label: "Collar" },
		{ img: "#", label: "Cuff" },
		{ img: "#", label: "Placket" },
		{ img: "#", label: "Pocket" },
		{ img: "#", label: "Back Details" },
		{ img: "#", label: "Button Cut" },
		{ img: "#", label: "Button" }
	]
}

// Hingga -840 
console.log(0 <= (-140 * 6))

function atHeadOfList() {
	return data.currentOffset === 0;
}

function atEndOfList() {
	let windowHeight = window.innerHeight;
	let maxScroll = ((data.paginationFactor * -1) * (data.items.length)) + windowHeight;
	return data.currentOffset <= maxScroll;
}

function moveCarousel(direction) {

	/* Jika tombol bawah ditekan dan nilai translateX nya bernilai dibawah 0 */
	if (direction === 1 && !atEndOfList()) {

    	/* 
    		0 -= 140 

    		Pengurangannya berapa banyak? Hingga -840
    	*/
		data.currentOffset -= data.paginationFactor;
	}

	/* Jika tombol atas ditekan dan nilai translateX nya bukan bernilai 0 */
	else if (direction === -1 && !atHeadOfList()) {

    	/* 
    		0 += -140 

    		Penambahannya berapa banyak? Hingga 0
    	*/
		data.currentOffset += data.paginationFactor;
	}

	content.style.transform = `translateY(${data.currentOffset}px)`;
}

let content = document.querySelector(".menu-list");

for (let item of data.items) {
	content.innerHTML += `<div class="menu-item">
							<img src="${item.img}">
							<label>${item.label}</label>
						</div>`;
}