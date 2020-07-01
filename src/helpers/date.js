// @flow

import moment from 'moment';

export default {

  getBirthdateFormat(birthdate: string): string {
    return moment(birthdate).format("MMMM DD, YYYY");
  }
  
};