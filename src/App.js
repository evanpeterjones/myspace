import { useState, useEffect } from 'react';
import './App.css';
import 'aframe';

function RainDrop (start) {
    const [position, setPosition] = useState(start);

    useEffect(() => {
        setTimeout(() => {
            setPosition({x: position.x, y: position.y-2, z: position.z});
        }, 1);
    });

    return (
        <a-sphere 
            position={position.x.toString() + " " +
                      position.y.toString() +  " " +
                      position.z.toString()}
            radius=".1"
            color="#8CDFE8"></a-sphere>
    );
}

function random(x) {
    return Math.random() * x;
}

function App() {
    let raindrops = [];

    for (var i = 0; i < 400; i++) {
        
        let startPosition = { 
            x: (random(40)-20).toString(),
            y: (random(40)-20).toString(),
            z: (random(40)-20).toString()
        };

        raindrops.push(new RainDrop(startPosition));
    }

    return (
        <div className="App">
            <a-scene>
                {raindrops}
            </a-scene>
        </div>
    );
}

export default App;
