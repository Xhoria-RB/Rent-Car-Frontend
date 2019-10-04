import React from 'react';
import map from 'lodash/map';
import {
  FormGroup, Label, Input
} from 'reactstrap';

function RentItem({ data = {} }) {
  const TO_FILTER = ['id'];
  return (
    <div className="mx-1 px-1 ">
      {map(data, (value, key) => {
        if (TO_FILTER.includes(key)) {
          return null;
        }
        return (
          <FormGroup>
            <Label className="text-capitalize" for={key}>{key}</Label>
            <Input defaultValue={value} type="text" name={key} id={key} />
          </FormGroup>
        );
      })}
    </div>
  );
}

export default RentItem;
