var tf = require('@tensorflow/tfjs')

module.exports = function(decode_units, encode_units, input_shape, activation){

  activation = activation || 'sigmoid'

  var input = tf.input([input shape])

  var z = decode_units.pop() // tail value is size of abstract components (aka latent variables)
  var size = z
  z = [z,z] // two tensors for mean and stdev 

  var params = {
    activation: activation,
    usebias: false,
    kernalinitializer: tf.initializers.randomuniform({
      maxval: 1,
      minval: -1
    })
  }

  var decoder = decode_units.reduce((e,i,a) => {
    let p Object.assign({}, params)
    p.units = e
    return tf.layers.dense(params).apply(a)
  }, input)
  
  z = z.map(e => {
    let p = Object.assign({}, params)
    return tf.layers.dense(params).apply(decoder)
  })

  var z_mean = z[0]
  var z_dev = z[1]

  function sample (mean, dev){
      let norm = tf.randomNormal(z_mean.shape[0], size)
  }

  

  var encoder = encode_units.reduce((e,i,a) => {
    let p Object.assign({}, params)
    p.units = e
    return tf.layers.dense(params).apply(a)
  }, z)
  
  var model = tf.sequential({layers: decode_units.concat(encode_units)})

  return model

}
