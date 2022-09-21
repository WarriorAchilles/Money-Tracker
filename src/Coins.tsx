import React, { useEffect, useState } from 'react';
import GoldCoin from './assets/GoldCoin.png';
import SilverCoin from './assets/SilverCoin.png';
import BronzeCoin from './assets/BronzeCoin.png';

interface propTypes {
    coinType: string,
    seconds: number,
}

const Coins = (props: propTypes) => {

    const [classNames, setClassNames] = useState('');

    useEffect(() => {
        setClassNames('');
        setTimeout(() => setClassNames('animated'), 100);
    }, [props.seconds])

    let coin: JSX.Element = <img src={BronzeCoin} className={'bronze-coin ' + classNames} alt="a bronze coin" />;
    if (props.coinType === 'gold') {
        coin = <img src={GoldCoin} className={'gold-coin ' + classNames} alt="a gold coin" />;
    } else if (props.coinType === 'silver') {
        coin = <img src={SilverCoin} className={'silver-coin ' + classNames} alt="a silver coin" />;
    }

    return coin;
}

export default Coins;