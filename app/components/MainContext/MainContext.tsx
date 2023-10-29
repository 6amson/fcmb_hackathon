"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface MainContextTypes {
  incomingCollateralRequest: boolean;
  setIncomingCollateralRequest: Dispatch<SetStateAction<boolean>>;
  walletAmount: number;
  setWalletAmount: Dispatch<SetStateAction<number>>;
  mainPayload: {
    amount: number;
  };
  setMainPayload: Dispatch<SetStateAction<any>>;
}

interface MainContextProps {
  children: React.ReactNode;
}

export const MainContext = createContext<MainContextTypes | undefined>(
  undefined
);

export default function MainContextProvider(props: MainContextProps) {
  const [incomingCollateralRequest, setIncomingCollateralRequest] =
    useState(false);
  const [walletAmount, setWalletAmount] = useState(250000);
  const [mainPayload, setMainPayload] = useState({
    amount: 0,
  });
  return (
    <MainContext.Provider
      value={{
        incomingCollateralRequest,
        setIncomingCollateralRequest,
        mainPayload,
        setMainPayload,
        setWalletAmount,
        walletAmount,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
