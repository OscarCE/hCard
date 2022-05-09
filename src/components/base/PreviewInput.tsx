import { Observer } from 'mobx-react-lite';
import React from 'react';
import Store from '../../Store';

interface IPreviewInputProps {
  label?: string;
  className?: string;
  hCardClass: string | string[];
  store: Store;
  field: string[];
  separator?: string;
}

export default function PreviewInput({ label, field, store, className, hCardClass, separator }: IPreviewInputProps) {
  return (
    <div className={`${className ?? ''} flex border-b overflow-hidden h-6`}>
      <span className="label uppercase text-[10px] leading-5 min-w-[87px] text-cello flex items-end">{label}</span>
      <div className="value-container value font-Merriweather-Regular text-base overflow-hidden text-ellipsis whitespace-nowrap">
        <Observer>
          {() => {
            return (
              <>
                {!Array.isArray(hCardClass) && (
                  <PreviewOne
                    field={field}
                    store={store}
                    hCardClass={hCardClass}
                    separator={separator}
                  />
                )}
                {Array.isArray(hCardClass) &&
                  field.map((item, idx) => {
                    return (
                      <React.Fragment key={item}>
                        {idx > 0 && store[field[idx - 1]] && store[item] && (
                          <span key={`sep_${item}`}>{separator ?? ''}</span>
                        )}
                        <span
                          title={store[item]}
                          key={`val_${item}`}
                          className={`${Array.isArray(hCardClass) ? hCardClass[idx] : hCardClass}`}
                        >
                          {store[item]}
                        </span>
                      </React.Fragment>
                    );
                  })}
              </>
            );
          }}
        </Observer>
      </div>
    </div>
  );
}

const PreviewOne = ({ field, store, separator, hCardClass }: IPreviewInputProps) => {
  return (
    <Observer>
      {() => {
        const text = field
          .map((item, idx) => {
            return store[item];
          })
          .join(separator);

        return (
          <span
            title={text}
            className={`${(hCardClass as string) ?? ''} overflow-hidden text-ellipsis whitespace-nowrap block`}
          >
            {text}
          </span>
        );
      }}
    </Observer>
  );
};
