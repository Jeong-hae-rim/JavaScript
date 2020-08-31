# The MVC Design Pattern in Vanilla JavaScript

## 바닐라 자바스크립트에서의 MVC 패턴[^1]

<img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/07/1499899730MVC_B-01.png">

디자인 패턴은 흔히 유명한 프레임워크에 통합되는 경우가 많다. 예를 들어보자면, MVC(Model-View-Controller) 디자인 패턴은 아주 흔한 (어디에나 있는) 것이다. 자바스크립트라는 언어는 디자인 패턴에서 프레임워크를 분리시키기가 어렵다. 특정 프레임 워크는 종종 디자인 패턴에 대한 자체적인 설명이 딸려 있을 것이다. 프레임워크는 의견이 따르고, 제 각각 특정한 방식으로만 생각하도록 당신을 강요한다.

최신 프레임워크는 MVC 패턴과 같은 구체적인 구현을 지시한다. (최신 프레임워크들의)모든 설명이 각각 다르다면 혼동되므로, 잡음과 혼란을 덧붙인다. 만일 어떤 코드가 둘 이상의 프레임워크를 기반으로 할 경우, 그것은 좌절감을 주는 (많은 문제로) 엉망인 상황을 야기한다. 정말로 더 나은 방법은 없는 것인가?[^2]

MVC 패턴은 클라이언트 측 프레임워크에 좋은데, 최신 프레임워크는 변한다. 오늘날 현대적인 것은 시간의 경과에 따라 시들어간다.[^3] 이번 기회에 나는 대안들을 탐구하고 약간의 규율이 우리를 어디로 이끄는지 알아보고자 한다.

MVC 패턴은 그 자체로 몇 십 년 그 이상을 거슬러 올라간다. 이것은 당신의 프로그래밍 기술로서 투자하기에 좋은 디자인 패턴이고, 자립할 수 있는 디자인 패턴이다. 문제는 이것이 얼마나 갈 수 있느냐는 것이다.[^4]

##  잠깐, 이건 또 다른 프레임워크 아냐?

먼저, 나는 '디자인 패턴은 프레임워크가 아니다' 라는 이 흔한 미신을 떨쳐버리고 싶다. 디자인 패턴은 코드가 갖고 있는 문제를 해결하는 규율화된 접근 방식이다. 일정한 수준 이상의 스킬을 필요로 하며, 프로그래머의 책임으로 둔다. 디자인 패턴은 우려될 만한 사안을 분리하고, 깔끔한 코드(Clean code)를 만드는 데에 도움을 준다.

프레임 워크는 어떤 디자인 패턴을 고수할 필요가 없기 때문에 다르다.  패턴에서 프레임워크를 구분하는 방법은 헐리우드 원칙을 찾아보면 알 수 있다. 헐리우드 원칙은 "우리에게 전화하지 마십시오, 우리가 전화할 것입니다."이다. [^5] 당신이 사용할 때마다 지시하는 의존성이 존재한다면 그것은 프레임워크이다. 프레임워크는 당신이 어떻게 해야 할지, 무엇을 해야 할지에 대해 발언할 수 없게 하는 그 점에서 헐리우드와 같다. 실제로도 개발자는 영화배우와 같은데, 왜냐하면 배우들은 연기를 할 때 대본을 따르기 때문이다.[^6]

여기 클라이언트 측 프레임워크를 피하기 위한 좋은 이유들이 있다.

- 프레임워크는 당신의 솔루션을 위태롭게 하고 복잡성을 가중시킨다.
- 당신은 유지 관리할 수 없는 코드(unmaintainable code)로 이어지는 종속성 고정을 경험한다.
- 새롭게 유행하는 프레임워크가 등장했을 때, 기존에 존재하는 레거시 코드[^7]를 재활용하는 것이 어렵다.

## MVC 패턴

MVC 디자인 패턴은 1970년에서 80년대에 진행되었던 제록스 스몰 토크 연구 프로젝트[^8]에서 등장했다. 이것은 프런트 엔드 그래픽 사용자 인터페이스(GUI)를 위한 시간의 시험을 견뎌온 패턴이다.[^9] 이 디자인 패턴은 데스크탑 어플리케이션[^10]에서 나왔지만 웹 앱에도 효과적으로 적용됨을 입증했다.

이것의 쟁점은, MVC 디자인 패턴이 우려될 만한 것들의 완전한 분리에 대한 것이다.  그 아이디어는 솔루션을 쉽게 이해하고 요청할 수 있도록 한다. 구체적인 변화를 모색하는 그 어떤 동료 프로그래머라면 누구나 쉽게 올바른 지점을 찾을 수 있다.



## 펭귄 데모 (A Demo Of Penguins)

펭귄! 귀엽고 껴안고 싶게 생긴, 이 행성에서 가장 모피가 많은 생물들 중 일부다. 매우 귀여운데, 실제로 17종의 펭귄이 있고 이들은 전부 남극의 환경에서 살지 않는다. (갑자기 웬 펭귄 찬양?)

이제 펭귄 데모의 시간이다! 나는 이제부터 한 페이지에서 여러 종을 보여주는 덱[^11]을 보여줄 것이다. 이를 위해 나는 약간의 규율과 함께 MVC 패턴을 사용하고자 한다. 나는 당면한 문제를 해결하기 위해 단위 테스트와 함께 극단적 프로그래밍 기법을 사용할 것이며, (이제부터) 허튼 소린 없다. (필자가 앞에서 쓸데없이 본인의 덕후력을 뽐낸 걸 알고 있는지 갑자기 엄숙하게 말한다. ㅋㅋ) 그리하여 마지막에는, 당신은 몇 마리 펭귄들 각각의 데이터와 프로필 사진을 책장 넘기듯 휙휙 넘길 수 있어야 한다.

이 예제가 끝날 때 쯤에는, 당신은 순수 자바스크립트에서의 MVC 디자인 패턴을 사용하는 것을 충분히 학습했을 것이다. 이 패턴은 그 자체로도 테스트하기 매우 좋아서 좋은 단위 테스트 또한 기대할 수 있을 것이다.

나는 이 데모에서는 브라우저 간 호환성을 위해 ES5를 고수할 것이다. 이 오랫동안 지속되어온 디자인 패턴과 함께 입증된 언어의 특징들을 사용하는 게 타당하다.

그럼 이제 준비 되었나? 알아보러 가자!



## 뼈대

데모는 세 개의 메인 파트, 즉 Controller(컨트롤러), View(뷰), Model(모델)로 구성될 것이다. 그것들 각각 반드시 해결되어야 할 우려할 점과 문제점을 갖고 있다.

이것이 어떻게 생겼는지는 밑에 있다.

<img src="https://uploads.sitepoint.com/wp-content/uploads/2017/05/1495233802mvc_vanilla_javascript_1.png">

**PenguinController**는 이벤트를 처리하고, 뷰와 모델의 중재인 역할을 한다. 컨트롤러는 사용자가 작업을 수행할 때 어떤 일이 발생하는지(예를 들어 버튼이 클릭되거나 키가 눌린다거나) 파악한다. 클라이언트 측의 특정 로직은 컨트롤러에 들어갈 수 있다. 많은 일이 일어나고 있는 더 큰 시스템에서는 당신은 그것을 모듈로 분해할 수  있다. 컨트롤러는 이벤트의 진입 지점이며 뷰와 데이터(model) 사이의 유일한 중재인이다.

**PenguinView**는 DOM에 관심을 가진다. DOM은 HTML 조작에 사용되는 브라우저 API이다. MVC 패턴에서는 뷰를 제외하면 DOM 변경에 대해 컨트롤러와 모델은 신경쓰지 않는다. 뷰에 유저 이벤트를 붙일 수 있지만, 이벤트 처리 문제는 전부 컨트롤러가 다루도록 한다. 뷰의 주요 지시 사항은 화면 상에서 사용자가 보는 것들의 상태를 변경하는 것이다. 데모에서는, 뷰는 순수 자바스크립트로 DOM 조작을 수행할 것이다. 

**PenguinModel**은 데이터에 관심을 가진다. 클라이언트 측 자바스크립트에서, 이것은 Ajax를 의미한다. MVC 패턴의 한 가지 장점은 서버 측 Ajax 호출을 위한 단일한 장소를 제공한다는 것이다. 이는 솔루션에 익숙하지 않은 동료 프로그래머들을 이끌어올 수 있다. 이 디자인 패턴에서의 모델은 오로지 서버에서 오는 JSON이나 객체에 대해서만 상관한다.

한 가지 비효율적이거나 비생산적인 패턴[^12]은 우려할만한 것의 본질적인 분리를 위반하는 것이다. 예를 들어서 모델은 HTML에 대해 절대로 상관해서는 안 된다. 뷰는 모델과 상관이 있어서는 안 된다. 컨트롤러는 구현에 대한 세부적인 것들에 대해 걱정하지 않고 중재자 역할만을 수행해야 한다.

내가 이 패턴에서 발견한 것은 개발자들은 좋은 의도로 시작을 하지만 우려할 만한 것들을 유출한다는 것이다. 모든 것을 웹 컴포넌트로 바꿔버리고 종래에는 엉망진창으로 만들어버리고 싶다는 유혹에 빠진다. 사용자가 당면하는 우려와 특징에 중점을 둔다. 그러나, 특징적 우려는 기능적인 우려와 같지 않다.

프로그래밍에서, 내가 좋아하는 것은 기능적인 우려의 완벽한 분리이다. 각각의 독립된 프로그래밍 문제는 그것을 해결하는 일관적인 방법을 얻는다. 이것은 당신이 코드를 읽을 때에 좀 더 많이 쉽게 이해할 수 있게 돕는다. 이것은 다른 이들도 긍정적인 기여를 할 수 있도록 이끄는 매력적인 코드를 작성하는 것이다. 

당신이 보고 만져볼 수 있는 실제 예제 없이는 대단한 데모가 아닐 것이다. 그래서 이 이상의 지체는 지양하고, 밑에 펭귄 데모를 보여주고 있는 CodePen이 있다.

![image](https://user-images.githubusercontent.com/58800295/91698944-7b148280-ebae-11ea-8a5c-dda0a8a3c7ef.png)

[^footpage]: 상기 그림은 Previous와 Next를 누르면 계속해서 그림이 바뀐다.

![image](https://user-images.githubusercontent.com/58800295/91699050-a7300380-ebae-11ea-9992-82458b7d351c.png)

[^footpage]: 실제 HTML에는 달랑 id와 class만 적힌 div가 존재한다.

![image](https://user-images.githubusercontent.com/58800295/91699131-cb8be000-ebae-11ea-8de4-ff8b402e3aba.png)

[^footpage]: CSS에는 옆의 화면을 어떻게 구성할 것인지에 대해 지정했다.

![image](https://user-images.githubusercontent.com/58800295/91699256-faa25180-ebae-11ea-9b5e-664ff49ff80c.png)

[^footpage]: 실제 화면이 동작하도록 구성하는 외부 파일. 이곳이 핵심이다.

얘기는 충분했고, 이제 코드를 작성할 시간이다.



## 컨트롤러(Controller)

뷰와 모델은 컨트롤러에서 사용되는 두 가지 구성요소이다. 컨트롤러는 생성자에 작업을 수행하는데에 필요한 모든 구성요소를 가지고 있다.

```javascript
var PenguinController = function PenguinController(penguinView, penguinModel) {
	this.penguinView = penguinView;
	this.penguinModel = penguinModel;
}
```

생성자는 이런 식으로 **제어의 역전**[^13]을 사용해 모듈을 주입한다. 이 패턴을 사용하면 상위 수준의 계약을 충족시키는 어떤 컴포넌트라도 주입할 수 있다. 구현에 대한 세부적인 사항에서 코드를 추상화하는 나이스한 방법이라고 생각해라. 이러한 패턴은 순수 자바스크립트로 클린 코드를 작성할 수 있도록 한다.

그런 다음, 사용자 이벤트는 다음 방식으로 연결되고 처리된다.

```javascript
PenguinController.prototype.initialize = function initialize() {
	this.penguinView.onClickGetPenguin = this.onClickGetPenguin.bind(this);
};

PenguinController.prototype.onClickGetPenguin = function onClickGetPenguin(e){
    var target = e.currentTarget;
    var index = parseInt(target.dataset.penguininIndex, 10);
    this.penguinModel.getPenguin(index, this.showPenguin.bind(this));
}
```

이 이벤트는 DOM에 저장된 상태를 가져오기 위해 현재 대상을 사용하는 것에 주목해라. 이 경우, DOM은 현재의 상태에 대해 당신이 알아야 할 것들을 전부 알려준다. DOM의 현재 상태는 유저가 브라우저 상에서 보는 것이다. 컨트롤러가 상태를 바꾸지 않는 이상, 당신은 DOM 자체에 상태 데이터를 저장할 수  있다.

이벤트가 발생하면, 컨트롤러는 데이터를 가져와 다음에 무엇이 일어나는지 말해준다. 이 this.showPenguin()이라는 콜백 함수가 중요하다.

```js
PenguinController.prototype.showPenguin = function showPenguin(penguinModelData) {
	var penquinViewModel = {
		name: penguinModelData.name,
		imageUrl: penguinModelData.imageUrl,
		size: penguinModelData.size,
		favoriteFood: penguinModelData.favoriteFood
	};
	penguinViewModel.previousIndex = penguinModelData.index - 1;
	penguinViewModel.nextIndex = penguinModelData.index + 1;
	
	if(penguinModelData.index === 0){
		penguinViewModel.previousIndex = penguinModelData.count - 1;
	}
	
	if(penguinModelData.index) === penguinModelData.count - 1) {
		penguinViewModel.nextIndex = 0;
	}
	
	this.penguinView.render(penguinVewModel);
}
```

컨트롤러는 각 펭귄에 대한 인덱스를 계산하고 뷰에 이것들을 렌더링하도록 지시한다. 컨트롤러는 모델로부터 데이터를 가져와서 뷰가 이해하고 관심을 가질 수 있도록 객체로 변형시킨다.

이것은 펭귄을 보여줄 때의 행복한 경로의 단위 테스트이다.

```js
var PenguinViewMock = function PenguinViewMock(){
	this.calledRenderWith = null;
};

PenguinViewMock.prototype.render = function render(penguinViewModel){
	this.callRenderWith = penguinViewModel;
};

//Arrange
var penguinViewMock = new PenguinViewMock();

var controller = new PenguinController(penguinViewMock, null);

var penguinModelData = {
	name: 'Chinstrap',
	imageUrl: 'http://chintrapl.jpg',
	size: '5.0kg (m), 4.8kg (f)',
	favoriteFood: 'krill',
	index: 2,
	count: 5
};

//Act
controller.showPenguin(penguinModelData);

//Assert
assert.strictEqual(penguinViewMock.calledRenderWith.name, 'Chinstrap');
assert.strictEqual(penguinViewMock.calledRenderWith.imageUrl, 'http://chinstrapl.jpg');
assert.strictEqual(penguinViewMock.calledRenderWith.size, '5.0kg (m), 4.8kg (f)');
assert.strictEqual(penguinViewMock.calledRenderWith.favoriteFood, 'krill');
assert.strictEqual(penguinViewMock.calledRenderWith.previousIndex, 1);
assert.strictEqual(penguinViewMock.calledRenderWith.nextIndex, 3);
```

PenguinViewMock은 실제 구현되는 것과 동일한 계약을 맺고 있다. 이를 통해 단위 테스트를 작성하고 어셜션을 만들 수 있다. 어셜션은 Node 어셜션에서 비롯되었으며 또한 Chai 어셜션에서도 사용될 수 있다.  이를  통해 Node와 브라우저 상에서 실행할 수 있는 테스트를 작성할 수 있다.

주목할만한 점은 컨트롤러는 구현의 구체적인 사항에 대해 고려하지 않는다는 것이다. 컨트롤러는 this.render()와 같이 뷰가 제공하는 계약서를 사용한다. 이것은 클린 코드를 위한 불가피한 규율이다. 컨트롤러는 각 구성요소가 하는 것을 신뢰한다. 이것은 코드를 읽을 수 있게 하는 데에 신뢰성을 더한다.



## 뷰(The View)

뷰는 오직 DOM 요소와 연결되는 이벤트에만 관심이 있다. 예를 들어,

```js
var PenguinView = function PenguinView(element){
	this.element = element;
	
	this.onClickGetPenguin = null;
}
```

사용자가 보고 있는 상태를 변경하면, 그 구현은 이처럼 된다.

```js
PenguinView.prototype.render = function render(viewModel){
	this.element.innerHTML = '<h3>' + viewModel.name + '</h3>' + '<img class="penguin-image" src="' + viewModel.imageUrl + '" alt="' + viewModel.name + '" />' + '<p><b>Size:</b>' + viewModel.size + '</p>' + '<p><b>Favorite food:</b>' + viewModel.favoriteFood + '</p>' + '<a id="previousPenguin" class="previous button" href="javascript:void(0);"' + ' data-penguin-index="' + viewModel.previousIndex + '">Previous</a>' + '<a id="nextPenguin" class="next button" href="javascript:void(0);"' + ' data-penguin-index="' + viewModel.nextIndex + '">Next</a>';
}
this.previousIndex = viewModel.previousIndex;
this.nextIndex = viewModel.nextIndex;

//Wire up click events, and let the controller handle events
var previousPenguin = this.element.querySelector('#previousPenguin');
previousPenguin.addEventListener('click', this.onClickGetPenguin);

var NextPenguin = this.element.querySelector('#nextPenguin');
nextPenguin.addEventListner('click', this.onClickGetPenguin);
nextPenguin.focus();
```

여기서 주목할 만한 주요 관심사는 뷰 모델 데이터를 HTML로 전환하고 상태를 변경시키는 것이다. 두 번째는 클릭 이벤트를 연결하고 컨트롤러가 진입 지점 역할을 하도록 하는 것이다. 이벤트 핸들러는 상태가 변경된 후 DOM에 연결된다. 이 기술은 이벤트 관리를 한 번의 정리로 처리한다. 이를 테스트하기 위해, 요소 업데이트와 상태의 변경을 확인할 수 있다.

```js
var ElementMock = function ElementMock(){
    this.innerHTML = null;
};

//Stub function, so we can pass the test
ElementMock.prototype.querySelector = function querySelector(){};
ElementMock.prototype.addEventListner = function addEventListner(){};
ElementMock.prototype.focus = function focus(){};

//Arrange
var elementMock = new ElementMock();

var view = new PenguinView(elementMock);

var viewModel = {
    name: 'Chinstrap',
    imageUrl: 'http://chinstrap1.jpg',
    size: '5.0kg (m), 4.8kg (f)',
    favoriteFood: 'krill',
    previousIndex: 1,
    nextIndex: 2
};

//Act
view.render(viewModel);

// Assert
assert(elementMock.innerHTML.indexOf(viewModel.name) > 0);
assert(elementMock.innerHTML.indexOf(viewModel.imageUrl) > 0);
assert(elementMock.innerHTML.indexOf(viewModel.size) > 0);
assert(elementMock.innerHTML.indexOf(viewModel.favoriteFood) > 0);
assert(elementMock.innerHTML.indexOf(viewModel.previousIndex) > 0);
assert(elementMock.innerHTML.indexOf(viewModel.nextIndex) > 0);
```

이것은 모든 큰 우려될만한 것들, 상태의 변경과 연결 이벤트들을 해결한다. 그러나 이러한 데이터들은 어디서 오는 걸까?



## 모델(The Model)

MVC 패턴에서는, 모든 모델은 Ajax에 관심을 가진다. 예를 들어,

```js
var penguinModel = function PenguinModel(XMLHttpRequest){
	this.XMLHttpRequest = XMLHttpRequest;
}
```

주목할 만한 점은 모듈 XMLHttpRequest가 생성자에 주입된다는 것이다. 이것은 같이 일하는 동료 프로그래머들에게 이 모델이 필요로 하는 구성요소가 무엇인지 알릴 수 있는 방법이다. 만일 모델에 단순한 Ajax 이상의 것이 필요하다면, 당신은 더 많은 모델로 신호를 보낼 수 있다. 게다가 단위 테스트에서, 나는 원래의 모듈과 정확하게 같은 계약을 가진 모의를 주입할 수 있었다.

인덱스를 기반으로 해서 펭귄을 얻을 시간이다.

```js
PenguinModel.prototype.getPenguin = function getPenguin(index, fn){
    var oReq = new this.XMLHttpRequest();
    
    oReq.onload = function onload(e){
        var ajaxResponse = JSON.parse(e.currentTarget.responseText);
        var penguin = ajaxResponse[index];
    }
    
    penguin.index = index;
    penguin.count = ajaxResponse.length;
    
    fn(penguin);
    
    oReq.open('GET', 'https://codepen.io/beautifulcoder/pen/vmOOLr.js', true);
    oReq.send();
};
```

이 지점은 마지막 지점을 가리키고, 서버에서 데이터를 가져온다. 우리는 단위 테스트를 통해 데이터를 모의로 테스트해볼 수 있다.

```js
 var LIST_OF_PENGUINS = '[{"name":"Emperor","imageUrl":"http://imageUrl",' +
  '"size":"36.7kg (m), 28.4kg (f)","favoriteFood":"fish and squid"}]';

var XMLHttpRequestMock = function XMLHttpRequestMock(){
    //The system under test must set this, else the test fails
    this.onload = null;
};

XMLHttpRequestMock.prototype.open = function open(method, url, async) {
    //Internal checks, system under test must have a method and url endpoint
    assert(method);
    assert(url);
    //If Ajax in not async, you're doing it wrong :-)
    assert.strictEqual(async, true);
};

XMLHttpRequestMock.prototype.send = function send(){
    //Callback on this object simulates an Ajax request
    this.onload({ currentTarget : { responseText: LIST_OF_PENGUINS } });
};

//Arrange
var penguinModel = new PenguinModel(XMLHttpRequestMock);

//Act
penguinModel.getPenguin(0, function onPenguinData(penguinData){
  //Assert
  assert.strictEqual(penguinData.name, 'Emperor');
  assert(penguinData.imageUrl);
  assert.strictEqual(penguinData.size, '36.7kg (m), 28.4kg (f)');
  assert.strictEqual(penguinData.favoriteFood, 'fish and squid');
  assert.strictEqual(penguinData.index, 0);
  assert.strictEqual(penguinData.count, 1);  
});
```

당신도 봤다시피, 모델은 오로지 가공되지 않은 데이터에만 관심이 있다.  이것은 Ajax와 자바스크립트 객체로 작업한다는 것을 의미한다. 만약 당신이 Ajax와 바닐라 자바스크립트에 대해 확실하게 알지 못한다면, 다음 기사에 더 많은 정보가 있다.



## 단위 테스트 (Unit Test)

어떠한 규율이라도, 안심시키기 위해서 필요한 일을 하는 것이 중요하다. MVC 디자인 패턴은 당신이 문제를 해결하는 방법을 지시하지 않는다. 디자인 패턴은 당신이 클린 코드를 작성할 수 있도록 돕는 광범위한 경계를 제공한다. 이것은 당신을 의존적인 억압으로부터의 자유를 선사한다.

나에게, 이것은 각 사용 방법에 대한 단위 테스트의 전체 세트를 갖는 것을 의미한다. 테스트는 코드가 어떻게 유용한지에 대한 지침을 제공한다. 이것은  구체적인 변화를 시도하는 그 어떤 프로그래머들이라도 개방적으로 이끈다.

모든 유닛 테스트들을 마음 놓고 뒤져봐도 괜찮다. 나는 당신이 이 디자인 패턴을 이해하는 데에 그것이 도움이 될 것이라고 생각한다. 각 테스트는 특정한 사용 사례를 위한 것으로, 세분화된 문제로서 받아들여라. 단위 테스트는 당신이 각 코딩 문제에 대해 개별적으로 생각하고 그 문제를 해결하도록 도울 것이다. MVC에서 이러한 기능적인 문제의 분리는 각 단위 테스트에서 실현된다.



## 보기에 앞서 (Looking Ahead)

펭귄 데모는 MVC가 얼마나 유용하게 사용되는지에 대한 실행 가능한 개념들만 모아놓았다. 그러나, 다음과 같은 개선 사항이 있다.

- 모든 펭귄의 목록을 화면에 추가하는 것
- 키보드 이벤트를 추가해서 펭귄을 뒤집고, 스와이프를 추가하는 것
- 데이터를 시각화하는 SVG 차트, 펭귄의 크기와 같은 데이터 포인트를 선택하는 것

물론, 이 데모를 더 진행시키는 것은 나의 독자 여러분의 손에 달려 있다. 이것들은 단순히 디자인 패턴이 얼마나 파워풀하게 보일 수 있는지 보여주는 몇 가지 아이디어일 뿐이기 때문이다.



## 결론

나는 MVC 디자인 패턴과 약간의 규율이 당신을 어디로 데려가는지 당신이 보길 바란다. 좋은 디자인 패턴은 클린 코드를 촉진함과 동시에 길을 방해하지 않는다. 그것은 오로지 당면한 문제만을 해결하면서 당신이 작업을 계속 진행할 수 있도록 해준다. 디자인 패턴은 당신을 더 영향력 있는 프로그래머로 만들어 줄 것이다.

프로그래밍에서 중요한 점은, 문제를 해결하면서도 문제와 가깝도록 유지하는 것이다. 프로그래밍 기술은 한 번에 하나의 문제만을 해결한다. MVC 패턴에서, 한 번에 하나의 기능적인 문제를 의미한다.

개발자로서, 당신은 논리적이고 감정적으로 다루지 않는다고 믿기 쉽다. (그러나) 진실은 당신이 한 번에 너무 많은 문제에 부딪히게 된다면 좌절감을 느낄 것이란 것이다. 이것은 우리 모두가 느끼는 인간으로서의 정상적인 반응이다. 사실 좌절감은 코드의 품질에 나쁜 영향을 끼친다. 이러한 감정들이 당신을 쥐고 지배하면 당신의 작업은 더이상 논리적이지 않게 된다. 솔루션이 더 많은 위험과 복잡한 의존성을 안게 된다면 이는 사기를 떨어뜨릴 수 있게 된다.

내가 좋아하는 것은 하나의 관심사에 집중하는 것이다. 한 번에 하나의 문제를 해결하고 하나의 긍정적인 피드백을 받아라. 이렇게만 한다면 당신은 그곳에 머물면서 생산적으로, 말도 안 되는 소리에서 자유로워질 것이다.



이 기사는 Vildan Sofitc에 의해 쓰여지고 동료들이 검토했습니다. SitePoint 컨텐츠를 최상의 상태로 만든 모든 SitePoint 동료 검토자에게 감사드립니다!







[^1]: 바닐라 js 의 MVC 패턴을 공부하기 위해서 필요한 내용인 것 같은데 영어라 번역을 돌려봐도 잘 이해가 안 돼서 직접 해설 및 의역.
[^2]: The question in my mind is, is there a better way?의 의역. 직역하자면 "내 마음 속에 있는 질문은, 더 나은 방법은 없을까?" 이다.
[^3]: 최신 프레임워크는 등장한 동시에는 이목을 받다가도, 시간이 지나면 사람들의 관심이 시들시들해지거나 사라진다는 것을 의미한다. 즉, MVC 패턴은 클라이언트 측 프레임워크에 적합하지만 최신 프레임워크는 계속해서 변화하거나 사장되기 때문에 필자는 이 포스트에서 대안을 탐구해보자는 말을 하고 있다.
[^4]: The question is, how far can this take us?의 의역. 직역하자면 "문제는,  이것(MVC패턴)이 우리를 데리고 얼마나 멀리까지 갈 수 있을까?"이다.
[^5]: 뽑기 어려운 사원에게 나중에 연락할 테니 자꾸 전화하지 말라는 회사 측의 말로 쓰인다. 1960년대 미국에서 면접관들이 쓰기 시작한 말인데, 나중에 헐리우드 극장에서 배우들의 오디션을 보고 거절할 때 많이 써서 유명해졌다. 프로그래밍에서는 역전된 제어 구조를 의미한다. 부모 클래스에서 자식 클래스에 정의된 연산을 호출할 수 있지만 반대로 자식 클래스가 부모 클래스에 정의된 연산을 호출할 수 없다.
[^6]:  배우들은 영화 대본을 벗어나는 행동과 대사를 할 수 없다. 이처럼 개발자도 프레임워크를 쓰게 된다면 프레임워크를 벗어나는 코드나 라이브러리를 사용할 수 없다는 말이 된다.
[^ 7 ]: 사전적 의미로 따졌을 때 유산, 산물이 된 코드로 해석된다. 즉 누군가 떠나면서 남기고 간 코드. 개발에서 흔히 레거시 코드라 하면 "더 이상 쓰기 힘들거나 화나게 만드는 코드"로 일컬어지는데, 부정적인 의미다. 다른 코드와의 개연성을 무시한 채 Due Date(일명 데드라인)에 맞춰 작성된 코드라거나, 코드 종속성을 낮추는 노력이 없어보인다거나, 주석 등이 없어 수정 보완이 불가능한 코드 등을 말한다. 여기서는 단순히 기존에 존재하는(내가 썼든 남이 썼든) 코드를 총칭하고 있다고 봐도 무방하다. [https://webisfree.com/2017-11-23/%EB%A0%88%EA%B1%B0%EC%8B%9C-%ED%95%A8%EC%88%98-%EB%A0%88%EA%B1%B0%EC%8B%9C-%EC%BD%94%EB%93%9C%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80](https://webisfree.com/2017-11-23/레거시-함수-레거시-코드란-무엇인가)
[^8]: 스몰 토크는 프로그래밍 언어이다. 제록스 팔로 알토 연구 센터에서 연구되었으며, 다른 객체지향형 언어와 같이 스몰 토크 또한 중심 개념은 객체이다.
[^9]: GUI, 즉 사용자가 편리하게 사용할 수 있도록 입출력 등의 기능을 알기 쉬운 아이콘 따위의 그래픽으로 나타낸 환경. MVC 디자인 패턴이 70년대에서 80년대에 처음 등장하고 인터넷 환경이 시간의 경과에 따라 CLI(커맨드라인을 입력해서 명령어를 실행하는 환경)에서 GUI로 급변했는데도 사장되지 않고 살아남은 것을 '시간의 시험을 견뎠다' 라고 표현하고 있다.
[^10]: 맥, 윈도우, 리눅스 등에 설치된 응용 프로그램. 보통 윈도우에서는 C++을, 맥에서는 Object C를 이용해 어플리케이션을 만들어왔기 때문에 웹 개발자로서는 데스크탑 어플리케이션을 만들기 어렵거나 먼 존재로 인식해왔다.
[^11]: Deck. 보통 갑판을 의미하지만 여기서는 카드의 그 덱을 의미한다.
[^12]: Anti-pattern. 실제 많이 사용되는 **패턴**이지만 비효율적이거나 비생산적인 **패턴**을 의미한다. **안티 패턴**은 1995년 앤드루 케이니그가 디자인 **패턴**을 참고하여 처음 사용한 말이다.
[^13]: 기존의 모든 제어를 클라이언트 코드가 가지도록 구현하던 것에서 기존의 구조적 설계와 비교해 프레임워크(Container)가 제어를 나누어 가져가게 되어 **의존 관계의 방향이 달라지게 되는 것**을 **제어가 반전, 역전** 되었다 라고 한다.