import React, { createContext, useState } from 'react';

type EventContextType = {
  id: string | number;
};

const EventContext = createContext<EventContextType>({
  id: '',
});
const SetEventContext = createContext<any>({});

const EventProvider = ({ children }: any) => {
  const [context, setContext] = useState<EventContextType>({
    id: '',
  });

  return (
    <EventContext.Provider value={context}>
      <SetEventContext.Provider value={setContext}>
        {children}
      </SetEventContext.Provider>
    </EventContext.Provider>
  );
};

export { EventContext, SetEventContext, EventProvider };
