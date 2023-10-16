import JsxArraySample from "./jsxSample/JsxArraySample";
import JsxIfElse from "./jsxSample/JsxIfElse";
import JsxIntro from "./jsxSample/JsxIntro";
import JsxObjectSample from "./jsxSample/JsxObjectSample";
import ObjectArraySample from "./jsxSample/ObjectArraySample";
import StateArrayRandomAdd from "./stateSample/StateArrayRandomAdd";
import StateCitiesArray from "./stateSample/StateCitiesArray";
import StateNameArray from "./stateSample/StateNameArray";
import StateProductsData from "./stateSample/StateProductsData";
import StateRandomColor from "./stateSample/StateRandomColor";
import StateSample from "./stateSample/StateSample";

function App() {
  return (<>
    <div>
      {/*   JSX SAMPLE    */}
      {/*<JsxArraySample />*/}
      {/*<JsxIfElse />*/}
      {/*<JsxIntro />*/}
      {/*<ObjectArraySample />*/}
      {/*<JsxObjectSample />*/}

      {/*   STATE SAMPLE    */}
      {/*<StateSample />*/}
      {/*<StateCitiesArray />*/}
      {/*<StateArrayRandomAdd />*/}
      {/*<StateNameArray />*/}
      {/*<StateProductsData />*/}
      <StateRandomColor />
    </div>
  </>
  );
}

export default App;
