var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":53,"id":2979,"methods":[{"el":31,"sc":2,"sl":28},{"el":35,"sc":2,"sl":33},{"el":39,"sc":2,"sl":37},{"el":51,"sc":2,"sl":44}],"name":"MessageType","sl":21}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_103":{"methods":[{"sl":33},{"sl":37}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":34},{"sl":38}]},"test_116":{"methods":[{"sl":44}],"name":"Verify that SecurityProfile.getByValue returns DENM for 1","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":47}]},"test_127":{"methods":[{"sl":33},{"sl":37}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":34},{"sl":38}]},"test_155":{"methods":[{"sl":33},{"sl":37}],"name":"Verify that CAM has value 2 and security profile","pass":true,"statements":[{"sl":34},{"sl":38}]},"test_178":{"methods":[{"sl":33},{"sl":37}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":34},{"sl":38}]},"test_192":{"methods":[{"sl":33},{"sl":37}],"name":"Verify that DENM has value 1 and security profile","pass":true,"statements":[{"sl":34},{"sl":38}]},"test_209":{"methods":[{"sl":44}],"name":"Verify that SecurityProfile.getByValue returns CAM for 2","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":47}]},"test_358":{"methods":[{"sl":33},{"sl":37}],"name":"Verify that serializeDataToBeSignedInSecuredMessage serializes according to signature verification it ETSI specifification","pass":true,"statements":[{"sl":34},{"sl":38}]},"test_36":{"methods":[{"sl":33},{"sl":37}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":34},{"sl":38}]},"test_392":{"methods":[{"sl":33},{"sl":37}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":34},{"sl":38}]},"test_92":{"methods":[{"sl":33},{"sl":37}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":34},{"sl":38}]},"test_94":{"methods":[{"sl":33},{"sl":37}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":34},{"sl":38}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [36, 192, 127, 392, 178, 103, 94, 155, 358, 92], [36, 192, 127, 392, 178, 103, 94, 155, 358, 92], [], [], [36, 192, 127, 392, 178, 103, 94, 155, 358, 92], [36, 192, 127, 392, 178, 103, 94, 155, 358, 92], [], [], [], [], [], [116, 209], [116, 209], [116, 209], [116, 209], [], [], [], [], [], []]