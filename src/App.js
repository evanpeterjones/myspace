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

function random(x, y) {
    let newX = Math.random(x);

    if(typeof y !== "undefined") {
        return newX - y;
    }

    return newX;
}

function makeItRain(many=400) {
    let drops = [];
    
    for (var i = 0; i < many; i++) {
        let startPosition = { 
            x: (random(40)-20).toString(),
            y: (random(40)-20).toString(),
            z: (random(40)-20).toString()
        };

        drops.push(new RainDrop(startPosition));
    }

    return drops;
}

function App() {
    let raindrops = makeItRain();

    return (
        <div className="App">
            <a-scene>
                {raindrops}
            </a-scene>
        </div>
    );
}

export default App;
