import ReactDOM from 'react-dom/client';

function App() {
  const sendMsg = () => {
    const lightnessStep = 10;
    const peakLightness = 50;
    const peakChroma = 11;
    const hue = 260;
    console.log('lightnessStep', lightnessStep);
    console.log('peakLightness', peakLightness);
    console.log('peakChroma', peakChroma);
    console.log('hue', hue);
    parent.postMessage(
      {
        pluginMessage: {
          type: 'create-palette',
          lightnessStep,
          peakLightness,
          peakChroma,
          hue,
        },
      },
      '*'
    );
  };

  return (
    <>
      <h2>OK-Palette</h2>
      <p>
        Create a UI palette using the perceptually uniform color space, OKLCH.
      </p>

      <fieldset>
        <legend>Lightness Step</legend>
        <div>
          <input
            type="radio"
            id="lightness-step-1"
            name="lightness-step"
            value="1"
          />
          <label htmlFor="lightness-step-1">1</label>
        </div>
        <div>
          <input
            type="radio"
            id="lightness-step-2"
            name="lightness-step"
            value="2"
          />
          <label htmlFor="lightness-step-2">2</label>
        </div>
        <div>
          <input
            type="radio"
            id="lightness-step-5"
            name="lightness-step"
            value="5"
          />
          <label htmlFor="lightness-step-5">5</label>
        </div>
        <div>
          <input
            type="radio"
            id="lightness-step-10"
            name="lightness-step"
            value="10"
            checked
          />
          <label htmlFor="lightness-step-10">10</label>
        </div>
      </fieldset>

      <div>
        <label htmlFor="peak-lightness">Peak Lightness</label>
        <input
          id="peak-lightness"
          type="number"
          min="0"
          max="100"
          step="1"
          value="50"
        />
      </div>

      <div>
        <label htmlFor="peak-chroma">Peak Chroma</label>
        <input
          id="peak-chroma"
          type="number"
          min="0"
          max="40"
          step="0.1"
          value="11"
        />
      </div>

      <div>
        <label htmlFor="hue">Hue</label>
        <input id="hue" type="number" min="0" max="360" step="1" value="260" />
      </div>

      <button id="create" onClick={sendMsg}>
        Create
      </button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
