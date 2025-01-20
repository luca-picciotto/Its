import {useEffect, useState} from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        },1000);

        return () => clearInterval(interval);
    },[]);

    return (
        <p>Elapsed time: {seconds} seconds</p>
    )
}

// class Timer extends React.Component<unknown, { seconds: number }> {
//     private intervalId: number | null = null;

//     constructor(props: unknown) {
//         super(props);
//         this.state = { seconds: 0 };
//     }

//     componentDidMount() {
//         this.intervalId = window.setInterval(this.tick, 1000);
//     }

//     componentWillUnmount() {
//         if (this.intervalId) {
//             clearInterval(this.intervalId);
//         }
//     }

//     tick = () => {
//         this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Timer (Class): {this.state.seconds} secondi</h1>
//             </div>
//         );
//     }
// }

export default Timer;