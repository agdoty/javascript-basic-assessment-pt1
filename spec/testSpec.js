describe("Create a variable called hello and assign it the string 'world'", function(){
  it("var hello should exist", function(){
    expect(hello).toEqual(jasmine.any(String));
  });
  it("var hello should be equal to 'world'", function(){
    expect(hello).toEqual('world');
  });
});
describe("isCool function", function(){
  it("Function should exist", function(){
    expect(isCool).toEqual(jasmine.any(Function));
  });
  it("Expected to equal false when tested with bad string", function(){
    var res = isCool("shmoogle");
    expect(res).toEqual(false);
  });
  it("Expected to equal true when tested with correct string", function(){
    var res = isCool("cool");
    expect(res).toEqual(true);
  });
});
