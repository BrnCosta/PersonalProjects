import React, { useState, useEffect, ChangeEvent, ChangeEventHandler } from 'react'

import { AlgorithmArray, Algorithm } from '../../utils/interface/IAlgorithms';
import MergeSort from '../../utils/functions/MergeSort';
import BubbleSort from '../../utils/functions/BubbleSort';

import './styles.css';
import { resetNumbers } from '../../utils/functions/AuxFunctions';
import QuickSort from '../../utils/functions/QuickSort';

function Home() {
  const [numbers, setNumbers] = useState([0]);

  const [waitValue, setWaitValue] = useState(250);
  const [speedValue, setSpeedValue] = useState(250);
  const [sizeValue, setSizeValue] = useState(50);

  const [sorting, setSorting] = useState(false);

  const [selectedAlgo, setSelectedAlgo] = useState(AlgorithmArray[0]);
  const [algorithms, setAlgorithms] = useState(AlgorithmArray);

  useEffect(() => {
    setNumbers(resetNumbers(sizeValue));
  }, []);

  useEffect(() => {
    let numbers = resetNumbers(sizeValue);
    setNumbers(numbers);
  }, [sizeValue]);

  useEffect(() => {
    const selected = algorithms.find(item => item.class.includes('active'));

    if (selected != null)
      setSelectedAlgo(selected);

  }, [algorithms]);

  const setActive = (algo: Algorithm) => {
    const updateAlgos = algorithms.map((item) => {
      if (item.name === algo.name)
        item.class += ' active';
      else {
        item.class = item.class.replace(' active', '');
      }

      return item;
    });

    setAlgorithms(updateAlgos);
  }

  const runAlgorithm = async () => {
    setSorting(true);
    switch (selectedAlgo.name) {
      case 'Bubble sort':
        await BubbleSort(numbers, waitValue, setNumbers).finally(() => setSorting(false));;
        break;
      case 'Merge sort':
        await MergeSort(numbers, waitValue, setNumbers).finally(() => setSorting(false));
        break;
      case 'Quick sort':
        let array = [3, 8, 7, 10, 0, 23, 2, 1, 77, 7];
        array = await QuickSort(array);
        console.log(array);
        break;
      default:
        console.log('Not implemented');
        setSorting(false);
        break;
    }
  }

  const resetBar = () => {
    var result: number[] = resetNumbers(sizeValue);
    setNumbers(result);
  }

  const onChangeSpeed = (e: ChangeEvent<HTMLInputElement>) => {
    let speed = parseInt(e.target.value);
    let wait = 501 - speed;
    setWaitValue(wait);
    setSpeedValue(speed);
  }

  const onChangeSize = (e: ChangeEvent<HTMLInputElement>) => {
    setSizeValue(parseInt(e.target.value));
  }

  return (
    <div className='container'>
      <header>
        <h1>Sorting Visualizer</h1>
      </header>
      <main>
        <div className='algo-container'>
          {algorithms.map((algo, i) =>
            <button id={algo.name} className={algo.class} onClick={() => setActive(algo)} key={i}>
              <span className="material-symbols-outlined">{algo.icon}</span>
              <span className="algo-name">{algo.name}</span>
            </button>
          )}
        </div>
        <div className='info-container'>
          <h2>{selectedAlgo.name}</h2>

          <p>{selectedAlgo.p1}</p>

          <p>{selectedAlgo.p2}</p>

          <p>{selectedAlgo.p3}</p>

          <h2>Complexity</h2>
          <p>
            <span className="material-symbols-rounded">fiber_manual_record</span>
            Space complexity: {selectedAlgo.space_complexity}
          </p>
          <p>
            <span className="material-symbols-rounded">fiber_manual_record</span>
            Best case performance: {selectedAlgo.best_complexity}
          </p>
          <p>
            <span className="material-symbols-rounded">fiber_manual_record</span>
            Average case performance: {selectedAlgo.average_complexity}
          </p>
          <p>
            <span className="material-symbols-rounded">fiber_manual_record</span>
            Worst case performance: {selectedAlgo.worst_complexity}
          </p>
        </div>
        <div className='content'>
          <div className='map-container'>
            {numbers.map((number, i) => (
              <div key={i} className='number-container'>
                <div className='number'>{number}</div>
                <div id={i.toString()} style={{ width: `${3 * 100 / numbers.length}px`, height: `${number * 9}px` }} className='bar'></div>
              </div>
            ))}
          </div>
          <div className='drag-container'>
            <div className='drag-item'>
              <label>Sorting Speed</label>
              <input id='sorting-speed' type='range' min={1} max={500} value={speedValue} onChange={onChangeSpeed} disabled={sorting} />
            </div>
            <div className='drag-item'>
              <label>Array Size</label>
              <input id='array-size' type='range' min={10} max={100} value={sizeValue} onChange={onChangeSize} disabled={sorting} />
            </div>
          </div>
          <div className='buttons-container'>
            <button className='sort-button' onClick={runAlgorithm} disabled={sorting}>Sort!</button>
            <button className='reset-button' onClick={resetBar} disabled={sorting}>Reset</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;
