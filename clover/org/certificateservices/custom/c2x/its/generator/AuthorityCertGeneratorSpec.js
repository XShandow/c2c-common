var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":266,"id":13178,"methods":[{"el":64,"sc":2,"sl":56},{"el":49,"sc":2,"sl":49},{"el":49,"sc":2,"sl":49},{"el":50,"sc":2,"sl":50},{"el":50,"sc":2,"sl":50},{"el":51,"sc":2,"sl":51},{"el":51,"sc":2,"sl":51},{"el":52,"sc":2,"sl":52},{"el":52,"sc":2,"sl":52},{"el":53,"sc":2,"sl":53},{"el":53,"sc":2,"sl":53},{"el":54,"sc":2,"sl":54},{"el":54,"sc":2,"sl":54},{"el":121,"sc":2,"sl":68},{"el":159,"sc":2,"sl":124},{"el":208,"sc":2,"sl":162},{"el":257,"sc":2,"sl":211},{"el":264,"sc":2,"sl":259}],"name":"AuthorityCertGeneratorSpec","sl":47}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_28":{"methods":[{"sl":51},{"sl":53},{"sl":124}],"name":"Generate version 1 RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":128},{"sl":130},{"sl":131},{"sl":132},{"sl":133},{"sl":134},{"sl":135},{"sl":136},{"sl":137},{"sl":138},{"sl":139},{"sl":141},{"sl":142},{"sl":143},{"sl":145},{"sl":146},{"sl":147},{"sl":148},{"sl":150},{"sl":151},{"sl":153},{"sl":154}]},"test_283":{"methods":[{"sl":51},{"sl":52},{"sl":53},{"sl":162}],"name":"Generate version 1 Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":165},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":174},{"sl":175},{"sl":176},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":189},{"sl":190},{"sl":191},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":198},{"sl":199},{"sl":201},{"sl":202}]},"test_295":{"methods":[{"sl":51},{"sl":52},{"sl":53},{"sl":211}],"name":"Generate version 1 Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":214},{"sl":217},{"sl":219},{"sl":220},{"sl":221},{"sl":223},{"sl":224},{"sl":225},{"sl":230},{"sl":231},{"sl":232},{"sl":233},{"sl":234},{"sl":235},{"sl":236},{"sl":238},{"sl":239},{"sl":240},{"sl":242},{"sl":243},{"sl":244},{"sl":245},{"sl":247},{"sl":248},{"sl":250},{"sl":251}]},"test_314":{"methods":[{"sl":49},{"sl":53},{"sl":259}],"name":"Verify illegal subjec type no root ca and CA certificate null throws illegal argument exception","pass":true,"statements":[{"sl":261},{"sl":263}]},"test_37":{"methods":[{"sl":51},{"sl":52},{"sl":53},{"sl":211}],"name":"Generate version 2 Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":214},{"sl":217},{"sl":219},{"sl":220},{"sl":221},{"sl":223},{"sl":224},{"sl":227},{"sl":228},{"sl":230},{"sl":231},{"sl":232},{"sl":233},{"sl":234},{"sl":235},{"sl":236},{"sl":238},{"sl":239},{"sl":240},{"sl":242},{"sl":243},{"sl":244},{"sl":245},{"sl":247},{"sl":248},{"sl":250},{"sl":251}]},"test_576":{"methods":[{"sl":51},{"sl":53},{"sl":54},{"sl":68}],"name":"Generate version 1 RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":71},{"sl":74},{"sl":76},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":97},{"sl":98},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":105},{"sl":106},{"sl":107},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":115},{"sl":116}]},"test_798":{"methods":[{"sl":51},{"sl":53},{"sl":124}],"name":"Generate version 2 RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":128},{"sl":130},{"sl":131},{"sl":132},{"sl":133},{"sl":134},{"sl":135},{"sl":136},{"sl":137},{"sl":138},{"sl":139},{"sl":141},{"sl":142},{"sl":143},{"sl":145},{"sl":146},{"sl":147},{"sl":148},{"sl":150},{"sl":151},{"sl":153},{"sl":154}]},"test_819":{"methods":[{"sl":51},{"sl":52},{"sl":53},{"sl":162}],"name":"Generate version 2 Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":165},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":174},{"sl":175},{"sl":178},{"sl":179},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":189},{"sl":190},{"sl":191},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":198},{"sl":199},{"sl":201},{"sl":202}]},"test_860":{"methods":[{"sl":51},{"sl":53},{"sl":54},{"sl":68}],"name":"Generate version 2 RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":71},{"sl":74},{"sl":76},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":97},{"sl":98},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":105},{"sl":106},{"sl":107},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":115},{"sl":116}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [314], [], [28, 283, 37, 295, 798, 819, 860, 576], [283, 37, 295, 819], [28, 283, 314, 37, 295, 798, 819, 860, 576], [860, 576], [], [], [], [], [], [], [], [], [], [], [], [], [], [860, 576], [], [], [860, 576], [], [], [860, 576], [], [860, 576], [], [], [860, 576], [860, 576], [860, 576], [860, 576], [860, 576], [860, 576], [860, 576], [860, 576], [860, 576], [860, 576], [], [860, 576], [860, 576], [860, 576], [860, 576], [860, 576], [], [860, 576], [860, 576], [860, 576], [], [860, 576], [860, 576], [860, 576], [860, 576], [], [860, 576], [860, 576], [860, 576], [], [860, 576], [860, 576], [860, 576], [860, 576], [860, 576], [], [860, 576], [860, 576], [], [], [], [], [], [], [], [28, 798], [], [], [], [28, 798], [], [28, 798], [28, 798], [28, 798], [28, 798], [28, 798], [28, 798], [28, 798], [28, 798], [28, 798], [28, 798], [], [28, 798], [28, 798], [28, 798], [], [28, 798], [28, 798], [28, 798], [28, 798], [], [28, 798], [28, 798], [], [28, 798], [28, 798], [], [], [], [], [], [], [], [283, 819], [], [], [283, 819], [], [], [283, 819], [], [283, 819], [283, 819], [283, 819], [], [283, 819], [283, 819], [283], [], [819], [819], [], [283, 819], [283, 819], [283, 819], [283, 819], [283, 819], [283, 819], [283, 819], [], [283, 819], [283, 819], [283, 819], [], [283, 819], [283, 819], [283, 819], [283, 819], [], [283, 819], [283, 819], [], [283, 819], [283, 819], [], [], [], [], [], [], [], [], [37, 295], [], [], [37, 295], [], [], [37, 295], [], [37, 295], [37, 295], [37, 295], [], [37, 295], [37, 295], [295], [], [37], [37], [], [37, 295], [37, 295], [37, 295], [37, 295], [37, 295], [37, 295], [37, 295], [], [37, 295], [37, 295], [37, 295], [], [37, 295], [37, 295], [37, 295], [37, 295], [], [37, 295], [37, 295], [], [37, 295], [37, 295], [], [], [], [], [], [], [], [314], [], [314], [], [314], [], [], []]