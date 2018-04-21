var synaptic = require('synaptic'); // this line is not needed in the browser
var fs = require('fs');
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;

var inputLayer = new Layer(2);
var hiddenLayer = new Layer(3);
var outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

var myNetwork = new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
});

// train the network - learn XOR
var learningRate = .3;
for (var i = 0; i < 20000000; i++) {
    // 0,0 => 0
    myNetwork.activate([0, 0]);
    myNetwork.propagate(learningRate, [0]);

    // 0,1 => 1
    myNetwork.activate([0, 1]);
    myNetwork.propagate(learningRate, [1]);

    // 1,0 => 1
    myNetwork.activate([1, 0]);
    myNetwork.propagate(learningRate, [1]);

    // 1,1 => 0
    myNetwork.activate([1, 1]);
    myNetwork.propagate(learningRate, [0]);
}
fs.writeFile('xor_knowladge.json', JSON.stringify(myNetwork.toJSON()), (err) => {

    if (err) throw err;


    console.log('XOR network trained saved!');
});

