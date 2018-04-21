var synaptic = require('synaptic'); // this line is not needed in the browser
var fs = require('fs');
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;

fs.readFile('xor_knowladge.json', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    var imported = Network.fromJSON(JSON.parse(data));
    function xor(a, b) {
        return imported.activate([b, a]) >= 0.99 ? 1 : 0;
    }
    console.log(xor(1, 0));

});
