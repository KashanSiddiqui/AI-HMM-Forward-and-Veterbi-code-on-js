var HiddenMarkovModel = require('hidden-markov-model');
 
var HMM = HiddenMarkovModel();
 
HMM.setInitialStateVector([0.6, 0.2,0.2]); // 1. pass, 2. fail,3.position 
 
HMM.setTransitionMatrix([
    // pass,fail,position
    [0.4,0.2,0.4], // pass
    [0.7,0.2,0.1], //fail
    [0.4,0.1,0.5]  // position 
]);
 
HMM.setEmissionMatrix([
    // 1 workHard, 2 Avg, 3 BelowAvg 
    [0.3, 0.5, 0.2], // pass
    [0.2, 0.3, 0.5], //fail
    [0.6, 0.3, 0.1]  // position 
]);
 
  /* What is the probability that the Hidden Markov Model is able to
   * generate the observed sequence of pass workhard Avg BelowAvg?
   */
  var alpha = [];
  var result = HMM.forward([0,1,2], alpha); // pass workhard Avg BelowAvg 
  console.log("Final Probability",result); // 0.027824 
  console.log("Alpha Array");
  console.log(alpha);
  