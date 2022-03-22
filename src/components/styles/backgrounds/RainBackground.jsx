
/*credit Aaron Rickle*/

/*
.rain-background  {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  margin: 0;
  background: linear-gradient(to bottom, #202020, #111119);
  z-index: 0;

  .rain {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

    .back-row {
      z-index: 1;
      bottom: 60px;
      opacity: 0.5;
    }
  }

  .drop {
    position: absolute;
    bottom: 100%;
    width: 15px;
    height: 120px;
    pointer-events: none;
    animation: drop 0.5s linear infinite;
  }

  .stem {
    width: 1px;
    height: 60%;
    margin-left: 7px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25));
    animation: stem 0.5s linear infinite;
  }

  .splat {
    width: 15px;
    height: 10px;
    border-top: 2px dotted rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    opacity: 1;
    transform: scale(0);
    animation: splat 0.5s linear infinite;
  }
}


@keyframes drop {
  0% {
    transform: translateY(0vh);
  }
  75% {
    transform: translateY(90vh);
  }
  100% {
    transform: translateY(90vh);
  }
}

@keyframes stem {
  0% {
    opacity: 1;
  }
  65% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes splat {
  0% {
    opacity: 1;
    transform: scale(0);
  }
  80% {
    opacity: 1;
    transform: scale(0);
  }
  90% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}
*/

// credit Aaron Rickle
/*
import React from 'react'
import "./scss/background.scss"

export default class RainBackground extends React.Component {

    createRain(){
        let rain = {front: [], back: []};

        for(let i = 0; i < 96;){
            let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
            let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
            i += randoFiver;

            const AnimationStyle = {
                animationDelay: "0." + randoHundo + "s",
                animationDuration: "0.5" + randoHundo + "s"
            };

            const frontDropStyle = {
                left: i + "%",
                bottom: (randoFiver + randoFiver - 1 + 100) + "%",
                animationDelay: "0." + randoHundo + "s",
                animationDuration: "0.5" + randoHundo + "s"
            };

            const backDropStyle = {
                right: i + "%",
                bottom: (randoFiver + randoFiver - 1 + 100) + "%",
                animationDelay: "0." + randoHundo + "s",
                animationDuration: "0.5" + randoHundo + "s"
            };

            rain.front.push(
                <div className="drop" key={i * 2} style={frontDropStyle}>
                    <div className="stem" style={AnimationStyle}></div>
                    <div className="splat" style={AnimationStyle}></div>
                </div>
            );

            rain.back.push(
                <div className="drop" key={(i * 2) + 1} style={backDropStyle}>
                    <div className="stem" style={AnimationStyle}></div>
                    <div className="splat" style={AnimationStyle}></div>
                </div>
            );
        }

        return rain;
    }

    render(){
        let rain = this.createRain();
        return (
            <div className="rain-background">
                <div className="back-row-toggle splat-toggle">
                    <div className="rain front-row">
                        {rain.front}
                    </div>
                    <div className="rain back-row">
                        {rain.back}
                    </div>
                </div>
            </div>
        )
    }
}
*/