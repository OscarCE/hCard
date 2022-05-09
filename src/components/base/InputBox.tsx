import { Observer } from 'mobx-react-lite';
import React from 'react';
import Store from '../../Store';

interface IInputBoxProps {
  id: string;
  label: string;
  type: React.HTMLInputTypeAttribute;
  field: string;
  store: Store;
  maxLength?: number;
}

export default function InputBox({ id, label, type, store, field, maxLength }: IInputBoxProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.onChange(field, e);
  };
  return (
    <div className="inputbox mt-4 basis-1/2 odd:pr-2.5 even:pl-2.5">
      <div className="label mb-1.5 uppercase text-dark-cyan text-xs">
        <label htmlFor={id}>{label}</label>
      </div>
      <div className="control">
        <Observer>
          {() => (
            <input
              className="w-full h-9 border rounded border-[#c3c3c3] px-2.5 focus-visible:outline-none"
              id={id}
              type={type}
              value={store[field]}
              onChange={onChange}
              maxLength={maxLength}
            />
          )}
        </Observer>
      </div>
    </div>
  );
}
