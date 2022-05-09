import FormPanel from './components/composite/FormPanel';
import PreviewPanel from './components/composite/PreviewPanel';

export default function App() {
  return (
    <div className="cont font-MerriweatherSans-Regular flex flex-col lg:flex-row">
      <FormPanel />
      <PreviewPanel />
    </div>
  );
}
