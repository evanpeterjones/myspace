import './App.css';
import 'aframe';

function RainDrop (props) {
    return (
        <a-sphere position={props.position} radius=".1" color="#8CDFE8"></a-sphere>
    );
}

function random(x) {
    return Math.random() * x;
}

function App() {
    let raindrops = [];

    for (var i = 0; i < 400; i++) {
        raindrops.push(<RainDrop position={(random(40)-20).toString() + " " +
                                           (random(40)-20).toString() +  " " + 
                                           (random(40)-20).toString()}/>);
    }

    return (
        <div className="App">
            <a-scene>
        <a-asset id="drop" src="raindrop.obj"></a-asset>
            <a-asset id="rain" src="rain.obj"></a-asset>
            <a-obj-model src="#rain" position="-2 -10 -5"></a-obj-model>
            {raindrops}
        </a-scene>
            </div>
    );
}

export default App;
