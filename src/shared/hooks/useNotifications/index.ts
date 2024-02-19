import { useCallback, useMemo, useState } from 'react';
import type { SnackbarKey } from 'notistack';
import { type Actions, type Notification } from './types';

export const useNotifications = function useNotifications(): [
  Notification[],
  Actions,
] {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const push = useCallback(
    (notification: Partial<Notification>) => {
      // TODO (Suren): use uuid
      const id = Math.random().toString();
      setNotifications((oldNotifications): Notification[] => [
        ...oldNotifications,
        {
          ...notification,
          message: notification.message,
          dismissed: false,
          options: {
            ...notification.options,
            key: id,
          },
        },
      ]);

      return id;
    },
    [setNotifications],
  );

  const close = useCallback(
    (key: SnackbarKey, dismissAll = !key) => {
      setNotifications((oldNotifications) =>
        oldNotifications.map((notification) =>
          dismissAll || notification.options.key === key
            ? { ...notification, dismissed: true }
            : { ...notification },
        ),
      );
    },
    [setNotifications],
  );

  const remove = useCallback(
    (key: SnackbarKey) => {
      setNotifications((oldNotifications) =>
        oldNotifications.filter(
          (notification) => notification.options.key !== key,
        ),
      );
    },
    [setNotifications],
  );

  const actions = useMemo(
    () => ({ push, close, remove }),
    [push, close, remove],
  );

  return [notifications, actions];
};

export default useNotifications;
