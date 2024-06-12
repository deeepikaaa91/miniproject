import React, { useState } from "react";

function SnakeLadder() {
  const [dice, setDice] = useState("");
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);
  const [turn, setTurn] = useState(1);
  const throwDice = () => {
    const diceValue = Math.ceil(Math.random() * 6);
    setDice(diceValue);
    if (turn == 1) {
      if (diceValue + p1 <= 30) {
        setP1(diceValue + p1);
      }
      setTurn(2);
    } else if (turn == 2) {
      if (diceValue + p2 <= 30) {
        setP2(diceValue + p2);
      }
      setTurn(1);
    }
  };

if(p1==30 ){
  alert("p1 is winner")
}
if(p2==30) {
  alert("p2 is winner ")
}

  return (
    <div className="flex items-center h-[100vh] justify-center">
      {p1 == 3
        ? setTimeout(() => {
            setP1(22);
          }, 500)
        : null}
      {p2 == 3
        ? setTimeout(() => {
            setP2(22);
          }, 500)
        : null}
      {p2 == 5
        ? setTimeout(() => {
            setP2(8);
          }, 500)
        : null}
      {p1 == 5
        ? setTimeout(() => {
            setP1(8);
          }, 500)
        : null}
      {p1 == 11
        ? setTimeout(() => {
            setP1(26);
          }, 500)
        : null}
      {p2 == 11
        ? setTimeout(() => {
            setP2(26);
          }, 500)
        : null}
      {p1 == 20
        ? setTimeout(() => {
            setP1(29);
          }, 500)
        : null}
      {p2 == 20
        ? setTimeout(() => {
            setP2(29);
          }, 500)
        : null}
      {p1 == 27
        ? setTimeout(() => {
            setP1(1);
          }, 500)
        : null}
      {p2 == 27
        ? setTimeout(() => {
            setP2(1);
          }, 500)
        : null}
      {p2 == 21
        ? setTimeout(() => {
            setP2(9);
          }, 500)
        : null}
      {p1 == 21
        ? setTimeout(() => {
            setP1(9);
          }, 500)
        : null}
      {p1 == 17
        ? setTimeout(() => {
            setP1(4);
          }, 500)
        : null}
      {p2 == 17
        ? setTimeout(() => {
            setP2(4);
          }, 500)
        : null}
      {p2 == 19
        ? setTimeout(() => {
            setP2(7);
          }, 500)
        : null}
      {p1 == 19
        ? setTimeout(() => {
            setP1(7);
          }, 500)
        : null}

      <div className="w-[600px] flex flex-wrap h-[500px] bg-cover pl-3 pt-[4px] pb-1 bg-[url(https://media.licdn.com/dms/image/C4D12AQFPcUrsF97dTw/article-cover_image-shrink_600_2000/0/1543747519723?e=2147483647&v=beta&t=-12hmqMWefu4vwmnTJxLrgchhwBwqX4oUpUleOzVD0E)]">
        <div
          className={
            (p1 == 25) & (p2 == 25)
              ? "div3"
              : p1 == 25
              ? "div1"
              : p2 == 25
              ? "div2"
              : "div"
          }
        >
          25
        </div>
        <div
          className={
            (p1 == 26) & (p2 == 26)
              ? "div3"
              : p1 == 26
              ? "div1"
              : p2 == 26
              ? "div2"
              : "div"
          }
        >
          26
        </div>
        <div
          className={
            (p1 == 27) & (p2 == 27)
              ? "div3"
              : p1 == 27
              ? "div1"
              : p2 == 27
              ? "div2"
              : "div"
          }
        >
          27
        </div>
        <div
          className={
            (p1 == 28) & (p2 == 28)
              ? "div3"
              : p1 == 28
              ? "div1"
              : p2 == 28
              ? "div2"
              : "div"
          }
        >
          28
        </div>
        <div
          className={
            (p1 == 29) & (p2 == 29)
              ? "div3"
              : p1 == 29
              ? "div1"
              : p2 == 29
              ? "div2"
              : "div"
          }
        >
          29
        </div>
        <div
          className={
            (p1 == 30) & (p2 == 30)
              ? "div3"
              : p1 == 30
              ? "div1"
              : p2 == 30
              ? "div2"
              : "div"
          }
        >
          30
        </div>
        <div
          className={
            (p1 == 24) & (p2 == 24)
              ? "div3"
              : p1 == 24
              ? "div1"
              : p2 == 24
              ? "div2"
              : "div"
          }
        >
          24
        </div>
        <div
          className={
            (p1 == 23) & (p2 == 23)
              ? "div3"
              : p1 == 23
              ? "div1"
              : p2 == 23
              ? "div2"
              : "div"
          }
        >
          23
        </div>
        <div
          className={
            (p1 == 22) & (p2 == 22)
              ? "div3"
              : p1 == 22
              ? "div1"
              : p2 == 22
              ? "div2"
              : "div"
          }
        >
          22
        </div>
        <div
          className={
            (p1 == 21) & (p2 == 21)
              ? "div3"
              : p1 == 21
              ? "div1"
              : p2 == 21
              ? "div2"
              : "div"
          }
        >
          21
        </div>
        <div
          className={
            (p1 == 20) & (p2 == 20)
              ? "div3"
              : p1 == 20
              ? "div1"
              : p2 == 20
              ? "div2"
              : "div"
          }
        >
          20
        </div>
        <div
          className={
            (p1 == 19) & (p2 == 19)
              ? "div3"
              : p1 == 19
              ? "div1"
              : p2 == 19
              ? "div2"
              : "div"
          }
        >
          19
        </div>
        <div
          className={
            (p1 == 13) & (p2 == 13)
              ? "div3"
              : p1 == 13
              ? "div1"
              : p2 == 13
              ? "div2"
              : "div"
          }
        >
          13
        </div>
        <div
          className={
            (p1 == 14) & (p2 == 14)
              ? "div3"
              : p1 == 14
              ? "div1"
              : p2 == 14
              ? "div2"
              : "div"
          }
        >
          14
        </div>
        <div
          className={
            (p1 == 15) & (p2 == 15)
              ? "div3"
              : p1 == 15
              ? "div1"
              : p2 == 15
              ? "div2"
              : "div"
          }
        >
          15
        </div>
        <div
          className={
            (p1 == 16) & (p2 == 16)
              ? "div3"
              : p1 == 16
              ? "div1"
              : p2 == 16
              ? "div2"
              : "div"
          }
        >
          16
        </div>
        <div
          className={
            (p1 == 17) & (p2 == 17)
              ? "div3"
              : p1 == 17
              ? "div1"
              : p2 == 17
              ? "div2"
              : "div"
          }
        >
          17
        </div>
        <div
          className={
            (p1 == 18) & (p2 == 18)
              ? "div3"
              : p1 == 18
              ? "div1"
              : p2 == 18
              ? "div2"
              : "div"
          }
        >
          18
        </div>
        <div
          className={
            (p1 == 12) & (p2 == 12)
              ? "div3"
              : p1 == 12
              ? "div1"
              : p2 == 12
              ? "div2"
              : "div"
          }
        >
          12
        </div>
        <div
          className={
            (p1 == 11) & (p2 == 11)
              ? "div3"
              : p1 == 11
              ? "div1"
              : p2 == 11
              ? "div2"
              : "div"
          }
        >
          11
        </div>
        <div
          className={
            (p1 == 10) & (p2 == 10)
              ? "div3"
              : p1 == 10
              ? "div1"
              : p2 == 10
              ? "div2"
              : "div"
          }
        >
          10
        </div>
        <div
          className={
            (p1 == 9) & (p2 == 9)
              ? "div3"
              : p1 == 9
              ? "div1"
              : p2 == 9
              ? "div2"
              : "div"
          }
        >
          9
        </div>
        <div
          className={
            (p1 == 8) & (p2 == 8)
              ? "div3"
              : p1 == 8
              ? "div1"
              : p2 == 8
              ? "div2"
              : "div"
          }
        >
          8
        </div>
        <div
          className={
            (p1 == 7) & (p2 == 7)
              ? "div3"
              : p1 == 7
              ? "div1"
              : p2 == 7
              ? "div2"
              : "div"
          }
        >
          7
        </div>
        <div
          className={
            (p1 == 1) & (p2 == 1)
              ? "div3"
              : p1 == 1
              ? "div1"
              : p2 == 1
              ? "div2"
              : "div"
          }
        >
          1
        </div>
        <div
          className={
            (p1 == 2) & (p2 == 2)
              ? "div3"
              : p1 == 2
              ? "div1"
              : p2 == 2
              ? "div2"
              : "div"
          }
        >
          2
        </div>
        <div
          className={
            (p1 == 3) & (p2 == 3)
              ? "div3"
              : p1 == 3
              ? "div1"
              : p2 == 3
              ? "div2"
              : "div"
          }
        >
          3
        </div>
        <div
          className={
            (p1 == 4) & (p2 == 4)
              ? "div3"
              : p1 == 4
              ? "div1"
              : p2 == 4
              ? "div2"
              : "div"
          }
        >
          4
        </div>
        <div
          className={
            (p1 == 5) & (p2 == 5)
              ? "div3"
              : p1 == 5
              ? "div1"
              : p2 == 5
              ? "div2"
              : "div"
          }
        >
          5
        </div>
        <div
          className={
            (p1 == 6) & (p2 == 6)
              ? "div3"
              : p1 == 6
              ? "div1"
              : p2 == 6
              ? "div2"
              : "div"
          }
        >
          6
        </div>
      </div>
      {p1}
      <div
        onClick={() => throwDice()}
        className="w-[100px] h-[100px] bg-gray-400"
      >
        {dice}
      </div>
      {p2}
    </div>
  );
}

export default SnakeLadder;
