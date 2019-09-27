const Conversion = (dnk) => {
	let rnk = '';
	let upstr = dnk.toUpperCase();
	for (let i = 0; i < upstr.length; i++) {
		if (upstr === " ") {
			return " ";
		} else {
			switch (upstr[i]) {
				case 'G':
					rnk += 'C';
					break;

				case 'C':
					rnk += 'G';
					break;

				case 'T':
					rnk += 'A';
					break;

				case 'A':
					rnk += 'U';
					break;

				default:
					return "Введен неверный нуклеотид";
			}
		}
	}
	return rnk;
}
export default Conversion;
