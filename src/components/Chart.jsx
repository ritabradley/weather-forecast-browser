import _ from 'lodash';
import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesSpots,
  SparklinesReferenceLine
} from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default props => (
  <div>
    <Sparklines height={120} width={180} data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesSpots />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>
      {average(props.data)} {props.units}
    </div>
  </div>
);
