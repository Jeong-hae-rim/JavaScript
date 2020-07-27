		var numbers = [2, 4, 6, 8, 10];

		
		var add = 0;
		for (var i = 0; i<numbers.length; i++){
			add += numbers[i];
		}
		numbers.push(add);
		showArray(numbers);

		
		function showArray(arr) {
			var str = "<table><tr>";
			for (var i=0; i<arr.length; i++) {
				str += "<td>" + arr[i] + "</td>";
			}
			str += "</tr></table>";
			document.write(str);

		}