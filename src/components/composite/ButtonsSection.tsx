import { useContext } from 'react';
import { StoreContext } from '../../Store';
import Button from '../base/Button';

export default function ButtonsSection() {
  const store = useContext(StoreContext);
  return (
    <div className="buttons mt-7 flex">
      <Button
        theme="secondary"
        caption="Upload Avatar"
        type="file"
        onClick={store.onFileUploadClick}
      />
      <Button
        theme="primary"
        caption="Create hCard"
        type="button"
      />
    </div>
  );
}
