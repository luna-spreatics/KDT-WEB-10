import Faq from './components/Faq';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import UseReducerEx from './components/UseReducerEx';
import Form from './components/react-hook-form/Form';

function App() {
  return (
    <div className="App" style={{ marginBottom: '500px' }}>
      <UseMemoEx />
      <hr />

      <UseCallbackEx />
      <hr />

      <UseCallbackEx2 postId={9} />
      <hr />

      <UseReducerEx />
      <hr />

      {/* custom hook */}
      <Faq />
      <hr />

      <Form />
    </div>
  );
}

export default App;
