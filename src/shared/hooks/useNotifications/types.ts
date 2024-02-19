import type { OptionsObject, SnackbarKey, SnackbarMessage } from 'notistack';

declare module 'notistack' {
  export interface VariantOverrides {
    // define custom variants
    customNotification: {
      message?: string;
    };
  }
}

export interface Notification {
  message: SnackbarMessage;
  options: OptionsObject;
  dismissed: boolean;
}

export interface Actions {
  push: (notification: Partial<Notification>) => SnackbarKey;
  close: (key: SnackbarKey, dismissAll?: boolean) => void;
  remove: (key: SnackbarKey) => void;
}
