var tf = require('@tensorflow/tfjs')

module.exports = function(decode_units, encode_units, input_shape, activation){

  activation = activation || 'sigmoid'

  decode_units = decode_units.map((e,i,o) => {
    let params = {
      units: e,
      activation: 'sigmoid',
      useBias: false,
      kernalInitializer: tf.initializers.randomUniform({
        maxval: 1,
        minval: -1
      })
    }
    if(i==0) params.inputShape = input_shape
    if(i==o.length-1) params.name = 'Z_UNIT'
    return tf.layers.dense(params)
  })
  

  encode_units = encode_units.map(e => {
    return tf.layers.dense({
      units: e,
      activation: 'sigmoid',
      useBias: false,
      kernalInitializer: tf.initializers.randomUniform({
        maxval: 1,
        minval: -1
      })
    })
  })
  
  var model = tf.sequential({layers: decode_units.concat(encode_units)})

  return model

}
