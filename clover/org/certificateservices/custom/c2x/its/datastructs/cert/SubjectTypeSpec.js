var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":59,"id":3488,"methods":[{"el":42,"sc":2,"sl":29},{"el":57,"sc":2,"sl":44}],"name":"SubjectTypeSpec","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_15":{"methods":[{"sl":44}],"name":"Verify that SubjectType.getByValue returns authorization_ticket for 1","pass":true,"statements":[{"sl":47}]},"test_156":{"methods":[{"sl":29}],"name":"Verify that enrollment_credential has bytevalue 0","pass":true,"statements":[{"sl":32},{"sl":33}]},"test_24":{"methods":[{"sl":29}],"name":"Verify that authorization_ticket has bytevalue 1","pass":true,"statements":[{"sl":32},{"sl":33}]},"test_240":{"methods":[{"sl":44}],"name":"Verify that SubjectType.getByValue returns enrollment_authority for 3","pass":true,"statements":[{"sl":47}]},"test_249":{"methods":[{"sl":29}],"name":"Verify that root_ca has bytevalue 4","pass":true,"statements":[{"sl":32},{"sl":33}]},"test_255":{"methods":[{"sl":29}],"name":"Verify that crl_signer has bytevalue 5","pass":true,"statements":[{"sl":32},{"sl":33}]},"test_280":{"methods":[{"sl":44}],"name":"Verify that SubjectType.getByValue returns enrollment_credential for 0","pass":true,"statements":[{"sl":47}]},"test_29":{"methods":[{"sl":44}],"name":"Verify that SubjectType.getByValue returns root_ca for 4","pass":true,"statements":[{"sl":47}]},"test_291":{"methods":[{"sl":29}],"name":"Verify that authorization_authority has bytevalue 2","pass":true,"statements":[{"sl":32},{"sl":33}]},"test_309":{"methods":[{"sl":44}],"name":"Verify that SubjectType.getByValue returns crl_signer for 5","pass":true,"statements":[{"sl":47}]},"test_325":{"methods":[{"sl":29}],"name":"Verify that enrollment_authority has bytevalue 3","pass":true,"statements":[{"sl":32},{"sl":33}]},"test_332":{"methods":[{"sl":44}],"name":"Verify that SubjectType.getByValue returns authorization_authority for 2","pass":true,"statements":[{"sl":47}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [249, 156, 291, 325, 24, 255], [], [], [249, 156, 291, 325, 24, 255], [249, 156, 291, 325, 24, 255], [], [], [], [], [], [], [], [], [], [], [309, 240, 280, 15, 29, 332], [], [], [309, 240, 280, 15, 29, 332], [], [], [], [], [], [], [], [], [], [], [], []]