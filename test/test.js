/**
 * Created by chinegua on 23/4/17.
 */

let Rectangle = require("../lib/rectangle");

describe("getArea Rectangle", function(){
    it("must compute the rectangle area correctly",function(){
        let a = new Rectangle ( {width:100, height:100});
        var result = a.getArea();
        result.should.equal(10000);
    })
})