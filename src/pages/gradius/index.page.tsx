<<<<<<< HEAD
<<<<<<< HEAD
//testCode//ここに書くのはyosuliです。

import type { EventModel, GameModel } from '$/commonTypesWithClient/models';
import { useState } from 'react';
import { apiClient } from 'src/utils/apiClient';

const Home = () => {
  const [hoge, setHoge] = useState<{ games: GameModel[]; event: EventModel }>();

  const fetchGradius = async () => {
    const newHoge = (await apiClient.gradius.post()).body;
    console.log(newHoge);
    setHoge(newHoge);
  };
  // useEffect(() => {
  //   const cancelId = setInterval(fetchGradius, 100);
  //   return () => {
  //     clearInterval(cancelId);
  //   };
  // });
  const onclick = async () => {
    await apiClient.gradius.game.post({ body: 1 });
    fetchGradius();
  };

  const onR = () => {
    document.getElementsByTagName('html')[0].oncontextmenu = function () {
      return false;
    };
    //
  };
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor:
          hoge === null || hoge === undefined
            ? '#080'
            : hoge.games[0].xyz[1] % 2 === -1
            ? '#800'
            : '#088',
        textAlign: 'center',
      }}
      key={'a'}
      onClick={() => onclick()}
      onContextMenu={() => onR()}
    >
      {hoge?.games[0].hp}
    </div>
=======
import { useAtom } from 'jotai';
import Konva from 'konva';
import { useCallback, useEffect, useState } from 'react';
import { Circle, Layer, Rect, Stage } from 'react-konva';
import { userAtom } from 'src/atoms/user';
import { Loading } from 'src/components/Loading/Loading';
=======
//testCode//ここに書くのはyosuliです。

import type { EventModel, GameModel } from '$/commonTypesWithClient/models';
import { useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';

>>>>>>> parent of ab96eed (フロント)
const Home = () => {
  const [hoge, setHoge] = useState<{ games: GameModel[]; event: EventModel }>();

  const fetchGradius = async () => {
    const newHoge = (await apiClient.gradius.post()).body;
    console.log(newHoge);
    setHoge(newHoge);
  };
  useEffect(() => {
    const cancelId = setInterval(fetchGradius, 1000);
    return () => {
      clearInterval(cancelId);
    };
  });
  const onclick = async () => {
    await apiClient.gradius.game.post({ body: 1 });
    fetchGradius();
  };

  const onR = async () => {
    document.getElementsByTagName('html')[0].oncontextmenu = () => false;
    await apiClient.gradius.game.post({ body: 6 });
  };
  return (
<<<<<<< HEAD
    <>
      <div
        className="container"
        onKeyDown={keydown}
        style={{ border: 'solid' }}
        onClick={click}
        tabIndex={0}
      >
        <div id="key">X:{playerX}</div>
        <div id="key">Y:{playerY}</div>
        <div id="key" />
      </div>
      <Stage width={800} height={600}>
        <Layer>
          {board.map((row, y) =>
            row.map(
              (color, x) =>
                color !== 0 && (
                  <Rect
                    key={`${x}-${y}`}
                    x={x * 100 + 70}
                    y={y * 100}
                    width={100}
                    height={100}
                    fill="black"
                  />
                )
            )
          )}
          {enemies.map((enemy, index) => (
            <Circle key={index} x={enemy.x * 100} y={enemy.y * 100 + 50} radius={20} fill="green" />
          ))}
          {bullet.map((bullet, index) => (
            <Circle
              key={index}
              x={bullet.x * 100 + 50}
              y={bullet.y * 100 + 50}
              radius={20}
              fill="red"
            />
          ))}
        </Layer>
      </Stage>
    </>
>>>>>>> parent of 67edd52 (修正)
=======
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor:
          hoge === null || hoge === undefined
            ? '#080'
            : hoge.games[0].xyz[1] % 2 === -1
            ? '#800'
            : '#088',
        textAlign: 'center',
      }}
      key={'a'}
      onClick={() => onclick()}
      onContextMenu={() => onR()}
    >
      {hoge?.games[0].hp}
    </div>
>>>>>>> parent of ab96eed (フロント)
  );
};

export default Home;