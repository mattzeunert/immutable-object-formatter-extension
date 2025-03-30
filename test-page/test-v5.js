function runTests(){
    // window.test = Immutable.fromJS({"a": "test", b: [{a:2},{b:3}]})
    // console.log(window.test)

    class ABRecord extends Immutable.Record({a:1,b:2}) {
      getAB() {
        return this.a + this.b;
      }
    }

    var Xyz = new Immutable.Map({a: new Immutable.Map({b:8})})
    console.log("Expand this and check child renders as a Map", Xyz)

    var Foo = Immutable.Record({bar: new Immutable.Map({a: 5}) })
    var f = Foo()
    console.log("Expand this and check child renders as a Map", f)

    window.record = new ABRecord();
    window.record2 = new ABRecord({a: 2});
    console.log(window.record);
    console.log(window.record2);

    window.orderedMap = Immutable.OrderedMap({key: "value"});
    window.orderedMap2 = Immutable.OrderedMap([["key", "value"], ["key2", "value2"]]);
    console.log(window.orderedMap);
    console.log(window.orderedMap2);

    window.orderedSet = Immutable.OrderedSet(["hello", "aaa"]);
    console.log(window.orderedSet);

    window.list = Immutable.List(["hello", "world"]);
    console.log(window.list)

    window.map = Immutable.Map({hello: "world"})
    console.log(window.map)

    window.set = Immutable.Set(["hello", "aaa"])
    console.log(window.set)

    window.stack = Immutable.Stack(["hello", "aaa"])
    console.log(window.stack)

    console.log("shoudln't cause error", Immutable.Record.prototype)

    if (window.isRecordForTesting) {
        console.assert(isRecordForTesting(record))
        console.assert(isRecordForTesting(record2));
        [orderedMap, orderedMap2, orderedSet, list, map, set, stack].forEach(function(o){
            console.assert(!isRecordForTesting(o))
        })
        console.log("Ran isRecord tests")
    }
}