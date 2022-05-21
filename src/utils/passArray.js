export const getPasswords = name => {
	const value = sessionStorage.getItem(name);
	let array;
	if (value === null || undefined || '') {
		array = [];
	} else {
		array = JSON.parse(sessionStorage.getItem(name) || '');
	}

	return array;
};

export const passArray = arr => {
	let array = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			array[i] = arr[i];
		} else {
			continue;
		}
	}

	if (arr.length === 0) {
		array = ['not exist'];
	}

	return array;
};
