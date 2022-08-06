import React from 'react';
type VoidFunction = () => void;
type PromisedVoidFunction = () => Promise<void>;

export const DisappearerContext = React.createContext<
  [
    (doDisappear: PromisedVoidFunction, id: string) => void,
    [VoidFunction, string][],
    VoidFunction
  ]
>([null as any, [], null as any]);

export const DisappearProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<
    typeof DisappearerContext extends React.Context<infer T> ? T : never
  >([
    (disappear, id) => {
      setState(([addHook, hooks, removeHooks]) => {
        if (!disappear || !id) return [addHook, hooks, removeHooks];

        const alreadyIndex = hooks.findIndex(([hook, hookId]) => hookId === id);

        if (alreadyIndex !== -1) {
          hooks[alreadyIndex][0] = disappear;

          return [addHook, hooks, removeHooks];
        }

        return [addHook, hooks.concat([[disappear, id]]), removeHooks];
      });
    },
    [],
    () => {
      setState(([register, _, remove]) => [register, [], remove]);
    },
  ]);

  return (
    <DisappearerContext.Provider value={state}>
      {children}
    </DisappearerContext.Provider>
  );
};
