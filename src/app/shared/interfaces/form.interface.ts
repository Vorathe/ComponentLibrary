export interface LongForm {
  firstname: string;
  lastname: string;
  email: string;
  address?: string;
  addresscont?: string;
  state?: Array<string>;
  zipcode?: string;
}

export interface User {
  name: string;
  address?: {
    street?: string;
    postcode?: string;
  }
}

export interface ConditionalForm {
  firstName: string;
  lastName: string;
  conditional?: {
    purple?: boolean;
    comment?: string;
    type?: Array<string>;
  }
}
