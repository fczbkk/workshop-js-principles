describe('getPivot', function () {

  it('should return pivot of zero box', function () {
    var box = {width: 0, height: 0, left: 0, top: 0};
    var result = getPivot(box);

    expect(result.x).toEqual(0);
    expect(result.y).toEqual(0);
  });

  it('should return pivot of regular box', function () {
    var box = {width: 100, height: 200, left: 300, top: 400};
    var result = getPivot(box);

    expect(result.x).toEqual(350);
    expect(result.y).toEqual(500);
  });

});


describe('getPivotDistance', function () {

  it('should get distance of vertical boxes', function () {
    var box1 = {width: 0, height: 0, left: 0, top: 0};
    var box2 = {width: 0, height: 0, left: 100, top: 0};

    expect(getPivotDistance(box1, box2)).toEqual(100);
  });

  it('should get distance of horizontal boxes', function () {
    var box1 = {width: 0, height: 0, left: 0, top: 0};
    var box2 = {width: 0, height: 0, left: 0, top: 100};

    expect(getPivotDistance(box1, box2)).toEqual(100);
  });

  it('should get distance of diagonal boxes', function () {
    var box1 = {width: 100, height: 100, left: 0, top: 0};
    var box2 = {width: 100, height: 100, left: 100, top: 100};

    expect(getPivotDistance(box1, box2)).toBeCloseTo(141, 0);
  });

});


describe('getHypotenuse', function () {

  it('should get hypotenuse of zero triangle', function () {
    expect(getHypotenuse(0, 0)).toEqual(0);
  });

  it('should get hypotenuse of zero side triangle', function () {
    expect(getHypotenuse(0, 100)).toEqual(100);
  });

  it('should get hypotenuse of regular triangle', function () {
    expect(getHypotenuse(100, 100)).toBeCloseTo(141, 0);
  });

});


// helper function, returns element with given size at given position
function createTestElement(width, height, left, top) {
  var elm = document.createElement('div');
  elm.style.position = 'absolute';
  elm.style.width = width + 'px';
  elm.style.height = height + 'px';
  elm.style.left = left + 'px';
  elm.style.top = top + 'px';
  elm.className = 'test';
  document.body.appendChild(elm);
  return elm;
}


// helper function, removes all test elements from document
function removeTestElements () {
  var test_elements = document.querySelectorAll('.test');
  for (var i = 0; i < test_elements.length; i++) {
    var element = test_elements[i];
    element.parentNode.removeChild(element);
  }
}


describe('getBox', function () {

  afterEach(removeTestElements);

  it('should get properties of regular box', function () {
    var element = createTestElement(100, 200, 300, 400);
    var result = getBox(element);

    expect(result.width).toEqual(100);
    expect(result.height).toEqual(200);
    expect(result.left).toEqual(300);
    expect(result.top).toEqual(400);
  });

});


describe('measurePivotDistance', function () {

  it('should get pivot distance of two elements', function () {
    var element1 = createTestElement(0, 0, 100, 100);
    var element2 = createTestElement(100, 100, 100, 100);

    expect(measurePivotDistance(element1, element2)).toBeCloseTo(71, 0);
  });

});