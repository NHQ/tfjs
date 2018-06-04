let tf = require('@tensorflow/tfjs')

function twist(tensor, delay, feedback_distribution){
  
}



let a = tf.tensor([[1,2,3,4],[5,6,7,8]])
let b = tf.tensor([.5, .5,], [2,1])
a.print()
b.print()
console.log(a.transpose().shape)
a.transpose().matMul(b).print()
