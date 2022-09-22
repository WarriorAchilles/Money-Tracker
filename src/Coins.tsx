import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import GoldCoin from './assets/GoldCoin.png';
import SilverCoin from './assets/SilverCoin.png';
import BronzeCoin from './assets/BronzeCoin.png';
import CoinDropSfx0 from './assets/coin-drop-0.mp3';
import CoinDropSfx1 from './assets/coin-drop-1.mp3';
import CoinDropSfx2 from './assets/coin-drop-2.mp3';
import CoinDropSfx3 from './assets/coin-drop-3.mp3';

interface propTypes {
    coinType: string,
    moneyEarned: number,
    soundEnabled: boolean
}

const Coins = (props: propTypes) => {

    const [classNames, setClassNames] = useState('');
    const [moneyAtLastCoin, setMoneyAtLastCoin] = useState(0);
    const [play0] = useSound(CoinDropSfx0, {volume: 1, interrupt: true, soundEnabled: props.soundEnabled});
    const [play1] = useSound(CoinDropSfx1, {volume: 1, interrupt: true, soundEnabled: props.soundEnabled});
    const [play2] = useSound(CoinDropSfx2, {volume: 1, interrupt: true, soundEnabled: props.soundEnabled});
    const [play3] = useSound(CoinDropSfx3, {volume: 1, interrupt: true, soundEnabled: props.soundEnabled});

    function dropCoin(moneyEarned: number) {
        setMoneyAtLastCoin(moneyEarned);
        setClassNames('');
        setTimeout(() => {
            setClassNames('animated');
            let rand: number = Math.floor(Math.random() * 4);
            switch (rand) {
                case 0: 
                    play0();
                    break;
                case 1: 
                    play1();
                    break;
                case 2:
                    play2();
                    break;
                case 3:
                    play3();
                    break;
            }
        }, 50);
    }

    useEffect(() => {
        let changeInMoney: number = props.moneyEarned - moneyAtLastCoin;

        if (props.moneyEarned === 0) {
            setMoneyAtLastCoin(0);
        } else {
        if (props.coinType === 'gold') {
            if (changeInMoney >= 1) {
                dropCoin(Math.floor(props.moneyEarned));
            }
        } else if (props.coinType ==='silver') {
            if (changeInMoney >= 0.5) {
                dropCoin(Math.round(props.moneyEarned*2)/2);
            }
        } else {
            if (changeInMoney >= 0.01) {
                dropCoin(props.moneyEarned);
            }
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.moneyEarned])

    let coin: JSX.Element = <img src={BronzeCoin} className={'coin ' + classNames} alt="a bronze coin" />;
    if (props.coinType === 'gold') {
        coin = <img src={GoldCoin} className={'coin ' + classNames} alt="a gold coin" />;
    } else if (props.coinType === 'silver') {
        coin = <img src={SilverCoin} className={'coin ' + classNames} alt="a silver coin" />;
    }

    return coin;
}

export default Coins;