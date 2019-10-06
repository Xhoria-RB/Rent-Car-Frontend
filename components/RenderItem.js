import React from 'react';
import map from 'lodash/map';
import {
  FormGroup, Label, Input
} from 'reactstrap';

function RenderItem({ data = {} }) {
  const TO_FILTER = ['id', 'disabled'];

  const READ_ONLY = data && data.disabled;
  return map(data, (value, key) => {
    if (TO_FILTER.includes(key)) {
      return null;
    }
    return (
      <div className="mx-1 px-1 ">
        <FormGroup>
          <Label className="text-capitalize" for={key}>{key}</Label>
          <Input defaultValue={value} type="text" name={key} id={key} readOnly={READ_ONLY} />
        </FormGroup>
      </div>
    );
  });
}

export default RenderItem;
