describe("sample test for basic test", function () {

  beforeAll(function () {
    console.log('beforeAll');
  });

  beforeEach(function () {
    console.log('beforeEach');
  });

  afterAll(function () {
    console.log('afterAll');
  });

  afterEach(function () {
    console.log('afterEach');
  });

  it("Basic test block to see the global functions hierarchy", function () {
    console.log('Sample Test 1');
  });

  it("Basic test block to see the global functions hierarchy", function () {
    console.log('Sample Test 2');
  });

});