import Form from "../../ui/Form";

import Input from "../../ui/Input";
import { useSettings } from "./useSettings.js";
import FormRow from "../../ui/FormRow.jsx";
import styled from "styled-components";
import Spinner from "../../ui/Spinner.jsx";
import { useUpdateSetting } from "./useUpdateSetting.js";

const Label = styled.label`
  font-weight: 500;
`;

export default function UpdateSettingsForm() {
  const {
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
    isLoading,
  } = useSettings();

  const { UpdateSetting, isUpdating } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    UpdateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow>
        <Label>Minimum nights/booking</Label>
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow>
        <Label>Maximum nights/booking</Label>
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow>
        <Label>Maximum guests/booking</Label>
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow>
        <Label>Breakfast price</Label>
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}
