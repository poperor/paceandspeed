// Se: https://episyche.com/blog/how-to-use-context-api-in-a-nextjs-app
// TS: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
 
import { createContext, useState, Dispatch, SetStateAction} from "react";

type Context = {
  cannonicalKph: number;
  setCannonicalKph: Dispatch<SetStateAction<number>>
};
type Props = {
  children: React.ReactNode;
};

export const CannonicalKph = createContext({} as Context);

function Context({ children }: Props) {
  const [cannonicalKph, setCannonicalKph] = useState<number>(0);

  return (
    <CannonicalKph.Provider value = {{cannonicalKph, setCannonicalKph}}>
      {children}
    </CannonicalKph.Provider>
  );
}

export default Context;
