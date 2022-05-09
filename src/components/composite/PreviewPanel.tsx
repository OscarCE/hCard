import { Observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { StoreContext } from '../../Store';
import PreviewInput from '../base/PreviewInput';

export default function PreviewPanel() {
  const store = useContext(StoreContext);

  return (
    <div className="preview flex-1 bg-cello/[0.15] flex items-center">
      <div className="preview-container w-[431px] my-6 mx-auto flex flex-col">
        <div className="title uppercase text-submarine text-right">hCard Preview</div>
        <div className="vcard">
          <div className="header text-white bg-cello h-[100px] flex">
            <div className="flex-1 text-2xl font-Merriweather-Bold ml-6 mb-6 overflow-hidden flex items-end">
              {
                <Observer>
                  {() => {
                    const fullName = `${store.givenName} ${store.surname}`;
                    return (
                      <div
                        title={fullName}
                        className="fn overflow-hidden text-ellipsis whitespace-nowrap"
                      >
                        {fullName}
                      </div>
                    );
                  }}
                </Observer>
              }
            </div>
            <div className="avatar bg-white h-[104px] w-[84px] border my-3 mx-3.5 shadow-solid-sm shadow-gray-med/75">
              <Observer>
                {() => {
                  return store.fileImage ? (
                    <img
                      className="w-full h-full object-cover"
                      src={store.fileImage}
                      alt="Avatar image"
                    />
                  ) : (
                    <div className="defaultAvatar" />
                  );
                }}
              </Observer>
            </div>
          </div>
          <div className="details bg-white px-6 pt-9 pb-6 shadow-solid shadow-gray-med/75">
            <PreviewInput
              label="Email"
              store={store}
              field={['email']}
              hCardClass={'email'}
            />
            <PreviewInput
              label="Phone"
              store={store}
              field={['phone']}
              hCardClass={'tel'}
            />
            <div className="adr">
              <PreviewInput
                label="Address"
                store={store}
                separator=" "
                field={['houseNumber', 'street']}
                hCardClass={'street-address'}
              />
              <PreviewInput
                store={store}
                separator=", "
                field={['suburb', 'state']}
                hCardClass={['locality', 'region']}
              />
              <div className="flex flex-wrap">
                <PreviewInput
                  label="Postcode"
                  store={store}
                  field={['postcode']}
                  className="flex-1 pr-3"
                  hCardClass="postal-code"
                />
                <PreviewInput
                  label="Country"
                  className="flex-1"
                  store={store}
                  field={['country']}
                  hCardClass="country-name"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
