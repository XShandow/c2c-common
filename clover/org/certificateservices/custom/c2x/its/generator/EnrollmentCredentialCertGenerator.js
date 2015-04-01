var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":158,"id":3307,"methods":[{"el":57,"sc":2,"sl":53},{"el":113,"sc":2,"sl":82},{"el":154,"sc":2,"sl":138}],"name":"EnrollmentCredentialCertGenerator","sl":39}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_313":{"methods":[{"sl":138}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":152},{"sl":153}]},"test_330":{"methods":[{"sl":82}],"name":"Verify that illegal argument exception is thrown for messages with unsupported subject type","pass":true,"statements":[{"sl":96},{"sl":111}]},"test_342":{"methods":[{"sl":53},{"sl":82}],"name":"Generate Enrollment Credential v1 for interoperability testing","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":96},{"sl":97},{"sl":98},{"sl":101},{"sl":102},{"sl":103},{"sl":109}]},"test_38":{"methods":[{"sl":82}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":96},{"sl":97},{"sl":98},{"sl":101},{"sl":102},{"sl":103},{"sl":109}]},"test_79":{"methods":[{"sl":82}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":109}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [342], [342], [342], [342], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [330, 342, 38, 79], [], [], [], [], [], [], [], [], [], [], [], [], [], [330, 342, 38, 79], [342, 38, 79], [342, 38, 79], [79], [], [342, 38], [342, 38], [342, 38], [], [], [], [], [], [342, 38, 79], [], [330], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [313], [], [], [], [], [], [], [], [], [], [], [], [], [], [313], [313], [], [], [], [], []]