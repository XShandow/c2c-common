var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":56,"id":4877,"methods":[{"el":43,"sc":2,"sl":32},{"el":54,"sc":2,"sl":45}],"name":"RegionDictionarySpec","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_109":{"methods":[{"sl":32}],"name":"Verify that iso_3166_1 has bytevalue 0","pass":true,"statements":[{"sl":35},{"sl":36}]},"test_141":{"methods":[{"sl":45}],"name":"Verify that RegionDictionary.getByValue returns iso_3166_1 for 0","pass":true,"statements":[{"sl":48}]},"test_251":{"methods":[{"sl":45}],"name":"Verify that RegionDictionary.getByValue returns un_stats for 1","pass":true,"statements":[{"sl":48}]},"test_324":{"methods":[{"sl":32}],"name":"Verify that un_stats has bytevalue 1","pass":true,"statements":[{"sl":35},{"sl":36}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [324, 109], [], [], [324, 109], [324, 109], [], [], [], [], [], [], [], [], [251, 141], [], [], [251, 141], [], [], [], [], [], [], [], []]