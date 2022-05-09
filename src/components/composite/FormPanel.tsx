import { useContext } from 'react';
import { StoreContext } from '../../Store';
import InputBox from '../base/InputBox';
import ButtonsSection from './ButtonsSection';
import FormSection from './FormSection';

export default function FormPanel() {
  const store = useContext(StoreContext);

  return (
    <div className="form flex-1 p-10">
      <div className="title font-extrabold text-lg text-dark-cyan text-[28px] font-MerriweatherSans-ExtraBold">
        hCard Builder
      </div>
      <FormSection title="Personal Details">
        <InputBox
          id="givenName"
          label="Given Name"
          type="text"
          store={store}
          field="givenName"
        />
        <InputBox
          id="surname"
          label="Surname"
          type="text"
          store={store}
          field="surname"
        />
        <InputBox
          id="email"
          label="Email"
          type="email"
          store={store}
          field="email"
        />
        <InputBox
          id="phone"
          label="Phone"
          type="text"
          store={store}
          field="phone"
        />
      </FormSection>
      <FormSection title="Address">
        <InputBox
          id="houseId"
          label="House name or #"
          type="text"
          store={store}
          field="houseNumber"
          maxLength={100}
        />
        <InputBox
          id="street"
          label="Street"
          type="text"
          store={store}
          field="street"
          maxLength={100}
        />
        <InputBox
          id="suburb"
          label="Suburb"
          type="text"
          store={store}
          field="suburb"
          maxLength={100}
        />
        <InputBox
          id="state"
          label="State"
          type="text"
          store={store}
          field="state"
          maxLength={100}
        />
        <InputBox
          id="postcode"
          label="Postcode"
          type="text"
          store={store}
          field="postcode"
          maxLength={100}
        />
        <InputBox
          id="country"
          label="Country"
          type="text"
          store={store}
          field="country"
          maxLength={100}
        />
      </FormSection>
      <ButtonsSection />
    </div>
  );
}
