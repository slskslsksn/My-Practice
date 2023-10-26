import { useEffect, useState } from 'react';

const CoinTracker = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [exchange, setExchange] = useState('');
  const [selected, setSelected] = useState(-1);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers').then((response) =>
      response.json().then((json) => {
        setCoins(json);
        setLoading(false);
      })
    );
  }, []);

  useEffect(() => {
    const price = selected > -1 ? coins[selected].quotes.USD.price : 1;
    setExchange(money / price);
  }, [coins, money, selected]);
  return (
    <div>
      <h1>The Coins!! {loading ? '' : `(${coins.length})`}</h1>

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={(event) => setSelected(+event.target.value)}>
            <option value="-1">Select coin</option>
            {coins.map((coin, idx) => (
              <option key={coin.id} value={idx}>
                {coin.name} ({coin.symbol}): ${+coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <div>
            <input
              type="number"
              placeholder="The money you have"
              onChange={(event) => {
                let inputMoney = +event.target.value;
                if (inputMoney < 0) {
                  inputMoney = 0;
                  event.target.value = 0;
                }
                setMoney(inputMoney);
              }}
            />
            <span>
              → {exchange} {selected > -1 ? coins[selected].symbol : ''}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinTracker;
