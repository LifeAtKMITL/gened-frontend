export interface IInputErrors {
  error:
    | {
        message: string;
        type: string;
        ref: React.ReactNode;
      }
    | any;
}
