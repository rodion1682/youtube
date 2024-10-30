import { createContext, Dispatch, SetStateAction } from 'react';

interface IsOpenContextType {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const IsOpenContext = createContext<IsOpenContextType | undefined>(
	undefined
);
