var str = [];

str[0] = "자존심은 어리석은 자의 소유물이다."
str[1] = "후회를 최대한 이용하라. 깊이 후회한다는 것은 새로운 삶을 산다는 것이다."
str[2] = "길을 아는 것과 길을 걷는 것은 다르다."
str[3] = "좋아하는 것에서 이유를 찾지 말자."
str[4] = "하늘에는 별이, 땅에는 꽃이 있듯이 사람에게는 사랑이 있다."

var random = Math.floor((Math.random()*5));

document.write("<p>&ldquo;" + str[random] + "&rdquo;</p>")