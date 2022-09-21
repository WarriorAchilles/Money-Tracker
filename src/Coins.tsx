import React, { useEffect, useState } from 'react';
import GoldCoin from './assets/GoldCoin.png';
import SilverCoin from './assets/SilverCoin.png';
import BronzeCoin from './assets/BronzeCoin.png';

interface propTypes {
    coinType: string,
    moneyEarned: number,
}

const Coins = (props: propTypes) => {

    const [classNames, setClassNames] = useState('');
    const [moneyAtLastCoin, setMoneyAtLastCoin] = useState(0);

    function dropCoin(moneyEarned: number) {
        setMoneyAtLastCoin(moneyEarned);
        setClassNames('');
        setTimeout(() => setClassNames('animated'), 100);
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
            if (changeInMoney >= 0.1) {
                dropCoin(props.moneyEarned);
            }
        }
    }
    }, [props.moneyEarned])

    let coin: JSX.Element = <img src={BronzeCoin} className={'bronze-coin ' + classNames} alt="a bronze coin" />;
    if (props.coinType === 'gold') {
        coin = <img src={GoldCoin} className={'gold-coin ' + classNames} alt="a gold coin" />;
    } else if (props.coinType === 'silver') {
        coin = <img src={SilverCoin} className={'silver-coin ' + classNames} alt="a silver coin" />;
    }

    return coin;
}

export default Coins;