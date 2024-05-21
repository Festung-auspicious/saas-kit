
export interface UserProps {
    _id?: string;
    name: string;
    email: string;
    verified: boolean;
    password: string;
    hasPlan?: boolean;
    planType?: string;
  }